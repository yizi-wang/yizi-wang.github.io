import { test } from "node:test";
import assert from "node:assert/strict";
import * as S from "../src/sampling-design.js";

function close(actual, expected, relative = 3e-13, absolute = 2e-12) {
  assert.ok(Number.isFinite(actual));
  assert.ok(Math.abs(actual - expected) <= Math.max(absolute, relative * Math.abs(expected)), `${actual} vs ${expected}`);
}
function combinations(xs, n) {
  if (n === 0) return [[]];
  const out = [];
  for (let i = 0; i <= xs.length - n; i++)
    for (const suffix of combinations(xs.slice(i + 1), n - 1)) out.push([xs[i], ...suffix]);
  return out;
}
function independentMoments(xs) {
  const mean = xs.reduce((a, b) => a + b, 0) / xs.length;
  return { mean, variance: xs.reduce((a, x) => a + (x - mean) ** 2, 0) / xs.length };
}
function frame(xs, strata = xs.map(() => "one")) {
  return xs.map((value, i) => ({ id: `u${i}`, value, stratum: strata[i], accessibility: .5 }));
}
const demo = S.makeDemoPopulation();

test("fictional scenario preserves units across orderings and has hand-calculated moments", () => {
  const balanced = S.makeDemoPopulation("balanced");
  assert.deepEqual([...balanced].sort((a, b) => a.id.localeCompare(b.id)), [...demo].sort((a, b) => a.id.localeCompare(b.id)));
  const p = S.finitePopulationSummary(demo);
  assert.equal(p.N, 12); close(p.mean, 275 / 6);
  close(p.varianceN, 22625 / 36); close(p.varianceNMinus1, 22625 / 33);
  assert.deepEqual(p.strata.map(g => g.N), [6, 4, 2]);
  assert.deepEqual(p.strata.map(g => g.mean), [25, 57.5, 85]);
  const again = S.makeDemoPopulation(); again[0].value = -999;
  assert.equal(S.makeDemoPopulation()[0].value, 10);
});
test("SRS exact enumeration verifies the finite-population correction, not IID variance/n", () => {
  const population = frame([0, 2, 4]);
  const means = combinations([0, 2, 4], 2).map(xs => (xs[0] + xs[1]) / 2);
  assert.deepEqual(means, [1, 2, 3]);
  const oracle = independentMoments(means), theory = S.simpleRandomTheory({ population, n: 2 });
  close(theory.expectedMean, oracle.mean); close(theory.variance, 2 / 3);
  close(theory.variance, oracle.variance); close(theory.standardError, Math.sqrt(2 / 3));
  assert.notEqual(theory.variance, S.finitePopulationSummary(population).varianceN / 2);
  assert.equal(S.simpleRandomTheory({ population, n: 3 }).variance, 0);
  close(S.simpleRandomTheory({ population, n: 1 }).variance, 8 / 3);
  assert.equal(S.simpleRandomTheory({ population: frame([7]), n: 1 }).standardError, 0);
});
test("all 924 demo SRS samples reproduce design expectation and variance", () => {
  const samples = combinations(demo.map(u => u.value), 6);
  assert.equal(samples.length, 924);
  const oracle = independentMoments(samples.map(xs => xs.reduce((a, b) => a + b, 0) / 6));
  const theory = S.simpleRandomTheory({ population: demo, n: 6 });
  close(oracle.mean, 275 / 6); close(oracle.variance, 22625 / 396);
  close(theory.expectedMean, oracle.mean); close(theory.variance, oracle.variance);
});
test("largest-remainder allocations expose rounding, deterministic ties and unrepresented strata", () => {
  const exact = S.proportionalAllocation({ population: demo, n: 6 });
  assert.deepEqual(exact.allocations.map(a => a.quota), [3, 2, 1]);
  assert.equal(exact.exactProportions, true); assert.equal(exact.status, "ok");
  const rounded = S.proportionalAllocation({ population: demo, n: 5 });
  assert.deepEqual(rounded.allocations.map(a => a.quota), [2, 2, 1]);
  assert.equal(rounded.exactProportions, false);
  const empty = S.proportionalAllocation({ population: demo, n: 3 });
  assert.deepEqual(empty.allocations.map(a => a.quota), [2, 1, 0]);
  assert.deepEqual(empty.unrepresentedStrata, ["Violet"]);
  assert.equal(empty.status, "unrepresented-stratum");
  const tie = S.proportionalAllocation({ population: frame([1, 2, 3], ["z", "a", "b"]), n: 2 });
  assert.deepEqual(tie.allocations.map(a => a.quota), [1, 1, 0]);
  assert.equal(tie.tieBreak, "stratum-first-appearance");
});
test("stratified exact enumeration checks weights, integer allocation and without-replacement variance", () => {
  for (const [n, expectedCount] of [[6, 240], [5, 180]]) {
    const theory = S.proportionalStratifiedTheory({ population: demo, n });
    const groups = theory.allocations.map(a => combinations(demo.filter(u => u.stratum === a.stratum).map(u => u.value), a.quota));
    const weighted = [], naive = [];
    for (const a of groups[0]) for (const b of groups[1]) for (const c of groups[2]) {
      const groupMeans = [a, b, c].map(xs => xs.reduce((s, x) => s + x, 0) / xs.length);
      weighted.push(groupMeans[0] / 2 + groupMeans[1] / 3 + groupMeans[2] / 6);
      naive.push([...a, ...b, ...c].reduce((s, x) => s + x, 0) / n);
    }
    assert.equal(weighted.length, expectedCount);
    const oracle = independentMoments(weighted);
    close(oracle.mean, 275 / 6); close(theory.expectedMean, oracle.mean); close(theory.variance, oracle.variance);
    if (n === 6) close(theory.variance, 1355 / 108);
    else {
      close(independentMoments(naive).mean, 50);
      assert.ok(Math.abs(independentMoments(naive).mean - theory.expectedMean) > 4);
    }
  }
});
test("systematic random-start distribution is unbiased but frame order changes variance", () => {
  const periodic = S.systematicRandomStartTheory({ population: demo, n: 6 });
  assert.equal(periodic.interval, 2);
  assert.deepEqual(periodic.possibleStarts.map(s => s.indices), [[0, 2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]]);
  close(periodic.possibleStarts[0].mean, 215 / 6); close(periodic.possibleStarts[1].mean, 335 / 6);
  close(independentMoments(periodic.possibleStarts.map(s => s.mean)).mean, 275 / 6);
  close(periodic.variance, 100); close(periodic.standardError, 10);
  assert.equal(periodic.designUnbiased, true);
  const balanced = S.systematicRandomStartTheory({ population: S.makeDemoPopulation("balanced"), n: 6 });
  assert.equal(balanced.variance, 0);
  close(balanced.expectedMean, periodic.expectedMean);
  for (const n of [1, 2, 3, 4, 6, 12]) {
    const t = S.systematicRandomStartTheory({ population: demo, n });
    const occurrences = new Array(12).fill(0);
    for (const start of t.possibleStarts) for (const i of start.indices) occurrences[i]++;
    assert.deepEqual(occurrences, new Array(12).fill(1));
    close(independentMoments(t.possibleStarts.map(s => s.mean)).mean, 275 / 6);
  }
});
test("seeded samples reproduce, never replace units and satisfy their allocation/start rules", () => {
  assert.deepEqual(S.simpleRandomSample({ population: demo, n: 6, seed: "orbit-demo-1" }).selectedIds,
    ["A02", "C03", "C04", "C02", "A03", "A05"]);
  for (const sample of [S.simpleRandomSample, S.proportionalStratifiedSample, S.systematicRandomStartSample]) {
    const a = sample({ population: demo, n: 6, seed: "reproduce" });
    assert.deepEqual(a, sample({ population: demo, n: 6, seed: "reproduce" }));
    assert.equal(new Set(a.selectedIds).size, 6);
    assert.equal(a.selectedIds.length, 6); assert.equal(a.randomized, true); assert.equal(a.probabilitySample, true);
    for (const u of a.selected) assert.equal(demo[u.frameIndex].id, u.id);
    if (sample === S.proportionalStratifiedSample) {
      assert.deepEqual(a.stratumEstimates.map(g => g.sampleSize), [3, 2, 1]);
      close(a.estimate, a.sampleMean);
    }
    if (sample === S.systematicRandomStartSample)
      assert.deepEqual(a.selected.map(u => u.frameIndex), Array.from({ length: 6 }, (_, j) => a.start + 2 * j));
  }
  const distinct = new Set(Array.from({ length: 20 }, (_, i) => S.simpleRandomSample({ population: demo, n: 6, seed: `s${i}` }).selectedIds.join()));
  assert.ok(distinct.size > 1); // Stream smoke only; not evidence of unbiasedness.
});
test("sampling does not select using target values or accessibility except the stated convenience mechanism", () => {
  const changed = demo.map(u => ({ ...u, value: -3 * u.value + 4, accessibility: 1 - u.accessibility }));
  for (const sample of [S.simpleRandomSample, S.proportionalStratifiedSample, S.systematicRandomStartSample]) {
    const a = sample({ population: demo, n: 6, seed: "fixed" });
    const b = sample({ population: changed, n: 6, seed: "fixed" });
    assert.deepEqual(a.selectedIds, b.selectedIds);
    close(b.estimate, -3 * a.estimate + 4);
    close(b.theory.variance, 9 * a.theory.variance);
  }
});
test("rounded stratified sample uses population weights, not its raw sample proportions", () => {
  const r = S.proportionalStratifiedSample({ population: demo, n: 5, seed: "weights" });
  close(r.estimate, r.stratumEstimates[0].sampleMean / 2 + r.stratumEstimates[1].sampleMean / 3 + r.stratumEstimates[2].sampleMean / 6);
  assert.ok(Math.abs(r.sampleMean - r.estimate) > .1);
});
test("unrepresented strata suppress full-population estimates and theory", () => {
  const theory = S.proportionalStratifiedTheory({ population: demo, n: 3 });
  assert.equal(theory.expectedMean, null); assert.equal(theory.variance, null); assert.equal(theory.standardError, null);
  for (const sample of [S.proportionalStratifiedSample, S.quotaConvenienceSample]) {
    const r = sample({ population: demo, n: 3, seed: "empty" });
    assert.equal(r.status, "unrepresented-stratum"); assert.equal(r.estimate, null); assert.equal(r.error, null);
    assert.equal(r.probabilitySample, false); assert.equal(r.selected.length, 3);
    assert.equal(r.stratumEstimates.at(-1).sampleMean, null);
  }
});
test("convenience quota has a specified selection mechanism, not a universal quota bias", () => {
  const q = S.quotaConvenienceSample({ population: demo, n: 6 });
  assert.deepEqual(q.selectedIds, ["A01", "A03", "A05", "C01", "C03", "V01"]);
  close(q.estimate, 215 / 6); close(q.error, -10);
  assert.equal(q.randomized, false); assert.equal(q.probabilitySample, false); assert.equal(q.standardError, null);
  assert.equal(q.theory, null); assert.equal(q.designUnbiased, null);
  assert.match(q.selectionMechanism, /highest-accessibility/);
  const opposite = S.quotaConvenienceSample({ population: demo.map(u => ({ ...u, accessibility: 1 - u.accessibility })), n: 6 });
  close(opposite.error, 10);
  const constant = S.quotaConvenienceSample({ population: demo.map(u => ({ ...u, value: 5 })), n: 6 });
  close(constant.error, 0);
  const tied = S.quotaConvenienceSample({ population: demo.map(u => ({ ...u, accessibility: .5 })), n: 6 });
  assert.deepEqual(tied.selectedIds, ["A01", "A02", "A03", "C01", "C02", "V01"]);
});
test("censuses and singleton strata have zero design SE, not undefined IID calculations", () => {
  for (const sample of [S.simpleRandomSample, S.proportionalStratifiedSample, S.systematicRandomStartSample]) {
    const census = sample({ population: demo, n: 12, seed: "census" });
    close(census.estimate, 275 / 6); assert.equal(census.theory.standardError, 0);
    const singleton = sample({ population: frame([7]), n: 1, seed: "one" });
    assert.equal(singleton.estimate, 7); assert.equal(singleton.theory.variance, 0);
  }
  const distinct = frame([1, 4], ["one", "two"]);
  assert.equal(S.proportionalStratifiedTheory({ population: distinct, n: 2 }).variance, 0);
  for (const sample of [S.simpleRandomSample, S.proportionalStratifiedSample, S.systematicRandomStartSample, S.quotaConvenienceSample]) {
    const constant = sample({ population: demo.map(u => ({ ...u, value: .1 })), n: 6, seed: "constant" });
    assert.equal(constant.estimate, .1); assert.equal(constant.error, 0);
    if (constant.theory) assert.equal(constant.standardError, 0);
  }
});
test("centered moments preserve small spread on a large common offset", () => {
  const population = frame([999999.9999999999, 1000000]);
  const difference = population[1].value - population[0].value;
  close(S.finitePopulationSummary(population).varianceN, difference ** 2 / 4, 1e-15, 0);
  close(S.simpleRandomTheory({ population, n: 1 }).variance, difference ** 2 / 4, 1e-15, 0);
});
test("supported maximum-size census retains all distinct IDs and exact zero SE", () => {
  const population = frame(Array.from({ length: 10000 }, (_, i) => i % 17));
  const r = S.simpleRandomSample({ population, n: 10000, seed: "maximum-census" });
  assert.equal(new Set(r.selectedIds).size, 10000);
  assert.equal(r.error, 0); assert.equal(r.standardError, 0);
});
test("independent Normal combination uses squared coefficients, constants and explicit independence", () => {
  const terms = [{ id: "X", coefficient: 2, mean: 3, variance: 4 }, { id: "Y", coefficient: -3, mean: 5, variance: 9 }];
  const r = S.independentNormalCombination({ terms, constant: 7, independent: true });
  assert.equal(r.mean, -2); assert.equal(r.variance, 97); close(r.sd, Math.sqrt(97));
  assert.equal(r.distribution, "normal");
  const means = S.independentNormalCombination({ independent: true, terms: [
    { id: "Xbar", coefficient: 1, mean: 100, variance: 100 / 25 },
    { id: "Ybar", coefficient: -1, mean: 97, variance: 64 / 16 }] });
  assert.equal(means.mean, 3); assert.equal(means.variance, 8);
  const constant = S.independentNormalCombination({ independent: true, constant: 9,
    terms: [{ id: "X", coefficient: 0, mean: 3, variance: 4 }] });
  assert.equal(constant.mean, 9); assert.equal(constant.variance, 0); assert.equal(constant.distribution, "point-mass");
  const degenerate = S.independentNormalCombination({ independent: true,
    terms: [{ id: "X", coefficient: -2, mean: 3, variance: 0 }] });
  assert.equal(degenerate.mean, -6); assert.equal(degenerate.sd, 0);
});
test("invalid and unsupported inputs throw rather than silently changing a design", () => {
  const invalid = [
    () => S.finitePopulationSummary([]), () => S.finitePopulationSummary(new Array(1)),
    () => S.finitePopulationSummary([{ ...demo[0], value: NaN }]),
    () => S.finitePopulationSummary([{ ...demo[0], accessibility: 1.1 }]),
    () => S.finitePopulationSummary([{ ...demo[0], value: 1e7 }]),
    () => S.finitePopulationSummary([{ ...demo[0], stratum: "" }]),
    () => S.finitePopulationSummary([demo[0], demo[0]]),
    () => S.finitePopulationSummary(new Array(10001).fill(demo[0])),
    () => S.finitePopulationSummary(frame(new Array(101).fill(1), Array.from({ length: 101 }, (_, i) => `s${i}`))),
    () => S.simpleRandomSample({ population: demo, n: 0, seed: "s" }),
    () => S.simpleRandomSample({ population: demo, n: 13, seed: "s" }),
    () => S.simpleRandomSample({ population: demo, n: 1.5, seed: "s" }),
    () => S.simpleRandomSample({ population: demo, n: 1 }),
    () => S.simpleRandomSample({ population: demo, n: 1, seed: 1 }),
    () => S.simpleRandomSample({ population: demo, n: 1, seed: "" }),
    () => S.simpleRandomSample({ population: demo, n: 1, seed: "s".repeat(129) }),
    () => S.systematicRandomStartSample({ population: demo, n: 5, seed: "s" }),
    () => S.makeDemoPopulation("unknown"),
    () => S.independentNormalCombination({ terms: [], independent: true }),
    () => S.independentNormalCombination({ terms: new Array(101).fill({ id: "X", coefficient: 1, mean: 0, variance: 1 }), independent: true }),
    () => S.independentNormalCombination({ terms: [{ id: "X", coefficient: 1, mean: 0, variance: 1 }] }),
    () => S.independentNormalCombination({ terms: [{ id: "X", coefficient: 1, mean: 0, variance: -1 }], independent: true }),
    () => S.independentNormalCombination({ terms: [{ id: "X", coefficient: Infinity, mean: 0, variance: 1 }], independent: true }),
    () => S.independentNormalCombination({ terms: [{ id: "X", coefficient: 1e300, mean: 1e300, variance: 1 }], independent: true }),
    () => S.independentNormalCombination({ terms: [{ id: "X", coefficient: 1e-300, mean: 1, variance: 1 }], independent: true }),
    () => S.independentNormalCombination({ terms: [{ id: "X", coefficient: 1, mean: 1, variance: 1 },
      { id: "X", coefficient: 1, mean: 1, variance: 1 }], independent: true }),
  ];
  for (const f of invalid) assert.throws(f, RangeError);
});
test("population inputs and returned values cannot mutate future calls", () => {
  const population = Object.freeze(demo.map(u => Object.freeze({ ...u })));
  for (const sample of [S.simpleRandomSample, S.proportionalStratifiedSample, S.systematicRandomStartSample, S.quotaConvenienceSample]) {
    const a = sample({ population, n: 6, seed: "immutable" });
    const before = sample({ population, n: 6, seed: "immutable" });
    a.selected[0].value = -1; a.selectedIds[0] = "changed";
    assert.deepEqual(sample({ population, n: 6, seed: "immutable" }), before);
  }
  const terms = Object.freeze([Object.freeze({ id: "X", coefficient: 2, mean: 3, variance: 4 })]);
  assert.equal(S.independentNormalCombination({ terms, independent: true }).variance, 16);
});
