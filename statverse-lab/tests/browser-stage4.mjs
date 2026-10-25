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
    else await $('[data-lab="' + v + '"]').click();
  },
  change = async (s, v) => {
    $(s);
    await $(s).fill(String(v));
    await $(s).dispatchEvent("change");
  },
  near = (a, b, t = 1e-6) => assert.ok(Math.abs(a - b) < t, `${a} vs ${b}`);
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
page.setDefaultTimeout(5000);
await page.goto(base);
await test("seven labs expose only their own workspace on phone and teacher navigation", async () => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const v of [
    "discrete",
    "chisquare",
    "mean",
    "correlation",
    "coverage",
    "clt",
    "sampling",
  ]) {
    await choose(v);
    assert.equal((await snap()).lab, v);
    for (const key of ["discrete", "chisquare", "mean", "correlation"])
      assert.equal(await $(`#${key}-workspace`).isVisible(), key === v);
    assert.equal(
      await $("#sampling-workspace").isVisible(),
      ["sampling", "clt", "coverage"].includes(v),
    );
  }
  await page.setViewportSize({ width: 1920, height: 1080 });
  await $("#teacher").click();
  await choose("discrete");
  assert.ok(await $("#dis-model").isVisible());
  await choose("chisquare");
  assert.ok(await $("#chi-mode").isVisible());
  await $("#teacher").click();
  await page.setViewportSize({ width: 1440, height: 900 });
});
await test("Binomial null masses, inclusive upper boundary and actual alpha match independent oracle", async () => {
  await choose("discrete");
  assert.equal(await $("#dis-output").isVisible(), false);
  await $("[data-dis-predict=one]").click();
  await $("#dis-reveal").click();
  const s = (await snap()).discrete;
  near(s.result.pValue, 0.04317449528446339, 1e-12);
  assert.equal(s.result.criticalRegion.upper.min, 5);
  near(s.result.criticalRegion.actualSize, 0.04317449528446339, 1e-12);
  assert.equal(s.result.reject, true);
  const total = await $(".dis-mass").evaluateAll((es) =>
    es.reduce((s, e) => s + Number(e.dataset.probability), 0),
  );
  near(total, 1, 1e-12);
  assert.match(await $("#dis-region").textContent(), /X ≥ 5/);
  assert.match(await $("#dis-region").textContent(), /0.05/);
});
await test("changing observed count keeps null masses fixed and respects the inclusive boundary", async () => {
  const masses = await $(".dis-mass").evaluateAll((es) =>
    es.map((e) => e.dataset.probability),
  );
  await change("#dis-observed", 4);
  assert.equal((await snap()).discrete.result.reject, false);
  near((await snap()).discrete.result.pValue, 0.1329533234343351, 1e-12);
  assert.deepEqual(
    await $(".dis-mass").evaluateAll((es) =>
      es.map((e) => e.dataset.probability),
    ),
    masses,
  );
  await change("#dis-observed", 5);
  await $("#dis-tail").selectOption("two-sided");
  await $("#dis-reveal").click();
  near((await snap()).discrete.result.pValue, 0.08634899056892678, 1e-12);
  assert.equal((await snap()).discrete.result.reject, false);
  assert.match(await $("#dis-p-explanation").textContent(), /2×min/);
});
await test("Poisson upper5% starts at9, not8; degenerate tails remain directional", async () => {
  await $("#dis-model").selectOption("poisson");
  await $("#dis-tail").selectOption("greater");
  await $("#dis-reveal").click();
  let s = (await snap()).discrete;
  near(s.result.pValue, 0.0511336157928473, 1e-12);
  assert.equal(s.result.criticalRegion.upper.min, 9);
  assert.equal(s.result.reject, false);
  await change("#dis-observed", 9);
  assert.equal((await snap()).discrete.result.reject, true);
  await change("#dis-null", 0);
  await change("#dis-truth", 0);
  await change("#dis-observed", 1);
  near((await snap()).discrete.result.pValue, 0);
  assert.equal((await snap()).discrete.result.criticalRegion.actualSize, 0);
  await $("#dis-tail").selectOption("less");
  near((await snap()).discrete.result.pValue, 1);
  assert.equal((await snap()).discrete.result.reject, false);
  assert.match(
    await $("#dis-p-explanation").textContent(),
    /impossible under the degenerate null/,
  );
});
await test("Poisson positive underflow is distinguished from impossible and overflow is explicit", async () => {
  await change("#dis-null", 4);
  await change("#dis-truth", 4);
  await $("#dis-tail").selectOption("greater");
  await change("#dis-observed", 100000);
  await $("#dis-reveal").click();
  assert.match(await $("#dis-p").textContent(), /positive but.*log p/);
  assert.match(await $("#dis-null-chart").textContent(), /outside window/);
  assert.match(
    await $("#dis-tail-note").textContent(),
    /omitted tail.*included/,
  );
});
await test("discrete repetitions reproduce seed and distinguish null size from alternative power", async () => {
  await $("#dis-model").selectOption("binomial");
  await $("#dis-tail").selectOption("greater");
  await $("#dis-one").click();
  const first = (await snap()).discrete.records[0];
  assert.equal(first.outcomes.length, 20);
  assert.equal(first.k, first.outcomes.filter(Boolean).length);
  await $("#dis-reset").click();
  await $("#dis-one").click();
  assert.deepEqual((await snap()).discrete.records[0], first);
  assert.match(await $("#dis-operating").textContent(), /Type I/);
  await change("#dis-truth", 0.3);
  assert.equal((await snap()).discrete.records.length, 0);
  assert.match(await $("#dis-operating").textContent(), /Type II.*β/);
  await $("#dis-run").click();
  await page.waitForFunction(
    () =>
      window.STATVERSE.getSnapshot().discrete.records.length === 200 &&
      !window.STATVERSE.getSnapshot().discrete.running,
  );
  const s = (await snap()).discrete;
  assert.equal(s.records.length, 200);
  assert.match(await $("#dis-case-detail").textContent(), /outcomes/);
  await $("#dis-case").fill("1");
  await $("#dis-case").dispatchEvent("change");
  assert.equal((await snap()).discrete.config.k, s.records[0].k);
  await change("#dis-truth", 0.01);
  assert.match(
    await $("#dis-operating").textContent(),
    /outside the chosen H₁ direction/,
  );
  assert.doesNotMatch(
    await $("#dis-operating").textContent(),
    /Type II probability β =/,
  );
});
await test("discrete invalid counts/parameters reject without stale geometry; n200 point mass works", async () => {
  await change("#dis-n", 1.5);
  assert.ok(await $("#dis-one").isDisabled());
  assert.equal(await $(".dis-mass").count(), 0);
  await change("#dis-n", 200);
  await change("#dis-null", 1);
  await change("#dis-truth", 1);
  await change("#dis-observed", 200);
  await $("#dis-one").click();
  assert.equal((await snap()).discrete.records[0].k, 200);
  assert.equal((await snap()).discrete.result.pValue, 1);
  await change("#dis-null", 1.1);
  assert.match(await $("#dis-error").textContent(), /probabilities/);
  await $("#dis-model").selectOption("binomial");
  await change("#dis-n", 20);
  await change("#dis-observed", 5);
});
await test("D pause/manual/resume enforces2000 cap in actual DOM and stops on navigation", async () => {
  const q = await browser.newPage({ reducedMotion: "reduce" });
  await q.goto(base);
  await q.locator('[data-lab="discrete"]').click();
  const r = await q.evaluate(() => {
    const queue = [];
    window.requestAnimationFrame = (f) => {
      queue.push(f);
      return queue.length;
    };
    const flush = () => {
      let n = 0;
      while (queue.length) {
        queue.shift()();
        if (++n > 1000) throw Error("loop");
      }
    };
    const run = document.querySelector("#dis-run");
    for (let i = 0; i < 9; i++) {
      run.click();
      flush();
    }
    run.click();
    for (let i = 0; i < 19; i++) queue.shift()();
    document.querySelector("#dis-pause").click();
    const paused = window.STATVERSE.getSnapshot().discrete.records.length;
    document.querySelector("#dis-one").click();
    run.click();
    flush();
    const s = window.STATVERSE.getSnapshot().discrete;
    return { paused, final: s.records.length, remaining: s.remaining };
  });
  assert.deepEqual(r, { paused: 1990, final: 2000, remaining: 0 });
  await q.locator("#dis-reset").click();
  await q.locator("#dis-run").click();
  await q.locator('[data-lab="chisquare"]').click();
  const before = (await q.evaluate(() => window.STATVERSE.getSnapshot()))
    .discrete.records.length;
  await q.waitForTimeout(80);
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).discrete.records
      .length,
    before,
  );
  assert.equal(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).discrete.running,
    false,
  );
  await q.close();
});
await test("contingency E/contributions/df/p and count scale law are linked", async () => {
  await choose("chisquare");
  await $("#chi-preset").selectOption("strong");
  await $("#chi-reveal").click();
  const a = (await snap()).chiSquare.result;
  assert.deepEqual(a.expected, [
    [10, 10],
    [10, 10],
  ]);
  near(a.statistic, 14.4, 1e-12);
  near(a.pValue, 0.000147802310334454, 1e-12);
  assert.equal(a.df, 1);
  await $("#chi-double").click();
  const b = (await snap()).chiSquare.result;
  near(b.statistic, 28.8, 1e-12);
  assert.equal(b.total, 80);
  assert.deepEqual(b.grouped, [
    [32, 8],
    [8, 32],
  ]);
  assert.ok(b.pValue < a.pValue);
});
await test("independence uses unequal margins and exact E5 boundary remains valid in UI", async () => {
  await $("#chi-preset").selectOption("unequal");
  assert.deepEqual((await snap()).chiSquare.result.expected, [
    [5, 5],
    [15, 15],
  ]);
  assert.equal((await snap()).chiSquare.result.statistic, 0);
  await $("#chi-preset").selectOption("boundary");
  const s = (await snap()).chiSquare.result;
  assert.deepEqual(s.expected, [
    [5, 5],
    [72, 72],
  ]);
  assert.equal(s.status, "ok");
  assert.equal(s.reject, true);
  near(s.pValue, 0.0010745773786670282, 1e-12);
});
await test("low expected cells withhold decision; explicit meaningful whole-column pooling repairs approximation", async () => {
  await $("#chi-preset").selectOption("sparse");
  await $("#chi-reveal").click();
  const a = (await snap()).chiSquare;
  assert.equal(a.result.pValue, null);
  assert.equal(a.result.reject, null);
  assert.match(await $("#chi-validity").textContent(), /below5|below 5/);
  assert.match(await $("#chi-metrics").textContent(), /Withheld/);
  assert.ok(await $("#chi-merge").isDisabled());
  await $("#chi-merge-choice").selectOption("1");
  await $("#chi-merge-confirm").check();
  await $("#chi-merge").click();
  const s = (await snap()).chiSquare;
  assert.deepEqual(s.result.grouped, [
    [27, 3],
    [23, 7],
  ]);
  assert.deepEqual(s.result.expected, [
    [25, 5],
    [25, 5],
  ]);
  near(s.result.statistic, 1.92, 1e-12);
  assert.equal(s.result.df, 1);
  assert.equal(await $("[data-chi-count]").count(), 6);
  assert.deepEqual(
    await $("[data-chi-count]").evaluateAll((es) =>
      es.map((e) => Number(e.value)),
    ),
    [27, 1, 2, 23, 4, 3],
  );
});
await test("E live edits reject empty/fractional/negative/zero margins and clear stale results", async () => {
  await $("#chi-preset").selectOption("strong");
  const input = $("[data-chi-count]").first();
  for (const v of ["", "1.5", "-1"]) {
    await input.fill(v);
    assert.equal((await snap()).chiSquare.result, null);
    assert.ok(await $("#chi-reveal").isDisabled());
    assert.equal(await $("#chi-expected").textContent(), "");
  }
  await input.fill("16");
  for (const el of await $("[data-chi-count]").all()) await el.fill("0");
  assert.equal((await snap()).chiSquare.result.status, "invalid-total");
  await $("[data-chi-count]").nth(2).fill("4");
  await $("[data-chi-count]").nth(3).fill("16");
  assert.equal((await snap()).chiSquare.result.status, "invalid-zero-margin");
  await $("#chi-preset").selectOption("strong");
});
await test("GOF uniform oracle and specified probabilities are not silently normalized", async () => {
  await $("#chi-mode").selectOption("gof");
  await $("#chi-reveal").click();
  const s = (await snap()).chiSquare.result;
  near(s.statistic, 1.4, 1e-12);
  near(s.pValue, 0.7055347312040912, 1e-12);
  assert.equal(s.df, 3);
  await $("[data-chi-predict=yes]").click();
  assert.match(await $("#chi-predict-feedback").textContent(), /Correct/);
  for (const el of await $("[data-chi-count]").all()) await el.fill("1");
  assert.equal((await snap()).chiSquare.result.pValue, null);
  assert.match(
    await $("#chi-decision").textContent(),
    /exact multinomial testing is not implemented/,
  );
  await $("#chi-model").selectOption("specified");
  assert.equal((await snap()).chiSquare.result.total, 100);
  await $("[data-chi-prob]").first().fill(".2");
  assert.equal((await snap()).chiSquare.result, null);
  assert.match(await $("#chi-error").textContent(), /sum|summing/);
  await $("[data-chi-prob]").first().fill(".1");
  assert.ok((await snap()).chiSquare.result.valid);
});
await test("fitted Binomial GOF deducts q and reuses original estimate after pooling; df0 rejected", async () => {
  await $("#chi-model").selectOption("binomial3");
  assert.equal((await snap()).chiSquare.result.df, 3);
  await $("#chi-fit").check();
  const a = (await snap()).chiSquare.result;
  near(a.parameter, 152 / 300, 1e-12);
  assert.equal(a.df, 2);
  await $("#chi-merge-choice").selectOption("0");
  await $("#chi-merge-confirm").check();
  await $("#chi-merge").click();
  const b = (await snap()).chiSquare.result;
  near(b.parameter, a.parameter, 1e-12);
  assert.equal(b.df, 1);
  await $("#chi-merge-choice").selectOption("0");
  await $("#chi-merge-confirm").check();
  await $("#chi-merge").click();
  assert.equal((await snap()).chiSquare.result, null);
  assert.match(await $("#chi-error").textContent(), /df.*≤0/);
  await $("#chi-unpool").click();
  assert.equal((await snap()).chiSquare.result.df, 2);
});
await test("conditional shuffles preserve both margins, separate nulls and reproducible RNG", async () => {
  await $("#chi-mode").selectOption("contingency");
  await $("#chi-preset").selectOption("sparse");
  await $("#chi-shuffle").click();
  const a = (await snap()).chiSquare.lastShuffle;
  assert.deepEqual(
    a.table.map((r) => r.reduce((s, x) => s + x, 0)),
    [30, 30],
  );
  assert.deepEqual(
    a.table[0].map((_, j) => a.table.reduce((s, r) => s + r[j], 0)),
    [50, 5, 5],
  );
  assert.equal((await snap()).chiSquare.result.pValue, null);
  await $("#chi-reset").click();
  await $("#chi-shuffle").click();
  assert.deepEqual((await snap()).chiSquare.lastShuffle, a);
  await $("#chi-run").click();
  await page.waitForFunction(
    () =>
      window.STATVERSE.getSnapshot().chiSquare.records.length === 201 &&
      !window.STATVERSE.getSnapshot().chiSquare.running,
  );
  assert.match(
    await $("#chi-permutation-result").textContent(),
    /Monte Carlo p=.*finite|Monte Carlo p=/,
  );
  assert.match(
    await $("#chi-permutation-result").textContent(),
    /Finite resolution/,
  );
  await $("#chi-run").click();
  await $("[data-chi-count]").first().fill("28");
  await page.waitForTimeout(80);
  assert.equal((await snap()).chiSquare.records.length, 0);
  assert.equal((await snap()).chiSquare.running, false);
});
await test("new modules hide worked feedback, probability geometry and decisions without changing data/RNG", async () => {
  await choose("discrete");
  await $("#dis-model").selectOption("poisson");
  await $("#dis-reveal").click();
  await $("#dis-one").click();
  await $("#teacher").click();
  const a = (await snap()).discrete.records;
  await $("#hide-worked").check();
  assert.equal(await $("[data-critical]").count(), 0);
  assert.equal(await $("[data-observed-k]").count(), 0);
  assert.equal(await $("#dis-p").isVisible(), false);
  await $("[data-dis-answer=no]").click();
  assert.match(await $("#dis-transfer-feedback").textContent(), /concealed/);
  assert.deepEqual((await snap()).discrete.records, a);
  await choose("chisquare");
  await $("#chi-reveal").click();
  await $("[data-chi-predict=no]").click();
  assert.match(await $("#chi-predict-feedback").textContent(), /concealed/);
  assert.equal(await $("#chi-metrics").isVisible(), false);
  assert.doesNotMatch(await $("#chi-validity").textContent(), /minimum|below5/);
  await $("#hide-worked").uncheck();
  await $("#teacher").click();
});
await test("phone/desktop/teacher layouts and keyboard reveal work in both new labs", async () => {
  for (const [w, h] of [
    [390, 844],
    [1440, 900],
    [1920, 1080],
  ]) {
    await page.setViewportSize({ width: w, height: h });
    if (w === 1920) await $("#teacher").click();
    for (const lab of ["discrete", "chisquare"]) {
      await choose(lab);
      if (lab === "discrete") {
        await $("#dis-model").selectOption("binomial");
        await change("#dis-n", 20);
        await change("#dis-observed", 5);
        await $("#dis-reveal").focus();
        await page.keyboard.press("Enter");
        assert.equal(await $("#dis-output").isVisible(), true);
      } else {
        await $("#chi-preset").selectOption("strong");
        await $("#chi-reveal").click();
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
        path: `evidence/stage4-${lab}-${w}.png`,
        fullPage: w !== 1920,
      });
    }
    if (w === 1920) await $("#teacher").click();
  }
});
await test("teacher result focus keeps essential quantitative objects inside16:9 without changing model", async () => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await $("#teacher").click();
  for (const lab of ["discrete", "chisquare"]) {
    await choose(lab);
    const before = await snap();
    const prefix = lab === "discrete" ? "dis" : "chi";
    await $("#" + prefix + "-view").selectOption("result");
    await $("#" + prefix + "-reveal-result").click();
    const box = await $(
      lab === "discrete"
        ? ".inference-workbench[data-projection=result]"
        : "#chi-validity",
    ).boundingBox();
    assert.ok(box && box.y + box.height <= 1080, JSON.stringify({ lab, box }));
    assert.deepEqual(
      (await snap())[lab === "discrete" ? "discrete" : "chiSquare"].records,
      before[lab === "discrete" ? "discrete" : "chiSquare"].records,
    );
    await page.evaluate(() => {
      document.activeElement?.blur();
      scrollTo(0, 0);
    });
    await page.screenshot({
      path: `evidence/stage4-${lab}-teacher-focus.png`,
      fullPage: false,
    });
    await $("#" + prefix + "-view").selectOption("all");
  }
  await $("#teacher").click();
});
await test("S3-01 phone card values stay fully inside their clipped card in student and teacher modes", async () => {
  const q = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  await q.goto(base);
  await q.locator("#quick-draw").click();
  for (const teacher of [false, true]) {
    if (teacher) await q.locator("#teacher").click();
    const bounds = await q.locator(".sample-card").evaluateAll((es) =>
      es.map((card) => {
        const b = card.querySelector("b"),
          range = document.createRange();
        range.selectNodeContents(b);
        const c = card.getBoundingClientRect(),
          r = range.getBoundingClientRect();
        return {
          value: b.textContent,
          top: r.top - c.top,
          bottom: c.bottom - r.bottom,
          left: r.left - c.left,
          right: c.right - r.right,
        };
      }),
    );
    assert.deepEqual(
      bounds.map((b) => b.value),
      ["8", "40", "2"],
    );
    assert.ok(
      bounds.every(
        (b) => b.top >= 0 && b.bottom >= 2 && b.left >= 0 && b.right >= 0,
      ),
      JSON.stringify(bounds),
    );
    await q.locator("#sample-tray").scrollIntoViewIfNeeded();
    await q.screenshot({
      path: `evidence/stage4-card-values-phone-${teacher ? "teacher" : "student"}.png`,
      fullPage: false,
    });
  }
  await q.close();
});
await test("S3-02 Mean pause restores single-step, preserves RNG and respects invalid/cap states", async () => {
  const q = await browser.newPage({ reducedMotion: "reduce" });
  await q.goto(base);
  await q.locator("[data-lab=mean]").click();
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
    const run = document.querySelector("#mean-run"),
      one = document.querySelector("#mean-one"),
      pause = document.querySelector("#mean-pause"),
      reset = document.querySelector("#mean-reset");
    run.click();
    for (let i = 0; i < 6; i++) queue.shift()();
    pause.click();
    const paused = window.STATVERSE.getSnapshot().meanInference;
    const singleEnabled = !one.disabled;
    one.click();
    const stepped = window.STATVERSE.getSnapshot().meanInference;
    run.click();
    flush();
    const resumed = window.STATVERSE.getSnapshot().meanInference;
    reset.click();
    for (let i = 0; i < 201; i++) one.click();
    const replay = window.STATVERSE.getSnapshot().meanInference;
    const same =
      JSON.stringify(replay.records) === JSON.stringify(resumed.records);
    reset.click();
    for (let i = 0; i < 9; i++) {
      run.click();
      flush();
    }
    run.click();
    for (let i = 0; i < 19; i++) queue.shift()();
    pause.click();
    one.click();
    run.click();
    flush();
    const cap = window.STATVERSE.getSnapshot().meanInference.records.length;
    return {
      paused: paused.records.length,
      remaining: paused.remaining,
      singleEnabled,
      stepped: stepped.records.length,
      resumed: resumed.records.length,
      same,
      cap,
      capSingleDisabled: one.disabled,
      capRunDisabled: run.disabled,
    };
  });
  assert.deepEqual(out, {
    paused: 60,
    remaining: 140,
    singleEnabled: true,
    stepped: 61,
    resumed: 201,
    same: true,
    cap: 2000,
    capSingleDisabled: true,
    capRunDisabled: true,
  });
  await q.locator("#mean-reset").click();
  await q.locator("#mean-model").selectOption("large-estimated");
  assert.ok(await q.locator("#mean-one").isDisabled());
  await q.locator("#teacher").click();
  await q.locator("#teacher-pause").click();
  assert.ok(await q.locator("#mean-one").isDisabled());
  assert.ok(await q.locator("#mean-run").isDisabled());
  await q.close();
});
await test("all external modules cancel pending work on navigation", async () => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await choose("correlation");
  await $("#cor-permute").click();
  await choose("discrete");
  assert.equal((await snap()).correlation.running, false);
  await choose("chisquare");
  await $("#chi-preset").selectOption("sparse");
  await $("#chi-run").click();
  await choose("mean");
  const before = (await snap()).chiSquare.records.length;
  await page.waitForTimeout(80);
  assert.equal((await snap()).chiSquare.records.length, before);
  assert.equal((await snap()).chiSquare.running, false);
});
await test("finite Normal and chi-square tail underflow is not displayed as exact probability zero", async () => {
  await choose("mean");
  await $("#mean-model").selectOption("normal-known");
  await $("#mean-design").selectOption("one");
  await change("#mean-x", 1000000);
  await $("#mean-reveal").click();
  assert.match(await $("#mean-p").textContent(), /positive.*machine range/);
  await change("#mean-x", 496);
  await choose("chisquare");
  await $("#chi-preset").selectOption("strong");
  for (const [i, v] of [1000000, 0, 0, 1000000].entries())
    await $("[data-chi-count]").nth(i).fill(String(v));
  await $("#chi-reveal").click();
  assert.match(
    await $("#chi-metrics").textContent(),
    /positive.*machine range/,
  );
  await $("#chi-preset").selectOption("strong");
});
await test("Teacher sample-stage trace reveals distribution stage without changing the original sample or seed", async () => {
  const q = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    reducedMotion: "reduce",
  });
  await q.goto(base);
  await q.locator("#teacher").click();
  await q.locator("#teacher-stage").selectOption("sample");
  await q.locator("#draw").click();
  const before = await q.evaluate(() => window.STATVERSE.getSnapshot());
  assert.equal(await q.locator(".distribution-panel").isVisible(), false);
  await q.locator("#trace-point").click();
  let after = await q.evaluate(() => window.STATVERSE.getSnapshot());
  assert.equal(after.teacherStage, "distribution");
  assert.equal(await q.locator(".distribution-panel").isVisible(), true);
  assert.deepEqual(after.samples, before.samples);
  assert.equal(after.seed, before.seed);
  assert.equal(after.selected, before.selected);
  assert.equal(
    await q
      .locator('.dot[data-index="0"]')
      .evaluate((e) => e === document.activeElement),
    true,
  );
  await q.locator("#teacher-stage").selectOption("sample");
  await q.locator("#hide-worked").check();
  await q.locator("#trace-point").click();
  after = await q.evaluate(() => window.STATVERSE.getSnapshot());
  assert.equal(after.teacherStage, "distribution");
  assert.deepEqual(after.samples, before.samples);
  assert.equal(await q.locator("#distribution-chart").isVisible(), false);
  await q.locator("#hide-worked").uncheck();
  await q.locator("#teacher").click();
  await q.locator("#trace-point").click();
  assert.deepEqual(
    (await q.evaluate(() => window.STATVERSE.getSnapshot())).samples,
    before.samples,
  );
  await q.close();
});
await test("no runtime errors or missing static modules", async () =>
  assert.deepEqual(errors, []));
await fs.writeFile(
  "evidence/browser-stage4-results.json",
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      baseUrl: base,
      browser: await browser.version(),
      evidenceType:
        "Developer actual Chromium regression, not independent review or real student observation",
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
