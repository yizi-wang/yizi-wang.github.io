import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const browser = await chromium.launch({
    executablePath: "/usr/bin/chromium",
    headless: true,
    args: ["--no-sandbox"],
  }),
  page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  }),
  results = [],
  errors = [];
const base = process.env.STATVERSE_BASE_URL || "http://127.0.0.1:4174";
page.setDefaultTimeout(6000);
page.on("pageerror", (e) => errors.push(String(e)));
page.on("response", (r) => {
  if (r.url().startsWith(base) && r.status() >= 400)
    errors.push(`${r.status()} ${r.url()}`);
});
const $ = (s) => page.locator(s),
  snap = () => page.evaluate(() => window.STATVERSE.getSnapshot()),
  choose = async (v) => {
    if (await $("#lab-switch").isVisible())
      await $("#lab-switch").selectOption(v);
    else await $(`[data-lab="${v}"]`).click();
  },
  change = async (s, v) => {
    await $(s).fill(String(v));
    await $(s).dispatchEvent("change");
  },
  near = (a, b, t = 1e-9) => assert.ok(Math.abs(a - b) < t, `${a} vs ${b}`);
async function test(name, fn) {
  const start = Date.now();
  try {
    await fn();
    results.push({ name, status: "PASS", ms: Date.now() - start });
  } catch (e) {
    results.push({
      name,
      status: "FAIL",
      ms: Date.now() - start,
      error: String(e),
    });
    console.log(name, String(e));
  }
}
await page.goto(base);
await test("S4-01 GOF null changes retain observed portal counts; distinct contexts and examples are explicit", async () => {
  const q = await browser.newPage();
  q.setDefaultTimeout(6000);
  await q.goto(base);
  await q.locator("[data-lab=chisquare]").click();
  await q.locator("#chi-mode").selectOption("gof");
  await q.locator("[data-chi-count]").first().fill("17");
  await q.locator("#chi-reveal").click();
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result
      .total,
    49,
  );
  await q.locator("#chi-model").selectOption("specified");
  await q.locator("#chi-reveal").click();
  let s = (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare;
  assert.deepEqual(s.result.grouped, [17, 9, 10, 13]);
  assert.equal(s.result.total, 49);
  for (const [i, e] of [4.9, 9.8, 14.7, 19.6].entries())
    near(s.result.expected[i], e, 1e-10);
  assert.equal(s.result.pValue, null);
  assert.equal(s.result.reject, null);
  assert.match(
    await q.locator("#chi-data-note").textContent(),
    /same original observations/,
  );
  await q.locator("#chi-model").selectOption("uniform");
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result
      .total,
    49,
  );
  await q.locator("#chi-model").selectOption("binomial3");
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result
      .total,
    100,
  );
  assert.match(
    await q.locator("#chi-data-note").textContent(),
    /Changed data context/,
  );
  await q.locator("#chi-model").selectOption("specified");
  assert.deepEqual(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result
      .grouped,
    [17, 9, 10, 13],
  );
  await q.locator("[data-chi-count]").first().fill("");
  await q.locator("#chi-model").selectOption("uniform");
  assert.equal(await q.locator("[data-chi-count]").first().inputValue(), "");
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result,
    null,
  );
  await q.locator("[data-chi-count]").first().fill("17");
  await q.locator("#chi-model").selectOption("specified");
  await q.locator("#chi-load-example").click();
  assert.deepEqual(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result
      .grouped,
    [12, 18, 30, 40],
  );
  assert.match(
    await q.locator("#chi-data-note").textContent(),
    /explicitly loaded/,
  );
  await q.close();
});
await test("fitted-plus-pooled GOF withholds unsupported calibration in either operation order", async () => {
  const q = await browser.newPage();
  q.setDefaultTimeout(6000);
  await q.goto(base);
  await q.locator("[data-lab=chisquare]").click();
  await q.locator("#chi-mode").selectOption("gof");
  await q.locator("#chi-model").selectOption("binomial3");
  for (const [i, v] of [7263, 2491, 238, 8].entries())
    await q.locator("[data-chi-count]").nth(i).fill(String(v));
  await q.locator("#chi-fit").check();
  let s = (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare
    .result;
  near(s.pValue, 0.0544302, 1e-7);
  assert.equal(s.df, 2);
  await q.locator("#chi-merge-choice").selectOption("0");
  await q.locator("#chi-merge-confirm").check();
  await q.locator("#chi-merge").click();
  await q.locator("#chi-reveal").click();
  s = (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result;
  near(s.parameter, 0.0997, 1e-12);
  near(s.statistic, 3.9346774144922705, 1e-9);
  assert.deepEqual(s.grouped, [9754, 238, 8]);
  assert.equal(s.smallExpectedCount, 0);
  assert.equal(s.status, "unsupported-fitted-pooling-calibration");
  assert.equal(s.approximationAppropriate, false);
  assert.equal(s.pValue, null);
  assert.equal(s.reject, null);
  assert.equal(s.referenceDf, null);
  assert.match(
    await q.locator("#chi-metrics").textContent(),
    /Not calibrated.*Withheld/,
  );
  assert.match(
    await q.locator("#chi-validity").textContent(),
    /Calibration unsupported/,
  );
  await q.locator("#chi-unpool").click();
  s = (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result;
  assert.equal(s.df, 2);
  near(s.pValue, 0.0544302, 1e-7);
  await q.locator("#chi-fit").uncheck();
  await q.locator("#chi-p").fill(".1");
  await q.locator("#chi-p").dispatchEvent("change");
  await q.locator("#chi-merge-choice").selectOption("0");
  await q.locator("#chi-merge-confirm").check();
  await q.locator("#chi-merge").click();
  s = (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result;
  assert.equal(s.referenceDistributionSupported, true);
  assert.ok(s.pValue !== null);
  await q.locator("#chi-fit").check();
  s = (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result;
  assert.equal(s.status, "unsupported-fitted-pooling-calibration");
  assert.equal(s.pValue, null);
  await q.locator("#chi-merge-choice").selectOption("0");
  await q.locator("#chi-merge-confirm").check();
  await q.locator("#chi-merge").click();
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).chiSquare.result,
    null,
  );
  assert.match(await q.locator("#chi-error").textContent(), /df.*≤0/);
  await q.close();
});
await test("F default finite frame preserves twelve identities and no replacement within one sample", async () => {
  await choose("design");
  assert.equal(await $(".finite-unit").count(), 12);
  assert.match(await $("#design-rule").textContent(), /Every eligible subset/);
  await $("#design-draw").click();
  const s = (await snap()).samplingDesign,
    r = s.records[0];
  assert.equal(r.selectedIds.length, 6);
  assert.equal(new Set(r.selectedIds).size, 6);
  assert.equal(r.replacement, false);
  assert.equal(await $(".finite-unit.included").count(), 6);
  near(s.summary.mean, 275 / 6);
  near(s.result.variance, 22625 / 396);
  near(s.result.standardError, Math.sqrt(22625 / 396));
  assert.match(await $("#design-se-formula").textContent(), /N−1/);
});
await test("F seed reset and recalled point retain original IDs and values without consuming the next draw", async () => {
  const first = (await snap()).samplingDesign.records[0];
  await $("#design-reset").click();
  await $("#design-draw").click();
  assert.deepEqual((await snap()).samplingDesign.records[0], first);
  await $("#design-draw").click();
  const r = (await snap()).samplingDesign.records;
  await $('[data-design-case="0"]').click();
  assert.equal((await snap()).samplingDesign.selected, 0);
  assert.deepEqual((await snap()).samplingDesign.records, r);
  await $("#design-case").fill("2");
  await $("#design-case").dispatchEvent("change");
  assert.equal((await snap()).samplingDesign.selected, 1);
  await $('[data-design-unit="A01"]').focus();
  await page.keyboard.press("Enter");
  assert.match(await $("#design-unit-detail").textContent(), /Unit A01/);
  assert.deepEqual((await snap()).samplingDesign.records, r);
});
await test("F stratified n5 uses population weights, not rounded sample proportions", async () => {
  await $("#design-method").selectOption("stratified");
  await change("#design-n", 5);
  await $("#design-draw").click();
  const s = (await snap()).samplingDesign,
    r = s.records[0];
  assert.deepEqual(
    s.result.allocations.map((a) => a.quota),
    [2, 2, 1],
  );
  assert.deepEqual(
    s.result.allocations.map((a) => a.weight),
    [0.5, 1 / 3, 1 / 6],
  );
  near(r.sampleMean, 47);
  near(r.estimate, 515 / 12);
  near(r.standardError, Math.sqrt(1985 / 108));
  near(s.result.expectedMean, 275 / 6);
  assert.notEqual(r.sampleMean, r.estimate);
  assert.match(await $("#design-weights").textContent(), /0.5/);
  assert.match(await $("#design-weights").textContent(), /0.4/);
});
await test("F missing stratum never becomes a zero or raw-mean target estimate", async () => {
  await change("#design-n", 3);
  await $("#design-draw").click();
  const s = (await snap()).samplingDesign,
    r = s.records[0];
  assert.equal(s.result.status, "unrepresented-stratum");
  assert.deepEqual(s.result.unrepresentedStrata, ["Violet"]);
  assert.equal(r.estimate, null);
  assert.equal(r.error, null);
  assert.equal(r.standardError, null);
  assert.equal(r.probabilitySample, false);
  assert.ok(Number.isFinite(r.sampleMean));
  assert.match(await $("#design-estimate").textContent(), /Unavailable/);
  assert.match(
    await $("#design-meaning").textContent(),
    /No missing mean is filled with0/,
  );
  assert.equal(await $(".design-dot").count(), 0);
  assert.ok(await $("#design-run").isDisabled());
  await $("[data-design-predict=no]").click();
  assert.match(
    await $("#design-predict-feedback").textContent(),
    /No full-target estimate/,
  );
});
await test("F systematic ordering changes exact variance while preserving units and design expectation", async () => {
  await $("#design-method").selectOption("systematic");
  await change("#design-n", 6);
  let s = (await snap()).samplingDesign;
  near(s.result.variance, 100);
  assert.deepEqual(
    s.result.possibleStarts.map((x) => x.mean),
    [215 / 6, 335 / 6],
  );
  near(s.result.expectedMean, 275 / 6);
  const units = s.population
    .map((u) => [u.id, u.value, u.accessibility])
    .sort();
  await $("#design-order").selectOption("balanced");
  s = (await snap()).samplingDesign;
  assert.deepEqual(
    s.population.map((u) => [u.id, u.value, u.accessibility]).sort(),
    units,
  );
  assert.equal(s.result.variance, 0);
  assert.equal(s.result.designUnbiased, true);
  await $("#design-draw").click();
  near((await snap()).samplingDesign.records[0].estimate, 275 / 6);
  assert.equal((await snap()).samplingDesign.records[0].standardError, 0);
  assert.match(await $("#design-starts").textContent(), /probability1\/2/);
  await change("#design-n", 5);
  assert.ok(await $("#design-draw").isDisabled());
  assert.match(await $("#design-status").textContent(), /divisible/);
  assert.equal((await snap()).samplingDesign.records.length, 0);
});
await test("F quota is one explicit deterministic mechanism with error -10, +10 or zero, no probability SE", async () => {
  await $("#design-order").selectOption("periodic");
  await change("#design-n", 6);
  await $("#design-method").selectOption("quota");
  await $("#design-draw").click();
  let s = (await snap()).samplingDesign;
  near(s.records[0].error, -10);
  assert.equal(s.records[0].standardError, null);
  assert.equal(s.records[0].randomized, false);
  assert.equal(s.records[0].probabilitySample, false);
  assert.ok(await $("#design-run").isDisabled());
  assert.ok(await $("#design-seed").isDisabled());
  const ids = s.records[0].selectedIds;
  await $("#design-draw").click();
  assert.equal((await snap()).samplingDesign.records.length, 1);
  assert.deepEqual((await snap()).samplingDesign.records[0].selectedIds, ids);
  await $("#design-ranking").selectOption("reverse");
  await $("#design-draw").click();
  near((await snap()).samplingDesign.records[0].error, 10);
  await $("#design-values").selectOption("constant");
  await $("#design-draw").click();
  near((await snap()).samplingDesign.records[0].error, 0);
  assert.equal((await snap()).samplingDesign.records[0].standardError, null);
  assert.match(
    await $("#design-chart").textContent(),
    /No probability sampling distribution/,
  );
  await $("#design-method").selectOption("systematic");
  await $("[data-design-predict=no]").click();
  assert.match(
    await $("#design-predict-feedback").textContent(),
    /same spread/,
  );
});
await test("F accessibility ranks do not change probability selection at the same design seed", async () => {
  await $("#design-values").selectOption("original");
  await $("#design-ranking").selectOption("given");
  await $("#design-method").selectOption("srs");
  await $("#design-draw").click();
  const a = (await snap()).samplingDesign;
  await $("#design-ranking").selectOption("reverse");
  await $("#design-draw").click();
  const b = (await snap()).samplingDesign;
  assert.deepEqual(a.records[0].selectedIds, b.records[0].selectedIds);
  assert.equal(a.result.standardError, b.result.standardError);
  assert.equal(a.summary.mean, b.summary.mean);
});
await test("F census has every ID, estimate mu and exact zero design spread for the three probability designs", async () => {
  await change("#design-n", 12);
  for (const m of ["srs", "stratified", "systematic"]) {
    await $("#design-method").selectOption(m);
    await $("#design-draw").click();
    const s = (await snap()).samplingDesign,
      r = s.records[0];
    assert.equal(r.selectedIds.length, 12);
    assert.equal(r.estimate, s.summary.mean);
    assert.equal(r.error, 0);
    assert.equal(r.standardError, 0);
  }
  await change("#design-n", 1);
  await $("#design-method").selectOption("srs");
  near((await snap()).samplingDesign.result.variance, 22625 / 36);
});
await test("F empirical frequencies are separate from case dots and theoretical spread does not depend on R", async () => {
  await change("#design-n", 6);
  const se = (await snap()).samplingDesign.result.standardError;
  await $("#design-run").click();
  await page.waitForFunction(
    () =>
      window.STATVERSE.getSnapshot().samplingDesign.records.length === 100 &&
      !window.STATVERSE.getSnapshot().samplingDesign.running,
  );
  assert.equal((await snap()).samplingDesign.result.standardError, se);
  const hist = await $(".design-bin").evaluateAll((es) => ({
    count: es.reduce((s, e) => s + Number(e.dataset.count), 0),
    p: es.reduce((s, e) => s + Number(e.dataset.proportion), 0),
  }));
  assert.equal(hist.count, 100);
  near(hist.p, 1, 1e-12);
  assert.equal(await $(".design-dot").count(), 100);
  assert.match(await $("#design-empirical").textContent(), /not probability/);
  assert.match(await $("#design-empirical").textContent(), /need not equal/);
});
await test("F hidden truth and worked answers do not redraw or reseed the finite population", async () => {
  const a = (await snap()).samplingDesign;
  await $("#design-hide").check();
  assert.match(await $("#design-mu").textContent(), /Concealed/);
  assert.doesNotMatch(await $("#design-chart").textContent(), /fixed μ/);
  assert.deepEqual((await snap()).samplingDesign.records, a.records);
  assert.deepEqual((await snap()).samplingDesign.population, a.population);
  await $("#design-hide").uncheck();
  await $("#teacher").click();
  await $("#hide-worked").check();
  await $("[data-design-predict=no]").click();
  assert.match(await $("#design-predict-feedback").textContent(), /concealed/);
  assert.equal(await $("#design-estimate").isVisible(), false);
  assert.equal(await $("#design-chart").isVisible(), false);
  assert.deepEqual((await snap()).samplingDesign.records, a.records);
  await $("#hide-worked").uncheck();
  await $("#teacher").click();
});
await test("F batch pause/manual/resume respects1000 capacity and parameter changes cancel pending updates", async () => {
  const q = await browser.newPage({ reducedMotion: "reduce" });
  q.setDefaultTimeout(6000);
  await q.goto(base);
  await q.locator("[data-lab=design]").click();
  const out = await q.evaluate(() => {
    const queue = [];
    window.requestAnimationFrame = (f) => {
      queue.push(f);
      return queue.length;
    };
    const flush = () => {
      let i = 0;
      while (queue.length) {
        queue.shift()();
        if (++i > 2000) throw Error("loop");
      }
    };
    const run = document.querySelector("#design-run");
    for (let i = 0; i < 9; i++) {
      run.click();
      flush();
    }
    run.click();
    for (let i = 0; i < 19; i++) queue.shift()();
    document.querySelector("#design-pause").click();
    const paused = window.STATVERSE.getSnapshot().samplingDesign.records.length;
    document.querySelector("#design-draw").click();
    run.click();
    flush();
    const final = window.STATVERSE.getSnapshot().samplingDesign;
    return {
      paused,
      final: final.records.length,
      remaining: final.remaining,
      disabled: run.disabled,
    };
  });
  assert.deepEqual(out, {
    paused: 995,
    final: 1000,
    remaining: 0,
    disabled: true,
  });
  await q.locator("#design-reset").click();
  await q.locator("#design-run").click();
  await q.locator("#design-n").fill("5");
  await q.locator("#design-n").dispatchEvent("change");
  await q.waitForTimeout(80);
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).samplingDesign
      .records.length,
    0,
  );
  await q.close();
});
await test("F invalid n values do not leave old samples/estimates or a drawing action enabled", async () => {
  for (const n of ["", "0", "1.5", "13"]) {
    await change("#design-n", n);
    assert.ok(await $("#design-draw").isDisabled());
    assert.equal((await snap()).samplingDesign.records.length, 0);
    assert.equal(await $(".design-dot").count(), 0);
  }
  await change("#design-n", 6);
  assert.equal(await $("#design-draw").isDisabled(), false);
});
await test("Normal combination default and sign flip match independent mean/variance oracle", async () => {
  await choose("normal");
  let s = (await snap()).normalCombination;
  near(s.result.mean, 11);
  near(s.result.variance, 97);
  near(s.result.sd, Math.sqrt(97));
  assert.equal(await $(".normal-density").count(), 1);
  await $("[data-normal-predict=no]").click();
  await $("#normal-flip").click();
  s = (await snap()).normalCombination;
  near(s.result.mean, 29);
  near(s.result.variance, 97);
  near(s.reference.result.mean, 11);
  assert.equal(await $(".normal-density").count(), 2);
  assert.match(
    await $("#normal-comparison").textContent(),
    /Before: mean=11.*After: mean=29/,
  );
  await $("#normal-reset").click();
});
await test("Normal tool rejects undeclared conditions and repeated variable IDs; equal parameters with distinct IDs remain valid", async () => {
  await $("#normal-independent").uncheck();
  assert.equal((await snap()).normalCombination.result, null);
  assert.equal(await $("#normal-chart").textContent(), "");
  assert.match(await $("#normal-error").textContent(), /Independence/);
  await $("#normal-independent").check();
  await $("#normal-normal").uncheck();
  assert.equal((await snap()).normalCombination.result, null);
  assert.match(
    await $("#normal-error").textContent(),
    /Normal-distribution claim/,
  );
  await $("#normal-normal").check();
  await $("#normal-id-y").fill("X");
  assert.equal((await snap()).normalCombination.result, null);
  assert.match(await $("#normal-error").textContent(), /repeated variable/);
  await $("#normal-id-y").fill("Y");
  await $("#normal-a").fill("1");
  await $("#normal-b").fill("-1");
  await $("#normal-mu-y").fill("10");
  await $("#normal-var-y").fill("4");
  near((await snap()).normalCombination.result.mean, 0);
  near((await snap()).normalCombination.result.variance, 8);
  await $("#normal-reset").click();
});
await test("Normal zero variance is a point mass, tiny positive variance stays Normal, invalid ranges clear output", async () => {
  await $("#normal-var-x").fill("0");
  await $("#normal-var-y").fill("0");
  let s = (await snap()).normalCombination;
  assert.equal(s.result.distribution, "point-mass");
  assert.equal(s.result.variance, 0);
  assert.equal(await $(".normal-point-mass").count(), 1);
  assert.equal(await $(".normal-density").count(), 0);
  assert.match(await $("#normal-distribution").textContent(), /probability1/);
  await $("#normal-a").fill("1");
  await $("#normal-mu-x").fill("50");
  await $("#normal-b").fill("0");
  await $("#normal-var-x").fill("1e-300");
  s = (await snap()).normalCombination;
  assert.equal(s.result.distribution, "normal");
  assert.ok(s.result.variance > 0);
  assert.match(await $("#normal-variance").textContent(), /e-300/);
  assert.match(
    await $("#normal-distribution").textContent(),
    /coordinate resolution/,
  );
  assert.doesNotMatch(await $("#normal-chart").innerHTML(), /NaN|Infinity/);
  await $("#normal-var-x").fill("-1");
  assert.equal((await snap()).normalCombination.result, null);
  assert.ok(await $("#normal-flip").isDisabled());
  await $("#normal-reset").click();
});
await test("Normal IDs are text, and worked hiding preserves parameters while concealing computed shape", async () => {
  await $("#normal-id-x").fill("<img src=x>");
  assert.equal(await $("#normal-contributions img").count(), 0);
  assert.match(await $("#normal-rule").textContent(), /<img src=x>/);
  await $("#normal-reset").click();
  const s = (await snap()).normalCombination;
  await $("#teacher").click();
  await $("#hide-worked").check();
  assert.equal(await $("#normal-mean").isVisible(), false);
  assert.equal(await $(".normal-density").count(), 0);
  assert.match(await $("#normal-chart").textContent(), /concealed/);
  assert.deepEqual((await snap()).normalCombination.result, s.result);
  await $("[data-normal-answer=no]").click();
  assert.match(await $("#normal-transfer-feedback").textContent(), /concealed/);
  await $("#hide-worked").uncheck();
  await $("#teacher").click();
});
await test("nine-lab navigation, phone layouts and focused Teacher views retain the mathematical objects", async () => {
  for (const [w, h] of [
    [390, 844],
    [1440, 900],
    [1920, 1080],
  ]) {
    await page.setViewportSize({ width: w, height: h });
    if (w === 1920) await $("#teacher").click();
    for (const lab of ["design", "normal"]) {
      await choose(lab);
      if (lab === "design") {
        await $("#design-method").selectOption("srs");
        await change("#design-n", 6);
        await $("#design-reset").click();
        await $("#design-draw").click();
        if (w === 1920) await $("#design-view").selectOption("sample");
      } else {
        await $("#normal-reset").click();
        if (w === 1920) await $("#normal-view").selectOption("result");
      }
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );
      await page.evaluate(() => {
        document.activeElement?.blur();
        scrollTo(0, 0);
      });
      await page.screenshot({
        path: `evidence/stage5-${lab}-${w}.png`,
        fullPage: w !== 1920,
      });
      if (w === 1920) {
        const box = await $(
          lab === "design"
            ? "[data-design-stage=sample]"
            : "#normal-comparison",
        ).boundingBox();
        assert.ok(
          box && box.y + box.height <= 1080,
          JSON.stringify({ lab, box }),
        );
        if (lab === "design") {
          await $("#design-view").selectOption("all");
          await $("#design-method").selectOption("stratified");
          await change("#design-n", 5);
          await $("#design-draw").click();
          await $("#design-view").selectOption("sample");
          const weighted = await $("[data-design-stage=sample]").boundingBox();
          assert.ok(
            weighted && weighted.y + weighted.height <= 1080,
            JSON.stringify({ weighted }),
          );
          await page.screenshot({
            path: "evidence/stage5-stratified-teacher.png",
            fullPage: false,
          });
          await $("#design-view").selectOption("all");
          await $("#design-method").selectOption("systematic");
          await change("#design-n", 6);
          await $("#design-draw").click();
          await $("#design-view").selectOption("distribution");
          const systematic = await $(
            "[data-design-stage=distribution]",
          ).boundingBox();
          assert.ok(
            systematic && systematic.y + systematic.height <= 1080,
            JSON.stringify({ systematic }),
          );
          await page.screenshot({
            path: "evidence/stage5-systematic-teacher.png",
            fullPage: false,
          });
          await $("#design-view").selectOption("all");
        } else await $("#normal-view").selectOption("all");
      }
    }
    if (w === 1920) await $("#teacher").click();
  }
});
await test("F Teacher sample tracing reveals a correctly sized distribution without changing the selected units", async () => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  if ((await $("#teacher").getAttribute("aria-pressed")) === "true")
    await $("#teacher").click();
  await choose("design");
  await $("#design-method").selectOption("srs");
  await change("#design-n", 6);
  await $("#design-reset").click();
  await $("#design-draw").click();
  await $("#teacher").click();
  await $("#design-view").selectOption("sample");
  const before = (await snap()).samplingDesign;
  await $("#design-trace").click();
  assert.equal(await $("#design-view").inputValue(), "distribution");
  assert.equal(await $("#design-chart").isVisible(), true);
  assert.deepEqual((await snap()).samplingDesign.records, before.records);
  const box = await $("#design-chart svg").boundingBox();
  assert.ok(box && box.height < 350, JSON.stringify(box));
  assert.equal(
    await $('[data-design-case="0"]').evaluate(
      (e) => e === document.activeElement,
    ),
    true,
  );
  await $("#design-view").selectOption("sample");
  await $("#hide-worked").check();
  await $("#design-trace").click();
  assert.equal(await $("#design-chart").isVisible(), false);
  assert.deepEqual((await snap()).samplingDesign.records, before.records);
  await $("#hide-worked").uncheck();
  await $("#design-view").selectOption("all");
  await $("#teacher").click();
});
await test("no runtime errors or missing static source modules", async () =>
  assert.deepEqual(errors, []));
await fs.writeFile(
  "evidence/browser-stage5-results.json",
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      baseUrl: base,
      browser: await browser.version(),
      evidenceType:
        "Developer actual built-output Chromium regression, not independent review or real students",
      results,
      errors,
    },
    null,
    2,
  ),
);
console.log(JSON.stringify(results, null, 2));
await browser.close();
if (results.some((r) => r.status === "FAIL")) process.exitCode = 1;
