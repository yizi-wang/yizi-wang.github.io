import { independentNormalCombination } from "./sampling-design.js";
import { workedAnswersHidden } from "./visibility.js";
const f = (x, d = 4) =>
  x === 0
    ? "0"
    : Math.abs(x) < 10 ** -d || Math.abs(x) >= 1e6
      ? x.toExponential(4)
      : Number(x.toFixed(d)).toString();
const esc = (x) =>
  String(x).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function createNormalCombinationLab(root) {
  const state = {
    result: null,
    config: null,
    reference: null,
    prediction: null,
    transfer: null,
  };
  root.innerHTML = `<div class="projection-select"><label>Projection focus<select id="normal-view"><option value="all">All panels</option><option value="model">Inputs and assumptions</option><option value="result">Combination and comparison</option></select></label></div>
 <section class="prediction" data-normal-stage="model"><div class="prediction-icon">?</div><div><span class="eyebrow">PREDICT → SIGN AND SPREAD</span><p>Flip b’s sign, keeping its magnitude and both input variances. Must the variance of aX+bY+c change?</p></div><div class="prediction-options"><button data-normal-predict="yes">Yes, the sign changes variance</button><button data-normal-predict="no">No, coefficients are squared</button></div><p id="normal-predict-feedback" role="status"></p></section>
 <section class="panel" data-normal-stage="model"><div class="section-heading"><div><span class="step-number">01</span><h2>Declare the independent Normal model <small>独立正态线性组合</small></h2></div><span class="badge">S3 · EXACT UNDER STATED CONDITIONS</span></div><p class="method-note">Two distinct fictional variables measured in points. The second parameter of N(μ,σ²) below is variance, not standard deviation. A repeated variable ID is the same variable; its coefficients must be combined first.</p><label class="model-confirm"><input id="normal-normal" type="checkbox" checked> Each input follows a Normal model (zero variance is allowed as a degenerate constant).</label><label class="model-confirm"><input id="normal-independent" type="checkbox" checked> The two distinct variables are independent. No covariance term is required.</label><div class="table-scroll"><table class="normal-input-table"><caption>Change the actual model parameters; results update from the same snapshot.</caption><thead><tr><th>Variable ID</th><th>Coefficient</th><th>Mean μ · points</th><th>Variance σ² · points²</th></tr></thead><tbody><tr><td><input id="normal-id-x" value="X" maxlength="16" aria-label="First variable ID"></td><td><input id="normal-a" type="number" step="any" value="2" aria-label="Coefficient a"></td><td><input id="normal-mu-x" type="number" step="any" value="10" aria-label="First mean"></td><td><input id="normal-var-x" type="number" step="any" min="0" value="4" aria-label="First variance"></td></tr><tr><td><input id="normal-id-y" value="Y" maxlength="16" aria-label="Second variable ID"></td><td><input id="normal-b" type="number" step="any" value="-3" aria-label="Coefficient b"></td><td><input id="normal-mu-y" type="number" step="any" value="3" aria-label="Second mean"></td><td><input id="normal-var-y" type="number" step="any" min="0" value="9" aria-label="Second variance"></td></tr></tbody></table></div><div class="inference-controls"><label>Constant c · points<input id="normal-constant" type="number" step="any" value="0"></label><button id="normal-flip" class="primary">Flip b's sign · same magnitude</button><button id="normal-reset" class="text-button">Reset model</button></div><p class="method-note">Display controls support |coefficients|≤20, |means|≤100, variance0–400 and |c|≤200. The pure engine supports a wider documented range. Changing assumptions can invalidate the Normal-distribution claim.</p><p id="normal-error" class="input-error" role="alert"></p></section>
 <section class="panel" data-normal-stage="result"><div class="section-heading"><div><span class="step-number">02</span><h2>Means follow signs. Variances add.</h2></div></div><p id="normal-rule" class="mean-hypotheses"></p><div id="normal-output" class="answer-output"><div class="result-metrics"><div><span>E(S) · POINTS</span><b id="normal-mean"></b></div><div><span>Var(S) · POINTS²</span><b id="normal-variance"></b></div><div><span>SD(S) · POINTS</span><b id="normal-sd"></b></div></div><div id="normal-contributions" class="table-scroll"></div><div id="normal-variance-bar" class="variance-components"></div><div id="normal-chart" class="normal-combination-chart"></div><p id="normal-distribution" class="method-note"></p><p id="normal-comparison" class="method-note" role="status"></p></div><p class="method-note">For independent variables, Var(aX+bY+c)=a²Var(X)+b²Var(Y). A negative coefficient changes the mean contribution's sign, but its variance contribution stays nonnegative. Without independence the covariance term2abCov(X,Y) cannot simply be omitted.</p><button id="normal-flip-result" class="secondary projection-reveal">Flip b and compare on common axes</button></section>
 <section class="transfer" data-normal-stage="result"><div><span class="eyebrow">TRANSFER</span><h3>Can X+X be treated as two independent copies of X?</h3></div><div><button data-normal-answer="yes">Yes, add two variances</button><button data-normal-answer="no">No, it is2X</button><p id="normal-transfer-feedback" role="status"></p></div></section>`;
  const $ = (s) => root.querySelector(s),
    $$ = (s) => [...root.querySelectorAll(s)];
  root.dataset.view = "all";
  $("#normal-view").onchange = (e) => {
    root.dataset.view = e.target.value;
    render();
  };
  function read(id) {
    const el = $(id),
      v = Number(el.value);
    if (!el.value.trim() || !Number.isFinite(v))
      throw new RangeError(
        "Enter a finite value in every active numeric field; empty is not zero.",
      );
    return v;
  }
  function config() {
    if (!$("#normal-normal").checked)
      throw new RangeError(
        "The Normal-distribution claim requires the declared Normal inputs. This tool does not infer distribution shape from means and variances alone.",
      );
    if (!$("#normal-independent").checked)
      throw new RangeError(
        "Independence is required for the displayed variance sum. Covariance is not supported; no independence is assumed silently.",
      );
    const terms = [
        {
          id: $("#normal-id-x").value.trim(),
          coefficient: read("#normal-a"),
          mean: read("#normal-mu-x"),
          variance: read("#normal-var-x"),
        },
        {
          id: $("#normal-id-y").value.trim(),
          coefficient: read("#normal-b"),
          mean: read("#normal-mu-y"),
          variance: read("#normal-var-y"),
        },
      ],
      constant = read("#normal-constant");
    if (
      terms.some(
        (t) =>
          Math.abs(t.coefficient) > 20 ||
          Math.abs(t.mean) > 100 ||
          t.variance < 0 ||
          t.variance > 400,
      ) ||
      Math.abs(constant) > 200
    )
      throw new RangeError(
        "Use the documented plot-control ranges: coefficients±20, means±100, variances0–400 and constant±200.",
      );
    return { terms, constant, independent: true };
  }
  function graph(result) {
    const host = $("#normal-chart");
    if (workedAnswersHidden()) {
      host.innerHTML =
        '<p class="method-note">Calculated distribution concealed. The declared inputs have not changed.</p>';
      return;
    }
    const prior = state.reference?.result,
      curves = prior
        ? [
            { r: prior, color: "#9baad2", label: "before sign flip" },
            { r: result, color: "#a1ecc9", label: "current" },
          ]
        : [{ r: result, color: "#a1ecc9", label: "current" }],
      w = Math.max(280, host.clientWidth),
      L = 54,
      R = w - 15,
      T = 30,
      B = 220,
      h = 270;
    if (result.variance === 0 && (!prior || prior.variance === 0)) {
      let lo = Math.min(...curves.map((c) => c.r.mean)) - 1,
        hi = Math.max(...curves.map((c) => c.r.mean)) + 1,
        X = (x) => L + ((x - lo) / (hi - lo)) * (R - L);
      let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Point mass: all probability at the deterministic value, no Normal density curve."><text x="${L}" y="16" fill="#adc1d5" font-size="12">POINT MASS · NO DENSITY CURVE</text><line x1="${L}" x2="${R}" y1="${B}" y2="${B}" stroke="#69809d"/>`;
      for (const c of curves)
        s += `<line class="normal-point-mass" x1="${X(c.r.mean)}" x2="${X(c.r.mean)}" y1="${B - 110}" y2="${B}" stroke="${c.color}" stroke-width="3"/><text x="${X(c.r.mean)}" y="${B + 19}" text-anchor="middle" fill="${c.color}" font-size="12">${f(c.r.mean)}</text><text x="${X(c.r.mean)}" y="${B - 125}" text-anchor="middle" fill="${c.color}" font-size="12">P(S=${f(c.r.mean)})=1</text>`;
      s += `<text x="${(L + R) / 2}" y="${h - 6}" text-anchor="middle" fill="#adc1d5" font-size="12">S · points · no density curve</text></svg>`;
      host.innerHTML = s;
      return;
    }
    let lo = Math.min(...curves.map((c) => c.r.mean - 4 * c.r.sd)),
      hi = Math.max(...curves.map((c) => c.r.mean + 4 * c.r.sd));
    if (!(hi > lo)) {
      lo = result.mean - 1;
      hi = result.mean + 1;
    }
    const X = (x) => L + ((x - lo) / (hi - lo)) * (R - L),
      peak =
        Math.max(
          ...curves
            .filter((c) => c.r.sd > 0)
            .map((c) => 1 / (c.r.sd * Math.sqrt(2 * Math.PI))),
        ) * 1.15,
      Y = (p) => B - (p / peak) * (B - T);
    let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Normal density of the linear combination under explicit independence and Normal assumptions; current and previous curves use common axes."><text x="${L}" y="15" fill="#adc1d5" font-size="11">NORMAL DENSITY · 1/POINT</text>`;
    for (let i = 0; i <= 3; i++) {
      const v = (peak * i) / 3;
      s += `<line x1="${L}" x2="${R}" y1="${Y(v)}" y2="${Y(v)}" stroke="#2a3b50" stroke-dasharray="2 4"/><text x="${L - 5}" y="${Y(v) + 3}" text-anchor="end" fill="#9eb4cc" font-size="10">${f(v, 3)}</text>`;
    }
    for (let i = 0; i <= 4; i++) {
      const x = lo + ((hi - lo) * i) / 4;
      s += `<text x="${X(x)}" y="${B + 19}" text-anchor="middle" fill="#a8bdd3" font-size="10">${f(x, Math.min(14, Math.max(2, Math.ceil(-Math.log10(hi - lo)) + 2)))}</text>`;
    }
    for (const c of curves) {
      if (c.r.sd === 0) {
        s += `<line x1="${X(c.r.mean)}" x2="${X(c.r.mean)}" y1="${T}" y2="${B}" stroke="${c.color}"/><text x="${X(c.r.mean)}" y="${T + 15}" fill="${c.color}" font-size="11">point mass</text>`;
        continue;
      }
      let d = "";
      for (let i = 0; i <= 160; i++) {
        const z = -4 + (8 * i) / 160,
          x = c.r.mean + z * c.r.sd,
          p = Math.exp(-0.5 * z * z) / (c.r.sd * Math.sqrt(2 * Math.PI));
        d += `${i ? "L" : "M"}${X(x)},${Y(p)} `;
      }
      s += `<path class="normal-density" d="${d}" fill="none" stroke="${c.color}" stroke-width="2" ${c.label === "before sign flip" ? 'stroke-dasharray="4 4"' : ""}/><line x1="${X(c.r.mean)}" x2="${X(c.r.mean)}" y1="${T}" y2="${B}" stroke="${c.color}" stroke-dasharray="2 5"/>`;
    }
    s += `<text x="${(L + R) / 2}" y="${h - 8}" text-anchor="middle" fill="#a8bdd3" font-size="11">S · points · central4SD window</text></svg>`;
    host.innerHTML = s;
  }
  function feedback() {
    $("#normal-predict-feedback").textContent = state.prediction
      ? workedAnswersHidden()
        ? "Choice recorded; worked comparison concealed."
        : state.prediction === "no"
          ? "Correct under independence. Squared coefficients keep the same variance when only a sign flips. Try the button and compare both curves on common axes."
          : "Compare b² before and after the sign flip; the mean uses b, while variance uses b²."
      : "";
    $("#normal-transfer-feedback").textContent = state.transfer
      ? workedAnswersHidden()
        ? "Choice recorded; explanation concealed."
        : state.transfer === "no"
          ? "Correct. X+X=2X, so Var(X+X)=4Var(X), not2Var(X). Distinct IDs prevent accidentally declaring a variable independent of itself."
          : "The two appearances refer to the same random variable. Combine their coefficients before taking the variance."
      : "";
  }
  function render() {
    feedback();
    try {
      const c = config(),
        r = independentNormalCombination(c);
      state.config = c;
      state.result = r;
      $("#normal-error").textContent = "";
      $("#normal-flip").disabled = false;
      $("#normal-flip-result").disabled = false;
      $("#normal-output").classList.remove("hidden");
      $("#normal-rule").textContent =
        `S = ${f(c.constant)} ${c.terms.map((t) => `${t.coefficient < 0 ? "−" : "+"} ${f(Math.abs(t.coefficient))}·${t.id}`).join(" ")}. ${c.terms.map((t) => `${t.id} ~ N(${f(t.mean)},${f(t.variance)})`).join("; ")}; the variables are distinct and independent.`;
      $("#normal-mean").textContent = f(r.mean);
      $("#normal-variance").textContent = f(r.variance);
      $("#normal-sd").textContent = f(r.sd);
      const vs = c.terms.map(
        (t) => (Math.abs(t.coefficient) * Math.sqrt(t.variance)) ** 2,
      );
      $("#normal-contributions").innerHTML =
        `<table><caption>Mean contributions retain sign; variance contributions are nonnegative.</caption><thead><tr><th>Term</th><th>Mean contribution aᵢμᵢ</th><th>Variance contribution aᵢ²σᵢ²</th></tr></thead><tbody>${c.terms.map((t, i) => `<tr><th>${esc(t.id)}</th><td>${f(t.coefficient)}×${f(t.mean)} = ${f(t.coefficient * t.mean)}</td><td>(${f(t.coefficient)})²×${f(t.variance)} = ${f(vs[i])}</td></tr>`).join("")}<tr><th>Constant</th><td>${f(c.constant)}</td><td>0</td></tr></tbody></table>`;
      $("#normal-variance-bar").innerHTML =
        r.variance > 0
          ? vs
              .map(
                (v, i) =>
                  `<span style="width:${(v / r.variance) * 100}%;background:${i ? "#bd9ee8" : "#92d7bf"}" title="${esc(c.terms[i].id)} variance contribution ${f(v)}"></span>`,
              )
              .join("")
          : "<p>No stochastic variance: a point mass.</p>";
      graph(r);
      $("#normal-distribution").textContent = workedAnswersHidden()
        ? "Calculated result concealed."
        : r.distribution === "point-mass"
          ? `S=${f(r.mean)} with probability1. Variance and SD are0; there is no Normal density curve to divide by0.`
          : `Under the stated independent Normal model, S~N(${f(r.mean)},${f(r.variance)}). SD=${f(r.sd)} points; variance=${f(r.variance)} points². Density height is not a probability. Dashed lavender is before, solid mint is current when both curves differ. The Normal tails continue beyond each displayed4SD window.${r.mean - 4 * r.sd === r.mean + 4 * r.sd ? " This spread is below the coordinate resolution at this mean; refer to the nonzero numeric SD." : ""}`;
      $("#normal-comparison").textContent = workedAnswersHidden()
        ? "Worked sign-flip comparison concealed."
        : state.reference
          ? `Before: mean=${f(state.reference.result.mean)}, variance=${f(state.reference.result.variance)}. After: mean=${f(r.mean)}, variance=${f(r.variance)}. Only b's sign changed; the same-magnitude coefficient gives the same variance.${c.terms[1].coefficient === 0 ? " b=0, so the sign flip has no numerical effect." : ""}`
          : "Flip b to compare two distributions on common axes. Parameter edits clear the old comparison.";
    } catch (e) {
      state.result = null;
      state.config = null;
      $("#normal-error").textContent = e.message;
      $("#normal-output").classList.add("hidden");
      $("#normal-chart").innerHTML = "";
      $("#normal-contributions").innerHTML = "";
      $("#normal-rule").textContent =
        "No supported independent Normal combination until the input/conditions are corrected.";
      $("#normal-flip").disabled = true;
      $("#normal-flip-result").disabled = true;
    }
  }
  function flip() {
    if (!state.result) return;
    state.reference = {
      config: structuredClone(state.config),
      result: { ...state.result },
    };
    $("#normal-b").value = -state.config.terms[1].coefficient;
    render();
  }
  $$("input").forEach((el) =>
    el.addEventListener(el.type === "checkbox" ? "change" : "input", () => {
      state.reference = null;
      render();
    }),
  );
  $("#normal-flip").onclick = flip;
  $("#normal-flip-result").onclick = flip;
  $("#normal-reset").onclick = () => {
    for (const [id, v] of [
      ["#normal-id-x", "X"],
      ["#normal-id-y", "Y"],
      ["#normal-a", 2],
      ["#normal-b", -3],
      ["#normal-mu-x", 10],
      ["#normal-mu-y", 3],
      ["#normal-var-x", 4],
      ["#normal-var-y", 9],
      ["#normal-constant", 0],
    ])
      $(id).value = v;
    $("#normal-independent").checked = true;
    $("#normal-normal").checked = true;
    state.reference = null;
    state.prediction = null;
    state.transfer = null;
    render();
  };
  $$("[data-normal-predict]").forEach(
    (b) =>
      (b.onclick = () => {
        state.prediction = b.dataset.normalPredict;
        feedback();
      }),
  );
  $$("[data-normal-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        state.transfer = b.dataset.normalAnswer;
        feedback();
      }),
  );
  render();
  return { render, pause() {}, getSnapshot: () => structuredClone(state) };
}
