import { workedAnswersHidden } from "./visibility.js";
import {
  makeDemoPopulation,
  finitePopulationSummary,
  simpleRandomTheory,
  proportionalStratifiedTheory,
  systematicRandomStartTheory,
  simpleRandomSample,
  proportionalStratifiedSample,
  systematicRandomStartSample,
  quotaConvenienceSample,
  proportionalAllocation,
} from "./sampling-design.js";
import { number } from "./lab-ui.js";
const METHODS = {
  srs: {
    name: "Simple random · SRS",
    rule: "Every eligible subset of n distinct units has equal probability.",
    theory: simpleRandomTheory,
    sample: simpleRandomSample,
  },
  stratified: {
    name: "Proportional stratified",
    rule: "Random selection within strata; combine stratum means using population weights.",
    theory: proportionalStratifiedTheory,
    sample: proportionalStratifiedSample,
  },
  systematic: {
    name: "Systematic · random start",
    rule: "One uniform random start, then every kth frame position. Not every size-n subset is possible; this is not SRS. Order can change the spread.",
    theory: systematicRandomStartTheory,
    sample: systematicRandomStartSample,
  },
  quota: {
    name: "Quota · this convenience rule",
    rule: "Fill the same quotas using highest accessibility ranks within each stratum. This mechanism is not random.",
    theory: null,
    sample: quotaConvenienceSample,
  },
};
const colours = { Amber: "#f4cb83", Cobalt: "#8ebde9", Violet: "#c5a6f2" };
export function createSamplingDesignLab(root) {
  const state = {
    method: "srs",
    n: 6,
    order: "periodic",
    ranking: "given",
    values: "original",
    seed: "orbit-demo-1",
    records: [],
    selected: -1,
    unit: "A01",
    running: false,
    remaining: 0,
    token: 0,
    hiddenTruth: false,
    prediction: null,
    transfer: null,
    result: null,
    population: [],
    summary: null,
  };
  root.innerHTML = `<div class="projection-select"><label>Projection focus<select id="design-view"><option value="all">All panels</option><option value="model">Design and prediction</option><option value="frame">Finite frame identities</option><option value="sample">One sample and its estimate</option><option value="distribution">Repeated design estimates</option><option value="compare">Compare designs</option></select></label></div>
 <section class="prediction" data-design-stage="model"><div class="prediction-icon">?</div><div><span class="eyebrow">PREDICT → DEFINE HOW UNITS ARE CHOSEN</span><p id="design-predict-question"></p></div><div class="prediction-options"><button data-design-predict="yes">Yes</button><button data-design-predict="no">No</button></div><p id="design-predict-feedback" role="status"></p></section>
 <section class="panel" data-design-stage="model"><div class="section-heading"><div><span class="step-number">01</span><h2>A finite frame, not a card pool <small>有限总体 · 无放回</small></h2></div><span class="badge">S3 · SAMPLING METHODS</span></div><p class="method-note">Twelve entirely invented training profiles. Each ID is a distinct unit. No replacement within a sample; restore all12 units before the next sample. This is different from the IID with-replacement card lab.</p><div class="inference-controls"><label>Design<select id="design-method">${Object.entries(
   METHODS,
 )
   .map(([k, m]) => `<option value="${k}">${m.name}</option>`)
   .join(
     "",
   )}</select></label><label>Units per sample n<input id="design-n" type="number" min="1" max="12" step="1" value="6"></label><label>Same units · frame order<select id="design-order"><option value="periodic">Periodic lower/higher ordering</option><option value="balanced">Balanced ordering</option></select></label><label>Convenience ranks<select id="design-ranking"><option value="given">Given accessibility ranks</option><option value="reverse">Reverse the ranks</option></select></label><label>Target values<select id="design-values"><option value="original">Original task points</option><option value="constant">Every unit has42 points</option></select></label><label>Base seed<input id="design-seed" value="orbit-demo-1" maxlength="96"></label><button id="design-draw" class="primary">Draw one sample</button><button id="design-reset" class="text-button">Reset & repeat</button><label><input id="design-hide" type="checkbox"> Hide fixed truth</label></div><p id="design-rule" class="mean-hypotheses"></p><p id="design-status" class="input-error" role="status"></p><p id="design-notice" class="method-note" role="status"></p></section>
 <div class="finite-context"><span>FIXED N <b>12</b></span><span>FIXED POPULATION μ <b id="design-mu"></b></span><span>RULE BEFORE SAMPLING <b id="design-estimator-rule"></b></span><span id="design-cohort">R=0 samples</span></div>
 <section class="panel" data-design-stage="frame"><div class="section-heading"><div><span class="step-number">02</span><h2>Keep the identities <small>抽中标记</small></h2></div><span class="badge" id="design-frame-badge"></span></div><div id="design-frame" class="finite-frame" aria-label="All12 invented units in frame order"></div><p id="design-unit-detail" class="method-note" role="status"></p><p class="method-note">Green check marks mean “in the inspected sample”; they are not selection probabilities. Accessibility is a ranking score for the explicit convenience rule, not a response probability.</p></section>
 <section class="panel" data-design-stage="sample"><div class="section-heading"><div><span class="step-number">03</span><h2>One selection → one estimate <small>观察值与误差</small></h2></div><span id="design-sample-badge" class="badge">NO SAMPLE</span></div><p id="design-selected-ids" class="method-note"></p><div class="result-metrics answer-output"><div><span>OBSERVED ESTIMATE</span><b id="design-estimate">—</b></div><div><span>THIS REALIZATION'S ERROR</span><b id="design-error">—</b></div><div><span>KNOWN DESIGN SE</span><b id="design-se">—</b></div></div><p id="design-raw-mean" class="answer-output method-note"></p><p id="design-meaning" class="method-note"></p><div id="design-weights" class="table-scroll answer-output" tabindex="0" role="region" aria-label="Scrollable stratum means and population weights; stratum names stay visible"></div><p id="design-weighted-sum" class="phone-weighted-summary answer-output"></p><div class="case-inspector"><label>Inspect saved sample<input id="design-case" type="number" min="1" step="1" value="1" disabled></label><button id="design-trace" class="text-button" disabled>Trace this whole sample's point →</button></div><details id="design-algebra"><summary>Why this SE? · finite-population design support / enrichment</summary><p id="design-se-formula" class="answer-output method-note"></p><p class="method-note">These design standard errors use the entire known fictional population and all possibilities of the declared design. They are not estimated from the one observed sample. The finite-population correction is supplementary support; do not substitute the IID card formula.</p></details></section>
 <section class="panel" data-design-stage="distribution"><div class="section-heading"><div><span class="step-number">04</span><h2>Repeat the probability design</h2></div><span class="badge">RESTORE THE SAME12 UNITS EACH TIME</span></div><div class="inference-controls"><button id="design-run" class="secondary">Run +100 samples</button><button id="design-pause" class="secondary" disabled>Pause</button><p id="design-repeat-note" class="method-note"></p></div><div id="design-chart" class="finite-chart answer-output"></div><p id="design-empirical" class="answer-output method-note"></p><div id="design-starts" class="answer-output table-scroll"></div></section>
 <section class="panel" data-design-stage="compare"><div class="section-heading"><div><span class="step-number">05</span><h2>Same finite population, different designs</h2></div><span class="badge">THEORETICAL DESIGN SPREAD ≠ SINGLE-SAMPLE ERROR</span></div><div id="design-compare" class="table-scroll"></div><p class="method-note">A large error in one sample does not prove design bias. Systematic uniform random start remains design-unbiased for either fixed order here, while its variance changes. This one convenience mechanism can have negative, positive or zero error; no universal quota-bias theorem is claimed.</p></section>
 <section class="transfer" data-design-stage="compare"><div><span class="eyebrow">TRANSFER</span><h3>One random sample misses μ. Does that alone show the design is biased?</h3></div><div><button data-design-answer="yes">Yes, any miss proves bias</button><button data-design-answer="no">No, examine expectation across the design</button><p id="design-transfer-feedback" role="status"></p></div></section>`;
  const $ = (s) => root.querySelector(s),
    $$ = (s) => [...root.querySelectorAll(s)];
  root.dataset.view = "all";
  $("#design-view").onchange = (e) => {
    root.dataset.view = e.target.value;
    render();
  };
  function pause() {
    state.running = false;
    state.token++;
    $("#design-pause").disabled = true;
  }
  function reset(
    message = "Setup changed. Old samples cleared; the new cohort uses one design.",
  ) {
    pause();
    state.remaining = 0;
    state.records = [];
    state.selected = -1;
    state.result = null;
    state.notice = message;
  }
  function population(order = state.order) {
    let p = makeDemoPopulation(order);
    if (state.ranking === "reverse")
      p = p.map((u) => ({ ...u, accessibility: 1 - u.accessibility }));
    if (state.values === "constant") p = p.map((u) => ({ ...u, value: 42 }));
    return p;
  }
  function current() {
    return state.records[state.selected] ?? null;
  }
  function theory(method = state.method) {
    if (!METHODS[method].theory) return null;
    return METHODS[method].theory({ population: state.population, n: state.n });
  }
  function canRepeat() {
    return (
      state.valid &&
      state.method !== "quota" &&
      state.result &&
      state.result.status !== "unrepresented-stratum"
    );
  }
  function hiddenNumber(x) {
    return workedAnswersHidden()
      ? "Concealed"
      : x === null || x === undefined
        ? "Unavailable"
        : number(x, 4);
  }
  function frame() {
    const s = current(),
      selected = new Set(s?.selectedIds ?? []);
    $("#design-frame-badge").textContent =
      `${state.order} frame · ${selected.size}/${state.n} selected`;
    $("#design-frame").innerHTML = state.population
      .map(
        (u, i) =>
          `<button data-design-unit="${u.id}" class="finite-unit ${selected.has(u.id) ? "included" : ""} ${u.id === state.unit ? "inspected" : ""}" style="--unit-color:${colours[u.stratum]}" aria-label="Frame position ${i + 1}; ${u.id}, ${u.stratum}, ${u.value} task points; ${selected.has(u.id) ? "in inspected sample" : "not in inspected sample"}. Inspect unit."><span>${i + 1} · ${u.id}</span><b>${u.value}</b><small>${u.stratum}</small><em>${selected.has(u.id) ? "✓ IN SAMPLE" : "not selected"}</em></button>`,
      )
      .join("");
    $$("[data-design-unit]").forEach(
      (b) =>
        (b.onclick = () => {
          state.unit = b.dataset.designUnit;
          const focused = b === document.activeElement;
          frame();
          if (focused)
            $(`[data-design-unit="${state.unit}"]`)?.focus({
              preventScroll: true,
            });
        }),
    );
    const u =
      state.population.find((u) => u.id === state.unit) ?? state.population[0];
    $("#design-unit-detail").textContent =
      `Unit ${u.id}: ${u.value} points; ${u.stratum}; accessibility ranking score ${number(u.accessibility, 2)}; frame position ${state.population.indexOf(u) + 1}. ${selected.has(u.id) ? "Included in this saved sample." : "Outside this saved sample."}`;
  }
  function sample() {
    const s = current();
    $("#design-case").disabled = !state.records.length;
    $("#design-case").max = state.records.length || 1;
    $("#design-case").value = state.selected < 0 ? 1 : state.selected + 1;
    $("#design-trace").disabled =
      !s || s.estimate === null || state.method === "quota";
    $("#design-sample-badge").textContent = s
      ? state.method === "quota"
        ? "DETERMINISTIC SELECTION"
        : `SAMPLE#${state.selected + 1}`
      : "NO SAMPLE";
    $("#design-selected-ids").textContent = s
      ? `${s.sampleSize} distinct IDs: ${s.selectedIds.join(", ")}. No duplicate unit within this sample.`
      : "Draw one sample; original IDs and values will be retained.";
    $("#design-estimate").textContent = s ? hiddenNumber(s.estimate) : "—";
    $("#design-error").textContent = state.hiddenTruth
      ? "Truth concealed"
      : s
        ? hiddenNumber(s.error)
        : "—";
    $("#design-se").textContent =
      state.method === "quota"
        ? "Unavailable"
        : hiddenNumber(state.result?.standardError);
    const weighted = state.method === "stratified" || state.method === "quota";
    $("#design-raw-mean").textContent = s
      ? `Raw unweighted sample mean = ${hiddenNumber(s.sampleMean)}.${weighted ? " The target estimator uses population weights." : ""}`
      : "No observed mean yet.";
    $("#design-meaning").textContent =
      state.method === "quota"
        ? "This convenience rule is deterministic, not a probability design. Its observed error describes this mechanism and these values, not a universal bias of quota sampling."
        : state.result?.status === "unrepresented-stratum"
          ? `The allocation omits ${state.result.unrepresentedStrata?.join(", ")}. Random draws occur only inside represented strata; the full-population estimate and SE are unavailable. No missing mean is filled with0 or reweighted away.`
          : "Design SE uses the full known fictional population, not this sample.";
    $("#design-weights").innerHTML = "";
    $("#design-weighted-sum").textContent = "";
    if (weighted && state.valid) {
      const plan =
          state.method === "quota"
            ? proportionalAllocation({
                population: state.population,
                n: state.n,
              })
            : state.result,
        parts = s?.stratumEstimates ?? [];
      $("#design-weights").innerHTML =
        `<table><caption>Population weights Wₕ=Nₕ/N remain fixed after integer quota rounding.</caption><thead><tr><th scope="col">Stratum</th><th scope="col">Nₕ</th><th scope="col">Population Wₕ</th><th scope="col">Sample nₕ</th><th scope="col">Sample nₕ/n</th><th scope="col">Observed meanₕ</th><th scope="col">Wₕ×meanₕ</th></tr></thead><tbody>${plan.allocations
          .map((a) => {
            const d = parts.find((d) => d.stratum === a.stratum);
            return `<tr><th scope="row">${a.stratum}</th><td>${a.N}</td><td>${number(a.weight, 4)}</td><td>${a.quota}</td><td>${number(a.quota / state.n, 4)}</td><td>${d?.sampleMean == null ? "Unavailable" : hiddenNumber(d.sampleMean)}</td><td>${d?.sampleMean == null ? "Unavailable" : hiddenNumber(a.weight * d.sampleMean)}</td></tr>`;
          })
          .join("")}</tbody></table>`;
      $("#design-weighted-sum").textContent = workedAnswersHidden()
        ? "Population-weighted calculation concealed."
        : !s
          ? "Draw a sample to inspect its population-weighted calculation."
          : s.estimate === null
            ? "Full-population weighted estimate unavailable: at least one stratum is missing. No missing mean is replaced by0."
            : `Population weights: ${plan.allocations.map((a) => {
                const d = parts.find((d) => d.stratum === a.stratum);
                return `${a.stratum} (${a.N}/${state.summary.N})×${number(d.sampleMean, 4)}`;
              }).join(" + ")} ≈ ${number(s.estimate, 4)}. Displayed means may be rounded; the estimate uses unrounded means.`;
    }
    $("#design-se-formula").textContent =
      state.method === "srs"
        ? `Known-population S²=sum(x−μ)²/(N−1). Var(T)=(N−n)/N × S²/n; N=${state.summary.N},n=${state.n},S²=${state.hiddenTruth ? "concealed" : hiddenNumber(state.summary.varianceNMinus1)}. The theoretical SE=${hiddenNumber(state.result?.standardError)}.`
        : state.method === "stratified"
          ? "Var(T)=Σ Wₕ² (Nₕ−nₕ)/Nₕ × Sₕ²/nₕ, provided every stratum is represented. Wₕ uses population proportions; integer sample proportions can differ."
          : state.method === "systematic"
            ? "The exact design variance is the probability-weighted variance of means across every possible uniform random start of this fixed frame. It is not the SRS or IID variance formula."
            : "This convenience selection has no probability-design SE in this module. Repeating a deterministic rule does not create a probability sampling design.";
  }
  function compare() {
    const hidden = workedAnswersHidden();
    $("#design-compare").innerHTML =
      `<table><caption>Theory from the known12-unit population. Select a design to start a separate cohort.</caption><thead><tr><th>Design</th><th>Design E(T)</th><th>Known design SE</th><th>Qualification</th></tr></thead><tbody>${Object.entries(
        METHODS,
      )
        .map(([key, m]) => {
          let t = null,
            error = "";
          try {
            t = theory(key);
          } catch (e) {
            error = e.message;
          }
          return `<tr class="${key === state.method ? "current-design" : ""}"><th><button data-choose-design="${key}" class="text-button">${m.name}</button></th><td class="answer-output">${state.hiddenTruth ? "Truth concealed" : hiddenNumber(t?.expectedMean)}</td><td class="answer-output">${hiddenNumber(t?.standardError)}</td><td>${key === "quota" ? "This deterministic mechanism: no probability SE or design-unbiasedness claim." : error || t?.status === "unrepresented-stratum" ? error || "Missing stratum: full-target estimation unavailable." : "Design-unbiased under the stated random mechanism; one error need not be0."}</td></tr>`;
        })
        .join("")}</tbody></table>`;
    $$("[data-choose-design]").forEach(
      (b) =>
        (b.onclick = () => {
          $("#design-method").value = b.dataset.chooseDesign;
          $("#design-method").dispatchEvent(new Event("change"));
        }),
    );
  }
  function chart() {
    const host = $("#design-chart"),
      valid = state.records
        .map((s, i) => ({ s, i }))
        .filter(({ s }) => s.estimate !== null),
      R = valid.length;
    if (state.method === "quota") {
      host.innerHTML =
        '<p class="method-note">No probability sampling distribution is plotted for this deterministic convenience rule.</p>';
      return;
    }
    if (!R) {
      host.innerHTML =
        '<p class="method-note">No defined full-population estimates recorded yet.</p>';
      return;
    }
    let min = Math.min(...state.population.map((u) => u.value)),
      max = Math.max(...state.population.map((u) => u.value));
    if (min === max) {
      min -= 1;
      max += 1;
    }
    const w = Math.max(280, host.clientWidth),
      L = 42,
      Rx = w - 16,
      T = 25,
      B = 145,
      h = 244,
      bins = 12,
      counts = Array(bins).fill(0),
      X = (x) => L + ((x - min) / (max - min)) * (Rx - L);
    for (const { s } of valid)
      counts[
        Math.min(
          bins - 1,
          Math.floor(((s.estimate - min) / (max - min)) * bins),
        )
      ]++;
    const peak = Math.min(1, (Math.max(...counts) / R) * 1.1),
      Y = (p) => B - (p / peak) * (B - T);
    let svg = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Finite empirical distribution of defined design estimates; frequency bars above, original saved samples below."><text x="${L}" y="12" fill="#adc2d7" font-size="11">RELATIVE FREQUENCY PER BIN</text>`;
    for (let i = 0; i <= 3; i++) {
      const p = (peak * i) / 3;
      svg += `<line x1="${L}" x2="${Rx}" y1="${Y(p)}" y2="${Y(p)}" stroke="#2a3e53" stroke-dasharray="2 4"/><text x="${L - 5}" y="${Y(p) + 3}" text-anchor="end" fill="#a4b8d0" font-size="10">${number(p * 100, 1)}%</text>`;
    }
    counts.forEach((count, j) => {
      if (count)
        svg += `<rect class="design-bin" data-count="${count}" data-proportion="${count / R}" x="${L + (j * (Rx - L)) / bins + 1}" y="${Y(count / R)}" width="${(Rx - L) / bins - 2}" height="${B - Y(count / R)}" fill="#9de4c3" opacity=".55"/>`;
    });
    for (let j = 0; j <= 4; j++) {
      const v = min + ((max - min) * j) / 4;
      svg += `<text x="${X(v)}" y="${B + 18}" text-anchor="middle" fill="#adc2d7" font-size="10">${number(v, 1)}</text>`;
    }
    if (!state.hiddenTruth)
      svg += `<line x1="${X(state.summary.mean)}" x2="${X(state.summary.mean)}" y1="${T}" y2="${B}" stroke="#f1cb87" stroke-dasharray="4 4"/><text x="${X(state.summary.mean) + 4}" y="${T + 12}" fill="#f1cb87" font-size="11">fixed μ</text>`;
    svg += `<text x="${L}" y="184" fill="#b7cce0" font-size="10">SAVED SAMPLES · ONE DOT = ONE SAMPLE</text><rect x="${L}" y="191" width="${Rx - L}" height="27" fill="#1a2b3d" rx="4"/>`;
    valid.forEach(({ s, i }, j) => {
      svg += `<circle class="design-dot" data-design-case="${i}" role="button" tabindex="${state.selected === i ? 0 : -1}" aria-label="Saved sample ${i + 1}; inspect its ${state.n} original units" cx="${X(s.estimate)}" cy="${198 + (j % 3) * 6}" r="${state.selected === i ? 4 : 2.5}" fill="${state.selected === i ? "#f5d38e" : "#a8e7cd"}"/>`;
    });
    svg += `<text x="${(L + Rx) / 2}" y="239" text-anchor="middle" fill="#a9bfd5" font-size="11">estimate · task points</text></svg>`;
    host.innerHTML = svg;
    $$("[data-design-case]").forEach((el) => {
      el.onclick = () => select(+el.dataset.designCase);
      el.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(+el.dataset.designCase);
          $(`[data-design-case="${state.selected}"]`)?.focus();
        }
      };
    });
  }
  function repetitions() {
    const valid = state.records.filter((s) => s.estimate !== null),
      s = current();
    $("#design-cohort").textContent =
      state.method === "quota"
        ? s
          ? "ONE DETERMINISTIC SELECTION"
          : "NO PROBABILITY REPETITIONS"
        : `R=${state.records.length} samples · ${valid.length} defined estimates`;
    $("#design-empirical").textContent =
      state.method === "quota"
        ? "No finite simulation average or probability SE is assigned to this deterministic mechanism."
        : valid.length
          ? `Finite empirical mean of ${valid.length} design estimates = ${hiddenNumber(valid.reduce((a, s) => a + s.estimate, 0) / valid.length)}. This need not equal the exact design expectation after finite R. Dot height only separates samples and is not probability. The x-axis uses the full population-value range for every n. No Normal approximation is overlaid.`
          : "No empirical mean of defined target estimates yet.";
    $("#design-repeat-note").textContent =
      state.method === "quota"
        ? "This rule returns the same units for unchanged ranks. Reverse the accessibility ranking or change target values to explore this mechanism; no probability batch is run. The base seed has no effect on this deterministic rule."
        : state.result?.status === "unrepresented-stratum"
          ? "A stratum is missing. Draw once to inspect the problem; a full-target sampling-distribution batch is unavailable."
          : `Each replication uses seed “${state.seed}|${state.method}|r”, where r is its1-based repetition number. Batch/single actions share this reproducible sequence. At most1000 samples.`;
    $("#design-draw").disabled =
      state.running ||
      !state.valid ||
      (state.method !== "quota" && state.records.length >= 1000);
    $("#design-draw").textContent =
      state.method === "quota"
        ? "Apply this convenience rule"
        : "Draw one sample";
    $("#design-run").disabled =
      state.running || !canRepeat() || state.records.length >= 1000;
    $("#design-run").textContent =
      state.remaining && !state.running
        ? `Continue ${state.remaining}`
        : "Run +100 samples";
    $("#design-pause").disabled = !state.running;
    $("#design-starts").innerHTML = "";
    if (state.method === "systematic" && state.result) {
      const t = state.result;
      $("#design-starts").innerHTML =
        `<details ${document.body.classList.contains("teacher") ? "" : "open"}><summary>Exact possible starts · interval k=${t.interval}</summary><table><caption>All starts have probability1/${t.interval}; frame order can change these means, but their probability-weighted expectation remains μ.</caption><thead><tr><th>First position</th><th>Original IDs in selection</th><th>Mean</th><th>Probability</th></tr></thead><tbody>${t.possibleStarts.map((a) => `<tr><td>${a.start + 1}</td><td>${a.indices.map((i) => state.population[i].id).join(", ")}</td><td>${hiddenNumber(a.mean)}</td><td>${number(a.probability, 4)}</td></tr>`).join("")}</tbody></table></details>`;
    }
  }
  function predictions() {
    let q =
        "Can the same unit ID appear twice within one SRS sample without replacement?",
      correct = "no",
      explanation =
        "Correct. IDs are distinct within each sample; all12 units are restored before the next repetition.";
    if (!state.valid) {
      q =
        "Choose a supported n and design before predicting the behaviour of this experiment.";
      explanation = "Correct the current setup first.";
    } else if (state.method === "systematic") {
      const a = systematicRandomStartTheory({
          population: population("periodic"),
          n: state.n,
        }),
        b = systematicRandomStartTheory({
          population: population("balanced"),
          n: state.n,
        }),
        different =
          Math.abs(a.variance - b.variance) >
          1e-10 * Math.max(1, a.variance, b.variance);
      q = `At n=${state.n}, do these periodic and balanced frame orders have different design SEs?`;
      correct = different ? "yes" : "no";
      explanation = `${different ? "Yes, the order changes the spread here." : "No, these two orders give the same spread at this setting."} Periodic SE=${number(a.standardError, 4)}; balanced SE=${number(b.standardError, 4)}. The same12 values and population mean are retained. Uniform random-start sampling remains design-unbiased for either fixed order.`;
    } else if (state.method === "stratified") {
      const t = state.result;
      if (t.status === "unrepresented-stratum") {
        q =
          "A stratum has quota0. Can the raw sample mean substitute for a full-population estimate?";
        correct = "no";
        explanation = `Correct. ${t.unrepresentedStrata.join(", ")} is not represented. No full-target estimate or design SE is assigned, and no missing stratum is silently given mean0.`;
      } else if (t.exactProportions) {
        q = `At n=${state.n}, do the sample quota proportions happen to equal the population weights?`;
        correct = "yes";
        explanation = `Yes for this allocation: quotas ${t.allocations.map((a) => a.quota).join("/")} are exactly proportional. The rule still uses population weights Nₕ/N; this equality need not survive a change to n.`;
      } else {
        q = `At n=${state.n}, should the estimator retain population weights instead of using the rounded sample proportions?`;
        correct = "yes";
        explanation = `Yes. Quotas ${t.allocations.map((a) => a.quota).join("/")} have sample proportions ${t.allocations.map((a) => number(a.quota / state.n, 4)).join("/")}, while population weights remain ${t.allocations.map((a) => number(a.weight, 4)).join("/")}. Inspect the weighted estimate and the raw mean separately.`;
      }
    } else if (state.method === "quota") {
      q =
        "Does repeating this deterministic convenience rule turn it into a probability sample?";
      explanation =
        "Correct. An unchanged deterministic rule selects the same units, with no probability-design SE. Zero error for a census or constant targets does not change the selection mechanism.";
    }
    $("#design-predict-question").textContent = q;
    $$("[data-design-predict]").forEach((b) => (b.disabled = !state.valid));
    $("#design-predict-feedback").textContent = state.prediction
      ? workedAnswersHidden()
        ? "Prediction recorded; worked explanation concealed."
        : state.prediction === correct
          ? explanation
          : "Inspect this setting’s actual mechanism, IDs, allocation and theoretical spread. Compare designs rather than judging one realized error."
      : "";
    $("#design-transfer-feedback").textContent = state.transfer
      ? workedAnswersHidden()
        ? "Choice recorded; explanation concealed."
        : state.transfer === "no"
          ? "Correct. Design bias compares E(T) with μ over all selections allowed by the mechanism, not one realized error."
          : "One miss is a realization. Compare the probability-weighted design expectation before calling the design biased."
      : "";
  }
  function render() {
    $("#design-seed").disabled = state.method === "quota";
    state.valid = false;
    state.population = population();
    $("#design-notice").textContent = state.notice || "";
    state.summary = finitePopulationSummary(state.population);
    $("#design-mu").textContent = state.hiddenTruth
      ? "Concealed"
      : number(state.summary.mean, 4);
    $("#design-estimator-rule").textContent =
      `${METHODS[state.method].name}, n=${state.n}: ` +
      (["stratified", "quota"].includes(state.method)
        ? "Σ(Nₕ/N) × meanₕ"
        : "mean of distinct selected units");
    $("#design-rule").textContent = METHODS[state.method].rule;
    try {
      if (!Number.isSafeInteger(state.n) || state.n < 1 || state.n > 12)
        throw new RangeError("Use integer n from1 to12.");
      state.result = theory();
      state.valid = true;
      if (state.method === "quota") state.result = null;
      $("#design-status").textContent =
        state.method === "quota"
          ? "This deterministic mechanism has no probability-design SE."
          : state.result.status === "unrepresented-stratum"
            ? `Unrepresented: ${state.result.unrepresentedStrata.join(", ")}. Full-target estimate/SE unavailable.`
            : "";
    } catch (e) {
      state.result = null;
      $("#design-status").textContent = e.message;
    }
    frame();
    sample();
    compare();
    chart();
    repetitions();
    predictions();
  }
  function add() {
    if (!state.valid) return false;
    state.notice =
      "Sample identities are preserved; the full frame is restored for every new probability draw.";
    if (state.method !== "quota" && state.records.length >= 1000) return false;
    const seed = `${state.seed}|${state.method}|${state.records.length + 1}`,
      s = METHODS[state.method].sample({
        population: state.population,
        n: state.n,
        seed,
      });
    const { theory: sharedTheory, ...record } = s;
    if (state.method === "quota") {
      state.records = [record];
      state.selected = 0;
    } else {
      state.records.push(record);
      state.selected = state.records.length - 1;
    }
    return true;
  }
  function draw() {
    pause();
    try {
      add();
      state.remaining = Math.min(state.remaining, 1000 - state.records.length);
      render();
    } catch (e) {
      $("#design-status").textContent = e.message;
    }
  }
  function select(i) {
    if (i < 0 || i >= state.records.length) return;
    state.selected = i;
    render();
  }
  function run() {
    if (state.running || !canRepeat()) return;
    state.remaining = Math.min(
      state.remaining || 100,
      1000 - state.records.length,
    );
    if (!state.remaining) return;
    state.running = true;
    const token = ++state.token;
    function tick() {
      if (token !== state.token || !state.running) return;
      const k = Math.min(5, state.remaining, 1000 - state.records.length);
      try {
        for (let i = 0; i < k; i++) add();
        state.remaining -= k;
        if (!state.remaining) state.running = false;
        render();
        if (state.running) requestAnimationFrame(tick);
      } catch (e) {
        pause();
        $("#design-status").textContent = e.message;
      }
    }
    repetitions();
    requestAnimationFrame(tick);
  }
  for (const [id, key] of [
    ["#design-method", "method"],
    ["#design-order", "order"],
    ["#design-ranking", "ranking"],
    ["#design-values", "values"],
  ])
    $(id).onchange = (e) => {
      state[key] = e.target.value;
      state.prediction = null;
      reset();
      render();
    };
  $("#design-n").onchange = (e) => {
    state.n = Number(e.target.value);
    state.prediction = null;
    reset();
    render();
  };
  $("#design-seed").onchange = (e) => {
    state.seed = e.target.value.trim() || "orbit-demo-1";
    e.target.value = state.seed;
    reset();
    render();
  };
  $("#design-hide").onchange = (e) => {
    state.hiddenTruth = e.target.checked;
    render();
  };
  $("#design-draw").onclick = draw;
  $("#design-run").onclick = run;
  $("#design-pause").onclick = () => {
    pause();
    render();
  };
  $("#design-reset").onclick = () => {
    reset();
    render();
  };
  $("#design-case").onchange = (e) => {
    const i = Number(e.target.value) - 1;
    if (Number.isInteger(i)) select(i);
  };
  $("#design-trace").onclick = () => {
    if (document.body.classList.contains("teacher")) {
      root.dataset.view = "distribution";
      $("#design-view").value = "distribution";
    }
    render();
    $("#design-chart").scrollIntoView({ block: "center", behavior: "instant" });
    if (!workedAnswersHidden())
      $(`[data-design-case="${state.selected}"]`)?.focus({
        preventScroll: true,
      });
    else $("#design-view").focus();
  };
  $$("[data-design-predict]").forEach(
    (b) =>
      (b.onclick = () => {
        state.prediction = b.dataset.designPredict;
        predictions();
      }),
  );
  $$("[data-design-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        state.transfer = b.dataset.designAnswer;
        predictions();
      }),
  );
  render();
  return {
    render,
    pause,
    getSnapshot: () => ({
      ...state,
      population: state.population.map((u) => ({ ...u })),
      records: state.records.map((s) => structuredClone(s)),
      result: state.result ? structuredClone(state.result) : null,
    }),
  };
}
