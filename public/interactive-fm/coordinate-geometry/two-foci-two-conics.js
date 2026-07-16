"use strict";

(function (root) {
  const c = 3;
  const ellipseA = 5;
  const ellipseB = 4;
  const hyperbolaA = 2;
  const hyperbolaB = Math.sqrt(5);
  const WIDTH = 1000;
  const HEIGHT = 640;
  const WORLD = { xMin: -5.45, xMax: 5.45, yMin: -5.05, yMax: 5.05 };
  const PANEL = { width: 500, left: 28, right: 18, top: 82, bottom: 42 };
  const scaleX = Math.min((PANEL.width - PANEL.left - PANEL.right) / (WORLD.xMax - WORLD.xMin), (HEIGHT - PANEL.top - PANEL.bottom) / (WORLD.yMax - WORLD.yMin));
  const scaleY = scaleX;
  const usedW = (WORLD.xMax - WORLD.xMin) * scaleX;
  const usedH = (WORLD.yMax - WORLD.yMin) * scaleY;

  function toScreen(point, panelIndex) {
    const panelStart = panelIndex * PANEL.width;
    const offsetX = panelStart + PANEL.left + ((PANEL.width - PANEL.left - PANEL.right) - usedW) / 2;
    const offsetY = PANEL.top + ((HEIGHT - PANEL.top - PANEL.bottom) - usedH) / 2;
    return { x: offsetX + (point.x - WORLD.xMin) * scaleX, y: offsetY + (WORLD.yMax - point.y) * scaleY };
  }
  function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function ellipsePoint(theta) { return { x: ellipseA * Math.cos(theta), y: ellipseB * Math.sin(theta) }; }
  function hyperbolaPoint(u, branch = 1) { return { x: branch * hyperbolaA * Math.cosh(u), y: hyperbolaB * Math.sinh(u) }; }
  function ellipseInvariant(theta) {
    const p = ellipsePoint(theta);
    return distance(p, { x: -c, y: 0 }) + distance(p, { x: c, y: 0 });
  }
  function hyperbolaInvariant(u, branch = 1) {
    const p = hyperbolaPoint(u, branch);
    return Math.abs(distance(p, { x: -c, y: 0 }) - distance(p, { x: c, y: 0 }));
  }
  function ellipseTrace(progress, samples = 220) {
    const count = Math.max(2, Math.floor(samples * progress) + 1);
    return Array.from({ length: count }, (_, i) => ellipsePoint((2 * Math.PI * progress * i) / (count - 1)));
  }
  function hyperbolaTrace(progress, branch = 1, samples = 160) {
    const start = -1.45;
    const end = start + 2.9 * progress;
    const count = Math.max(2, Math.floor(samples * progress) + 1);
    return Array.from({ length: count }, (_, i) => hyperbolaPoint(start + ((end - start) * i) / (count - 1), branch));
  }

  function animatedHyperbolaTrace(progress, samples = 160) {
    return hyperbolaTrace(progress, 1, samples);
  }

  function reflectedHyperbolaTrace(samples = 160) {
    return hyperbolaTrace(1, -1, samples);
  }

  const model = { c, ellipseA, ellipseB, hyperbolaA, hyperbolaB, scaleX, scaleY, toScreen, distance, ellipsePoint, hyperbolaPoint, ellipseInvariant, hyperbolaInvariant, ellipseTrace, hyperbolaTrace, animatedHyperbolaTrace, reflectedHyperbolaTrace };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const choices = Array.from(root.document.querySelectorAll(".choice-button"));
  const progressRange = $("progress-range");
  const state = { step: 0, progress: 0.18, running: false, raf: 0, choice: "" };
  const steps = [
    ["Place two foci", "Keep the fixed points identical.", "Both panels use F₁ = (−3, 0) and F₂ = (3, 0). Only the distance rule will change.", "What is unchanged between the panels?", "The same two foci.", "Introduce the first constraint."],
    ["Impose a fixed sum", "Spend a total distance of 10.", "On the left, every valid point satisfies PF₁ + PF₂ = 10.", "Why can P not escape arbitrarily far?", "The total distance budget is bounded.", "Generate a few positions."],
    ["Move the ellipse point", "The string rule stays taut.", "Drag the construction position and check that the two changing lengths still add to 10.", "What remains invariant while P moves?", "The sum of the two focal distances.", "Now change the operation."],
    ["Impose a fixed difference", "Keep a distance imbalance of 4.", "On the right, every valid point satisfies |PF₁ − PF₂| = 4.", "Can both focal distances grow together?", "Yes. Their difference can stay fixed.", "Predict boundedness before tracing."],
    ["Predict the shapes", "One rule closes; one opens.", "Vote before either complete locus is shown.", "Which rule produces a closed curve?", "The fixed sum.", "Run both generators together."],
    ["Generate one branch", "A continuous path cannot jump the gap.", "The ellipse closes in one pass. The hyperbola point stays on the right branch throughout the animation.", "Can this moving point cross to the other branch?", "No. There are no hyperbola points between the two vertices.", "Finish the right branch, then use symmetry."],
    ["Reflect, do not jump", "The second branch is a new construction step.", "The moving point has generated one connected branch. Reflecting x to −x supplies the other branch without pretending the point crossed the gap.", "Why does the left branch also satisfy the rule?", "The absolute distance difference is unchanged by reflection in the y-axis.", "Freeze the complete two-branch locus."],
    ["Freeze the full loci", "Generation and symmetry stay distinguishable.", "The solid right branch was traced by the moving point; the left branch was then added by symmetry. Together they satisfy the standard hyperbola equation.", "Why is c placed differently relative to a?", "Ellipse: c < a. Hyperbola: c > a.", "Return to c² = a² ∓ b²."]
  ];

  function f(value) { return value.toFixed(2).replace(/\.00$/, ""); }
  function path(points, panel) {
    return points.map((point, index) => {
      const p = toScreen(point, panel);
      return `${index ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");
  }
  function axes(panel) {
    const x1 = toScreen({ x: WORLD.xMin, y: 0 }, panel);
    const x2 = toScreen({ x: WORLD.xMax, y: 0 }, panel);
    const y1 = toScreen({ x: 0, y: WORLD.yMin }, panel);
    const y2 = toScreen({ x: 0, y: WORLD.yMax }, panel);
    let out = `<line class="axis" x1="${x1.x}" y1="${x1.y}" x2="${x2.x}" y2="${x2.y}"/><line class="axis" x1="${y1.x}" y1="${y1.y}" x2="${y2.x}" y2="${y2.y}"/>`;
    for (let n = -4; n <= 4; n += 2) {
      if (n === 0) continue;
      const vx1 = toScreen({ x: n, y: WORLD.yMin }, panel);
      const vx2 = toScreen({ x: n, y: WORLD.yMax }, panel);
      const hy1 = toScreen({ x: WORLD.xMin, y: n }, panel);
      const hy2 = toScreen({ x: WORLD.xMax, y: n }, panel);
      out += `<line class="major-grid" x1="${vx1.x}" y1="${vx1.y}" x2="${vx2.x}" y2="${vx2.y}"/><line class="major-grid" x1="${hy1.x}" y1="${hy1.y}" x2="${hy2.x}" y2="${hy2.y}"/>`;
    }
    return out;
  }
  function point(pointValue, panel, label, active) {
    const p = toScreen(pointValue, panel);
    return `<circle class="${active ? "moving-point" : "feature-marker is-focus"}" cx="${p.x}" cy="${p.y}" r="${active ? 8 : 7}"/>${active ? `<circle class="moving-core" cx="${p.x}" cy="${p.y}" r="3"/>` : ""}<text x="${p.x + 11}" y="${p.y - 12}">${label}</text>`;
  }
  function focalSegments(pointValue, panel) {
    const p = toScreen(pointValue, panel);
    const f1 = toScreen({ x: -c, y: 0 }, panel);
    const f2 = toScreen({ x: c, y: 0 }, panel);
    return `<line class="distance-line" x1="${p.x}" y1="${p.y}" x2="${f1.x}" y2="${f1.y}"/><line class="distance-line" x1="${p.x}" y1="${p.y}" x2="${f2.x}" y2="${f2.y}"/>`;
  }
  function renderMath(target, tex) {
    target.textContent = "";
    if (root.katex) root.katex.render(tex, target, { throwOnError: false });
    else target.textContent = tex;
  }
  function renderStage() {
    const theta = 2 * Math.PI * state.progress;
    const u = -1.45 + 2.9 * state.progress;
    const ep = ellipsePoint(theta);
    const hp = hyperbolaPoint(u, 1);
    let markup = `${axes(0)}${axes(1)}<line class="panel-divider" x1="500" y1="20" x2="500" y2="620"/><text class="panel-title" x="42" y="44">FIXED SUM</text><text class="panel-title" x="542" y="44">FIXED DIFFERENCE</text>`;
    for (const panel of [0, 1]) {
      markup += point({ x: -c, y: 0 }, panel, "F₁", false) + point({ x: c, y: 0 }, panel, "F₂", false);
    }
    if (state.step >= 1) markup += focalSegments(ep, 0) + point(ep, 0, "P", true) + `<text class="live-measure" x="42" y="70">PF₁ + PF₂ = ${f(ellipseInvariant(theta))}</text>`;
    if (state.step >= 2 && state.step < 5) markup += `<path class="locus-preview" d="${path(ellipseTrace(Math.max(state.progress, 0.03)), 0)}"/>`;
    if (state.step >= 3) markup += focalSegments(hp, 1) + point(hp, 1, "P", true) + `<text class="live-measure" x="542" y="70">|PF₁ − PF₂| = ${f(hyperbolaInvariant(u))}</text>`;
    if (state.step >= 5) {
      const progress = state.step === 7 ? 1 : state.progress;
      markup += `<path class="locus-line" d="${path(ellipseTrace(progress), 0)}"/>`;
      markup += `<path class="secondary-locus" d="${path(animatedHyperbolaTrace(progress), 1)}"/>`;
    }
    if (state.step >= 6) {
      markup += `<path class="${state.step === 6 ? "reflected-locus" : "secondary-locus"}" d="${path(reflectedHyperbolaTrace(), 1)}"/>`;
      markup += `<text class="panel-title" x="592" y="590" text-anchor="middle">REFLECTED</text><text class="panel-title" x="908" y="590" text-anchor="middle">GENERATED</text>`;
    }
    if (state.step >= 7) {
      markup += `<text class="result-measure" x="250" y="615" text-anchor="middle">x²/25 + y²/16 = 1</text><text class="result-measure" x="750" y="615" text-anchor="middle">x²/4 − y²/5 = 1</text>`;
    }
    svg.innerHTML = markup;
  }
  function updateLedger() {
    const item = steps[state.step];
    $("step-number").textContent = String(state.step + 1).padStart(2, "0");
    $("step-title").textContent = item[0]; $("step-kicker").textContent = item[1]; $("step-description").textContent = item[2];
    $("cue-ask").textContent = item[3]; $("cue-look").textContent = item[4]; $("cue-watch").textContent = item[5];
    tabs.forEach((tab, index) => tab.toggleAttribute("aria-current", index === state.step));
    $("back-button").disabled = state.step === 0; $("next-button").disabled = state.step === 7;
    $("play-button").disabled = state.step !== 5; progressRange.disabled = state.step < 2 || state.step > 5;
    $("progress-value").textContent = String(Math.round(state.progress * 100));
    const predicting = state.step === 4;
    $("prediction-panel").hidden = !predicting;
    $("feedback-line").hidden = !predicting || !state.choice;
    if (state.choice) $("feedback-line").textContent = state.choice === "sum" ? "Keep the reason ready: bounded total distance." : "The traces will test whether the point can keep escaping.";
    const mathVisible = state.step >= 1 && !predicting;
    $("math-ledger").hidden = !mathVisible;
    if (mathVisible) {
      if (state.step < 3) {
        renderMath($("math-line-1"), "PF_1+PF_2=10"); renderMath($("math-line-2"), "a=5,\\ c=3,\\ b=4"); renderMath($("math-line-3"), "c^2=a^2-b^2");
      } else if (state.step < 6) {
        renderMath($("math-line-1"), "|PF_1-PF_2|=4"); renderMath($("math-line-2"), "a=2,\\ c=3,\\ b=\\sqrt5"); renderMath($("math-line-3"), "c^2=a^2+b^2");
      } else {
        renderMath($("math-line-1"), "\\frac{x^2}{25}+\\frac{y^2}{16}=1"); renderMath($("math-line-2"), "\\frac{x^2}{4}-\\frac{y^2}{5}=1"); renderMath($("math-line-3"), state.step === 6 ? "(x,y)\\mapsto(-x,y)" : "\\text{one trace + one reflection}");
      }
    }
    $("play-button").querySelector(".button-label").textContent = state.running ? "Pause" : "Play";
    $("play-button").querySelector(".button-icon").textContent = state.running ? "Ⅱ" : "▶";
  }
  function render() { renderStage(); updateLedger(); }
  function stop() { state.running = false; if (state.raf) root.cancelAnimationFrame(state.raf); state.raf = 0; }
  function moveToStep(next) {
    stop(); state.step = Math.max(0, Math.min(7, next));
    if (state.step < 5 && state.progress > 0.4) state.progress = 0.18;
    if (state.step >= 6) state.progress = 1;
    render(); $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`;
  }
  function toggleAnimation() {
    if (state.step !== 5) return;
    if (state.running) { stop(); render(); return; }
    const start = state.progress >= 0.995 ? 0 : state.progress;
    const started = performance.now(); state.running = true;
    function frame(now) {
      if (!state.running) return;
      state.progress = start + (1 - start) * Math.min(1, (now - started) / 3600);
      render();
      if (state.progress < 1) state.raf = root.requestAnimationFrame(frame); else { state.running = false; state.raf = 0; render(); }
    }
    state.raf = root.requestAnimationFrame(frame); updateLedger();
  }
  function reset() { stop(); state.step = 0; state.progress = 0.18; state.choice = ""; choices.forEach(button => button.setAttribute("aria-pressed", "false")); render(); }

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  choices.forEach(button => button.addEventListener("click", () => { state.choice = button.dataset.choice; choices.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button))); updateLedger(); }));
  progressRange.addEventListener("input", event => { stop(); state.progress = Number(event.target.value); render(); });
  $("reset-button").addEventListener("click", reset); $("back-button").addEventListener("click", () => moveToStep(state.step - 1)); $("next-button").addEventListener("click", () => moveToStep(state.step + 1)); $("play-button").addEventListener("click", toggleAnimation);
  root.document.addEventListener("keydown", event => {
    const tag = event.target && event.target.tagName; if (["INPUT", "BUTTON", "SELECT", "SUMMARY", "TEXTAREA"].includes(tag)) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); moveToStep(state.step - 1); } else if (event.key === "ArrowRight") { event.preventDefault(); moveToStep(state.step + 1); } else if (event.code === "Space") { event.preventDefault(); toggleAnimation(); } else if (event.key.toLowerCase() === "r") { event.preventDefault(); reset(); }
  });
  render();
})(typeof window !== "undefined" ? window : globalThis);
