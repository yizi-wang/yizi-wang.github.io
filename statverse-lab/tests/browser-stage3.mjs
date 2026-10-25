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
  errors = [],
  results = [];
page.on("pageerror", (e) => errors.push(String(e)));
const base = process.env.STATVERSE_BASE_URL || "http://127.0.0.1:4173";
await page.goto(base);
const $ = (s) => page.locator(s),
  snap = () => page.evaluate(() => window.STATVERSE.getSnapshot()),
  choose = (v) => $('[data-lab="' + v + '"]').click();
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
await test("VP02 two concrete draws precede n/spread prediction and preserve one-group mapping", async () => {
  assert.equal(await $("#n").inputValue(), "3");
  assert.match(await $("#predict-question").textContent(), /ONE saved dot/);
  await $('[data-prediction="sample"]').click();
  await $("#quick-draw").click();
  assert.equal((await snap()).samples.length, 1);
  assert.equal(await $(".dot").count(), 1);
  assert.match(await $("#chain-estimate").textContent(), /16.667/);
  assert.match(await $("#predict-question").textContent(), /another group/);
  await $("#draw").click();
  assert.match(
    await $("#predict-question").textContent(),
    /spread of sample means/,
  );
  await $("#sample-picker").fill("1");
  await $("#sample-picker").dispatchEvent("change");
  assert.equal(
    await $("#chain-estimate").textContent(),
    await $("#observed").textContent(),
  );
});
await test("VP01 frequency belongs to bars; sample dots have a distinct non-probability strip", async () => {
  await $("#reset").click();
  await $("#draw").click();
  const r = await page.evaluate(() => {
    const chart = document.querySelector("#distribution-chart"),
      bars = [...chart.querySelectorAll(".empirical-bin")],
      dots = [...chart.querySelectorAll(".dot")];
    return {
      counts: bars.reduce((s, b) => s + Number(b.dataset.count), 0),
      proportions: bars.map((b) => Number(b.dataset.proportion)),
      dotY: dots.map((d) => Number(d.getAttribute("cy"))),
      maxTick: Math.max(
        ...[...chart.querySelectorAll("text")].map((t) =>
          /^\d+%$/.test(t.textContent) ? parseFloat(t.textContent) : 0,
        ),
      ),
      text: chart.textContent,
    };
  });
  assert.equal(r.counts, 1);
  assert.deepEqual(r.proportions, [1]);
  assert.ok(r.dotY.every((y) => y > 128));
  assert.ok(r.maxTick <= 100);
  assert.match(r.text, /not probability/);
  await $("#draw").click();
  const total = await page
    .locator(".empirical-bin")
    .evaluateAll((es) =>
      es.reduce((s, e) => s + Number(e.dataset.proportion), 0),
    );
  assert.ok(Math.abs(total - 1) < 1e-12);
});
await test("S2-01 worked hiding covers SE feedback, live region, plot and semantic chain without RNG/data change", async () => {
  await $("#teacher").click();
  await $("#n").fill("5");
  await $('[data-prediction="narrower"]').click();
  await $("#hide-worked").check();
  await $("#n").fill("12");
  assert.doesNotMatch(
    await $("#predict-feedback").textContent(),
    /2\.781|1\.795|Observed theory/,
  );
  await $("#draw").click();
  const a = await snap();
  assert.match(await $("#chain-estimate").textContent(), /Concealed/);
  assert.equal(await $("#distribution-chart").isVisible(), false);
  assert.doesNotMatch(await $("#live").textContent(), /Observed sample mean:/);
  await $("#hide-worked").uncheck();
  assert.deepEqual((await snap()).samples, a.samples);
  assert.equal(await $("#distribution-chart").isVisible(), true);
  await $("#teacher").click();
});
await test("S2-02 invalid n1 variance clears exact rows, page and expectation rather than hiding old cases", async () => {
  await $("#n").fill("2");
  await $("#estimator").selectOption("variance");
  await $("#exact").check();
  await $("#exact-inspector summary").click();
  assert.equal(await $("#exact-inspector tbody tr").count(), 10);
  await $("#n").fill("1");
  assert.equal(await $("#exact").isChecked(), false);
  assert.equal(await $("#exact-inspector tbody tr").count(), 0);
  assert.equal(await $("#exact-inspector").textContent(), "");
  assert.equal(await $("#exact-inspector").isVisible(), false);
  assert.match(await $("#distribution-chart").textContent(), /n ≥ 2/);
});
await test("S2-04 and VP05 CI nominal copy and transfer remain confidence-specific, without bias card", async () => {
  await choose("coverage");
  await $("#n").fill("3");
  await $("#draw").click();
  await $("#confidence").selectOption("0.99");
  assert.match(await $("#insight-body").textContent(), /99%/);
  assert.doesNotMatch(await $("#insight-body").textContent(), /95%/);
  assert.equal(await $(".discovery-stat").isVisible(), false);
  assert.match(
    await $("#challenge-question").textContent(),
    /already computed.*99%/,
  );
  await $('[data-answer="no"]').click();
  assert.match(await $("#challenge-feedback").textContent(), /fixed|nominal/);
  await $('[data-ci-exact="no"]').click();
  assert.match(await $("#ci-exact-feedback").textContent(), /fluctuates/);
  assert.match(await $("#predict-question").textContent(), /stays fixed/);
});
await test("S2-03 correlation editor preserves exact x when only y changes", async () => {
  await choose("correlation");
  await $("#cor-x").fill("12345.67");
  await $("#cor-y").fill("3");
  await $("#cor-apply").click();
  assert.equal(await $("#cor-x").inputValue(), "12345.67");
  await $("#cor-y").fill("4");
  await $("#cor-apply").click();
  assert.deepEqual((await snap()).correlation.points[0], [12345.67, 4]);
});
await test("S2-01 hiding removes regression and prediction geometry while retaining raw paired data", async () => {
  await $("#cor-preset").selectOption("linear");
  await $("#teacher").click();
  const a = (await snap()).correlation.points;
  assert.equal(await $("[data-worked-regression]").count(), 3);
  await $("#hide-worked").check();
  assert.equal(await $("[data-worked-regression]").count(), 0);
  assert.deepEqual((await snap()).correlation.points, a);
  assert.equal(await $("#cor-r").isVisible(), false);
  await $("#hide-worked").uncheck();
  assert.equal(await $("[data-worked-regression]").count(), 3);
  await $("#teacher").click();
});
await test("official table direction, rounded rank boundary, dashes and ties are gated correctly", async () => {
  await $("#cor-preset").selectOption("boundary");
  await $("#cor-table-method").selectOption("spearman");
  await $("#cor-table-tail").selectOption("greater");
  await $("#cor-table-assumptions").check();
  assert.match(await $("#cor-table-decision").textContent(), /Reject H₀/);
  assert.match(await $("#cor-table-reference").textContent(), /0.8286/);
  await $("#cor-table-tail").selectOption("two-sided");
  assert.match(await $("#cor-table-decision").textContent(), /Do not reject/);
  await $("#cor-preset").selectOption("four");
  assert.match(await $("#cor-table-decision").textContent(), /dash/);
  await $("#cor-table-tail").selectOption("greater");
  assert.match(await $("#cor-table-decision").textContent(), /Reject H₀/);
  await $("#cor-preset").selectOption("ties");
  assert.match(
    await $("#cor-table-decision").textContent(),
    /Ties:.*unavailable/,
  );
  await $("#cor-preset").selectOption("rank10");
  await $("#cor-table-tail").selectOption("two-sided");
  await $("#cor-table-alpha").selectOption("0.01");
  assert.match(
    await $("#cor-table-decision").textContent(),
    /no official column/,
  );
});
await test("known-sigma one and two mean z UI match independent numeric oracles", async () => {
  await choose("mean");
  await $("#mean-reveal").click();
  assert.equal(await $("#mean-z").textContent(), "-2");
  assert.ok(
    Math.abs(Number(await $("#mean-p").textContent()) - 0.0455002638963584) <
      1e-6,
  );
  await $("#mean-design").selectOption("two");
  await $("#mean-reveal").click();
  assert.ok(
    Math.abs(Number(await $("#mean-z").textContent()) - 1.0606601717798212) <
      0.001,
  );
  assert.match(await $("#mean-ci").textContent(), /two-sided/);
  await $("#mean-tail").selectOption("greater");
  await $("#mean-reveal").click();
  assert.match(
    await $("#mean-ci").textContent(),
    /one-sided.*not its matching/,
  );
});
await test("estimated variance requires explicit large-sample assumption; paired design is not silently tested", async () => {
  await $("#mean-model").selectOption("large-estimated");
  assert.equal(await $("#mean-reveal").isDisabled(), true);
  assert.match(await $("#mean-error").textContent(), /large-sample/);
  await $("#mean-large").check();
  assert.equal(await $("#mean-reveal").isDisabled(), false);
  await $("#mean-reveal").click();
  assert.match(await $("#mean-method-badge").textContent(), /APPROXIMATION/);
  await $("#mean-independent").uncheck();
  assert.equal(await $("#mean-reveal").isDisabled(), true);
  assert.match(await $("#mean-error").textContent(), /paired\/dependent/);
  await $("#mean-independent").check();
});
await test("new mean module hidden answers preserve reference state and conceal computed geometry", async () => {
  await $("#teacher").click();
  await $("#hide-worked").check();
  const a = await snap();
  assert.equal(await $("#mean-z").isVisible(), false);
  await $("#hide-worked").uncheck();
  assert.deepEqual(
    (await snap()).meanInference.records,
    a.meanInference.records,
  );
  await $("#teacher").click();
});
await test("desktop/mobile/teacher navigation and layouts include mean module without overflow", async () => {
  for (const [w, h] of [
    [390, 844],
    [1440, 900],
    [1920, 1080],
  ]) {
    await page.setViewportSize({ width: w, height: h });
    if (w === 1920) await $("#teacher").click();
    if (w === 1440) await choose("mean");
    else await $("#lab-switch").selectOption("mean");
    assert.equal(await $("#sampling-workspace").isVisible(), false);
    assert.equal(await $("#correlation-workspace").isVisible(), false);
    assert.equal(await $("#mean-workspace").isVisible(), true);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    await page.evaluate(() => {
      document.activeElement?.blur();
      window.scrollTo(0, 0);
    });
    await page.screenshot({
      path: `evidence/stage3-mean-${w}.png`,
      fullPage: w !== 1920,
    });
    if (w === 1920) await $("#teacher").click();
  }
});
await test("teacher stages retain the semantic chain and essential distribution within 1080 pixels", async () => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await choose("sampling");
  await $("#teacher").click();
  await $("#estimator").selectOption("mean");
  await $("#n").fill("3");
  await $("#draw").click();
  for (const stage of ["predict", "population", "sample", "distribution"]) {
    await $("#teacher-stage").selectOption(stage);
    await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0,0); });
    assert.equal(await $("#semantic-chain").isVisible(), stage !== "predict");
    if (stage === "distribution") {
      const box = await $(".distribution-metrics").boundingBox();
      assert.ok(box && box.y + box.height <= 1080, JSON.stringify(box));
    }
    await page.screenshot({path:`evidence/stage3-teacher-${stage}.png`,fullPage:false});
  }
  await $("#teacher-stage").selectOption("all");
  await $("#teacher").click();
});
await test("no runtime errors in source or static build", async () =>
  assert.deepEqual(errors, []));
await fs.writeFile(
  "evidence/browser-stage3-results.json",
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      baseUrl: base,
      browser: await browser.version(),
      evidenceType:
        "Developer actual browser regression, not independent review or real student observation",
      results,
      errors,
    },
    null,
    2,
  ),
);
console.log(JSON.stringify(results, null, 2));
await browser.close();
if (results.some((x) => x.status === "FAIL")) process.exitCode = 1;
