"use strict";

(function (root) {
  const WIDTH = 1000;
  const HEIGHT = 640;
  const A = 4;
  const PARABOLA_P = 1.5;
  const WORLD = { xMin: -7.2, xMax: 7.2, yMin: -4.2, yMax: 4.2 };
  const PAD = { left: 54, right: 54, top: 105, bottom: 42 };
  const scaleX = Math.min((WIDTH - PAD.left - PAD.right) / (WORLD.xMax - WORLD.xMin), (HEIGHT - PAD.top - PAD.bottom) / (WORLD.yMax - WORLD.yMin));
  const scaleY = scaleX;
  const usedW = (WORLD.xMax - WORLD.xMin) * scaleX;
  const usedH = (WORLD.yMax - WORLD.yMin) * scaleY;
  const offsetX = PAD.left + ((WIDTH - PAD.left - PAD.right) - usedW) / 2;
  const offsetY = PAD.top + ((HEIGHT - PAD.top - PAD.bottom) - usedH) / 2;

  function classify(e) {
    if (Math.abs(e - 1) < 1e-9) return "parabola";
    return e < 1 ? "ellipse" : "hyperbola";
  }

  function features(e, a = A) {
    const type = classify(e);
    if (type === "parabola") {
      return {
        type,
        e,
        p: PARABOLA_P,
        focus: { x: PARABOLA_P, y: 0 },
        directrix: -PARABOLA_P,
        vertex: { x: 0, y: 0 }
      };
    }
    const c = a * e;
    const b = type === "ellipse" ? a * Math.sqrt(1 - e * e) : a * Math.sqrt(e * e - 1);
    return {
      type,
      e,
      a,
      b,
      c,
      f1: { x: -c, y: 0 },
      f2: { x: c, y: 0 },
      vertices: [{ x: -a, y: 0 }, { x: a, y: 0 }],
      directrices: e === 0 ? [] : [-a / e, a / e]
    };
  }

  function pointAt(e, parameter, branch = 1, a = A) {
    const info = features(e, a);
    if (info.type === "ellipse") return { x: a * Math.cos(parameter), y: info.b * Math.sin(parameter) };
    if (info.type === "parabola") return { x: parameter * parameter / (4 * info.p), y: parameter };
    return { x: branch * a * Math.cosh(parameter), y: info.b * Math.sinh(parameter) };
  }

  function pointFromPosition(e, position, branch = 1) {
    const p = Math.max(0, Math.min(1, position));
    const type = classify(e);
    if (type === "ellipse") return pointAt(e, 2 * Math.PI * p + 0.08);
    if (type === "parabola") return pointAt(e, -3.8 + 7.6 * p);
    return pointAt(e, -0.86 + 1.72 * p, branch);
  }

  function focalDistances(e, point) {
    const info = features(e);
    if (info.type === "parabola") {
      const focus = Math.hypot(point.x - info.focus.x, point.y);
      const directrix = Math.abs(point.x - info.directrix);
      return { focus, directrix, ratio: focus / directrix };
    }
    const pf1 = Math.hypot(point.x - info.f1.x, point.y);
    const pf2 = Math.hypot(point.x - info.f2.x, point.y);
    return {
      pf1,
      pf2,
      sum: pf1 + pf2,
      difference: Math.abs(pf1 - pf2)
    };
  }

  function distanceInvariant(e, point) {
    const distances = focalDistances(e, point);
    if (classify(e) === "ellipse") return distances.sum;
    if (classify(e) === "hyperbola") return distances.difference;
    return distances.ratio;
  }

  function standardResidual(e, point) {
    const info = features(e);
    if (info.type === "ellipse") return point.x * point.x / (info.a * info.a) + point.y * point.y / (info.b * info.b) - 1;
    if (info.type === "hyperbola") return point.x * point.x / (info.a * info.a) - point.y * point.y / (info.b * info.b) - 1;
    return point.y * point.y - 4 * info.p * point.x;
  }

  function focusDirectrixRatio(e, point) {
    const info = features(e);
    if (info.type === "parabola") return focalDistances(e, point).ratio;
    if (e === 0) return 0;
    const right = point.x >= 0;
    const focus = right ? info.f2 : info.f1;
    const directrix = right ? info.directrices[1] : info.directrices[0];
    return Math.hypot(point.x - focus.x, point.y - focus.y) / Math.abs(point.x - directrix);
  }

  function directrixMeasures(e, point) {
    const info = features(e);
    if (info.type === "parabola") {
      const distances = focalDistances(e, point);
      return { pd: distances.directrix, pf: distances.focus, ratio: distances.ratio };
    }
    if (e === 0) return null;
    const distances = focalDistances(e, point);
    const pd1 = Math.abs(point.x - info.directrices[0]);
    const pd2 = Math.abs(point.x - info.directrices[1]);
    return { pd1, pd2, pf1: distances.pf1, pf2: distances.pf2, ratio1: distances.pf1 / pd1, ratio2: distances.pf2 / pd2 };
  }

  function expectedFocusDistances(e, point) {
    const info = features(e);
    if (info.type === "ellipse") return { pf1: info.a + e * point.x, pf2: info.a - e * point.x };
    if (info.type === "hyperbola" && point.x >= info.a) return { pf1: e * point.x + info.a, pf2: e * point.x - info.a };
    if (info.type === "hyperbola") return { pf1: -e * point.x - info.a, pf2: -e * point.x + info.a };
    return { focus: point.x + info.p };
  }

  function toScreen(point) {
    return {
      x: offsetX + (point.x - WORLD.xMin) * scaleX,
      y: offsetY + (WORLD.yMax - point.y) * scaleY
    };
  }

  function inWorld(point) {
    return point.x >= WORLD.xMin && point.x <= WORLD.xMax && point.y >= WORLD.yMin && point.y <= WORLD.yMax;
  }

  function splitInWorld(points) {
    const segments = [];
    let current = [];
    for (const point of points) {
      if (inWorld(point)) current.push(point);
      else if (current.length) {
        if (current.length > 1) segments.push(current);
        current = [];
      }
    }
    if (current.length > 1) segments.push(current);
    return segments;
  }

  function traceSegments(e, samples = 320) {
    const type = classify(e);
    if (type === "ellipse") {
      return [Array.from({ length: samples + 1 }, (_, i) => pointAt(e, 2 * Math.PI * i / samples))];
    }
    if (type === "parabola") {
      return splitInWorld(Array.from({ length: samples + 1 }, (_, i) => pointAt(e, -4.2 + 8.4 * i / samples)));
    }
    const segments = [];
    for (const branch of [-1, 1]) {
      const points = Array.from({ length: samples / 2 + 1 }, (_, i) => pointAt(e, -1.05 + 2.1 * i / (samples / 2), branch));
      segments.push(...splitInWorld(points));
    }
    return segments;
  }

  const model = {
    WIDTH,
    HEIGHT,
    A,
    PARABOLA_P,
    WORLD,
    scaleX,
    scaleY,
    classify,
    features,
    pointAt,
    pointFromPosition,
    focalDistances,
    distanceInvariant,
    standardResidual,
    focusDirectrixRatio,
    directrixMeasures,
    expectedFocusDistances,
    toScreen,
    traceSegments
  };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const choices = Array.from(root.document.querySelectorAll(".choice-button"));
  const eRange = $("e-range");
  const positionRange = $("position-range");
  const preset = $("e-preset");
  const state = { step: 0, e: 0.65, position: 0.18, running: false, raf: 0, choice: "" };
  const steps = [
    ["Fix the centre and scale", "Keep the semi-major length fixed.", "The centre C and vertices set a stable reference length a.", "Which length should be the reference scale?", "The semi-major length a from centre to vertex.", "Place the foci symmetrically."],
    ["Measure the focus offset", "Connect each focus to a directrix.", "For a central conic, e = c/a also equals PF/PD for either matching focus–directrix pair.", "What does e = 0 mean geometrically?", "Both foci coincide with the centre; the directrices have receded to infinity.", "Move the focus and directrices while a stays fixed."],
    ["Let eccentricity reshape the curve", "Keep a = 4 while e changes.", "The foci lie at ±ae and the directrices at ±a/e. Their relative motion reshapes the conic.", "Which features move in opposite ways?", "As e grows, the foci move out while the directrices move in.", "Choose a specimen, then introduce a moving point."],
    ["Move a point on the conic", "Watch PF and its matching PD.", "Play the motion or drag the point-position slider. Each focal distance is always e times the perpendicular distance to its matching directrix.", "Are PF₁ and PF₂ individually constant?", "No. Use PFᵢ = e·PDᵢ to combine them.", "Ask for a prediction before proving it."],
    ["Predict the invariant", "Choose the correct pair.", "Decide which combination remains fixed on an ellipse and which remains fixed on a hyperbola.", "Which pair of distance invariants is correct?", "Ellipse: fixed sum. Hyperbola: fixed absolute difference.", "Prove the ellipse case from its standard form."],
    ["Prove the ellipse invariant", "Read the two perpendicular distances.", "For an ellipse, PD₁ = x + a/e and PD₂ = a/e − x. Multiply both by e, then add.", "Why can the absolute values be removed?", "The ellipse lies between its two directrices.", "The x-terms cancel without squaring a distance."],
    ["Prove the hyperbola invariant", "Work on the right branch.", "Here PD₁ = x + a/e and PD₂ = x − a/e. Multiply both by e, then subtract.", "Why is x − a/e positive?", "On the right branch x ≥ a > a/e because e > 1.", "The x-terms cancel in the difference."],
    ["Read the name eccentricity", "It measures off-centredness.", "Play the animation: a stays fixed while each focus moves from the centre. The ratio c/a records how eccentric the curve has become.", "Why divide c by a?", "The ratio is scale-free: similar conics have the same eccentricity.", "Return to the distance proofs on the board."]
  ];

  function f(value, digits = 2) {
    return value.toFixed(digits).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
  }

  function path(points) {
    return points.map((point, index) => {
      const p = toScreen(point);
      return `${index ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");
  }

  function gridMarkup() {
    let out = "";
    for (let n = -6; n <= 6; n += 2) {
      const v1 = toScreen({ x: n, y: WORLD.yMin });
      const v2 = toScreen({ x: n, y: WORLD.yMax });
      const h1 = toScreen({ x: WORLD.xMin, y: n });
      const h2 = toScreen({ x: WORLD.xMax, y: n });
      out += `<line class="${n === 0 ? "axis" : "major-grid"}" x1="${v1.x}" y1="${v1.y}" x2="${v2.x}" y2="${v2.y}"/>`;
      out += `<line class="${n === 0 ? "axis" : "major-grid"}" x1="${h1.x}" y1="${h1.y}" x2="${h2.x}" y2="${h2.y}"/>`;
    }
    return out;
  }

  function dimensionMarkup(info) {
    if (info.type === "parabola") {
      return `<text class="telemetry-label" x="650" y="30">PARABOLIC BOUNDARY</text><text class="telemetry-value" x="650" y="56">e = 1 · no centre</text><line class="telemetry-rule" x1="650" y1="76" x2="920" y2="76"/>`;
    }
    const cx = 676;
    const vx = 820;
    const fx = cx + (vx - cx) * info.e;
    return `<text class="telemetry-label" x="650" y="24">NORMALISED FOCUS OFFSET</text>
      <line class="dimension-base" x1="${cx}" y1="58" x2="${vx}" y2="58"/>
      <line class="dimension-focus" x1="${cx}" y1="46" x2="${fx}" y2="46"/>
      <circle class="dimension-centre" cx="${cx}" cy="58" r="4"/><circle class="dimension-vertex" cx="${vx}" cy="58" r="5"/><circle class="dimension-focus-dot" cx="${fx}" cy="46" r="6"/>
      <text class="dimension-label" x="${cx}" y="79" text-anchor="middle">C</text><text class="dimension-label" x="${vx}" y="79" text-anchor="middle">V</text><text class="dimension-label is-focus" x="${fx}" y="35" text-anchor="middle">F</text>
      <text class="telemetry-value" x="920" y="57" text-anchor="end">e = c/a = ${f(info.e)}</text>`;
  }

  function labelPoint(point, label, dx, dy, className = "feature-label") {
    const p = toScreen(point);
    return `<text class="${className}" x="${p.x + dx}" y="${p.y + dy}">${label}</text>`;
  }

  function directrixMarkup(info, point, showMeasures, showLabels) {
    if (info.type === "parabola" || info.e === 0) return "";
    const visible = info.directrices.every(x => x >= WORLD.xMin && x <= WORLD.xMax);
    if (!visible) return `<text class="directrix-note" x="70" y="88">DIRECTRICES BEYOND THE WINDOW</text>`;
    let out = "";
    info.directrices.forEach((x, index) => {
      const top = toScreen({ x, y: WORLD.yMax });
      const bottom = toScreen({ x, y: WORLD.yMin });
      out += `<line class="directrix-line is-paired" x1="${top.x}" y1="${top.y}" x2="${bottom.x}" y2="${bottom.y}"/>`;
      out += `<text class="directrix-label" x="${top.x + (index ? -8 : 8)}" y="98" text-anchor="${index ? "end" : "start"}">d${index + 1}: x = ${index ? "" : "−"}a/e</text>`;
    });
    if (!showMeasures) return out;
    const pp = toScreen(point);
    const measures = directrixMeasures(info.e, point);
    info.directrices.forEach((x, index) => {
      const foot = toScreen({ x, y: point.y });
      out += `<line class="directrix-distance${index ? " is-second" : " is-first"}" x1="${pp.x}" y1="${pp.y}" x2="${foot.x}" y2="${foot.y}"/>`;
      out += `<circle class="directrix-foot" cx="${foot.x}" cy="${foot.y}" r="5"/><text class="directrix-foot-label" x="${foot.x + (index ? -9 : 9)}" y="${foot.y - 9}" text-anchor="${index ? "end" : "start"}">D${index + 1}</text>`;
      if (showLabels) {
        const midX = (pp.x + foot.x) / 2;
        out += `<text class="directrix-measure" x="${midX}" y="${pp.y + (index ? 20 : -10)}" text-anchor="middle">PD${index + 1} = ${f(index ? measures.pd2 : measures.pd1)}</text>`;
      }
    });
    return out;
  }

  function renderStage() {
    const info = features(state.e);
    const point = pointFromPosition(state.e, state.position);
    const showCurve = state.step >= 2;
    const showPoint = state.step >= 3 && state.step <= 6;
    const showProof = state.step === 5 || state.step === 6;
    let markup = gridMarkup();
    markup += `<text class="panel-title" x="70" y="28">a = ${A} FIXED</text><text class="telemetry-value" x="70" y="56">${info.type.toUpperCase()}</text>`;
    markup += dimensionMarkup(info);

    const centre = toScreen({ x: 0, y: 0 });
    markup += `<circle class="feature-marker is-centre" cx="${centre.x}" cy="${centre.y}" r="5"/><text class="feature-label" x="${centre.x + 9}" y="${centre.y + 20}">C</text>`;
    if (info.type !== "parabola") {
      for (const [index, vertex] of info.vertices.entries()) {
        const v = toScreen(vertex);
        markup += `<circle class="feature-marker is-vertex" cx="${v.x}" cy="${v.y}" r="5"/>`;
        if (state.step === 0) markup += `<text class="feature-label" x="${v.x + (index ? 8 : -18)}" y="${v.y + 22}">V${index + 1}</text>`;
      }
      if (state.step >= 1) {
        for (const [index, focus] of [info.f1, info.f2].entries()) {
          const fp = toScreen(focus);
          markup += `<circle class="focus-halo" cx="${fp.x}" cy="${fp.y}" r="13"/><circle class="feature-marker is-focus" cx="${fp.x}" cy="${fp.y}" r="7"/>`;
          markup += `<text class="feature-label is-focus" x="${fp.x - 8}" y="${fp.y + 25}">F${index + 1}</text>`;
        }
        markup += directrixMarkup(info, point, showPoint, showProof);
      }
    } else if (state.step >= 1) {
      const fp = toScreen(info.focus);
      const top = toScreen({ x: info.directrix, y: WORLD.yMax });
      const bottom = toScreen({ x: info.directrix, y: WORLD.yMin });
      markup += `<line class="directrix-line" x1="${top.x}" y1="${top.y}" x2="${bottom.x}" y2="${bottom.y}"/>`;
      markup += `<circle class="focus-halo" cx="${fp.x}" cy="${fp.y}" r="13"/><circle class="feature-marker is-focus" cx="${fp.x}" cy="${fp.y}" r="7"/><text class="feature-label is-focus" x="${fp.x + 10}" y="${fp.y - 12}">F</text>`;
    }

    if (showCurve) {
      for (const segment of traceSegments(state.e)) markup += `<path class="locus-line" d="${path(segment)}"/>`;
    }

    if (showPoint) {
      const pp = toScreen(point);
      if (info.type === "parabola") {
        const fp = toScreen(info.focus);
        const foot = toScreen({ x: info.directrix, y: point.y });
        const distances = focalDistances(state.e, point);
        markup += `<line class="distance-line is-first" x1="${pp.x}" y1="${pp.y}" x2="${fp.x}" y2="${fp.y}"/><line class="distance-line is-second" x1="${pp.x}" y1="${pp.y}" x2="${foot.x}" y2="${foot.y}"/>`;
        markup += `<text class="distance-readout" x="74" y="606">PF = ${f(distances.focus)} · PD = ${f(distances.directrix)} · PF/PD = 1</text>`;
      } else {
        const f1 = toScreen(info.f1);
        const f2 = toScreen(info.f2);
        const distances = focalDistances(state.e, point);
        markup += `<line class="distance-line is-first" x1="${pp.x}" y1="${pp.y}" x2="${f1.x}" y2="${f1.y}"/><line class="distance-line is-second" x1="${pp.x}" y1="${pp.y}" x2="${f2.x}" y2="${f2.y}"/>`;
        markup += `<text class="distance-readout" x="74" y="606">PF₁ = ${f(distances.pf1)} · PF₂ = ${f(distances.pf2)}</text>`;
        const invariant = info.type === "ellipse" ? `PF₁ + PF₂ = ${f(distances.sum)}` : `|PF₁ − PF₂| = ${f(distances.difference)}`;
        markup += `<text class="result-measure" x="926" y="606" text-anchor="end">${invariant}</text>`;
      }
      markup += `<circle class="moving-point" cx="${pp.x}" cy="${pp.y}" r="9"/><circle class="moving-core" cx="${pp.x}" cy="${pp.y}" r="3"/>`;
      markup += labelPoint(point, "P", 12, point.y > 2.8 ? 21 : -12, "moving-label");
    }

    if (showProof) {
      markup += `<rect class="proof-seal" x="387" y="520" width="226" height="48" rx="4"/><text class="proof-seal-label" x="500" y="540" text-anchor="middle">FOCUS–DIRECTRIX RATIO</text>`;
      markup += `<text class="proof-seal-value" x="500" y="560" text-anchor="middle">PF = e · PD</text>`;
    }
    if (state.step === 7) {
      markup += `<text class="eccentricity-name" x="500" y="606" text-anchor="middle">ECCENTRICITY = OFF-CENTREDNESS, MEASURED WITHOUT UNITS</text>`;
    }
    svg.innerHTML = markup;
  }

  function renderMath(target, tex) {
    target.textContent = "";
    if (root.katex) root.katex.render(tex, target, { throwOnError: false });
    else target.textContent = tex;
  }

  function standardFormTex(info) {
    if (info.type === "ellipse") return `\\frac{x^2}{${A * A}}+\\frac{y^2}{${f(info.b * info.b)}}=1`;
    if (info.type === "hyperbola") return `\\frac{x^2}{${A * A}}-\\frac{y^2}{${f(info.b * info.b)}}=1`;
    return `y^2=${4 * PARABOLA_P}x`;
  }

  function updateLedger() {
    const item = steps[state.step];
    const info = features(state.e);
    const point = pointFromPosition(state.e, state.position);
    const distances = focalDistances(state.e, point);
    $("step-number").textContent = String(state.step + 1).padStart(2, "0");
    $("step-title").textContent = item[0];
    $("step-kicker").textContent = item[1];
    $("step-description").textContent = item[2];
    $("cue-ask").textContent = item[3];
    $("cue-look").textContent = item[4];
    $("cue-watch").textContent = item[5];
    tabs.forEach((tab, index) => tab.toggleAttribute("aria-current", index === state.step));
    $("back-button").disabled = state.step === 0;
    $("next-button").disabled = state.step === 7;
    $("play-button").disabled = state.step !== 3 && state.step !== 7;
    eRange.disabled = ![2, 3, 7].includes(state.step);
    preset.disabled = ![2, 3, 7].includes(state.step);
    positionRange.disabled = ![3, 5, 6].includes(state.step);
    $("e-value").textContent = f(state.e);
    $("position-value").textContent = String(Math.round(state.position * 100));

    const predicting = state.step === 4;
    $("prediction-panel").hidden = !predicting;
    $("feedback-line").hidden = !predicting || !state.choice;
    if (state.choice) {
      $("feedback-line").textContent = state.choice === "sum-difference"
        ? "Now use the two matching directrices; no distance-squaring is needed."
        : "Track the two live distances again before committing.";
    }

    const mathVisible = state.step >= 1 && !predicting;
    $("math-ledger").hidden = !mathVisible;
    if (mathVisible) {
      if (state.step === 1) {
        renderMath($("math-line-1"), "e=\\frac{PF_i}{PD_i}");
        renderMath($("math-line-2"), "e=\\frac{c}{a},\\qquad c=ae");
        renderMath($("math-line-3"), "d_1,d_2:\\ x=\\pm\\frac{a}{e}");
      } else if (state.step === 2) {
        renderMath($("math-line-1"), standardFormTex(info));
        renderMath($("math-line-2"), info.type === "ellipse" ? "b^2=a^2(1-e^2)" : info.type === "hyperbola" ? "b^2=a^2(e^2-1)" : "e=1");
        renderMath($("math-line-3"), info.type === "ellipse" ? "0\\le e<1" : info.type === "hyperbola" ? "e>1" : "\\text{parabolic boundary}");
      } else if (state.step === 3) {
        if (info.type === "parabola") {
          renderMath($("math-line-1"), `PF=${f(distances.focus)}`);
          renderMath($("math-line-2"), `PD=${f(distances.directrix)}`);
          renderMath($("math-line-3"), "PF=PD");
        } else {
          renderMath($("math-line-1"), `PF_1=${f(distances.pf1)}`);
          renderMath($("math-line-2"), `PF_2=${f(distances.pf2)}`);
          renderMath($("math-line-3"), info.type === "ellipse" ? `PF_1+PF_2=${f(distances.sum)}` : `|PF_1-PF_2|=${f(distances.difference)}`);
        }
      } else if (state.step === 5) {
        renderMath($("math-line-1"), "PF_1=e\\left(x+\\frac{a}{e}\\right)=ex+a");
        renderMath($("math-line-2"), "PF_2=e\\left(\\frac{a}{e}-x\\right)=a-ex");
        renderMath($("math-line-3"), "PF_1+PF_2=2a");
      } else if (state.step === 6) {
        renderMath($("math-line-1"), "PF_1=e\\left(x+\\frac{a}{e}\\right)=ex+a");
        renderMath($("math-line-2"), "PF_2=e\\left(x-\\frac{a}{e}\\right)=ex-a");
        renderMath($("math-line-3"), "|PF_1-PF_2|=2a");
      } else {
        renderMath($("math-line-1"), "e=\\frac{c}{a}");
        renderMath($("math-line-2"), "c=ae");
        renderMath($("math-line-3"), "\\text{same shape at every scale}");
      }
    }
    const playLabel = $("play-button").querySelector(".button-label");
    const playIcon = $("play-button").querySelector(".button-icon");
    playLabel.textContent = state.running ? "Pause" : state.step === 7 ? "Animate" : "Play";
    playIcon.textContent = state.running ? "Ⅱ" : "▶";
  }

  function render() {
    renderStage();
    updateLedger();
  }

  function stop() {
    state.running = false;
    if (state.raf) root.cancelAnimationFrame(state.raf);
    state.raf = 0;
  }

  function nearestPreset(e) {
    return [0, 0.65, 1, 1.35].reduce((best, value) => Math.abs(value - e) < Math.abs(best - e) ? value : best, 0);
  }

  function setE(value) {
    stop();
    state.e = Math.abs(value - 1) < 0.005 ? 1 : Math.max(0, Math.min(1.6, value));
    eRange.value = String(state.e);
    preset.value = String(nearestPreset(state.e));
    render();
  }

  function setPosition(value) {
    stop();
    state.position = Math.max(0, Math.min(1, value));
    positionRange.value = String(state.position);
    render();
  }

  function moveToStep(next) {
    stop();
    state.step = Math.max(0, Math.min(7, next));
    if (state.step === 5) { state.e = 0.65; state.position = 0.18; }
    if (state.step === 6) { state.e = 1.35; state.position = 0.76; }
    if (state.step === 7) state.e = 0.12;
    eRange.value = String(state.e);
    positionRange.value = String(state.position);
    preset.value = String(nearestPreset(state.e));
    render();
    $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`;
  }

  function toggleAnimation() {
    if (state.step !== 3 && state.step !== 7) return;
    if (state.running) {
      stop();
      render();
      return;
    }
    const reduced = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (state.step === 3) setPosition(1);
      else setE(0.88);
      return;
    }
    const started = root.performance.now();
    const startValue = state.step === 3 ? (state.position >= 0.995 ? 0 : state.position) : (state.e >= 0.875 ? 0 : state.e);
    const duration = state.step === 3 ? 4800 : 4200;
    const target = state.step === 3 ? 1 : 0.88;
    state.running = true;
    function frame(now) {
      if (!state.running) return;
      const t = Math.min(1, (now - started) / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const value = startValue + (target - startValue) * eased;
      if (state.step === 3) {
        state.position = value;
        positionRange.value = String(value);
      } else {
        state.e = value;
        eRange.value = String(value);
      }
      render();
      if (t < 1) state.raf = root.requestAnimationFrame(frame);
      else {
        state.running = false;
        state.raf = 0;
        render();
      }
    }
    state.raf = root.requestAnimationFrame(frame);
    updateLedger();
  }

  function reset() {
    stop();
    state.step = 0;
    state.e = 0.65;
    state.position = 0.18;
    state.choice = "";
    eRange.value = "0.65";
    positionRange.value = "0.18";
    preset.value = "0.65";
    choices.forEach(button => button.setAttribute("aria-pressed", "false"));
    render();
  }

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  choices.forEach(button => button.addEventListener("click", () => {
    state.choice = button.dataset.choice;
    choices.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
    updateLedger();
  }));
  eRange.addEventListener("input", event => setE(Number(event.target.value)));
  positionRange.addEventListener("input", event => setPosition(Number(event.target.value)));
  preset.addEventListener("change", event => setE(Number(event.target.value)));
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
