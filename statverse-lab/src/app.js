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
  normalPDF,
  normalCDF,
} from "./statistics.js";
import { createCorrelationLab } from "./correlation.js";
const correlationLab = createCorrelationLab(
  document.querySelector("#correlation-workspace"),
);
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const fmt = (x, d = 3) =>
  Number.isFinite(x) ? Number(x.toFixed(d)).toString() : "Unavailable";
const names = {
  mean: {
    symbol: "X̄",
    observed: "x̄",
    formula: "x̄ = (x₁ + ··· + xₙ) / n",
    target: "μ",
    name: "sample mean",
  },
  first: {
    symbol: "X₁",
    observed: "x₁",
    formula: "t = x₁ · only the first card counts",
    target: "μ",
    name: "first-card estimator",
  },
  shift: {
    symbol: "X̄ + 2",
    observed: "x̄ + 2",
    formula: "t = (x₁ + ··· + xₙ) / n + 2",
    target: "μ",
    name: "shifted mean",
  },
  variance: {
    symbol: "S²",
    observed: "s²",
    formula: "s² = Σ(xᵢ − x̄)² / (n − 1), n ≥ 2",
    target: "σ²",
    name: "sample variance",
  },
  varianceN: {
    symbol: "Vₙ",
    observed: "vₙ",
    formula: "vₙ = Σ(xᵢ − x̄)² / n",
    target: "σ²",
    name: "divisor-n variance",
  },
};
const state = {
  pool: "aurora",
  n: 5,
  kind: "mean",
  seed: "aurora-2026",
  rng: seededRandom("aurora-2026"),
  samples: [],
  selected: -1,
  remaining: 0,
  running: false,
  token: 0,
  exact: false,
  lab: "sampling",
  hidden: false,
  standardized: false,
  confidence: 0.95,
  exactPage: 0,
  ciIndex: -1,
  teacherStage: "all",
  answersHidden: false,
  predictionRecord: null,
};
let exactCache = null;
function exactOutcomes() {
  const key = [state.pool, state.n, state.kind].join(":");
  if (exactCache?.key !== key)
    exactCache = {
      key,
      outcomes: exactDistribution(POOLS[state.pool], state.n, state.kind),
    };
  return exactCache.outcomes;
}
function isStandardized() {
  return state.lab === "clt" && state.standardized;
}
function art(c) {
  const paths = {
    leaf: "M22 43C5 31 10 15 35 8C44 30 36 43 22 43ZM18 38L34 14M24 28L15 23M28 23L36 24",
    wave: "M8 35Q15 18 22 31T40 24M8 25Q15 8 22 21T40 14M12 43Q25 30 37 39",
    sun: "M25 12V5M25 46V39M9 25H2M48 25H41M13 13L8 8M37 37L42 42M37 13L42 8M13 37L8 42M25 15A10 10 0 1 0 25 35A10 10 0 1 0 25 15",
    flame:
      "M25 5C29 18 42 18 40 33C38 47 10 47 10 32C10 20 20 19 20 12C25 20 29 25 24 31C37 30 26 19 25 5Z",
    star: "M25 4L30 18L45 21L34 30L37 46L25 37L12 46L16 30L4 21L20 18ZM25 13V34M15 24H36",
  };
  return `<svg class="card-art" viewBox="0 0 50 50" aria-hidden="true"><defs><radialGradient id="glow-${c.sigil}"><stop stop-color="currentColor" stop-opacity=".2"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient></defs><circle cx="25" cy="25" r="24" fill="url(#glow-${c.sigil})"/><circle cx="25" cy="25" r="21" fill="none" stroke="currentColor" opacity=".15" stroke-dasharray="2 4"/><path d="${paths[c.sigil]}" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function population() {
  const pool = POOLS[state.pool],
    m = moments(pool);
  $("#population").innerHTML = pool.cards
    .map(
      (c) =>
        `<div class="population-card" style="--card-color:${c.color}">${art(c)}<div class="card-info"><strong>${c.name}</strong><small>${c.zh}</small><div class="card-value">${c.value}<span>POWER</span></div></div><span class="probability">${fmt(c.p * 100, 1)}%</span></div>`,
    )
    .join("");
  $("#population-moments").textContent = state.hidden
    ? "Fixed μ and σ² are hidden"
    : `μ = ${fmt(m.mu)} power  ·  σ² = ${fmt(m.variance)} power²`;
}
function selectedSample(animate = false) {
  const s = state.samples[state.selected],
    spec = names[state.kind];
  $("#sample-badge").textContent = s
    ? `SAMPLE #${state.selected + 1}`
    : "READY";
  $("#observed-label").textContent = `OBSERVED ESTIMATE · ${spec.observed}`;
  $("#observed").textContent = s ? fmt(s.value) : "—";
  $("#replay").disabled = !s;
  $("#formula").textContent = spec.formula;
  if (!s) {
    $("#sample-tray").innerHTML =
      '<div class="empty-sample"><span>✦</span><b>Your next discovery starts here.</b><p>Draw a sample to meet the cards.</p></div>';
    $("#sample-caption").innerHTML =
      "One random sample → one calculated number.<br>这组卡牌将成为右图的一个点。";
    return;
  }
  const compact = s.ids.length > 10;
  $("#sample-tray").innerHTML = s.ids
    .map((id, i) => {
      const c = POOLS[state.pool].cards[id];
      return `<div class="sample-card ${compact ? "compact" : ""} ${animate ? "point-pulse" : ""}" style="--card-color:${c.color}" title="Card ${i + 1}: ${c.name}, power ${c.value}">${art(c)}<span class="tier">${c.tier}</span><b>${c.value}</b><small>${i + 1}</small></div>`;
    })
    .join("");
  $("#sample-caption").innerHTML =
    `These ${state.n} cards → one ${spec.observed} = ${fmt(s.value)}. <button id="trace-point" class="text-button">Find sample #${state.selected + 1}'s point ↗</button>`;
  if (isStandardized()) {
    const t = theory(POOLS[state.pool], state.n, state.kind),
      z = (s.value - t.expectation) / t.se;
    $("#sample-caption").insertAdjacentHTML(
      "beforeend",
      `<span class="standardized-link"> Chart Z = ${fmt(z)}${Math.abs(z) > 4 ? " (outside the displayed −4 to 4 window; sample retained)" : ""}.</span>`,
    );
  }
  $("#trace-point").onclick = () =>
    $(".distribution-panel").scrollIntoView({
      block: "center",
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  $("#live").textContent =
    `Sample ${state.selected + 1}. ${state.n} card powers: ${values(POOLS[state.pool], s.ids).join(", ")}. Observed ${spec.name}: ${fmt(s.value)}.`;
}
function domain() {
  const vs = POOLS[state.pool].cards.map((c) => c.value),
    lo = Math.min(...vs),
    hi = Math.max(...vs);
  if (state.kind === "variance" || state.kind === "varianceN")
    return [
      0,
      Math.max(
        1,
        ((hi - lo) ** 2 / 4) *
          (state.kind === "variance" ? state.n / (state.n - 1) : 1),
      ),
    ];
  const shift = state.kind === "shift" ? 2 : 0;
  return hi > lo
    ? [lo + shift, hi + shift]
    : [
        lo + shift - Math.max(1, Math.abs(lo) * 0.1),
        hi + shift + Math.max(1, Math.abs(hi) * 0.1),
      ];
}
function chart() {
  const host = $("#distribution-chart"),
    pool = POOLS[state.pool],
    t = theory(pool, state.n, state.kind),
    R = state.samples.length;
  const standardized = isStandardized();
  const [lo, hi] = standardized ? [-4, 4] : domain(),
    spec = names[state.kind];
  $("#r-badge").textContent = `R = ${R.toLocaleString()}`;
  $("#chart-label").textContent =
    `${state.exact ? "Exact + simulated" : "Empirical"} sampling distribution of ${standardized ? "Z = (X̄ − μ) / SE" : spec.symbol}`;
  if (!Number.isFinite(t.expectation)) {
    host.innerHTML =
      '<div class="empty-sample" style="padding-top:55px"><b>S² needs n ≥ 2.</b><p>With one value there is no n − 1 variance estimate.</p></div>';
    $("#chart-description").textContent =
      "Increase n to at least 2 to estimate population variance with S².";
    return;
  }
  const tickFont = document.body.classList.contains("teacher") ? 14 : 10;
  const w = Math.max(280, host.clientWidth),
    h = 210,
    L = 38,
    T = 19,
    B = 168,
    W = w - 52,
    H = B - T,
    bins = 28,
    binWidth = (hi - lo) / bins;
  const bx = (x) =>
    Math.min(bins - 1, Math.max(0, Math.floor((x - lo) / binWidth)));
  const hist = Array.from({ length: bins }, () => []);
  const transform = (v) => (standardized ? (v - t.expectation) / t.se : v);
  let below = 0,
    above = 0;
  state.samples.forEach((s, i) => {
    const v = transform(s.value);
    if (v < lo) below++;
    else if (v > hi) above++;
    else hist[bx(v)].push(i);
  });
  let exact = null,
    exactBins = Array(bins).fill(0);
  if (state.exact) {
    try {
      exact = exactOutcomes();
      exact.forEach((s) => {
        const v = transform(s.value);
        if (v >= lo && v <= hi) exactBins[bx(v)] += s.p;
      });
    } catch (e) {
      state.exact = false;
      $("#exact").checked = false;
      $("#live").textContent = e.message;
    }
  }
  const heights = hist.map((x) => x.length / Math.max(1, R));
  const normalPeak =
    state.lab === "clt" && state.kind === "mean" && t.se > 0
      ? normalPDF(
          standardized ? 0 : t.expectation,
          standardized ? 0 : t.expectation,
          standardized ? 1 : t.se,
        ) * binWidth
      : 0;
  const ymax = Math.max(0.05, ...heights, ...exactBins, normalPeak) * 1.15;
  const x = (v) => L + ((v - lo) / (hi - lo)) * W,
    y = (p) => B - (p / ymax) * H;
  let svg = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="dist-title dist-desc"><title id="dist-title">Sampling distribution of ${spec.symbol}, ${R} repeated samples, n equals ${state.n}</title><desc id="dist-desc">Each mint point is one whole sample's statistic. Horizontal axis: ${standardized ? "standardized Z (dimensionless)" : state.kind.includes("variance") ? "power squared" : "power"}. Vertical axis: relative frequency per bin. Select a point, or use the sample selector below the chart, to see its exact cards.</desc>`;
  for (let i = 0; i < 4; i++) {
    const p = (ymax * i) / 3;
    svg += `<line x1="${L}" x2="${L + W}" y1="${y(p)}" y2="${y(p)}" stroke="#283448" stroke-dasharray="2 4"/><text x="${L - 8}" y="${y(p) + 3}" fill="#7789a3" text-anchor="end" font-size="${tickFont}">${fmt(p * 100, 0)}%</text>`;
  }
  svg += `<text x="${L}" y="8" fill="#788ca5" font-size="${tickFont - 1}">RELATIVE FREQUENCY PER BIN</text>`;
  for (let i = 0; i <= 5; i++) {
    const v = lo + ((hi - lo) * i) / 5;
    svg += `<text x="${x(v)}" y="${B + 15}" text-anchor="middle" fill="#8798b0" font-size="${tickFont}">${fmt(v, 1)}</text>`;
  }
  svg += `<text x="${L + W / 2}" y="${h - 6}" text-anchor="middle" fill="#9badc5" font-size="${tickFont}">${standardized ? "Z · dimensionless (fixed −4 to 4 window)" : `${spec.observed} · ${state.kind === "variance" || state.kind === "varianceN" ? "power²" : "power"}`}</text>`;
  if (exact)
    exactBins.forEach(
      (p, i) =>
        (svg += `<rect x="${L + (i * W) / bins + 1}" y="${y(p)}" width="${W / bins - 2}" height="${B - y(p)}" fill="#af9dfa" fill-opacity=".1" stroke="#af9dfa" stroke-width=".75"/>`),
    );
  if (state.lab === "clt" && state.kind === "mean" && t.se > 0) {
    let d = "";
    for (let i = 0; i <= 200; i++) {
      const v = lo + ((hi - lo) * i) / 200;
      d += `${i ? "L" : "M"}${x(v)},${y(normalPDF(v, standardized ? 0 : t.expectation, standardized ? 1 : t.se) * binWidth)} `;
    }
    svg += `<path d="${d}" fill="none" stroke="#df9eff" stroke-width="1.5" opacity=".8"/>`;
  }
  if (!state.hidden)
    svg += `<line class="truth-line" x1="${x(standardized ? 0 : t.expectation)}" x2="${x(standardized ? 0 : t.expectation)}" y1="${T}" y2="${B}" stroke="#f4d18a" stroke-width="1.5"/><text x="${Math.min(L + W - 15, x(standardized ? 0 : t.expectation) + 5)}" y="${T + 8}" fill="#f4d18a" font-size="${tickFont}">${standardized ? "E(Z)" : "E(T)"}</text>`;
  if (R) {
    const avg = mean(state.samples.map((s) => transform(s.value)));
    svg += `<line x1="${x(avg)}" x2="${x(avg)}" y1="${T + 13}" y2="${B}" stroke="#b6a5ff" stroke-width="1.25" stroke-dasharray="4 4"/>`;
  }
  hist.forEach((ids, b) =>
    ids.forEach((i, j) => {
      const s = state.samples[i],
        cy = y((j + 0.5) / Math.max(1, R)),
        cx = x(transform(s.value));
      const selected = i === state.selected;
      svg += `<circle class="dot" data-index="${i}" cx="${cx}" cy="${cy}" r="${selected ? 4.5 : Math.min(3.1, Math.max(1.3, (H / ymax / Math.max(1, R)) * 0.37))}" fill="${selected ? "#f7d799" : "#a6f0cb"}" opacity="${selected ? 1 : 0.75}" stroke="${selected ? "#fff" : "none"}"><title>Sample #${i + 1}${state.answersHidden ? "" : `: ${standardized ? "Z = " + fmt(transform(s.value)) + "; " : ""}${spec.observed} = ${fmt(s.value)}`}. Select to inspect its ${state.n} cards.</title></circle>`;
    }),
  );
  svg += "</svg>";
  host.innerHTML = svg;
  host
    .querySelectorAll("[data-index]")
    .forEach((el) =>
      el.addEventListener("click", () => select(+el.dataset.index)),
    );
  const desc = $("#chart-description");
  desc.innerHTML = R
    ? `<label for="sample-picker">Revisit sample</label> <input id="sample-picker" type="number" min="1" max="${R}" value="${state.selected + 1}" aria-label="Choose recorded sample number" style="width:65px;background:#182536;color:#e9eef7;border:1px solid #3a4960;border-radius:4px;padding:3px 5px;font-size:10px"> <span>of ${R}${exact ? ` · exact: ${exact.length} weighted ordered samples` : ""}</span>`
    : exact
      ? `${exact.length} ordered samples enumerated exactly, with product probability weights. Draw to compare simulation.`
      : "Draw your first sample. Each point will keep its original cards.";
  if ($("#exact").disabled)
    desc.insertAdjacentHTML(
      "beforeend",
      " <span>Exact enumeration cap: 20,000 ordered samples; reduce n to enable it.</span>",
    );
  if (standardized)
    desc.insertAdjacentHTML(
      "beforeend",
      `<span class="overflow-note">Z window: ${R - below - above} visible; ${below} below −4, ${above} above +4. All ${R} samples retained and selectable.</span>`,
    );
  if (t.se === 0)
    desc.insertAdjacentHTML(
      "beforeend",
      `<span class="overflow-note">Degenerate distribution: every estimate equals ${fmt(t.expectation)}; SE = 0. Standardization by zero is undefined.</span>`,
    );
  renderExactInspector(exact);
  $("#sample-picker")?.addEventListener("change", (e) => {
    const i = Number(e.target.value);
    if (Number.isInteger(i) && i >= 1 && i <= R) select(i - 1);
    else e.target.value = state.selected + 1;
  });
}
function metrics() {
  const t = theory(POOLS[state.pool], state.n, state.kind),
    R = state.samples.length;
  if (state.lab === "clt" && t.se === 0) {
    state.standardized = false;
    $("#standardize").checked = false;
  }
  $("#standardize").disabled = t.se === 0;
  const standardized = isStandardized();
  $("#expectation").previousElementSibling.textContent = standardized
    ? "THEORETICAL E(Z)"
    : "THEORETICAL E(T)";
  $("#simulation").previousElementSibling.textContent = standardized
    ? "SIMULATION MEAN OF Z"
    : "SIMULATION MEAN";
  $("#se").previousElementSibling.textContent = standardized
    ? "THEORETICAL SD(Z)"
    : "STANDARD ERROR";
  $("#expectation").textContent = state.hidden
    ? "Hidden"
    : fmt(standardized ? 0 : t.expectation);
  $("#simulation").textContent = R
    ? fmt(
        mean(
          state.samples.map((s) =>
            standardized ? (s.value - t.expectation) / t.se : s.value,
          ),
        ),
      )
    : "—";
  $("#se").textContent = state.hidden ? "Hidden" : fmt(standardized ? 1 : t.se);
  $("#bias").textContent = state.hidden ? "Hidden" : fmt(t.bias);
  $("#bias-note").textContent =
    `E(${names[state.kind].symbol}) − ${names[state.kind].target}`;
  const prompts = {
    mean: "If n increases, how does the spread of sample means change?",
    first:
      "If n increases but this rule keeps only the first card, how does its spread change?",
    shift:
      "If n increases, how does the spread of the mean + 2 estimator change?",
    variance:
      "For n ≥ 2, if n increases, how does the spread of unbiased S² change?",
    varianceN:
      "Keep n fixed and increase R. How does the theoretical spread of the divisor-n variance statistic change?",
  };
  $("#predict-question").textContent = prompts[state.kind];
  if (isStandardized())
    $("#predict-question").textContent =
      "For the unstandardized sample mean X̄, if n increases, how does its spread change?";
  updatePredictionEvidence(t);
  if (R >= 5000)
    $("#reset-note").textContent =
      "5,000 retained samples reached. Reset this experiment to start a fresh reproducible record.";
  $("#n-value").textContent = state.n;
  $("#challenge-question").textContent =
    `You collect 1,000 samples instead of 200, keeping n = ${state.n}. Does the theoretical standard error change?`;
  $("#observed-label").textContent =
    `OBSERVED ESTIMATE · ${names[state.kind].observed}`;
  const disabled = state.kind === "variance" && state.n === 1;
  $("#draw").disabled = disabled || state.running || R >= 5000;
  $("#quick-draw").disabled = $("#draw").disabled;
  $("#run").disabled = disabled || state.running || R >= 5000;
  $("#pause").disabled = !state.running;
  $("#teacher-pause").disabled = !state.running;
  $("#run").textContent =
    state.remaining && !state.running ? "▶ Resume batch" : "▶ Run batch";
  $("#exact").disabled =
    POOLS[state.pool].cards.length ** state.n > 20000 || disabled;
  $("#exact").parentElement.title = $("#exact").disabled
    ? "Choose a smaller n. Enumeration cap: 20,000 ordered samples."
    : "Enumerate every ordered sample with probability weights.";
  const messages = {
    mean: [
      "Same rule. Different observed estimates.",
      "Before drawing, X̄ is a statistic and an estimator of μ. After drawing, your x̄ is an observed estimate. Repeat the whole sample to see how that rule varies.",
    ],
    first: [
      "Unbiased does not mean precise.",
      "The first card is also an estimator of μ. E(X₁) = μ, but its SE is σ whatever n is. Draw more cards: this rule ignores all but the first.",
    ],
    shift: [
      "More data cannot repair this bias.",
      "Adding 2 shifts every sample mean by 2. E(X̄ + 2) = μ + 2. Larger n reduces the spread, but the estimator still targets the wrong centre.",
    ],
    variance: [
      "Why divide by n − 1?",
      "The sample mean is fitted from the same data. Dividing the squared deviations by n − 1 makes S² unbiased for σ². This does not make S = √S² unbiased for σ.",
    ],
    varianceN: [
      "A small divisor with a systematic effect.",
      "Dividing by n gives E(Vₙ) = (n − 1)σ²/n. It underestimates the population variance on average, even though a single result may be above or below σ².",
    ],
  };
  let [title, body] = messages[state.kind];
  if (state.lab === "clt") {
    title = "The means concentrate. The population stays skewed.";
    body =
      "Increase n to see the distribution of sample means become more nearly Normal. The purple curve is a Normal approximation (density × bin width), never an exact distribution for these card pools. IID observations and finite variance matter; there is no universal n = 30 guarantee.";
  }
  if (state.lab === "coverage") {
    title = `${state.confidence * 100}% describes a method over repeated samples.`;
    body =
      "The population mean μ is fixed. Each fresh sample creates a random interval. The observed fraction covering μ can differ from 95%; for non-normal data, small-sample Normal intervals may have poor coverage.";
  }
  $("#insight-title").textContent = title;
  $("#insight-body").textContent = body;
}
function coverage() {
  if (state.lab !== "coverage") return;
  const m = moments(POOLS[state.pool]),
    z = {
      0.9: 1.6448536269514722,
      0.95: 1.959963984540054,
      0.99: 2.5758293035489004,
    }[state.confidence],
    margin = (z * m.sd) / Math.sqrt(state.n),
    ss = state.samples,
    windowStart =
      state.ciIndex < 0
        ? Math.max(0, ss.length - 40)
        : Math.max(0, Math.min(state.ciIndex - 19, ss.length - 40)),
    shown = ss.slice(windowStart, windowStart + 40),
    pad = m.sd === 0 ? Math.max(1, Math.abs(m.mu) * 0.1) : 0,
    lo = Math.min(
      m.mu - 2 * margin - pad,
      ...shown.map((s) => s.value - margin),
    ),
    hi = Math.max(
      m.mu + 2 * margin + pad,
      ...shown.map((s) => s.value + margin),
    );
  const cw = Math.max(280, $("#coverage-chart").clientWidth),
    ciFont = document.body.classList.contains("teacher") ? 14 : 10;
  const x = (v) => 45 + ((v - lo) / (hi - lo)) * (cw - 65);
  const hit = ss.filter(
    (s) => s.value - margin <= m.mu && m.mu <= s.value + margin,
  ).length;
  let svg = `<svg viewBox="0 0 ${cw} 280" role="img" aria-label="A window of recorded confidence intervals. Use the interval selector or focus a point to inspect its numeric endpoints and coverage.">`;
  if (!state.hidden)
    svg += `<line x1="${x(m.mu)}" x2="${x(m.mu)}" y1="8" y2="250" stroke="#f4d18a"/><text x="${x(m.mu) + 5}" y="12" fill="#f4d18a" font-size="${ciFont}">fixed μ</text>`;
  shown.forEach((s, i) => {
    const covers = s.value - margin <= m.mu && m.mu <= s.value + margin,
      c = state.hidden ? "#9dadc6" : covers ? "#a6f0cb" : "#f59cbb",
      y = 20 + i * 5.6;
    svg += `<line x1="${x(s.value - margin)}" x2="${x(s.value + margin)}" y1="${y}" y2="${y}" stroke="${c}" stroke-width="1.7" stroke-dasharray="${state.hidden || covers ? "none" : "3 2"}"/><circle cx="${x(s.value)}" cy="${y}" r="${windowStart + i === (state.ciIndex < 0 ? ss.length - 1 : state.ciIndex) ? 3.5 : 2}" fill="${c}" data-ci-index="${windowStart + i}" tabindex="${windowStart + i === (state.ciIndex < 0 ? ss.length - 1 : state.ciIndex) ? 0 : -1}" role="button" aria-label="Interval ${windowStart + i + 1}: ${fmt(s.value - margin)} to ${fmt(s.value + margin)}; ${state.hidden ? "truth hidden" : covers ? "covers fixed mu" : "misses fixed mu"}"><title>Sample ${windowStart + i + 1}: [${fmt(s.value - margin)}, ${fmt(s.value + margin)}]${state.hidden ? "" : covers ? ", covers μ" : ", misses μ"}</title></circle>`;
  });
  for (let i = 0; i < 6; i++) {
    const v = lo + ((hi - lo) * i) / 5;
    svg += `<text x="${x(v)}" y="270" text-anchor="middle" fill="#8fa1ba" font-size="${ciFont}">${fmt(v, 1)}</text>`;
  }
  svg += "</svg>";
  $("#coverage-method").textContent =
    m.sd === 0
      ? "Degenerate population: σ = 0, so every mean equals μ and each interval collapses to [μ, μ]. Coverage is 100%; Z standardization is undefined."
      : `${state.confidence * 100}% intervals: x̄ ± ${fmt(z)} σ/√n; current margin ${fmt(margin)} power. Known σ, non-normal card population: Normal approximation, no universal n cutoff. Same saved samples are reused when confidence changes.`;
  $("#coverage-chart").innerHTML = svg;
  const selected =
    state.ciIndex < 0 ? ss.length - 1 : Math.min(state.ciIndex, ss.length - 1);
  $("#ci-case").disabled = !ss.length;
  $("#ci-case").max = Math.max(1, ss.length);
  $("#ci-case").value = selected + 1 || 1;
  $("#ci-window").textContent = ss.length
    ? `of ${ss.length}; graph shows intervals ${windowStart + 1}–${windowStart + shown.length}`
    : "";
  $("#ci-detail").textContent =
    selected >= 0
      ? `Interval #${selected + 1}: x̄ = ${fmt(ss[selected].value)}; [${fmt(ss[selected].value - margin)}, ${fmt(ss[selected].value + margin)}]. ${state.hidden ? "Reveal the fixed truth to inspect coverage." : ss[selected].value - margin <= m.mu && m.mu <= ss[selected].value + margin ? `Covers the fixed μ = ${fmt(m.mu)}.` : `Misses the fixed μ = ${fmt(m.mu)}.`} Nominal method level ${state.confidence * 100}%, not a probability assigned to this realized interval.`
      : "Draw a sample to inspect its interval.";
  $$("#coverage-chart [data-ci-index]").forEach((el) => {
    const inspect = () => {
      state.ciIndex = +el.dataset.ciIndex;
      coverage();
    };
    el.onclick = inspect;
    el.onpointerdown = (e) => {
      e.preventDefault();
      const i = el.dataset.ciIndex;
      inspect();
      $(`#coverage-chart [data-ci-index="${i}"]`)?.focus({
        preventScroll: true,
      });
    };
    el.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const i = el.dataset.ciIndex;
        inspect();
        $(`#coverage-chart [data-ci-index="${i}"]`)?.focus({
          preventScroll: true,
        });
      }
    };
  });
  $("#coverage-result").textContent = ss.length
    ? state.hidden
      ? `${ss.length} random intervals; reveal truth to inspect coverage.`
      : `${hit} / ${ss.length} intervals cover the same fixed μ (${fmt((hit / ss.length) * 100, 1)}%). Showing ${shown.length} in the selected window. Nominal level: ${state.confidence * 100}%; non-normal approximation.`
    : "Draw samples above to generate intervals. No result is forced to cover the mean.";
}
function update() {
  metrics();
  chart();
  coverage();
}
function select(i) {
  state.selected = i;
  selectedSample();
  chart();
}
function stop() {
  state.running = false;
  state.token++;
  metrics();
}
function reset(
  reason = "Fresh experiment. Same seed reproduces the same draws.",
) {
  stop();
  state.remaining = 0;
  state.rng = seededRandom(state.seed);
  state.samples = [];
  state.selected = -1;
  state.exactPage = 0;
  state.ciIndex = -1;
  document.querySelectorAll(".sample-flight").forEach((e) => e.remove());
  if (
    POOLS[state.pool].cards.length ** state.n > 20000 ||
    (state.kind === "variance" && state.n === 1)
  ) {
    state.exact = false;
    $("#exact").checked = false;
  }
  $("#reset-note").textContent = reason;
  $("#live").textContent = reason;
  population();
  selectedSample();
  update();
}
function addOne() {
  if (state.samples.length >= 5000) return false;
  const ids = draw(POOLS[state.pool], state.n, state.rng),
    v = statistic(values(POOLS[state.pool], ids), state.kind);
  state.samples.push({ ids, value: v });
  state.selected = state.samples.length - 1;
  return true;
}
function runBatch() {
  if (state.running) return;
  if (state.samples.length >= 5000) {
    state.remaining = 0;
    state.running = false;
    metrics();
    return;
  }
  if (!state.remaining)
    state.remaining = Math.min(
      Number($("#batch").value),
      5000 - state.samples.length,
    );
  state.running = true;
  const token = ++state.token;
  metrics();
  function tick() {
    if (token !== state.token || !state.running) return;
    const count = Math.min(10, state.remaining, 5000 - state.samples.length);
    for (let i = 0; i < count; i++) addOne();
    state.remaining = Math.min(
      state.remaining - count,
      5000 - state.samples.length,
    );
    selectedSample();
    update();
    if (state.remaining > 0) requestAnimationFrame(tick);
    else {
      state.running = false;
      metrics();
      $("#live").textContent =
        `Batch complete. ${state.samples.length} recorded samples, each with n = ${state.n}.`;
    }
  }
  requestAnimationFrame(tick);
}
$("#quick-draw").addEventListener("click", () => {
  $(".sample-panel").scrollIntoView({ block: "center", behavior: "instant" });
  $("#draw").click();
});
$("#draw").addEventListener("click", () => {
  if (state.samples.length >= 5000) return;
  if (!addOne()) return;
  state.remaining = Math.min(state.remaining, 5000 - state.samples.length);
  selectedSample(true);
  update();
  animateSampleToPoint();
});
$("#replay").addEventListener("click", () => {
  selectedSample(true);
  animateSampleToPoint();
});
$("#run").addEventListener("click", runBatch);
$("#pause").addEventListener("click", stop);
$("#n").addEventListener("input", (e) => {
  state.n = +e.target.value;
  reset(
    "n changed. Old results cleared so different sample sizes are never mixed.",
  );
});
$("#pool").addEventListener("change", (e) => {
  state.pool = e.target.value;
  clearPrediction();
  reset(
    "Population changed. Old results cleared. True parameters now belong to the new fixed model.",
  );
});
$("#estimator").addEventListener("change", (e) => {
  state.kind = e.target.value;
  clearPrediction();
  $$("[data-prediction]").forEach((b) => b.classList.remove("selected"));
  $("#predict-feedback").textContent = "";
  reset(
    "Estimator changed. Old results cleared; every new point uses the selected rule.",
  );
});
$("#reset").addEventListener("click", () => {
  state.seed = $("#seed").value || "aurora-2026";
  $("#seed").value = state.seed;
  reset();
});
$("#seed").addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("#reset").click();
});
$("#exact").addEventListener("change", (e) => {
  state.exact = e.target.checked;
  chart();
});
$("#hide-truth").addEventListener("change", (e) => {
  state.hidden = e.target.checked;
  population();
  update();
  $("#live").textContent = state.hidden
    ? "True parameters hidden. The population and random stream are unchanged."
    : "True parameters revealed. The population and random stream are unchanged.";
});
$("#teacher").addEventListener("click", (e) => {
  const on = document.body.classList.toggle("teacher");
  $("#teacher").setAttribute("aria-pressed", String(on));
  applyTeacherStage();
  chart();
  coverage();
  $("#live").textContent = on
    ? "Teacher mode. Wider projection layout. Use Hide true values to withhold answers, and Pause to stop a running batch."
    : "Student mode.";
});
$$("[data-prediction]").forEach((b) =>
  b.addEventListener("click", () => {
    $$("[data-prediction]").forEach((x) =>
      x.classList.toggle("selected", x === b),
    );
    const t = theory(POOLS[state.pool], state.n, state.kind);
    if (!Number.isFinite(t.se)) {
      $("#predict-feedback").textContent =
        "Choose n ≥ 2 before predicting this variance estimator.";
      return;
    }
    state.predictionRecord = {
      pool: state.pool,
      kind: state.kind,
      n: state.n,
      R: state.samples.length,
      se: t.se,
      choice: b.dataset.prediction,
    };
    $("#predict-feedback").textContent =
      state.kind === "varianceN"
        ? "Prediction saved. Keep n fixed, run more repetitions, then compare the theoretical SE."
        : "Prediction saved. Change n, run samples, then compare this estimator’s theoretical SE.";
  }),
);
$$("[data-answer]").forEach((b) =>
  b.addEventListener("click", () => {
    $("#challenge-feedback").textContent =
      b.dataset.answer === "no"
        ? "Correct: SE describes one estimator. R only improves the simulated picture. Explain why n is different."
        : "Keep n fixed and compare the theoretical SE before and after a batch. R adds more estimates of the same random quantity.";
  }),
);
function openGuide() {
  $("#guide").showModal();
}
$("#help").onclick = openGuide;
$("#guide-open").onclick = openGuide;
$("#assumptions").onclick = openGuide;
$("#guide-close").onclick = () => $("#guide").close();
$("#guide").addEventListener("click", (e) => {
  if (e.target === $("#guide")) $("#guide").close();
});
$$("[data-lab]").forEach((b) =>
  b.addEventListener("click", () => {
    const lab = b.dataset.lab;
    if (lab === state.lab) return;
    state.lab = lab;
    clearPrediction();
    $$("[data-lab]").forEach((x) =>
      x.classList.toggle("active", x.dataset.lab === lab),
    );
    $("#lab-switch").value = lab;
    const meta = {
      sampling: [
        "Sampling & estimators",
        "One sample. <em>Many possibilities.</em>",
        "同一个卡池，不同的样本。Can one number tell the whole story?",
        "S2 → S3 · ESTIMATION",
      ],
      clt: [
        "Central limit theorem",
        "The pool stays. <em>The means transform.</em>",
        "偏态总体，近似正态的均值。Change n. Watch the sampling distribution.",
        "S3 · CENTRAL LIMIT THEOREM",
      ],
      correlation: [
        "Correlation & regression",
        "Move a point. <em>Question the relationship.</em>",
        "线性、单调与因果，是不同的问题。Drag, rank, transform and compare.",
        "S1 + S3 · CORRELATION",
      ],
      coverage: [
        "Confidence intervals",
        "Random intervals. <em>One fixed truth.</em>",
        "变化的是区间，不是参数。Repeat the method. Inspect its coverage.",
        "S3 · CONFIDENCE INTERVALS",
      ],
    }[lab];
    const labNumber = {
      sampling: "01",
      clt: "02",
      coverage: "03",
      correlation: "04",
    }[lab];
    if ($("#experiment-number"))
      $("#experiment-number").textContent = "EXPERIMENT " + labNumber;
    $(".intro-index>span").textContent = labNumber;
    $(".intro-index>small").textContent = {
      sampling: "THE SAMPLING LAB",
      clt: "THE LIMIT LAB",
      coverage: "THE INTERVAL LAB",
      correlation: "THE RELATIONSHIP LAB",
    }[lab];
    $("#crumb").textContent = meta[0];
    $("#lab-title").innerHTML = meta[1];
    $("#lab-subtitle").textContent = meta[2];
    $("#unit-label").textContent = meta[3];
    $("#sampling-workspace").classList.toggle("hidden", lab === "correlation");
    $("#correlation-workspace").classList.toggle(
      "hidden",
      lab !== "correlation",
    );
    $("#clt-controls").classList.toggle("hidden", lab !== "clt");
    $("#quick-draw").classList.toggle("hidden", lab === "correlation");
    if (lab === "correlation") {
      stop();
      state.remaining = 0;
      correlationLab.render();
      applyTeacherStage();
      return;
    }
    $("#coverage-panel").classList.toggle("hidden", lab !== "coverage");
    if (lab !== "sampling") {
      state.kind = "mean";
      $("#estimator").value = "mean";
    }
    $("#estimator").disabled = lab !== "sampling";
    reset(
      "New lab. Fresh results with the same fixed population and reproducible seed.",
    );
    applyTeacherStage();
  }),
);
let resizeFrame;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    chart();
    coverage();
    if (state.lab === "correlation") correlationLab.render();
  });
});
window.STATVERSE = {
  getSnapshot: () => ({
    pool: state.pool,
    n: state.n,
    kind: state.kind,
    seed: state.seed,
    samples: state.samples.map((s) => ({ ids: [...s.ids], value: s.value })),
    selected: state.selected,
    running: state.running,
    remaining: state.remaining,
    hidden: state.hidden,
    lab: state.lab,
    standardized: state.standardized,
    confidence: state.confidence,
    teacherStage: state.teacherStage,
    answersHidden: state.answersHidden,
    correlation: correlationLab.getSnapshot(),
  }),
};
population();
selectedSample();
update();

function animateSampleToPoint() {
  document.querySelectorAll(".sample-flight").forEach((e) => e.remove());
  if (
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    state.answersHidden
  )
    return;
  const source = $("#sample-tray"),
    target = $(`.dot[data-index="${state.selected}"]`);
  if (!target) return;
  const a = source.getBoundingClientRect(),
    b = target.getBoundingClientRect();
  if (!a.width || !b.width) return;
  const ghost = source.cloneNode(true);
  ghost.removeAttribute("id");
  ghost.className = "sample-flight";
  ghost.setAttribute("aria-hidden", "true");
  ghost.inert = true;
  Object.assign(ghost.style, {
    left: a.x + a.width / 2 + "px",
    top: a.y + a.height / 2 + "px",
    width: a.width + "px",
  });
  document.body.append(ghost);
  const dx = b.x + b.width / 2 - a.x - a.width / 2,
    dy = b.y + b.height / 2 - a.y - a.height / 2;
  ghost
    .animate(
      [
        { transform: "translate(-50%,-50%) scale(.95)", opacity: 0.9 },
        {
          offset: 0.35,
          transform: "translate(-50%,-50%) scale(.72)",
          opacity: 0.8,
        },
        {
          transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.025)`,
          opacity: 0.15,
        },
      ],
      { duration: 850, easing: "cubic-bezier(.3,.05,.25,1)" },
    )
    .finished.then(
      () => ghost.remove(),
      () => ghost.remove(),
    );
}
function renderExactInspector(outcomes) {
  const host = $("#exact-inspector");
  host.classList.toggle("hidden", !outcomes);
  if (!outcomes) {
    host.innerHTML = "";
    host.dataset.contentKey = "";
    return;
  }
  const key = [
    state.pool,
    state.n,
    state.kind,
    state.exactPage,
    state.hidden,
  ].join(":");
  if (host.dataset.contentKey === key) return;
  host.dataset.contentKey = key;
  const wasOpen = host.querySelector("details")?.open || false;
  const size = 10,
    pages = Math.ceil(outcomes.length / size);
  state.exactPage = Math.max(0, Math.min(pages - 1, state.exactPage));
  const first = state.exactPage * size;
  const probability = (p) => (p < 1e-5 ? p.toExponential(3) : fmt(p, 6)),
    pool = POOLS[state.pool];
  host.innerHTML = `<details><summary>Inspect exact ordered samples & weights · ${outcomes.length} cases</summary><p>Each ordered sample's weight is the product of its draw probabilities. All cases are included, even when their statistic values coincide.</p><table><caption>Exact outcomes · page ${state.exactPage + 1}/${pages}</caption><thead><tr><th>Case</th><th>Ordered card powers</th><th class="answer-output">${names[state.kind].observed}</th><th>Probability weight</th><th class="answer-output">p × T</th></tr></thead><tbody>${outcomes
    .slice(first, first + size)
    .map(
      (o, j) =>
        `<tr><td>${first + j + 1}</td><td>[${values(pool, o.ids).join(", ")}]</td><td class="answer-output">${fmt(o.value)}</td><td title="${o.ids.map((i) => probability(pool.cards[i].p)).join(" × ")}">${o.ids.map((i) => probability(pool.cards[i].p)).join(" × ")} = <b>${probability(o.p)}</b></td><td class="answer-output">${fmt(o.p * o.value, 6)}</td></tr>`,
    )
    .join(
      "",
    )}</tbody></table><div class="exact-pagination"><button id="exact-prev" class="secondary" ${state.exactPage === 0 ? "disabled" : ""}>← Previous</button><label for="exact-page">Page</label><input id="exact-page" type="number" min="1" max="${pages}" value="${state.exactPage + 1}"><button id="exact-next" class="secondary" ${state.exactPage === pages - 1 ? "disabled" : ""}>Next →</button><span class="answer-output">Σ probability = ${fmt(
    outcomes.reduce((s, o) => s + o.p, 0),
    6,
  )}${
    state.hidden
      ? ""
      : ` · weighted E(T) = ${fmt(
          outcomes.reduce((s, o) => s + o.p * o.value, 0),
          6,
        )}`
  }</span></div></details>`;
  if (wasOpen) host.querySelector("details").open = true;
  const move = (p) => {
    state.exactPage = p;
    renderExactInspector(outcomes);
    host.querySelector("details").open = true;
  };
  $("#exact-prev").onclick = () => move(state.exactPage - 1);
  $("#exact-next").onclick = () => move(state.exactPage + 1);
  $("#exact-page").onchange = (e) => {
    const p = Number(e.target.value);
    if (Number.isInteger(p) && p >= 1 && p <= pages) move(p - 1);
    else e.target.value = state.exactPage + 1;
  };
}
function applyTeacherStage() {
  const teacher = document.body.classList.contains("teacher"),
    stage = teacher ? state.teacherStage : "all";
  const groups = {
    prediction: $(".prediction"),
    population: $(".population-panel"),
    sample: $(".sample-panel"),
    distribution: $(".distribution-panel"),
    settings: $(".settings-panel"),
    explain: $(".discovery-panel"),
    transfer: $(".transfer"),
    coverage: $("#coverage-panel"),
  };
  const visible = {
    all: Object.keys(groups),
    predict: ["prediction"],
    population: ["prediction", "population"],
    sample: ["population", "sample", "settings"],
    distribution: [
      "population",
      "sample",
      "distribution",
      "settings",
      "coverage",
    ],
    explain: [
      "population",
      "sample",
      "distribution",
      "settings",
      "coverage",
      "explain",
    ],
    transfer: Object.keys(groups),
  }[stage];
  for (const [key, el] of Object.entries(groups))
    el.classList.toggle("stage-hidden", !visible.includes(key));
  const prompts = {
    all: "Keep the rule fixed. Let learners predict the next result before drawing.",
    predict:
      "Which changes when we repeat: μ, the rule, or the observed estimate?",
    population:
      "Which quantities are fixed? Can a rare card still appear twice?",
    sample:
      "Compute one estimate from these cards. How many points should this whole group create?",
    distribution:
      "Choose a point. Recover its original cards. Compare n with R.",
    explain:
      "Can an unbiased estimator be imprecise? Can a precise estimator be biased?",
    transfer:
      "Does more repetition reduce the SE of the next sample mean? Explain using the model.",
  };
  $("#teacher-question").textContent =
    state.lab === "correlation"
      ? "Drag one point, then compare the change in Pearson r with the change in ranks."
      : prompts[stage];
  $("#teacher-stage").disabled = state.lab === "correlation";
  $("#teacher-next").disabled = state.lab === "correlation";
  document.body.classList.toggle(
    "answers-hidden",
    teacher && state.answersHidden,
  );
  $(".workbench").classList.toggle(
    "single-stage",
    teacher && stage === "sample",
  );
}
$("#teacher-pause").onclick = stop;
$("#teacher-stage").onchange = (e) => {
  state.teacherStage = e.target.value;
  applyTeacherStage();
  chart();
};
$("#teacher-next").onclick = () => {
  const order = [
    "predict",
    "population",
    "sample",
    "distribution",
    "explain",
    "transfer",
    "all",
  ];
  state.teacherStage =
    order[(order.indexOf(state.teacherStage) + 1) % order.length];
  $("#teacher-stage").value = state.teacherStage;
  applyTeacherStage();
  chart();
};
$("#hide-worked").onchange = (e) => {
  state.answersHidden = e.target.checked;
  applyTeacherStage();
  chart();
};
$("#standardize").onchange = (e) => {
  state.standardized = e.target.checked;
  selectedSample();
  update();
  $("#live").textContent =
    "Same samples retained. Only the plotting unit changed.";
};
$("#confidence").onchange = (e) => {
  state.confidence = +e.target.value;
  coverage();
  metrics();
  $("#live").textContent =
    "Confidence level changed using the same saved samples; no fresh draws.";
};
$("#lab-switch").onchange = (e) => $(`[data-lab="${e.target.value}"]`).click();
$("#ci-case").onchange = (e) => {
  const n = Number(e.target.value);
  if (Number.isInteger(n) && n >= 1 && n <= state.samples.length) {
    if (state.ciIndex !== n - 1) {
      state.ciIndex = n - 1;
      coverage();
    }
  } else
    e.target.value =
      (state.ciIndex < 0 ? state.samples.length : state.ciIndex + 1) || 1;
};
for (const el of document.querySelectorAll(
  ".estimate-box,.sample-formula,.distribution-metrics,.discovery-panel,#challenge-feedback,#coverage-chart,#coverage-result,#ci-detail",
))
  el.classList.add("answer-output");

function clearPrediction() {
  state.predictionRecord = null;
  $$("[data-prediction]").forEach((b) => b.classList.remove("selected"));
  $("#predict-feedback").textContent = "";
}
function updatePredictionEvidence(t) {
  const p = state.predictionRecord;
  if (!p || p.pool !== state.pool || p.kind !== state.kind) return;
  if (p.kind === "varianceN" && p.n !== state.n) {
    clearPrediction();
    return;
  }
  if (p.n !== state.n) {
    const answer =
      Math.abs(t.se - p.se) < 1e-10
        ? "same"
        : t.se < p.se
          ? "narrower"
          : "wider";
    $("#predict-feedback").textContent =
      `Observed theory: n ${p.n} → ${state.n}, SE ${fmt(p.se)} → ${fmt(t.se)} (${answer}). Your prediction: ${p.choice}. ${answer === p.choice ? "The model supports your prediction." : "Compare which part of this rule uses the extra observations."} Explain why R is different.`;
  } else if (p.R !== state.samples.length) {
    $("#predict-feedback").textContent =
      `R ${p.R} → ${state.samples.length}, with n fixed at ${state.n}: theoretical SE stays ${fmt(t.se)}. ${p.kind === "varianceN" ? (p.choice === "same" ? "Your prediction matches." : "More repetitions depict the same distribution.") : "Your n-change prediction is still waiting for a change to n."}`;
  }
}
