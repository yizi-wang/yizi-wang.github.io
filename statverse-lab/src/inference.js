/**
 * Pure inference for STATVERSE; no imports, randomness, I/O or shared cache.
 * All discrete survival functions are INCLUSIVE: P(X >= k), not P(X > k).
 * See docs/INFERENCE-ENGINE-CONTRACT.md for domains and model assumptions.
 */
export const INFERENCE_LIMITS = Object.freeze({
  binomialN: 10000,
  poissonLambda: 10000,
  discreteK: 100000,
  chiSquareDf: 10000,
  chiSquareX: 1e15,
  countTotal: 1e12,
  sampleSize: 1e9,
  minAlpha: 1e-12,
});

function requireRange(ok, message) {
  if (!ok) throw new RangeError(message);
}
function finite(x, name) {
  requireRange(typeof x === "number" && Number.isFinite(x), `${name} must be finite`);
}
function integer(x, lo, hi, name) {
  requireRange(Number.isSafeInteger(x) && x >= lo && x <= hi,
    `${name} must be a safe integer in [${lo}, ${hi}]`);
}
function probability(p, name = "p") {
  finite(p, name);
  requireRange(p >= 0 && p <= 1, `${name} must be in [0, 1]`);
}
function significance(alpha) {
  finite(alpha, "alpha");
  requireRange(alpha >= INFERENCE_LIMITS.minAlpha && alpha <= 1 - INFERENCE_LIMITS.minAlpha,
    "alpha must be in [1e-12, 1 - 1e-12]");
}
function alternativeName(alternative) {
  requireRange(["less", "greater", "two-sided"].includes(alternative),
    'alternative must be "less", "greater" or "two-sided"');
}
function clampProbability(x) { return Math.max(0, Math.min(1, x)); }
function sum(xs) {
  let s = 0, c = 0;
  for (const x of xs) {
    const y = x - c, t = s + y;
    c = (t - s) - y;
    s = t;
  }
  return s;
}
function logAdd(a, b) {
  if (a === -Infinity) return b;
  if (b === -Infinity) return a;
  return Math.max(a, b) + Math.log1p(Math.exp(-Math.abs(a - b)));
}
function logComplement(logP) {
  if (logP === -Infinity) return 0;
  if (logP >= 0) return -Infinity;
  return logP < -Math.LN2 ? Math.log1p(-Math.exp(logP)) : Math.log(-Math.expm1(logP));
}

// Lanczos log Gamma, positive arguments only (internal a >= 0.5).
const LANCZOS = [
  676.5203681218851, -1259.1392167224028, 771.3234287776531,
  -176.6150291621406, 12.507343278686905, -0.13857109526572012,
  9.984369578019572e-6, 1.5056327351493116e-7,
];
function logGamma(z) {
  if (z === 1 || z === 2) return 0;
  const y = z - 1;
  let a = 0.99999999999980993;
  for (let i = 0; i < LANCZOS.length; i++) a += LANCZOS[i] / (y + i + 1);
  const t = y + 7.5;
  return 0.9189385332046727 + (y + 0.5) * Math.log(t) - t + Math.log(a);
}

function gammaLogScale(a, x, logX = Math.log(x)) {
  if (a < 16) return a * logX - x - logGamma(a);
  // Stirling correction through a^-9. Evaluate around x=a via log1p so
  // a*log(x)-x-logGamma(a) does not subtract terms of size a*log(a).
  const inv = 1 / a, inv2 = inv * inv;
  const correction = inv * (1 / 12 + inv2 * (-1 / 360 + inv2 * (1 / 1260
    + inv2 * (-1 / 1680 + inv2 / 1188))));
  const delta = (x - a) / a;
  const deviance = Math.abs(delta) < 0.5
    ? a * (Math.log1p(delta) - delta)
    : a * (logX - Math.log(a)) - (x - a);
  return deviance + 0.5 * Math.log(a) - 0.9189385332046727 - correction;
}

// Regularized lower/upper incomplete gamma. Compute the small tail directly;
// retain logs so a representational zero is distinguishable from impossibility.
function gammaTails(a, x, logX = Math.log(x)) {
  if (x === 0 && logX === -Infinity) return { lower: 0, upper: 1, logLower: -Infinity, logUpper: 0 };
  if (x === Infinity) return { lower: 1, upper: 0, logLower: 0, logUpper: -Infinity };
  const logScale = gammaLogScale(a, x, logX);
  const eps = 2e-15, maxIterations = 100000;
  if (x < a + 1) {
    let term = 1 / a, s = term, c = 0, converged = false;
    for (let i = 1; i <= maxIterations; i++) {
      term *= x / (a + i);
      const y = term - c, t = s + y;
      c = (t - s) - y;
      s = t;
      if (term <= s * eps) { converged = true; break; }
    }
    requireRange(converged, "Incomplete gamma series did not converge");
    const logLower = Math.min(0, logScale + Math.log(s));
    return { lower: Math.exp(logLower), upper: -Math.expm1(logLower),
      logLower, logUpper: logComplement(logLower) };
  }
  const tiny = 1e-300;
  let b = x + 1 - a, c = 1 / tiny, d = 1 / b, h = d, converged = false;
  for (let i = 1; i <= maxIterations; i++) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b;
    if (Math.abs(d) < tiny) d = tiny;
    c = b + an / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) <= eps) { converged = true; break; }
  }
  requireRange(converged && h > 0 && Number.isFinite(h), "Incomplete gamma fraction did not converge");
  const logUpper = Math.min(0, logScale + Math.log(h));
  return { lower: -Math.expm1(logUpper), upper: Math.exp(logUpper),
    logLower: logComplement(logUpper), logUpper };
}

function realOrInfinity(x, name) {
  requireRange(typeof x === "number" && !Number.isNaN(x), `${name} must be a number, not NaN`);
}
export function normalTails(z) {
  realOrInfinity(z, "z");
  if (z === 0) return { lower: 0.5, upper: 0.5, logLower: -Math.LN2, logUpper: -Math.LN2 };
  const g = gammaTails(0.5, (Math.abs(z) / Math.SQRT2) ** 2);
  const logSmall = g.logUpper - Math.LN2;
  const small = Math.exp(logSmall), large = -Math.expm1(logSmall);
  return z < 0
    ? { lower: small, upper: large, logLower: logSmall, logUpper: logComplement(logSmall) }
    : { lower: large, upper: small, logLower: logComplement(logSmall), logUpper: logSmall };
}
export function normalCDF(z) { return normalTails(z).lower; }
export function normalSurvival(z) { return normalTails(z).upper; }
export function normalInverseCDF(p) {
  probability(p);
  if (p === 0) return -Infinity;
  if (p === 1) return Infinity;
  if (p === 0.5) return 0;
  const logTarget = Math.log(p < 0.5 ? p : 1 - p);
  let lo = 0, hi = 40;
  // Bisection in the log tail covers even Number.MIN_VALUE without subtraction.
  for (let i = 0; i < 90; i++) {
    const mid = (lo + hi) / 2;
    if (normalTails(mid).logUpper > logTarget) lo = mid;
    else hi = mid;
  }
  const q = (lo + hi) / 2;
  return p < 0.5 ? -q : q;
}

function checkK(k) { integer(k, -INFERENCE_LIMITS.discreteK, INFERENCE_LIMITS.discreteK, "k"); }
function checkBinomial(n, p) {
  integer(n, 0, INFERENCE_LIMITS.binomialN, "n");
  probability(p);
}

/** Build once when plotting or making many queries for the same n,p. */
export function binomialDistribution(n, p) {
  checkBinomial(n, p);
  const mode = Math.min(n, Math.floor((n + 1) * p));
  const weights = new Float64Array(n + 1), logs = new Float64Array(n + 1);
  logs.fill(-Infinity);
  weights[mode] = 1;
  logs[mode] = 0;
  if (p > 0 && p < 1) {
    let logWeight = 0, logCorrection = 0;
    for (let k = mode; k > 0; k--) {
      const ratio = (k / (n - k + 1)) * ((1 - p) / p);
      weights[k - 1] = weights[k] * ratio;
      const logRatio = Math.log(k) - Math.log(n - k + 1) + Math.log1p(-p) - Math.log(p);
      const y = logRatio - logCorrection, t = logWeight + y;
      logCorrection = (t - logWeight) - y; logWeight = t;
      logs[k - 1] = logWeight;
    }
    logWeight = 0; logCorrection = 0;
    for (let k = mode; k < n; k++) {
      const ratio = ((n - k) / (k + 1)) * (p / (1 - p));
      weights[k + 1] = weights[k] * ratio;
      // Logs of the factors avoid a ratio underflow for subnormal p.
      const logRatio = Math.log(n - k) - Math.log(k + 1) + Math.log(p) - Math.log1p(-p);
      const y = logRatio - logCorrection, t = logWeight + y;
      logCorrection = (t - logWeight) - y; logWeight = t;
      logs[k + 1] = logWeight;
    }
  }
  // Bernoulli probabilities can be returned exactly as supplied. In particular,
  // do not turn p === alpha into p > alpha through mode normalization.
  if (n === 1) {
    weights[0] = 1 - p; weights[1] = p;
    logs[0] = p === 0 ? 0 : Math.log1p(-p); logs[1] = Math.log(p);
  }
  const total = sum(weights), logTotal = Math.log(total);
  const lower = new Float64Array(n + 1), upper = new Float64Array(n + 1);
  const logLower = new Float64Array(n + 1), logUpper = new Float64Array(n + 1);
  let s = 0, c = 0, ls = -Infinity;
  for (let k = 0; k <= n; k++) {
    const y = weights[k] - c, t = s + y;
    c = (t - s) - y; s = t;
    ls = logAdd(ls, logs[k]);
    lower[k] = clampProbability(s / total);
    logLower[k] = Math.min(0, ls - logTotal);
  }
  s = 0; c = 0; ls = -Infinity;
  for (let k = n; k >= 0; k--) {
    const y = weights[k] - c, t = s + y;
    c = (t - s) - y; s = t;
    ls = logAdd(ls, logs[k]);
    upper[k] = clampProbability(s / total);
    logUpper[k] = Math.min(0, ls - logTotal);
  }
  function tails(k) {
    checkK(k);
    if (k < 0) return { lower: 0, upper: 1, logLower: -Infinity, logUpper: 0 };
    if (k > n) return { lower: 1, upper: 0, logLower: 0, logUpper: -Infinity };
    return { lower: lower[k], upper: upper[k], logLower: logLower[k], logUpper: logUpper[k] };
  }
  return Object.freeze({
    n, p, tails,
    pmf(k) { checkK(k); return k < 0 || k > n ? 0 : weights[k] / total; },
    logPMF(k) { checkK(k); return k < 0 || k > n ? -Infinity : logs[k] - logTotal; },
    cdf(k) { return tails(k).lower; },
    survival(k) { return tails(k).upper; },
  });
}
export function binomialPMF(k, n, p) { return binomialDistribution(n, p).pmf(k); }
export function binomialLogPMF(k, n, p) { return binomialDistribution(n, p).logPMF(k); }
export function binomialTails(k, n, p) { return binomialDistribution(n, p).tails(k); }
export function binomialCDF(k, n, p) { return binomialTails(k, n, p).lower; }
export function binomialSurvival(k, n, p) { return binomialTails(k, n, p).upper; }

function checkLambda(lambda) {
  finite(lambda, "lambda");
  requireRange(lambda >= 0 && lambda <= INFERENCE_LIMITS.poissonLambda,
    "lambda must be in [0, 10000]");
}
export function poissonLogPMF(k, lambda) {
  checkK(k); checkLambda(lambda);
  if (k < 0) return -Infinity;
  if (lambda === 0) return k === 0 ? 0 : -Infinity;
  if (k === 0) return -lambda;
  return gammaLogScale(k, lambda) - Math.log(k);
}
export function poissonPMF(k, lambda) { return Math.exp(poissonLogPMF(k, lambda)); }
export function poissonTails(k, lambda) {
  checkK(k); checkLambda(lambda);
  if (k < 0) return { lower: 0, upper: 1, logLower: -Infinity, logUpper: 0 };
  if (lambda === 0) return { lower: 1, upper: k === 0 ? 1 : 0,
    logLower: 0, logUpper: k === 0 ? 0 : -Infinity };
  const c = gammaTails(k + 1, lambda);
  const s = k === 0 ? { lower: 1, logLower: 0 } : gammaTails(k, lambda);
  return { lower: c.upper, upper: s.lower, logLower: c.logUpper, logUpper: s.logLower };
}
export function poissonCDF(k, lambda) { return poissonTails(k, lambda).lower; }
export function poissonSurvival(k, lambda) { return poissonTails(k, lambda).upper; }

function tailPValue(tails, alternative) {
  alternativeName(alternative);
  if (alternative === "less") return tails.lower;
  if (alternative === "greater") return tails.upper;
  if (Math.min(tails.lower, tails.upper) < 1e-300)
    return Math.exp(Math.min(0, Math.LN2 + Math.min(tails.logLower, tails.logUpper)));
  return Math.min(1, 2 * Math.min(tails.lower, tails.upper));
}
export function binomialPValue(k, n, p, alternative = "two-sided") {
  return tailPValue(binomialTails(k, n, p), alternative);
}
export function poissonPValue(k, lambda, alternative = "two-sided") {
  return tailPValue(poissonTails(k, lambda), alternative);
}
export function normalPValue(z, alternative = "two-sided") {
  return tailPValue(normalTails(z), alternative);
}

function criticalRegion(distribution, parameters, cdf, survival, max, alpha, alternative) {
  significance(alpha); alternativeName(alternative);
  const budget = alternative === "two-sided" ? alpha / 2 : alpha;
  let lower = null, upper = null;
  if (alternative !== "greater") {
    // Largest supported k with P(X <= k) <= budget; -1 denotes empty.
    let lo = -1, hi = max + 1;
    while (hi - lo > 1) {
      const mid = Math.floor((lo + hi) / 2);
      if (cdf(mid) <= budget) lo = mid; else hi = mid;
    }
    if (lo >= 0) lower = { max: lo, nominalAlpha: budget, actualSize: cdf(lo) };
  }
  if (alternative !== "less") {
    // Smallest k with P(X >= k) <= budget; max+1 denotes empty.
    let lo = -1, hi = max + 1;
    while (hi - lo > 1) {
      const mid = Math.floor((lo + hi) / 2);
      if (survival(mid) <= budget) hi = mid; else lo = mid;
    }
    if (hi <= max) upper = { min: hi, nominalAlpha: budget, actualSize: survival(hi) };
  }
  const actualSize = (lower?.actualSize ?? 0) + (upper?.actualSize ?? 0);
  return { distribution, parameters, alternative, nominalAlpha: alpha, actualSize, lower, upper,
    convention: alternative === "two-sided" ? "equal-tail-alpha-allocation" : "inclusive-tail" };
}
export function binomialCriticalRegion({ n, p, alpha = 0.05, alternative = "two-sided" } = {}) {
  const d = binomialDistribution(n, p);
  return criticalRegion("binomial", { n, p }, d.cdf, d.survival, n, alpha, alternative);
}
export function poissonCriticalRegion({ lambda, alpha = 0.05, alternative = "two-sided" } = {}) {
  checkLambda(lambda);
  // This domain/alpha bound keeps every attainable boundary below discreteK.
  return criticalRegion("poisson", { lambda }, k => poissonCDF(k, lambda),
    k => poissonSurvival(k, lambda), INFERENCE_LIMITS.discreteK, alpha, alternative);
}
function inRegion(k, region) {
  return (region.lower !== null && k <= region.lower.max)
    || (region.upper !== null && k >= region.upper.min);
}
export function binomialTest({ k, n, p, alpha = 0.05, alternative = "two-sided" } = {}) {
  checkK(k); checkBinomial(n, p);
  requireRange(k >= 0 && k <= n, "Observed binomial k must be in [0, n]");
  const region = binomialCriticalRegion({ n, p, alpha, alternative });
  return { statistic: k, pValue: binomialPValue(k, n, p, alternative),
    tails: binomialTails(k, n, p), pValueConvention: alternative === "two-sided" ? "doubled-min-inclusive-tail" : "inclusive-tail",
    criticalRegion: region, reject: inRegion(k, region), approximate: false };
}
export function poissonTest({ k, lambda, alpha = 0.05, alternative = "two-sided" } = {}) {
  checkK(k); requireRange(k >= 0, "Observed Poisson k must be nonnegative");
  const region = poissonCriticalRegion({ lambda, alpha, alternative });
  return { statistic: k, pValue: poissonPValue(k, lambda, alternative),
    tails: poissonTails(k, lambda), pValueConvention: alternative === "two-sided" ? "doubled-min-inclusive-tail" : "inclusive-tail",
    criticalRegion: region, reject: inRegion(k, region), approximate: false };
}
function operatingCharacteristics(region, cdf, survival) {
  const power = clampProbability((region.lower ? cdf(region.lower.max) : 0)
    + (region.upper ? survival(region.upper.min) : 0));
  return { power, typeII: 1 - power, typeI: region.actualSize, criticalRegion: region,
    approximate: false, curriculum: "enrichment" };
}
export function binomialPower({ n, p0, p1, alpha = 0.05, alternative = "two-sided" } = {}) {
  const region = binomialCriticalRegion({ n, p: p0, alpha, alternative });
  const d = binomialDistribution(n, p1);
  return operatingCharacteristics(region, d.cdf, d.survival);
}
export function poissonPower({ lambda0, lambda1, alpha = 0.05, alternative = "two-sided" } = {}) {
  checkLambda(lambda1);
  const region = poissonCriticalRegion({ lambda: lambda0, alpha, alternative });
  return operatingCharacteristics(region, k => poissonCDF(k, lambda1), k => poissonSurvival(k, lambda1));
}

function sampleParameters(mean, variance, n, name, varianceType, largeSample) {
  finite(mean, `${name}.mean`); finite(variance, `${name}.variance`);
  requireRange(variance > 0, `${name}.variance must be positive; zero variance inference is unsupported`);
  integer(n, varianceType === "estimated" ? 2 : 1, INFERENCE_LIMITS.sampleSize, `${name}.n`);
  requireRange(varianceType === "known" || varianceType === "estimated",
    'varianceType must be "known" or "estimated"');
  requireRange(typeof largeSample === "boolean", "largeSample must be boolean");
  requireRange(varianceType !== "estimated" || largeSample,
    "Estimated variance requires explicit largeSample: true (normal approximation, not t)");
}
function zResult(estimate, nullValue, standardError, { alpha, alternative, confidenceLevel, varianceType, largeSample }) {
  significance(alpha); alternativeName(alternative);
  finite(confidenceLevel, "confidenceLevel");
  requireRange(confidenceLevel >= INFERENCE_LIMITS.minAlpha && confidenceLevel <= 1 - INFERENCE_LIMITS.minAlpha,
    "confidenceLevel must be in [1e-12, 1 - 1e-12]");
  requireRange(Number.isFinite(estimate) && Number.isFinite(standardError) && standardError > 0,
    "Derived estimate and standard error must be finite, with positive standard error");
  const z = (estimate - nullValue) / standardError;
  requireRange(Number.isFinite(z), "Derived z is outside the finite numerical domain");
  const pValue = normalPValue(z, alternative);
  const criticalValue = -normalInverseCDF((1 - confidenceLevel) / 2);
  const lower = estimate - criticalValue * standardError, upper = estimate + criticalValue * standardError;
  requireRange(Number.isFinite(lower) && Number.isFinite(upper), "Confidence limits overflow");
  return { estimate, nullValue, standardError, z, pValue, alpha, alternative,
    reject: pValue <= alpha, approximate: largeSample,
    method: largeSample ? `z-large-sample-${varianceType}-variance` : "z-known-variance-normal",
    confidenceInterval: { lower, upper, confidenceLevel, kind: "two-sided", criticalValue } };
}
export function zTestOneMean({ mean, nullMean = 0, variance, n, varianceType = "known", largeSample = false,
  alpha = 0.05, alternative = "two-sided", confidenceLevel = 0.95 } = {}) {
  sampleParameters(mean, variance, n, "sample", varianceType, largeSample);
  finite(nullMean, "nullMean");
  return zResult(mean, nullMean, Math.sqrt(variance) / Math.sqrt(n),
    { alpha, alternative, confidenceLevel, varianceType, largeSample });
}
export function zTestTwoMeans({ meanX, meanY, varianceX, varianceY, nX, nY, nullDifference = 0,
  varianceType = "known", largeSample = false, alpha = 0.05, alternative = "two-sided", confidenceLevel = 0.95 } = {}) {
  sampleParameters(meanX, varianceX, nX, "X", varianceType, largeSample);
  sampleParameters(meanY, varianceY, nY, "Y", varianceType, largeSample);
  finite(nullDifference, "nullDifference");
  return zResult(meanX - meanY, nullDifference,
    Math.hypot(Math.sqrt(varianceX) / Math.sqrt(nX), Math.sqrt(varianceY) / Math.sqrt(nY)),
    { alpha, alternative, confidenceLevel, varianceType, largeSample });
}

export function chiSquareTails(x, df) {
  realOrInfinity(x, "x");
  requireRange(x >= 0 && (x <= INFERENCE_LIMITS.chiSquareX || x === Infinity),
    "chi-square x must be in [0, 1e15] or +Infinity");
  finite(df, "df");
  requireRange(df >= 1 && df <= INFERENCE_LIMITS.chiSquareDf, "df must be in [1, 10000]");
  // x/2 can round to zero even when the df=1 lower tail is representable.
  return x > 0 && x < 1e-300
    ? gammaTails(df / 2, x / 2, Math.log(x) - Math.LN2)
    : gammaTails(df / 2, x / 2);
}
export function chiSquareCDF(x, df) { return chiSquareTails(x, df).lower; }
export function chiSquareSurvival(x, df) { return chiSquareTails(x, df).upper; }

function countArray(observed, name) {
  requireRange(Array.isArray(observed) && observed.length > 0, `${name} must be a nonempty array`);
  for (const x of observed) integer(x, 0, INFERENCE_LIMITS.countTotal, `${name} count`);
}
function countTotal(observed) {
  const total = sum(observed);
  requireRange(Number.isSafeInteger(total) && total <= INFERENCE_LIMITS.countTotal,
    "Count total must be a safe integer <= 1e12");
  return total;
}
function chiSquareResult(statistic, df, expectedFlat, alpha) {
  const smallExpectedCount = expectedFlat.filter(x => x < 5).length;
  const approximationAppropriate = smallExpectedCount === 0;
  const asymptoticPValue = chiSquareSurvival(statistic, df);
  return { valid: true, status: approximationAppropriate ? "ok" : "needs-pooling",
    statistic, df, approximate: true, method: "pearson-chi-square", alpha,
    minExpected: Math.min(...expectedFlat), smallExpectedCount, approximationAppropriate,
    asymptoticPValue, pValue: approximationAppropriate ? asymptoticPValue : null,
    reject: approximationAppropriate ? asymptoticPValue <= alpha : null };
}
function pearsonContribution(observed, expected) {
  // Avoid squaring an extremely small expected count when observed is zero.
  return observed === 0 ? expected : (observed - expected) ** 2 / expected;
}
export function contingencyTest(observed, { alpha = 0.05 } = {}) {
  significance(alpha);
  requireRange(Array.isArray(observed) && observed.length >= 2 && observed.length <= 100,
    "A contingency table needs 2..100 rows");
  const columns = observed[0]?.length;
  integer(columns, 2, 100, "column count");
  for (const row of observed) {
    countArray(row, "table row");
    requireRange(row.length === columns, "Contingency table must be rectangular");
  }
  const total = countTotal(observed.flat()), df = (observed.length - 1) * (columns - 1);
  const rowTotals = observed.map(row => sum(row));
  const columnTotals = Array.from({ length: columns }, (_, j) => sum(observed.map(row => row[j])));
  if (total === 0 || rowTotals.includes(0) || columnTotals.includes(0)) {
    return { valid: false, status: total === 0 ? "invalid-total" : "invalid-zero-margin",
      total, rowTotals, columnTotals, df, statistic: null, expected: null, contributions: null,
      approximate: true, approximationAppropriate: false, asymptoticPValue: null, pValue: null,
      reject: null, alpha, method: "pearson-chi-square" };
  }
  const expected = rowTotals.map(r => columnTotals.map(c => (r / total) * c));
  const contributions = observed.map((row, i) => row.map((o, j) => pearsonContribution(o, expected[i][j])));
  const statistic = sum(contributions.flat());
  return { ...chiSquareResult(statistic, df, expected.flat(), alpha), total, rowTotals, columnTotals,
    expected, contributions };
}

export function goodnessOfFit({ observed, probabilities, expected, fittedParameters = 0, alpha = 0.05 } = {}) {
  significance(alpha); countArray(observed, "observed");
  integer(observed.length, 2, INFERENCE_LIMITS.chiSquareDf + 1, "category count");
  const total = countTotal(observed);
  requireRange(total > 0, "Goodness of fit needs a positive observed total");
  requireRange((probabilities !== undefined) !== (expected !== undefined),
    "Supply exactly one of probabilities or expected");
  const supplied = probabilities ?? expected;
  requireRange(Array.isArray(supplied) && supplied.length === observed.length,
    "Expected/probability array must match observed categories");
  for (const e of supplied) {
    finite(e, "Expected frequency/probability");
    requireRange(e > 0, "Every expected frequency/probability must be positive; remove structural zero categories explicitly");
    if (probabilities !== undefined) requireRange(e <= 1, "Probability must be <= 1");
  }
  const target = probabilities !== undefined ? 1 : total;
  requireRange(Math.abs(sum(supplied) - target) <= 1e-12 * target,
    "Probabilities must sum to 1; expected frequencies must sum to the observed total (relative tolerance 1e-12)");
  integer(fittedParameters, 0, observed.length - 2, "fittedParameters");
  const es = probabilities !== undefined ? supplied.map(p => p * total) : [...supplied];
  requireRange(es.every(e => e > 0), "Expected frequencies underflowed; supplied probabilities are too small");
  const contributions = observed.map((o, i) => pearsonContribution(o, es[i]));
  const statistic = sum(contributions), df = observed.length - 1 - fittedParameters;
  requireRange(Number.isFinite(statistic) && statistic <= INFERENCE_LIMITS.chiSquareX,
    "Goodness-of-fit statistic exceeds the supported domain [0, 1e15]");
  return { ...chiSquareResult(statistic, df, es, alpha), total, expected: es, contributions,
    fittedParameters, categories: observed.length, pooling: "caller-defined" };
}
