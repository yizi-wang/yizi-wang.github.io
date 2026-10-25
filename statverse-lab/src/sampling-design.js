/** Pure finite-population teaching models. No I/O, global RNG or real records. */
export const SAMPLING_LIMITS = Object.freeze({ populationSize: 10000, strata: 100,
  absoluteValue: 1e6, normalTerms: 100, seedLength: 128 });

const DEMO = [
  ["A01", "Amber", 10, .98], ["A02", "Amber", 30, .35],
  ["A03", "Amber", 15, .94], ["A04", "Amber", 35, .25],
  ["A05", "Amber", 20, .90], ["A06", "Amber", 40, .15],
  ["C01", "Cobalt", 45, .96], ["C02", "Cobalt", 65, .30],
  ["C03", "Cobalt", 50, .92], ["C04", "Cobalt", 70, .20],
  ["V01", "Violet", 75, .95], ["V02", "Violet", 95, .10],
];
export const SAMPLING_DEMO = Object.freeze({ name: "Orbit Academy — entirely fictional",
  target: "fictional task points", recommendedN: 6, seed: "orbit-demo-1",
  orders: Object.freeze(["periodic", "balanced"]),
  note: "Accessibility is a selection score for this convenience mechanism, not a response probability." });

function check(ok, message) { if (!ok) throw new RangeError(message); }
function finite(x, name) { check(typeof x === "number" && Number.isFinite(x), `${name} must be finite`); }
function integer(x, lo, hi, name) {
  check(Number.isSafeInteger(x) && x >= lo && x <= hi, `${name} must be an integer in [${lo}, ${hi}]`);
}
function label(x, name) { check(typeof x === "string" && x.trim().length > 0 && x.length <= 64,
  `${name} must be a nonempty string of at most 64 characters`); }
function sum(xs) {
  let s = 0, c = 0;
  for (const x of xs) { const y = x - c, t = s + y; c = (t - s) - y; s = t; }
  return s;
}
function average(xs) { return xs.every(x => x === xs[0]) ? xs[0] : sum(xs) / xs.length; }
function moments(xs) {
  if (xs.every(x => x === xs[0])) return { N: xs.length, mean: xs[0], varianceN: 0,
    varianceNMinus1: xs.length === 1 ? null : 0 };
  const N = xs.length, mean = average(xs), centered = xs.map(x => x - xs[0]);
  const centeredMean = sum(centered) / N;
  const ss = sum(centered.map(x => (x - centeredMean) ** 2));
  return { N, mean, varianceN: ss / N, varianceNMinus1: N === 1 ? null : ss / (N - 1) };
}
function analyze(population) {
  check(Array.isArray(population), "population must be an array");
  integer(population.length, 1, SAMPLING_LIMITS.populationSize, "population size");
  const seen = new Set(), groups = new Map();
  const units = Array.from(population, (u, i) => {
    check(u !== null && typeof u === "object" && !Array.isArray(u), "Each population unit must be a record");
    label(u.id, "id"); label(u.stratum, "stratum");
    check(!seen.has(u.id), "Population IDs must be unique"); seen.add(u.id);
    finite(u.value, "value"); finite(u.accessibility, "accessibility");
    check(Math.abs(u.value) <= SAMPLING_LIMITS.absoluteValue, "Absolute value must be <= 1e6");
    check(u.accessibility >= 0 && u.accessibility <= 1, "accessibility must be in [0,1]");
    if (!groups.has(u.stratum)) groups.set(u.stratum, { stratum: u.stratum, indices: [] });
    groups.get(u.stratum).indices.push(i);
    return { id: u.id, stratum: u.stratum, value: u.value, accessibility: u.accessibility };
  });
  check(groups.size <= SAMPLING_LIMITS.strata, "At most 100 nonempty population strata are supported");
  const overall = moments(units.map(u => u.value));
  const strata = [...groups.values()].map(g => ({ ...g,
    ...moments(g.indices.map(i => units[i].value)), weight: g.indices.length / units.length }));
  return { units, overall, strata };
}
function validateN(n, N) { integer(n, 1, N, "sample size"); }
function makeRandom(seed) {
  check(typeof seed === "string" && seed.length > 0 && seed.length <= SAMPLING_LIMITS.seedLength,
    "seed must be an explicit nonempty string of at most 128 characters");
  let state = 2166136261;
  for (const ch of seed) state = Math.imul(state ^ ch.codePointAt(0), 16777619) >>> 0;
  return max => {
    // Rejection removes modulo bias when mapping a 32-bit word to 0..max-1.
    const cutoff = Math.floor(4294967296 / max) * max;
    let word;
    do {
      state = (state + 0x6d2b79f5) >>> 0;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      word = (t ^ (t >>> 14)) >>> 0;
    } while (word >= cutoff);
    return word % max;
  };
}
function takeRandom(indices, n, randomInteger) {
  const copy = [...indices];
  for (let i = 0; i < n; i++) {
    const j = i + randomInteger(copy.length - i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}
function meanVariance(group, n) {
  return n === group.N ? 0 : ((group.N - n) / group.N) * group.varianceNMinus1 / n;
}
function allocation(context, n) {
  const N = context.overall.N;
  validateN(n, N);
  const allocations = context.strata.map((g, i) => ({ stratum: g.stratum, N: g.N,
    weight: g.weight, ideal: n * g.N / N, quota: Math.floor(n * g.N / N),
    remainder: (n * g.N) % N, firstAppearance: i }));
  let left = n - sum(allocations.map(a => a.quota));
  const ranked = [...allocations].sort((a, b) => b.remainder - a.remainder || a.firstAppearance - b.firstAppearance);
  for (let i = 0; i < left; i++) ranked[i].quota++;
  const unrepresentedStrata = allocations.filter(a => a.quota === 0).map(a => a.stratum);
  return { N, n, allocations, unrepresentedStrata,
    status: unrepresentedStrata.length ? "unrepresented-stratum" : "ok",
    exactProportions: allocations.every(a => a.remainder === 0),
    rounding: "largest-remainder", tieBreak: "stratum-first-appearance" };
}
function srsTheory(context, n) {
  validateN(n, context.overall.N);
  const variance = meanVariance(context.overall, n);
  return { method: "srs-without-replacement", N: context.overall.N, n,
    expectedMean: context.overall.mean, variance, standardError: Math.sqrt(variance),
    inclusionProbability: n / context.overall.N, designUnbiased: true,
    standardErrorSource: "known-finite-population-design" };
}
function stratifiedTheory(context, n) {
  const plan = allocation(context, n);
  const details = plan.allocations.map((a, i) => {
    const varianceOfStratumMean = a.quota === 0 ? null : meanVariance(context.strata[i], a.quota);
    return { ...a, populationMean: context.strata[i].mean, varianceOfStratumMean,
      weightedVarianceContribution: varianceOfStratumMean === null ? null : a.weight ** 2 * varianceOfStratumMean };
  });
  const represented = plan.status === "ok";
  const variance = represented ? sum(details.map(d => d.weightedVarianceContribution)) : null;
  return { ...plan, method: "proportional-stratified", allocations: details,
    expectedMean: represented ? context.overall.mean : null, variance,
    standardError: variance === null ? null : Math.sqrt(variance), designUnbiased: represented ? true : null,
    standardErrorSource: represented ? "known-finite-population-design" : null };
}
function systematicTheory(context, n) {
  const N = context.overall.N;
  validateN(n, N);
  check(N % n === 0, "Core systematic sampling requires N divisible by n");
  const interval = N / n;
  const possibleStarts = Array.from({ length: interval }, (_, start) => {
    const indices = Array.from({ length: n }, (_, j) => start + j * interval);
    return { start, indices, mean: average(indices.map(i => context.units[i].value)),
      probability: 1 / interval };
  });
  const anchor = context.units[0].value;
  const centeredMean = sum(context.units.map(u => u.value - anchor)) / N;
  const variance = sum(possibleStarts.map(s =>
    (sum(s.indices.map(i => context.units[i].value - anchor)) / n - centeredMean) ** 2)) / interval;
  return { method: "systematic-random-start", N, n, interval, possibleStarts,
    expectedMean: context.overall.mean, variance, standardError: Math.sqrt(variance),
    inclusionProbability: n / N, designUnbiased: true, orderSensitive: true,
    standardErrorSource: "all-random-starts-of-known-frame" };
}
function weightedEstimate(context, plan, indices) {
  const anchor = context.units[indices[0]].value;
  const centeredMeans = [];
  const details = plan.allocations.map(a => {
    const xs = indices.filter(i => context.units[i].stratum === a.stratum).map(i => context.units[i].value);
    centeredMeans.push(xs.length ? sum(xs.map(x => x - anchor)) / xs.length : null);
    return { stratum: a.stratum, weight: a.weight, sampleSize: xs.length,
      sampleMean: xs.length ? average(xs) : null };
  });
  return { stratumEstimates: details, estimate: details.some(d => d.sampleMean === null)
    ? null : anchor + sum(details.map((d, i) => d.weight * centeredMeans[i])) };
}
function sampleResult(context, indices, method, estimate, extra) {
  if (indices.length === context.overall.N && estimate !== null) estimate = context.overall.mean;
  return { method, populationSize: context.overall.N, sampleSize: indices.length,
    estimator: "sample-mean",
    selected: indices.map(i => ({ ...context.units[i], frameIndex: i })),
    selectedIds: indices.map(i => context.units[i].id),
    sampleMean: average(indices.map(i => context.units[i].value)),
    populationMean: context.overall.mean, estimate,
    error: estimate === null ? null : estimate - context.overall.mean,
    samplingVariance: extra.theory?.variance ?? null,
    standardError: extra.theory?.standardError ?? null,
    designUnbiased: extra.theory?.designUnbiased ?? null,
    replacement: false, ...extra };
}

/** The balanced frame contains the SAME IDs/values/accessibility in a new order. */
export function makeDemoPopulation(order = "periodic") {
  check(order === "periodic" || order === "balanced", 'order must be "periodic" or "balanced"');
  const indices = order === "periodic" ? DEMO.map((_, i) => i)
    : [0, 3, 1, 4, 2, 5, 8, 6, 10, 7, 11, 9];
  return indices.map(i => {
    const [id, stratum, value, accessibility] = DEMO[i];
    return { id, stratum, value, accessibility };
  });
}
export function finitePopulationSummary(population) {
  const context = analyze(population);
  return { ...context.overall, strata: context.strata.map(({ indices, ...summary }) => summary) };
}
export function proportionalAllocation({ population, n } = {}) { return allocation(analyze(population), n); }
export function simpleRandomTheory({ population, n } = {}) { return srsTheory(analyze(population), n); }
export function proportionalStratifiedTheory({ population, n } = {}) { return stratifiedTheory(analyze(population), n); }
export function systematicRandomStartTheory({ population, n } = {}) { return systematicTheory(analyze(population), n); }

export function simpleRandomSample({ population, n, seed } = {}) {
  const context = analyze(population), theory = srsTheory(context, n), randomInteger = makeRandom(seed);
  const indices = takeRandom(context.units.map((_, i) => i), n, randomInteger);
  const estimate = average(indices.map(i => context.units[i].value));
  return sampleResult(context, indices, theory.method, estimate, { seed, randomized: true,
    probabilitySample: true, status: "ok", theory });
}
export function proportionalStratifiedSample({ population, n, seed } = {}) {
  const context = analyze(population), theory = stratifiedTheory(context, n), randomInteger = makeRandom(seed);
  const indices = context.strata.flatMap((g, i) => takeRandom(g.indices, theory.allocations[i].quota, randomInteger));
  const estimates = weightedEstimate(context, theory, indices);
  return sampleResult(context, indices, theory.method, estimates.estimate, { seed, randomized: true,
    probabilitySample: theory.status === "ok", status: theory.status,
    estimator: "population-weighted-stratum-means", stratumEstimates: estimates.stratumEstimates, theory });
}
export function systematicRandomStartSample({ population, n, seed } = {}) {
  const context = analyze(population), theory = systematicTheory(context, n), randomInteger = makeRandom(seed);
  const start = randomInteger(theory.interval), selectedStart = theory.possibleStarts[start];
  return sampleResult(context, selectedStart.indices, theory.method, selectedStart.mean,
    { seed, start, interval: theory.interval, randomized: true, probabilitySample: true, status: "ok", theory });
}
export function quotaConvenienceSample({ population, n } = {}) {
  const context = analyze(population), plan = allocation(context, n);
  const indices = context.strata.flatMap((g, i) => [...g.indices].sort((a, b) =>
    context.units[b].accessibility - context.units[a].accessibility || a - b).slice(0, plan.allocations[i].quota));
  const estimates = weightedEstimate(context, plan, indices);
  return sampleResult(context, indices, "quota-convenience", estimates.estimate, {
    seed: null, randomized: false, probabilitySample: false, status: plan.status,
    estimator: "population-weighted-stratum-means", stratumEstimates: estimates.stratumEstimates,
    selectionMechanism: "highest-accessibility-in-each-stratum; ties: frame-order",
    designUnbiased: null, standardError: null, theory: null, allocation: plan });
}

export function independentNormalCombination({ terms, constant = 0, independent } = {}) {
  check(independent === true, "Explicit independent:true is required; covariance is unsupported");
  check(Array.isArray(terms), "terms must be an array");
  integer(terms.length, 1, SAMPLING_LIMITS.normalTerms, "term count"); finite(constant, "constant");
  const ids = new Set(), means = [constant], variances = [];
  for (const term of terms) {
    check(term !== null && typeof term === "object", "Each term must be a record");
    label(term.id, "term.id"); check(!ids.has(term.id), "Combine coefficients of a repeated variable first"); ids.add(term.id);
    finite(term.coefficient, "coefficient"); finite(term.mean, "mean"); finite(term.variance, "variance");
    check(term.variance >= 0, "Normal variance must be nonnegative");
    const weightedMean = term.coefficient * term.mean;
    const weightedVariance = term.coefficient === 0 || term.variance === 0 ? 0
      : (Math.abs(term.coefficient) * Math.sqrt(term.variance)) ** 2;
    check(Number.isFinite(weightedMean) && Number.isFinite(weightedVariance), "Normal term overflows");
    check(weightedVariance > 0 || term.coefficient === 0 || term.variance === 0,
      "Nonzero Normal variance term underflows");
    means.push(weightedMean); variances.push(weightedVariance);
  }
  const mean = sum(means), variance = sum(variances);
  check(Number.isFinite(mean) && Number.isFinite(variance), "Normal combination overflows");
  return { mean, variance, sd: Math.sqrt(variance), distribution: variance === 0 ? "point-mass" : "normal",
    independent: true, varianceRule: "sum-of-squared-coefficients" };
}
