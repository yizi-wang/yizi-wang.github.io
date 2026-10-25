import { workedAnswersHidden } from "./visibility.js";
import { seededRandom } from "./statistics.js";
import { contingencyTest, chiSquareTails } from "./inference.js";
import {
  identityGroups,
  mergeAdjacent,
  evaluateContingency,
  evaluateGOF,
  fixedMarginShuffle,
} from "./categorical-model.js";
import { number, probability } from "./lab-ui.js";
const presets = {
  strong: {
    name: "Two regions · different preferences",
    rows: ["North region", "South region"],
    cols: ["Lower band", "Higher band"],
    o: [
      [16, 4],
      [4, 16],
    ],
  },
  unequal: {
    name: "Unequal group sizes · independent proportions",
    rows: ["Group of10", "Group of30"],
    cols: ["Lower band", "Higher band"],
    o: [
      [5, 5],
      [15, 15],
    ],
  },
  sparse: {
    name: "Sparse adjacent time bands · pooling lab",
    rows: ["North region", "South region"],
    cols: ["0–9 minutes", "10–19 minutes", "20–29 minutes"],
    o: [
      [27, 1, 2],
      [23, 4, 3],
    ],
  },
  age: {
    name: "Age and daily minutes · row/column pooling",
    rows: ["Age16", "Age17", "Age18"],
    cols: ["0–9 minutes", "10–19 minutes", "20–29 minutes"],
    o: [
      [10, 7, 3],
      [8, 9, 3],
      [12, 9, 9],
    ],
  },
  boundary: {
    name: "Exact expected5 · numeric boundary",
    rows: ["Small group", "Large group"],
    cols: ["Choice A", "Choice B"],
    o: [
      [10, 0],
      [67, 77],
    ],
  },
};
export function createChiSquareLab(root) {
  const state = {
    mode: "contingency",
    preset: "strong",
    rows: [],
    cols: [],
    groups: [],
    result: null,
    revealed: false,
    seed: "labels-2026",
    rng: seededRandom("labels-2026"),
    records: [],
    running: false,
    remaining: 0,
    token: 0,
    prediction: null,
    transfer: null,
    lastShuffle: null,
    datasetKey: null,
    datasets: {},
    specifiedProbabilities: ["0.1", "0.2", "0.3", "0.4"],
  };
  root.innerHTML = `<section class="prediction"><div class="prediction-icon">?</div><div><span class="eyebrow">PREDICT → EXPECTED IS A MODEL</span><p id="chi-predict-question">If group sizes differ, must independence mean equal expected counts in every cell?</p></div><div class="prediction-options"><button data-chi-predict="yes">Yes, every cell equal</button><button data-chi-predict="no">No, margins matter</button></div><p id="chi-predict-feedback" role="status"></p></section>
 <section class="panel"><div class="section-heading"><div><span class="step-number">01</span><h2>Edit the observed counts <small>观察频数</small></h2></div><span class="badge">S3 · PEARSON χ² · NO YATES</span></div><div class="inference-controls"><label>Question<select id="chi-mode"><option value="contingency">Association · contingency table</option><option value="gof">Fit · one specified distribution</option></select></label><label id="chi-preset-field">Synthetic population story<select id="chi-preset">${Object.entries(
   presets,
 )
   .map(([k, p]) => `<option value="${k}">${p.name}</option>`)
   .join(
     "",
   )}</select></label><label id="chi-model-field" class="hidden">GOF null model<select id="chi-model"><option value="uniform">Four equally likely portals</option><option value="specified">Four specified probabilities</option><option value="binomial3">Number of wins · Binomial(3,p)</option></select></label><label>Nominal α<select id="chi-alpha"><option value="0.1">10%</option><option value="0.05" selected>5%</option><option value="0.01">1%</option></select></label><label id="chi-p-field" class="hidden">Externally specified p (q=0)<input id="chi-p" type="number" min="0" max="1" step="any" value="0.5"></label><label id="chi-fit-field" class="model-confirm hidden"><input id="chi-fit" type="checkbox"> Estimate Binomial p from these same counts (q=1)</label></div><p id="chi-null" class="mean-hypotheses"></p><p class="method-note">Synthetic independent observations, one mutually exclusive category per observation. Edit counts directly; expected counts and contributions update from the same data snapshot. No automatic category merging.</p><p id="chi-data-note" class="method-note" role="status"></p><div id="chi-inputs" class="table-scroll"></div><p id="chi-error" class="input-error" role="alert"></p><button id="chi-reveal" class="primary">Reveal expected counts & contributions →</button> <button id="chi-double" class="secondary">×2 counts · same proportions</button> <button id="chi-load-example" class="text-button">Load example counts</button></section>
 <section class="panel"><div class="section-heading"><div><span class="step-number">02</span><h2 id="chi-result-title">Observed → expected → contribution</h2></div></div><div id="chi-before" class="method-note">Predict expected counts before revealing. Under independence Eᵢⱼ = row total × column total / N. A large contribution means a large squared discrepancy relative to E.</div><div id="chi-output" class="answer-output hidden"><div id="chi-metrics" class="result-metrics"></div><div id="chi-expected" class="table-scroll"></div><p id="chi-decision" class="decision-box"></p><p id="chi-df" class="method-note"></p></div><p id="chi-validity" class="validity-note" role="status"></p></section>
 <section class="panel"><div class="section-heading"><div><span class="step-number">03</span><h2>Pool only meaningful categories <small>有意义合并</small></h2></div></div><p class="method-note">Combine adjacent whole categories only when the new label makes sense in the story. The same groups are used for O and E; original counts remain editable. Choosing a merger is a modelling decision, not a way to chase significance.</p><div class="inference-controls"><label id="chi-axis-field">Whole-category axis<select id="chi-axis"><option value="columns">Columns</option><option value="rows">Rows</option></select></label><label>Adjacent categories<select id="chi-merge-choice"></select></label><label><input id="chi-merge-confirm" type="checkbox"> This combined category has a defensible meaning</label><button id="chi-merge" class="secondary">Merge selected whole groups</button><button id="chi-unpool" class="text-button">Restore original categories</button></div><p id="chi-groups" class="method-note"></p><p id="chi-merge-note" role="status" class="method-note"></p></section>
 <section id="chi-permutation-panel" class="panel"><div class="section-heading"><div><span class="step-number">04</span><h2>Shuffle pairings, keep margins <small>条件置换</small></h2></div><span class="badge">CONDITIONAL RANDOMIZATION · ENRICHMENT</span></div><p class="method-note">Shuffle column labels among the existing row positions. Both margins stay fixed. This Monte Carlo null is conditional on the margins; it is separate from the asymptotic χ² reference. It can explore sparse tables without pretending the low-E asymptotic test is valid.</p><div class="inference-controls"><label>Seed<input id="chi-seed" value="labels-2026" maxlength="64"></label><button id="chi-shuffle" class="secondary">Shuffle once</button><button id="chi-run" class="secondary">Run +200 shuffles</button><button id="chi-pause" class="secondary" disabled>Pause</button><button id="chi-reset" class="text-button">Reset shuffles</button></div><p id="chi-permutation-result" class="answer-output" role="status"></p><div id="chi-shuffle-table" class="table-scroll"></div><p id="chi-permutation-limit" class="method-note"></p></section>
 <section class="transfer"><div><span class="eyebrow">TRANSFER</span><h3 id="chi-transfer-question">Does a small χ² p-value show a large or causal relationship?</h3></div><div><button data-chi-answer="yes">Yes, strength and causality follow</button><button data-chi-answer="no">No, check size and study design</button><p id="chi-transfer-feedback" role="status"></p></div></section>`;
  const $ = (s) => root.querySelector(s),
    $$ = (s) => [...root.querySelectorAll(s)];
  root.dataset.view = "all";
  const focusBar = document.createElement("div");
  focusBar.className = "projection-select";
  focusBar.innerHTML =
    '<label>Projection focus<select id="chi-view"><option value="all">All panels</option><option value="model">Observed data and prediction</option><option value="result">Expected counts and decision</option><option value="pool">Meaningful pooling</option><option value="repeat">Fixed-margin shuffles</option><option value="transfer">Transfer question</option></select></label>';
  root.prepend(focusBar);
  for (const [selector, stage] of [
    [".prediction", "model"],
    ["#chi-mode", "model"],
    ["#chi-result-title", "result"],
    ["#chi-axis", "pool"],
    ["#chi-permutation-panel", "repeat"],
    [".transfer", "transfer"],
  ]) {
    const el = $(selector),
      host = el.matches(".prediction,.transfer,#chi-permutation-panel")
        ? el
        : el.closest("section.panel");
    host.dataset.projection = stage;
  }
  $("#chi-view").onchange = (e) => {
    root.dataset.view = e.target.value;
  };
  $("#chi-result-title")
    .closest(".section-heading")
    .insertAdjacentHTML(
      "afterend",
      '<p id="chi-result-context" class="method-note"></p><button id="chi-reveal-result" class="secondary projection-reveal">Reveal expected counts</button>',
    );
  $("#chi-reveal-result").onclick = () => {
    state.revealed = true;
    render();
  };
  function pause() {
    state.running = false;
    state.token++;
    $("#chi-pause").disabled = true;
  }
  function clear() {
    pause();
    state.remaining = 0;
    state.records = [];
    state.lastShuffle = null;
    state.rng = seededRandom(state.seed);
    $("#chi-shuffle-table").innerHTML = "";
  }
  function labels() {
    return state.mode === "contingency"
      ? { rows: presets[state.preset].rows, cols: presets[state.preset].cols }
      : {
          rows: [],
          cols:
            $("#chi-model").value === "binomial3"
              ? ["0 wins", "1 win", "2 wins", "3 wins"]
              : ["North portal", "East portal", "South portal", "West portal"],
        };
  }
  const groupName = (g, names) => g.map((i) => names[i]).join(" + ");
  function saveCurrentInputs() {
    if (state.datasetKey) {
      const counts = $$("[data-chi-count]");
      if (counts.length)
        state.datasets[state.datasetKey] = counts.map((e) => e.value);
    }
    const probs = $$("[data-chi-prob]");
    if (probs.length) state.specifiedProbabilities = probs.map((e) => e.value);
  }
  function initialCounts(key) {
    return key === "gof:portals"
      ? ["8", "9", "10", "13"]
      : key === "gof:binomial3"
        ? ["12", "38", "36", "14"]
        : presets[key.slice("contingency:".length)].o.flat().map(String);
  }
  function contextName(key) {
    return key === "gof:portals"
      ? "four portal categories"
      : key === "gof:binomial3"
        ? "0–3 wins per three-trial experiment"
        : presets[key.slice("contingency:".length)]?.name || "synthetic counts";
  }
  function inputTable() {
    const l = labels(),
      saved = state.datasets[state.datasetKey];
    if (state.mode === "contingency") {
      const p = presets[state.preset];
      $("#chi-inputs").innerHTML =
        `<table class="observed-table"><caption>Original observed counts O · edit people, not probabilities</caption><thead><tr><th>Group / category</th>${l.cols.map((c) => `<th>${c}</th>`).join("")}<th>Row total</th></tr></thead><tbody>${p.o.map((r, i) => `<tr><th>${l.rows[i]}</th>${r.map((v, j) => `<td><input data-chi-count data-row="${i}" data-col="${j}" aria-label="Observed ${l.rows[i]}, ${l.cols[j]}" type="number" min="0" max="1000000" step="1" value="${saved[i * p.cols.length + j]}"></td>`).join("")}<td data-chi-row-total="${i}"></td></tr>`).join("")}</tbody><tfoot><tr><th>Column total</th>${l.cols.map((_, j) => `<td data-chi-col-total="${j}"></td>`).join("")}<td id="chi-total"></td></tr></tfoot></table>`;
    } else {
      const model = $("#chi-model").value,
        obs = [...saved],
        ps = [...state.specifiedProbabilities];
      $("#chi-inputs").innerHTML =
        `<table class="observed-table"><caption>Original GOF categories · specified probabilities must sum to1</caption><thead><tr><th>Category</th>${l.cols.map((x) => `<th>${x}</th>`).join("")}<th>Total</th></tr></thead><tbody><tr><th>Observed O</th>${obs.map((o, i) => `<td><input data-chi-count data-col="${i}" aria-label="Observed ${l.cols[i]}" type="number" min="0" max="1000000" step="1" value="${o}"></td>`).join("")}<td id="chi-total"></td></tr>${model === "specified" ? `<tr><th>Null probability</th>${ps.map((p, i) => `<td><input data-chi-prob aria-label="Specified probability ${l.cols[i]}" type="number" min="0" max="1" step="any" value="${p}"></td>`).join("")}<td id="chi-prob-total"></td></tr>` : ""}</tbody></table>`;
    }
    $$("[data-chi-count],[data-chi-prob]").forEach((el) =>
      el.addEventListener("input", () => {
        saveCurrentInputs();
        clear();
        render();
      }),
    );
  }
  function readInputs() {
    const els = $$("[data-chi-count]"),
      values = els.map((el) => {
        const s = el.value.trim(),
          v = Number(s);
        if (!s || !Number.isSafeInteger(v) || v < 0 || v > 1e6)
          throw new RangeError(
            "Each count must be a nonnegative integer≤1,000,000; empty is not zero.",
          );
        return v;
      });
    if (state.mode === "gof") return values;
    const p = presets[state.preset];
    return p.rows.map((_, i) =>
      p.cols.map((_, j) => values[i * p.cols.length + j]),
    );
  }
  function totals(o) {
    if (state.mode === "gof") {
      $("#chi-total").textContent = o.reduce((s, x) => s + x, 0);
      const ps = $$("[data-chi-prob]");
      if (ps.length)
        $("#chi-prob-total").textContent = number(
          ps.reduce((s, e) => s + Number(e.value), 0),
          6,
        );
      return;
    }
    o.forEach(
      (r, i) =>
        ($(`[data-chi-row-total="${i}"]`).textContent = r.reduce(
          (s, x) => s + x,
          0,
        )),
    );
    o[0].forEach(
      (_, j) =>
        ($(`[data-chi-col-total="${j}"]`).textContent = o.reduce(
          (s, r) => s + r[j],
          0,
        )),
    );
    $("#chi-total").textContent = o.flat().reduce((s, x) => s + x, 0);
  }
  function pooling() {
    const l = labels(),
      axis = $("#chi-axis").value,
      groups =
        state.mode === "gof"
          ? state.groups
          : axis === "rows"
            ? state.rows
            : state.cols,
      names = axis === "rows" && state.mode === "contingency" ? l.rows : l.cols,
      min = state.mode === "gof" ? 2 : 2,
      can = groups.length > min;
    const previous = $("#chi-merge-choice").value;
    $("#chi-merge-choice").innerHTML = can
      ? groups
          .slice(0, -1)
          .map(
            (g, i) =>
              `<option value="${i}">${groupName(g, names)} + ${groupName(groups[i + 1], names)}</option>`,
          )
          .join("")
      : '<option value="">At least two groups must remain</option>';
    if (previous && +previous < groups.length - 1)
      $("#chi-merge-choice").value = previous;
    else if (can && groups.length === 3) $("#chi-merge-choice").value = "1";
    $("#chi-merge").disabled = !can || !$("#chi-merge-confirm").checked;
    $("#chi-merge-choice").disabled = !can;
    $("#chi-groups").textContent =
      state.mode === "gof"
        ? `Current categories: ${state.groups.map((g) => groupName(g, l.cols)).join(" | ")}`
        : `Current rows: ${state.rows.map((g) => groupName(g, l.rows)).join(" | ")}. Columns: ${state.cols.map((g) => groupName(g, l.cols)).join(" | ")}.`;
  }
  function resultTable(r) {
    const l = labels(),
      names =
        state.mode === "gof"
          ? state.groups.map((g) => groupName(g, l.cols))
          : state.cols.map((g) => groupName(g, l.cols)),
      rowNames =
        state.mode === "gof"
          ? ["GOF categories"]
          : state.rows.map((g) => groupName(g, l.rows)),
      O = state.mode === "gof" ? [r.grouped] : r.grouped,
      E = state.mode === "gof" ? [r.expected] : r.expected,
      C = state.mode === "gof" ? [r.contributions] : r.contributions;
    $("#chi-expected").innerHTML =
      `<table class="expected-table"><caption>Every cell: observed O; expected E; Pearson contribution (O−E)²/E. Expected counts are not rounded before calculation.</caption><thead><tr><th>Current group</th>${names.map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${O.map((row, i) => `<tr><th>${rowNames[i]}</th>${row.map((o, j) => `<td class="${E[i][j] < 5 ? "low-expected" : ""}"><b>O ${number(o)}</b><span>E ${number(E[i][j], 5)}</span><small>contribution ${number(C[i][j], 6)}</small></td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }
  function permutationView() {
    const hidden = workedAnswersHidden(),
      R = state.records.length,
      r = state.result;
    $("#chi-pause").disabled = !state.running;
    $("#chi-run").textContent =
      state.remaining && !state.running
        ? `Continue ${state.remaining}`
        : "Run +200 shuffles";
    const enabled = state.mode === "contingency" && r?.valid && r.total <= 500;
    $("#chi-shuffle").disabled = !enabled || state.running || R >= 2000;
    $("#chi-run").disabled = !enabled || state.running || R >= 2000;
    $("#chi-permutation-limit").textContent = enabled
      ? "At most2000 shuffles. Label-multiset construction is limited to N≤500; the asymptotic count engine supports larger totals. Monte Carlo comparison uses χ² rounded to10 decimals for numerical ties."
      : "Conditional shuffling needs a valid positive-margin table with N≤500. No asymptotic conclusion is substituted.";
    if (!R) {
      $("#chi-permutation-result").textContent =
        "R=0. No conditional randomizations recorded.";
      return;
    }
    const b = state.records.filter(
        (x) => Math.round(x.statistic * 1e10) >= Math.round(r.statistic * 1e10),
      ).length,
      p = (b + 1) / (R + 1),
      se = Math.sqrt((p * (1 - p)) / (R + 1));
    $("#chi-permutation-result").textContent = hidden
      ? `R=${R}; worked randomization comparison concealed.`
      : `${R} conditional shuffles; ${b} have χ² at least as large as observed. Monte Carlo p=(b+1)/(R+1)=${probability(p)}; approximate Monte Carlo SE=${number(se, 5)}. Finite resolution1/${R + 1}; never a claim of exact p or p=0.`;
    if (state.lastShuffle) {
      const t = state.lastShuffle.table,
        l = labels();
      $("#chi-shuffle-table").innerHTML =
        `<table><caption>Latest shuffled counts · same row and column margins as the current observed table</caption><thead><tr><th>Group</th>${state.cols.map((g) => `<th>${groupName(g, l.cols)}</th>`).join("")}<th>Total</th></tr></thead><tbody>${t.map((row, i) => `<tr><th>${groupName(state.rows[i], l.rows)}</th>${row.map((o) => `<td>${o}</td>`).join("")}<td>${row.reduce((s, x) => s + x, 0)}</td></tr>`).join("")}</tbody><tfoot><tr><th>Total</th>${t[0].map((_, j) => `<td>${t.reduce((s, row) => s + row[j], 0)}</td>`).join("")}<td>${r.total}</td></tr></tfoot></table>`;
    }
  }
  function render() {
    state.mode = $("#chi-mode").value;
    const gof = state.mode === "gof",
      model = $("#chi-model").value;
    $("#chi-preset-field").classList.toggle("hidden", gof);
    $("#chi-model-field").classList.toggle("hidden", !gof);
    $("#chi-p-field").classList.toggle("hidden", !gof || model !== "binomial3");
    $("#chi-fit-field").classList.toggle(
      "hidden",
      !gof || model !== "binomial3",
    );
    $("#chi-axis-field").classList.toggle("hidden", gof);
    $("#chi-permutation-panel").classList.toggle("hidden", gof);
    $("#chi-p").disabled = $("#chi-fit").checked;
    pooling();
    const uniform = gof && model === "uniform";
    $("#chi-predict-question").textContent = uniform
      ? "Under this four-category uniform null, is each ORIGINAL category expected N/4 even when observed counts differ?"
      : gof
        ? "If the model probabilities differ, must all expected counts be equal?"
        : "If group sizes differ, must independence mean equal expected counts in every cell?";
    $$("[data-chi-predict]")[0].textContent = uniform
      ? "Yes, each E=N/4"
      : "Yes, every cell equal";
    $$("[data-chi-predict]")[1].textContent = uniform
      ? "No, follow the observed counts"
      : gof
        ? "No, probabilities matter"
        : "No, margins matter";
    $("#chi-predict-feedback").textContent = state.prediction
      ? workedAnswersHidden()
        ? "Choice recorded; worked explanation concealed."
        : uniform
          ? state.prediction === "yes"
            ? "Correct. The fixed uniform model assigns probability1/4 to each original category. Observed discrepancies do not redefine the null."
            : "Expected counts come from H₀, not by copying observed counts. Each original category has E=N/4."
          : state.prediction === "no"
            ? gof
              ? "Expected count is N×model probability; differing probabilities give different expected counts."
              : "Expected count uses both margins. Groups of10 and30 can have expected5,5 and15,15 under independence."
            : "Equal proportions do not imply equal raw counts; inspect the model probabilities or margins."
      : "";
    $("#chi-transfer-feedback").textContent = state.transfer
      ? workedAnswersHidden()
        ? "Choice recorded; explanation concealed."
        : state.transfer === "no"
          ? "Correct. A small p measures model discrepancy relative to sampling variation, not causal direction or effect magnitude. Larger N can make the same proportion difference more significant."
          : "Compare the same proportions at different N; study design and an effect-size description are still needed."
      : "";
    $("#chi-null").textContent = gof
      ? `H₀: the counts follow ${model === "uniform" ? "four equally probable categories" : model === "specified" ? "the four explicitly specified probabilities" : "a Binomial(3,p) model"}. H₁: the distribution differs.`
      : "H₀: the row and column variables are independent in the population. H₁: they are associated.";
    $("#chi-result-context").textContent = $("#chi-null").textContent;
    try {
      const o = readInputs();
      totals(o);
      let r;
      if (!gof)
        r = evaluateContingency(
          o,
          state.rows,
          state.cols,
          +$("#chi-alpha").value,
        );
      else {
        const probabilities = $$("[data-chi-prob]").map((e) => {
          if (!e.value.trim())
            throw new RangeError("Specify each probability; empty is invalid.");
          return Number(e.value);
        });
        const p = Number($("#chi-p").value);
        if (
          model === "binomial3" &&
          !$("#chi-fit").checked &&
          !$("#chi-p").value.trim()
        )
          throw new RangeError("Specify Binomial p.");
        r = evaluateGOF(o, {
          model,
          probabilities,
          p,
          fit: $("#chi-fit").checked,
          groups: state.groups,
          alpha: +$("#chi-alpha").value,
        });
      }
      state.result = r;
      $("#chi-error").textContent = "";
      $("#chi-reveal").disabled = !r.valid;
      $("#chi-output").classList.toggle("hidden", !state.revealed || !r.valid);
      $("#chi-before").classList.toggle("hidden", state.revealed && r.valid);
      if (!r.valid) {
        $("#chi-validity").textContent =
          `Inference unavailable: ${r.status}. N must be positive and every row/column margin positive. Remove an empty category explicitly in a redesigned table; do not divide by0.`;
        $("#chi-expected").innerHTML = "";
      } else {
        const unsupported =
          r.status === "unsupported-fitted-pooling-calibration";
        resultTable(r);
        $("#chi-metrics").innerHTML =
          `<div><span>PEARSON χ²</span><b>${number(r.statistic, 6)}</b></div><div><span>REFERENCE df</span><b>${unsupported ? "Not calibrated" : r.df}</b></div><div><span>ASYMPTOTIC p</span><b>${r.pValue === null ? "Withheld" : probability(r.pValue, r.pValue === 0 ? chiSquareTails(r.statistic, r.df).logUpper : undefined)}</b></div>`;
        $("#chi-validity").textContent = workedAnswersHidden()
          ? "Expected-frequency validity assessment concealed with worked results."
          : unsupported
            ? "Calibration unsupported: p was fitted from the original four classes before pooling. Even with every E≥5, the pooled statistic does not have the standard χ²(k′−2) reference assumed by a simple parameter count. p and the test decision are withheld. Restore original categories or use an independently specified model."
            : r.approximationAppropriate
              ? `All expected frequencies≥5 (minimum ${number(r.minExpected, 5)}). The χ² reference is still asymptotic; valid random sampling and model assumptions are required.`
              : `${r.smallExpectedCount} expected frequencies below5 (minimum ${number(r.minExpected, 5)}). Under this specification, combine meaningful categories before using the χ² approximation. The asymptotic p-value and reject/do-not-reject decision are withheld.`;
        $("#chi-validity").classList.toggle(
          "needs-pooling",
          !r.approximationAppropriate,
        );
        $("#chi-decision").textContent = unsupported
          ? "No calibrated standard χ² decision for this fitted-and-pooled GOF workflow. Descriptive O/E/contributions/statistic remain available. The contingency fixed-margin randomization is not a replacement GOF calibration."
          : r.pValue === null
            ? gof
              ? "No reliable asymptotic decision from this GOF table. Inspect meaningful category pooling; exact multinomial testing is not implemented here."
              : "No reliable asymptotic decision from this table. Inspect meaningful pooling or use the separately labelled conditional randomization exploration."
            : `${r.reject ? "Reject H₀: evidence of model discrepancy under the assumptions." : "Do not reject H₀: insufficient evidence of model discrepancy; H₀ is not proved."} α=${r.alpha}. The p-value is P(χ²≥observed statistic) under the reference model, not P(H₀).`;
        $("#chi-df").textContent = unsupported
          ? `Formal parameter counting gives k′−1−q=${state.groups.length}−1−1=${r.df}, but this is not an approved reference df for the current raw-data fit followed by pooling. No grouped-MLE/bootstrap calibration is implemented here.`
          : gof
            ? `df = k′−1−q = ${state.groups.length}−1−${r.fittedParameters} = ${r.df}. ${model === "binomial3" ? `p=${number(r.parameter, 6)}${r.fittedParameters ? " estimated from these unpooled original counts: q=1. Pooling this fitted workflow requires separately supported calibration." : " specified independently: q=0."}` : "No parameters fitted from these counts: q=0."}`
            : `df=(r−1)(c−1)=(${state.rows.length}−1)(${state.cols.length}−1)=${r.df}. Expected cell counts come from margins, not one separately fitted parameter per cell.`;
      }
      permutationView();
    } catch (e) {
      pause();
      state.result = null;
      $$("[data-chi-row-total],[data-chi-col-total],#chi-total").forEach(
        (e) => (e.textContent = "—"),
      );
      $("#chi-error").textContent = e.message;
      $("#chi-output").classList.add("hidden");
      $("#chi-expected").innerHTML = "";
      $("#chi-metrics").innerHTML = "";
      $("#chi-reveal").disabled = true;
      $("#chi-validity").textContent =
        "No valid inference. Correct the input/model or restore enough categories; probabilities are never silently normalized.";
      $("#chi-shuffle").disabled = true;
      $("#chi-run").disabled = true;
      $("#chi-permutation-result").textContent =
        "No valid conditional comparison.";
    }
  }
  function setup() {
    const previous = state.datasetKey;
    saveCurrentInputs();
    clear();
    state.revealed = false;
    state.prediction = null;
    state.mode = $("#chi-mode").value;
    state.preset = $("#chi-preset").value;
    const key =
      state.mode === "gof"
        ? $("#chi-model").value === "binomial3"
          ? "gof:binomial3"
          : "gof:portals"
        : "contingency:" + state.preset;
    state.datasetKey = key;
    if (!state.datasets[key]) state.datasets[key] = initialCounts(key);
    if (previous !== key) {
      const p = presets[state.preset];
      state.rows = identityGroups(p.rows.length);
      state.cols = identityGroups(p.cols.length);
      state.groups = identityGroups(4);
    }
    $("#chi-merge-confirm").checked = false;
    $("#chi-merge-note").textContent = "";
    inputTable();
    $("#chi-data-note").textContent = !previous
      ? `Initial synthetic observations: ${contextName(key)}. Observation counts are separate from the null model.`
      : previous === key
        ? "Null model changed; the same original observations and category groups are retained. Expected counts are recomputed under the new H₀."
        : `Changed data context to ${contextName(key)}. Its separately saved observations are shown; the previous data context is retained separately. Pooling is reset because the categories changed. This is not the same dataset under a different H₀.`;
    render();
  }
  function shuffle() {
    if (
      !state.result?.valid ||
      state.result.total > 500 ||
      state.records.length >= 2000
    )
      return;
    const table = fixedMarginShuffle(state.result.grouped, state.rng),
      r = contingencyTest(table);
    state.lastShuffle = { table, statistic: r.statistic };
    state.records.push({ statistic: r.statistic });
  }
  function run() {
    if (state.running || !state.result?.valid || state.result.total > 500)
      return;
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
      for (let i = 0; i < n; i++) shuffle();
      state.remaining -= n;
      if (!state.remaining) state.running = false;
      permutationView();
      if (state.running) requestAnimationFrame(tick);
    }
    permutationView();
    requestAnimationFrame(tick);
  }
  for (const id of ["#chi-mode", "#chi-preset", "#chi-model"])
    $(id).onchange = setup;
  for (const id of ["#chi-alpha", "#chi-fit", "#chi-p"])
    $(id).onchange = () => {
      clear();
      render();
    };
  $("#chi-axis").onchange = pooling;
  $("#chi-merge-confirm").onchange = pooling;
  $("#chi-merge").onclick = () => {
    if (!$("#chi-merge-confirm").checked) return;
    const i = Number($("#chi-merge-choice").value);
    if (state.mode === "gof") state.groups = mergeAdjacent(state.groups, i);
    else if ($("#chi-axis").value === "rows")
      state.rows = mergeAdjacent(state.rows, i);
    else state.cols = mergeAdjacent(state.cols, i);
    clear();
    $("#chi-merge-confirm").checked = false;
    $("#chi-merge-note").textContent =
      "Whole groups combined in both observed and expected tables. Original counts are preserved.";
    render();
  };
  $("#chi-unpool").onclick = () => {
    const p = presets[state.preset];
    state.rows = identityGroups(p.rows.length);
    state.cols = identityGroups(p.cols.length);
    state.groups = identityGroups(4);
    clear();
    render();
  };
  $("#chi-load-example").onclick = () => {
    const model = $("#chi-model").value;
    state.datasets[state.datasetKey] =
      state.mode === "gof" && model === "specified"
        ? ["12", "18", "30", "40"]
        : initialCounts(state.datasetKey);
    clear();
    state.revealed = false;
    inputTable();
    $("#chi-data-note").textContent =
      "Example observation counts explicitly loaded. Null-model parameters and current category grouping are unchanged.";
    render();
  };
  $("#chi-double").onclick = () => {
    try {
      readInputs();
      const inputs = $$("[data-chi-count]");
      if (inputs.some((e) => Number(e.value) > 5e5))
        throw new RangeError(
          "Doubling would exceed the per-cell display limit.",
        );
      inputs.forEach((e) => (e.value = 2 * Number(e.value)));
      saveCurrentInputs();
      clear();
      $("#chi-merge-note").textContent =
        "All original counts doubled. Proportions stay the same; compare χ² and its p-value.";
      render();
    } catch (e) {
      $("#chi-error").textContent = e.message;
    }
  };
  $("#chi-reveal").onclick = () => {
    state.revealed = true;
    render();
  };
  $("#chi-shuffle").onclick = () => {
    pause();
    shuffle();
    state.remaining = Math.min(state.remaining, 2000 - state.records.length);
    permutationView();
  };
  $("#chi-run").onclick = run;
  $("#chi-pause").onclick = () => {
    pause();
    permutationView();
  };
  $("#chi-reset").onclick = () => {
    clear();
    permutationView();
  };
  $("#chi-seed").onchange = () => {
    state.seed = $("#chi-seed").value || "labels-2026";
    $("#chi-seed").value = state.seed;
    clear();
    render();
  };
  $$("[data-chi-predict]").forEach(
    (b) =>
      (b.onclick = () => {
        state.prediction = b.dataset.chiPredict;
        render();
      }),
  );
  $$("[data-chi-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        state.transfer = b.dataset.chiAnswer;
        render();
      }),
  );
  setup();
  return {
    render,
    pause,
    getSnapshot: () => ({
      ...state,
      datasets: structuredClone(state.datasets),
      specifiedProbabilities: [...state.specifiedProbabilities],
      rng: undefined,
      rows: state.rows.map((g) => [...g]),
      cols: state.cols.map((g) => [...g]),
      groups: state.groups.map((g) => [...g]),
      records: state.records.map((x) => ({ ...x })),
      lastShuffle: state.lastShuffle
        ? structuredClone(state.lastShuffle)
        : null,
    }),
  };
}
