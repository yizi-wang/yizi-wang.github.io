"use strict";

(function (root) {
  const WIDTH = 1000;
  const HEIGHT = 640;
  const WORLD = { xMin: -7.2, xMax: 7.2, yMin: -7.2, yMax: 7.2 };
  const PAD = { left: 58, right: 36, top: 82, bottom: 46 };
  const scaleX = Math.min((WIDTH - PAD.left - PAD.right) / (WORLD.xMax - WORLD.xMin), (HEIGHT - PAD.top - PAD.bottom) / (WORLD.yMax - WORLD.yMin));
  const scaleY = scaleX;
  const usedW = (WORLD.xMax - WORLD.xMin) * scaleX;
  const usedH = (WORLD.yMax - WORLD.yMin) * scaleY;
  const offsetX = PAD.left + ((WIDTH - PAD.left - PAD.right) - usedW) / 2;
  const offsetY = PAD.top + ((HEIGHT - PAD.top - PAD.bottom) - usedH) / 2;

  function features(type, a, b) {
    if (type === "ellipse" && !(a > b && b > 0)) throw new Error("Ellipse requires a > b > 0");
    if (type === "hyperbola" && !(a > 0 && b > 0)) throw new Error("Hyperbola requires a,b > 0");
    const c = Math.sqrt(type === "ellipse" ? a * a - b * b : a * a + b * b);
    const e = c / a;
    return { type, a, b, c, e, directrix: a / e };
  }
  function pointAt(type, a, b, parameter, branch = 1) {
    return type === "ellipse"
      ? { x: a * Math.cos(parameter), y: b * Math.sin(parameter) }
      : { x: branch * a * Math.cosh(parameter), y: b * Math.sinh(parameter) };
  }
  function toScreen(point) { return { x: offsetX + (point.x - WORLD.xMin) * scaleX, y: offsetY + (WORLD.yMax - point.y) * scaleY }; }
  function locusPoints(type, a, b, branch = 1, samples = 240) {
    if (type === "ellipse") return Array.from({ length: samples + 1 }, (_, i) => pointAt(type, a, b, (2 * Math.PI * i) / samples));
    return Array.from({ length: samples + 1 }, (_, i) => pointAt(type, a, b, -1.4 + (2.8 * i) / samples, branch)).filter(p => Math.abs(p.x) <= WORLD.xMax && Math.abs(p.y) <= WORLD.yMax);
  }
  function focusDirectrixRatio(type, a, b, parameter) {
    const info = features(type, a, b);
    const p = pointAt(type, a, b, parameter, 1);
    const focusDistance = Math.hypot(p.x - info.c, p.y);
    const directrixDistance = Math.abs(p.x - info.directrix);
    return focusDistance / directrixDistance;
  }

  const model = { WIDTH, HEIGHT, WORLD, scaleX, scaleY, features, pointAt, toScreen, locusPoints, focusDirectrixRatio };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const choices = Array.from(root.document.querySelectorAll(".choice-button"));
  const aRange = $("a-range");
  const bRange = $("b-range");
  const familySelect = $("family-select");
  const state = { step: 0, type: "ellipse", a: 5, b: 3, choice: "" };
  const steps = [
    ["Choose a family", "The sign is structural.", "Start with the standard form, then build every visible feature from a and b.", "What does the sign between the squared terms decide?", "Closed ellipse versus open hyperbola.", "Read a and b before calculating c."],
    ["Read the semi-axes", "Denominators become lengths.", "The positive square roots a and b set the horizontal and vertical scales.", "Why do we take positive square roots?", "a and b are geometric lengths.", "Draw the curve from those lengths."],
    ["Draw the conic", "The form now becomes a shape.", "Keep equal screen scale while a and b reshape the curve.", "Which parameter controls horizontal reach?", "a controls the x-axis vertices.", "Mark the vertices explicitly."],
    ["Mark the vertices", "Read visible anchors first.", "The horizontal vertices are (±a, 0). An ellipse also has co-vertices (0, ±b).", "Which markers survive for a hyperbola?", "Only the real transverse-axis vertices (±a, 0).", "Calculate c next."],
    ["Calculate the foci", "One sign changes the c-relation.", "Ellipse: c² = a² − b². Hyperbola: c² = a² + b².", "Where must each focus lie?", "Inside ellipse vertices; beyond hyperbola vertices.", "Predict how b moves them."],
    ["Predict a parameter change", "Hold a fixed; increase b.", "Decide the direction of focus motion before touching the b control.", "Where do the foci move?", "Ellipse inward; hyperbola outward.", "Test the prediction with the slider."],
    ["Add the guides", "Eccentricity places the directrices.", "Both families use e = c/a and x = ±a/e. Hyperbolas also reveal y = ±(b/a)x.", "Which family has e greater than 1?", "The hyperbola.", "Collect every feature in one summary."],
    ["Read the whole form", "The equation is now a map.", "Vertices, foci, directrices, eccentricity, and asymptotes all come from a and b.", "Which calculation should come first in an exam?", "Identify a² and b², then find c².", "Return to a compact comparison table."]
  ];

  function f(value, digits = 2) { return value.toFixed(digits).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1"); }
  function path(points) {
    return points.map((point, index) => { const p = toScreen(point); return `${index ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`; }).join(" ");
  }
  function gridMarkup() {
    let out = "";
    for (let n = -6; n <= 6; n += 1) {
      const v1 = toScreen({ x: n, y: WORLD.yMin }); const v2 = toScreen({ x: n, y: WORLD.yMax });
      const h1 = toScreen({ x: WORLD.xMin, y: n }); const h2 = toScreen({ x: WORLD.xMax, y: n });
      out += `<line class="${n === 0 ? "axis" : n % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${v1.x}" y1="${v1.y}" x2="${v2.x}" y2="${v2.y}"/><line class="${n === 0 ? "axis" : n % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${h1.x}" y1="${h1.y}" x2="${h2.x}" y2="${h2.y}"/>`;
      if (n !== 0 && n % 2 === 0) out += `<text class="tick-label" x="${v1.x}" y="${toScreen({ x: 0, y: 0 }).y + 23}" text-anchor="middle">${n}</text><text class="tick-label" x="${toScreen({ x: 0, y: 0 }).x - 12}" y="${h1.y + 5}" text-anchor="end">${n}</text>`;
    }
    return out;
  }
  function marker(point, label, focus = false, dx = 11, dy = -11) {
    const p = toScreen(point);
    return `<circle class="feature-marker${focus ? " is-focus" : ""}" cx="${p.x}" cy="${p.y}" r="7"/><text x="${p.x + dx}" y="${p.y + dy}">${label}</text>`;
  }
  function renderMath(target, tex) { target.textContent = ""; if (root.katex) root.katex.render(tex, target, { throwOnError: false }); else target.textContent = tex; }
  function standardTex(info) {
    const sign = info.type === "ellipse" ? "+" : "-";
    return `\\frac{x^2}{${f(info.a * info.a, 1)}}${sign}\\frac{y^2}{${f(info.b * info.b, 1)}}=1`;
  }
  function renderStage() {
    const info = features(state.type, state.a, state.b);
    const origin = toScreen({ x: 0, y: 0 });
    let markup = gridMarkup();
    markup += `<line class="telemetry-rule" x1="56" y1="54" x2="944" y2="54"/><text class="telemetry-label" x="70" y="35">FAMILY</text><text class="telemetry-value" x="155" y="35">${state.type.toUpperCase()}</text><text class="telemetry-label" x="355" y="35">a</text><text class="telemetry-value" x="380" y="35">${f(info.a)}</text><text class="telemetry-label" x="470" y="35">b</text><text class="telemetry-value" x="495" y="35">${f(info.b)}</text><text class="telemetry-label" x="585" y="35">c</text><text class="telemetry-value" x="610" y="35">${f(info.c)}</text><text class="telemetry-label" x="715" y="35">e</text><text class="telemetry-value" x="740" y="35">${f(info.e, 3)}</text>`;
    if (state.step >= 1) {
      const pa = toScreen({ x: info.a, y: 0 }); const pb = toScreen({ x: 0, y: info.b });
      markup += `<line class="construction-line" x1="${origin.x}" y1="${origin.y}" x2="${pa.x}" y2="${pa.y}"/><line class="construction-line" x1="${origin.x}" y1="${origin.y}" x2="${pb.x}" y2="${pb.y}"/><text class="live-measure" x="${(origin.x + pa.x) / 2}" y="${origin.y - 13}" text-anchor="middle">a = ${f(info.a)}</text><text class="live-measure" x="${origin.x + 13}" y="${(origin.y + pb.y) / 2}" >b = ${f(info.b)}</text>`;
    }
    if (state.step >= 2) {
      markup += `<path class="locus-line" d="${path(locusPoints(state.type, info.a, info.b, 1))}"/>`;
      if (state.type === "hyperbola") markup += `<path class="locus-line" d="${path(locusPoints(state.type, info.a, info.b, -1))}"/>`;
    }
    if (state.step >= 3) {
      markup += marker({ x: info.a, y: 0 }, `(a, 0)`) + marker({ x: -info.a, y: 0 }, `(−a, 0)`, false, -73, -11);
      if (state.type === "ellipse") markup += marker({ x: 0, y: info.b }, `(0, b)`, false, 11, -10) + marker({ x: 0, y: -info.b }, `(0, −b)`, false, 11, 22);
    }
    if (state.step >= 4) markup += marker({ x: info.c, y: 0 }, "F₂", true, 9, 24) + marker({ x: -info.c, y: 0 }, "F₁", true, -35, 24);
    if (state.step >= 6) {
      for (const x of [-info.directrix, info.directrix]) {
        const a = toScreen({ x, y: WORLD.yMin }); const b = toScreen({ x, y: WORLD.yMax });
        markup += `<line class="directrix-line" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/><text class="panel-title" x="${a.x + (x < 0 ? -8 : 8)}" y="92" text-anchor="${x < 0 ? "end" : "start"}">x = ${f(x)}</text>`;
      }
      if (state.type === "hyperbola") {
        for (const slope of [-info.b / info.a, info.b / info.a]) markup += `<path class="asymptote-line" d="${path([{ x: WORLD.xMin, y: slope * WORLD.xMin }, { x: WORLD.xMax, y: slope * WORLD.xMax }])}"/>`;
      }
    }
    if (state.step >= 7) markup += `<text class="result-measure" x="500" y="617" text-anchor="middle">${state.type === "ellipse" ? "c² = a² − b² · 0 < e < 1 · no asymptotes" : "c² = a² + b² · e > 1 · y = ±(b/a)x"}</text>`;
    svg.innerHTML = markup;
  }
  function correctPrediction() { return state.type === "ellipse" ? "inward" : "outward"; }
  function updateLedger() {
    const item = steps[state.step]; const info = features(state.type, state.a, state.b);
    $("step-number").textContent = String(state.step + 1).padStart(2, "0"); $("step-title").textContent = item[0]; $("step-kicker").textContent = item[1]; $("step-description").textContent = item[2];
    $("cue-ask").textContent = item[3]; $("cue-look").textContent = item[4]; $("cue-watch").textContent = item[5];
    tabs.forEach((tab, index) => tab.toggleAttribute("aria-current", index === state.step));
    $("back-button").disabled = state.step === 0; $("next-button").disabled = state.step === 7; $("play-button").disabled = true;
    aRange.disabled = state.step < 1; bRange.disabled = state.step < 1;
    $("a-value").textContent = f(state.a, 1); $("b-value").textContent = f(state.b, 1);
    const predicting = state.step === 5;
    $("prediction-panel").hidden = !predicting;
    $("prediction-question").textContent = `For this ${state.type}, if b increases while a stays fixed, where do the foci move?`;
    $("feedback-line").hidden = !predicting || !state.choice;
    if (state.choice) $("feedback-line").textContent = state.choice === correctPrediction() ? "Keep the sign of c² ready to justify that prediction." : "Check the sign in the c² relation before moving the slider.";
    const mathVisible = state.step !== 5;
    $("math-ledger").hidden = !mathVisible;
    if (mathVisible) {
      renderMath($("math-line-1"), standardTex(info));
      if (state.step < 4) {
        renderMath($("math-line-2"), state.type === "ellipse" ? `(\\pm ${f(info.a)},0),\\ (0,\\pm ${f(info.b)})` : `(\\pm ${f(info.a)},0)`);
        renderMath($("math-line-3"), state.step >= 2 ? `\\text{${state.type}}` : `a=${f(info.a)},\\ b=${f(info.b)}`);
      } else {
        renderMath($("math-line-2"), state.type === "ellipse" ? `c=\\sqrt{a^2-b^2}=${f(info.c)}` : `c=\\sqrt{a^2+b^2}=${f(info.c)}`);
        renderMath($("math-line-3"), state.step >= 6 ? `e=${f(info.e, 3)},\\quad x=\\pm${f(info.directrix)}` : `F=(\\pm${f(info.c)},0)`);
      }
    }
  }
  function render() { renderStage(); updateLedger(); }
  function moveToStep(next) { state.step = Math.max(0, Math.min(7, next)); render(); $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`; }
  function syncParameters(changed) {
    if (state.type === "ellipse") {
      if (changed === "a" && state.b >= state.a) state.b = Math.max(1, state.a - 0.2);
      bRange.max = String(Math.min(4.8, state.a - 0.2));
      if (state.b > Number(bRange.max)) state.b = Number(bRange.max);
    } else bRange.max = "4.8";
    aRange.value = String(state.a); bRange.value = String(state.b); render();
  }
  function reset() { state.step = 0; state.type = "ellipse"; state.a = 5; state.b = 3; state.choice = ""; familySelect.value = state.type; choices.forEach(button => button.setAttribute("aria-pressed", "false")); syncParameters(); }

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  choices.forEach(button => button.addEventListener("click", () => { state.choice = button.dataset.choice; choices.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button))); updateLedger(); }));
  familySelect.addEventListener("change", event => { state.type = event.target.value; state.choice = ""; choices.forEach(button => button.setAttribute("aria-pressed", "false")); syncParameters("family"); });
  aRange.addEventListener("input", event => { state.a = Number(event.target.value); syncParameters("a"); });
  bRange.addEventListener("input", event => { state.b = Number(event.target.value); syncParameters("b"); });
  $("reset-button").addEventListener("click", reset); $("back-button").addEventListener("click", () => moveToStep(state.step - 1)); $("next-button").addEventListener("click", () => moveToStep(state.step + 1));
  root.document.addEventListener("keydown", event => {
    const tag = event.target && event.target.tagName; if (["INPUT", "BUTTON", "SELECT", "SUMMARY", "TEXTAREA"].includes(tag)) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); moveToStep(state.step - 1); } else if (event.key === "ArrowRight") { event.preventDefault(); moveToStep(state.step + 1); } else if (event.key.toLowerCase() === "r") { event.preventDefault(); reset(); }
  });
  syncParameters();
})(typeof window !== "undefined" ? window : globalThis);
