"use strict";

(function (root) {
  const WIDTH = 1000;
  const HEIGHT = 640;
  const GRAPH = { left: 490, right: 970, top: 76, bottom: 604, xMin: -5.2, xMax: 5.2, yMin: -5.2, yMax: 5.2 };
  const graphScaleX = Math.min((GRAPH.right - GRAPH.left) / (GRAPH.xMax - GRAPH.xMin), (GRAPH.bottom - GRAPH.top) / (GRAPH.yMax - GRAPH.yMin));
  const graphScaleY = graphScaleX;
  const graphUsedW = (GRAPH.xMax - GRAPH.xMin) * graphScaleX;
  const graphUsedH = (GRAPH.yMax - GRAPH.yMin) * graphScaleY;
  const graphOffsetX = GRAPH.left + ((GRAPH.right - GRAPH.left) - graphUsedW) / 2;
  const graphOffsetY = GRAPH.top + ((GRAPH.bottom - GRAPH.top) - graphUsedH) / 2;

  function toScreen(point) { return { x: graphOffsetX + (point.x - GRAPH.xMin) * graphScaleX, y: graphOffsetY + (GRAPH.yMax - point.y) * graphScaleY }; }
  function parabolaPoint(t) { return { x: t * t, y: 2 * t }; }
  function ellipsePoint(t) { return { x: 4 * Math.cos(t), y: 3 * Math.sin(t) }; }
  function hyperbolaPoint(u, branch = 1) { return { x: branch * 2 * Math.cosh(u), y: Math.sqrt(5) * Math.sinh(u) }; }
  function hyperbolaSecPoint(t) { return { x: 2 / Math.cos(t), y: Math.sqrt(5) * Math.tan(t) }; }
  function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function constructionValue(type, parameter, branch = 1) {
    if (type === "parabola") {
      const p = parabolaPoint(parameter);
      return { first: distance(p, { x: 1, y: 0 }), second: Math.abs(p.x + 1) };
    }
    if (type === "ellipse") {
      const p = ellipsePoint(parameter);
      return { first: distance(p, { x: -Math.sqrt(7), y: 0 }), second: distance(p, { x: Math.sqrt(7), y: 0 }) };
    }
    const p = hyperbolaPoint(parameter, branch);
    return { first: distance(p, { x: -3, y: 0 }), second: distance(p, { x: 3, y: 0 }) };
  }
  function tracePoints(type, progress, branch = 1, samples = 220) {
    const count = Math.max(2, Math.floor(samples * progress) + 1);
    if (type === "parabola") return Array.from({ length: count }, (_, i) => parabolaPoint(-2.2 + (4.4 * progress * i) / (count - 1)));
    if (type === "ellipse") return Array.from({ length: count }, (_, i) => ellipsePoint((2 * Math.PI * progress * i) / (count - 1)));
    return Array.from({ length: count }, (_, i) => hyperbolaPoint(-1.25 + (2.5 * progress * i) / (count - 1), branch));
  }

  const model = { graphScaleX, graphScaleY, toScreen, parabolaPoint, ellipsePoint, hyperbolaPoint, hyperbolaSecPoint, constructionValue, tracePoints };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const challenges = {
    parabola: {
      answer: "Parabola",
      construction: "PF=\\operatorname{dist}(P,\\,x=-1),\\quad F=(1,0)",
      equation: "y^2=4x",
      parameter: "x=t^2,\\quad y=2t",
      final: "\\text{focus-directrix}\\;\\Longleftrightarrow\\;y^2=4x"
    },
    ellipse: {
      answer: "Ellipse",
      construction: "PF_1+PF_2=8,\\quad F_{1,2}=(\\pm\\sqrt7,0)",
      equation: "\\frac{x^2}{16}+\\frac{y^2}{9}=1",
      parameter: "x=4\\cos t,\\quad y=3\\sin t",
      final: "\\text{fixed sum}\\;\\Longleftrightarrow\\;0<e<1"
    },
    hyperbola: {
      answer: "Hyperbola",
      construction: "|PF_1-PF_2|=4,\\quad F_{1,2}=(\\pm3,0)",
      equation: "\\frac{x^2}{4}-\\frac{y^2}{5}=1",
      parameter: "x=2\\sec t,\\quad y=\\sqrt5\\tan t",
      final: "\\text{fixed difference}\\;\\Longleftrightarrow\\;e>1"
    }
  };
  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const choices = Array.from(root.document.querySelectorAll(".choice-button"));
  const traceRange = $("trace-range");
  const roundSelect = $("round-select");
  const state = { step: 0, type: "parabola", progress: 0, choice: "", running: false, raf: 0 };
  const steps = [
    ["Hide the object", "One curve, four languages.", "Reveal the descriptions one at a time. The class must keep one geometric object in mind.", "Which representation gives the fastest identification?", "There may be different efficient routes.", "Reveal the geometric construction first."],
    ["Reveal the construction", "Start from a locus rule.", "No graph or curve name yet. Translate the distance condition into likely geometry.", "What does the rule keep invariant?", "A distance equality, sum, or absolute difference.", "Add the Cartesian language."],
    ["Reveal the equation", "The same object changes notation.", "Check that the equation is compatible with the construction rather than treating it as a new fact.", "Which coefficient or sign carries the family?", "Use structure, not a memorised picture alone.", "Add a moving-point description."],
    ["Reveal the parameter", "A point can now travel.", "The parametrisation must satisfy the Cartesian equation for every allowed parameter.", "How could you verify the match quickly?", "Substitute the parameter expressions.", "Collect a class prediction."],
    ["Name the object", "Commit before seeing the graph.", "Choose one family, or decide that the three clues do not match.", "Which curve do all three clues describe?", "A named family with one cross-check.", "Generate the graph as evidence."],
    ["Generate the graph", "Let the parameter draw the evidence.", "The trace is the fourth language. Pause anywhere to compare a partial path with the clues.", "Which earlier clue predicts this shape?", "Use both boundedness and symmetry.", "Reveal the common name."],
    ["Match all four", "The descriptions agree.", "Construction, equation, parametrisation, and graph now point to one geometric object.", "Which pair of languages converts most directly?", "Answers may differ if the conversion is justified.", "Compress the translations into one map."],
    ["Keep the language map", "Representation is a choice.", "The same curve can be generated, constrained, parameterised, or graphed. Choose the language that makes the next task easiest.", "Which language is best for tangents?", "Usually parametrisation or an equation suited to differentiation.", "Return to the next board problem."]
  ];

  function path(points) { return points.map((point, index) => { const p = toScreen(point); return `${index ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`; }).join(" "); }
  function graphGrid() {
    let out = `<rect x="${GRAPH.left}" y="${GRAPH.top}" width="${GRAPH.right - GRAPH.left}" height="${GRAPH.bottom - GRAPH.top}" fill="none" stroke="var(--rule)"/>`;
    for (let n = -4; n <= 4; n += 1) {
      const v1 = toScreen({ x: n, y: GRAPH.yMin }); const v2 = toScreen({ x: n, y: GRAPH.yMax }); const h1 = toScreen({ x: GRAPH.xMin, y: n }); const h2 = toScreen({ x: GRAPH.xMax, y: n });
      out += `<line class="${n === 0 ? "axis" : n % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${v1.x}" y1="${v1.y}" x2="${v2.x}" y2="${v2.y}"/><line class="${n === 0 ? "axis" : n % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${h1.x}" y1="${h1.y}" x2="${h2.x}" y2="${h2.y}"/>`;
    }
    return out + `<text class="panel-title" x="${GRAPH.left}" y="54">GENERATED GRAPH</text>`;
  }
  function cluePlate(id, y, label, visible, tex) {
    return `<text class="clue-label" x="40" y="${y - 12}">${label}</text><rect class="clue-plate${visible ? " is-live" : ""}" x="36" y="${y}" width="400" height="96" rx="4"/><foreignObject x="48" y="${y + 8}" width="376" height="80"><div xmlns="http://www.w3.org/1999/xhtml" id="${id}" class="svg-math${visible ? "" : " is-sealed"}">${visible ? "" : "sealed"}</div></foreignObject>`;
  }
  function renderMath(target, tex) { target.textContent = ""; if (root.katex) root.katex.render(tex, target, { throwOnError: false }); else target.textContent = tex; }
  function renderStage() {
    const challenge = challenges[state.type];
    let markup = graphGrid();
    markup += `<text class="panel-title" x="40" y="54">CHALLENGE ${state.type === "parabola" ? "A" : state.type === "ellipse" ? "B" : "C"}</text>`;
    markup += cluePlate("construction-card", 98, "CONSTRUCTION", state.step >= 1, challenge.construction);
    markup += cluePlate("equation-card", 224, "CARTESIAN EQUATION", state.step >= 2, challenge.equation);
    markup += cluePlate("parameter-card", 350, "PARAMETRISATION", state.step >= 3, challenge.parameter);
    if (state.step >= 5) {
      const progress = state.step >= 6 ? 1 : state.progress;
      markup += `<path class="locus-line" d="${path(tracePoints(state.type, progress, 1))}"/>`;
      if (state.type === "hyperbola") markup += `<path class="locus-line" d="${path(tracePoints(state.type, progress, -1))}"/>`;
      const active = tracePoints(state.type, progress, 1).at(-1); const p = toScreen(active);
      markup += `<circle class="moving-point" cx="${p.x}" cy="${p.y}" r="8"/><circle class="moving-core" cx="${p.x}" cy="${p.y}" r="3"/>`;
    }
    if (state.step >= 6) markup += `<rect class="answer-seal" x="82" y="500" width="306" height="72" rx="36"/><text class="answer-label" x="235" y="545" text-anchor="middle">${challenge.answer.toUpperCase()}</text>`;
    if (state.step >= 7) markup += `<text class="result-measure" x="500" y="625" text-anchor="middle">CONSTRUCTION ⇄ EQUATION ⇄ PARAMETER ⇄ GRAPH</text>`;
    svg.innerHTML = markup;
    if (root.katex) {
      if (state.step >= 1) renderMath($("construction-card"), challenge.construction);
      if (state.step >= 2) renderMath($("equation-card"), challenge.equation);
      if (state.step >= 3) renderMath($("parameter-card"), challenge.parameter);
    }
  }
  function updateLedger() {
    const item = steps[state.step]; const challenge = challenges[state.type];
    $("step-number").textContent = String(state.step + 1).padStart(2, "0"); $("step-title").textContent = item[0]; $("step-kicker").textContent = item[1]; $("step-description").textContent = item[2];
    $("cue-ask").textContent = item[3]; $("cue-look").textContent = item[4]; $("cue-watch").textContent = item[5];
    tabs.forEach((tab, index) => tab.toggleAttribute("aria-current", index === state.step));
    $("back-button").disabled = state.step === 0; $("next-button").disabled = state.step === 7; $("play-button").disabled = state.step !== 5; traceRange.disabled = state.step !== 5;
    $("trace-value").textContent = String(Math.round(state.progress * 100));
    const predicting = state.step === 4; $("prediction-panel").hidden = !predicting; $("feedback-line").hidden = !predicting || !state.choice;
    if (state.choice) $("feedback-line").textContent = state.choice === state.type ? "Keep one second representation ready as evidence." : "The graph will test whether the three descriptions truly agree.";
    const mathVisible = state.step >= 1 && !predicting;
    $("math-ledger").hidden = !mathVisible;
    if (mathVisible) {
      renderMath($("math-line-1"), challenge.construction);
      if (state.step >= 2) renderMath($("math-line-2"), challenge.equation); else $("math-line-2").textContent = "";
      if (state.step >= 6) renderMath($("math-line-3"), challenge.final); else if (state.step >= 3) renderMath($("math-line-3"), challenge.parameter); else $("math-line-3").textContent = "";
    }
    $("play-button").querySelector(".button-label").textContent = state.running ? "Pause" : "Play"; $("play-button").querySelector(".button-icon").textContent = state.running ? "Ⅱ" : "▶";
  }
  function render() { renderStage(); updateLedger(); }
  function stop() { state.running = false; if (state.raf) root.cancelAnimationFrame(state.raf); state.raf = 0; }
  function moveToStep(next) { stop(); state.step = Math.max(0, Math.min(7, next)); if (state.step < 5) state.progress = 0; if (state.step >= 6) state.progress = 1; render(); $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`; }
  function toggleAnimation() {
    if (state.step !== 5) return;
    if (state.running) { stop(); render(); return; }
    const start = state.progress >= 0.995 ? 0 : state.progress; const started = performance.now(); state.running = true;
    function frame(now) { if (!state.running) return; state.progress = start + (1 - start) * Math.min(1, (now - started) / 3000); render(); if (state.progress < 1) state.raf = root.requestAnimationFrame(frame); else { state.running = false; state.raf = 0; render(); } }
    state.raf = root.requestAnimationFrame(frame); updateLedger();
  }
  function reset() { stop(); state.step = 0; state.progress = 0; state.choice = ""; choices.forEach(button => button.setAttribute("aria-pressed", "false")); render(); }

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  choices.forEach(button => button.addEventListener("click", () => { state.choice = button.dataset.choice; choices.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button))); updateLedger(); }));
  traceRange.addEventListener("input", event => { stop(); state.progress = Number(event.target.value); render(); });
  roundSelect.addEventListener("change", event => { state.type = event.target.value; reset(); });
  $("reset-button").addEventListener("click", reset); $("back-button").addEventListener("click", () => moveToStep(state.step - 1)); $("next-button").addEventListener("click", () => moveToStep(state.step + 1)); $("play-button").addEventListener("click", toggleAnimation);
  root.document.addEventListener("keydown", event => {
    const tag = event.target && event.target.tagName; if (["INPUT", "BUTTON", "SELECT", "SUMMARY", "TEXTAREA"].includes(tag)) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); moveToStep(state.step - 1); } else if (event.key === "ArrowRight") { event.preventDefault(); moveToStep(state.step + 1); } else if (event.code === "Space") { event.preventDefault(); toggleAnimation(); } else if (event.key.toLowerCase() === "r") { event.preventDefault(); reset(); }
  });
  render();
})(typeof window !== "undefined" ? window : globalThis);
