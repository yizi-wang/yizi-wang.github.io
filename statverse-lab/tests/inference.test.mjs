import { test } from "node:test";
import assert from "node:assert/strict";
import * as I from "../src/inference.js";

function close(actual, expected, relative = 3e-11, absolute = 3e-15) {
  assert.ok(Number.isFinite(actual), `Nonfinite result ${actual}; expected ${expected}`);
  assert.ok(Math.abs(actual - expected) <= Math.max(absolute, relative * Math.abs(expected)),
    `${actual} vs ${expected} (relative ${relative}, absolute ${absolute})`);
}
function probClose(actual, expected, relative = 3e-11) {
  assert.ok(actual >= 0 && actual <= 1, `Probability outside [0,1]: ${actual}`);
  close(actual, expected, relative, expected === 0 ? 1e-300 : 1e-323);
}
function choose(n, k) {
  let c = 1n;
  for (let j = 1; j <= k; j++) c = c * BigInt(n - j + 1) / BigInt(j);
  return c;
}
function rationalBinomial(n, a, b) {
  const denominator = BigInt(b) ** BigInt(n);
  return Array.from({ length: n + 1 }, (_, k) => Number(choose(n, k)
    * BigInt(a) ** BigInt(k) * BigInt(b - a) ** BigInt(n - k)) / Number(denominator));
}

test("specified discrete and continuous regression oracles", () => {
  close(I.binomialSurvival(5, 20, .1), .04317449528446339);
  assert.equal(I.binomialCriticalRegion({ n: 20, p: .1, alternative: "greater" }).upper.min, 5);
  close(I.poissonSurvival(8, 4), .0511336157928473);
  close(I.poissonSurvival(9, 4), .02136343448798414);
  assert.equal(I.poissonCriticalRegion({ lambda: 4, alternative: "greater" }).upper.min, 9);
  const z = I.zTestOneMean({ mean: 496, nullMean: 500, variance: 100, n: 25 });
  assert.equal(z.z, -2);
  close(I.normalPValue(z.z, "less"), .0227501319481792);
  close(z.pValue, .0455002638963584);
  close(z.confidenceInterval.lower, 492.0800720309199);
  close(z.confidenceInterval.upper, 499.9199279690801);
  const two = I.zTestTwoMeans({ meanX: 100, meanY: 97, varianceX: 100, varianceY: 64, nX: 25, nY: 16 });
  close(two.standardError, Math.sqrt(8));
  close(two.z, 1.0606601717798212);
  close(two.pValue, .2888443663464849);
});

test("binomial PMF, inclusive CDF/SF match frozen SciPy oracles", () => {
  for (const [k, n, p, pmf, cdf, sf] of BINOMIAL_ORACLES) {
    const d = I.binomialDistribution(n, p);
    probClose(d.pmf(k), pmf);
    probClose(d.cdf(k), cdf);
    probClose(d.survival(k), sf);
  }
});
test("Poisson PMF, inclusive CDF/SF match frozen SciPy oracles", () => {
  for (const [k, lambda, pmf, cdf, sf] of POISSON_ORACLES) {
    probClose(I.poissonPMF(k, lambda), pmf, 8e-11);
    probClose(I.poissonCDF(k, lambda), cdf, 8e-11);
    probClose(I.poissonSurvival(k, lambda), sf, 8e-11);
  }
});
test("chi-square tails match SciPy across df, transitions and extreme tails", () => {
  for (const [x, df, cdf, sf] of CHI_ORACLES) {
    probClose(I.chiSquareCDF(x, df), cdf, 8e-11);
    probClose(I.chiSquareSurvival(x, df), sf, 8e-11);
  }
});
test("normal tails and inverse match SciPy, including subnormal quantiles", () => {
  for (const [z, cdf, sf] of NORMAL_ORACLES) {
    probClose(I.normalCDF(z), cdf, 8e-12);
    probClose(I.normalSurvival(z), sf, 8e-12);
  }
  for (const [p, q] of QUANTILE_ORACLES) close(I.normalInverseCDF(p), q, 2e-13, 2e-14);
});
test("M2: centered Normal quantiles and tiny confidence intervals retain relative precision", () => {
  // mpmath 1.3.0, 100 decimal digits, using the exact binary64 input p/c.
  // Quantile = sqrt(2)*erfinv(2*p-1); CI critical = sqrt(2)*erfinv(c).
  const centered = [
    [.49999999999999994, -1.3914582123358836e-16],
    [.5000000000000001, 2.782916424671767e-16],
    [.499999999999, -2.5065728237018603e-12],
    [.500000000001, 2.5065728237018603e-12],
    [.49999999, -2.5066282733116222e-8],
    [.50000001, 2.5066282872262043e-8],
    [.24999999999999997, -.6744897501960818],
    [.25, -.6744897501960817],
    [.25000000000000006, -.6744897501960816],
    [.7499999999999999, .6744897501960814],
    [.75, .6744897501960817],
    [.7500000000000001, .674489750196082],
  ];
  for (const [p, q] of centered) close(I.normalInverseCDF(p), q, 5e-15, 0);
  for (const ps of [centered.slice(6, 9), centered.slice(9, 12)]) {
    const qs = ps.map(([p]) => I.normalInverseCDF(p));
    assert.ok(qs[0] <= qs[1] && qs[1] <= qs[2]);
  }
  const confidence = [
    [1e-12, 1.2533141373155002e-12],
    [1e-8, 1.2533141373155004e-8],
    [.49999999999994543, .6744897501959959],
    [.4999999999999455, .674489750195996],
    [.5, .6744897501960817],
    [.8, 1.2815515655446006],
    [.95, 1.9599639845400538],
    [.99, 2.5758293035489004],
    [1 - 1e-12, 7.130509892879273],
  ];
  for (const [confidenceLevel, q] of confidence) {
    const one = I.zTestOneMean({ mean: 0, variance: 1, n: 1, confidenceLevel }).confidenceInterval;
    const two = I.zTestTwoMeans({ meanX: 0, meanY: 0, varianceX: 9, varianceY: 16,
      nX: 1, nY: 1, confidenceLevel }).confidenceInterval;
    close(one.criticalValue, q, 5e-15, 0);
    close(one.upper, q, 5e-15, 0); close(one.lower, -q, 5e-15, 0);
    close(two.criticalValue, q, 5e-15, 0); close(two.upper, 5 * q, 5e-15, 0);
  }
});
test("critical boundaries and actual sizes match independent SciPy searches", () => {
  for (const [kind, params, alpha, alternative, lower, upper, size] of CRITICAL_ORACLES) {
    const r = kind === "binomial"
      ? I.binomialCriticalRegion({ n: params[0], p: params[1], alpha, alternative })
      : I.poissonCriticalRegion({ lambda: params[0], alpha, alternative });
    assert.equal(r.lower?.max ?? null, lower);
    assert.equal(r.upper?.min ?? null, upper);
    probClose(r.actualSize, size, 1e-10);
    assert.ok(r.actualSize <= alpha);
  }
});

test("exact BigInt rational enumeration checks binomial masses and tails", () => {
  for (const n of [1, 2, 5, 12, 25]) for (const [a, b] of [[1, 2], [1, 5], [4, 5], [1, 10]]) {
    const ps = rationalBinomial(n, a, b), d = I.binomialDistribution(n, a / b);
    for (let k = 0; k <= n; k++) {
      probClose(d.pmf(k), ps[k], 2e-13);
      probClose(d.cdf(k), ps.slice(0, k + 1).reduce((s, p) => s + p, 0), 2e-13);
      probClose(d.survival(k), ps.slice(k).reduce((s, p) => s + p, 0), 2e-13);
    }
  }
});
test("BigInt arithmetic independently proves selected regions stay within exact alpha budgets", () => {
  for (const n of [0, 1, 2, 5, 12, 25, 40]) for (const a of [0, 1, 2, 3, 4]) {
    const denominator = 4n ** BigInt(n);
    const weights = Array.from({ length: n + 1 }, (_, k) => choose(n, k)
      * BigInt(a) ** BigInt(k) * BigInt(4 - a) ** BigInt(n - k));
    for (const alphaDenominator of [20, 100]) for (const alternative of ["less", "greater", "two-sided"]) {
      const budgetDenominator = BigInt(alphaDenominator * (alternative === "two-sided" ? 2 : 1));
      const r = I.binomialCriticalRegion({ n, p: a / 4, alpha: 1 / alphaDenominator, alternative });
      let expectedLower = null, expectedUpper = null, cumulative = 0n;
      if (alternative !== "greater") for (let k = 0; k <= n; k++) {
        cumulative += weights[k];
        if (cumulative * budgetDenominator <= denominator) expectedLower = k;
      }
      cumulative = 0n;
      if (alternative !== "less") for (let k = n; k >= 0; k--) {
        cumulative += weights[k];
        if (cumulative * budgetDenominator <= denominator) expectedUpper = k;
      }
      assert.equal(r.lower?.max ?? null, expectedLower);
      assert.equal(r.upper?.min ?? null, expectedUpper);
    }
  }
});
test("binomial normalization, tail identity, recurrence, reflection, moments", () => {
  for (const n of [1, 20, 200, 10000]) for (const p of [.001, .1, .5, .9, .999]) {
    const d = I.binomialDistribution(n, p), reflected = I.binomialDistribution(n, 1 - p);
    let mass = 0, mean = 0, variance = 0;
    for (let k = 0; k <= n; k++) {
      const pk = d.pmf(k);
      mass += pk; mean += k * pk; variance += (k - n * p) ** 2 * pk;
      if (k % Math.max(1, Math.floor(n / 37)) === 0) {
        close(d.cdf(k) + d.survival(k) - pk, 1, 0, 5e-15);
        close(pk, reflected.pmf(n - k), 5e-11, 2e-15);
        if (k < n && pk > 1e-250) close(d.pmf(k + 1) / pk,
          ((n - k) / (k + 1)) * p / (1 - p), 2e-13, 1e-14);
      }
    }
    close(mass, 1, 0, 5e-14); close(mean, n * p, 2e-13);
    close(variance, n * p * (1 - p), 2e-13);
  }
});
test("Poisson inclusive off-by-one identity and PMF recurrence", () => {
  for (const lambda of [.01, 1, 4, 25, 1000, 10000]) {
    for (const k of [0, 1, Math.floor(lambda), Math.floor(lambda + 5 * Math.sqrt(lambda))]) {
      close(I.poissonCDF(k, lambda) + I.poissonSurvival(k + 1, lambda), 1, 0, 5e-12);
      close(I.poissonCDF(k, lambda) + I.poissonSurvival(k, lambda) - I.poissonPMF(k, lambda), 1, 0, 8e-11);
      const pk = I.poissonPMF(k, lambda);
      if (pk > 1e-250) close(I.poissonPMF(k + 1, lambda) / pk, lambda / (k + 1), 1e-10);
    }
  }
});
test("critical regions are inclusive, maximal per allocated tail, conservative", () => {
  for (const n of [0, 1, 2, 20, 100, 10000]) for (const p of [0, .01, .1, .5, .99, 1]) {
    const d = I.binomialDistribution(n, p);
    for (const alpha of [.01, .05, .2, 1e-12]) for (const alternative of ["less", "greater", "two-sided"]) {
      const r = I.binomialCriticalRegion({ n, p, alpha, alternative });
      const budget = alternative === "two-sided" ? alpha / 2 : alpha;
      assert.ok(r.actualSize <= alpha);
      if (r.lower) {
        assert.ok(r.lower.actualSize <= budget);
        assert.ok(d.cdf(r.lower.max + 1) > budget);
      } else if (alternative !== "greater") assert.ok(d.cdf(0) > budget);
      if (r.upper) {
        assert.ok(r.upper.actualSize <= budget);
        assert.ok(d.survival(r.upper.min - 1) > budget);
      } else if (alternative !== "less") assert.ok(d.survival(n) > budget);
      if (r.lower && r.upper) assert.ok(r.lower.max < r.upper.min);
    }
  }
  for (const lambda of [0, 1e-8, .5, 4, 100, 10000]) {
    const r = I.poissonCriticalRegion({ lambda });
    assert.ok(r.actualSize <= .05);
    if (r.lower) {
      assert.ok(r.lower.actualSize <= .025);
      assert.ok(I.poissonCDF(r.lower.max + 1, lambda) > .025);
    }
    assert.ok(r.upper.actualSize <= .025);
    assert.ok(I.poissonSurvival(r.upper.min - 1, lambda) > .025);
  }
});
test("p-values consistently use inclusive doubled-min-tail, not probability ordering", () => {
  for (const k of [0, 1, 2, 5, 10, 20]) {
    const t = I.binomialTails(k, 20, .1);
    close(I.binomialPValue(k, 20, .1), Math.min(1, 2 * Math.min(t.lower, t.upper)));
    close(I.binomialPValue(k, 20, .1, "less"), t.lower);
    close(I.binomialPValue(k, 20, .1, "greater"), t.upper);
  }
  const ds = rationalBinomial(20, 1, 10);
  const probabilityOrdered = ds.filter(x => x <= ds[5]).reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(I.binomialPValue(5, 20, .1) - probabilityOrdered) > .01);
  close(I.poissonPValue(9, 4), 2 * I.poissonSurvival(9, 4));
  assert.equal(I.binomialTest({ k: 5, n: 20, p: .1, alternative: "greater" }).reject, true);
  assert.equal(I.poissonTest({ k: 8, lambda: 4, alternative: "greater" }).reject, false);
  assert.equal(I.poissonTest({ k: 9, lambda: 4, alternative: "greater" }).reject, true);
});
test("degenerate models and out-of-support queries have exact probabilities", () => {
  assert.equal(I.binomialCriticalRegion({ n: 1, p: .05, alpha: .05, alternative: "greater" }).upper.min, 1);
  assert.equal(I.binomialCriticalRegion({ n: 1, p: .025, alpha: .05 }).upper.min, 1);
  for (const n of [0, 1, 20, 10000]) for (const p of [0, 1]) {
    const at = p * n, d = I.binomialDistribution(n, p);
    assert.equal(d.pmf(at), 1); assert.equal(d.logPMF(at), 0);
    assert.equal(d.cdf(at), 1); assert.equal(d.survival(at), 1);
    assert.equal(d.cdf(at - 1), 0); assert.equal(d.survival(at + 1), 0);
    assert.equal(I.binomialPValue(at, n, p), 1);
  }
  assert.equal(I.binomialPValue(1, 20, 0), 0);
  assert.equal(I.binomialTest({ k: 1, n: 20, p: 0, alternative: "greater" }).reject, true);
  assert.equal(I.binomialCriticalRegion({ n: 0, p: .5 }).actualSize, 0);
  assert.equal(I.poissonPMF(0, 0), 1); assert.equal(I.poissonPMF(1, 0), 0);
  assert.equal(I.poissonCDF(-1, 0), 0); assert.equal(I.poissonCDF(0, 0), 1);
  assert.equal(I.poissonSurvival(0, 0), 1); assert.equal(I.poissonSurvival(1, 0), 0);
  assert.equal(I.poissonTest({ k: 1, lambda: 0 }).pValue, 0);
  assert.equal(I.binomialPMF(-1, 20, .2), 0);
  assert.equal(I.binomialCDF(21, 20, .2), 1);
  assert.equal(I.binomialSurvival(21, 20, .2), 0);
  assert.equal(I.poissonPMF(-1, 4), 0);
});
test("M3: impossible observations in degenerate models respect the selected direction", () => {
  for (const [alternative, upwardP, downwardP] of [["less", 1, 0], ["greater", 0, 1], ["two-sided", 0, 0]]) {
    assert.equal(I.binomialPValue(1, 20, 0, alternative), upwardP);
    assert.equal(I.poissonPValue(1, 0, alternative), upwardP);
    assert.equal(I.binomialPValue(19, 20, 1, alternative), downwardP);
    const bin = I.binomialTest({ k: 1, n: 20, p: 0, alternative });
    const pois = I.poissonTest({ k: 1, lambda: 0, alternative });
    const down = I.binomialTest({ k: 19, n: 20, p: 1, alternative });
    assert.equal(bin.pValue, upwardP); assert.equal(pois.pValue, upwardP);
    assert.equal(bin.reject, upwardP === 0); assert.equal(pois.reject, upwardP === 0);
    assert.equal(down.pValue, downwardP); assert.equal(down.reject, downwardP === 0);
  }
});
test("extreme tails remain positive when representable; logs survive underflow", () => {
  // Independent analytic tails: all successes, zero events, chi-square df=2.
  probClose(I.binomialPMF(1000, 1000, .5), 2 ** -1000, 3e-13);
  probClose(I.poissonPMF(0, 700), Math.exp(-700));
  probClose(I.chiSquareSurvival(1400, 2), Math.exp(-700));
  probClose(I.normalSurvival(10), 7.61985302416047e-24, 1e-13);
  assert.equal(I.normalCDF(10), 1);
  assert.ok(I.normalSurvival(38) > 0);
  assert.equal(I.binomialSurvival(10000, 10000, .5), 0);
  close(I.binomialTails(10000, 10000, .5).logUpper, -10000 * Math.LN2, 3e-13);
  close(I.binomialLogPMF(10000, 10000, .5), -10000 * Math.LN2, 3e-13);
  assert.equal(I.poissonPMF(0, 10000), 0);
  assert.equal(I.poissonLogPMF(0, 10000), -10000);
  close(I.poissonTails(0, 10000).logLower, -10000);
  close(I.chiSquareTails(20000, 2).logUpper, -10000);
  // High precision mpmath oracle: gamma(1/2,x/2) at the smallest positive x.
  probClose(I.chiSquareCDF(Number.MIN_VALUE, 1), 1.7735048886036273e-162, 3e-13);
  probClose(I.chiSquareCDF(3 * Number.MIN_VALUE, 1), 3.0718005745332645e-162, 3e-13);
  close(I.binomialTails(29, 100, 1e-12).logUpper, -743.51899921641931856, 0, 5e-12);
  assert.ok(Number.isFinite(I.chiSquareTails(Number.MIN_VALUE, 10000).logLower));
  // mpmath, 100 decimal digits: SciPy's log-factorial PMF loses digits here.
  probClose(I.poissonPMF(11357, 10000), 1.9137666316647343e-41, 3e-13);
  probClose(I.chiSquareSurvival(14626.484701708014, 10000), 1.4354659422360165e-181, 3e-13);
  for (const p of [Number.MIN_VALUE, 1e-300, 1 - Number.EPSILON]) {
    const d = I.binomialDistribution(100, p);
    for (const k of [0, 1, 50, 99, 100]) {
      assert.ok(!Number.isNaN(d.logPMF(k)));
      assert.ok(d.pmf(k) >= 0 && d.pmf(k) <= 1);
    }
  }
});
test("normal/chi-square monotonicity, symmetry, complements and analytic df=2", () => {
  assert.equal(I.normalCDF(-Infinity), 0); assert.equal(I.normalCDF(Infinity), 1);
  assert.equal(I.normalInverseCDF(0), -Infinity); assert.equal(I.normalInverseCDF(1), Infinity);
  assert.equal(I.chiSquareCDF(0, 1), 0); assert.equal(I.chiSquareSurvival(0, 1), 1);
  assert.equal(I.chiSquareCDF(Infinity, 1), 1); assert.equal(I.chiSquareSurvival(Infinity, 1), 0);
  let previous = 0;
  for (let z = -10; z <= 10; z += .125) {
    const p = I.normalCDF(z);
    assert.ok(p >= previous); previous = p;
    close(p + I.normalSurvival(z), 1, 0, 2e-16);
    close(I.normalSurvival(z), I.normalCDF(-z), 0, 0);
  }
  for (const df of [1, 2, 3, 50, 10000]) {
    let prev = 0;
    for (const x of [0, .001, .1, 1, 5, 20, 100, 1000, 10000, 20000, 1e15]) {
      const t = I.chiSquareTails(x, df);
      assert.ok(t.lower >= prev); prev = t.lower;
      close(t.lower + t.upper, 1, 0, 2e-16);
    }
  }
  for (const x of [.01, 1, 10, 100, 1000]) probClose(I.chiSquareSurvival(x, 2), Math.exp(-x / 2), 5e-13);
});
test("power evaluates the fixed null critical region under the alternative", () => {
  for (const alternative of ["less", "greater", "two-sided"]) {
    const b = I.binomialPower({ n: 20, p0: .1, p1: .1, alternative });
    close(b.power, b.typeI); close(b.power + b.typeII, 1);
    const p = I.poissonPower({ lambda0: 4, lambda1: 4, alternative });
    close(p.power, p.typeI); close(p.power + p.typeII, 1);
  }
  const p = I.binomialPower({ n: 20, p0: .1, p1: .4, alternative: "greater" });
  close(p.power, rationalBinomial(20, 2, 5).slice(5).reduce((s, x) => s + x, 0));
  assert.equal(p.curriculum, "enrichment");
  assert.ok(I.poissonPower({ lambda0: 4, lambda1: 10, alternative: "greater" }).power > .6);
  assert.equal(I.binomialPower({ n: 20, p0: 0, p1: 1, alternative: "greater" }).power, 1);
  assert.equal(I.poissonPower({ lambda0: 0, lambda1: 0 }).power, 0);
});
test("z test distinguishes estimated variance approximation, with no t fallback", () => {
  const params = { mean: 6, nullMean: 5, variance: 9, n: 100 };
  const known = I.zTestOneMean(params);
  const estimated = I.zTestOneMean({ ...params, varianceType: "estimated", largeSample: true });
  close(known.z, estimated.z); close(known.pValue, estimated.pValue);
  assert.equal(known.approximate, false); assert.equal(estimated.approximate, true);
  assert.match(estimated.method, /large-sample-estimated/);
  assert.equal(I.zTestOneMean({ ...params, largeSample: true }).approximate, true);
  assert.throws(() => I.zTestOneMean({ ...params, varianceType: "estimated" }), RangeError);
  assert.throws(() => I.zTestOneMean({ ...params, varianceType: "estimated", largeSample: true, n: 1 }), RangeError);
});
test("z tests obey location/scale, label swap, null shift and CI nesting", () => {
  const a = I.zTestOneMean({ mean: 7, nullMean: 5, variance: 9, n: 16 });
  const b = I.zTestOneMean({ mean: 7 * 3 + 100, nullMean: 5 * 3 + 100, variance: 81, n: 16 });
  close(a.z, b.z); close(a.pValue, b.pValue);
  close(b.confidenceInterval.lower, a.confidenceInterval.lower * 3 + 100);
  const x = { meanX: 10, meanY: 8, varianceX: 4, varianceY: 9, nX: 25, nY: 36 };
  const two = I.zTestTwoMeans(x), swapped = I.zTestTwoMeans({ meanX: 8, meanY: 10, varianceX: 9, varianceY: 4, nX: 36, nY: 25 });
  close(two.z, -swapped.z); close(two.pValue, swapped.pValue);
  close(I.zTestTwoMeans({ ...x, nullDifference: 2 }).z, 0);
  const wider = I.zTestTwoMeans({ ...x, confidenceLevel: .99 }).confidenceInterval;
  assert.ok(wider.lower < two.confidenceInterval.lower && wider.upper > two.confidenceInterval.upper);
  assert.equal(I.zTestOneMean({ mean: 0, variance: 1, n: 1 }).pValue, 1);
  assert.ok(I.zTestOneMean({ mean: 0, variance: 1, n: 1, confidenceLevel: 1 - 1e-12 }).confidenceInterval.upper > 7);
  close(I.zTestOneMean({ mean: 7, nullMean: 5, variance: 9, n: 16, alternative: "less" }).pValue
    + I.zTestOneMean({ mean: 7, nullMean: 5, variance: 9, n: 16, alternative: "greater" }).pValue, 1);
});
test("contingency returns expected cells, contributions, df and reference p-value", () => {
  const c = I.contingencyTest([[16, 4], [4, 16]]);
  assert.equal(c.status, "ok"); assert.equal(c.valid, true);
  assert.deepEqual(c.expected, [[10, 10], [10, 10]]);
  assert.deepEqual(c.contributions, [[3.6, 3.6], [3.6, 3.6]]);
  close(c.statistic, 14.4); assert.equal(c.df, 1);
  close(c.pValue, .000147802310334454); assert.equal(c.reject, true);
  const independent = I.contingencyTest([[20, 30, 50], [40, 60, 100]]);
  close(independent.statistic, 0); close(independent.pValue, 1); assert.equal(independent.df, 2);
});
test("contingency transpose/permutation invariance and scale law", () => {
  const table = [[12, 18, 30], [25, 25, 10], [15, 20, 25]];
  const a = I.contingencyTest(table);
  const transposed = table[0].map((_, j) => table.map(row => row[j]));
  close(a.statistic, I.contingencyTest(transposed).statistic);
  close(a.pValue, I.contingencyTest([...table].reverse().map(row => [...row].reverse())).pValue);
  close(I.contingencyTest(table.map(row => row.map(o => 5 * o))).statistic, 5 * a.statistic);
});
test("M1: expected frequency 5 stays exact and status is transpose invariant", () => {
  const transpose = table => table[0].map((_, j) => table.map(row => row[j]));
  for (const table of [[[10, 0], [67, 77]], [[5, 5], [72, 72]]]) {
    const r = I.contingencyTest(table), t = I.contingencyTest(transpose(table));
    assert.deepEqual(r.expected, [[5, 5], [72, 72]]);
    assert.deepEqual(t.expected, transpose(r.expected));
    for (const result of [r, t]) {
      assert.equal(result.status, "ok"); assert.equal(result.smallExpectedCount, 0);
      assert.equal(result.df, 1);
      close(result.statistic, table[0][0] === 10 ? 385 / 36 : 0, 1e-14, 0);
      close(result.pValue, table[0][0] === 10 ? .0010745773786670282 : 1, 1e-13);
      assert.equal(result.reject, table[0][0] === 10);
    }
  }
  // Products around 5*N must have the same classification as exact integers,
  // including near the supported N limit and when other products exceed 2^53.
  for (const [r, c] of [[10, 77], [999983, 5000087], [2236067, 2236069], [1000000, 5000000]]) {
    for (const delta of [-1, 0, 1]) {
      const total = Math.floor(r * c / 5) + delta;
      if (total <= r + c || total > I.INFERENCE_LIMITS.countTotal) continue;
      const table = [[0, r], [c, total - r - c]];
      for (const current of [table, transpose(table)]) {
        const result = I.contingencyTest(current);
        const exactSmall = result.rowTotals.flatMap(row => result.columnTotals.map(column =>
          BigInt(row) * BigInt(column) < 5n * BigInt(total)));
        assert.equal(result.smallExpectedCount, exactSmall.filter(Boolean).length);
        assert.equal(result.status, exactSmall.includes(true) ? "needs-pooling" : "ok");
        assert.deepEqual(result.expected.flat().map(e => e < 5), exactSmall);
      }
    }
  }
  const unpooled = I.goodnessOfFit({ observed: [2, 3, 95], expected: [2, 3, 95] });
  assert.equal(unpooled.status, "needs-pooling"); assert.equal(unpooled.pValue, null);
  const pooled = I.goodnessOfFit({ observed: [5, 95], expected: [5, 95] });
  assert.equal(pooled.status, "ok"); assert.equal(pooled.pValue, 1);
});
test("R1: exact integer residuals retain near-independent high-count chi-square statistics", () => {
  const table = [[5, 6], [454545454536, 545454545443]];
  const transpose = t => t[0].map((_, j) => t.map(row => row[j]));
  for (const t of [table, transpose(table)]) {
    const r = I.contingencyTest(t, { alpha: 1 - 1e-12 });
    // Python Fraction + mpmath 100 digits, not rounded expected-cell arithmetic.
    close(r.statistic, 3.6666666667802111111138598929630243e-25, 2e-15, 0);
    close(r.pValue, .9999999999995168569053837759517, 0, 2e-16);
    assert.equal(r.status, "ok"); assert.equal(r.reject, false);
  }
  // Independent 2x2 oracle: N*(ad-bc)^2 / ((a+b)(c+d)(a+c)(b+d)).
  function determinantOracle(t) {
    const [[a, b], [c, d]] = t.map(row => row.map(x => BigInt(x)));
    const N = a + b + c + d, determinant = a * d - b * c;
    return Number(N * determinant * determinant) / Number((a + b) * (c + d) * (a + c) * (b + d));
  }
  for (const k of [1, 7, 1000, 1000000, 1000000000, 90000000000]) {
    for (const delta of [-1, 0, 1]) {
      const original = [[5, 6], [5 * k + delta, 6 * k - delta]];
      for (const t of [original, transpose(original)]) {
        const result = I.contingencyTest(t);
        close(result.statistic, determinantOracle(t), 3e-15, 0);
        const N = BigInt(result.total);
        const small = result.rowTotals.flatMap(row => result.columnTotals.map(column =>
          BigInt(row) * BigInt(column) < 5n * N));
        assert.equal(result.smallExpectedCount, small.filter(Boolean).length);
        assert.equal(result.status, small.includes(true) ? "needs-pooling" : "ok");
      }
    }
  }
});
test("zero margins are invalid and small expected cells suppress inference", () => {
  for (const table of [[[0, 0], [0, 0]], [[0, 0], [2, 3]], [[0, 4], [0, 5]]]) {
    const r = I.contingencyTest(table);
    assert.equal(r.valid, false); assert.equal(r.pValue, null); assert.equal(r.reject, null);
    assert.equal(r.statistic, null); assert.equal(r.expected, null);
  }
  const low = I.contingencyTest([[1, 3], [3, 1]]);
  assert.equal(low.valid, true); assert.equal(low.status, "needs-pooling");
  assert.equal(low.smallExpectedCount, 4); assert.equal(low.minExpected, 2);
  assert.equal(low.approximationAppropriate, false);
  assert.equal(low.pValue, null); assert.equal(low.reject, null);
  assert.ok(low.asymptoticPValue > 0 && low.asymptoticPValue < 1);
  assert.equal(I.contingencyTest([[5, 5], [5, 5]]).status, "ok");
});
test("GOF accepts probabilities or expected counts, deducts fitted parameters", () => {
  const p = I.goodnessOfFit({ observed: [8, 9, 10, 13], probabilities: [.25, .25, .25, .25] });
  const e = I.goodnessOfFit({ observed: [8, 9, 10, 13], expected: [10, 10, 10, 10] });
  assert.deepEqual(p.expected, e.expected); close(p.statistic, 1.4);
  assert.equal(p.df, 3); close(p.pValue, .7055347312040912);
  assert.deepEqual(p.contributions, [.4, .1, 0, .9]);
  const fitted = I.goodnessOfFit({ observed: [8, 9, 10, 13], expected: [10, 10, 10, 10], fittedParameters: 1 });
  assert.equal(fitted.df, 2); close(fitted.statistic, p.statistic);
  assert.equal(fitted.pooling, "caller-defined");
  const permuted = I.goodnessOfFit({ observed: [13, 9, 8, 10], expected: [10, 10, 10, 10] });
  close(permuted.pValue, p.pValue);
  const sparse = I.goodnessOfFit({ observed: [1, 2, 3], probabilities: [1/3, 1/3, 1/3] });
  assert.equal(sparse.status, "needs-pooling"); assert.equal(sparse.categories, 3);
  assert.equal(sparse.pValue, null); assert.equal(sparse.reject, null);
  const tiny = I.goodnessOfFit({ observed: [0, 10], expected: [Number.MIN_VALUE, 10] });
  assert.equal(tiny.contributions[0], Number.MIN_VALUE);
});
test("GOF handles caller-defined Binomial, Poisson, Normal and unequal-width uniform bins", () => {
  // SciPy chisquare references; these test category/df handling, not fitting.
  const cases = [
    { observed: [10, 40, 55, 40, 15], expected: [10, 40, 60, 40, 10], fittedParameters: 0,
      statistic: 2.9166666666666665, p: .5718664923800113 },
    { observed: [25, 50, 60, 65], expected: [27.06705664732254, 54.13411329464508, 54.13411329464508, 64.6647167633873], fittedParameters: 1,
      statistic: 1.1109274808322056, p: .5738061024062197 },
    { observed: [30, 75, 60, 35], expected: [31.731050786291416, 68.26894921370858, 68.26894921370858, 31.731050786291416], fittedParameters: 2,
      statistic: 2.096420589700453, p: .1476444227534674 },
    { observed: [15, 40, 145], expected: [20, 40, 140], fittedParameters: 0,
      statistic: 1.4285714285714286, p: .48954165955695306 },
  ];
  for (const { statistic, p, ...options } of cases) {
    const r = I.goodnessOfFit(options);
    assert.equal(r.status, "ok"); close(r.statistic, statistic); close(r.pValue, p);
  }
});
test("invalid inputs and unsupported domains reject explicitly", () => {
  const failures = [
    () => I.binomialPMF(.5, 20, .1), () => I.binomialPMF(2, -1, .1),
    () => I.binomialPMF(2, 10001, .1), () => I.binomialCDF(100001, 20, .1),
    () => I.binomialCDF(0, 20, NaN), () => I.binomialCDF(0, 20, -1),
    () => I.binomialCDF(0, 20, 1.01), () => I.binomialCDF(0, "20", .1),
    () => I.binomialTest({ k: -1, n: 20, p: .1 }), () => I.binomialTest({ k: 21, n: 20, p: .1 }),
    () => I.poissonPMF(1.1, 4), () => I.poissonCDF(1, -1), () => I.poissonCDF(1, 10001),
    () => I.poissonSurvival(Infinity, 4), () => I.poissonTest({ k: -1, lambda: 4 }),
    () => I.binomialPValue(1, 20, .1, "upper"),
    () => I.poissonCriticalRegion({ lambda: 4, alpha: 0 }),
    () => I.poissonCriticalRegion({ lambda: 4, alpha: 1 }),
    () => I.binomialCriticalRegion({ n: 20, p: .1, alpha: 1e-15 }),
    () => I.normalCDF(NaN), () => I.normalCDF("2"), () => I.normalInverseCDF(-.01),
    () => I.normalInverseCDF(1.01), () => I.chiSquareCDF(-1, 1),
    () => I.chiSquareSurvival(1, 0), () => I.chiSquareCDF(1, 10001),
    () => I.chiSquareCDF(1e16, 1), () => I.chiSquareCDF(1, NaN),
    () => I.zTestOneMean({ mean: 1, variance: 0, n: 10 }),
    () => I.zTestOneMean({ mean: 1, variance: 1, n: 0 }),
    () => I.zTestOneMean({ mean: 1, variance: 1, n: 10, confidenceLevel: "0.95" }),
    () => I.zTestOneMean({ mean: 1, variance: 1, n: 10, varianceType: "sample" }),
    () => I.zTestOneMean({ mean: 1, variance: 1, n: 10, largeSample: "yes" }),
    () => I.zTestOneMean({ mean: 1e308, nullMean: -1e308, variance: 1, n: 10 }),
    () => I.zTestTwoMeans({ meanX: 0, meanY: 0, varianceX: 1, varianceY: -1, nX: 10, nY: 10 }),
    () => I.contingencyTest([[1, -1], [1, 1]]), () => I.contingencyTest([[1, 1.2], [1, 1]]),
    () => I.contingencyTest([[1, NaN], [1, 1]]), () => I.contingencyTest([[1, 2], [1]]),
    () => I.contingencyTest([[1, 2]]), () => I.contingencyTest([[1], [2]]),
    () => I.contingencyTest([[1e12, 1], [1, 1]]),
    () => I.goodnessOfFit({ observed: [0, 0], expected: [1, 1] }),
    () => I.goodnessOfFit({ observed: [5, 5], probabilities: [.4, .4] }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [5, 4] }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [5] }),
    () => I.goodnessOfFit({ observed: [5, 5], probabilities: [0, 1] }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [0, 10] }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [5, 5], probabilities: [.5, .5] }),
    () => I.goodnessOfFit({ observed: [5, 5] }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [5, 5], fittedParameters: 1 }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [5, 5], fittedParameters: .5 }),
    () => I.goodnessOfFit({ observed: [5, 5], expected: [1e-300, 10] }),
  ];
  for (const [index, f] of failures.entries()) assert.throws(f, RangeError, `invalid case ${index}`);
});
test("functions do not mutate inputs and factory queries cannot mutate its state", () => {
  const table = Object.freeze([Object.freeze([16, 4]), Object.freeze([4, 16])]);
  const result = I.contingencyTest(table); result.expected[0][0] = -999;
  assert.equal(I.contingencyTest(table).expected[0][0], 10);
  const options = Object.freeze({ observed: Object.freeze([8, 9, 10, 13]), expected: Object.freeze([10, 10, 10, 10]) });
  I.goodnessOfFit(options);
  const d = I.binomialDistribution(20, .1), before = d.tails(5);
  d.tails(5).upper = -1;
  assert.deepEqual(d.tails(5), before); assert.ok(Object.isFrozen(d));
});
// Frozen reference values generated with Python 3 / SciPy 1.17.0.
// scipy.stats survival uses sf(k-1) for our inclusive discrete tails.
const BINOMIAL_ORACLES = [
  [0,0,0.3,1.0,1.0,1.0],
  [0,1,0.1,0.8999999999999998,0.9,1.0],
  [1,1,0.1,0.1,1.0,0.1],
  [0,20,0.1,0.12157665459056922,0.12157665459056925,1.0],
  [2,20,0.1,0.28517980706429846,0.6769268051894659,0.6082530018748321],
  [10,20,0.1,6.442043387911562e-06,0.9999992911393668,7.150904021083786e-06],
  [20,20,0.1,1.0000000000000011e-20,1.0,1.0000000000000011e-20],
  [0,50,0.5,8.881784197001254e-16,8.881784197001252e-16,1.0],
  [20,50,0.5,0.04185914925255223,0.10131937553227033,0.9405397737202819],
  [25,50,0.5,0.112275172659217,0.5561375863296085,0.5561375863296085],
  [33,50,0.5,0.008746229865819176,0.992326661083685,0.016419568782134242],
  [50,50,0.5,8.881784197001252e-16,1.0,8.881784197001252e-16],
  [0,100,0.99,1.000000000000088e-200,1.0000000000000887e-200,1.0],
  [50,100,0.99,6.103987557173258e-72,6.165015712303176e-72,1.0],
  [94,100,0.99,0.00046345080262178687,0.0005345344639930353,0.9999289163386288],
  [99,100,0.99,0.36972963764972655,0.6339676587267709,0.7357619789229561],
  [100,100,0.99,0.3660323412732292,1.0,0.36603234127322914],
  [0,1000,0.001,0.3676954247709639,0.36769542477096406,1.0],
  [1,1000,0.001,0.3680634882592233,0.7357589130301876,0.6323045752290359],
  [9,1000,0.001,9.861811817953688e-07,0.9999998925716613,1.093609520480021e-06],
  [500,1000,0.001,0.0,1.0,0.0],
  [1000,1000,0.001,0.0,1.0,0.0],
  [0,1000,0.49,3.7168590992837837e-293,3.716859099283712e-293,1.0],
  [485,1000,0.49,0.024004916738335734,0.3880342248983134,0.6359706918400235],
  [490,1000,0.49,0.025230061330650377,0.5126990635849438,0.5125309977457063],
  [498,1000,0.49,0.02219384323910013,0.7046468619116755,0.31754698132742454],
  [500,1000,0.49,0.020651671825821116,0.7467502275563251,0.2739014442694964],
  [1000,1000,0.49,1.57065220561815e-310,1.0,1.57065220561815e-310],
  [0,10000,0.2,0.0,0.0,1.0],
  [1995,10000,0.2,0.009904757695782284,0.4561928496753534,0.55371190802043],
  [2000,10000,0.2,0.009973120676464978,0.5059837527344189,0.5039893679420488],
  [2008,10000,0.2,0.009761224889656951,0.5850712849385911,0.42468993995106574],
  [5000,10000,0.2,0.0,1.0,0.0],
  [10000,10000,0.2,0.0,1.0,0.0],
  [0,10000,0.9999,0.0,0.0,1.0],
  [5000,10000,0.9999,0.0,0.0,1.0],
  [9994,10000,0.9999,0.0005104583754975962,0.000593571851238647,0.9999168865242589],
  [9999,10000,0.9999,0.3678978362165516,0.6321389535670295,0.7357588826495222],
  [10000,10000,0.9999,0.36786104643297046,1.0,0.36786104643297046],
];
const POISSON_ORACLES = [
  [0,0,1.0,1.0,1.0],
  [1,0,0.0,1.0,0.0],
  [8,0,0.0,1.0,0.0],
  [9,0,0.0,1.0,0.0],
  [50,0,0.0,1.0,0.0],
  [0,1e-08,0.9999999900000001,0.9999999900000001,1.0],
  [1,1e-08,9.999999899999975e-09,1.0,9.999999949999975e-09],
  [8,1e-08,2.480158705357074e-69,1.0,2.48015870811282e-69],
  [9,1e-08,2.755731894841182e-78,1.0,2.7557318975969007e-78],
  [50,1e-08,0.0,1.0,0.0],
  [0,0.01,0.990049833749168,0.990049833749168,1.0],
  [1,0.01,0.009900498337491686,0.9999503320866597,0.009950166250831952],
  [8,0.01,2.455480738465215e-21,1.0,2.4582117811911233e-21],
  [9,0.01,2.728311931628004e-24,1.0,2.7310427259117064e-24],
  [50,0.01,3.255233773313457e-165,1.0,3.255872177214946e-165],
  [0,0.5,0.6065306597126334,0.6065306597126334,1.0],
  [1,0.5,0.30326532985631666,0.9097959895689501,0.3934693402873665],
  [7,0.5,9.401826942470143e-07,0.9999999378030914,1.0023796028842995e-06],
  [8,0.5,5.8761418390438375e-08,0.9999999965645098,6.219690863728644e-08],
  [9,0.5,3.2645232439132407e-09,0.999999999829033,3.4354902468481273e-09],
  [51,0.5,1.736512571012135e-82,1.0,1.7533688002761177e-82],
  [0,4,0.01831563888873418,0.018315638888734182,1.0],
  [1,4,0.07326255555493673,0.0915781944436709,0.9816843611112658],
  [4,4,0.19536681481316454,0.6288369351798734,0.566529879633291],
  [8,4,0.029770181304863145,0.9786365655120158,0.0511336157928473],
  [9,4,0.013231191691050305,0.9918677572030661,0.021363434487984143],
  [21,4,1.5766597422006976e-09,0.9999999996536013,1.9230584594146956e-09],
  [58,4,6.473363311026904e-46,1.0,6.943544266473007e-46],
  [0,20,2.061153622438558e-09,2.0611536224385566e-09,1.0],
  [1,20,4.122307244877113e-08,4.328422607120966e-08,0.9999999979388464],
  [8,20,0.0013086689666276534,0.002087259049135014,0.9992214099174926],
  [9,20,0.002908153259172565,0.0049954123083075785,0.997912740950865],
  [20,20,0.0888353173920848,0.5590925842313251,0.5297427331607607],
  [56,20,2.0889179461526818e-11,0.9999999999888629,3.2026225739046415e-11],
  [90,20,1.7174107685010065e-30,1.0,2.199317144076523e-30],
  [0,100,3.720075976020836e-44,3.7200759760208177e-44,1.0],
  [1,100,3.720075976020818e-42,3.75727673578106e-42,1.0],
  [8,100,9.226378908781944e-33,1.001941839974035e-32,1.0],
  [9,100,1.0251532120868678e-31,1.1253473960842808e-31,1.0],
  [50,100,1.2231421635189012e-08,2.4015922356168933e-08,0.9999999882154993],
  [100,100,0.03986099680914883,0.5265621985299985,0.5132987982791487],
  [181,100,1.0230616612984882e-13,0.999999999999877,2.253109977250991e-13],
  [250,100,1.1507087466284641e-36,1.0,1.909489416162153e-36],
  [0,1000,0.0,0.0,1.0],
  [1,1000,0.0,0.0,1.0],
  [8,1000,0.0,0.0,1.0],
  [9,1000,0.0,0.0,1.0],
  [841,1000,2.1488888167259638e-08,1.3108380557707494e-07,0.9999998904050826],
  [1000,1000,0.01261461134870819,0.508409367168506,0.5042052441802155],
  [1253,1000,1.5693420530811818e-15,0.9999999999999939,7.656553570896224e-15],
  [2050,1000,7.22447537616873e-186,1.0,1.4092181248921977e-185],
  [0,10000,0.0,0.0,1.0],
  [1,10000,0.0,0.0,1.0],
  [8,10000,0.0,0.0,1.0],
  [9,10000,0.0,0.0,1.0],
  [9500,10000,1.2318370376856736e-08,2.3793771979994862e-07,0.9999997743806506],
  [10000,10000,0.003989389558963281,0.5026595812190077,0.5013298083399552],
  [10801,10000,1.0227209079137592e-16,0.9999999999999988,1.3585403417653109e-15],
  [20050,10000,0.0,1.0,0.0],
];
const CHI_ORACLES = [
  [1e-12,1,7.978845608027324e-07,0.9999992021154392],
  [0.01,1,0.07965567455405799,0.920344325445942],
  [1,1,0.6826894921370859,0.31731050786291115],
  [0.5,1,0.5204998778130466,0.47950012218695337],
  [1,1,0.6826894921370859,0.31731050786291115],
  [1.5,1,0.7793286380801531,0.22067136191984324],
  [3,1,0.9167354833364496,0.08326451666355042],
  [1000,1,1.0,1.7958327848007363e-219],
  [1e-12,2,4.999999999998741e-13,0.9999999999995],
  [0.01,2,0.004987520807317688,0.9950124791926823],
  [1,2,0.3934693402873665,0.6065306597126334],
  [1.0,2,0.3934693402873665,0.6065306597126334],
  [2,2,0.6321205588285577,0.36787944117144245],
  [3.0,2,0.7768698398515702,0.22313016014842982],
  [6,2,0.950212931632136,0.04978706836786395],
  [1000,2,1.0,7.124576406741474e-218],
  [1e-12,3,2.659615202675428e-19,1.0],
  [0.01,3,0.0002651650586556101,0.9997348349413444],
  [1,3,0.19874804309879915,0.8012519569012009],
  [1.5,3,0.31772966966378746,0.6822703303362125],
  [3,3,0.6083748237289109,0.3916251762710877],
  [4.5,3,0.7877097126398673,0.2122902873601327],
  [9,3,0.9707091134651118,0.02929088653488826],
  [1000,3,1.0,1.7994208765314067e-216],
  [1e-12,5,5.31923040535053e-32,1.0],
  [0.01,5,5.300270042686517e-07,0.9999994699729957],
  [1,5,0.03743422675270361,0.9625657732472964],
  [2.5,5,0.22350492887667728,0.7764950711233227],
  [5,5,0.584119813004492,0.4158801869955079],
  [7.5,5,0.813970166397133,0.186029833602867],
  [15,5,0.9896376620842136,0.010362337915786429],
  [1000,5,1.0,6.0100776879208495e-214],
  [1e-12,10,2.6041666666655312e-64,1.0],
  [0.01,10,2.593339189839545e-14,0.999999999999974],
  [1,10,0.00017211562995584072,0.9998278843700441],
  [5.0,10,0.10882198108584877,0.8911780189141513],
  [10,10,0.5595067149347879,0.44049328506521257],
  [15.0,10,0.8679381437122794,0.1320618562877206],
  [30,10,0.9991433587892247,0.000856641210775301],
  [1000,10,1.0,1.870290720915977e-208],
  [1e-12,30,2.3337291662036458e-197,1.0],
  [0.01,30,2.322815509929921e-47,1.0],
  [1,30,1.4610500924439148e-17,1.0],
  [15.0,30,0.010260427912342602,0.9897395720876574],
  [30,30,0.5343462910559904,0.4656537089440098],
  [45.0,30,0.9613982417336827,0.03860175826631727],
  [90,30,0.9999999343267318,6.56732682000148e-08],
  [1000,30,1.0,5.131435321572562e-191],
  [1e-12,100,0.0,1.0],
  [0.01,100,2.906005633118692e-180,1.0],
  [1,100,1.7887765104351563e-80,1.0],
  [50.0,100,6.953305247616201e-06,0.9999930466947524],
  [100,100,0.5188083154720433,0.48119168452795674],
  [150.0,100,0.9990960679576459,0.0009039320423540184],
  [300,100,1.0,7.4121008573230175e-22],
  [1000,100,1.0,2.3060767380354624e-148],
  [1e-12,1000,0.0,1.0],
  [0.01,1000,0.0,1.0],
  [1,1000,0.0,1.0],
  [500.0,1000,4.0671656819977657e-44,1.0],
  [1000,1000,0.5059471461707603,0.49405285382923964],
  [1500.0,1000,1.0,1.0454640385980825e-22],
  [3000,1000,1.0,1.6436845843568014e-198],
  [1000,1000,0.5059471461707603,0.49405285382923964],
  [1e-12,10000,0.0,1.0],
  [0.01,10000,0.0,1.0],
  [1,10000,0.0,1.0],
  [5000.0,10000,0.0,1.0],
  [10000,10000,0.5018806340338173,0.49811936596618267],
  [15000.0,10000,1.0,5.915868829058352e-208],
  [30000,10000,1.0,0.0],
  [1000,10000,0.0,1.0],
  [1e-12,2.5,3.7109184343149883e-16,0.9999999999999997],
  [0.01,2.5,0.00117024137140301,0.998829758628597],
  [1,2.5,0.28378995266531293,0.7162100473346871],
  [1.25,2.5,0.3518185642781,0.6481814357219],
  [2.5,2.5,0.6185287719969266,0.38147122800307387],
  [3.75,2.5,0.7817026874738723,0.2182973125261277],
  [7.5,2.5,0.9618309117847932,0.038169088215206766],
  [1000,2.5,1.0,3.718752151107947e-217],
];
const NORMAL_ORACLES = [
  [-38,0.0,1.0],
  [-37,5.7255712225239266e-300,1.0],
  [-20,2.7536241186061556e-89,1.0],
  [-10,7.61985302416047e-24,1.0],
  [-8,6.22096057427174e-16,0.9999999999999993],
  [-5,2.866515718791933e-07,0.9999997133484281],
  [-2,0.022750131948179195,0.9772498680518208],
  [-1,0.15865525393145707,0.8413447460685429],
  [-1e-08,0.4999999960105772,0.5000000039894228],
  [0,0.5,0.5],
  [1e-08,0.5000000039894228,0.4999999960105772],
  [1,0.8413447460685429,0.15865525393145707],
  [2,0.9772498680518208,0.022750131948179195],
  [5,0.9999997133484281,2.866515718791933e-07],
  [8,0.9999999999999993,6.22096057427174e-16],
  [10,1.0,7.61985302416047e-24],
  [20,1.0,2.7536241186061556e-89],
  [37,1.0,5.7255712225239266e-300],
  [38,1.0,0.0],
];
const QUANTILE_ORACLES = [
  [5e-324,-38.467405617144344],
  [1e-300,-37.0470962993612],
  [1e-100,-21.273453560965322],
  [1e-20,-9.262340089798409],
  [1e-12,-7.034483825301131],
  [1e-06,-4.753424308822899],
  [0.001,-3.090232306167813],
  [0.0227501319481792,-2.0000000000000004],
  [0.025,-1.9599639845400545],
  [0.25,-0.6744897501960817],
  [0.5,0.0],
  [0.75,0.6744897501960817],
  [0.975,1.959963984540054],
  [0.999,3.090232306167813],
  [0.999999999999,7.0344869100478356],
  [0.9999999999999999,8.209536151601387],
];
const CRITICAL_ORACLES = [
  ["binomial",[20,0.1],0.05,"less",null,null,0],
  ["binomial",[20,0.1],0.05,"greater",null,5,0.04317449528446339],
  ["binomial",[20,0.1],0.05,"two-sided",null,6,0.011253134164509005],
  ["binomial",[20,0.1],0.01,"less",null,null,0],
  ["binomial",[20,0.1],0.01,"greater",null,7,0.002386089408966118],
  ["binomial",[20,0.1],0.01,"two-sided",null,7,0.002386089408966118],
  ["binomial",[20,0.1],1e-12,"less",null,null,0],
  ["binomial",[20,0.1],1e-12,"greater",null,16,3.2634676000000035e-13],
  ["binomial",[20,0.1],1e-12,"two-sided",null,16,3.2634676000000035e-13],
  ["binomial",[50,0.5],0.05,"less",18,null,0.03245432353613609],
  ["binomial",[50,0.5],0.05,"greater",null,32,0.03245432353613609],
  ["binomial",[50,0.5],0.05,"two-sided",17,33,0.032839137564268484],
  ["binomial",[50,0.5],0.01,"less",16,null,0.007673338916315053],
  ["binomial",[50,0.5],0.01,"greater",null,34,0.007673338916315053],
  ["binomial",[50,0.5],0.01,"two-sided",15,35,0.006600447966810918],
  ["binomial",[50,0.5],1e-12,"less",1,null,4.529709940470639e-14],
  ["binomial",[50,0.5],1e-12,"greater",null,49,4.529709940470639e-14],
  ["binomial",[50,0.5],1e-12,"two-sided",1,49,9.059419880941277e-14],
  ["binomial",[1000,0.002],0.05,"less",null,null,0],
  ["binomial",[1000,0.002],0.05,"greater",null,6,0.016455364615135783],
  ["binomial",[1000,0.002],0.05,"two-sided",null,6,0.016455364615135783],
  ["binomial",[1000,0.002],0.01,"less",null,null,0],
  ["binomial",[1000,0.002],0.01,"greater",null,7,0.004485778759591443],
  ["binomial",[1000,0.002],0.01,"two-sided",null,7,0.004485778759591443],
  ["binomial",[1000,0.002],1e-12,"less",null,null,0],
  ["binomial",[1000,0.002],1e-12,"greater",null,19,5.642874621575913e-13],
  ["binomial",[1000,0.002],1e-12,"two-sided",null,20,5.5179723230943294e-14],
  ["binomial",[10000,0.8],0.05,"less",7933,null,0.048641114507440145],
  ["binomial",[10000,0.8],0.05,"greater",null,8067,0.04775748701357938],
  ["binomial",[10000,0.8],0.05,"two-sided",7920,8079,0.04826756478171247],
  ["binomial",[10000,0.8],0.01,"less",7906,null,0.00999313905214879],
  ["binomial",[10000,0.8],0.01,"greater",null,8094,0.009413499479640375],
  ["binomial",[10000,0.8],0.01,"two-sided",7895,8103,0.009670210976178852],
  ["binomial",[10000,0.8],1e-12,"less",7713,null,9.2846269195682e-13],
  ["binomial",[10000,0.8],1e-12,"greater",null,8277,9.757044789705006e-13],
  ["binomial",[10000,0.8],1e-12,"two-sided",7709,8281,9.220435128353922e-13],
  ["poisson",[4],0.05,"less",0,null,0.018315638888734182],
  ["poisson",[4],0.05,"greater",null,9,0.021363434487984143],
  ["poisson",[4],0.05,"two-sided",0,9,0.039679073376718325],
  ["poisson",[4],0.01,"less",null,null,0],
  ["poisson",[4],0.01,"greater",null,10,0.008132242796933871],
  ["poisson",[4],0.01,"two-sided",null,11,0.0028397661205137414],
  ["poisson",[4],1e-12,"less",null,null,0],
  ["poisson",[4],1e-12,"greater",null,26,2.398510212133836e-13],
  ["poisson",[4],1e-12,"two-sided",null,26,2.398510212133836e-13],
  ["poisson",[100],0.05,"less",83,null,0.04632061500398772],
  ["poisson",[100],0.05,"greater",null,118,0.04284487248662185],
  ["poisson",[100],0.05,"two-sided",80,121,0.045318505720608304],
  ["poisson",[100],0.01,"less",76,null,0.007445661237928624],
  ["poisson",[100],0.01,"greater",null,125,0.00877359898867324],
  ["poisson",[100],0.01,"two-sided",74,128,0.00796780626485722],
  ["poisson",[100],1e-12,"less",37,null,4.252358647649913e-13],
  ["poisson",[100],1e-12,"greater",null,179,7.437986476711825e-13],
  ["poisson",[100],1e-12,"two-sided",37,180,8.357210231851148e-13],
  ["poisson",[10000],0.05,"less",9835,null,0.04968968061013479],
  ["poisson",[10000],0.05,"greater",null,10166,0.04925420205108023],
  ["poisson",[10000],0.05,"two-sided",9803,10197,0.049411356830414616],
  ["poisson",[10000],0.01,"less",9767,null,0.009839183111737813],
  ["poisson",[10000],0.01,"greater",null,10234,0.00996506887789725],
  ["poisson",[10000],0.01,"two-sided",9742,10260,0.009737158328600861],
  ["poisson",[10000],1e-12,"less",9304,null,9.866065294581188e-13],
  ["poisson",[10000],1e-12,"greater",null,10712,9.98575952203999e-13],
  ["poisson",[10000],1e-12,"two-sided",9294,10722,9.639088720379246e-13],
];
