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
  if (
    !Array.isArray(xs) ||
    !xs.length ||
    xs.some((x) => !Number.isFinite(x) || Math.abs(x) > 1e70)
  )
    throw new RangeError(
      "A nonempty array of finite observations with |value| ≤ 1e70 is required; larger magnitudes are outside the supported moment domain",
    );
}
function validatePool(pool) {
  if (
    !pool?.cards?.length ||
    pool.cards.some(
      (c) =>
        !Number.isFinite(c.value) ||
        Math.abs(c.value) > 1e70 ||
        !Number.isFinite(c.p) ||
        c.p < 0 ||
        c.p > 1,
    ) ||
    Math.abs(pool.cards.reduce((s, c) => s + c.p, 0) - 1) > 1e-10
  )
    throw new RangeError(
      "Card values must be finite with |value| ≤ 1e70; probabilities must lie in [0,1] and sum to 1",
    );
}
function validateRule(n, kind, offset) {
  if (!Number.isInteger(n) || n < 1 || n > 200)
    throw new RangeError("n must be an integer from 1 to 200");
  if (
    !["mean", "first", "shift", "variance", "varianceN"].includes(kind) ||
    !Number.isFinite(offset) ||
    Math.abs(offset) > 1e70
  )
    throw new RangeError("Unknown estimator or nonfinite offset");
}
export function mean(xs) {
  validateData(xs);
  const anchor = xs[0];
  return anchor + xs.reduce((s, x) => s + (x - anchor), 0) / xs.length;
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
  const anchor = pool.cards.reduce((a, b) => (b.p > a.p ? b : a)).value;
  const mu =
    anchor + pool.cards.reduce((s, c) => s + (c.value - anchor) * c.p, 0);
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
    if (!Number.isFinite(u) || u < 0 || u >= 1)
      throw new RangeError("RNG must return a finite value in [0,1)");
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
  if (
    !Number.isSafeInteger(n) ||
    n < 0 ||
    !Number.isFinite(p) ||
    p < 0 ||
    p > 1
  )
    throw new RangeError(
      "Binomial trials must be a nonnegative safe integer and probability in [0,1]",
    );
  if (n === 0 || p === 0) return 0;
  if (p === 1) return 1;
  return -Math.expm1(n * Math.log1p(-p));
}
export function normalPDF(x, mu = 0, sd = 1) {
  if (![x, mu, sd].every(Number.isFinite) || sd <= 0)
    throw new RangeError(
      "A Normal density requires finite x/mean and positive finite standard deviation",
    );
  return Math.exp(-0.5 * ((x - mu) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI));
}
export function normalCDF(x) {
  if (Number.isNaN(x) || typeof x !== "number")
    throw new RangeError("Normal CDF argument must be a real number");
  if (x === Infinity) return 1;
  if (x === -Infinity) return 0;
  const a = Math.abs(x);
  let tail;
  if (a >= 5) {
    let fraction = 0;
    for (let k = 100; k >= 1; k--) fraction = k / (a + fraction);
    tail = Math.exp((-a * a) / 2) / (Math.sqrt(2 * Math.PI) * (a + fraction));
  } else {
    const n = Math.max(2, 2 * Math.ceil(a * 128)),
      h = a / n,
      phi = (t) => Math.exp((-t * t) / 2) / Math.sqrt(2 * Math.PI);
    let sum = phi(0) + phi(a);
    for (let i = 1; i < n; i++) sum += (i % 2 ? 4 : 2) * phi(i * h);
    tail = 0.5 - (h * sum) / 3;
  }
  return Math.max(0, Math.min(1, x < 0 ? tail : 1 - tail));
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

export function regression(xs, ys) {
  validateData(xs);
  validateData(ys);
  if (xs.length !== ys.length || xs.length < 2)
    throw new RangeError("At least two paired observations are required");
  const mx = mean(xs),
    my = mean(ys),
    sxx = xs.reduce((s, x) => s + (x - mx) ** 2, 0),
    sxy = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
  if (!sxx) return null;
  const slope = sxy / sxx;
  return {
    slope,
    intercept: my - slope * mx,
    predict: (x) => my + slope * (x - mx),
  };
}
export function shuffle(xs, rng) {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function meanZTest({ xbar, mu0, sigma, n, tail = "two" }) {
  if (
    ![xbar, mu0, sigma].every(Number.isFinite) ||
    sigma <= 0 ||
    !Number.isInteger(n) ||
    n < 1 ||
    !["lower", "upper", "two"].includes(tail)
  )
    throw new RangeError(
      "Finite means, positive known sigma, integer n and valid tail required",
    );
  const se = sigma / Math.sqrt(n),
    z = (xbar - mu0) / se,
    p =
      tail === "lower"
        ? normalCDF(z)
        : tail === "upper"
          ? normalCDF(-z)
          : 2 * normalCDF(-Math.abs(z));
  return { z, se, p };
}
export function twoMeanZTest({
  xbar,
  ybar,
  sigmaX,
  sigmaY,
  nx,
  ny,
  delta0 = 0,
  tail = "two",
}) {
  if (
    ![xbar, ybar, sigmaX, sigmaY, delta0].every(Number.isFinite) ||
    sigmaX <= 0 ||
    sigmaY <= 0 ||
    ![nx, ny].every((n) => Number.isInteger(n) && n >= 1) ||
    !["lower", "upper", "two"].includes(tail)
  )
    throw new RangeError(
      "Two independent samples require finite means, positive known sigmas and integer sizes",
    );
  const se = Math.sqrt(sigmaX ** 2 / nx + sigmaY ** 2 / ny),
    z = (xbar - ybar - delta0) / se,
    p =
      tail === "lower"
        ? normalCDF(z)
        : tail === "upper"
          ? normalCDF(-z)
          : 2 * normalCDF(-Math.abs(z));
  return { z, se, p };
}
