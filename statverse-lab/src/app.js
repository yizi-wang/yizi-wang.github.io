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
} from "./statistics.js";
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
};
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
      ((hi - lo) ** 2 / 4) *
        (state.kind === "variance" ? state.n / (state.n - 1) : 1),
    ];
  const shift = state.kind === "shift" ? 2 : 0;
  return [lo + shift, hi + shift];
}
function chart() {
  const host = $("#distribution-chart"),
    pool = POOLS[state.pool],
    t = theory(pool, state.n, state.kind),
    R = state.samples.length;
  const [lo, hi] = domain(),
    spec = names[state.kind];
  $("#r-badge").textContent = `R = ${R.toLocaleString()}`;
  $("#chart-label").textContent =
    `${state.exact ? "Exact + simulated" : "Empirical"} sampling distribution of ${spec.symbol}`;
  if (!Number.isFinite(t.expectation)) {
    host.innerHTML =
      '<div class="empty-sample" style="padding-top:55px"><b>S² needs n ≥ 2.</b><p>With one value there is no n − 1 variance estimate.</p></div>';
    $("#chart-description").textContent =
      "Increase n to at least 2 to estimate population variance with S².";
    return;
  }
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
  state.samples.forEach((s, i) => hist[bx(s.value)].push(i));
  let exact = null,
    exactBins = Array(bins).fill(0);
  if (state.exact) {
    try {
      exact = exactDistribution(pool, state.n, state.kind);
      exact.forEach((s) => (exactBins[bx(s.value)] += s.p));
    } catch (e) {
      state.exact = false;
      $("#exact").checked = false;
      $("#live").textContent = e.message;
    }
  }
  const heights = hist.map((x) => x.length / Math.max(1, R));
  const normalPeak =
    state.lab === "clt" && state.kind === "mean"
      ? normalPDF(t.expectation, t.expectation, t.se) * binWidth
      : 0;
  const ymax = Math.max(0.05, ...heights, ...exactBins, normalPeak) * 1.15;
  const x = (v) => L + ((v - lo) / (hi - lo)) * W,
    y = (p) => B - (p / ymax) * H;
  let svg = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="dist-title dist-desc"><title id="dist-title">Sampling distribution of ${spec.symbol}, ${R} repeated samples, n equals ${state.n}</title><desc id="dist-desc">Each mint point is one whole sample's statistic. Horizontal axis: ${state.kind.includes("variance") ? "power squared" : "power"}. Vertical axis: relative frequency per bin. Select a point, or use the sample selector below the chart, to see its exact cards.</desc>`;
  for (let i = 0; i < 4; i++) {
    const p = (ymax * i) / 3;
    svg += `<line x1="${L}" x2="${L + W}" y1="${y(p)}" y2="${y(p)}" stroke="#283448" stroke-dasharray="2 4"/><text x="${L - 8}" y="${y(p) + 3}" fill="#7789a3" text-anchor="end" font-size="10">${fmt(p * 100, 0)}%</text>`;
  }
  svg += `<text x="${L}" y="8" fill="#788ca5" font-size="9">RELATIVE FREQUENCY PER BIN</text>`;
  for (let i = 0; i <= 5; i++) {
    const v = lo + ((hi - lo) * i) / 5;
    svg += `<text x="${x(v)}" y="${B + 15}" text-anchor="middle" fill="#8798b0" font-size="10">${fmt(v, 1)}</text>`;
  }
  svg += `<text x="${L + W / 2}" y="${h - 6}" text-anchor="middle" fill="#9badc5" font-size="10">${spec.observed} · ${state.kind === "variance" || state.kind === "varianceN" ? "power²" : "power"}</text>`;
  if (exact)
    exactBins.forEach(
      (p, i) =>
        (svg += `<rect x="${L + (i * W) / bins + 1}" y="${y(p)}" width="${W / bins - 2}" height="${B - y(p)}" fill="#af9dfa" fill-opacity=".1" stroke="#af9dfa" stroke-width=".75"/>`),
    );
  if (state.lab === "clt" && state.kind === "mean") {
    let d = "";
    for (let i = 0; i <= 200; i++) {
      const v = lo + ((hi - lo) * i) / 200;
      d += `${i ? "L" : "M"}${x(v)},${y(normalPDF(v, t.expectation, t.se) * binWidth)} `;
    }
    svg += `<path d="${d}" fill="none" stroke="#df9eff" stroke-width="1.5" opacity=".8"/>`;
  }
  if (!state.hidden)
    svg += `<line class="truth-line" x1="${x(t.expectation)}" x2="${x(t.expectation)}" y1="${T}" y2="${B}" stroke="#f4d18a" stroke-width="1.5"/><text x="${Math.min(L + W - 15, x(t.expectation) + 5)}" y="${T + 8}" fill="#f4d18a" font-size="10">E(T)</text>`;
  if (R) {
    const avg = mean(state.samples.map((s) => s.value));
    svg += `<line x1="${x(avg)}" x2="${x(avg)}" y1="${T + 13}" y2="${B}" stroke="#b6a5ff" stroke-width="1.25" stroke-dasharray="4 4"/>`;
  }
  hist.forEach((ids, b) =>
    ids.forEach((i, j) => {
      const s = state.samples[i],
        cy = y((j + 0.5) / Math.max(1, R)),
        cx = x(s.value);
      const selected = i === state.selected;
      svg += `<circle class="dot" data-index="${i}" cx="${cx}" cy="${cy}" r="${selected ? 4.5 : Math.min(3.1, Math.max(1.3, (H / ymax / Math.max(1, R)) * 0.37))}" fill="${selected ? "#f7d799" : "#a6f0cb"}" opacity="${selected ? 1 : 0.75}" stroke="${selected ? "#fff" : "none"}"><title>Sample #${i + 1}: ${spec.observed} = ${fmt(s.value)}. Select to inspect its ${state.n} cards.</title></circle>`;
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
  $("#sample-picker")?.addEventListener("change", (e) => {
    const i = Number(e.target.value);
    if (Number.isInteger(i) && i >= 1 && i <= R) select(i - 1);
    else e.target.value = state.selected + 1;
  });
}
function metrics() {
  const t = theory(POOLS[state.pool], state.n, state.kind),
    R = state.samples.length;
  $("#expectation").textContent = state.hidden ? "Hidden" : fmt(t.expectation);
  $("#simulation").textContent = R
    ? fmt(mean(state.samples.map((s) => s.value)))
    : "—";
  $("#se").textContent = state.hidden ? "Hidden" : fmt(t.se);
  $("#bias").textContent = state.hidden ? "Hidden" : fmt(t.bias);
  $("#bias-note").textContent =
    `E(${names[state.kind].symbol}) − ${names[state.kind].target}`;
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
    title = "95% describes a method over repeated samples.";
    body =
      "The population mean μ is fixed. Each fresh sample creates a random interval. The observed fraction covering μ can differ from 95%; for non-normal data, small-sample Normal intervals may have poor coverage.";
  }
  $("#insight-title").textContent = title;
  $("#insight-body").textContent = body;
}
function coverage() {
  if (state.lab !== "coverage") return;
  const m = moments(POOLS[state.pool]),
    margin = (1.959963984540054 * m.sd) / Math.sqrt(state.n),
    ss = state.samples,
    shown = ss.slice(-40),
    lo = Math.min(m.mu - 2 * margin, ...shown.map((s) => s.value - margin)),
    hi = Math.max(m.mu + 2 * margin, ...shown.map((s) => s.value + margin));
  const x = (v) => 45 + ((v - lo) / (hi - lo)) * 500;
  const hit = ss.filter(
    (s) => s.value - margin <= m.mu && m.mu <= s.value + margin,
  ).length;
  let svg =
    '<svg viewBox="0 0 600 280" role="img" aria-label="Latest 40 confidence intervals. Green covers the fixed population mean; pink misses it.">';
  if (!state.hidden)
    svg += `<line x1="${x(m.mu)}" x2="${x(m.mu)}" y1="8" y2="250" stroke="#f4d18a"/><text x="${x(m.mu) + 5}" y="12" fill="#f4d18a" font-size="9">fixed μ</text>`;
  shown.forEach((s, i) => {
    const covers = s.value - margin <= m.mu && m.mu <= s.value + margin,
      c = state.hidden ? "#9dadc6" : covers ? "#a6f0cb" : "#f59cbb",
      y = 20 + i * 5.6;
    svg += `<line x1="${x(s.value - margin)}" x2="${x(s.value + margin)}" y1="${y}" y2="${y}" stroke="${c}" stroke-width="1.7"/><circle cx="${x(s.value)}" cy="${y}" r="2" fill="${c}"><title>Sample ${ss.length - shown.length + i + 1}: [${fmt(s.value - margin)}, ${fmt(s.value + margin)}]${state.hidden ? "" : covers ? ", covers μ" : ", misses μ"}</title></circle>`;
  });
  for (let i = 0; i < 6; i++) {
    const v = lo + ((hi - lo) * i) / 5;
    svg += `<text x="${x(v)}" y="270" text-anchor="middle" fill="#8fa1ba" font-size="9">${fmt(v, 1)}</text>`;
  }
  svg += "</svg>";
  $("#coverage-chart").innerHTML = svg;
  $("#coverage-result").textContent = ss.length
    ? state.hidden
      ? `${ss.length} random intervals; reveal truth to inspect coverage.`
      : `${hit} / ${ss.length} intervals cover the same fixed μ (${fmt((hit / ss.length) * 100, 1)}%). Showing latest ${shown.length}. Nominal level: 95%; non-normal approximation.`
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
  const ids = draw(POOLS[state.pool], state.n, state.rng),
    v = statistic(values(POOLS[state.pool], ids), state.kind);
  state.samples.push({ ids, value: v });
  state.selected = state.samples.length - 1;
}
function runBatch() {
  if (state.running) return;
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
    const count = Math.min(10, state.remaining);
    for (let i = 0; i < count; i++) addOne();
    state.remaining -= count;
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
  $("#draw").click();
  $(".sample-panel").scrollIntoView({
    block: "center",
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});
$("#draw").addEventListener("click", () => {
  if (state.samples.length >= 5000) return;
  addOne();
  selectedSample(true);
  update();
});
$("#replay").addEventListener("click", () => selectedSample(true));
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
  reset(
    "Population changed. Old results cleared. True parameters now belong to the new fixed model.",
  );
});
$("#estimator").addEventListener("change", (e) => {
  state.kind = e.target.value;
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
    $("#predict-feedback").textContent =
      "Prediction saved. Change n, run samples, then compare the theoretical SE.";
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
    $$("[data-lab]").forEach((x) => x.classList.toggle("active", x === b));
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
      coverage: [
        "Confidence intervals",
        "Random intervals. <em>One fixed truth.</em>",
        "变化的是区间，不是参数。Repeat the method. Inspect its coverage.",
        "S3 · CONFIDENCE INTERVALS",
      ],
    }[lab];
    const labNumber = { sampling: "01", clt: "02", coverage: "03" }[lab];
    if ($("#experiment-number"))
      $("#experiment-number").textContent = "EXPERIMENT " + labNumber;
    $(".intro-index>span").textContent = labNumber;
    $("#crumb").textContent = meta[0];
    $("#lab-title").innerHTML = meta[1];
    $("#lab-subtitle").textContent = meta[2];
    $("#unit-label").textContent = meta[3];
    $("#coverage-panel").classList.toggle("hidden", lab !== "coverage");
    if (lab !== "sampling") {
      state.kind = "mean";
      $("#estimator").value = "mean";
    }
    $("#estimator").disabled = lab !== "sampling";
    reset(
      "New lab. Fresh results with the same fixed population and reproducible seed.",
    );
  }),
);
let resizeFrame;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    chart();
    coverage();
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
  }),
};
population();
selectedSample();
update();
