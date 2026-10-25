import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const browser = await chromium.launch({
  executablePath: "/usr/bin/chromium",
  headless: true,
  args: ["--no-sandbox"],
});
const p = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  }),
  errors = [],
  results = [];
p.on("pageerror", (e) => errors.push(String(e)));
await p.goto("http://127.0.0.1:4173");
const snap = () => p.evaluate(() => window.STATVERSE.getSnapshot());
const lab = async (v) => p.locator("#lab-switch").selectOption(v);
const choose = async (v) => p.locator('[data-lab="' + v + '"]').click();
const test = async (name, fn) => {
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
};
await test("R1 mobile and teacher native navigation reaches all labs", async () => {
  await p.setViewportSize({ width: 390, height: 844 });
  assert.ok(await p.locator("#lab-switch").isVisible());
  for (const v of ["clt", "coverage", "correlation", "sampling"]) {
    await lab(v);
    assert.equal((await snap()).lab, v);
  }
  await p.setViewportSize({ width: 1920, height: 1080 });
  await p.locator("#teacher").click();
  assert.ok(await p.locator("#lab-switch").isVisible());
  await lab("coverage");
  assert.ok(await p.locator("#coverage-panel").isVisible());
  assert.ok(await p.locator("#estimator").isDisabled());
  await lab("sampling");
  await p.locator("#teacher").click();
});
await test("R3 prediction follows estimator and links actual SE comparison", async () => {
  await p.locator("#n").fill("3");
  await p.locator("#estimator").selectOption("first");
  assert.match(
    await p.locator("#predict-question").textContent(),
    /first card/,
  );
  await p.locator('[data-prediction="same"]').click();
  const a = await p.locator("#se").textContent();
  await p.locator("#n").fill("12");
  assert.equal(await p.locator("#se").textContent(), a);
  assert.match(await p.locator("#predict-feedback").textContent(), /same/);
  await p.locator("#estimator").selectOption("mean");
  assert.equal(await p.locator("#predict-feedback").textContent(), "");
  await p.locator("#n").fill("3");
  await p.locator('[data-prediction="narrower"]').click();
  await p.locator("#n").fill("12");
  assert.match(await p.locator("#predict-feedback").textContent(), /narrower/);
});
await test("R4 exact rows expose original ordered sample, product weight and contribution", async () => {
  await p.locator("#pool").selectOption("small");
  await p.locator("#n").fill("2");
  await p.locator("#exact").check();
  if (!(await p.locator("#exact-inspector details").evaluate((e) => e.open)))
    await p.locator("#exact-inspector summary").click();
  assert.equal(await p.locator("#exact-inspector tbody tr").count(), 9);
  assert.match(
    await p.locator("#exact-inspector").textContent(),
    /weighted E\(T\) = 2/,
  );
  assert.match(await p.locator("#exact-inspector").textContent(), /p × T/);
  await p.locator("#pool").selectOption("aurora");
  await p.locator("#n").fill("4");
  if (!(await p.locator("#exact-inspector details").evaluate((e) => e.open)))
    await p.locator("#exact-inspector summary").click();
  await p.locator("#exact-next").click();
  assert.equal(
    await p
      .locator("#exact-inspector tbody tr:first-child td:first-child")
      .textContent(),
    "11",
  );
  await p.locator("#exact").uncheck();
});
await test("Sample compression animation has equivalent reduced-motion result", async () => {
  await p.locator("#n").fill("3");
  await p.locator("#draw").click();
  assert.equal(await p.locator(".sample-flight").count(), 0);
  await p.emulateMedia({ reducedMotion: "no-preference" });
  await p.locator("#draw").click();
  assert.equal(await p.locator(".sample-flight").count(), 1);
  await p.waitForTimeout(1000);
  assert.equal(await p.locator(".sample-flight").count(), 0);
  assert.equal((await snap()).samples.length, 2);
  await p.emulateMedia({ reducedMotion: "reduce" });
});
await test("Teacher reveal stages conceal actual workspaces and worked answers only", async () => {
  await p.locator("#teacher").click();
  await p.locator("#teacher-stage").selectOption("predict");
  assert.equal(await p.locator(".sample-panel").isVisible(), false);
  await p.locator("#teacher-stage").selectOption("sample");
  assert.equal(await p.locator("#draw").isVisible(), true);
  assert.equal(await p.locator(".distribution-panel").isVisible(), false);
  await p.locator("#hide-worked").check();
  await p.locator("#draw").click();
  assert.equal(await p.locator("#observed").isVisible(), false);
  await p.locator("#teacher-stage").selectOption("distribution");
  assert.equal(await p.locator(".distribution-panel").isVisible(), true);
  await p.locator("#hide-worked").uncheck();
  assert.equal(await p.locator("#observed").isVisible(), true);
  await p.locator("#teacher-stage").selectOption("all");
  await p.locator("#teacher").click();
});
await test("CLT standardization retains samples and declares plot-window overflow", async () => {
  await choose("clt");
  await p.locator("#n").fill("3");
  await p.locator("#batch").selectOption("200");
  await p.locator("#run").click();
  await p.waitForFunction(() => !window.STATVERSE.getSnapshot().running);
  const a = await snap();
  await p.locator("#standardize").check();
  assert.deepEqual((await snap()).samples, a.samples);
  assert.equal(await p.locator("#expectation").textContent(), "0");
  assert.equal(await p.locator("#se").textContent(), "1");
  assert.match(
    await p.locator("#chart-description").textContent(),
    /All 200 samples retained/,
  );
  assert.ok((await p.locator(".dot").count()) <= 200);
  await p.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo(0, 0);
  });
  await p.screenshot({
    path: "evidence/stage2-clt-standardized.png",
    fullPage: true,
  });
});
await test("R2 CI miss is inspectable without hover, and hidden truth preserves endpoints", async () => {
  await choose("coverage");
  await p.locator("#n").fill("3");
  await p.locator("#draw").click();
  const a = await snap(),
    text = await p.locator("#ci-detail").textContent();
  assert.match(text, /9\.63/);
  assert.match(text, /23\.703/);
  assert.match(text, /Misses.*5\.3/);
  await p.locator("#hide-truth").check();
  const hidden = await p.locator("#ci-detail").textContent();
  assert.match(hidden, /9\.63/);
  assert.doesNotMatch(hidden, /Misses/);
  assert.deepEqual((await snap()).samples, a.samples);
  await p.locator("#hide-truth").uncheck();
  await p.locator("#draw").click();
  await p.locator("#ci-case").fill("1");
  await p.locator("#ci-case").dispatchEvent("change");
  assert.match(await p.locator("#ci-detail").textContent(), /Interval #1/);
  await p.locator('[data-ci-index="1"]').focus();
  await p.keyboard.press("Enter");
  assert.match(await p.locator("#ci-detail").textContent(), /Interval #2/);
  await p.locator("#confidence").selectOption("0.99");
  assert.equal((await snap()).samples.length, 2);
  assert.match(await p.locator("#coverage-method").textContent(), /99%/);
  await p.setViewportSize({ width: 390, height: 844 });
  await p.locator("#ci-case").fill("1");
  await p.locator("#ci-case").dispatchEvent("change");
  assert.match(await p.locator("#ci-detail").textContent(), /Interval #1/);
  assert.ok(
    await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  );
  await p.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo(0, 0);
  });
  await p.screenshot({ path: "evidence/stage2-ci-mobile.png", fullPage: true });
  await p.setViewportSize({ width: 1440, height: 900 });
});
await test("C monotone transform preserves Spearman; ties use average ranks", async () => {
  await choose("correlation");
  await p.locator("#cor-preset").selectOption("monotone");
  const a = (await snap()).correlation.math;
  await p.locator("#cor-square").click();
  const b = (await snap()).correlation.math;
  assert.equal(a.rs, b.rs);
  assert.ok(Math.abs(a.r - b.r) > 1e-4);
  await p.locator("#cor-preset").selectOption("ties");
  assert.ok(Math.abs((await snap()).correlation.math.rs + 1 / 3) < 1e-10);
  assert.match(await p.locator("#cor-table").textContent(), /2\.5/);
});
await test("C numerical, keyboard and real drag edits recompute the same data", async () => {
  await p.locator("#cor-preset").selectOption("linear");
  await p.locator("#cor-x").fill("1.5");
  await p.locator("#cor-y").fill("3.8");
  await p.locator("#cor-apply").click();
  assert.deepEqual((await snap()).correlation.points[0], [1.5, 3.8]);
  await p.locator('[data-point="0"]').focus();
  await p.keyboard.press("ArrowRight");
  assert.ok(Math.abs((await snap()).correlation.points[0][0] - 1.6) < 1e-10);
  const before = (await snap()).correlation.points[0];
  const b = await p.locator('[data-point="0"]').boundingBox();
  await p.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
  await p.mouse.down();
  await p.mouse.move(b.x + 55, b.y - 25, { steps: 6 });
  await p.mouse.up();
  assert.notDeepEqual((await snap()).correlation.points[0], before);
});
await test("C undefined coefficients, U-shape, extrapolation and permutation are distinct", async () => {
  await p.locator("#cor-preset").selectOption("constant");
  assert.equal(await p.locator("#cor-r").textContent(), "Undefined");
  assert.ok(await p.locator("#cor-permute").isDisabled());
  await p.locator("#cor-preset").selectOption("u");
  assert.equal(await p.locator("#cor-r").textContent(), "0");
  assert.equal(await p.locator("#cor-rs").textContent(), "0");
  await p.locator("#cor-preset").selectOption("linear");
  await p.locator("#cor-predict-x").fill("12");
  await p.locator("#cor-predict-x").dispatchEvent("change");
  assert.match(
    await p.locator("#cor-prediction").textContent(),
    /EXTRAPOLATION/,
  );
  await p.locator("#cor-permute").click();
  await p.waitForFunction(
    () => window.STATVERSE.getSnapshot().correlation.result !== null,
  );
  const r = (await snap()).correlation.result;
  assert.equal(r.B, 999);
  assert.ok(r.p > 0);
  await p.locator("#cor-y").fill("5");
  await p.locator("#cor-apply").click();
  assert.equal((await snap()).correlation.result, null);
  await p.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo(0, 0);
  });
  await p.screenshot({
    path: "evidence/stage2-correlation-desktop.png",
    fullPage: true,
  });
  await p.setViewportSize({ width: 390, height: 844 });
  assert.ok(
    await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  );
  await p.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo(0, 0);
  });
  await p.screenshot({
    path: "evidence/stage2-correlation-mobile.png",
    fullPage: true,
  });
  await p.setViewportSize({ width: 1920, height: 1080 });
  await p.locator("#teacher").click();
  await p.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo(0, 0);
  });
  await p.screenshot({
    path: "evidence/stage2-correlation-teacher.png",
    fullPage: false,
  });
  await p.locator("#teacher").click();
});
await test("R5 paused batch plus manual draw stops at exactly 5000 in real DOM", async () => {
  const q = await browser.newPage({ reducedMotion: "reduce" });
  q.on("pageerror", (e) => errors.push(String(e)));
  await q.goto("http://127.0.0.1:4173");
  const r = await q.evaluate(() => {
    const queue = [];
    window.requestAnimationFrame = (fn) => {
      queue.push(fn);
      return queue.length;
    };
    document.querySelector("#batch").value = "1000";
    const flush = () => {
      let count = 0;
      while (queue.length) {
        queue.shift()();
        if (++count > 1000) throw Error("unexpected loop");
      }
    };
    for (let b = 0; b < 4; b++) {
      document.querySelector("#run").click();
      flush();
    }
    document.querySelector("#run").click();
    for (let t = 0; t < 99; t++) queue.shift()();
    document.querySelector("#pause").click();
    const paused = window.STATVERSE.getSnapshot();
    document.querySelector("#draw").click();
    const single = window.STATVERSE.getSnapshot();
    document.querySelector("#run").click();
    flush();
    const final = window.STATVERSE.getSnapshot();
    return {
      paused: paused.samples.length,
      remaining: paused.remaining,
      single: single.samples.length,
      singleRemaining: single.remaining,
      final: final.samples.length,
      finalRemaining: final.remaining,
      disabled: document.querySelector("#run").disabled,
    };
  });
  assert.deepEqual(r, {
    paused: 4990,
    remaining: 10,
    single: 4991,
    singleRemaining: 9,
    final: 5000,
    finalRemaining: 0,
    disabled: true,
  });
  await fs.writeFile(
    "evidence/stage2-cap-regression.json",
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        method:
          "Real Chromium DOM; deterministic requestAnimationFrame scheduling for exact pause boundary",
        ...r,
      },
      null,
      2,
    ),
  );
  await q.close();
});
await test("Independent constant-population fixture renders point masses and [7,7] CI", async () => {
  const q = await browser.newPage({ reducedMotion: "reduce" });
  q.on("pageerror", (e) => errors.push(String(e)));
  await q.goto("http://127.0.0.1:4173");
  await q.evaluate(async () => {
    const m = await import("/src/statistics.js");
    m.POOLS.small.cards.forEach((c) => (c.value = 7));
  });
  await q.locator("#pool").selectOption("small");
  await q.locator("#n").fill("3");
  await q.locator("#draw").click();
  assert.equal(await q.locator("#se").textContent(), "0");
  assert.doesNotMatch(
    await q.locator("#distribution-chart").innerHTML(),
    /NaN|Infinity/,
  );
  await q.locator('[data-lab="coverage"]').click();
  await q.locator("#draw").click();
  assert.match(await q.locator("#ci-detail").textContent(), /\[7, 7\]/);
  assert.doesNotMatch(
    await q.locator("#coverage-chart").innerHTML(),
    /NaN|Infinity/,
  );
  await q.close();
});
await test("No new browser runtime errors", async () =>
  assert.deepEqual(errors, []));
await fs.writeFile(
  "evidence/browser-stage2-results.json",
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      browser: await browser.version(),
      evidenceType:
        "Developer actual browser regression, not independent review or student testing",
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
