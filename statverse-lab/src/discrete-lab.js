import { workedAnswersHidden } from "./visibility.js";
import { seededRandom } from "./statistics.js";
import {
  binomialDistribution,
  binomialTest,
  poissonPMF,
  poissonTails,
  poissonTest,
  binomialPower,
  poissonPower,
} from "./inference.js";
import { number, probability } from "./lab-ui.js";

export function createDiscreteLab(root) {
  const state = {
    model: "binomial",
    seed: "null-2026",
    rng: seededRandom("null-2026"),
    records: [],
    selected: -1,
    running: false,
    remaining: 0,
    token: 0,
    revealed: false,
    result: null,
    config: null,
    prediction: null,
    transfer: null,
  };
  root.innerHTML = `<section class="prediction"><div class="prediction-icon">?</div><div><span class="eyebrow">PREDICT → TAILS BEFORE DATA</span><p id="dis-predict-question"></p></div><div class="prediction-options"><button data-dis-predict="one">One tail</button><button data-dis-predict="both">Both tails</button></div><p id="dis-predict-feedback" role="status"></p></section>
  <section class="panel"><div class="section-heading"><div><span class="step-number">01</span><h2>Fix the null model <small>零假设模型</small></h2></div><span class="badge">S2 · EXACT DISCRETE TESTS</span></div><div class="inference-controls"><label>Random count model<select id="dis-model"><option value="binomial">Rare-card count · Binomial</option><option value="poisson">Signals per minute · Poisson</option></select></label><label id="dis-n-field">Trials n<input id="dis-n" type="number" min="1" max="200" step="1" value="20"></label><label><span id="dis-null-label">Null probability p₀</span><input id="dis-null" type="number" min="0" max="1" step="any" value="0.1"></label><label>Alternative<select id="dis-tail"><option value="greater">Upper · greater</option><option value="less">Lower · less</option><option value="two-sided">Two-sided · different</option></select></label><label>Nominal α<select id="dis-alpha"><option value="0.1">10%</option><option value="0.05" selected>5%</option><option value="0.01">1%</option></select></label><label>Observed count k<input id="dis-observed" type="number" min="0" max="20" step="1" value="5"></label></div><p id="dis-model-note" class="method-note"></p><p id="dis-hypotheses" class="mean-hypotheses"></p><button id="dis-reveal" class="primary">Reveal the critical region →</button><p id="dis-error" class="input-error" role="alert"></p></section>
  <div class="inference-workbench"><section class="panel"><div class="section-heading"><div><span class="step-number">02</span><h2>Where is k under H₀?</h2></div></div><div id="dis-null-chart" class="null-chart"></div><p class="method-note">Bars are exact null-model probabilities P(X=k), not simulated frequencies. A bar's height is a mass; the tail probability adds all bars in that tail.</p><p id="dis-tail-note" class="method-note"></p></section><section class="panel"><div class="section-heading"><div><span class="step-number">03</span><h2>Compare evidence with the rule</h2></div></div><div id="dis-output" class="answer-output hidden"><div class="result-metrics"><div><span>OBSERVED k</span><b id="dis-k"></b></div><div><span>NULL TAIL p · ENRICHMENT</span><b id="dis-p"></b></div><div><span>ACTUAL NULL REJECTION</span><b id="dis-size"></b></div></div><p id="dis-region" class="decision-box"></p><p id="dis-decision" class="method-note"></p><p id="dis-p-explanation" class="method-note"></p></div><p id="dis-before" class="method-note">Choose the direction before revealing. The null distribution stays fixed when only the observed k changes. A small null tail is evidence against H₀ under the stated model.</p></section></div>
  <section class="panel"><div class="section-heading"><div><span class="step-number">04</span><h2>Repeat the decision <small>重复拒绝率</small></h2></div><span class="badge">TYPE I / II / POWER · ENRICHMENT</span></div><p class="method-note">Generating truth below is separate from the fixed null. Repeated decisions test the same pre-chosen rule. Changing the truth or test setup clears the cohort; changing k only inspects an observation.</p><div class="inference-controls"><label><span id="dis-truth-label">Generating probability p</span><input id="dis-truth" type="number" min="0" max="1" step="any" value="0.1"></label><button id="dis-null-truth" class="text-button">Use null as truth</button><label>Seed<input id="dis-seed" value="null-2026" maxlength="64"></label><button id="dis-one" class="secondary">Simulate one experiment</button><button id="dis-run" class="secondary">Run +200 experiments</button><button id="dis-pause" class="secondary" disabled>Pause</button><button id="dis-reset" class="text-button">Reset & repeat</button></div><p id="dis-repeat-result" class="answer-output" role="status"></p><p id="dis-operating" class="answer-output method-note"></p><div id="dis-repeat-dots" class="decision-strip answer-output" aria-label="Latest100 experiment decisions"></div><div class="case-inspector"><label>Inspect saved experiment<input id="dis-case" type="number" min="1" step="1" value="1" disabled></label><p id="dis-case-detail"></p></div></section>
  <section class="transfer"><div><span class="eyebrow">TRANSFER</span><h3 id="dis-transfer-question">If p = 0.04, is there a4% probability that H₀ is true?</h3></div><div><button data-dis-answer="yes">Yes, it is P(H₀ true)</button><button data-dis-answer="no">No, it is a null tail probability</button><p id="dis-transfer-feedback" role="status"></p></div></section>`;
  const $ = (s) => root.querySelector(s),
    $$ = (s) => [...root.querySelectorAll(s)];
  root.dataset.view = "all";
  const focusBar = document.createElement("div");
  focusBar.className = "projection-select";
  focusBar.innerHTML =
    '<label>Projection focus<select id="dis-view"><option value="all">All panels</option><option value="model">Model and prediction</option><option value="result">Null distribution and decision</option><option value="repeat">Repeated decisions</option><option value="transfer">Transfer question</option></select></label>';
  root.prepend(focusBar);
  for (const [selector, stage] of [
    [".prediction", "model"],
    ["#dis-n", "model"],
    [".inference-workbench", "result"],
    ["#dis-truth", "repeat"],
    [".transfer", "transfer"],
  ]) {
    const el = $(selector),
      host = el.matches(".prediction,.inference-workbench,.transfer")
        ? el
        : el.closest("section.panel");
    host.dataset.projection = stage;
  }
  $("#dis-view").onchange = (e) => {
    root.dataset.view = e.target.value;
  };
  $("#dis-null-chart").insertAdjacentHTML(
    "beforebegin",
    '<p id="dis-chart-model" class="method-note"></p>',
  );
  $("#dis-output").insertAdjacentHTML(
    "beforebegin",
    '<button id="dis-reveal-result" class="secondary projection-reveal">Reveal comparison</button>',
  );
  $("#dis-reveal-result").onclick = () => {
    state.revealed = true;
    render();
  };
  function read(id) {
    const s = $(id).value.trim(),
      v = Number(s);
    if (!s || !Number.isFinite(v))
      throw new RangeError(
        "Enter a finite value in every active field; empty does not mean zero.",
      );
    return v;
  }
  function config() {
    const model = $("#dis-model").value,
      n = model === "binomial" ? read("#dis-n") : 1,
      nullValue = read("#dis-null"),
      truth = read("#dis-truth"),
      k = read("#dis-observed"),
      alpha = +$("#dis-alpha").value,
      alternative = $("#dis-tail").value;
    if (
      !Number.isSafeInteger(k) ||
      k < 0 ||
      k > (model === "binomial" ? 200 : 100000)
    )
      throw new RangeError(
        "Observed k must be a nonnegative integer within the supported display range.",
      );
    if (model === "binomial") {
      if (!Number.isSafeInteger(n) || n < 1 || n > 200)
        throw new RangeError("Use integer n from1 to200.");
      if (k > n) throw new RangeError("A Binomial count cannot exceed n.");
      if ([nullValue, truth].some((p) => p < 0 || p > 1))
        throw new RangeError("Both probabilities must be from0 to1.");
    } else if ([nullValue, truth].some((l) => l < 0 || l > 30))
      throw new RangeError("Use rates from0 to30 per minute in this display.");
    return { model, n, nullValue, truth, k, alpha, alternative };
  }
  function test(c, k = c.k) {
    return c.model === "binomial"
      ? binomialTest({
          k,
          n: c.n,
          p: c.nullValue,
          alpha: c.alpha,
          alternative: c.alternative,
        })
      : poissonTest({
          k,
          lambda: c.nullValue,
          alpha: c.alpha,
          alternative: c.alternative,
        });
  }
  function pause() {
    state.running = false;
    state.token++;
    $("#dis-pause").disabled = true;
  }
  function clear(message = "Setup changed. Incompatible experiments cleared.") {
    pause();
    state.remaining = 0;
    state.records = [];
    state.selected = -1;
    state.rng = seededRandom(state.seed);
    $("#dis-case-detail").textContent = message;
  }
  function chart(c, r) {
    const host = $("#dis-null-chart"),
      hidden = workedAnswersHidden(),
      show = state.revealed && !hidden,
      w = Math.max(280, host.clientWidth),
      L = document.body.classList.contains("teacher") ? 58 : 42,
      R = w - 14,
      T = 28,
      B = 220,
      h = 262;
    const max =
        c.model === "binomial"
          ? c.n
          : Math.min(
              100,
              Math.max(
                c.k,
                Math.ceil(c.nullValue + 6 * Math.sqrt(c.nullValue) + 8),
              ),
            ),
      d =
        c.model === "binomial" ? binomialDistribution(c.n, c.nullValue) : null,
      ps = Array.from({ length: max + 1 }, (_, k) =>
        d ? d.pmf(k) : poissonPMF(k, c.nullValue),
      ),
      peak = Math.min(1, Math.max(0.01, ...ps) * 1.12),
      bw = (R - L) / (max + 1),
      X = (k) => L + (k + 0.5) * bw,
      Y = (p) => B - (p / peak) * (B - T);
    let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Exact ${c.model} null probability masses; count on horizontal axis and probability per count on vertical axis."><text x="${L}" y="13" fill="#a9bbd1" font-size="11">H₀ · PROBABILITY MASS P(X=k)</text>`;
    for (let i = 0; i <= 3; i++) {
      const p = (peak * i) / 3;
      s += `<line x1="${L}" x2="${R}" y1="${Y(p)}" y2="${Y(p)}" stroke="#293c50" stroke-dasharray="2 4"/><text x="${L - 5}" y="${Y(p) + 3}" text-anchor="end" fill="#a9bbd1" font-size="10">${number(100 * p, 1)}%</text>`;
    }
    const region = r.criticalRegion,
      step = Math.max(1, Math.ceil((max + 1) / 9));
    for (let k = 0; k <= max; k++) {
      const critical =
          (region.lower && k <= region.lower.max) ||
          (region.upper && k >= region.upper.min),
        obs = show && k === c.k;
      s += `<rect class="dis-mass" data-k="${k}" data-probability="${ps[k]}" ${show && critical ? 'data-critical="true"' : ""} x="${L + k * bw + Math.min(1, bw * 0.1)}" y="${Y(ps[k])}" width="${Math.max(0.5, bw - Math.min(2, bw * 0.2))}" height="${B - Y(ps[k])}" fill="${show && critical ? "#f2a1bc" : "#83cdb4"}" fill-opacity="${obs ? 1 : 0.65}"><title>k=${k}; null mass=${ps[k]}${show && critical ? "; critical region" : ""}</title></rect>`;
      if (k % step === 0)
        s += `<text x="${X(k)}" y="${B + 17}" text-anchor="middle" fill="#a9bbd1" font-size="10">${k}</text>`;
    }
    if (show)
      s += `<line data-observed-k x1="${X(Math.min(max, c.k))}" x2="${X(Math.min(max, c.k))}" y1="${T}" y2="${B}" stroke="#f6d18b" stroke-width="2" stroke-dasharray="3 3"/><text x="${Math.min(R - 35, Math.max(L + 4, X(Math.min(max, c.k)) + 4))}" y="${T + 13}" fill="#f6d18b" font-size="11">observed ${c.k}${c.k > max ? " → outside window" : ""}</text>`;
    s += `<text x="${(L + R) / 2}" y="${h - 7}" text-anchor="middle" fill="#b2c3d7" font-size="11">k · ${c.model === "binomial" ? "rare cards per n draws" : "signals per minute"}</text></svg>`;
    host.innerHTML = s;
    const omitted =
      c.model === "poisson" ? poissonTails(max + 1, c.nullValue) : null;
    $("#dis-tail-note").textContent =
      c.model === "poisson"
        ? `Visible counts0–${max}; null probability beyond the window = ${probability(omitted.upper, omitted.logUpper)}. This omitted tail is still included in all test calculations.`
        : "The full Binomial support0–n is plotted. Pink masses, when revealed, form the inclusive critical region.";
  }
  function repeatView(c, r) {
    const hidden = workedAnswersHidden(),
      R = state.records.length,
      rejected = state.records.filter((x) => x.reject).length;
    $("#dis-repeat-result").textContent = hidden
      ? `R=${R}. Decision summaries concealed.`
      : `R=${R}; reject ${rejected}/${R}${R ? ` = ${number((100 * rejected) / R, 1)}%` : ""}. ${R >= 2000 ? "Capacity2000 reached; reset to repeat." : "Finite simulation can fluctuate around the theoretical rejection probability."}`;
    const op =
        c.model === "binomial"
          ? binomialPower({
              n: c.n,
              p0: c.nullValue,
              p1: c.truth,
              alpha: c.alpha,
              alternative: c.alternative,
            })
          : poissonPower({
              lambda0: c.nullValue,
              lambda1: c.truth,
              alpha: c.alpha,
              alternative: c.alternative,
            }),
      same = c.truth === c.nullValue,
      withinAlternative =
        c.alternative === "two-sided"
          ? !same
          : c.alternative === "greater"
            ? c.truth > c.nullValue
            : c.truth < c.nullValue;
    $("#dis-operating").textContent = hidden
      ? "Operating characteristics concealed."
      : same
        ? `H₀ is the generating truth. Actual Type I probability = ${probability(op.typeI)}; nominal α = ${c.alpha}. Discrete boundaries can make actual size smaller than α. No alternative truth is specified, so a Type II label is not used.`
        : withinAlternative
          ? `Generating truth ${c.truth} is in the chosen H₁ direction. Under this specific truth: rejection probability (power) = ${probability(op.power)}; Type II probability β = ${op.typeII === 0 ? "0 at displayed precision (computed as1−power)" : probability(op.typeII)}. These describe repeated decisions, not P(H₀|data).`
          : `Generating truth ${c.truth} is outside the chosen H₁ direction. The fixed rule still has rejection probability ${probability(op.power)} there. No Type II β interpretation for this H₁ is assigned; do not change the direction after looking at results.`;
    $("#dis-repeat-dots").innerHTML = hidden
      ? ""
      : state.records
          .slice(-100)
          .map(
            (x, i) =>
              `<span class="decision-dot ${x.reject ? "reject" : "retain"}" title="Experiment ${Math.max(0, R - 100) + i + 1}: k=${x.k}; ${x.reject ? "reject" : "do not reject"}"><span class="sr-only">${x.reject ? "Reject" : "Do not reject"}</span></span>`,
          )
          .join("");
    $("#dis-case").disabled = !R;
    $("#dis-case").max = R || 1;
    $("#dis-case").value = state.selected >= 0 ? state.selected + 1 : 1;
    if (state.selected >= 0) {
      const x = state.records[state.selected];
      $("#dis-case-detail").textContent =
        `Experiment#${state.selected + 1}: ${c.model === "binomial" ? `${x.k} successes in ${c.n} independent trials; outcomes ${x.outcomes.map((v) => (v ? "1" : "0")).join(" ")}.` : `${x.k} signals in one minute.`} ${hidden ? "Worked decision concealed." : x.reject ? "In the fixed critical region: reject H₀." : "Outside the fixed critical region: do not reject H₀."}`;
    }
    $("#dis-one").disabled = state.running || R >= 2000;
    $("#dis-run").disabled = state.running || R >= 2000;
    $("#dis-run").textContent =
      state.remaining && !state.running
        ? `Continue ${state.remaining}`
        : "Run +200 experiments";
    $("#dis-pause").disabled = !state.running;
  }
  function render() {
    state.model = $("#dis-model").value;
    const poisson = state.model === "poisson";
    $("#dis-n-field").classList.toggle("hidden", poisson);
    $("#dis-null-label").textContent = poisson
      ? "Null rate λ₀ per minute"
      : "Null probability p₀";
    $("#dis-truth-label").textContent = poisson
      ? "Generating rate λ per minute"
      : "Generating probability p";
    for (const id of ["#dis-null", "#dis-truth"]) $(id).max = poisson ? 30 : 1;
    $("#dis-observed").max = poisson ? 100000 : $("#dis-n").value;
    const alt = $("#dis-tail").value;
    $("#dis-predict-question").textContent =
      `For H₁: ${poisson ? "λ" : "p"} ${alt === "greater" ? ">" : alt === "less" ? "<" : "≠"} ${poisson ? "λ₀" : "p₀"}, should evidence come from one tail or both?`;
    $("#dis-predict-feedback").textContent = state.prediction
      ? workedAnswersHidden()
        ? "Choice recorded; explanation concealed."
        : state.prediction === (alt === "two-sided" ? "both" : "one")
          ? "Yes. Choose direction from the scientific question before inspecting the observed count."
          : "Read the alternative: ≠ allows either direction; < or > specifies one direction."
      : "";
    $("#dis-transfer-feedback").textContent = state.transfer
      ? workedAnswersHidden()
        ? "Choice recorded; explanation concealed."
        : state.transfer === "no"
          ? "Correct: p describes the chosen tail under H₀. It is not a probability assigned to H₀. Failure to reject is insufficient evidence, not proof."
          : "H₀ is a model used to calculate the tail. Re-read the conditioning: P(data this extreme | H₀)."
      : "";
    try {
      const c = config(),
        r = test(c);
      state.config = c;
      state.result = r;
      $("#dis-error").textContent = "";
      $("#dis-model-note").textContent = poisson
        ? "X counts events in one minute under a constant-rate Poisson model: independent increments and an appropriate event process. Rates belong to the population model, not to a fitted observed count."
        : "X counts rare cards in n iid draws with replacement. Each draw is success/failure with fixed probability p. This separate fictional event experiment does not alter the Aurora card pool.";
      $("#dis-hypotheses").textContent =
        `H₀: ${poisson ? "λ" : "p"} = ${c.nullValue}. H₁: ${poisson ? "λ" : "p"} ${alt === "greater" ? ">" : alt === "less" ? "<" : "≠"} ${c.nullValue}. Under H₀, X ~ ${poisson ? `Poisson(${c.nullValue})` : `Bin(${c.n},${c.nullValue})`}.`;
      $("#dis-chart-model").textContent =
        $("#dis-hypotheses").textContent + ` Nominal α=${c.alpha}.`;
      chart(c, r);
      $("#dis-reveal").disabled = false;
      $("#dis-output").classList.toggle("hidden", !state.revealed);
      $("#dis-before").classList.toggle("hidden", state.revealed);
      $("#dis-k").textContent = c.k;
      const logP =
        alt === "greater"
          ? r.tails.logUpper
          : alt === "less"
            ? r.tails.logLower
            : Math.min(
                0,
                Math.LN2 + Math.min(r.tails.logLower, r.tails.logUpper),
              );
      $("#dis-p").textContent = probability(r.pValue, logP);
      $("#dis-size").textContent =
        `${number(100 * r.criticalRegion.actualSize, 4)}%`;
      const q = r.criticalRegion,
        parts = [];
      if (q.lower) parts.push(`X ≤ ${q.lower.max}`);
      if (q.upper) parts.push(`X ≥ ${q.upper.min}`);
      $("#dis-region").textContent =
        `Critical region: ${parts.join(" or ") || "empty at this allocation"}. Nominal α=${c.alpha}; actual null size=${probability(q.actualSize)} ≤ α. ${c.alternative === "two-sided" ? "Each tail gets α/2; unused probability is not transferred." : "Inclusive integer boundary."}`;
      $("#dis-decision").textContent = r.reject
        ? "Observed k is in the critical region. Reject H₀: evidence in the pre-chosen direction under the stated model."
        : "Observed k is outside the critical region. Do not reject H₀: insufficient evidence; the null is not proved.";
      $("#dis-p-explanation").textContent =
        `${alt === "two-sided" ? `Declared two-sided convention: min(1,2×min[P(X≤k),P(X≥k)]).` : `${alt === "greater" ? "P(X≥k), including observed k" : "P(X≤k), including observed k"}.`} Lower inclusive tail=${probability(r.tails.lower, r.tails.logLower)}; upper inclusive tail=${probability(r.tails.upper, r.tails.logUpper)}. p is not P(H₀ true).`;
      if (
        (c.nullValue === 0 && c.k > 0) ||
        (c.model === "binomial" && c.nullValue === 1 && c.k < c.n)
      )
        $("#dis-p-explanation").textContent +=
          " This observation is impossible under the degenerate null. An oppositely directed inclusive-tail test may still return p=1; that is not evidence that the model can produce this observation. Check the model support separately.";
      repeatView(c, r);
    } catch (e) {
      pause();
      state.config = null;
      state.result = null;
      $("#dis-error").textContent = e.message;
      $("#dis-null-chart").innerHTML = "";
      $("#dis-output").classList.add("hidden");
      $("#dis-reveal").disabled = true;
      $("#dis-one").disabled = true;
      $("#dis-run").disabled = true;
      $("#dis-operating").textContent =
        "No valid model: correct the inputs before interpreting results.";
      $("#dis-repeat-dots").innerHTML = "";
    }
  }
  function add() {
    if (!state.config || state.records.length >= 2000) return false;
    const c = state.config;
    let k = 0,
      outcomes = null;
    if (c.model === "binomial") {
      outcomes = Array.from({ length: c.n }, () => state.rng() < c.truth);
      k = outcomes.filter(Boolean).length;
    } else if (c.truth > 0) {
      let product = 1,
        limit = Math.exp(-c.truth),
        j = 0;
      do {
        j++;
        product *= state.rng();
      } while (product > limit);
      k = j - 1;
    }
    const q = state.result.criticalRegion,
      reject = Boolean(
        (q.lower && k <= q.lower.max) || (q.upper && k >= q.upper.min),
      );
    state.records.push({ k, reject, outcomes });
    state.selected = state.records.length - 1;
    $("#dis-observed").value = k;
    state.config = { ...c, k };
    return true;
  }
  function run() {
    if (state.running || !state.result) return;
    state.remaining = Math.min(
      state.remaining || 200,
      2000 - state.records.length,
    );
    if (!state.remaining) return;
    state.running = true;
    const token = ++state.token;
    function tick() {
      if (token !== state.token || !state.running) return;
      const n = Math.min(10, state.remaining, 2000 - state.records.length);
      for (let i = 0; i < n; i++) add();
      state.remaining = Math.min(
        state.remaining - n,
        2000 - state.records.length,
      );
      if (!state.remaining) state.running = false;
      render();
      if (state.running) requestAnimationFrame(tick);
    }
    render();
    requestAnimationFrame(tick);
  }
  for (const id of [
    "#dis-n",
    "#dis-null",
    "#dis-tail",
    "#dis-alpha",
    "#dis-truth",
  ])
    $(id).addEventListener("change", () => {
      clear();
      state.revealed = false;
      state.prediction = null;
      render();
    });
  $("#dis-observed").onchange = () => {
    state.selected = -1;
    $("#dis-case-detail").textContent =
      "Manual observed count; no original simulated experiment is selected.";
    render();
  };
  $("#dis-model").onchange = () => {
    const p = $("#dis-model").value === "poisson";
    $("#dis-null").value = p ? 4 : 0.1;
    $("#dis-truth").value = p ? 4 : 0.1;
    $("#dis-observed").value = p ? 8 : 5;
    clear();
    state.revealed = false;
    state.prediction = null;
    render();
  };
  $("#dis-null-truth").onclick = () => {
    $("#dis-truth").value = $("#dis-null").value;
    clear();
    render();
  };
  $("#dis-seed").onchange = () => {
    state.seed = $("#dis-seed").value || "null-2026";
    $("#dis-seed").value = state.seed;
    clear("Seed reset. The null and truth are unchanged.");
    render();
  };
  $("#dis-one").onclick = () => {
    pause();
    if (add()) {
      state.remaining = Math.min(state.remaining, 2000 - state.records.length);
      render();
    }
  };
  $("#dis-run").onclick = run;
  $("#dis-pause").onclick = () => {
    pause();
    render();
  };
  $("#dis-reset").onclick = () => {
    clear("Same seed and model restored. No simulated decisions retained.");
    render();
  };
  $("#dis-reveal").onclick = () => {
    state.revealed = true;
    render();
  };
  $("#dis-case").onchange = () => {
    const i = Number($("#dis-case").value) - 1;
    if (Number.isInteger(i) && i >= 0 && i < state.records.length) {
      state.selected = i;
      $("#dis-observed").value = state.records[i].k;
      render();
    }
  };
  $$("[data-dis-predict]").forEach(
    (b) =>
      (b.onclick = () => {
        state.prediction = b.dataset.disPredict;
        render();
      }),
  );
  $$("[data-dis-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        state.transfer = b.dataset.disAnswer;
        render();
      }),
  );
  render();
  return {
    render,
    pause,
    getSnapshot: () => ({
      ...state,
      rng: undefined,
      records: state.records.map((x) => ({
        ...x,
        outcomes: x.outcomes ? [...x.outcomes] : null,
      })),
    }),
  };
}
