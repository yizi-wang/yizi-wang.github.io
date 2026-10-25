import { test } from "node:test";
import assert from "node:assert/strict";
import {
  POOLS,
  mean,
  variance,
  moments,
  seededRandom,
  draw,
  values,
  statistic,
  theory,
  exactDistribution,
  ranks,
  pearson,
  contingency,
  normalCDF,
} from "../src/statistics.js";
const close = (x, y, tol = 1e-10) =>
  assert.ok(Math.abs(x - y) < tol, `${x} vs ${y}`);
const pool = { cards: [1, 2, 9].map((value) => ({ value, p: 1 / 3 })) };
test("independent oracle: nine ordered samples, expectations and variances", () => {
  const ds = exactDistribution(pool, 2, "mean");
  assert.deepEqual(
    ds.map((x) => x.value),
    [1, 1.5, 5, 1.5, 2, 5.5, 5, 5.5, 9],
  );
  close(
    ds.reduce((s, x) => s + x.p * x.value, 0),
    4,
  );
  close(
    ds.reduce((s, x) => s + x.p * (x.value - 4) ** 2, 0),
    19 / 3,
  );
  for (const [kind, expected] of [
    ["variance", 38 / 3],
    ["varianceN", 19 / 3],
  ])
    close(
      exactDistribution(pool, 2, kind).reduce((s, x) => s + x.p * x.value, 0),
      expected,
    );
});
test("unequal probabilities must weight ordered samples", () => {
  const p = {
    cards: [
      { value: 0, p: 0.9 },
      { value: 10, p: 0.1 },
    ],
  };
  const d = exactDistribution(p, 2, "mean");
  close(
    d.reduce((s, x) => s + x.p * x.value, 0),
    1,
  );
  close(
    d.reduce((s, x) => s + x.p * (x.value - 1) ** 2, 0),
    4.5,
  );
});
test("expectation and SE: mean, first, shifted, variance", () => {
  for (const p of Object.values(POOLS)) {
    for (const n of [2, 3, 4]) {
      for (const kind of ["mean", "first", "shift", "variance", "varianceN"]) {
        const d = exactDistribution(p, n, kind),
          t = theory(p, n, kind);
        const e = d.reduce((s, x) => s + x.p * x.value, 0),
          v = d.reduce((s, x) => s + x.p * (x.value - e) ** 2, 0);
        close(e, t.expectation, 1e-8);
        close(Math.sqrt(v), t.se, 1e-7);
      }
    }
  }
});
test("n affects mean SE; R is not a theory parameter", () => {
  close(theory(pool, 4, "mean").se, theory(pool, 1, "mean").se / 2);
  close(theory(pool, 20, "first").se, theory(pool, 1, "first").se);
});
test("n=1 unbiased variance undefined; cap is honest", () => {
  assert.ok(Number.isNaN(variance([3])));
  assert.ok(Number.isNaN(theory(pool, 1, "variance").expectation));
  assert.throws(() => exactDistribution(POOLS.aurora, 20, "mean"), RangeError);
  assert.throws(() => draw(pool, 1.5, Math.random), RangeError);
});
test("seed and RNG stream reproduce across batch boundaries", () => {
  const r1 = seededRandom("test"),
    r2 = seededRandom("test");
  const one = Array.from({ length: 100 }, () => draw(pool, 5, r1));
  const two = [
    ...Array.from({ length: 10 }, () => draw(pool, 5, r2)),
    ...Array.from({ length: 90 }, () => draw(pool, 5, r2)),
  ];
  assert.deepEqual(one, two);
});
test("location, scale, order metamorphic properties", () => {
  const xs = [1, 2, 9];
  close(mean(xs.map((x) => x + 5)), mean(xs) + 5);
  close(variance(xs.map((x) => -3 * x)), 9 * variance(xs));
  close(statistic(xs, "mean"), statistic([...xs].reverse(), "mean"));
});
test("independent correlation and contingency oracles", () => {
  const xs = [1, 2, 2, 4],
    ys = [4, 1, 1, 3];
  assert.deepEqual(ranks(xs), [1, 2.5, 2.5, 4]);
  close(pearson(ranks(xs), ranks(ys)), -1 / 3);
  assert.ok(Number.isNaN(pearson([1, 1], [1, 2])));
  close(pearson([1, 2, 3, 4], [1, 4, 9, 16]), 0.9843740386976972);
  const c = contingency([
    [16, 4],
    [4, 16],
  ]);
  close(c.statistic, 14.4);
  assert.equal(c.df, 1);
  assert.deepEqual(c.expected, [
    [10, 10],
    [10, 10],
  ]);
  assert.equal(
    contingency([
      [0, 0],
      [0, 0],
    ]),
    null,
  );
  close(normalCDF(-2), 0.0227501319481792, 1e-7);
});
test("invalid data/model boundaries are rejected explicitly", () => {
  assert.throws(() => mean([]), RangeError);
  assert.throws(() => mean([1, Infinity]), RangeError);
  assert.throws(() => moments({ cards: [{ value: 1, p: 0.9 }] }), RangeError);
  assert.throws(() => statistic([1, 2], "unknown"), RangeError);
  assert.throws(() => theory(pool, 0, "mean"), RangeError);
  assert.throws(
    () =>
      contingency([
        [1, -1],
        [2, 3],
      ]),
    RangeError,
  );
  assert.throws(
    () =>
      contingency([
        [1.2, 1],
        [2, 3],
      ]),
    RangeError,
  );
  assert.throws(() => pearson([1, 2], [1]), RangeError);
});
