import { workedAnswersHidden } from "./visibility.js";
import {
  zTestOneMean,
  zTestTwoMeans,
  normalInverseCDF,
  normalTails,
} from "./inference.js";
import { seededRandom } from "./statistics.js";
import { number, probability, normalReferenceSVG } from "./lab-ui.js";
export function createMeanLab(root) {
  const state = {
    two: false,
    model: "normal-known",
    alternative: "two-sided",
    alpha: 0.05,
    seed: "mean-2026",
    rng: seededRandom("mean-2026"),
    records: [],
    running: false,
    remaining: 0,
    token: 0,
    result: null,
    revealed: false,
  };
  root.innerHTML = `<section class="prediction"><div class="prediction-icon">?</div><div><span class="eyebrow">PREDICT → CHOOSE THE ALTERNATIVE</span><p id="mean-predict-question">For H₁: μ ≠ μ₀, should unusual values in one tail or both tails count against H₀?</p></div><div class="prediction-options"><button data-mean-predict="one">One tail</button><button data-mean-predict="both">Both tails</button></div><p id="mean-predict-feedback" role="status"></p></section>
 <section class="panel inference-setup"><div class="section-heading"><div><span class="step-number">01</span><h2>State the model before testing <small>均值推断</small></h2></div><span class="badge">S3 · NORMAL z / LARGE-SAMPLE APPROXIMATION</span></div><div class="inference-controls"><label>Design<select id="mean-design"><option value="one">One population mean</option><option value="two">Two independent means</option></select></label><label>Variance knowledge & model<select id="mean-model"><option value="normal-known">Normal population · known σ</option><option value="clt-known">Non-normal population · known σ · CLT</option><option value="large-estimated">Unknown σ · estimated s · large sample</option></select></label><label>Alternative<select id="mean-tail"><option value="two-sided">Two-sided · ≠</option><option value="less">Lower · &lt;</option><option value="greater">Upper · &gt;</option></select></label><label>Nominal α<select id="mean-alpha"><option value="0.1">10%</option><option value="0.05" selected>5%</option><option value="0.01">1%</option></select></label></div><p id="mean-assumptions" class="method-note"></p><label id="mean-large-confirm" class="model-confirm hidden"><input id="mean-large" type="checkbox"> I have assessed the large-sample approximation for this population; no universal n = 30 guarantee is assumed.</label><label class="model-confirm"><input id="mean-independent" type="checkbox" checked> Observations are independent; the two-sample design, if selected, also uses independent samples.</label></section>
 <div class="inference-workbench"><section class="panel"><div class="section-heading"><div><span class="step-number">02</span><h2>Enter synthetic sample summaries</h2></div></div><p class="method-note">This is a separate summary-data experiment, independent of the card-history controls. SD inputs are squared before entering the variance-based engine.</p><div class="summary-grid"><label>Sample mean x̄<input id="mean-x" type="number" step="any" value="496"></label><label id="mean-sx-label">Known σₓ<input id="mean-sx" type="number" step="any" min="0" value="10"></label><label>Sample size nₓ<input id="mean-nx" type="number" min="1" step="1" value="25"></label><label id="mean-y-field" class="hidden">Sample mean ȳ<input id="mean-y" type="number" step="any" value="97"></label><label id="mean-sy-label" class="hidden">Known σᵧ<input id="mean-sy" type="number" min="0" step="any" value="8"></label><label id="mean-ny-field" class="hidden">Sample size nᵧ<input id="mean-ny" type="number" min="1" step="1" value="16"></label><label><span id="mean-null-label">H₀ mean μ₀</span><input id="mean-null" type="number" step="any" value="500"></label></div><div class="mean-hypotheses" id="mean-hypotheses"></div><button id="mean-reveal" class="primary">Reveal the null comparison →</button><p id="mean-error" class="input-error" role="alert"></p></section>
 <section class="panel mean-result-panel"><div class="section-heading"><div><span class="step-number">03</span><h2>Locate the observed statistic under H₀</h2></div><span id="mean-method-badge" class="badge"></span></div><div id="mean-null-chart" class="null-chart"></div><div id="mean-output" class="answer-output"><div class="result-metrics"><div><span>STANDARD ERROR</span><b id="mean-se"></b></div><div><span>OBSERVED z</span><b id="mean-z"></b></div><div><span>p-VALUE · ENRICHMENT</span><b id="mean-p"></b></div></div><p id="mean-decision" class="decision-box"></p><p id="mean-ci" class="method-note"></p></div><p id="mean-unrevealed" class="method-note">Reveal to locate the observed z, calculated relative to H₀, and compare it with the critical tails for the chosen α.</p></section></div>
 <section class="panel reference-repeat"><div class="section-heading"><div><span class="step-number">04</span><h2>Repeat the reference experiment</h2></div><span class="badge">REJECTION RATES · ENRICHMENT</span></div><p id="mean-repeat-method" class="method-note">These draws are synthetic sample means from the stated Normal model. The hypothesis remains fixed; the observed means and decisions vary.</p><div class="inference-controls"><label>Generating μₓ<input id="mean-truth-x" type="number" step="any" value="500"></label><label id="mean-truth-y-field" class="hidden">Generating μᵧ<input id="mean-truth-y" type="number" step="any" value="100"></label><label>Seed<input id="mean-seed" value="mean-2026" maxlength="64"></label><button id="mean-one" class="secondary">Draw one new summary</button><button id="mean-run" class="secondary">Run +200</button><button id="mean-pause" class="secondary" disabled>Pause</button><button id="mean-reset" class="text-button">↻ Reset repetitions</button></div><p id="mean-repeat-result" class="answer-output" role="status">R = 0. No reference experiments recorded.</p><div id="mean-repeat-dots" class="decision-strip answer-output" role="group" aria-label="Latest reference-test decisions"></div></section>
 <section class="transfer"><div><span class="eyebrow">TRANSFER</span><h3>Does failing to reject H₀ prove the population mean equals the null value?</h3></div><div><button data-mean-answer="yes">Yes, equality is proved</button><button data-mean-answer="no">No, evidence is insufficient</button><p id="mean-transfer-feedback" role="status"></p></div></section>`;
  const $ = (s) => root.querySelector(s),
    $$ = (s) => [...root.querySelectorAll(s)];
  const read = (id) => {
    const el = $(id),
      v = Number(el.value);
    if (el.value.trim() === "" || !Number.isFinite(v))
      throw new RangeError(
        "Enter finite numerical summaries; empty fields are not zero.",
      );
    return v;
  };
  function pause() {
    state.running = false;
    state.token++;
    executionControls();
  }
  function executionControls() {
    const blocked = !state.result || state.records.length >= 2000;
    $("#mean-pause").disabled = !state.running;
    $("#mean-one").disabled = state.running || blocked;
    $("#mean-run").disabled = state.running || blocked;
    $("#mean-run").textContent =
      state.remaining && !state.running
        ? `Continue ${Math.min(state.remaining, 2000 - state.records.length)}`
        : "Run +200";
  }
  function clear() {
    pause();
    state.remaining = 0;
    state.records = [];
    state.rng = seededRandom(state.seed);
    $("#mean-repeat-result").textContent =
      "R = 0. Setup changed; incompatible reference decisions were cleared.";
    $("#mean-repeat-dots").innerHTML = "";
  }
  function config() {
    if (!$("#mean-independent").checked)
      throw new RangeError(
        "The independent-sample z model does not apply to the paired/dependent design selected here.",
      );
    const approximate = state.model !== "normal-known";
    if (approximate && !$("#mean-large").checked)
      throw new RangeError(
        "Assess and confirm the large-sample approximation before using this Normal reference.",
      );
    const x = read("#mean-x"),
      sx = read("#mean-sx"),
      nx = read("#mean-nx"),
      nullValue = read("#mean-null");
    if (sx <= 0 || !Number.isSafeInteger(nx) || nx < 1 || nx > 1e6)
      throw new RangeError(
        "Use a positive SD and an integer sample size from 1 to 1,000,000.",
      );
    const varianceType =
        state.model === "large-estimated" ? "estimated" : "known",
      base = {
        varianceType,
        largeSample: approximate,
        alpha: state.alpha,
        alternative: state.alternative,
        confidenceLevel: 1 - state.alpha,
      };
    if (state.two) {
      const y = read("#mean-y"),
        sy = read("#mean-sy"),
        ny = read("#mean-ny");
      if (sy <= 0 || !Number.isSafeInteger(ny) || ny < 1 || ny > 1e6)
        throw new RangeError(
          "The second sample also needs a positive SD and valid integer n.",
        );
      return {
        ...base,
        meanX: x,
        meanY: y,
        varianceX: sx * sx,
        varianceY: sy * sy,
        nX: nx,
        nY: ny,
        nullDifference: nullValue,
      };
    }
    return { ...base, mean: x, variance: sx * sx, n: nx, nullMean: nullValue };
  }
  function calculate(c) {
    return state.two ? zTestTwoMeans(c) : zTestOneMean(c);
  }
  function render() {
    state.two = $("#mean-design").value === "two";
    state.model = $("#mean-model").value;
    state.alternative = $("#mean-tail").value;
    state.alpha = +$("#mean-alpha").value;
    for (const id of [
      "#mean-y-field",
      "#mean-sy-label",
      "#mean-ny-field",
      "#mean-truth-y-field",
    ])
      $(id).classList.toggle("hidden", !state.two);
    const estimated = state.model === "large-estimated";
    $("#mean-sx-label").firstChild.textContent = estimated
      ? "Estimated sₓ (s² uses n−1)"
      : "Known population σₓ";
    $("#mean-sy-label").firstChild.textContent = estimated
      ? "Estimated sᵧ (s² uses n−1)"
      : "Known population σᵧ";
    $("#mean-null-label").textContent = state.two
      ? "H₀ difference Δ₀ = μₓ − μᵧ"
      : "H₀ mean μ₀";
    $("#mean-large-confirm").classList.toggle(
      "hidden",
      state.model === "normal-known",
    );
    $("#mean-assumptions").textContent =
      state.model === "normal-known"
        ? "Exact z reference under the declared independent Normal-population model with known variances. Two means use SE = √(σₓ²/nₓ + σᵧ²/nᵧ); variances add."
        : estimated
          ? "Large-sample Normal approximation using s² with divisor n−1. The SDs are estimates, not known population parameters. Small-sample t methods are outside this S3 route."
          : "CLT Normal approximation for independent observations with finite variance. Population shape and tails matter; the simulation cannot certify that n is large enough.";
    $("#mean-predict-question").textContent =
      `For H₁: ${state.two ? "μₓ − μᵧ" : "μ"} ${state.alternative === "less" ? "<" : state.alternative === "greater" ? ">" : "≠"} the null value, should evidence come from one tail or both?`;
    try {
      const c = config(),
        r = calculate(c);
      state.result = r;
      $("#mean-error").textContent = "";
      $("#mean-null-chart").classList.remove("hidden");
      $("#mean-reveal").disabled = false;
      executionControls();
      $("#mean-method-badge").textContent = r.approximate
        ? "NORMAL APPROXIMATION"
        : "NORMAL MODEL · KNOWN σ";
      const critical = normalInverseCDF(
          1 -
            (state.alternative === "two-sided" ? state.alpha / 2 : state.alpha),
        ),
        lower = state.alternative === "greater" ? null : -critical,
        upper = state.alternative === "less" ? null : critical;
      $("#mean-null-chart").innerHTML = normalReferenceSVG(
        $("#mean-null-chart"),
        {
          z: r.z,
          lower,
          upper,
          revealed: state.revealed,
          approximate: r.approximate,
        },
      );
      $("#mean-hypotheses").textContent =
        `H₀: ${state.two ? "μₓ − μᵧ" : "μ"} = ${number(r.nullValue)}. H₁: ${state.two ? "μₓ − μᵧ" : "μ"} ${state.alternative === "less" ? "<" : state.alternative === "greater" ? ">" : "≠"} ${number(r.nullValue)}.`;
      $("#mean-output").classList.toggle("hidden", !state.revealed);
      $("#mean-unrevealed").classList.toggle("hidden", state.revealed);
      $("#mean-se").textContent = number(r.standardError);
      $("#mean-z").textContent = number(r.z);
      const tails = normalTails(r.z),
        logP =
          state.alternative === "greater"
            ? tails.logUpper
            : state.alternative === "less"
              ? tails.logLower
              : Math.min(
                  0,
                  Math.LN2 + Math.min(tails.logLower, tails.logUpper),
                );
      $("#mean-p").textContent =
        r.pValue === 0 && !Number.isFinite(logP)
          ? "positive; below machine range"
          : probability(r.pValue, logP);
      $("#mean-decision").textContent =
        `${r.approximate ? "Approximate inference. " : ""}${r.reject ? "Reject H₀: evidence in the chosen direction under the stated model." : "Do not reject H₀: insufficient evidence in the chosen direction; equality is not proved."} α = ${state.alpha}. The p-value is a null-model tail probability, not P(H₀ is true).`;
      $("#mean-ci").textContent =
        state.alternative === "two-sided"
          ? `${(1 - state.alpha) * 100}% two-sided CI for ${state.two ? "μₓ − μᵧ" : "μ"}: [${number(r.confidenceInterval.lower)}, ${number(r.confidenceInterval.upper)}]. The parameter is fixed; the interval method is random before sampling.`
          : "This test is one-sided. A two-sided interval is not its matching confidence bound, so no interval duality is displayed here.";
      $("#mean-repeat-method").textContent = r.approximate
        ? "Reference demonstration: synthetic Normal sample means with the displayed plug-in SE held fixed. This illustrates the approximation; it does not simulate the extra variability of an estimated SD or verify CLT adequacy."
        : "Synthetic sample means drawn from the declared independent Normal populations, with known σ. The null remains fixed while each observed summary varies.";
    } catch (e) {
      state.result = null;
      $("#mean-error").textContent = e.message;
      $("#mean-null-chart").classList.add("hidden");
      $("#mean-output").classList.add("hidden");
      $("#mean-unrevealed").classList.add("hidden");
      $("#mean-reveal").disabled = true;
      $("#mean-one").disabled = true;
      $("#mean-run").disabled = true;
    }
    repeats();
  }
  function normal() {
    const u = 1 - state.rng(),
      v = state.rng();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  function add() {
    if (state.records.length >= 2000) return false;
    const c = config(),
      truthX = read("#mean-truth-x"),
      truthY = state.two ? read("#mean-truth-y") : 0;
    const x =
        truthX +
        Math.sqrt(state.two ? c.varianceX / c.nX : c.variance / c.n) * normal(),
      y = state.two ? truthY + Math.sqrt(c.varianceY / c.nY) * normal() : 0;
    if (state.two) {
      c.meanX = x;
      c.meanY = y;
    } else c.mean = x;
    const r = calculate(c);
    state.records.push({ x, y, z: r.z, reject: r.reject });
    $("#mean-x").value = x;
    if (state.two) $("#mean-y").value = y;
    return true;
  }
  function repeats() {
    const R = state.records.length,
      rejects = state.records.filter((r) => r.reject).length;
    $("#mean-repeat-result").textContent = workedAnswersHidden()
      ? `R = ${R}; worked rejection summaries hidden.`
      : R
        ? `R = ${R}; rejected ${rejects}/${R} (${number((100 * rejects) / R, 1)}%). α is the model's rejection probability when H₀ is true, not a forced finite-simulation percentage. Latest observed summaries are shown above.`
        : "R = 0. No reference experiments recorded.";
    $("#mean-repeat-dots").innerHTML = workedAnswersHidden()
      ? ""
      : state.records
          .slice(-100)
          .map(
            (r, i) =>
              `<span class="decision-dot ${r.reject ? "reject" : "retain"}" title="Reference experiment ${Math.max(0, R - 100) + i + 1}: z=${number(r.z)}, ${r.reject ? "reject" : "do not reject"}"><span class="sr-only">${r.reject ? "Reject" : "Do not reject"}</span></span>`,
          )
          .join("");
  }
  function batch() {
    if (state.running || !state.result) return;
    state.remaining = Math.min(
      state.remaining || 200,
      2000 - state.records.length,
    );
    if (!state.remaining) return;
    state.running = true;
    const token = ++state.token;
    executionControls();
    function tick() {
      if (token !== state.token || !state.running) return;
      try {
        const n = Math.min(10, state.remaining, 2000 - state.records.length);
        for (let i = 0; i < n; i++) add();
        state.remaining = Math.min(
          state.remaining - n,
          2000 - state.records.length,
        );
        render();
        repeats();
        if (state.remaining) requestAnimationFrame(tick);
        else {
          state.running = false;
          render();
          $("#mean-pause").disabled = true;
        }
      } catch (e) {
        pause();
        $("#mean-error").textContent = e.message;
      }
    }
    requestAnimationFrame(tick);
  }
  for (const id of [
    "#mean-model",
    "#mean-tail",
    "#mean-alpha",
    "#mean-independent",
    "#mean-large",
    "#mean-sx",
    "#mean-nx",
    "#mean-sy",
    "#mean-ny",
    "#mean-null",
    "#mean-truth-x",
    "#mean-truth-y",
  ])
    $(id).addEventListener("change", () => {
      clear();
      state.revealed = false;
      $("#mean-predict-feedback").textContent = "";
      $$("[data-mean-predict]").forEach((b) => b.classList.remove("selected"));
      render();
    });
  $("#mean-design").onchange = () => {
    state.two = $("#mean-design").value === "two";
    $("#mean-x").value = state.two ? 100 : 496;
    $("#mean-y").value = 97;
    $("#mean-null").value = state.two ? 0 : 500;
    $("#mean-truth-x").value = state.two ? 100 : 500;
    $("#mean-truth-y").value = 100;
    clear();
    state.revealed = false;
    render();
  };
  for (const id of ["#mean-x", "#mean-y"])
    $(id).addEventListener("change", () => render());
  $("#mean-reveal").onclick = () => {
    state.revealed = true;
    render();
    const pred = $$("[data-mean-predict]").find((b) =>
      b.classList.contains("selected"),
    )?.dataset.meanPredict;
    $("#mean-predict-feedback").textContent = workedAnswersHidden()
      ? "Prediction recorded. Worked comparison hidden."
      : pred
        ? `${pred === (state.alternative === "two-sided" ? "both" : "one") ? "Your tail prediction matches H₁." : "Read the direction in H₁, then compare the shaded critical tail(s)."} The observed statistic was located using H₀, not a fitted alternative.`
        : "Compare the critical tails with the chosen direction in H₁.";
  };
  $$("[data-mean-predict]").forEach(
    (b) =>
      (b.onclick = () => {
        $$("[data-mean-predict]").forEach((x) =>
          x.classList.toggle("selected", x === b),
        );
        $("#mean-predict-feedback").textContent =
          "Prediction saved. Reveal to compare with the chosen alternative.";
      }),
  );
  $("#mean-one").onclick = () => {
    try {
      pause();
      if (add()) {
        state.remaining = Math.min(
          state.remaining,
          2000 - state.records.length,
        );
        render();
        repeats();
      }
    } catch (e) {
      $("#mean-error").textContent = e.message;
    }
  };
  $("#mean-run").onclick = batch;
  $("#mean-pause").onclick = pause;
  $("#mean-reset").onclick = () => {
    state.seed = $("#mean-seed").value || "mean-2026";
    $("#mean-seed").value = state.seed;
    clear();
    render();
  };
  $$("[data-mean-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        $("#mean-transfer-feedback").textContent = workedAnswersHidden()
          ? "Choice recorded. Worked explanation hidden."
          : b.dataset.meanAnswer === "no"
            ? "Correct. Lack of sufficient evidence against H₀ is not proof that H₀ is true."
            : "A wide sampling distribution can hide real differences. Failing to reject does not prove equality.";
      }),
  );
  return {
    render,
    pause,
    getSnapshot: () => ({
      two: state.two,
      model: state.model,
      alternative: state.alternative,
      alpha: state.alpha,
      records: state.records.map((r) => ({ ...r })),
      running: state.running,
      remaining: state.remaining,
      result: state.result,
      revealed: state.revealed,
    }),
  };
}
