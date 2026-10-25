import {
  binomialDistribution,
  contingencyTest,
  goodnessOfFit,
} from "./inference.js";
export const identityGroups = (n) => Array.from({ length: n }, (_, i) => [i]);
function validateCounts(xs) {
  if (
    !Array.isArray(xs) ||
    xs.length < 2 ||
    xs.some((x) => !Number.isSafeInteger(x) || x < 0 || x > 1e12)
  )
    throw new RangeError(
      "Original counts must be nonnegative safe integers in at least two categories.",
    );
}
function validateGroups(groups, n) {
  if (
    !Array.isArray(groups) ||
    groups.length < 2 ||
    groups.some((g) => !Array.isArray(g) || !g.length) ||
    groups.flat().length !== n ||
    groups.flat().some((x, i) => x !== i)
  )
    throw new RangeError(
      "Groups must partition all original categories once, in order, with at least two groups.",
    );
}
export function mergeAdjacent(groups, index) {
  if (!Number.isInteger(index) || index < 0 || index >= groups.length - 1)
    throw new RangeError("Choose an adjacent pair of whole categories.");
  return groups.flatMap((g, i) =>
    i === index ? [[...g, ...groups[i + 1]]] : i === index + 1 ? [] : [[...g]],
  );
}
export function aggregateCounts(counts, groups) {
  return groups.map((g) => g.reduce((s, i) => s + counts[i], 0));
}
export function aggregateTable(table, rows, cols) {
  return rows.map((r) =>
    cols.map((c) =>
      r.reduce((s, i) => s + c.reduce((a, j) => a + table[i][j], 0), 0),
    ),
  );
}
export function evaluateContingency(observed, rows, cols, alpha = 0.05) {
  if (!Array.isArray(observed) || observed.length < 2)
    throw new RangeError("Use at least two rows.");
  observed.forEach(validateCounts);
  if (observed.some((r) => r.length !== observed[0].length))
    throw new RangeError("Use a rectangular count table.");
  validateGroups(rows, observed.length);
  validateGroups(cols, observed[0].length);
  const grouped = aggregateTable(observed, rows, cols);
  return { ...contingencyTest(grouped, { alpha }), grouped };
}
export function evaluateGOF(
  observed,
  {
    model = "uniform",
    probabilities,
    p = 0.5,
    fit = false,
    groups = identityGroups(observed.length),
    alpha = 0.05,
  } = {},
) {
  validateCounts(observed);
  validateGroups(groups, observed.length);
  const total = observed.reduce((s, x) => s + x, 0);
  if (!Number.isSafeInteger(total) || total <= 0)
    throw new RangeError("Use a positive integer observed total.");
  let probs,
    fittedParameters = 0,
    parameter = null;
  if (model === "uniform") probs = observed.map(() => 1 / observed.length);
  else if (model === "specified") {
    if (
      !Array.isArray(probabilities) ||
      probabilities.length !== observed.length ||
      probabilities.some((x) => !Number.isFinite(x) || x <= 0 || x > 1) ||
      Math.abs(probabilities.reduce((s, x) => s + x, 0) - 1) > 1e-12
    )
      throw new RangeError(
        "Specify one positive probability per original category, summing to1; no normalization is applied.",
      );
    probs = [...probabilities];
  } else if (model === "binomial3") {
    if (observed.length !== 4)
      throw new RangeError("Binomial3 has four counts0,1,2,3.");
    parameter = fit
      ? observed.reduce((s, o, k) => s + k * o, 0) / (3 * total)
      : p;
    const d = binomialDistribution(3, parameter);
    probs = observed.map((_, k) => d.pmf(k));
    fittedParameters = fit ? 1 : 0;
  } else throw new RangeError("Unknown specified GOF model.");
  if (groups.length - 1 - fittedParameters <= 0)
    throw new RangeError(
      "Pooling leaves df=k′−1−q≤0. Restore categories before using this reference.",
    );
  const grouped = aggregateCounts(observed, groups),
    groupedProbabilities = aggregateCounts(probs, groups);
  return {
    ...goodnessOfFit({
      observed: grouped,
      probabilities: groupedProbabilities,
      fittedParameters,
      alpha,
    }),
    grouped,
    probabilities: groupedProbabilities,
    originalProbabilities: probs,
    parameter,
  };
}
/** Uniform random label permutation conditional on both margins. */
export function fixedMarginShuffle(table, rng) {
  const reference = contingencyTest(table);
  if (!reference.valid)
    throw new RangeError(
      "Fixed-margin shuffle needs positive total and positive margins.",
    );
  const rows = table.map((r) => r.reduce((s, x) => s + x, 0)),
    cols = table[0].map((_, j) => table.reduce((s, r) => s + r[j], 0)),
    N = rows.reduce((s, x) => s + x, 0);
  if (!Number.isSafeInteger(N) || N < 1 || N > 500)
    throw new RangeError("Conditional label exploration supports totals1–500.");
  const labels = cols.flatMap((n, j) => Array(n).fill(j));
  for (let i = labels.length - 1; i > 0; i--) {
    const u = rng();
    if (!Number.isFinite(u) || u < 0 || u >= 1)
      throw new RangeError("RNG must return a number in[0,1).");
    const j = Math.floor(u * (i + 1));
    [labels[i], labels[j]] = [labels[j], labels[i]];
  }
  let at = 0;
  return rows.map((n) => {
    const r = cols.map(() => 0);
    for (let i = 0; i < n; i++) r[labels[at++]]++;
    return r;
  });
}
