"use strict";

(function (root) {
  const WIDTH = 1000;
  const HEIGHT = 640;
  const A = 5;
  const B = 3;
  const WORLD = { xMin: -7.2, xMax: 7.2, yMin: -4.6, yMax: 4.6 };
  const PAD = { left: 72, right: 48, top: 64, bottom: 48 };
  const SCALE = Math.min(
    (WIDTH - PAD.left - PAD.right) / (WORLD.xMax - WORLD.xMin),
    (HEIGHT - PAD.top - PAD.bottom) / (WORLD.yMax - WORLD.yMin)
  );
  const plotWidth = (WORLD.xMax - WORLD.xMin) * SCALE;
  const plotHeight = (WORLD.yMax - WORLD.yMin) * SCALE;
  const offsetX = PAD.left + ((WIDTH - PAD.left - PAD.right) - plotWidth) / 2;
  const offsetY = PAD.top + ((HEIGHT - PAD.top - PAD.bottom) - plotHeight) / 2;

  function pointAt(type, parameter) {
    return type === "ellipse"
      ? { x: A * Math.cos(parameter), y: B * Math.sin(parameter) }
      : { x: A * Math.cosh(parameter), y: B * Math.sinh(parameter) };
  }
  function levelValue(type, point) {
    return point.x * point.x / (A * A) + (type === "ellipse" ? 1 : -1) * point.y * point.y / (B * B);
  }
  function gradient(type, point) {
    return {
      x: 2 * point.x / (A * A),
      y: (type === "ellipse" ? 2 : -2) * point.y / (B * B)
    };
  }
  function tangentDirection(type, point) {
    const normal = gradient(type, point);
    return { x: -normal.y, y: normal.x };
  }
  function dot(left, right) { return left.x * right.x + left.y * right.y; }
  function tangentResidual(type, contact, point) {
    return contact.x * point.x / (A * A) + (type === "ellipse" ? 1 : -1) * contact.y * point.y / (B * B) - 1;
  }
  function secantData(type, parameter, separation) {
    const P = pointAt(type, parameter);
    const Q = pointAt(type, parameter + separation);
    return { P, Q, direction: { x: Q.x - P.x, y: Q.y - P.y } };
  }
  function normalise(vector) {
    const length = Math.hypot(vector.x, vector.y) || 1;
    return { x: vector.x / length, y: vector.y / length };
  }
  function toScreen(point) {
    return {
      x: offsetX + (point.x - WORLD.xMin) * SCALE,
      y: offsetY + (WORLD.yMax - point.y) * SCALE
    };
  }
  function curvePoints(type, level = 1, samples = 240) {
    if (type === "ellipse") {
      const radius = Math.sqrt(level);
      return [Array.from({ length: samples + 1 }, (_, index) => pointAt(type, 2 * Math.PI * index / samples))
        .map(point => ({ x: point.x * radius, y: point.y * radius }))];
    }
    const scale = Math.sqrt(level);
    return [-1, 1].map(sign => Array.from({ length: samples + 1 }, (_, index) => {
      const parameter = -1.12 + 2.24 * index / samples;
      const point = pointAt(type, parameter);
      return { x: sign * point.x * scale, y: point.y * scale };
    }));
  }
  function linePoints(anchor, direction, reach = 16) {
    const unit = normalise(direction);
    return [
      { x: anchor.x - reach * unit.x, y: anchor.y - reach * unit.y },
      { x: anchor.x + reach * unit.x, y: anchor.y + reach * unit.y }
    ];
  }

  const model = {
    WIDTH, HEIGHT, A, B, WORLD, SCALE, pointAt, levelValue, gradient,
    tangentDirection, tangentResidual, secantData, dot, normalise, toScreen,
    curvePoints, linePoints
  };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const layerInputs = Array.from(root.document.querySelectorAll("[data-layer]"));
  const range = $("point-range");
  const selector = $("conic-select");
  const state = {
    step: 0,
    type: "ellipse",
    parameter: 0.92,
    separation: 0.68,
    progress: 1,
    sweepStart: 0.35,
    running: false,
    raf: 0,
    layers: { levels: true, components: true, family: false }
  };

  const steps = [
    ["Read a level set", "One equation labels a family of curves.", "The conic is the level set where F(x,y)=1. Nearby levels make the gradient direction visible later.", "What does F(x,y)=1 select from the plane?", "A curve is one level of a two-variable function.", "Build the selected level."],
    ["Generate F(x,y)=1", "The equation becomes a curve.", "Play draws the selected level instead of revealing a completed conic.", "Which part of the equation fixes the shape?", "The signs and the two scale lengths a and b.", "Choose one contact point."],
    ["Place the contact point", "One parameter keeps P on the conic.", "Move the parameter and notice that F(P) remains exactly 1.", "What stays invariant while P moves?", "The value F(P)=1.", "Add a neighbouring point Q."],
    ["Draw a secant", "Two conic points determine a direction.", "P and Q both satisfy F=1. Their joining line is not yet the tangent.", "Which point must stay fixed?", "P stays fixed while Q approaches it.", "Predict the limiting direction."],
    ["Let Q approach P", "The secant pivots into the tangent.", "Play reduces the parameter separation. Q approaches P and the secant direction stabilises.", "What changes even though both points remain on F=1?", "The secant direction approaches the tangent direction.", "Read a direction directly from F."],
    ["Build the gradient", "The coefficients become a normal direction.", "The scaled coordinate components x/a² and ±y/b² assemble the gradient at P.", "Why does the sign change for a hyperbola?", "Its level function subtracts y²/b².", "Turn the gradient through a right angle."],
    ["Make tangent and normal perpendicular", "The normal is generated by ∇F(P).", "The tangent direction is perpendicular to the gradient, so the tangent and normal arrive as one pair.", "Which vector is read directly from the equation?", "The normal vector ∇F(P).", "Move P and preserve the contact condition."],
    ["Move the contact", "A moving point carries both lines.", "Play moves P along the conic. The tangent and normal rotate while the tangent equation stays satisfied at P.", "What remains true at every contact?", "F(P)=1, tangent·gradient=0, and P satisfies the tangent equation.", "Return to implicit differentiation on the board."]
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
  function pointMarkup(point, label, className = "feature-marker", dx = 13, dy = -14) {
    const p = toScreen(point);
    return `<circle class="${className}" cx="${p.x}" cy="${p.y}" r="7"/><text class="conic-point-label" x="${p.x + dx}" y="${p.y + dy}">${label}</text>`;
  }
  function gridMarkup() {
    let out = "";
    for (let x = -6; x <= 6; x += 1) {
      const a = toScreen({ x, y: WORLD.yMin });
      const b = toScreen({ x, y: WORLD.yMax });
      out += `<line class="${x === 0 ? "axis" : x % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
    }
    for (let y = -4; y <= 4; y += 1) {
      const a = toScreen({ x: WORLD.xMin, y });
      const b = toScreen({ x: WORLD.xMax, y });
      out += `<line class="${y === 0 ? "axis" : y % 2 === 0 ? "major-grid" : "minor-grid"}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
    }
    const xAxis = toScreen({ x: WORLD.xMax, y: 0 });
    const yAxis = toScreen({ x: 0, y: WORLD.yMax });
    return out + `<text class="axis-label" x="${xAxis.x - 8}" y="${xAxis.y - 12}">x</text><text class="axis-label" x="${yAxis.x + 12}" y="${yAxis.y + 18}">y</text>`;
  }
  function curveMarkup(type, level, className, fraction = 1) {
    return curvePoints(type, level).map((branch, branchIndex) => {
      const count = Math.max(2, Math.floor((branch.length - 1) * fraction) + 1);
      return `<path class="${className}" data-conic-branch="${branchIndex}" data-level="${level}" d="${path(branch.slice(0, count))}"/>`;
    }).join("");
  }
  function arrowMarkup(from, to, className, role) {
    const a = toScreen(from);
    const b = toScreen(to);
    const angle = Math.atan2(b.y - a.y, b.x - a.x);
    const head = 10;
    const left = { x: b.x - head * Math.cos(angle - Math.PI / 6), y: b.y - head * Math.sin(angle - Math.PI / 6) };
    const right = { x: b.x - head * Math.cos(angle + Math.PI / 6), y: b.y - head * Math.sin(angle + Math.PI / 6) };
    return `<g data-vector-role="${role}"><line class="${className}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/><path class="${className} conic-arrowhead" d="M${left.x},${left.y} L${b.x},${b.y} L${right.x},${right.y}"/></g>`;
  }
  function rightAngleMarkup(contact, normal, tangent) {
    const n = normalise(normal);
    const t = normalise(tangent);
    const size = 0.34;
    const points = [
      { x: contact.x + n.x * size, y: contact.y + n.y * size },
      { x: contact.x + (n.x + t.x) * size, y: contact.y + (n.y + t.y) * size },
      { x: contact.x + t.x * size, y: contact.y + t.y * size }
    ];
    return `<path class="conic-right-angle" d="${path(points)}"/>`;
  }
  function familyMarkup(type) {
    if (!state.layers.family || state.step < 7) return "";
    const parameters = type === "ellipse" ? [0.36, 0.72, 1.08, 1.44, 1.8, 2.16] : [-0.9, -0.55, -0.2, 0.2, 0.55, 0.9];
    return parameters.map(parameter => {
      const point = pointAt(type, parameter);
      return `<path class="conic-tangent-family" d="${path(linePoints(point, tangentDirection(type, point), 13))}"/>`;
    }).join("");
  }
  function renderStage() {
    const type = state.type;
    const P = pointAt(type, state.parameter);
    const normal = gradient(type, P);
    const normalUnit = normalise(normal);
    const tangent = tangentDirection(type, P);
    let markup = gridMarkup();
    markup += `<text class="conic-stage-heading" x="72" y="38">${type === "ellipse" ? "ELLIPSE" : "HYPERBOLA"} · LEVEL-SET VIEW</text>`;
    if (state.layers.levels) {
      [0.58, 0.78, 1.22, 1.48].forEach(level => {
        markup += curveMarkup(type, level, "conic-level-set", 1);
      });
    }
    if (state.step >= 1) {
      const fraction = state.step === 1 ? state.progress : 1;
      markup += curveMarkup(type, 1, "conic-main-curve", fraction);
    }
    if (state.step >= 2) markup += pointMarkup(P, `P(${f(P.x)}, ${f(P.y)})`, "conic-contact");
    if (state.step >= 3 && state.step <= 4) {
      const data = secantData(type, state.parameter, state.separation);
      markup += `<path class="conic-secant" data-separation="${state.separation}" d="${path(linePoints(P, data.direction, 15))}"/>`;
      markup += pointMarkup(data.Q, "Q", "conic-neighbour", 12, 22);
      const p = toScreen(P);
      const q = toScreen(data.Q);
      markup += `<path class="conic-parameter-gap" d="M${p.x},${p.y} L${q.x},${q.y}"/>`;
    }
    if (state.step >= 5) {
      const length = 1.85 * (state.step === 5 ? state.progress : 1);
      const tip = { x: P.x + normalUnit.x * length, y: P.y + normalUnit.y * length };
      if (state.layers.components) {
        const elbow = { x: tip.x, y: P.y };
        markup += `<path class="conic-component-guide" d="${path([P, elbow, tip])}"/>`;
        const ep = toScreen(elbow);
        markup += `<text class="conic-component-label" x="${ep.x}" y="${ep.y + 22}" text-anchor="middle">∝ x₁/a²</text>`;
        const tp = toScreen(tip);
        markup += `<text class="conic-component-label" x="${tp.x + 12}" y="${(ep.y + tp.y) / 2}">∝ ${type === "ellipse" ? "+" : "−"}y₁/b²</text>`;
      }
      markup += arrowMarkup(P, tip, "conic-normal-vector", "gradient");
      const tp = toScreen(tip);
      markup += `<text class="conic-vector-label" x="${tp.x + 12}" y="${tp.y - 8}">∇F(P)</text>`;
    }
    if (state.step >= 6) {
      markup += familyMarkup(type);
      markup += `<path class="conic-normal-line" data-line-role="normal" d="${path(linePoints(P, normal, 14))}"/>`;
      markup += `<path class="conic-tangent-line" data-line-role="tangent" d="${path(linePoints(P, tangent, 14))}"/>`;
      markup += rightAngleMarkup(P, normal, tangent);
      const callout = toScreen({ x: type === "ellipse" ? -5.9 : -6.15, y: 3.75 });
      markup += `<g class="conic-invariant-card" data-invariant-card><rect x="${callout.x}" y="${callout.y}" width="244" height="78" rx="5"/><text x="${callout.x + 15}" y="${callout.y + 25}">F(P) = ${f(levelValue(type, P), 3)}</text><text x="${callout.x + 15}" y="${callout.y + 50}">t · ∇F(P) = ${f(dot(tangent, normal), 3)}</text></g>`;
    }
    svg.innerHTML = markup;
  }
  function renderMath(target, tex) {
    target.textContent = "";
    if (root.katex) root.katex.render(tex, target, { throwOnError: false, displayMode: false });
    else target.textContent = tex;
  }
  function updateLedger() {
    const item = steps[state.step];
    const type = state.type;
    const P = pointAt(type, state.parameter);
    const sign = type === "ellipse" ? "+" : "-";
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
    $("play-button").disabled = ![1, 4, 5, 7].includes(state.step);
    range.disabled = state.step < 2;
    $("point-value").textContent = f(state.parameter);
    renderMath($("math-line-1"), `F(x,y)=\\frac{x^2}{${A * A}}${sign}\\frac{y^2}{${B * B}}=1`);
    if (state.step <= 1) {
      renderMath($("math-line-2"), type === "ellipse" ? "P=(5\\cos\\theta,3\\sin\\theta)" : "P=(5\\cosh u,3\\sinh u)");
      renderMath($("math-line-3"), "F(P)=1");
    } else if (state.step <= 4) {
      renderMath($("math-line-2"), `P=(${f(P.x)},${f(P.y)}),\\quad F(P)=1`);
      renderMath(
        $("math-line-3"),
        state.step === 3
          ? "P,Q\\in F=1"
          : state.step === 4
            ? "Q\\to P\\Longrightarrow PQ\\to\\text{ tangent}"
            : "P\\text{ moves on one level}"
      );
    } else if (state.step === 5) {
      renderMath($("math-line-2"), `\\nabla F(P)=\\left(\\frac{2x_1}{25},${sign}\\frac{2y_1}{9}\\right)`);
      renderMath($("math-line-3"), "\\nabla F(P)\\text{ is normal to }F=1");
    } else {
      renderMath($("math-line-2"), `\\frac{xx_1}{25}${sign}\\frac{yy_1}{9}=1`);
      renderMath($("math-line-3"), "\\mathbf t\\cdot\\nabla F(P)=0");
    }
    const active = [1, 4, 5, 7].includes(state.step);
    $("play-button").querySelector(".button-label").textContent = state.running
      ? "Pause"
      : active && state.progress > 0 && state.progress < 1
        ? "Resume"
        : "Play";
    $("play-button").querySelector(".button-icon").textContent = state.running ? "Ⅱ" : "▶";
  }
  function render() { renderStage(); updateLedger(); }
  function stop() {
    state.running = false;
    if (state.raf) root.cancelAnimationFrame(state.raf);
    state.raf = 0;
  }
  function setParameterBounds() {
    if (state.type === "ellipse") {
      range.min = "0.30";
      range.max = "2.65";
      state.parameter = Math.max(0.3, Math.min(2.65, state.parameter));
    } else {
      range.min = "-1.05";
      range.max = "1.05";
      state.parameter = Math.max(-1.05, Math.min(1.05, state.parameter > 1.05 ? 0.62 : state.parameter));
    }
    range.value = String(state.parameter);
    $("range-min").textContent = Number(range.min).toFixed(2);
    $("range-max").textContent = Number(range.max).toFixed(2);
  }
  function moveToStep(next) {
    stop();
    state.step = Math.max(0, Math.min(steps.length - 1, next));
    state.progress = 1;
    state.separation = state.step === 3 ? 0.68 : 0.035;
    render();
    $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`;
  }
  function toggleAnimation() {
    if (![1, 4, 5, 7].includes(state.step)) return;
    if (state.running) { stop(); render(); return; }
    if (state.progress >= 0.999) {
      state.progress = 0;
      if (state.step === 4) state.separation = 0.68;
      if (state.step === 7) {
        state.sweepStart = state.type === "ellipse" ? 0.35 : -0.9;
        state.parameter = state.sweepStart;
        range.value = String(state.parameter);
      }
    }
    const startProgress = state.progress;
    const startTime = performance.now();
    const endParameter = state.type === "ellipse" ? 2.55 : 0.9;
    const duration = Math.max(180, (1 - startProgress) * 2600);
    state.running = true;
    function frame(now) {
      if (!state.running) return;
      const localProgress = Math.min(1, (now - startTime) / duration);
      const progress = startProgress + (1 - startProgress) * localProgress;
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      state.progress = progress;
      if (state.step === 4) state.separation = 0.68 + (0.035 - 0.68) * eased;
      if (state.step === 7) {
        state.parameter = state.sweepStart + (endParameter - state.sweepStart) * eased;
        range.value = String(state.parameter);
      }
      render();
      if (localProgress < 1) state.raf = root.requestAnimationFrame(frame);
      else { state.running = false; state.raf = 0; render(); }
    }
    state.raf = root.requestAnimationFrame(frame);
    updateLedger();
  }
  function reset() {
    stop();
    state.step = 0;
    state.type = "ellipse";
    state.parameter = 0.92;
    state.separation = 0.68;
    state.progress = 1;
    state.sweepStart = 0.35;
    state.layers = { levels: true, components: true, family: false };
    selector.value = state.type;
    layerInputs.forEach(input => { input.checked = state.layers[input.dataset.layer]; });
    setParameterBounds();
    render();
  }

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  layerInputs.forEach(input => input.addEventListener("change", () => {
    state.layers[input.dataset.layer] = input.checked;
    render();
  }));
  selector.addEventListener("change", event => {
    stop();
    state.type = event.target.value;
    state.parameter = state.type === "ellipse" ? 0.92 : 0.62;
    state.separation = 0.68;
    state.progress = 1;
    state.sweepStart = state.type === "ellipse" ? 0.35 : -0.9;
    setParameterBounds();
    render();
  });
  range.addEventListener("input", event => {
    stop();
    state.parameter = Number(event.target.value);
    state.progress = 1;
    render();
  });
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
  setParameterBounds();
  render();
})(typeof window !== "undefined" ? window : globalThis);
