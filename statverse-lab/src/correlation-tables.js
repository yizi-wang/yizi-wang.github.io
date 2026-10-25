/** Selected factual table entries: Pearson IAL Formula Book Issue 2 (2021), printed p27/PDF p33.
 * Each row: n, PMCC one-tail .05/.025, Spearman one-tail .05/.025.
 * .025 one-tail is used for a two-sided total alpha .05. null means no printed critical entry.
 */
export const CORRELATION_TABLE_SOURCE =
  "https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf#page=33";
const rows = [
  [4, 0.9, 0.95, 1, null],
  [5, 0.8054, 0.8783, 0.9, 1],
  [6, 0.7293, 0.8114, 0.8286, 0.8857],
  [7, 0.6694, 0.7545, 0.7143, 0.7857],
  [8, 0.6215, 0.7067, 0.6429, 0.7381],
  [9, 0.5822, 0.6664, 0.6, 0.7],
  [10, 0.5494, 0.6319, 0.5636, 0.6485],
  [11, 0.5214, 0.6021, 0.5364, 0.6182],
  [12, 0.4973, 0.576, 0.5035, 0.5874],
  [13, 0.4762, 0.5529, 0.4835, 0.5604],
  [14, 0.4575, 0.5324, 0.4637, 0.5385],
  [15, 0.4409, 0.514, 0.4464, 0.5214],
  [16, 0.4259, 0.4973, 0.4294, 0.5029],
  [17, 0.4124, 0.4821, 0.4142, 0.4877],
  [18, 0.4, 0.4683, 0.4014, 0.4716],
  [19, 0.3887, 0.4555, 0.3912, 0.4596],
  [20, 0.3783, 0.4438, 0.3805, 0.4466],
  [21, 0.3687, 0.4329, 0.3701, 0.4364],
  [22, 0.3598, 0.4227, 0.3608, 0.4252],
  [23, 0.3515, 0.4133, 0.3528, 0.416],
  [24, 0.3438, 0.4044, 0.3443, 0.407],
];
const tables = new Map(
  rows.map(([n, p05, p025, s05, s025]) => [
    n,
    {
      pearson: { 0.05: p05, 0.025: p025 },
      spearman: { 0.05: s05, 0.025: s025 },
    },
  ]),
);
const verified = {
  4: [
    [0.8, 0.9, 0.95, 0.98, 0.99],
    [1, null, null],
  ],
  5: [
    [0.687, 0.8054, 0.8783, 0.9343, 0.9587],
    [0.9, 1, 1],
  ],
  6: [
    [0.6084, 0.7293, 0.8114, 0.8822, 0.9172],
    [0.8286, 0.8857, 0.9429],
  ],
  8: [
    [0.5067, 0.6215, 0.7067, 0.7887, 0.8343],
    [0.6429, 0.7381, 0.8333],
  ],
  10: [
    [0.4428, 0.5494, 0.6319, 0.7155, 0.7646],
    [0.5636, 0.6485, 0.7455],
  ],
  12: [
    [0.3981, 0.4973, 0.576, 0.6581, 0.7079],
    [0.5035, 0.5874, 0.6783],
  ],
  20: [
    [0.2992, 0.3783, 0.4438, 0.5155, 0.5614],
    [0.3805, 0.4466, 0.5218],
  ],
  30: [
    [0.2407, 0.3061, 0.361, 0.4226, 0.4629],
    [0.3063, 0.3624, 0.4251],
  ],
};
for (const [n, [p, s]] of Object.entries(verified))
  tables.set(+n, {
    pearson: Object.fromEntries(
      [0.1, 0.05, 0.025, 0.01, 0.005].map((a, i) => [a, p[i]]),
    ),
    spearman: Object.fromEntries([0.05, 0.025, 0.01].map((a, i) => [a, s[i]])),
  });
export function correlationCritical(
  method,
  n,
  alternative = "two-sided",
  alpha = 0.05,
) {
  if (
    !["pearson", "spearman"].includes(method) ||
    !["less", "greater", "two-sided"].includes(alternative) ||
    !Number.isFinite(alpha) ||
    alpha <= 0 ||
    alpha >= 1
  )
    throw new RangeError("Unknown table method/alternative or invalid alpha");
  const oneTailLevel = alternative === "two-sided" ? alpha / 2 : alpha,
    common = {
      method,
      n,
      alternative,
      totalAlpha: alpha,
      oneTailLevel,
      source: CORRELATION_TABLE_SOURCE,
    };
  const officialRow =
    Number.isInteger(n) &&
    ((n >= 4 && n <= 30) || [40, 50, 60, 70, 80, 90, 100].includes(n));
  if (!officialRow)
    return { ...common, available: false, reason: "no-official-row" };
  const printedColumns =
    method === "pearson"
      ? [0.1, 0.05, 0.025, 0.01, 0.005]
      : [0.05, 0.025, 0.01];
  if (!printedColumns.includes(oneTailLevel))
    return { ...common, available: false, reason: "no-official-column" };
  const row = tables.get(n);
  if (!row)
    return { ...common, available: false, reason: "not-implemented-row" };
  if (!(oneTailLevel in row[method]))
    return { ...common, available: false, reason: "not-implemented-cell" };
  const critical = row[method][oneTailLevel];
  if (critical === null)
    return { ...common, available: false, reason: "printed-dash" };
  return { ...common, available: true, critical };
}
export function compareAtTablePrecision(coefficient, entry) {
  if (!entry?.available || !Number.isFinite(coefficient)) return null;
  const score =
      entry.alternative === "less"
        ? -coefficient
        : entry.alternative === "greater"
          ? coefficient
          : Math.abs(coefficient),
    roundedScore = Math.round(score * 10000),
    roundedCritical = Math.round(entry.critical * 10000);
  return {
    score,
    roundedScore: roundedScore / 10000,
    reject: roundedScore >= roundedCritical,
    atBoundary: roundedScore === roundedCritical,
    precision: 4,
  };
}
