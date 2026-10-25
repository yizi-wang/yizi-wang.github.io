import { test } from "node:test";
import assert from "node:assert/strict";
import {
  meanZTest,
  twoMeanZTest,
  regression,
  pearson,
  ranks,
  shuffle,
  seededRandom,
  binomialAtLeastOne,
  normalPDF,
  normalCDF,
  draw,
  POOLS,
} from "../src/statistics.js";
const close = (a, b, t = 1e-10) =>
  assert.ok(Math.abs(a - b) < t, `${a} vs ${b}`);
test("known sigma one/two mean z independent oracles", () => {
  const a = meanZTest({ xbar: 496, mu0: 500, sigma: 10, n: 25 });
  close(a.z, -2);
  close(a.p, 0.0455002638963584, 1e-7);
  const b = twoMeanZTest({
    xbar: 100,
    ybar: 97,
    sigmaX: 10,
    sigmaY: 8,
    nx: 25,
    ny: 16,
  });
  close(b.se, Math.sqrt(8));
  close(b.z, 1.0606601717798212);
  close(b.p, 0.2888443663464849, 1e-7);
});
test("regression intercept, residual sum and degeneracy", () => {
  const xs = [1, 2, 3, 4],
    ys = [2, 4, 6, 8],
    r = regression(xs, ys);
  close(r.slope, 2);
  close(r.intercept, 0);
  close(r.predict(6), 12);
  assert.equal(regression([1, 1], [2, 3]), null);
  assert.equal(regression([1, 2], [4, 4]).slope, 0);
});
test("strictly increasing transforms preserve tied and untied rank correlation", () => {
  for (const ys of [
    [1, 2, 4, 8],
    [1, 2, 2, 5],
  ]) {
    const xs = [1, 2, 3, 4];
    close(
      pearson(ranks(xs), ranks(ys)),
      pearson(ranks(xs), ranks(ys.map((y) => y * y))),
    );
  }
  const xs = [-4, -3, -2, -1, 0, 1, 2, 3, 4],
    ys = xs.map((x) => x * x);
  close(pearson(xs, ys), 0);
  close(pearson(ranks(xs), ranks(ys)), 0);
});
test("shuffle preserves multisets and seed, including ties", () => {
  const a = [1, 2, 2, 4],
    r1 = seededRandom("p"),
    r2 = seededRandom("p");
  assert.deepEqual(shuffle(a, r1), shuffle(a, r2));
  assert.deepEqual(
    shuffle(a, r1).sort((a, b) => a - b),
    a,
  );
});
test("independent review helper domain and degenerate probabilities", () => {
  for (const p of [-0.1, 1.1, NaN])
    assert.throws(() => binomialAtLeastOne(2, p), RangeError);
  assert.equal(binomialAtLeastOne(0, 1), 0);
  assert.equal(binomialAtLeastOne(2, 1), 1);
  assert.equal(binomialAtLeastOne(2, 0), 0);
  assert.throws(() => normalPDF(0, 0, -1), RangeError);
  assert.throws(() => normalPDF(0, 0, 0), RangeError);
  assert.throws(() => normalCDF(NaN), RangeError);
  assert.throws(() => draw(POOLS.small, 2, () => NaN), RangeError);
  assert.throws(() => draw(POOLS.small, 2, () => 1), RangeError);
});

test('Normal CDF against independent Python erfc grid, including small tails',async()=>{const {readFile}=await import('node:fs/promises');const fixture=JSON.parse(await readFile(new URL('./fixtures/normal-cdf.json',import.meta.url),'utf8'));for(const {x,cdf} of fixture.cases){const actual=normalCDF(x);close(actual,cdf,1e-10);if(x<=-5)assert.ok(Math.abs(actual/cdf-1)<1e-10)}});
