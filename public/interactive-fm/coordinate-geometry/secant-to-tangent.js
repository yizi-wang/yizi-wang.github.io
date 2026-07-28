"use strict";

(function (root) {
  const WIDTH = 1000;
  const HEIGHT = 640;
  const WORLD = { xMin: -3.4, xMax: 7.2, yMin: -4.8, yMax: 5.8 };
  const PAD = { left: 70, right: 42, top: 78, bottom: 48 };
  const scaleX = Math.min((WIDTH - PAD.left - PAD.right) / (WORLD.xMax - WORLD.xMin), (HEIGHT - PAD.top - PAD.bottom) / (WORLD.yMax - WORLD.yMin));
  const scaleY = scaleX;
  const plotWidth = (WORLD.xMax - WORLD.xMin) * scaleX;
  const plotHeight = (WORLD.yMax - WORLD.yMin) * scaleY;
  const offsetX = PAD.left + ((WIDTH - PAD.left - PAD.right) - plotWidth) / 2;
  const offsetY = PAD.top + ((HEIGHT - PAD.top - PAD.bottom) - plotHeight) / 2;

  function pointAt(t) { return { x: t * t + 1, y: t * t * t }; }
  function derivativeAt(t) { return { dxdt: 2 * t, dydt: 3 * t * t, gradient: 3 * t / 2 }; }
  function secantData(t0, h) {
    const P = pointAt(t0);
    const Q = pointAt(t0 + h);
    const dx = Q.x - P.x;
    const dy = Q.y - P.y;
    return { P, Q, dx, dy, gradient: dy / dx };
  }
  function toScreen(point) {
    return {
      x: offsetX + (point.x - WORLD.xMin) * scaleX,
      y: offsetY + (WORLD.yMax - point.y) * scaleY
    };
  }
  function curvePoints(samples) {
    return Array.from({ length: samples + 1 }, (_, index) => pointAt(-1.6 + (3.35 * index) / samples));
  }
  function secantGradientFormula(h) { return (3 + 3 * h + h * h) / (2 + h); }

  const model = { WIDTH, HEIGHT, WORLD, scaleX, scaleY, pointAt, derivativeAt, secantData, toScreen, curvePoints, secantGradientFormula };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const choices = Array.from(root.document.querySelectorAll(".choice-button"));
  const hRange = $("h-range");
  const state = { step: 0, h: 0.75, running: false, raf: 0, choice: "" };

  const steps = [
    ["Prepare the plane", "A line needs two points.", "We will keep the axes at equal scale so the line angle and gradient agree visually.", "What must a coordinate plane preserve?", "Equal physical units on both axes.", "Introduce the parametric rule."],
    ["Name the curve", "One parameter moves both coordinates.", "Use x = t² + 1 and y = t³. The curve is generated before any tangent formula appears.", "How does one change in t affect the two coordinates?", "Both x and y change together.", "Fix one parameter value."],
    ["Fix the anchor", "Hold t₀ = 1.", "The anchor is P = (2, 1). It will not move while the second point approaches.", "Why must one point remain fixed?", "We are finding the tangent at a specified point.", "Add Q at t₀ + h."],
    ["Draw the secant", "Two curve points determine a line.", "Q uses parameter 1 + h. The orange line has gradient Δy/Δx.", "Which values define the secant gradient?", "Coordinate changes, not the parameter change alone.", "Pause for a prediction."],
    ["Predict the limit", "Do not calculate yet.", "As Q approaches P, decide which displayed quantity can settle to the tangent gradient.", "Which quantity approaches the tangent gradient?", "The ratio Δy/Δx.", "Collect a vote, then animate."],
    ["Let Q approach P", "Watch a quotient stabilise.", "Both Δx and Δy shrink towards zero, while their ratio approaches 1.5.", "What tends to zero, and what does not?", "Δx and Δy tend to zero; their ratio tends to 3/2.", "Connect the motion to derivatives."],
    ["Read the derivative", "The common Δt cancels in a ratio.", "At t = 1, dy/dx = (dy/dt)/(dx/dt) = 3/2.", "Why can we divide here?", "dx/dt = 2, so it is non-zero.", "Freeze the limiting line."],
    ["Freeze the tangent", "Motion becomes a board-ready result.", "The tangent at P = (2, 1) is y − 1 = 3/2(x − 2).", "What information defines the final line?", "A point and its tangent gradient.", "Return to point-gradient form on the board."]
  ];

  function f(value, digits = 2) {
    const rounded = Math.abs(value) < 0.0005 ? 0 : value;
    return rounded.toFixed(digits).replace(/\.00$/, "");
  }
  function path(points) {
    return points.map((point, index) => {
      const p = toScreen(point);
      return `${index ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");
  }
  function lineThrough(point, gradient, reach = 12) {
    return [{ x: point.x - reach, y: point.y - gradient * reach }, { x: point.x + reach, y: point.y + gradient * reach }];
  }
  function gridMarkup() {
    let out = "";
    for (let x = Math.ceil(WORLD.xMin); x <= Math.floor(WORLD.xMax); x += 1) {
      const a = toScreen({ x, y: WORLD.yMin });
      const b = toScreen({ x, y: WORLD.yMax });
      out += `<line class="${x === 0 ? "axis" : x % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
      if (x !== 0 && x >= -2 && x <= 6) out += `<text class="tick-label" x="${a.x}" y="${toScreen({ x: 0, y: 0 }).y + 24}" text-anchor="middle">${x}</text>`;
    }
    for (let y = Math.ceil(WORLD.yMin); y <= Math.floor(WORLD.yMax); y += 1) {
      const a = toScreen({ x: WORLD.xMin, y });
      const b = toScreen({ x: WORLD.xMax, y });
      out += `<line class="${y === 0 ? "axis" : y % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
      if (y !== 0 && y >= -4 && y <= 5) out += `<text class="tick-label" x="${toScreen({ x: 0, y: 0 }).x - 14}" y="${a.y + 5}" text-anchor="end">${y}</text>`;
    }
    const xAxis = toScreen({ x: WORLD.xMax, y: 0 });
    const yAxis = toScreen({ x: 0, y: WORLD.yMax });
    return out + `<text class="axis-label" x="${xAxis.x - 4}" y="${xAxis.y - 12}">x</text><text class="axis-label" x="${yAxis.x + 13}" y="${yAxis.y + 16}">y</text>`;
  }
  function pointMarkup(point, label, active = false, dx = 12, dy = -13) {
    const p = toScreen(point);
    return `<circle class="${active ? "moving-point" : "feature-marker"}" cx="${p.x}" cy="${p.y}" r="8"/><circle class="${active ? "moving-core" : ""}" cx="${p.x}" cy="${p.y}" r="3"/><text x="${p.x + dx}" y="${p.y + dy}">${label}</text>`;
  }
  function renderMath(target, tex) {
    target.textContent = "";
    if (root.katex) root.katex.render(tex, target, { throwOnError: false, displayMode: false });
    else target.textContent = tex;
  }
  function renderStage() {
    const data = secantData(1, state.h);
    let markup = gridMarkup();
    if (state.step >= 1) markup += `<path class="${state.step >= 7 ? "locus-line" : "secondary-locus"}" d="${path(curvePoints(220))}"/>`;
    if (state.step >= 1) markup += `<line class="telemetry-rule" x1="58" y1="54" x2="942" y2="54"/><text class="telemetry-label" x="70" y="35">PARAMETRIC RULE</text><text class="telemetry-value" x="250" y="35">x = t² + 1</text><text class="telemetry-value" x="420" y="35">y = t³</text>`;
    if (state.step >= 2) markup += pointMarkup(data.P, "P(2, 1)", false, 14, -15);
    if (state.step >= 3) {
      markup += `<path class="secant-line" d="${path(lineThrough(data.P, data.gradient))}"/>`;
      markup += pointMarkup(data.Q, `Q(t₀ + h)`, true, 14, -15);
      const q = toScreen(data.Q);
      const px = toScreen({ x: data.Q.x, y: data.P.y });
      const p = toScreen(data.P);
      markup += `<path class="projection-line" d="M${p.x},${p.y} L${px.x},${px.y} L${q.x},${q.y}"/>`;
      if (state.step >= 5) markup += `<text class="live-measure" x="690" y="92">h = ${f(state.h)}</text><text class="live-measure" x="690" y="117">Δy/Δx = ${f(data.gradient, 3)}</text>`;
    }
    if (state.step >= 6) {
      markup += `<path class="tangent-line" d="${path(lineThrough(data.P, 1.5))}"/>`;
      markup += `<text class="result-measure" x="690" y="143">limit = 3/2</text>`;
    }
    if (state.step >= 7) {
      const label = toScreen({ x: 4.5, y: 4.75 });
      markup += `<text class="result-measure" x="${label.x}" y="${label.y}" text-anchor="middle">tangent: y − 1 = 3/2(x − 2)</text>`;
    }
    svg.innerHTML = markup;
  }
  function updateLedger() {
    const item = steps[state.step];
    $("step-number").textContent = String(state.step + 1).padStart(2, "0");
    $("step-title").textContent = item[0];
    $("step-kicker").textContent = item[1];
    $("step-description").textContent = item[2];
    $("cue-ask").textContent = item[3];
    $("cue-look").textContent = item[4];
    $("cue-watch").textContent = item[5];
    tabs.forEach((tab, index) => tab.toggleAttribute("aria-current", index === state.step));
    $("back-button").disabled = state.step === 0;
    $("next-button").disabled = state.step === steps.length - 1;
    $("play-button").disabled = state.step < 5 || state.step > 6;
    hRange.disabled = state.step < 3;
    $("anchor-select").disabled = state.step < 2;
    $("h-value").textContent = f(state.h);
    const predictionVisible = state.step === 4;
    $("prediction-panel").hidden = !predictionVisible;
    $("feedback-line").hidden = !predictionVisible || !state.choice;
    if (state.choice) $("feedback-line").textContent = state.choice === "ratio" ? "Hold that thought. The animation will test the ratio." : "Watch whether that quantity tends to a useful non-zero limit.";
    const mathVisible = state.step >= 1 && state.step !== 4;
    $("math-ledger").hidden = !mathVisible;
    if (mathVisible) {
      const data = secantData(1, state.h);
      if (state.step < 3) {
        renderMath($("math-line-1"), "x=t^2+1,\\quad y=t^3");
        renderMath($("math-line-2"), state.step === 2 ? "P(2,1)\\text{ at }t_0=1" : "P(t)=(t^2+1,t^3)");
        $("math-line-3").textContent = "";
      } else if (state.step < 6) {
        renderMath($("math-line-1"), `\\Delta x=${f(data.dx, 3)},\\quad \\Delta y=${f(data.dy, 3)}`);
        renderMath($("math-line-2"), `m_{PQ}=\\frac{\\Delta y}{\\Delta x}=${f(data.gradient, 3)}`);
        renderMath($("math-line-3"), "h\\to0");
      } else {
        renderMath($("math-line-1"), "\\frac{dx}{dt}=2t,\\quad \\frac{dy}{dt}=3t^2");
        renderMath($("math-line-2"), "\\left.\\frac{dy}{dx}\\right|_{t=1}=\\frac{3}{2}");
        renderMath($("math-line-3"), state.step === 7 ? "y-1=\\frac32(x-2)" : "m_{PQ}\\longrightarrow\\frac32");
      }
    }
    $("play-button").querySelector(".button-label").textContent = state.running ? "Pause" : "Play";
    $("play-button").querySelector(".button-icon").textContent = state.running ? "Ⅱ" : "▶";
  }
  function render() { renderStage(); updateLedger(); }
  function stop() {
    state.running = false;
    if (state.raf) root.cancelAnimationFrame(state.raf);
    state.raf = 0;
  }
  function moveToStep(next) {
    stop();
    state.step = Math.max(0, Math.min(steps.length - 1, next));
    if (state.step < 5 && state.h < 0.2) state.h = 0.75;
    if (state.step === 7) state.h = 0.03;
    render();
    $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`;
  }
  function toggleAnimation() {
    if (state.step < 5 || state.step > 6) return;
    if (state.running) { stop(); render(); return; }
    const startH = state.h <= 0.05 ? 0.75 : state.h;
    const started = performance.now();
    state.running = true;
    function frame(now) {
      if (!state.running) return;
      const progress = Math.min(1, (now - started) / 2600);
      const eased = 1 - Math.pow(1 - progress, 3);
      state.h = startH + (0.03 - startH) * eased;
      render();
      if (progress < 1) state.raf = root.requestAnimationFrame(frame);
      else { state.running = false; state.raf = 0; render(); }
    }
    state.raf = root.requestAnimationFrame(frame);
    updateLedger();
  }
  function reset() {
    stop();
    state.step = 0;
    state.h = 0.75;
    state.choice = "";
    choices.forEach(button => button.setAttribute("aria-pressed", "false"));
    render();
  }

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  choices.forEach(button => button.addEventListener("click", () => {
    state.choice = button.dataset.choice;
    choices.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
    updateLedger();
  }));
  hRange.addEventListener("input", event => { stop(); state.h = Number(event.target.value); render(); });
  $("reset-button").addEventListener("click", reset);
  $("back-button").addEventListener("click", () => moveToStep(state.step - 1));
  $("next-button").addEventListener("click", () => moveToStep(state.step + 1));
  $("play-button").addEventListener("click", toggleAnimation);
  root.document.addEventListener("keydown", event => {
    const tag = event.target && event.target.tagName;
    if (["INPUT", "BUTTON", "SELECT", "SUMMARY", "TEXTAREA"].includes(tag)) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); moveToStep(state.step - 1); }
    else if (event.key === "ArrowRight") { event.preventDefault(); moveToStep(state.step + 1); }
    else if (event.code === "Space") { event.preventDefault(); toggleAnimation(); }
    else if (event.key.toLowerCase() === "r") { event.preventDefault(); reset(); }
  });
  render();
})(typeof window !== "undefined" ? window : globalThis);
