/** Pure statistics engine. All draws are iid with replacement, finite variance. */
export const POOLS = {
  aurora: {
    name: "Aurora Archive",
    subtitle: "偏态卡池 · rare ≠ impossible",
    cards: [
      {
        name: "Moss Courier",
        zh: "苔原信使",
        value: 2,
        p: 0.45,
        color: "#97e0bb",
        sigil: "leaf",
        tier: "COMMON",
      },
      {
        name: "Tidal Seer",
        zh: "潮汐先知",
        value: 4,
        p: 0.3,
        color: "#70d7f4",
        sigil: "wave",
        tier: "UNCOMMON",
      },
      {
        name: "Solar Weaver",
        zh: "织日者",
        value: 8,
        p: 0.16,
        color: "#b3a0ff",
        sigil: "sun",
        tier: "RARE",
      },
      {
        name: "Ember Sentinel",
        zh: "余烬守卫",
        value: 16,
        p: 0.07,
        color: "#ffb375",
        sigil: "flame",
        tier: "EPIC",
      },
      {
        name: "Astral Architect",
        zh: "星穹构筑师",
        value: 40,
        p: 0.02,
        color: "#f5d58c",
        sigil: "star",
        tier: "MYTHIC",
      },
    ],
  },
  small: {
    name: "Three-moon model",
    subtitle: "小模型 · 可精确枚举",
    cards: [
      {
        name: "New Moon",
        zh: "新月",
        value: 0,
        p: 1 / 3,
        color: "#97e0bb",
        sigil: "leaf",
        tier: "I",
      },
      {
        name: "Half Moon",
        zh: "弦月",
        value: 2,
        p: 1 / 3,
        color: "#70d7f4",
        sigil: "wave",
        tier: "II",
      },
      {
        name: "Full Moon",
        zh: "满月",
        value: 4,
        p: 1 / 3,
        color: "#b3a0ff",
        sigil: "sun",
        tier: "III",
      },
    ],
  },
};
function validateData(xs) {
  if (!Array.isArray(xs) || !xs.length || xs.some((x) => !Number.isFinite(x)))
    throw new RangeError("A nonempty array of finite observations is required");
}
function validatePool(pool) {
  if (
    !pool?.cards?.length ||
    pool.cards.some(
      (c) =>
        !Number.isFinite(c.value) ||
        !Number.isFinite(c.p) ||
        c.p < 0 ||
        c.p > 1,
    ) ||
    Math.abs(pool.cards.reduce((s, c) => s + c.p, 0) - 1) > 1e-10
  )
    throw new RangeError(
      "Finite card values and probabilities summing to 1 are required",
    );
}
function validateRule(n, kind, offset) {
  if (!Number.isInteger(n) || n < 1 || n > 200)
    throw new RangeError("n must be an integer from 1 to 200");
  if (
    !["mean", "first", "shift", "variance", "varianceN"].includes(kind) ||
    !Number.isFinite(offset)
  )
    throw new RangeError("Unknown estimator or nonfinite offset");
}
export function mean(xs) {
  validateData(xs);
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN;
}
export function variance(xs, unbiased = true) {
  const m = mean(xs);
  return xs.length > (unbiased ? 1 : 0)
    ? xs.reduce((s, x) => s + (x - m) ** 2, 0) /
        (xs.length - (unbiased ? 1 : 0))
    : NaN;
}
export function moments(pool) {
  validatePool(pool);
  const mu = pool.cards.reduce((s, c) => s + c.value * c.p, 0);
  const v = pool.cards.reduce((s, c) => s + c.p * (c.value - mu) ** 2, 0);
  return {
    mu,
    variance: v,
    sd: Math.sqrt(v),
    fourth: pool.cards.reduce((s, c) => s + c.p * (c.value - mu) ** 4, 0),
  };
}
export function seededRandom(seed) {
  let h = 2166136261;
  for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function draw(pool, n, rng) {
  validatePool(pool);
  if (!Number.isInteger(n) || n < 1 || n > 200)
    throw new RangeError("n must be an integer from 1 to 200");
  return Array.from({ length: n }, () => {
    const u = rng();
    let c = 0;
    for (let i = 0; i < pool.cards.length; i++) {
      c += pool.cards[i].p;
      if (u < c) return i;
    }
    return pool.cards.length - 1;
  });
}
export function values(pool, ids) {
  return ids.map((i) => pool.cards[i].value);
}
export function statistic(xs, kind = "mean", offset = 2) {
  validateData(xs);
  validateRule(xs.length, kind, offset);
  if (kind === "first") return xs[0];
  if (kind === "shift") return mean(xs) + offset;
  if (kind === "variance") return variance(xs);
  if (kind === "varianceN") return variance(xs, false);
  return mean(xs);
}
export function theory(pool, n, kind, offset = 2) {
  validateRule(n, kind, offset);
  const m = moments(pool);
  let expectation = m.mu,
    target = m.mu,
    se = m.sd / Math.sqrt(n);
  if (kind === "first") se = m.sd;
  if (kind === "shift") expectation += offset;
  if (kind === "variance" || kind === "varianceN") {
    target = m.variance;
    if (n < 2 && kind === "variance")
      return { expectation: NaN, target, se: NaN, bias: NaN };
    expectation = m.variance * (kind === "varianceN" ? (n - 1) / n : 1);
    se =
      n > 1
        ? Math.sqrt(
            Math.max(0, (m.fourth - ((n - 3) / (n - 1)) * m.variance ** 2) / n),
          ) * (kind === "varianceN" ? (n - 1) / n : 1)
        : 0;
  }
  return { expectation, target, se, bias: expectation - target };
}
export function exactDistribution(pool, n, kind, offset = 2) {
  validatePool(pool);
  validateRule(n, kind, offset);
  const count = pool.cards.length ** n;
  if (count > 20000)
    throw new RangeError(
      "Exact enumeration is limited to 20,000 ordered samples",
    );
  const outcomes = [];
  function visit(ids, p) {
    if (ids.length === n) {
      outcomes.push({
        ids: [...ids],
        value: statistic(values(pool, ids), kind, offset),
        p,
      });
      return;
    }
    pool.cards.forEach((c, i) => visit([...ids, i], p * c.p));
  }
  visit([], 1);
  return outcomes;
}
export function binomialAtLeastOne(n, p) {
  return -Math.expm1(n * Math.log1p(-p));
}
export function normalPDF(x, mu = 0, sd = 1) {
  return Math.exp(-0.5 * ((x - mu) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI));
}
export function normalCDF(x) {
  const s = x < 0 ? -1 : 1,
    a = Math.abs(x) / Math.sqrt(2),
    t = 1 / (1 + 0.3275911 * a);
  const erf =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) *
      t +
      0.254829592) *
      t *
      Math.exp(-a * a);
  return 0.5 * (1 + s * erf);
}
export function ranks(xs) {
  validateData(xs);
  return xs.map(
    (x) =>
      1 +
      xs.filter((v) => v < x).length +
      (xs.filter((v) => v === x).length - 1) / 2,
  );
}
export function pearson(xs, ys) {
  validateData(xs);
  validateData(ys);
  if (xs.length !== ys.length || xs.length < 2)
    throw new RangeError("At least two paired observations are required");
  const mx = mean(xs),
    my = mean(ys);
  const a = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
  const b = Math.sqrt(
    xs.reduce((s, x) => s + (x - mx) ** 2, 0) *
      ys.reduce((s, y) => s + (y - my) ** 2, 0),
  );
  return b ? a / b : NaN;
}
export function contingency(observed) {
  if (
    !Array.isArray(observed) ||
    observed.length < 2 ||
    observed.some(
      (r) =>
        !Array.isArray(r) ||
        r.length < 2 ||
        r.length !== observed[0].length ||
        r.some((v) => !Number.isSafeInteger(v) || v < 0),
    )
  )
    throw new RangeError(
      "A rectangular contingency table of nonnegative integer counts is required",
    );
  const rows = observed.map((r) => r.reduce((a, b) => a + b, 0)),
    cols = observed[0].map((_, j) => observed.reduce((s, r) => s + r[j], 0)),
    total = rows.reduce((a, b) => a + b, 0);
  if (!total || rows.some((x) => !x) || cols.some((x) => !x)) return null;
  const expected = rows.map((r) => cols.map((c) => (r * c) / total)),
    contributions = observed.map((r, i) =>
      r.map((o, j) => (o - expected[i][j]) ** 2 / expected[i][j]),
    );
  return {
    expected,
    contributions,
    statistic: contributions.flat().reduce((a, b) => a + b, 0),
    df: (rows.length - 1) * (cols.length - 1),
    valid: expected.flat().every((e) => e >= 5),
    total,
  };
}
