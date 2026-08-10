(function (root) {
  "use strict";
  const C = root.ComplexRuntime;
  if (!root.document) return;

  const scene = document.body.dataset.scene;
  const svg = document.getElementById("geometry-stage");
  const steps = Array.from(document.querySelectorAll(".step-tab"));
  const reduced = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const app = document.querySelector(".instrument-app");
  const playButton = document.getElementById("play-button");
  const layerToggles = Array.from(document.querySelectorAll("[data-layer-toggle]"));
  const origin = { x: 500, y: 320 };
  const scale = 72;
  const motionSteps = {
    operations: new Set([1, 2, 3]),
    roots: new Set([1, 2]),
    pairs: new Set([2, 3, 4, 5, 6, 7])
  }[scene];
  let step = 0;
  let running = false;
  let paused = false;
  let raf = 0;
  let frameTimer = 0;
  let frameToken = 0;
  let progress = 1;
  let rootPowerCount = 0;
  let rootTogetherCount = 0;
  let animationStart = 0;
  let renderedMathStep = -1;

  steps.forEach((tab, index) => {
    tab.dataset.short = String(index + 1).padStart(2, "0");
    tab.setAttribute("aria-label", tab.textContent.trim());
  });

  const clamp = (value, minimum = 0, maximum = 1) => Math.max(minimum, Math.min(maximum, value));
  const point = (z, centre = origin, unit = scale) => ({ x: centre.x + unit * z.re, y: centre.y - unit * z.im });
  const lerp = (a, b, amount) => ({ re: a.re + (b.re - a.re) * amount, im: a.im + (b.im - a.im) * amount });
  const cartesianLerp = (a, b, amount) => ({ x: a.x + (b.x - a.x) * amount, y: a.y + (b.y - a.y) * amount });
  const arrowHead = (from, to, role, size = 13) => {
    const dx = to.x - from.x, dy = to.y - from.y, length = Math.hypot(dx, dy);
    if (length < 1) return "";
    const ux = dx / length, uy = dy / length, base = { x: to.x - size * ux, y: to.y - size * uy };
    const spread = size * 0.48, left = { x: base.x - spread * uy, y: base.y + spread * ux }, right = { x: base.x + spread * uy, y: base.y - spread * ux };
    return `<polygon class="translation-arrowhead" data-translation-arrowhead="${role}" points="${to.x.toFixed(3)},${to.y.toFixed(3)} ${left.x.toFixed(3)},${left.y.toFixed(3)} ${right.x.toFixed(3)},${right.y.toFixed(3)}"/>`;
  };
  const polarPoint = (centre, radius, theta) => ({ x: centre.x + radius * Math.cos(theta), y: centre.y - radius * Math.sin(theta) });
  const polylineArc = (centre, radius, start, end, segments = 48) => {
    const count = Math.max(2, Math.ceil(segments * Math.abs(end - start) / C.TAU));
    return Array.from({ length: count + 1 }, (_, index) => {
      const item = polarPoint(centre, radius, start + (end - start) * index / count);
      return `${item.x.toFixed(3)},${item.y.toFixed(3)}`;
    }).join(" ");
  };
  const layerChecked = (name) => document.querySelector(`[data-layer-toggle="${name}"]`)?.checked;
  const vector = (z, cssClass, dataLabel, role = "point", dx = 12, dy = -12, visibleLabel = dataLabel, centre = origin, unit = scale) => {
    const p = point(z, centre, unit);
    return `<g data-point-role="${role}" data-point-label="${dataLabel}"><line class="vector ${cssClass}" x1="${centre.x}" y1="${centre.y}" x2="${p.x}" y2="${p.y}"/><circle class="point ${cssClass}" cx="${p.x}" cy="${p.y}" r="7"/><text class="point-label" data-callout="${role}-label" x="${p.x + dx}" y="${p.y + dy}">${visibleLabel}</text></g>`;
  };
  const ghostVector = (z, cssClass = "") => {
    const p = point(z);
    return `<line class="source-ghost ${cssClass}" x1="${origin.x}" y1="${origin.y}" x2="${p.x}" y2="${p.y}"/><circle class="source-ghost-point ${cssClass}" cx="${p.x}" cy="${p.y}" r="6"/>`;
  };
  const livePlate = (lines, role, x = 76, y = 70, width = 250) => `<g data-callout="${role}" data-live-readout="${role}"><rect class="live-plate" x="${x}" y="${y}" width="${width}" height="${34 + Math.max(0, lines.length - 1) * 26}" rx="5"/>${lines.map((line, index) => `<text class="live-value" x="${x + 16}" y="${y + 24 + index * 26}">${line}</text>`).join("")}</g>`;
  function grid() {
    let markup = "";
    for (let i = -6; i <= 6; i += 1) {
      markup += `<line class="argand-grid" x1="${origin.x + i * scale}" y1="32" x2="${origin.x + i * scale}" y2="608"/>`;
      markup += `<line class="argand-grid" x1="68" y1="${origin.y + i * scale}" x2="932" y2="${origin.y + i * scale}"/>`;
    }
    return `${markup}<line class="axis" x1="68" y1="${origin.y}" x2="932" y2="${origin.y}"/><line class="axis" x1="${origin.x}" y1="32" x2="${origin.x}" y2="608"/><text class="stage-note axis-name" x="916" y="302" text-anchor="end">REAL</text><text class="stage-note axis-name" x="518" y="54">IMAGINARY</text>`;
  }

  function operationMarkup() {
    const z = { re: 2, im: 1 };
    const a = { re: -1, im: 2 };
    const multiplier = C.polar(1.5, Math.PI / 3);
    const sum = C.add(z, a);
    const product = C.multiply(z, multiplier);
    const reflected = C.conjugate(z);
    const layerVisible = (name, introducedAt) => step === introducedAt || (step > introducedAt && layerChecked(name));
    let markup = grid() + vector(z, "", "z", "source-z");
    if (step >= 1 && layerVisible("addition", 1)) {
      const amount = step === 1 ? progress : 1;
      const frame = C.translationFrame(z, a, amount);
      const zero = point({ re: 0, im: 0 }), source = point(z), tail = point(frame.tail), head = point(frame.head);
      const copyMid = { x: (tail.x + head.x) / 2, y: (tail.y + head.y) / 2 };
      const shiftMid = { x: (source.x + head.x) / 2, y: (source.y + head.y) / 2 };
      const settled = amount >= 0.999;
      markup += `<g data-layer="addition" data-motion-role="translation-rigid-copy" data-translation-model="rigid-parallel-copy" data-re="${frame.head.re}" data-im="${frame.head.im}" data-tail-re="${frame.tail.re}" data-tail-im="${frame.tail.im}" data-copy-re="${frame.copy.re}" data-copy-im="${frame.copy.im}" data-build-progress="${amount}">`;
      markup += `<polygon class="translation-parallelogram" data-translation-parallelogram="true" points="${zero.x},${zero.y} ${source.x},${source.y} ${head.x},${head.y} ${tail.x},${tail.y}"/>`;
      markup += `<line class="translation-track" data-translation-track="tail" x1="${zero.x}" y1="${zero.y}" x2="${tail.x}" y2="${tail.y}"/>`;
      markup += `<line class="translation-track is-head-track" data-translation-track="head" data-construction-arm="translation" x1="${source.x}" y1="${source.y}" x2="${head.x}" y2="${head.y}"/>${arrowHead(source, head, "head")}`;
      markup += `<line class="translation-copy" data-vector-role="translated-copy" x1="${tail.x}" y1="${tail.y}" x2="${head.x}" y2="${head.y}"/>`;
      markup += `<circle class="translation-tail" data-point-role="translated-tail" cx="${tail.x}" cy="${tail.y}" r="6"/><circle class="point is-result translation-head" data-point-role="translated-head" cx="${head.x}" cy="${head.y}" r="7"/>`;
      markup += `<text class="translation-copy-label" data-callout="translated-copy-label" x="${copyMid.x}" y="${copyMid.y + 38}" text-anchor="middle">same vector z</text><text class="translation-shift-label" data-callout="translation-shift-label" x="${shiftMid.x + 16}" y="${shiftMid.y - 5}">t a</text>`;
      if (settled) markup += `<line class="vector sum-result" data-resultant-role="sum" x1="${zero.x}" y1="${zero.y}" x2="${head.x}" y2="${head.y}"/><text class="point-label" data-callout="sum-label" x="${head.x + 13}" y="${head.y - 12}">z+a</text>`;
      markup += `</g>`;
      if (step === 1) markup += livePlate([`same z: delta = (${frame.copy.re.toFixed(2)}, ${frame.copy.im.toFixed(2)})`, `shift t a = (${frame.tail.re.toFixed(2)}, ${frame.tail.im.toFixed(2)})`, `head = ${frame.head.re.toFixed(2)} + ${frame.head.im.toFixed(2)}i`], "translation-live", 76, 70, 304);
    }
    if (step >= 2 && layerVisible("conjugate", 2)) {
      const q = step === 2 ? lerp(z, reflected, progress) : reflected;
      const source = point(z), mirror = point(q);
      markup += `<g data-layer="conjugate" data-motion-role="reflection-endpoint" data-re="${q.re}" data-im="${q.im}" data-build-progress="${step === 2 ? progress : 1}">${vector(q, "is-conjugate", "conj(z)", "conjugate")}`;
      markup += `<line class="reflection-track" x1="${source.x}" y1="${source.y}" x2="${mirror.x}" y2="${mirror.y}"/><line class="reflection-axis-mark" x1="${source.x - 14}" y1="${origin.y}" x2="${source.x + 14}" y2="${origin.y}"/></g>`;
      if (step === 2) markup += livePlate([`real part stays ${q.re.toFixed(1)}`, `imaginary part: ${q.im.toFixed(2)}`], "reflection-live");
    }
    if (step >= 3 && layerVisible("product", 3)) {
      const amount = step === 3 ? progress : 1;
      const liveMultiplier = C.polar(1 + 0.5 * amount, amount * Math.PI / 3);
      const moving = C.multiply(z, liveMultiplier);
      const startAngle = C.argument(z), endAngle = startAngle + amount * Math.PI / 3;
      markup += `<g data-layer="product" data-motion-role="product-endpoint" data-re="${moving.re}" data-im="${moving.im}" data-modulus="${C.modulus(moving)}" data-angle="${C.argument(moving)}" data-build-progress="${amount}">${vector(moving, "is-result", "mz", "product", 22, 32)}`;
      markup += `<polyline class="angle-arc" data-angle-turn="${amount * Math.PI / 3}" points="${polylineArc(origin, 104, startAngle, endAngle, 34)}"/></g>`;
      if (step === 3) markup += livePlate([`turn = ${(amount * 60).toFixed(1)}°`, `scale = ${(1 + 0.5 * amount).toFixed(2)}`, `|mz| = ${C.modulus(moving).toFixed(2)}`], "product-live", 76, 70, 220);
    }
    if (step >= 4 && layerVisible("modulus", 4)) {
      markup += `<g data-layer="modulus"><circle class="unit-circle" data-modulus-circle="source" cx="${origin.x}" cy="${origin.y}" r="${scale * C.modulus(z)}"/><circle class="unit-circle is-result" data-modulus-circle="product" cx="${origin.x}" cy="${origin.y}" r="${scale * C.modulus(product)}"/></g>`;
    }
    if (step === 5) markup += livePlate(["addition: endpoint shift", "multiplication: turn + scale"], "operation-summary", 76, 70, 286);
    return markup;
  }

  const rootOrigin = { x: 420, y: 320 };
  const rootScale = 92;
  const rootTarget = C.polar(32, Math.PI / 2);
  const rootItems = C.roots(rootTarget, 5);
  const powerDisplayRadius = (exponent) => 48 + 34 * (exponent - 1);
  const rootPoint = (z) => point(z, rootOrigin, rootScale);
  const rootVector = (item, css = "", visibleLabel = String(item.k)) => {
    const p = rootPoint(item);
    return `<g data-root-index="${item.k}" data-root-angle="${item.theta}" data-point-role="root-${item.k}" data-point-label="w${item.k}"><line class="root-ray ${css}" x1="${rootOrigin.x}" y1="${rootOrigin.y}" x2="${p.x}" y2="${p.y}"/><circle class="point ${css}" cx="${p.x}" cy="${p.y}" r="7"/><text class="root-index" data-callout="root-${item.k}-label" x="${p.x + (item.re >= 0 ? 13 : -13)}" y="${p.y + (item.im >= 0 ? -12 : 24)}" text-anchor="${item.re >= 0 ? "start" : "end"}">${visibleLabel}</text></g>`;
  };
  function rootBackdrop() {
    return `<circle class="wheel-backdrop" cx="${rootOrigin.x}" cy="${rootOrigin.y}" r="${2 * rootScale}"/><line class="axis" x1="150" y1="${rootOrigin.y}" x2="690" y2="${rootOrigin.y}"/><line class="axis" x1="${rootOrigin.x}" y1="62" x2="${rootOrigin.x}" y2="578"/><text class="stage-note" x="674" y="300" text-anchor="end">ROOT PLANE</text>`;
  }
  const rootPolygonPoints = rootItems.map((item) => { const p = rootPoint(item); return `${p.x},${p.y}`; }).join(" ");
  const powerOrigin = { x: 330, y: 470 };
  const powerBaseUnit = 300;
  const powerTheta = Math.PI / 10;
  const powerPoint = (exponent, unit, centre = powerOrigin, theta = powerTheta) => polarPoint(centre, unit * 2 ** exponent, exponent * theta);
  const powerCurve = (from, to, unit, theta = powerTheta, centre = powerOrigin, samples = 52) => Array.from({ length: samples + 1 }, (_, index) => {
    const exponent = from + (to - from) * index / samples;
    return powerPoint(exponent, unit, centre, theta);
  });
  // A fixed number of vertices per exponent makes the high-index roots look
  // polygonal: w4 sweeps 4.25 full turns before its fifth power reaches 32i.
  // Allocate vertices by both angular sweep and radial growth so every trace
  // has at least 96 segments per turn and stays smooth at the largest radius.
  const powerCurveSamples = (from, to, theta, minimum = 64) => {
    const exponentSpan = Math.abs(to - from);
    const angularSweep = exponentSpan * Math.abs(theta);
    return Math.max(minimum, Math.ceil(exponentSpan * 32), Math.ceil(angularSweep * 96 / C.TAU));
  };
  function rootSolutionMarkup() {
    let markup = rootBackdrop();
    markup += `<polygon class="root-polygon" data-root-solution-polygon="true" points="${rootPolygonPoints}"/>`;
    markup += rootItems.map((item, index) => rootVector(item, index === 0 ? "is-result" : index % 2 ? "is-conjugate" : "is-comparison", String(item.k))).join("");
    markup += `<g data-root-solution="complete" data-root-count="5"><text class="root-solution-title" data-callout="root-solution-title" x="420" y="72" text-anchor="middle">FIVE ROOTS</text><text class="root-solution-note" data-callout="root-solution-note" x="420" y="594" text-anchor="middle">EQUAL ANGULAR SPACING</text></g>`;
    return markup;
  }
  function powerCoordinateBackdrop(centre, plotUnit, cameraExponent, fullCircle = false) {
    const values = [1, 2, 4, 8, 16, 32];
    const xMin = fullCircle ? 36 : 58, xMax = fullCircle ? 964 : 666;
    const yMin = 28, yMax = 608;
    let markup = `<g data-motion-role="power-coordinate-camera" data-camera-mode="${fullCircle ? "full-plane" : "first-quadrant"}" data-camera-exponent="${cameraExponent.toFixed(8)}" data-plot-unit="${plotUnit.toFixed(8)}">`;
    markup += `<line class="power-axis" data-camera-axis="real" x1="${xMin}" y1="${centre.y}" x2="${xMax}" y2="${centre.y}"/><line class="power-axis" data-camera-axis="imaginary" x1="${centre.x}" y1="${yMin}" x2="${centre.x}" y2="${yMax}"/><text class="stage-note" x="${xMax - 12}" y="${centre.y - 17}" text-anchor="end">REAL</text><text class="stage-note" x="${centre.x + 18}" y="${fullCircle ? 82 : yMin + 18}">IMAGINARY</text>`;
    values.forEach((value) => {
      const radius = value * plotUnit;
      if (radius < 32 || radius > 304) return;
      if (fullCircle) markup += `<circle class="power-scale-ring" data-camera-ring="${value}" data-true-modulus="${value}" data-screen-radius="${radius.toFixed(8)}" cx="${centre.x}" cy="${centre.y}" r="${radius.toFixed(8)}"/>`;
      else markup += `<polyline class="power-scale-ring" data-camera-ring="${value}" data-true-modulus="${value}" data-screen-radius="${radius.toFixed(8)}" points="${polylineArc(centre, radius, 0, Math.PI / 2, 40)}"/>`;
      const tickX = centre.x + radius;
      if (tickX <= xMax - 10) markup += `<line class="power-camera-tick" data-camera-tick="real-${value}" x1="${tickX}" y1="${centre.y - 6}" x2="${tickX}" y2="${centre.y + 6}"/><text class="power-camera-label" data-camera-label="real-${value}" x="${tickX}" y="${centre.y + 24}" text-anchor="middle">${value}</text>`;
      const tickY = centre.y - radius;
      if (tickY >= yMin + 10) markup += `<line class="power-camera-tick" data-camera-tick="imaginary-${value}" x1="${centre.x - 6}" y1="${tickY}" x2="${centre.x + 6}" y2="${tickY}"/><text class="power-camera-label" data-camera-label="imaginary-${value}" x="${centre.x - 14}" y="${tickY + 5}" text-anchor="end">${value}</text>`;
    });
    return `${markup}</g>`;
  }
  function powerWalkMarkup() {
    const activeFraction = (running || paused) ? progress : 0;
    // Keep the one-click comparison visible after a multiplication settles.
    // The main trace uses the accumulated exponent; this inset always shows
    // the local map v -> w0 v, so its completed state is a +18 degree turn
    // and a doubling rather than snapping back to the identity.
    const singleClickFraction = (running || paused) ? activeFraction : rootPowerCount > 0 ? 1 : 0;
    const liveExponent = Math.min(5, rootPowerCount + activeFraction);
    const completeCount = Math.min(5, rootPowerCount);
    const cameraExponent = liveExponent;
    const plotUnit = powerBaseUnit / 2 ** cameraExponent;
    const trace = powerCurve(0, liveExponent, plotUnit, powerTheta, powerOrigin, Math.max(16, Math.ceil(18 * Math.max(1, liveExponent))));
    const current = powerPoint(liveExponent, plotUnit);
    let markup = powerCoordinateBackdrop(powerOrigin, plotUnit, cameraExponent);
    markup += `<g data-motion-role="root-power-step" data-operation-kind="rotate-scale-with-coordinate-camera" data-completed-powers="${completeCount}" data-live-exponent="${liveExponent.toFixed(8)}" data-camera-exponent="${cameraExponent.toFixed(8)}" data-plot-unit="${plotUnit.toFixed(8)}" data-view-scale="${(2 ** cameraExponent).toFixed(8)}" data-turn-per-click="${powerTheta}" data-scale-per-click="2" data-true-modulus="${(2 ** liveExponent).toFixed(8)}" data-screen-vector-length="${powerBaseUnit}" data-build-progress="${activeFraction.toFixed(8)}">`;
    markup += `<polyline class="single-root-power-trace" data-power-walk-trace="true" points="${trace.map((item) => `${item.x.toFixed(3)},${item.y.toFixed(3)}`).join(" ")}"/>`;
    for (let exponent = 0; exponent <= completeCount; exponent += 1) {
      const p = powerPoint(exponent, plotUnit);
      markup += `<circle class="power-history-point ${exponent === completeCount && !running && !paused ? "is-current" : ""}" data-power-history="${exponent}" data-true-modulus="${2 ** exponent}" cx="${p.x}" cy="${p.y}" r="${exponent === completeCount ? 7 : 5}"/>`;
    }
    if (running || paused) markup += `<circle class="power-moving-point" data-power-moving="true" cx="${current.x}" cy="${current.y}" r="8"/>`;
    const vectorLength = plotUnit * 2 ** liveExponent, headSize = Math.min(15, Math.max(7, vectorLength * 0.18));
    markup += `<line class="power-current-vector" data-power-current-vector="true" x1="${powerOrigin.x}" y1="${powerOrigin.y}" x2="${current.x}" y2="${current.y}"/>${arrowHead(powerOrigin, current, "root-power-current", headSize)}`;
    const labelPoint = cartesianLerp(powerOrigin, current, 0.58), dx = current.x - powerOrigin.x, dy = current.y - powerOrigin.y, vectorSize = Math.max(1, Math.hypot(dx, dy));
    markup += `<text class="power-length-label" data-length-label="current-power" data-true-length="${(2 ** liveExponent).toFixed(8)}" x="${(labelPoint.x - 18 * dy / vectorSize).toFixed(3)}" y="${(labelPoint.y + 18 * dx / vectorSize).toFixed(3)}" text-anchor="middle">LENGTH ${(2 ** liveExponent).toFixed(2)}</text>`;
    if (cameraExponent >= 5) {
      const target = powerPoint(5, plotUnit);
      markup += `<circle class="power-target-halo" data-power-target="32i" cx="${target.x}" cy="${target.y}" r="18"/>`;
    }
    markup += `</g>`;
    const clickNumber = Math.min(5, rootPowerCount + ((running || paused) ? 1 : 0));
    markup += livePlate([`MULTIPLICATION ${clickNumber} OF 5`, `TURN ${(singleClickFraction * 18).toFixed(1)} DEGREES`, `TRUE LENGTH ${(2 ** liveExponent).toFixed(2)}`, `GRID UNIT ${plotUnit.toFixed(2)} PX`], "single-root-power-live", 690, 82, 280);
    markup += `<g class="power-click-sequence" data-power-click-sequence="true">${[0, 1, 2, 3, 4, 5].map((exponent) => {
      const x = 720 + exponent * 43, state = exponent < liveExponent - 0.001 ? "complete" : Math.abs(exponent - liveExponent) < 0.08 ? "current" : "waiting";
      return `<circle class="is-${state}" data-power-click="${exponent}" cx="${x}" cy="248" r="9"/><text x="${x}" y="278" text-anchor="middle">${exponent}</text>`;
    }).join("")}</g>`;
    const insetOrigin = { x: 780, y: 505 }, insetStart = polarPoint(insetOrigin, 56, 0), insetLive = polarPoint(insetOrigin, 56 * 2 ** singleClickFraction, singleClickFraction * powerTheta);
    markup += `<g data-local-multiplier-inset="true" data-turn="${singleClickFraction * powerTheta}" data-scale="${2 ** singleClickFraction}"><text class="power-inset-title" x="780" y="360" text-anchor="middle">ONE MULTIPLICATION</text><line class="power-inset-source" x1="${insetOrigin.x}" y1="${insetOrigin.y}" x2="${insetStart.x}" y2="${insetStart.y}"/><line class="power-inset-image" x1="${insetOrigin.x}" y1="${insetOrigin.y}" x2="${insetLive.x}" y2="${insetLive.y}"/>${arrowHead(insetOrigin, insetLive, "root-power-inset", 13)}<polyline class="angle-arc power-inset-arc" points="${polylineArc(insetOrigin, 38, 0, singleClickFraction * powerTheta, 18)}"/><text class="power-inset-label" x="780" y="396" text-anchor="middle">TURN ${(singleClickFraction * 18).toFixed(1)} DEGREES</text><text class="power-inset-label" x="780" y="425" text-anchor="middle">LENGTH ${(2 ** singleClickFraction).toFixed(2)} TIMES</text></g>`;
    if (rootPowerCount === 5 && !running && !paused) markup += `<text class="power-return-result" data-callout="single-root-return" x="780" y="322" text-anchor="middle">TARGET REACHED</text>`;
    return markup;
  }
  function rootSymmetryMarkup() {
    const centre = { x: 370, y: 330 };
    const activeFraction = (running || paused) ? progress : 0;
    const completeCount = Math.min(5, rootTogetherCount);
    const livePower = Math.min(5, completeCount + activeFraction);
    const fromPower = completeCount;
    const toPower = Math.min(5, completeCount + ((running || paused) ? 1 : 0));
    const finalState = completeCount === 5 && !running && !paused;
    const cameraExponent = livePower;
    const plotUnit = powerBaseUnit / 2 ** cameraExponent;
    let markup = powerCoordinateBackdrop(centre, plotUnit, cameraExponent, true);
    markup += `<g data-motion-role="root-synchronous-powers" data-operation-kind="five-discrete-synchronous-powers" data-interpolation-only="between-integer-powers" data-completed-powers="${completeCount}" data-from-power="${fromPower}" data-to-power="${toPower}" data-live-power="${livePower.toFixed(8)}" data-camera-exponent="${cameraExponent.toFixed(8)}" data-plot-unit="${plotUnit.toFixed(8)}" data-screen-vector-length="${powerBaseUnit}" data-root-count="5" data-shared-source="1" data-shared-target="32i" data-build-progress="${activeFraction.toFixed(8)}">`;
    rootItems.forEach((item) => {
      const samplePower = Math.max(livePower, toPower);
      const traceSegments = powerCurveSamples(0, samplePower, item.theta);
      const trace = powerCurve(0, livePower, plotUnit, item.theta, centre, traceSegments);
      const raw = powerPoint(livePower, plotUnit, centre, item.theta);
      const endpoint = finalState ? { x: centre.x, y: centre.y - powerBaseUnit } : raw;
      const trueValue = finalState ? rootTarget : C.polar(2 ** livePower, livePower * item.theta);
      markup += `<polyline class="power-trace" data-power-trace="${item.k}" data-path-samples="${trace.length}" data-path-segments="${traceSegments}" data-angular-sweep="${(livePower * Math.abs(item.theta)).toFixed(8)}" points="${trace.map((node, index) => index === trace.length - 1 && finalState ? `${endpoint.x.toFixed(3)},${endpoint.y.toFixed(3)}` : `${node.x.toFixed(3)},${node.y.toFixed(3)}`).join(" ")}"/>`;
      markup += `<line class="power-source-ray" data-root-index="${item.k}" x1="${centre.x}" y1="${centre.y}" x2="${endpoint.x.toFixed(3)}" y2="${endpoint.y.toFixed(3)}"/>`;
      markup += `<circle class="power-marker ${finalState ? "is-converged" : ""}" data-power-image="${item.k}" data-root-index="${item.k}" data-live-power="${livePower.toFixed(8)}" data-true-re="${trueValue.re.toFixed(8)}" data-true-im="${trueValue.im.toFixed(8)}" cx="${endpoint.x.toFixed(3)}" cy="${endpoint.y.toFixed(3)}" r="${finalState ? 8 + item.k * 3 : 8}"/>`;
    });
    const target = { x: centre.x, y: centre.y - powerBaseUnit };
    if (cameraExponent >= 5) markup += `<circle class="power-target-halo" data-power-target="32i" cx="${target.x}" cy="${target.y}" r="27"/>`;
    markup += `</g>`;
    markup += livePlate(["FIVE VECTORS", finalState ? "POWER 5 OF 5" : (running || paused) ? `POWER ${fromPower} TO ${toPower}` : `POWER ${completeCount} OF 5`, `TRUE LENGTH ${(2 ** livePower).toFixed(2)}`, finalState ? "ONE ENDPOINT" : "GRID SHRINKS"], "root-symmetry-live", 700, 70, 240);
    markup += `<g class="power-click-sequence is-five-roots" data-synchronous-power-sequence="true">${[1, 2, 3, 4, 5].map((value) => {
      const x = 724 + (value - 1) * 52, state = value < livePower - 0.001 ? "complete" : Math.abs(value - livePower) < 0.1 ? "current" : "waiting";
      return `<circle class="is-${state}" data-synchronous-power="${value}" cx="${x}" cy="264" r="9"/><text x="${x}" y="294" text-anchor="middle">${value}</text>`;
    }).join("")}</g>`;
    if (completeCount === 0 && !running && !paused) markup += `<text class="root-symmetry-result is-source" data-callout="root-symmetry-source" x="370" y="610" text-anchor="middle">FIVE COPIES START TOGETHER AT 1</text>`;
    if (finalState) markup += `<text class="root-symmetry-result" data-callout="root-symmetry-result" x="370" y="610" text-anchor="middle">FIVE PATHS, ONE ENDPOINT</text>`;
    return markup;
  }
  function legacyRootsMarkup() {
    const theta0 = rootItems[0].theta;
    const spacing = C.TAU / 5;
    let markup = step === 7 ? "" : rootBackdrop();
    if (step === 0) {
      const targetTip = polarPoint(rootOrigin, 178, Math.PI / 2);
      markup += `<line class="target-direction" x1="${rootOrigin.x}" y1="${rootOrigin.y}" x2="${targetTip.x}" y2="${targetTip.y}" data-normalised-target="32i"/><text class="point-label" data-callout="target-label" x="${targetTip.x + 16}" y="${targetTip.y + 24}">32i: argument π/2</text>`;
    }
    if (step === 1) {
      const radius = 2 * rootScale * progress;
      const q = C.polar(2 * progress, theta0);
      const p = rootPoint(q);
      markup += `<circle class="generated-radius-circle" data-motion-role="root-radius" data-root-radius="${2 * progress}" data-build-progress="${progress}" cx="${rootOrigin.x}" cy="${rootOrigin.y}" r="${radius}"/>`;
      markup += `<line class="construction-arm" x1="${rootOrigin.x}" y1="${rootOrigin.y}" x2="${p.x}" y2="${p.y}"/><circle class="moving-construction-point" cx="${p.x}" cy="${p.y}" r="7"/>`;
      markup += livePlate([`fifth-root radius = ${(2 * progress).toFixed(2)}`, "target radius 32 → root radius 2"], "root-radius-live", 620, 110, 292);
    }
    if (step >= 2 && step < 7) markup += `<circle class="wheel-backdrop" cx="${rootOrigin.x}" cy="${rootOrigin.y}" r="${2 * rootScale}"/>`;
    if (step === 2) {
      const angle = theta0 * progress;
      const candidate = { ...C.polar(2, angle), k: 0, theta: angle };
      markup += `<g data-motion-role="root-angle-division" data-target-angle="${Math.PI / 2}" data-root-angle="${angle}" data-build-progress="${progress}">${rootVector(candidate, "is-result", "w0")}`;
      markup += `<polyline class="target-angle-arc" points="${polylineArc(rootOrigin, 172, 0, Math.PI / 2, 24)}"/><polyline class="angle-arc" points="${polylineArc(rootOrigin, 92, 0, angle, 24)}"/></g>`;
      markup += livePlate(["target angle π/2", `divide by 5 → ${(angle / Math.PI).toFixed(3)}π`], "root-division-live", 620, 110, 260);
    }
    if (step === 3) {
      const numerator = Math.PI / 2 + C.TAU * progress;
      const angle = numerator / 5;
      const candidate = { ...C.polar(2, angle), k: 1, theta: angle };
      markup += rootVector(rootItems[0], "is-result");
      markup += `<g data-motion-role="root-index-advance" data-numerator-angle="${numerator}" data-root-angle="${angle}" data-build-progress="${progress}">${rootVector(candidate, "is-conjugate", "w1")}`;
      markup += `<polyline class="advance-ring" points="${polylineArc(rootOrigin, 174, -Math.PI / 2, -Math.PI / 2 + C.TAU * progress, 56)}"/></g>`;
      markup += livePlate([`numerator advance = ${(progress * 2).toFixed(2)}π`, `divide by 5 → ${(angle / Math.PI).toFixed(3)}π`], "root-advance-live", 620, 110, 286);
    }
    if (step === 4) {
      const travel = 3 * progress;
      const segment = progress >= 1 ? 2 : Math.min(2, Math.floor(travel));
      const local = progress >= 1 ? 1 : travel - segment;
      const cursorAngle = rootItems[segment + 1].theta + spacing * local;
      const cursor = polarPoint(rootOrigin, 2 * rootScale, cursorAngle);
      const completed = progress >= 1 ? 3 : Math.floor(travel);
      const reached = rootItems.slice(0, 2 + completed);
      markup += reached.map((item, index) => rootVector(item, index === 0 ? "is-result" : index % 2 ? "is-conjugate" : "is-comparison")).join("");
      markup += `<g data-motion-role="root-equal-spacing" data-spacing-angle="${spacing}" data-generated-through="${1 + completed}" data-build-progress="${progress}"><polyline class="angle-arc" points="${polylineArc(rootOrigin, 86, rootItems[segment + 1].theta, cursorAngle, 28)}"/><circle class="moving-construction-point" data-spacing-cursor="true" data-root-angle="${cursorAngle}" cx="${cursor.x}" cy="${cursor.y}" r="7"/></g>`;
      markup += livePlate([`index reached: k = ${1 + completed}`, `each advance adds 2π/5`], "root-spacing-live", 620, 110, 270);
    }
    if (step === 5) {
      const points = rootItems.map(rootPoint);
      const edgeTravel = 5 * progress;
      const completeEdges = progress >= 1 ? 5 : Math.floor(edgeTravel);
      const edge = progress >= 1 ? 4 : Math.min(4, completeEdges);
      const local = progress >= 1 ? 1 : edgeTravel - edge;
      const path = [points[0]];
      for (let index = 1; index <= completeEdges && index <= 4; index += 1) path.push(points[index]);
      let moving = points[0];
      if (progress < 1) {
        const from = points[edge];
        const to = points[(edge + 1) % 5];
        moving = cartesianLerp(from, to, local);
        path.push(moving);
      } else path.push(points[0]);
      markup += rootItems.map((item, index) => rootVector(item, index === 0 ? "is-result" : index % 2 ? "is-conjugate" : "is-comparison")).join("");
      markup += `<polyline class="root-polygon ${progress < 1 ? "is-building" : ""}" data-motion-role="root-polygon-closure" data-build-progress="${progress}" data-completed-edges="${completeEdges}" points="${path.map((item) => `${item.x},${item.y}`).join(" ")}"/>`;
      if (progress < 1) markup += `<circle class="moving-construction-point" cx="${moving.x}" cy="${moving.y}" r="7"/>`;
      markup += livePlate([`equal edges drawn = ${completeEdges}/5`, progress === 1 ? "the regular pentagon is a consequence" : "connect the indexed roots in order"], "root-polygon-live", 620, 110, 300);
    }
    if (step === 6) {
      markup += `<polygon class="root-polygon" data-build-progress="1" points="${rootPolygonPoints}"/>`;
      markup += rootItems.map((item, index) => rootVector(item, index === 0 ? "is-result" : "is-conjugate")).join("");
    }
    if (step === 6) markup += `<text class="stage-note result-statement" data-callout="complete-index-set" x="365" y="566" text-anchor="middle">k = 0, 1, 2, 3, 4 INDEX THE COMPLETE WHEEL</text>`;
    if (step === 7) {
      const source = { x: 190, y: 306 }, sourceScale = 42;
      const panel = { x: 700, y: 320 };
      const exponent = 1 + 4 * progress;
      const liveModulus = 2 ** exponent;
      const liveDisplayRadius = powerDisplayRadius(exponent);
      const sourcePoints = rootItems.map((item) => point(item, source, sourceScale));
      markup += `<g data-motion-role="root-power-verification" data-power-display="doubling-modulus-rings" data-power-return="32i" data-exponent="${exponent}" data-power-modulus="${liveModulus}" data-display-radius="${liveDisplayRadius}" data-build-progress="${progress}">`;
      markup += `<text class="power-panel-title" x="${source.x}" y="130" text-anchor="middle">FIVE ROOTS</text><circle class="power-source-wheel" cx="${source.x}" cy="${source.y}" r="${2 * sourceScale}"/><line class="power-axis" x1="82" y1="${source.y}" x2="298" y2="${source.y}"/><line class="power-axis" x1="${source.x}" y1="198" x2="${source.x}" y2="414"/><polygon class="root-polygon power-source-polygon" points="${sourcePoints.map((value) => `${value.x},${value.y}`).join(" ")}"/>`;
      rootItems.forEach((item, index) => {
        const sourcePoint = sourcePoints[index];
        markup += `<line class="power-source-ray" data-root-index="${item.k}" x1="${source.x}" y1="${source.y}" x2="${sourcePoint.x}" y2="${sourcePoint.y}"/><circle class="point source-power-root" data-root-index="${item.k}" cx="${sourcePoint.x}" cy="${sourcePoint.y}" r="6"/><text class="root-index power-source-label" x="${sourcePoint.x + (item.re >= 0 ? 10 : -10)}" y="${sourcePoint.y + (item.im >= 0 ? -10 : 20)}" text-anchor="${item.re >= 0 ? "start" : "end"}">w${item.k}</text>`;
      });
      markup += `<path class="power-map-arrow" d="M 316 306 C 370 250, 425 250, 478 306"/><polygon class="power-map-arrowhead" points="478,306 458,298 463,318"/><text class="power-map-label" x="398" y="235" text-anchor="middle">raise to the live power n</text>`;
      markup += `<text class="power-panel-title" x="${panel.x}" y="82" text-anchor="middle">ROTATE + SCALE UNDER w<tspan baseline-shift="super" font-size="13">n</tspan></text><text class="power-ring-explainer" x="${panel.x}" y="108" text-anchor="middle">each ring doubles |w<tspan baseline-shift="super" font-size="12">n</tspan>|</text><line class="power-axis" x1="${panel.x - 214}" y1="${panel.y}" x2="${panel.x + 214}" y2="${panel.y}"/><line class="power-axis" x1="${panel.x}" y1="${panel.y - 210}" x2="${panel.x}" y2="${panel.y + 210}"/>`;
      [1, 2, 3, 4, 5].forEach((power) => {
        const radius = powerDisplayRadius(power);
        markup += `<circle class="power-modulus-ring" data-power-level="${power}" data-modulus-ring="${2 ** power}" data-display-radius="${radius}" cx="${panel.x}" cy="${panel.y}" r="${radius}"/><text class="power-ring-label" x="${panel.x + radius + 7}" y="${panel.y - 5}">${2 ** power}</text>`;
      });
      rootItems.forEach((item) => {
        const samples = Array.from({ length: 42 }, (_, index) => 1 + (exponent - 1) * index / 41);
        const trace = samples.map((power) => polarPoint(panel, powerDisplayRadius(power), power * item.theta));
        const current = trace.at(-1);
        markup += `<polyline class="power-trace" data-power-trace="${item.k}" points="${trace.map((value) => `${value.x.toFixed(3)},${value.y.toFixed(3)}`).join(" ")}"/><circle class="power-marker ${progress === 1 ? "is-converged" : ""}" data-power-image="${item.k}" data-power-exponent="${exponent}" data-angle="${exponent * item.theta}" data-modulus="${liveModulus}" data-display-radius="${liveDisplayRadius}" cx="${current.x}" cy="${current.y}" r="${progress === 1 ? 6 + 2 * item.k : 6}"/>`;
      });
      const target = polarPoint(panel, powerDisplayRadius(5), Math.PI / 2);
      markup += `<circle class="power-target-halo" data-power-target="32i" cx="${target.x}" cy="${target.y}" r="18"/><text class="power-target-label" x="${target.x + 24}" y="${target.y + 7}">32i</text>`;
      const currentPower = Math.min(5, Math.max(1, Math.ceil(exponent - 0.001)));
      [1, 2, 3, 4, 5].forEach((power, index) => {
        const status = power < currentPower ? "complete" : power === currentPower ? "current" : "waiting";
        const x = 338 + index * 124;
        markup += `<g class="power-exponent-stage is-${status}" data-power-stage="${power}" data-stage-modulus="${2 ** power}" data-stage-status="${status}"><rect x="${x}" y="548" width="112" height="66" rx="5"/><text x="${x + 56}" y="574" text-anchor="middle">n = ${power}</text><text x="${x + 56}" y="599" text-anchor="middle">|wⁿ| = ${2 ** power}</text></g>`;
      });
      markup += `<text class="power-live-readout" data-callout="power-modulus" x="82" y="478">n = ${exponent.toFixed(2)}</text><text class="power-live-readout" x="82" y="508">|wⁿ| = ${liveModulus.toFixed(2)}</text></g>`;
      if (progress === 1) markup += `<text class="power-return-result" data-callout="power-result" x="700" y="536" text-anchor="middle">FIVE PATHS MEET AT THE SAME 32i</text>`;
    }
    return markup;
  }

  function rootsMarkup() {
    if (step === 0) return rootSolutionMarkup();
    if (step === 1) return powerWalkMarkup();
    return rootSymmetryMarkup();
  }

  function pairsMarkup() {
    const radical = Math.sqrt(2);
    const alpha = { re: 0, im: radical };
    const conjugate = { re: 0, im: -radical };
    const real = (value) => ({ re: value, im: 0 });
    const addReal = (z, value) => C.add(z, real(value));
    const alphaStates = [real(1), alpha, addReal(alpha, -2), { re: -2, im: -2 * radical }, { re: 0, im: -2 * radical }, real(4), real(0)];
    const conjugateStates = alphaStates.map(C.conjugate);
    const branchPoint = (z, branch, label = "", radius = 7) => {
      const p = point(z);
      const above = z.im >= 0;
      return `<g data-horner-branch="${branch}" data-current-re="${z.re}" data-current-im="${z.im}"><circle class="point horner-point is-${branch}" cx="${p.x}" cy="${p.y}" r="${radius}"/>${label ? `<text class="horner-point-label" data-callout="${branch}-value-label" x="${p.x + 13}" y="${p.y + (above ? -13 : 27)}">${label}</text>` : ""}</g>`;
    };
    const branchVector = (z, branch, css = "") => {
      const p = point(z);
      return `<line class="horner-vector is-${branch} ${css}" x1="${origin.x}" y1="${origin.y}" x2="${p.x}" y2="${p.y}"/>`;
    };
    const mirrorGuide = (a, b, role) => {
      if (!layerChecked("mirror-guides")) return "";
      const first = point(a), second = point(b);
      if (Math.hypot(first.x - second.x, first.y - second.y) < 2) return "";
      return `<line class="horner-mirror-guide" data-mirror-guide="${role}" x1="${first.x}" y1="${first.y}" x2="${second.x}" y2="${second.y}"/>`;
    };
    const multiplyTrace = (before, sign, amount) => Array.from({ length: 44 }, (_, index) => {
      const t = amount * index / 43;
      return point(C.multiply(before, C.polar(radical ** t, sign * Math.PI * t / 2)));
    });
    const multiplyStage = (beforeA, beforeB, stageIndex, amount) => {
      const multiplierA = C.polar(radical ** amount, Math.PI * amount / 2);
      const multiplierB = C.polar(radical ** amount, -Math.PI * amount / 2);
      const liveA = C.multiply(beforeA, multiplierA), liveB = C.multiply(beforeB, multiplierB);
      const traceA = multiplyTrace(beforeA, 1, amount), traceB = multiplyTrace(beforeB, -1, amount);
      const pA = point(liveA), pB = point(liveB), shared = Math.hypot(liveA.re - liveB.re, liveA.im - liveB.im) < 0.04;
      let result = `<g data-motion-role="horner-multiply" data-horner-stage="${stageIndex}" data-operation-kind="rotate-scale" data-build-progress="${amount}" data-turn="${Math.PI * amount / 2}" data-scale="${radical ** amount}">`;
      result += `${branchVector(beforeA, "alpha", "is-source")}${branchVector(beforeB, "conjugate", "is-source")}`;
      result += `<polyline class="horner-multiply-trace is-alpha" data-multiply-trace="alpha" points="${traceA.map((value) => `${value.x.toFixed(3)},${value.y.toFixed(3)}`).join(" ")}"/><polyline class="horner-multiply-trace is-conjugate" data-multiply-trace="conjugate" points="${traceB.map((value) => `${value.x.toFixed(3)},${value.y.toFixed(3)}`).join(" ")}"/>`;
      result += `${branchVector(liveA, "alpha")}${branchVector(liveB, "conjugate")}${branchPoint(liveA, "alpha", shared ? "" : "α path")}${branchPoint(liveB, "conjugate", shared ? "" : "ᾱ path", 5)}`;
      result += mirrorGuide(liveA, liveB, `multiply-${stageIndex}`);
      if (shared) result += `<text class="horner-shared-label" data-callout="shared-value-label" x="${pA.x + 14}" y="${pA.y - 14}">both → ${liveA.re.toFixed(0)}</text>`;
      if (layerChecked("operation-labels")) result += `<g class="horner-operation-badge" data-callout="multiply-operation"><rect x="694" y="78" width="232" height="78" rx="5"/><text x="712" y="108">MULTIPLY BY z</text><text x="712" y="137">turn ±${(90 * amount).toFixed(1)}° · scale ${(radical ** amount).toFixed(2)}</text></g>`;
      result += `</g>${livePlate([`curved path: rotate ±${(90 * amount).toFixed(1)}°`, `vector length × ${(radical ** amount).toFixed(2)}`], `horner-multiply-${stageIndex}-live`, 74, 78, 278)}`;
      return result;
    };
    const translateStage = (beforeA, beforeB, shift, stageIndex, amount) => {
      const displacement = real(shift * amount), tail = point(displacement), headAValue = C.add(beforeA, displacement), headBValue = C.add(beforeB, displacement);
      const sourceA = point(beforeA), sourceB = point(beforeB), headA = point(headAValue), headB = point(headBValue), zero = point(real(0));
      const shared = Math.hypot(headAValue.re - headBValue.re, headAValue.im - headBValue.im) < 0.04;
      let result = `<g data-motion-role="horner-translate" data-horner-stage="${stageIndex}" data-operation-kind="rigid-translate" data-shift="${shift}" data-build-progress="${amount}" data-tail-re="${displacement.re}" data-tail-im="0">`;
      result += `${branchVector(beforeA, "alpha", "is-source")}${branchVector(beforeB, "conjugate", "is-source")}`;
      result += `<line class="horner-shift-track" data-shift-track="tail" x1="${zero.x}" y1="${zero.y}" x2="${tail.x}" y2="${tail.y}"/><line class="horner-shift-track" data-shift-track="alpha-head" x1="${sourceA.x}" y1="${sourceA.y}" x2="${headA.x}" y2="${headA.y}"/><line class="horner-shift-track" data-shift-track="conjugate-head" x1="${sourceB.x}" y1="${sourceB.y}" x2="${headB.x}" y2="${headB.y}"/>`;
      result += `<line class="horner-rigid-copy is-alpha" data-rigid-copy="alpha" x1="${tail.x}" y1="${tail.y}" x2="${headA.x}" y2="${headA.y}"/><line class="horner-rigid-copy is-conjugate" data-rigid-copy="conjugate" x1="${tail.x}" y1="${tail.y}" x2="${headB.x}" y2="${headB.y}"/>`;
      result += `${branchPoint(headAValue, "alpha", shared ? "" : "α path")}${branchPoint(headBValue, "conjugate", shared ? "" : "ᾱ path", 5)}${mirrorGuide(headAValue, headBValue, `translate-${stageIndex}`)}`;
      if (amount >= 0.999 && !shared) result += `${branchVector(headAValue, "alpha", "is-resultant")}${branchVector(headBValue, "conjugate", "is-resultant")}`;
      if (shared) result += `<circle class="horner-zero-target" data-final-value="${headAValue.re.toFixed(0)}" cx="${headA.x}" cy="${headA.y}" r="15"/><text class="horner-shared-label" data-callout="shared-value-label" x="${headA.x + 18}" y="${headA.y - 15}">${Math.abs(headAValue.re) < 0.01 ? "both → 0" : `both → ${headAValue.re.toFixed(0)}`}</text>`;
      if (layerChecked("operation-labels")) result += `<g class="horner-operation-badge is-translate" data-callout="translate-operation"><rect x="674" y="78" width="270" height="78" rx="5"/><text x="692" y="108">ADD ${shift > 0 ? "+" : ""}${shift}</text><text x="692" y="137">rigid horizontal shift ${(shift * amount).toFixed(2)}</text></g>`;
      result += `</g>${livePlate([`straight shift = ${(shift * amount).toFixed(2)}`, "same direction · same length"], `horner-translate-${stageIndex}-live`, 74, 78, 278)}`;
      return result;
    };
    const fullSummary = () => {
      let result = `<g data-motion-role="horner-symmetry-summary" data-final-value="0"><text class="horner-summary-title" data-callout="horner-summary" x="500" y="75" text-anchor="middle">MIRRORED AT EVERY STAGE → BOTH END AT 0</text>`;
      [[alphaStates, 1, "alpha"], [conjugateStates, -1, "conjugate"]].forEach(([states, sign, branch]) => {
        [[0, 1], [2, 3], [4, 5]].forEach(([from]) => {
          const trace = multiplyTrace(states[from], sign, 1);
          result += `<polyline class="horner-multiply-trace is-${branch}" data-operation-kind="rotate-scale" points="${trace.map((value) => `${value.x.toFixed(3)},${value.y.toFixed(3)}`).join(" ")}"/>`;
        });
        [[1, 2], [3, 4], [5, 6]].forEach(([from, to]) => {
          const a = point(states[from]), b = point(states[to]);
          result += `<line class="horner-summary-translate is-${branch}" data-operation-kind="rigid-translate" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
        });
        states.forEach((value, index) => {
          const p = point(value), shared = index === 0 || index >= 5;
          result += `<circle class="horner-summary-node is-${branch}" data-summary-branch="${branch}" data-summary-stage="${index}" cx="${p.x}" cy="${p.y}" r="${shared ? (branch === "alpha" ? 8 : 4) : 6}"/>`;
        });
      });
      if (layerChecked("mirror-guides")) [1, 2, 3, 4].forEach((index) => { result += mirrorGuide(alphaStates[index], conjugateStates[index], `summary-${index}`); });
      const zero = point(real(0));
      result += `<circle class="horner-zero-target" data-final-value="0" cx="${zero.x}" cy="${zero.y}" r="18"/><text class="horner-origin-label" data-callout="origin-result" x="${zero.x + 22}" y="${zero.y - 16}">p(α)=p(ᾱ)=0</text>`;
      if (layerChecked("operation-labels")) {
        const labels = [["× z", "multiply"], ["− 2", "translate"], ["× z", "multiply"], ["+ 2", "translate"], ["× z", "multiply"], ["− 4", "translate"]];
        result += `<g class="horner-operation-strip" data-callout="operation-strip">${labels.map(([label, kind], index) => `<g class="is-${kind}"><rect x="150" y="558" width="104" height="52" rx="5" transform="translate(${index * 118} 0)"/><text x="202" y="591" text-anchor="middle" transform="translate(${index * 118} 0)">${label}</text></g>`).join("")}</g>`;
      }
      return `${result}</g>`;
    };
    let markup = grid();
    if (step === 0) {
      markup += `<g data-polynomial-specimen="real-cubic"><circle class="horner-root is-real" cx="${point(real(2)).x}" cy="${origin.y}" r="7"/><text class="horner-point-label" x="${point(real(2)).x + 14}" y="${origin.y - 14}">2</text>${branchVector(alpha, "alpha")}${branchVector(conjugate, "conjugate")}${branchPoint(alpha, "alpha", "α = i√2")}${branchPoint(conjugate, "conjugate", "ᾱ = −i√2", 5)}${mirrorGuide(alpha, conjugate, "input-roots")}</g>${livePlate(["p(z) = (z−2)(z²+2)", "roots: 2, ±i√2"], "polynomial-specimen", 640, 88, 284)}`;
    }
    if (step === 1) {
      const start = real(1), startPoint = point(start);
      markup += `<g data-horner-input-pair="true">${branchVector(alpha, "alpha")}${branchVector(conjugate, "conjugate")}${branchPoint(alpha, "alpha", "input α")}${branchPoint(conjugate, "conjugate", "input ᾱ", 5)}${mirrorGuide(alpha, conjugate, "input-pair")}<line class="horner-vector is-start" x1="${origin.x}" y1="${origin.y}" x2="${startPoint.x}" y2="${startPoint.y}"/><circle class="horner-start-point" cx="${startPoint.x}" cy="${startPoint.y}" r="7"/><text class="horner-point-label" x="${startPoint.x + 13}" y="${startPoint.y - 13}">u₀ = 1</text></g>${livePlate(["two inputs, one real coefficient list", "start both Horner accumulators at 1"], "horner-inputs", 640, 88, 300)}`;
    }
    if (step === 2) markup += multiplyStage(alphaStates[0], conjugateStates[0], 1, progress);
    if (step === 3) markup += translateStage(alphaStates[1], conjugateStates[1], -2, 1, progress);
    if (step === 4) markup += multiplyStage(alphaStates[2], conjugateStates[2], 2, progress);
    if (step === 5) markup += translateStage(alphaStates[3], conjugateStates[3], 2, 2, progress);
    if (step === 6) markup += multiplyStage(alphaStates[4], conjugateStates[4], 3, progress);
    if (step === 7) markup += translateStage(alphaStates[5], conjugateStates[5], -4, 3, progress);
    if (step === 8) markup += fullSummary();
    return markup;
  }

  const copy = {
    operations: ["Register one complex arrow", "Addition translates", "Conjugation reflects", "Multiplication rotates", "Moduli multiply", "Keep the rules separate"],
    roots: ["Solve z⁵ = 32i", "Power one root five times", "Power all five roots together"],
    pairs: ["Choose a cubic with a visible pair", "Start from mirrored inputs", "Multiply: rotate and scale", "Add −2: translate rigidly", "Multiply again", "Add +2: translate rigidly", "Multiply: meet at 4", "Add −4: return to the origin", "Read the conjugate-root theorem"]
  }[scene];
  function mathLines() {
    if (scene === "operations") {
      if (step === 0) return ["z=2+i"];
      if (step === 1) return ["a=-1+2i", "z+a=1+3i"];
      if (step === 2) return ["\\overline z=2-i", "\\overline{x+iy}=x-iy"];
      if (step === 3) return ["m=1.5e^{i\\pi/3}", "mz=m\\cdot z"];
      if (step === 4) return ["|mz|=|m||z|", "\\arg(mz)=\\arg m+\\arg z"];
      return ["|z+a|\\neq |z||a|", "\\text{add: translate}", "\\text{multiply: turn + scale}"];
    }
    if (scene === "roots") {
      if (step === 0) return ["32i=32e^{i(\\pi/2+2\\pi k)}", "r=2,\\quad \\theta_k=\\pi/10+2\\pi k/5", "\\boxed{z_k=2e^{i\\theta_k}},\\quad k=0,1,2,3,4"];
      if (step === 1) {
        const n = rootPowerCount;
        return ["w_0=2e^{i\\pi/10}", "u_0=1,\\quad u_{n+1}=w_0u_n", `u_${n}=w_0^{${n}}=2^{${n}}e^{i${n}\\pi/10}`];
      }
      const n = rootTogetherCount;
      return ["w_k=2e^{i(\\pi/10+2\\pi k/5)}", "v_{k,0}=1,\\quad v_{k,n+1}=w_kv_{k,n}", n === 5 ? "v_{k,5}=w_k^5=32i" : `v_{k,${n}}=w_k^{${n}}=2^{${n}}e^{i${n}(\\pi/10+2\\pi k/5)}`];
    }
    if (step === 0) return ["p(z)=z^3-2z^2+2z-4", "p(z)=(z-2)(z^2+2)", "\\alpha=i\\sqrt2"];
    if (step === 1) return ["\\overline\\alpha=-i\\sqrt2", "u_0=\\overline{u_0}=1", "\\text{same real coefficient list}"];
    if (step === 2) return ["1\\cdot\\alpha=\\alpha", "1\\cdot\\overline\\alpha=\\overline\\alpha", "\\overline{u\\alpha}=\\overline u\\,\\overline\\alpha"];
    if (step === 3) return ["u_1=\\alpha-2", "\\overline{u_1}=\\overline\\alpha-2", "\\overline{u-2}=\\overline u-2"];
    if (step === 4) return ["u_1\\alpha=-2-2i\\sqrt2", "\\overline{u_1}\\,\\overline\\alpha=-2+2i\\sqrt2", "\\text{turn }90^\\circ,\\ \\text{scale }\\sqrt2"];
    if (step === 5) return ["u_2=u_1\\alpha+2=-2i\\sqrt2", "\\overline{u_2}=2i\\sqrt2", "\\text{same horizontal shift }+2"];
    if (step === 6) return ["u_2\\alpha=4", "\\overline{u_2}\\,\\overline\\alpha=4", "\\text{both paths meet on }\\mathbb R"];
    if (step === 7) return ["u_3=4-4=0", "\\overline{u_3}=4-4=0", "p(\\alpha)=p(\\overline\\alpha)=0"];
    return ["p(\\overline\\alpha)=\\overline{p(\\alpha)}", "p(\\alpha)=0", "p(\\overline\\alpha)=0"];
  }
  const claimKeys = {
    operations: [["z"], ["addend", "sum"], ["conjugate", "reflection-rule"], ["multiplier", "product"], ["modulus-law", "argument-law"], ["addition-comparison", "addition-action", "multiplication-action"]],
    roots: [["target-equation", "polar-equations", "complete-root-family"], ["chosen-root", "power-recurrence", "current-power"], ["indexed-root-family", "integer-power-family", "shared-fifth-power"]],
    pairs: [["polynomial-definition", "factorisation", "chosen-root"], ["alpha-input", "conjugate-input", "shared-coefficients"], ["horner-start", "first-multiply", "multiply-symmetry"], ["first-accumulator", "first-conjugate-accumulator", "translate-symmetry"], ["second-multiply", "second-conjugate-multiply", "multiply-action"], ["second-accumulator", "second-conjugate-accumulator", "horizontal-translation"], ["third-multiply", "shared-real-value", "multiply-symmetry"], ["final-translate", "alpha-zero", "conjugate-zero"], ["conjugation-polynomial", "root-result", "conjugate-root-theorem"]]
  }[scene];
  const rootDescriptions = [
    "Solve modulus and argument on the right; read the complete set of five roots on the left.",
    "Start at 1. Each click multiplies once by w₀: the vector turns 18 degrees while the coordinate scale halves, so the true length visibly doubles without the arrow becoming tiny.",
    "Five copies start together at 1. Click five times to advance all wₖ powers in lockstep: they separate, rotate through different angles, and converge at 32i on the fifth power."
  ];
  const pairDescriptions = [
    "Use a factored real cubic whose non-real roots are easy to see before evaluating it.",
    "The two inputs are mirror images; both Horner accumulators start from the same real value 1.",
    "Multiplication keeps the tail at the origin while each endpoint turns 90° and scales by √2.",
    "Adding −2 moves both tail and head left together, so the arrow stays parallel and keeps its length.",
    "The next multiplication again curves around the origin; the two paths remain exact mirror images.",
    "Adding +2 is a rigid horizontal shift, visibly different from a turn about the origin.",
    "The third multiplication brings the conjugate paths together at the shared real value 4.",
    "The final coefficient translates that shared arrow left by 4, landing exactly at the origin.",
    "Every real-coefficient Horner step commutes with conjugation, so a zero for α forces a zero for ᾱ."
  ];
  function renderMath(lines) {
    [1, 2, 3].forEach((number, index) => {
      const element = document.getElementById(`math-line-${number}`);
      element.dataset.claim = claimKeys[step][index] || "";
      if (root.katex) root.katex.render(lines[index] || "", element, { throwOnError: false });
      else element.textContent = lines[index] || "";
    });
  }
  function render() {
    svg.innerHTML = scene === "operations" ? operationMarkup() : scene === "roots" ? rootsMarkup() : pairsMarkup();
    steps.forEach((button, index) => index === step ? button.setAttribute("aria-current", "step") : button.removeAttribute("aria-current"));
    document.getElementById("step-number").textContent = String(step + 1).padStart(2, "0");
    document.getElementById("step-title").textContent = copy[step];
    if (scene === "roots") document.querySelector(".step-description").textContent = rootDescriptions[step];
    if (scene === "pairs") document.querySelector(".step-description").textContent = pairDescriptions[step];
    document.getElementById("back-button").disabled = step === 0;
    document.getElementById("next-button").disabled = step === copy.length - 1;
    const layerControls = document.getElementById("layer-controls");
    if (layerControls) layerControls.hidden = step < 1;
    document.querySelectorAll("[data-min-step]").forEach((label) => { label.hidden = step < Number(label.dataset.minStep) || (label.dataset.maxStep && step > Number(label.dataset.maxStep)); });
    const isActive = motionSteps.has(step);
    const rootPowerStep = scene === "roots" && step === 1;
    const rootPowerDone = rootPowerStep && rootPowerCount >= 5 && !running && !paused;
    const rootTogetherStep = scene === "roots" && step === 2;
    const rootTogetherDone = rootTogetherStep && rootTogetherCount >= 5 && !running && !paused;
    const rootSequenceDone = rootPowerDone || rootTogetherDone;
    const idleAction = rootPowerStep ? "Multiply by w₀" : rootTogetherStep ? "Raise all five" : "Play";
    playButton.disabled = !isActive || rootSequenceDone;
    playButton.textContent = !isActive ? "Static" : rootSequenceDone ? "Five clicks complete" : running ? "Pause" : paused ? "Resume" : idleAction;
    playButton.setAttribute("aria-label", !isActive ? `${copy[step]} is a static construction step` : rootSequenceDone ? "Five multiplications complete" : `${running ? "Pause" : paused ? "Resume" : idleAction} ${copy[step]} construction`);
    playButton.setAttribute("aria-pressed", running ? "true" : "false");
    app.dataset.stepMotion = isActive ? "active" : "static";
    app.dataset.stepIndex = String(step);
    app.dataset.animationState = running ? "running" : paused ? "paused" : "idle";
    app.dataset.animationProgress = progress.toFixed(4);
    app.dataset.rootPowerCount = String(rootPowerCount);
    app.dataset.rootTogetherCount = String(rootTogetherCount);
    const mathKey = scene === "roots" ? `${step}:${rootPowerCount}:${rootTogetherCount}` : String(step);
    if (renderedMathStep !== mathKey) {
      renderMath(mathLines());
      renderedMathStep = mathKey;
    }
  }
  function cancelScheduledFrame() {
    if (raf) cancelAnimationFrame(raf);
    if (frameTimer) clearTimeout(frameTimer);
    raf = 0;
    frameTimer = 0;
    frameToken += 1;
  }
  function scheduleFrame(callback) {
    const token = ++frameToken;
    let delivered = false;
    const deliver = (now) => {
      if (delivered || token !== frameToken) return;
      delivered = true;
      if (raf) cancelAnimationFrame(raf);
      if (frameTimer) clearTimeout(frameTimer);
      raf = 0;
      frameTimer = 0;
      callback(now);
    };
    raf = requestAnimationFrame(deliver);
    frameTimer = setTimeout(() => deliver(performance.now()), 80);
  }
  function cancelAnimation() {
    cancelScheduledFrame();
    running = false;
    paused = false;
  }
  function move(nextStep) {
    cancelAnimation();
    step = Math.max(0, Math.min(copy.length - 1, nextStep));
    progress = 1;
    render();
  }
  function play() {
    if (!motionSteps.has(step)) return;
    if (running) {
      cancelScheduledFrame();
      running = false;
      paused = true;
      render();
      return;
    }
    const rootPowerStep = scene === "roots" && step === 1;
    const rootTogetherStep = scene === "roots" && step === 2;
    if ((rootPowerStep && rootPowerCount >= 5) || (rootTogetherStep && rootTogetherCount >= 5)) return;
    if (reduced) {
      progress = 1;
      if (rootPowerStep) rootPowerCount += 1;
      if (rootTogetherStep) rootTogetherCount += 1;
      render();
      return;
    }
    if (!paused || progress >= 1) progress = 0;
    paused = false;
    running = true;
    const duration = rootPowerStep || rootTogetherStep ? 1100 : 1700;
    animationStart = performance.now() - progress * duration;
    const frame = (now) => {
      progress = Math.min(1, (now - animationStart) / duration);
      render();
      if (progress < 1) scheduleFrame(frame);
      else {
        if (rootPowerStep) rootPowerCount += 1;
        if (rootTogetherStep) rootTogetherCount += 1;
        running = false;
        paused = false;
        raf = 0;
        render();
      }
    };
    scheduleFrame(frame);
  }
  steps.forEach((button) => button.addEventListener("click", () => move(Number(button.dataset.step))));
  document.getElementById("back-button").addEventListener("click", () => move(step - 1));
  document.getElementById("next-button").addEventListener("click", () => move(step + 1));
  document.getElementById("reset-button").addEventListener("click", () => { rootPowerCount = 0; rootTogetherCount = 0; move(0); });
  playButton.addEventListener("click", play);
  layerToggles.forEach((toggle) => toggle.addEventListener("change", render));
  document.addEventListener("keydown", (event) => {
    if (["INPUT", "BUTTON", "SELECT", "SUMMARY"].includes(event.target.tagName)) return;
    if (event.key === "ArrowLeft") move(step - 1);
    if (event.key === "ArrowRight") move(step + 1);
    if (event.key.toLowerCase() === "r") { rootPowerCount = 0; rootTogetherCount = 0; move(0); }
    if (event.key === " ") { event.preventDefault(); play(); }
  });
  render();
})(typeof globalThis !== "undefined" ? globalThis : this);
