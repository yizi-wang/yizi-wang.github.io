import { workedAnswersHidden } from "./visibility.js";
import {
  correlationCritical,
  compareAtTablePrecision,
  CORRELATION_TABLE_SOURCE,
} from "./correlation-tables.js";
import {
  mean,
  pearson,
  ranks,
  regression,
  shuffle,
  seededRandom,
} from "./statistics.js";
const presets = {
  linear: {
    label: "A loose straight line",
    points: [
      [1, 2],
      [2, 3.1],
      [3, 2.8],
      [4, 4.4],
      [5, 4.3],
      [6, 6.2],
      [7, 5.8],
      [8, 7.2],
    ],
  },
  monotone: {
    label: "Increasing, curved",
    points: Array.from({ length: 8 }, (_, i) => [i + 1, 1 + (i + 1) ** 2 / 8]),
  },
  u: {
    label: "U-shaped dependence",
    points: Array.from({ length: 9 }, (_, i) => [i - 4, (i - 4) ** 2 / 2]),
  },
  ties: {
    label: "Tied-rank oracle",
    points: [
      [1, 4],
      [2, 1],
      [2, 1],
      [4, 3],
    ],
  },
  four: {
    label: "Perfect ranks · n = 4",
    points: [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ],
  },
  rank10: {
    label: "Two-tail rank example · n = 10",
    points: [
      [1, 6],
      [2, 4],
      [3, 3],
      [4, 2],
      [5, 5],
      [6, 1],
      [7, 8],
      [8, 7],
      [9, 9],
      [10, 10],
    ],
  },
  boundary: {
    label: "Rank-table boundary · n = 6",
    points: [
      [1, 2],
      [2, 1],
      [3, 4],
      [4, 3],
      [5, 6],
      [6, 5],
    ],
  },
  constant: {
    label: "Constant response",
    points: Array.from({ length: 8 }, (_, i) => [i + 1, 4]),
  },
};
const f = (v, d = 3) =>
  Number.isFinite(v)
    ? Math.abs(v) >= 1e4
      ? v.toExponential(2)
      : Number(v.toFixed(d)).toString()
    : "Undefined";
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function createCorrelationLab(root) {
  const state = {
    points: presets.linear.points.map((p) => [...p]),
    selected: 0,
    preset: "linear",
    prediction: 6,
    showLine: true,
    drag: null,
    dragDomain: null,
    analysisToken: 0,
    result: null,
    note: "All points are synthetic. No association here establishes causation.",
    criticalMethod: "pearson",
    criticalTail: "two-sided",
    criticalAssumed: false,
    criticalAlpha: 0.05,
    running: false,
  };
  root.innerHTML = `<section class="prediction cor-predict"><div class="prediction-icon">→</div><div><span class="eyebrow">PREDICT → CHANGE ONE THING</span><p>For nonconstant variables, square all nonnegative y values. Which must stay unchanged: Pearson r or Spearman rₛ?</p></div><div class="prediction-options"><button data-cor-predict="pearson">Pearson r</button><button data-cor-predict="spearman">Spearman rₛ</button><button data-cor-predict="both">Both</button></div></section>
 <div class="cor-toolbar"><label for="cor-preset">DATA STORY</label><select id="cor-preset">${Object.entries(
   presets,
 )
   .map(([k, v]) => `<option value="${k}">${v.label}</option>`)
   .join(
     "",
   )}</select><button id="cor-square" class="secondary">Square y →</button><button id="cor-outlier" class="secondary">Add an outlier</button><button id="cor-reset" class="text-button">↻ Reset story</button><label class="toggle"><input id="cor-line" type="checkbox" checked> Show regression</label></div>
 <div class="cor-workbench"><section class="panel cor-scatter-panel"><div class="section-heading"><div><span class="step-number">01</span><h2>Move the evidence <small>散点</small></h2></div><span id="cor-n" class="badge mint"></span></div><p class="cor-hint">Drag a point, or focus it and use arrow keys (0.1 unit; Shift = 1). Numerical controls below provide the same edits.</p><div id="cor-scatter" class="cor-scatter"></div><div class="cor-legend"><span><i class="key-dot"></i> Paired observations</span><span><i class="key-line"></i> ŷ on observed x range</span><span><i class="key-line dashed"></i> Extrapolation</span></div><div class="point-editor"><label for="cor-point">POINT</label><select id="cor-point"></select><label for="cor-x">x</label><input id="cor-x" type="number" step="0.1" min="-1000000" max="1000000"><label for="cor-y">y</label><input id="cor-y" type="number" step="0.1" min="-1000000" max="1000000"><button id="cor-apply" class="secondary">Apply values</button></div><p id="cor-edit-note" class="cor-hint" role="status">All points are synthetic. No association here establishes causation.</p></section>
 <section class="panel cor-results"><div class="section-heading"><div><span class="step-number">02</span><h2>Two different questions <small>相关</small></h2></div></div><div class="coefficient"><div><span>PEARSON · LINEAR</span><strong id="cor-r" class="answer-output"></strong><small>How closely do points follow a straight line?</small></div><div><span>SPEARMAN · MONOTONIC</span><strong id="cor-rs" class="answer-output"></strong><small>How consistently do the two orders agree?</small></div></div><div id="cor-insight" class="cor-insight answer-output"></div><div class="regression-box"><span class="eyebrow">LEAST-SQUARES · y ON x</span><b id="cor-equation" class="answer-output"></b><label for="cor-predict-x">Predict at x =</label><input id="cor-predict-x" type="number" step="0.1" value="6"><p id="cor-prediction" class="answer-output"></p><small>The response/explanatory roles matter. Swapping axes does not generally invert this fitted line.</small></div></section></div>
 <section class="panel cor-rank-panel"><div class="section-heading"><div><span class="step-number">03</span><h2>Inspect the ranks <small>平均秩</small></h2></div><span class="badge">TIES EXPLORATION · EXTENSION</span></div><p>Spearman = Pearson correlation of the ranks. Equal values share their average rank. The shortcut 1 − 6Σd²/[n(n²−1)] assumes no ties. Numerical exam questions with ties are excluded by this IAL specification.</p><div class="cor-table-wrap"><table id="cor-table"></table></div></section>
 <section class="panel correlation-table-test"><div class="section-heading"><div><span class="step-number">04</span><h2>Use the official critical-value table</h2></div><span class="badge">S3 CORE · OFFICIAL TABLE ROUTE</span></div><div class="cor-table-controls"><label for="cor-table-method">Coefficient</label><select id="cor-table-method"><option value="pearson">Pearson PMCC</option><option value="spearman">Spearman ranks · no ties</option></select><label for="cor-table-tail">Alternative chosen before seeing data</label><select id="cor-table-tail"><option value="two-sided">ρ ≠ 0 · two-sided</option><option value="greater">ρ > 0 · upper</option><option value="less">ρ &lt; 0 · lower</option></select><label for="cor-table-alpha">Total α</label><select id="cor-table-alpha"><option value="0.1">10%</option><option value="0.05" selected>5%</option><option value="0.02">2%</option><option value="0.01">1%</option></select></div><p id="cor-table-reference"></p><label class="model-confirm"><input type="checkbox" id="cor-table-assumptions"> Treat these synthetic pairs as an independent random sample under the stated table model.</label><p id="cor-table-condition"></p><output id="cor-table-decision" class="answer-output" role="status"></output><a class="text-button" href="${CORRELATION_TABLE_SOURCE}" target="_blank" rel="noopener">Pearson IAL official Formula Book · printed p27 / PDF p33 →</a></section><section class="panel permutation-panel"><div class="section-heading"><div><span class="step-number">04</span><h2>Could shuffled pairings look this strong?</h2></div><span class="badge">ENRICHMENT · CONDITIONAL RANDOMIZATION</span></div><p>Hold the observed x and y values fixed; randomly re-pair the y values. Under an exchangeable independent-pairing null, compare |r| with the observed |r|. This is a conditional permutation exploration, distinct from an arbitrary zero-correlation null. Core S3 significance uses supplied critical-value tables; this simulation does not replace that method.</p><button id="cor-permute" class="secondary">Shuffle 999 pairings</button><span id="cor-permutation-result" class="answer-output" role="status">Data changes clear the old simulation.</span></section>
 <section class="discovery-panel cor-transfer"><div><span class="eyebrow">TRANSFER · EFFECT ≠ SIGNIFICANCE ≠ CAUSATION</span><h2>A zero coefficient can hide a strong pattern.</h2><p>Try the U-shaped story. Both coefficients can be zero while y is determined by x. Significance concerns compatibility with a specified null; it does not measure effect size or establish a causal mechanism.</p></div><div><button data-cor-answer="yes" class="secondary">r = 0 means independence</button><button data-cor-answer="no" class="secondary">r = 0 can hide dependence</button><p id="cor-feedback" class="answer-output" role="status"></p></div></section>`;
  const $ = (s) => root.querySelector(s),
    $$ = (s) => [...root.querySelectorAll(s)];
  function invalidate(
    message = "Data changed; old permutation result cleared.",
  ) {
    state.analysisToken++;
    state.result = null;
    state.running = false;
    state.note = message;
    $("#cor-edit-note").textContent = workedAnswersHidden()
      ? "Data edited; worked results hidden."
      : message;
    $("#cor-permutation-result").textContent =
      "Data changes clear the old simulation.";
    $("#cor-permute").textContent = "Shuffle 999 pairings";
  }
  function getMath() {
    const xs = state.points.map((p) => p[0]),
      ys = state.points.map((p) => p[1]),
      rx = ranks(xs),
      ry = ranks(ys);
    return {
      xs,
      ys,
      rx,
      ry,
      r: pearson(xs, ys),
      rs: pearson(rx, ry),
      fit: regression(xs, ys),
    };
  }
  function getDomain(m = getMath()) {
    const xs = [...m.xs],
      ys = [...m.ys];
    if (m.fit && Number.isFinite(state.prediction) && !workedAnswersHidden()) {
      xs.push(state.prediction);
      ys.push(m.fit.predict(state.prediction));
    }
    const minX = Math.min(...xs),
      maxX = Math.max(...xs),
      minY = Math.min(...ys),
      maxY = Math.max(...ys),
      px = Math.max(0.5, (maxX - minX) * 0.12),
      py = Math.max(0.5, (maxY - minY) * 0.15);
    return [minX - px, maxX + px, minY - py, maxY + py];
  }
  function renderPlot() {
    const host = $("#cor-scatter"),
      m = getMath(),
      w = Math.max(290, host.clientWidth),
      h = 350,
      L = 42,
      R = w - 18,
      T = 18,
      B = 306,
      d = state.dragDomain || getDomain(m),
      [xmin, xmax, ymin, ymax] = d;
    const X = (x) => L + ((x - xmin) / (xmax - xmin)) * (R - L),
      Y = (y) => B - ((y - ymin) / (ymax - ymin)) * (B - T);
    let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="scatter-title scatter-desc"><title id="scatter-title">Synthetic paired data scatterplot</title><desc id="scatter-desc">Horizontal x, vertical y. Each focusable point can be edited with arrow keys, dragging or numeric inputs. Solid regression line only spans observed x; dashed portions extrapolate.</desc><defs><clipPath id="scatter-clip"><rect x="${L}" y="${T}" width="${R - L}" height="${B - T}"/></clipPath></defs>`;
    for (let i = 0; i <= 5; i++) {
      const x = xmin + ((xmax - xmin) * i) / 5,
        y = ymin + ((ymax - ymin) * i) / 5;
      s += `<line x1="${X(x)}" x2="${X(x)}" y1="${T}" y2="${B}" stroke="#28394d" stroke-dasharray="2 5"/><line x1="${L}" x2="${R}" y1="${Y(y)}" y2="${Y(y)}" stroke="#28394d" stroke-dasharray="2 5"/><text x="${X(x)}" y="${B + 18}" text-anchor="middle" fill="#9bacc2" font-size="10">${f(x, 1)}</text><text x="${L - 8}" y="${Y(y) + 3}" text-anchor="end" fill="#9bacc2" font-size="10">${f(y, 1)}</text>`;
    }
    s += `<text x="${(L + R) / 2}" y="${h - 4}" text-anchor="middle" fill="#bfd0e1" font-size="11">x · explanatory variable</text><text x="${L}" y="10" fill="#bfd0e1" font-size="10">y · response</text><g clip-path="url(#scatter-clip)">`;
    if (m.fit && state.showLine && !workedAnswersHidden()) {
      const a = Math.min(...m.xs),
        b = Math.max(...m.xs);
      s += `<line data-worked-regression="true" x1="${X(xmin)}" y1="${Y(m.fit.predict(xmin))}" x2="${X(xmax)}" y2="${Y(m.fit.predict(xmax))}" stroke="#b6a5ff" stroke-dasharray="5 5" stroke-width="1.5"/><line data-worked-regression="true" x1="${X(a)}" y1="${Y(m.fit.predict(a))}" x2="${X(b)}" y2="${Y(m.fit.predict(b))}" stroke="#f4d18a" stroke-width="2"/>`;
    }
    state.points.forEach(
      (p, i) =>
        (s += `<circle data-point="${i}" class="cor-point ${i === state.selected ? "selected" : ""}" cx="${X(p[0])}" cy="${Y(p[1])}" r="${i === state.selected ? 8 : 6}" fill="${i === state.selected ? "#f4d18a" : "#a6f0cb"}" stroke="#0c1522" stroke-width="2" tabindex="0" role="button" aria-label="Point ${i + 1}, x ${f(p[0])}, y ${f(p[1])}. Arrow keys edit; Shift increases the step."><title>Point ${i + 1}: (${f(p[0])}, ${f(p[1])})</title></circle>`),
    );
    if (m.fit && Number.isFinite(state.prediction) && !workedAnswersHidden())
      s += `<path data-worked-regression="true" d="M${X(state.prediction) - 5},${Y(m.fit.predict(state.prediction))}h10m-5,-5v10" stroke="#df9eff" stroke-width="2"/>`;
    s += "</g></svg>";
    host.innerHTML = s;
    host.dataset.domain = JSON.stringify(d);
    $$("[data-point]").forEach((el) => {
      el.addEventListener("focus", () => {
        state.selected = +el.dataset.point;
        renderEditor();
      });
      el.addEventListener("keydown", (e) => {
        const delta = e.shiftKey ? 1 : 0.1,
          dirs = {
            ArrowLeft: [-delta, 0],
            ArrowRight: [delta, 0],
            ArrowUp: [0, delta],
            ArrowDown: [0, -delta],
          };
        if (!dirs[e.key]) return;
        e.preventDefault();
        const i = +el.dataset.point;
        state.selected = i;
        const [dx, dy] = dirs[e.key];
        state.points[i] = [
          Math.max(-1e6, Math.min(1e6, state.points[i][0] + dx)),
          Math.max(-1e6, Math.min(1e6, state.points[i][1] + dy)),
        ];
        invalidate(
          "Point edited with the keyboard. Coefficients and ranks recomputed.",
        );
        render();
        $(`[data-point="${i}"]`).focus({ preventScroll: true });
      });
    });
  }
  function renderEditor() {
    const p = state.points[state.selected];
    $("#cor-point").innerHTML = state.points
      .map(
        (_, i) =>
          `<option value="${i}" ${i === state.selected ? "selected" : ""}>${i + 1}</option>`,
      )
      .join("");
    $("#cor-x").value = String(p[0]);
    $("#cor-y").value = String(p[1]);
  }
  function render() {
    const m = getMath();
    $("#cor-edit-note").textContent = workedAnswersHidden()
      ? "Worked results hidden; raw observations unchanged."
      : state.note;
    $("#cor-n").textContent = `n = ${state.points.length} pairs`;
    $("#cor-r").textContent = f(m.r);
    $("#cor-rs").textContent = f(m.rs);
    const ties =
      new Set(m.xs).size < m.xs.length || new Set(m.ys).size < m.ys.length;
    $("#cor-insight").innerHTML = !Number.isFinite(m.r)
      ? "<b>A coefficient is undefined here.</b><p>At least one variable is constant, so its centered sum of squares is zero. Undefined is not zero correlation.</p>"
      : `<b>${Math.abs(m.rs - m.r) > 0.08 ? "Ordering and straightness tell different stories." : "Compare ordering with straightness."}</b><p>${ties ? "Ties share average ranks. " : "No tied values in the current data. "}Move one point and inspect both coefficients. Neither establishes causation.</p>`;
    $("#cor-equation").textContent = m.fit
      ? `ŷ = ${f(m.fit.intercept)} ${m.fit.slope < 0 ? "−" : "+"} ${f(Math.abs(m.fit.slope))}x`
      : "Regression unavailable: x is constant.";
    const outside =
      state.prediction < Math.min(...m.xs) ||
      state.prediction > Math.max(...m.xs);
    $("#cor-prediction").textContent = m.fit
      ? `ŷ = ${f(m.fit.predict(state.prediction))} · ${outside ? "EXTRAPOLATION: outside observed x range; the pattern may not continue." : "Interpolation within observed x range; still a model prediction."}`
      : "No unique response-on-x slope can be calculated.";
    $("#cor-prediction").classList.toggle("warning", outside);
    $("#cor-square").disabled =
      m.ys.some(
        (y) => y < 0 || Math.abs(y) > 1000 || (y !== 0 && y * y === 0),
      ) || !Number.isFinite(m.rs);
    $("#cor-square").title =
      "Squaring is strictly increasing for nonnegative y. Negative values or values above 1,000 disable this bounded comparison.";
    $("#cor-outlier").disabled = state.points.length >= 24;
    $("#cor-permute").disabled = !Number.isFinite(m.r) || state.running;
    $("#cor-table").innerHTML =
      `<caption>Actual values → average ranks. Pearson(ranks) = Spearman rₛ.</caption><thead><tr><th>Point</th><th>x</th><th>y</th><th>Rank x</th><th>Rank y</th></tr></thead><tbody>${state.points.map((p, i) => `<tr class="${i === state.selected ? "selected" : ""}"><td>${i + 1}</td><td>${f(p[0])}</td><td>${f(p[1])}</td><td class="answer-output">${f(m.rx[i])}</td><td class="answer-output">${f(m.ry[i])}</td></tr>`).join("")}</tbody>`;
    renderEditor();
    renderPlot();
    renderCritical(m);
  }
  function renderCritical(m = getMath()) {
    const method = state.criticalMethod,
      tail = state.criticalTail,
      coefficient = method === "pearson" ? m.r : m.rs,
      ties =
        new Set(m.xs).size < m.xs.length || new Set(m.ys).size < m.ys.length,
      entry = correlationCritical(
        method,
        state.points.length,
        tail,
        state.criticalAlpha,
      ),
      rho = method === "spearman" ? "ρₛ" : "ρ";
    $("#cor-table-condition").textContent =
      method === "pearson"
        ? "Descriptive r needs no Normality assumption. Table inference assumes iid pairs from a bivariate Normal population; separate marginal Normality is insufficient. These dragged synthetic points are illustrative, not evidence from an actual random-sample study."
        : "Descriptive Spearman uses average ranks. This table route requires random independent pairs and no ties; its calibration under exchangeable independent orders does not mean zero rank correlation guarantees independence.";
    const missing = {
      "no-official-row":
        "This n has no row in the official table; no nearest-row substitution.",
      "no-official-column":
        "The requested one-tail probability has no official column. No replacement column is used.",
      "not-implemented-row":
        "The official table has this row, but this app has not implemented it. Consult the source.",
      "not-implemented-cell":
        "This official row/column is not yet transcribed into this app. Consult the source.",
      "printed-dash":
        "The official table prints a dash for this cell; it is not a critical value of 0 or 1.",
    };
    $("#cor-table-reference").textContent =
      `H₀: ${rho} = 0. n = ${state.points.length}; total α = ${state.criticalAlpha}; one-tail column ${entry.oneTailLevel}. ` +
      (entry.available
        ? `Printed critical magnitude ${entry.critical.toFixed(4)}.`
        : missing[entry.reason]);
    let message;
    if (!Number.isFinite(coefficient))
      message = "Coefficient undefined: no table decision.";
    else if (method === "spearman" && ties)
      message =
        "Ties: official no-ties table inference unavailable; coefficient remains descriptive. The separate conditional permutation exploration uses a different explicitly stated null model.";
    else if (!entry.available) message = missing[entry.reason];
    else if (!state.criticalAssumed)
      message =
        "State the random-sampling/model assumptions before interpreting this table decision.";
    else {
      const c = compareAtTablePrecision(coefficient, entry);
      message = `Table-precision mode: ${tail === "two-sided" ? "|coefficient|" : tail === "greater" ? "coefficient" : "−coefficient"} = ${numberForTable(c.score)} → ${c.roundedScore.toFixed(4)}, compared with ${entry.critical.toFixed(4)}. ${c.atBoundary ? "At the printed precision boundary, equality is included. " : ""}${c.reject ? "Reject H₀ under the stated model: evidence in the chosen direction." : "Do not reject H₀: insufficient evidence, not proof of zero correlation."} This is a threshold decision, not an exact p-value. Significance does not establish effect size or causation.`;
    }
    $("#cor-table-decision").textContent = workedAnswersHidden()
      ? "Official-table decision concealed. Data and assumptions unchanged."
      : message;
  }
  function numberForTable(v) {
    return Number.isFinite(v) ? v.toFixed(10) : "undefined";
  }
  $("#cor-table-method").onchange = (e) => {
    state.criticalMethod = e.target.value;
    renderCritical();
  };
  $("#cor-table-tail").onchange = (e) => {
    state.criticalTail = e.target.value;
    renderCritical();
  };
  $("#cor-table-alpha").onchange = (e) => {
    state.criticalAlpha = +e.target.value;
    renderCritical();
  };
  $("#cor-table-assumptions").onchange = (e) => {
    state.criticalAssumed = e.target.checked;
    renderCritical();
  };
  $("#cor-preset").onchange = (e) => {
    state.preset = e.target.value;
    state.points = presets[state.preset].points.map((p) => [...p]);
    state.selected = 0;
    state.prediction = state.points.at(-2)[0];
    $("#cor-predict-x").value = state.prediction;
    invalidate("New synthetic story. Old permutation simulation cleared.");
    render();
  };
  $("#cor-reset").onclick = () => {
    $("#cor-preset").dispatchEvent(new Event("change"));
  };
  $("#cor-square").onclick = () => {
    const before = getMath();
    if (before.ys.some((y) => y < 0 || Math.abs(y) > 1000)) return;
    state.points = state.points.map(([x, y]) => [x, y * y]);
    const after = getMath();
    invalidate(
      `Squared nonnegative y values. Spearman ${f(before.rs)} → ${f(after.rs)}; Pearson ${f(before.r)} → ${f(after.r)}. The ranks are unchanged.`,
    );
    render();
  };
  $("#cor-outlier").onclick = () => {
    const m = getMath(),
      x =
        Math.max(...m.xs) +
        Math.max(1, (Math.max(...m.xs) - Math.min(...m.xs)) * 0.2),
      y =
        Math.min(...m.ys) -
        Math.max(3, (Math.max(...m.ys) - Math.min(...m.ys)) * 0.7);
    state.points.push([Math.min(1e6, x), Math.max(-1e6, y)]);
    state.selected = state.points.length - 1;
    invalidate(
      "Outlier added. Compare the change in r, ranks and fitted line.",
    );
    render();
  };
  $("#cor-line").onchange = (e) => {
    state.showLine = e.target.checked;
    renderPlot();
  };
  $("#cor-point").onchange = (e) => {
    state.selected = +e.target.value;
    render();
  };
  $("#cor-apply").onclick = () => {
    const x = Number($("#cor-x").value),
      y = Number($("#cor-y").value);
    if (
      $("#cor-x").value === "" ||
      $("#cor-y").value === "" ||
      ![x, y].every((v) => Number.isFinite(v) && Math.abs(v) <= 1e6)
    ) {
      $("#cor-edit-note").textContent =
        "Enter finite x and y between −1,000,000 and 1,000,000.";
      return;
    }
    state.points[state.selected] = [x, y];
    invalidate("Point values applied. All coefficients and ranks recomputed.");
    render();
  };
  [$("#cor-x"), $("#cor-y")].forEach(
    (el) =>
      (el.onkeydown = (e) => {
        if (e.key === "Enter") $("#cor-apply").click();
      }),
  );
  $("#cor-predict-x").onchange = (e) => {
    const v = Number(e.target.value);
    if (e.target.value === "" || !Number.isFinite(v) || Math.abs(v) > 1e6) {
      e.target.value = state.prediction;
      return;
    }
    state.prediction = v;
    render();
  };
  const plot = $("#cor-scatter");
  plot.addEventListener("pointerdown", (e) => {
    const target = e.target.closest("[data-point]");
    if (!target) return;
    e.preventDefault();
    state.selected = +target.dataset.point;
    state.drag = { pointerId: e.pointerId, index: state.selected };
    state.dragDomain = JSON.parse(plot.dataset.domain);
    plot.setPointerCapture(e.pointerId);
    renderEditor();
  });
  plot.addEventListener("pointermove", (e) => {
    if (!state.drag || e.pointerId !== state.drag.pointerId) return;
    const svg = plot.querySelector("svg"),
      box = svg.getBoundingClientRect(),
      w = svg.viewBox.baseVal.width,
      h = 350,
      L = 42,
      R = w - 18,
      T = 18,
      B = 306,
      px = Math.max(L, Math.min(R, ((e.clientX - box.left) / box.width) * w)),
      py = Math.max(T, Math.min(B, ((e.clientY - box.top) / box.height) * h)),
      [xmin, xmax, ymin, ymax] = state.dragDomain;
    state.points[state.drag.index] = [
      xmin + ((px - L) / (R - L)) * (xmax - xmin),
      ymax - ((py - T) / (B - T)) * (ymax - ymin),
    ];
    invalidate(
      "Point moved. All coefficients, ranks and regression recomputed.",
    );
    render();
  });
  const finish = (e) => {
    if (!state.drag || e.pointerId !== state.drag.pointerId) return;
    state.drag = null;
    state.dragDomain = null;
    render();
  };
  plot.addEventListener("pointerup", finish);
  plot.addEventListener("pointercancel", finish);
  $$("[data-cor-predict]").forEach(
    (el) =>
      (el.onclick = () => {
        $$("[data-cor-predict]").forEach((e) =>
          e.classList.toggle("selected", e === el),
        );
        $("#cor-edit-note").textContent =
          "Prediction saved. Use the increasing curved story, square nonnegative y, then explain which ranks changed.";
      }),
  );
  $$("[data-cor-answer]").forEach(
    (el) =>
      (el.onclick = () => {
        $("#cor-feedback").textContent =
          el.dataset.corAnswer === "no"
            ? "Correct. In the U-shaped story y is determined by x even when both coefficients are zero."
            : "Inspect the U-shaped story: every y follows from x, despite zero coefficients. Zero correlation is not independence.";
      }),
  );
  $("#cor-permute").onclick = () => {
    const m = getMath();
    if (!Number.isFinite(m.r)) return;
    const B = 999,
      observed = Math.abs(m.r),
      rng = seededRandom("pairing-2026"),
      token = ++state.analysisToken;
    let b = 0,
      done = 0;
    state.running = true;
    $("#cor-permute").disabled = true;
    function chunk() {
      if (token !== state.analysisToken) return;
      for (let j = 0; j < 50 && done < B; j++, done++) {
        const r = pearson(m.xs, shuffle(m.ys, rng));
        if (Math.abs(r) >= observed - 1e-12) b++;
      }
      $("#cor-permutation-result").textContent =
        `${done}/${B} shuffled pairings…`;
      if (done < B) requestAnimationFrame(chunk);
      else {
        const p = (b + 1) / (B + 1);
        state.running = false;
        state.result = { B, b, p, observed, seed: "pairing-2026" };
        $("#cor-permutation-result").textContent = workedAnswersHidden()
          ? `${done} shuffled pairings recorded; worked p-value hidden.`
          : `Two-sided |r| Monte Carlo p = (${b}+1)/(${B}+1) = ${f(p, 4)}. MC standard error ≈ ${f(Math.sqrt((p * (1 - p)) / (B + 1)), 4)}. Seed: pairing-2026. This is not P(the null is true).`;
        $("#cor-permute").disabled = false;
      }
    }
    requestAnimationFrame(chunk);
  };
  return {
    render,
    pause: () => {
      if (state.running) {
        state.analysisToken++;
        state.running = false;
        $("#cor-permute").disabled = false;
        $("#cor-permutation-result").textContent =
          "Permutation run stopped. Run again for a complete labelled Monte Carlo result.";
      }
    },
    getSnapshot: () => ({
      ...state,
      points: state.points.map((p) => [...p]),
      math: {
        ...getMath(),
        fit: getMath().fit
          ? { slope: getMath().fit.slope, intercept: getMath().fit.intercept }
          : null,
      },
    }),
  };
}
