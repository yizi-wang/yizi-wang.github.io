"use strict";

(function (root) {
  const WIDTH = 1000;
  const HEIGHT = 640;
  const H = 0.8;
  const ZMAX = 6;
  const GENERATOR_ANGLE = 45;
  const PROJECTION_SCALE = 45;
  const ZOOM_MIN = 0.7;
  const ZOOM_MAX = 1.9;
  const VIEW_PRESETS = Object.freeze({
    isometric: { label: "Isometric overview", yaw: -0.68, pitch: 0.42 },
    side: { label: "Side section", yaw: 0, pitch: 0 },
    dandelin: { label: "Sphere tangency", yaw: -0.22, pitch: 0 },
    proof: { label: "Focal proof", yaw: -0.15, pitch: 0, scale: 62, centerX: 500, centerY: 250 },
    top: { label: "From above", yaw: -0.68, pitch: 1.05 }
  });
  const STEP_VIEWS = ["isometric", "side", "isometric", "dandelin", "dandelin", "dandelin", "side", "proof"];
  const PROOF_LAYER_NAMES = Object.freeze(["pf1", "pa", "pf2", "pb", "ab"]);
  const LAYER_MIN_STEP = Object.freeze({ cone: 0, plane: 1, section: 2, spheres: 3, foci: 3, labels: 0, pf1: 7, pa: 7, pf2: 7, pb: 7, ab: 7 });
  const DEFAULT_LAYERS = Object.freeze({ cone: true, plane: true, section: true, spheres: true, foci: true, labels: true, pf1: true, pa: true, pf2: false, pb: false, ab: false });

  function layerAvailableAtStep(name, step) {
    if (!Object.prototype.hasOwnProperty.call(LAYER_MIN_STEP, name)) return false;
    return step >= LAYER_MIN_STEP[name];
  }

  function cameraForView(name) {
    const view = VIEW_PRESETS[name] || VIEW_PRESETS.isometric;
    return {
      yaw: view.yaw,
      pitch: view.pitch,
      scale: view.scale || PROJECTION_SCALE,
      centerX: Number.isFinite(view.centerX) ? view.centerX : WIDTH / 2,
      centerY: Number.isFinite(view.centerY) ? view.centerY : HEIGHT / 2
    };
  }

  function clampZoom(value) {
    return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, Number(value) || 1));
  }

  function cameraWithZoom(camera, zoom) {
    return { ...camera, scale: (camera.scale || PROJECTION_SCALE) * clampZoom(zoom) };
  }

  function projectedSphereRadius(radius, camera, zoom) {
    return Math.abs(radius) * cameraWithZoom(camera, zoom).scale;
  }

  function radians(degrees) { return degrees * Math.PI / 180; }
  function angleToSlope(angle) { return Math.abs(angle - GENERATOR_ANGLE) < 1e-9 ? 1 : Math.tan(radians(angle)); }
  function classify(angle) {
    if (Math.abs(angle) < 1e-9) return "circle";
    if (Math.abs(angle - GENERATOR_ANGLE) < 1e-9) return "parabola";
    return angle < GENERATOR_ANGLE ? "ellipse" : "hyperbola";
  }
  function generatorParallel(angle) { return Math.abs(angle - GENERATOR_ANGLE) < 1e-9; }
  function coneResidual(point) { return point.x * point.x + point.y * point.y - point.z * point.z; }
  function planeResidual(point, angle, h = H) { return point.z - angleToSlope(angle) * point.x - h; }
  function substitutedResidual(point, angle, h = H) {
    const m = angleToSlope(angle);
    return (1 - m * m) * point.x * point.x + point.y * point.y - 2 * m * h * point.x - h * h;
  }
  function distance3D(a, b) { return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z); }

  function project3D(point, camera = { yaw: -0.68, pitch: 0.42 }) {
    const cy = Math.cos(camera.yaw);
    const sy = Math.sin(camera.yaw);
    const cp = Math.cos(camera.pitch);
    const sp = Math.sin(camera.pitch);
    const rx = cy * point.x - sy * point.y;
    const ry = sy * point.x + cy * point.y;
    const vertical = cp * point.z - sp * ry;
    const depth = sp * point.z + cp * ry;
    const scale = camera.scale || PROJECTION_SCALE;
    const centerX = Number.isFinite(camera.centerX) ? camera.centerX : WIDTH / 2;
    const centerY = Number.isFinite(camera.centerY) ? camera.centerY : HEIGHT / 2;
    return { x: centerX + scale * rx, y: centerY - scale * vertical, depth };
  }

  function inBounds(point) {
    return Math.abs(point.x) <= ZMAX + 0.01 && Math.abs(point.y) <= ZMAX + 0.01 && Math.abs(point.z) <= ZMAX + 0.01;
  }
  function splitVisible(points) {
    const segments = [];
    let current = [];
    for (const point of points) {
      if (inBounds(point)) current.push(point);
      else if (current.length) {
        if (current.length > 1) segments.push(current);
        current = [];
      }
    }
    if (current.length > 1) segments.push(current);
    return segments;
  }

  function intersectionSegments(angle, progress = 1, samples = 320, h = H) {
    const m = angleToSlope(angle);
    const type = classify(angle);
    if (type === "circle" || type === "ellipse") {
      const q = 1 - m * m;
      const x0 = m * h / q;
      const ax = h / q;
      const by = h / Math.sqrt(q);
      const count = Math.max(2, Math.floor(samples * progress) + 1);
      const points = Array.from({ length: count }, (_, i) => {
        const t = 2 * Math.PI * progress * i / (count - 1);
        const x = x0 + ax * Math.cos(t);
        const y = by * Math.sin(t);
        return { x, y, z: m * x + h };
      });
      return splitVisible(points);
    }
    if (type === "parabola") {
      const count = Math.max(2, Math.floor(samples * progress) + 1);
      const points = Array.from({ length: count }, (_, i) => {
        const y = -5.7 + 11.4 * progress * i / (count - 1);
        const x = (y * y - h * h) / (2 * h);
        return { x, y, z: x + h };
      });
      return splitVisible(points);
    }
    const q = m * m - 1;
    const x0 = -m * h / q;
    const ax = h / q;
    const by = h / Math.sqrt(q);
    const count = Math.max(2, Math.floor((samples / 2) * progress) + 1);
    const segments = [];
    for (const branch of [-1, 1]) {
      const points = Array.from({ length: count }, (_, i) => {
        const u = -1.7 + 3.4 * progress * i / (count - 1);
        const x = x0 + branch * ax * Math.cosh(u);
        const y = by * Math.sinh(u);
        return { x, y, z: m * x + h };
      });
      segments.push(...splitVisible(points));
    }
    return segments;
  }

  function coneRim(z, samples = 120) {
    return Array.from({ length: samples + 1 }, (_, i) => {
      const t = 2 * Math.PI * i / samples;
      return { x: Math.abs(z) * Math.cos(t), y: Math.abs(z) * Math.sin(t), z };
    });
  }

  function planeCorners(angle, h = H) {
    const m = angleToSlope(angle);
    const xb = 4.5;
    const yb = 4.8;
    return [[-xb, -yb], [xb, -yb], [xb, yb], [-xb, yb]].map(([x, y]) => ({ x, y, z: m * x + h }));
  }

  function planeDistance(point, angle, h = H) {
    const m = angleToSlope(angle);
    return Math.abs(point.z - m * point.x - h) / Math.sqrt(1 + m * m);
  }

  function planeFoot(point, angle, h = H) {
    const m = angleToSlope(angle);
    const value = point.z - m * point.x - h;
    const denominator = 1 + m * m;
    return {
      x: point.x + m * value / denominator,
      y: point.y,
      z: point.z - value / denominator
    };
  }

  function makeSphere(id, s, angle) {
    const centre = { x: 0, y: 0, z: s };
    const radius = Math.abs(s) / Math.sqrt(2);
    return { id, s, radius, centre, focus: planeFoot(centre, angle) };
  }

  function dandelinSpheres(angle, h = H) {
    const m = angleToSlope(angle);
    const k = Math.sqrt((1 + m * m) / 2);
    const first = makeSphere(1, h / (1 + k), angle);
    if (generatorParallel(angle)) return { spheres: [first], receding: true, k };
    const second = makeSphere(2, h / (1 - k), angle);
    return { spheres: [first, second], receding: Math.abs(second.s) > 9, k };
  }

  function sphereConeTangencyResidual(sphere) {
    return sphere.radius - Math.abs(sphere.s) / Math.sqrt(2);
  }

  function tangentPointOnGenerator(point, sphere) {
    const length = Math.hypot(point.x, point.y, point.z);
    const direction = { x: point.x / length, y: point.y / length, z: point.z / length };
    const along = sphere.s * direction.z;
    return { x: along * direction.x, y: along * direction.y, z: along * direction.z };
  }

  function proofPoint(angle, parameter = 1.02) {
    const m = angleToSlope(angle);
    const type = classify(angle);
    if (type === "circle" || type === "ellipse") {
      const q = 1 - m * m;
      const x0 = m * H / q;
      const ax = H / q;
      const by = H / Math.sqrt(q);
      const x = x0 + ax * Math.cos(parameter);
      const y = by * Math.sin(parameter);
      return { x, y, z: m * x + H };
    }
    if (type === "parabola") {
      const y = 1.2;
      const x = (y * y - H * H) / (2 * H);
      return { x, y, z: x + H };
    }
    const q = m * m - 1;
    const x0 = -m * H / q;
    const ax = H / q;
    const by = H / Math.sqrt(q);
    const u = 1.45;
    const x = x0 + ax * Math.cosh(u);
    const y = by * Math.sinh(u);
    return { x, y, z: m * x + H };
  }

  function dandelinInvariant(angle, point) {
    const data = dandelinSpheres(angle);
    if (data.spheres.length < 2) return null;
    const [first, second] = data.spheres;
    const pf1 = distance3D(point, first.focus);
    const pf2 = distance3D(point, second.focus);
    return classify(angle) === "hyperbola" ? Math.abs(pf1 - pf2) : pf1 + pf2;
  }

  const model = {
    WIDTH,
    HEIGHT,
    H,
    ZMAX,
    GENERATOR_ANGLE,
    PROJECTION_SCALE,
    ZOOM_MIN,
    ZOOM_MAX,
    VIEW_PRESETS,
    PROOF_LAYER_NAMES,
    LAYER_MIN_STEP,
    DEFAULT_LAYERS,
    layerAvailableAtStep,
    cameraForView,
    clampZoom,
    cameraWithZoom,
    projectedSphereRadius,
    radians,
    angleToSlope,
    classify,
    generatorParallel,
    coneResidual,
    planeResidual,
    substitutedResidual,
    distance3D,
    project3D,
    intersectionSegments,
    coneRim,
    planeCorners,
    planeDistance,
    planeFoot,
    dandelinSpheres,
    sphereConeTangencyResidual,
    tangentPointOnGenerator,
    proofPoint,
    dandelinInvariant
  };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  if (!root.document) return;

  const $ = id => root.document.getElementById(id);
  const svg = $("geometry-stage");
  const tabs = Array.from(root.document.querySelectorAll(".step-tab"));
  const choices = Array.from(root.document.querySelectorAll(".choice-button"));
  const angleRange = $("angle-range");
  const preset = $("slice-preset");
  const viewPreset = $("view-preset");
  const zoomRange = $("model-zoom-range");
  const layerInputs = Array.from(root.document.querySelectorAll("[data-layer]"));
  const state = {
    step: 0,
    angle: 28,
    running: false,
    raf: 0,
    choice: "",
    view: "isometric",
    camera: cameraForView("isometric"),
    zoom: 1,
    drag: null,
    layers: { ...DEFAULT_LAYERS }
  };
  const steps = [
    ["Rotate the double cone", "Inspect one surface from every side.", "Drag anywhere on the model. The two nappes meet at one vertex.", "What remains unchanged as we rotate the view?", "The cone itself; only our viewpoint changes.", "Insert a cutting plane."],
    ["Insert the cutting plane", "Tilt is measured from horizontal.", "The cone generator is fixed at 45°. The cutting plane begins at 28°.", "Which angle controls the section?", "The plane tilt α compared with the generator angle.", "Reveal their intersection."],
    ["Read the section", "Compare plane and generator.", "Below 45° the plane stays within one nappe and the section is closed. At 45° it is parallel to a generator.", "What happens beyond 45°?", "The plane reaches both nappes, so the section has two branches.", "Fit a sphere between the cone and plane."],
    ["Fit the first Dandelin sphere", "Tangent to cone and plane.", "The sphere touches the cutting plane at F₁. That point will become a focus of the section.", "Why must the contact be perpendicular?", "A radius to a tangent plane is perpendicular to that plane.", "Fit the second sphere."],
    ["Reveal the second focus", "Each sphere contributes one contact point.", "For an ellipse, two spheres fit in the same nappe. Their plane-contact points are F₁ and F₂.", "Where are the two foci hiding?", "At the two sphere–plane contact points.", "Predict the limiting behaviour."],
    ["Predict the parallel limit", "One sphere is about to escape.", "As α approaches 45°, decide what must happen to the second sphere while it remains tangent to both surfaces.", "What happens to the second sphere?", "It recedes without bound; only one finite sphere remains at the parabolic limit.", "Play the tilt toward 45°."],
    ["Approach a generator", "The second sphere recedes.", "Play from 28° to 45°. The closed ellipse opens into a parabola when the plane becomes parallel to a generator.", "Why is there one finite focus at the limit?", "Only the first Dandelin sphere remains at a finite position.", "Tilt beyond 45° to recover a second sphere in the other nappe."],
    ["Recover both foci", "Beyond 45°, the spheres occupy opposite nappes.", "Choose any section and rotate the model. Tangent lengths from P explain why the sphere contacts are the conic foci.", "Which equal-length fact drives the proof?", "Tangents from the same external point to a sphere have equal length.", "Return to the focal definitions on the board."]
  ];

  function f(value, digits = 2) {
    return value.toFixed(digits).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
  }

  function projectPoint(point) {
    return project3D(point, cameraWithZoom(state.camera, state.zoom));
  }

  function projectedPath(points) {
    return points.map((point, index) => {
      const p = projectPoint(point);
      return `${index ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");
  }

  function line3D(a, b, className) {
    const p = projectPoint(a);
    const q = projectPoint(b);
    return `<line class="${className}" x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}"/>`;
  }

  function lightingDefs() {
    return `<defs>
      <linearGradient id="stage-light" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--plot)"/><stop offset="0.58" stop-color="var(--panel-alt)"/><stop offset="1" stop-color="var(--grid-major)"/></linearGradient>
      <linearGradient id="cone-light" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--plot)"/><stop offset="0.35" stop-color="var(--construction)"/><stop offset="1" stop-color="var(--ink-soft)"/></linearGradient>
      <linearGradient id="plane-light" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--plot)"/><stop offset="0.4" stop-color="var(--construction)"/><stop offset="1" stop-color="var(--locus)"/></linearGradient>
      <radialGradient id="sphere-light-a" cx="30%" cy="24%" r="72%"><stop offset="0" stop-color="var(--plot)"/><stop offset="0.28" stop-color="var(--construction)"/><stop offset="1" stop-color="var(--ink-soft)"/></radialGradient>
      <radialGradient id="sphere-light-b" cx="30%" cy="24%" r="72%"><stop offset="0" stop-color="var(--plot)"/><stop offset="0.28" stop-color="var(--moving)"/><stop offset="1" stop-color="var(--ink-soft)"/></radialGradient>
      <filter id="sphere-shadow" x="-40%" y="-40%" width="180%" height="190%"><feDropShadow dx="7" dy="9" stdDeviation="7" flood-color="var(--ink)" flood-opacity="0.2"/></filter>
      <filter id="curve-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="1" stdDeviation="2.2" flood-color="var(--moving)" flood-opacity="0.34"/></filter>
    </defs>`;
  }

  function coneFacetMarkup(z) {
    const apex = projectPoint({ x: 0, y: 0, z: 0 });
    let out = "";
    const count = 18;
    for (let i = 0; i < count; i += 1) {
      const t1 = 2 * Math.PI * i / count;
      const t2 = 2 * Math.PI * (i + 1) / count;
      const worldA = { x: Math.abs(z) * Math.cos(t1), y: Math.abs(z) * Math.sin(t1), z };
      const worldB = { x: Math.abs(z) * Math.cos(t2), y: Math.abs(z) * Math.sin(t2), z };
      const a = projectPoint(worldA);
      const b = projectPoint(worldB);
      const depthClass = (a.depth + b.depth) / 2 >= apex.depth ? "is-front" : "is-back";
      out += `<path class="cone-facet ${z > 0 ? "is-upper" : "is-lower"} ${depthClass}" d="M${apex.x},${apex.y} L${a.x},${a.y} L${b.x},${b.y} Z"/>`;
    }
    return out;
  }

  function coneMarkup(showLabels = true) {
    let out = coneFacetMarkup(ZMAX) + coneFacetMarkup(-ZMAX);
    out += `<path class="cone-rim" d="${projectedPath(coneRim(ZMAX))}"/><path class="cone-rim" d="${projectedPath(coneRim(-ZMAX))}"/>`;
    const apex = projectPoint({ x: 0, y: 0, z: 0 });
    for (let i = 0; i < 18; i += 1) {
      const t = 2 * Math.PI * i / 18;
      const top = projectPoint({ x: ZMAX * Math.cos(t), y: ZMAX * Math.sin(t), z: ZMAX });
      const bottom = projectPoint({ x: ZMAX * Math.cos(t), y: ZMAX * Math.sin(t), z: -ZMAX });
      out += `<line class="cone-wire ${top.depth >= apex.depth ? "is-front" : "is-back"}" x1="${apex.x}" y1="${apex.y}" x2="${top.x}" y2="${top.y}"/><line class="cone-wire ${bottom.depth >= apex.depth ? "is-front" : "is-back"}" x1="${apex.x}" y1="${apex.y}" x2="${bottom.x}" y2="${bottom.y}"/>`;
    }
    out += `<path class="cone-generator" d="${projectedPath([{ x: -ZMAX, y: 0, z: -ZMAX }, { x: ZMAX, y: 0, z: ZMAX }])}"/>`;
    out += `<circle class="cone-apex" cx="${apex.x}" cy="${apex.y}" r="5"/>`;
    if (showLabels && state.step < 7) out += `<text class="feature-label" x="${apex.x + 10}" y="${apex.y + 18}">vertex</text>`;
    return out;
  }

  function planeMarkup() {
    const corners = planeCorners(state.angle);
    const projected = corners.map(point => projectPoint(point));
    let out = `<polygon class="plane-surface" points="${projected.map(p => `${p.x},${p.y}`).join(" ")}"/>`;
    const m = angleToSlope(state.angle);
    for (const y of [-3.2, 0, 3.2]) {
      out += line3D({ x: -4.2, y, z: m * -4.2 + H }, { x: 4.2, y, z: m * 4.2 + H }, "plane-grid");
    }
    for (const x of [-2.4, 0, 2.4]) {
      out += line3D({ x, y: -4.4, z: m * x + H }, { x, y: 4.4, z: m * x + H }, "plane-grid");
    }
    return out;
  }

  function sphereMarkup(sphere, secondary = false, showSphere = true, showFocus = true, showLabels = true) {
    if (Math.abs(sphere.s) > 9 || sphere.radius > 7) return "";
    const p = projectPoint(sphere.centre);
    const focus = projectPoint(sphere.focus);
    const sphereDx = secondary ? 10 : 24;
    const sphereDy = secondary ? -10 : 5;
    const focusDx = secondary ? 11 : -14;
    const focusAnchor = secondary ? "start" : "end";
    const pairClass = secondary ? "is-pair-two" : "is-pair-one";
    let out = "";
    if (showSphere) {
      out += `<circle class="dandelin-sphere${secondary ? " is-secondary" : ""}" cx="${p.x}" cy="${p.y}" r="${projectedSphereRadius(sphere.radius, state.camera, state.zoom)}"/>`;
      if (state.step < 7) {
        out += `<circle class="sphere-centre" cx="${p.x}" cy="${p.y}" r="4"/><line class="sphere-radius" x1="${p.x}" y1="${p.y}" x2="${focus.x}" y2="${focus.y}"/>`;
        if (showLabels) out += `<text class="sphere-label" x="${p.x + sphereDx}" y="${p.y + sphereDy}">S${sphere.id}</text>`;
      }
    }
    if (showFocus) {
      out += `<circle class="focus-contact ${pairClass}" cx="${focus.x}" cy="${focus.y}" r="7"/>`;
      if (showLabels) out += `<text class="focus-label ${pairClass}" x="${focus.x + focusDx}" y="${focus.y - 12}" text-anchor="${focusAnchor}">F${sphere.id}</text>`;
    }
    return out;
  }

  function segmentTickMarkup(a, b, count, className) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx, dy);
    if (length < 1) return "";
    const ux = dx / length;
    const uy = dy / length;
    const nx = -uy;
    const ny = ux;
    let out = "";
    for (let i = 0; i < count; i += 1) {
      const along = (i - (count - 1) / 2) * 8;
      const cx = a.x + dx * 0.61 + ux * along;
      const cy = a.y + dy * 0.61 + uy * along;
      out += `<line class="proof-equality-tick ${className}" x1="${cx - nx * 7}" y1="${cy - ny * 7}" x2="${cx + nx * 7}" y2="${cy + ny * 7}"/>`;
    }
    return out;
  }

  function segmentLabelMarkup(a, b, label, offset, className) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx, dy) || 1;
    const nx = -dy / length;
    const ny = dx / length;
    const x = a.x + dx * 0.47 + nx * offset;
    const y = a.y + dy * 0.47 + ny * offset;
    return `<text class="proof-segment-label ${className}" x="${x}" y="${y}" text-anchor="middle">${label}</text>`;
  }

  function proofMarkup(spheres, layers, showLabels = true) {
    const point = proofPoint(state.angle);
    const p = projectPoint(point);
    const entries = spheres.map((sphere, index) => {
      if (Math.abs(sphere.s) > 9) return null;
      return {
        index,
        tangent: projectPoint(tangentPointOnGenerator(point, sphere)),
        focus: projectPoint(sphere.focus),
        pairClass: index ? "is-pair-two" : "is-pair-one",
        focusKey: index ? "pf2" : "pf1",
        tangentKey: index ? "pb" : "pa",
        tangentLabel: index ? "B" : "A"
      };
    }).filter(Boolean);
    let out = `<circle class="moving-point" cx="${p.x}" cy="${p.y}" r="8"/><circle class="moving-core" cx="${p.x}" cy="${p.y}" r="3"/>`;
    if (layers.ab && entries.length === 2) {
      out += `<line class="proof-fixed-line" x1="${entries[0].tangent.x}" y1="${entries[0].tangent.y}" x2="${entries[1].tangent.x}" y2="${entries[1].tangent.y}"/>`;
      if (showLabels) out += segmentLabelMarkup(entries[0].tangent, entries[1].tangent, "AB", 22, "is-fixed");
    }
    if (showLabels) {
      const pairedEqualityVisible = entries.some(entry => layers[entry.focusKey] && layers[entry.tangentKey]);
      let noteY = 102;
      if (pairedEqualityVisible) {
        out += `<text class="proof-visual-note" x="950" y="${noteY}" text-anchor="end">MATCHING TICKS = EQUAL TANGENTS</text>`;
        noteY += 22;
      }
      if (layers.ab) out += `<text class="proof-visual-note is-secondary" x="950" y="${noteY}" text-anchor="end">A–B STAYS FIXED</text>`;
      out += `<text class="moving-label" x="${p.x + 11}" y="${p.y - 11}">P</text>`;
    }
    entries.forEach(entry => {
      const focusVisible = layers[entry.focusKey];
      const tangentVisible = layers[entry.tangentKey];
      const tickCount = entry.index + 1;
      if (focusVisible) out += `<line class="focal-proof-line ${entry.pairClass}" x1="${p.x}" y1="${p.y}" x2="${entry.focus.x}" y2="${entry.focus.y}"/>`;
      if (tangentVisible) out += `<line class="tangent-proof-line ${entry.pairClass}" x1="${p.x}" y1="${p.y}" x2="${entry.tangent.x}" y2="${entry.tangent.y}"/>`;
      if (focusVisible && tangentVisible) {
        out += segmentTickMarkup(p, entry.focus, tickCount, entry.pairClass);
        out += segmentTickMarkup(p, entry.tangent, tickCount, entry.pairClass);
      }
      if (showLabels) {
        if (focusVisible) out += segmentLabelMarkup(p, entry.focus, `PF${entry.index + 1}`, entry.index ? -15 : 15, entry.pairClass);
        if (tangentVisible) out += segmentLabelMarkup(p, entry.tangent, entry.index ? "PB" : "PA", entry.index ? 15 : -15, entry.pairClass);
      }
      if (tangentVisible || layers.ab) {
        out += `<circle class="tangent-contact ${entry.pairClass}" cx="${entry.tangent.x}" cy="${entry.tangent.y}" r="5"/>`;
        if (showLabels) out += `<text class="tangent-label ${entry.pairClass}" x="${entry.tangent.x + 8}" y="${entry.tangent.y + (entry.index ? 18 : -8)}">${entry.tangentLabel}</text>`;
      }
    });
    return out;
  }

  function renderStage() {
    const type = classify(state.angle);
    const showCone = state.layers.cone;
    const showPlane = state.step >= 1 && state.layers.plane;
    const showSection = state.step >= 2 && state.layers.section;
    const showSpheres = state.step >= 3 && state.layers.spheres;
    const showFoci = state.step >= 3 && state.layers.foci;
    const showProof = state.step === 7 && PROOF_LAYER_NAMES.some(name => state.layers[name]);
    const showLabels = state.layers.labels;
    const sphereData = dandelinSpheres(state.angle);
    const viewLabel = state.view === "custom" ? "CUSTOM DRAG" : VIEW_PRESETS[state.view].label.toUpperCase();
    svg.classList.toggle("is-proof-view", state.step === 7);
    $("cone-slice-app").classList.toggle("is-proof-step", state.step === 7);
    let markup = lightingDefs() + `<rect class="spatial-backdrop" x="22" y="18" width="956" height="604" rx="6"/>`;
    if (showLabels) {
      markup += `<text class="telemetry-label" x="48" y="44">${viewLabel} · DRAG TO ROTATE</text><text class="telemetry-value" x="48" y="70">PLANE ${f(state.angle, 1)}°</text>`;
      markup += `<text class="telemetry-label" x="790" y="44">GENERATOR 45°</text><text class="telemetry-value" x="952" y="70" text-anchor="end">${type.toUpperCase()}</text>`;
    }
    if (showPlane) markup += planeMarkup();
    if (showCone) markup += coneMarkup(showLabels);
    if (showSection) {
      for (const segment of intersectionSegments(state.angle)) markup += `<path class="intersection-curve" d="${projectedPath(segment)}"/>`;
    }
    if (showSpheres || showFoci) {
      const visible = state.step === 3 ? sphereData.spheres.slice(0, 1) : sphereData.spheres;
      visible.forEach((sphere, index) => { markup += sphereMarkup(sphere, index > 0, showSpheres, showFoci, showLabels); });
      if (showSpheres && showLabels && sphereData.receding && state.step >= 4) {
        markup += `<rect class="receding-plate" x="724" y="92" width="228" height="48" rx="4"/><text class="receding-label" x="838" y="112" text-anchor="middle">SECOND SPHERE</text><text class="receding-value" x="838" y="132" text-anchor="middle">RECEDING → ∞</text>`;
      }
    }
    if (showProof) markup += proofMarkup(sphereData.spheres, state.layers, showLabels);
    svg.innerHTML = markup;
  }

  function updateLayerControls() {
    let shown = 0;
    layerInputs.forEach(input => {
      const name = input.dataset.layer;
      const available = layerAvailableAtStep(name, state.step);
      input.disabled = !available;
      input.checked = state.layers[name];
      const label = input.closest(".layer-toggle");
      if (label) label.classList.toggle("is-unavailable", !available);
      if (available && state.layers[name]) shown += 1;
    });
    $("layer-count").textContent = `${shown} shown`;
  }

  function renderMath(target, tex) {
    target.textContent = "";
    if (root.katex) root.katex.render(tex, target, { throwOnError: false });
    else target.textContent = tex;
  }

  function updateLedger() {
    const item = steps[state.step];
    const type = classify(state.angle);
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
    $("play-button").disabled = state.step !== 6;
    angleRange.disabled = state.step < 2 || state.step === 5 || state.step === 6;
    preset.disabled = angleRange.disabled;
    $("angle-value").textContent = f(state.angle, 1);
    $("model-zoom-value").textContent = `${Math.round(state.zoom * 100)}%`;
    zoomRange.value = String(Math.round(state.zoom * 100));
    updateLayerControls();

    const predicting = state.step === 5;
    $("prediction-panel").hidden = !predicting;
    $("feedback-line").hidden = !predicting || !state.choice;
    if (state.choice) {
      $("feedback-line").textContent = state.choice === "recedes"
        ? "Play the limit and watch the second contact move out of view."
        : "Keep both tangencies in mind as the plane approaches the generator.";
    }

    const mathVisible = state.step >= 1 && !predicting;
    $("math-ledger").hidden = !mathVisible;
    if (mathVisible) {
      if (state.step === 1) {
        renderMath($("math-line-1"), `\\alpha=${f(state.angle, 1)}^\\circ`);
        renderMath($("math-line-2"), "\\beta=45^\\circ");
        renderMath($("math-line-3"), "\\alpha<\\beta");
      } else if (state.step === 2) {
        renderMath($("math-line-1"), "\\alpha<45^\\circ:\\ \text{ellipse}");
        renderMath($("math-line-2"), "\\alpha=45^\\circ:\\ \text{parabola}");
        renderMath($("math-line-3"), "\\alpha>45^\\circ:\\ \text{hyperbola}");
      } else if (state.step === 3) {
        renderMath($("math-line-1"), "S_1F_1\\perp\\text{ cutting plane}");
        renderMath($("math-line-2"), "S_1F_1=r_1");
        renderMath($("math-line-3"), "F_1\\text{ is a focus}");
      } else if (state.step === 4) {
        renderMath($("math-line-1"), "S_1\\to F_1");
        renderMath($("math-line-2"), "S_2\\to F_2");
        renderMath($("math-line-3"), "F_1,F_2\\text{ are the foci}");
      } else if (state.step === 6) {
        renderMath($("math-line-1"), "\\alpha\\to45^\\circ");
        renderMath($("math-line-2"), "r_2\\to\\infty");
        renderMath($("math-line-3"), "\\text{ellipse}\\to\\text{parabola}");
      } else if (type === "ellipse" || type === "circle") {
        renderMath($("math-line-1"), "PF_1=PA,\\qquad PF_2=PB");
        renderMath($("math-line-2"), "PF_1+PF_2=PA+PB");
        renderMath($("math-line-3"), "PF_1+PF_2=\\text{constant}");
      } else if (type === "hyperbola") {
        renderMath($("math-line-1"), "PF_1=PA,\\qquad PF_2=PB");
        renderMath($("math-line-2"), "|PF_1-PF_2|=|PA-PB|=AB");
        renderMath($("math-line-3"), "AB\\text{ fixed}\\;\\Longrightarrow\\;|PF_1-PF_2|\\text{ fixed}");
      } else {
        renderMath($("math-line-1"), "PF=PT");
        renderMath($("math-line-2"), "F\\text{ comes from one finite sphere}");
        renderMath($("math-line-3"), "\\text{parabolic focus}");
      }
    }
    const playLabel = $("play-button").querySelector(".button-label");
    const playIcon = $("play-button").querySelector(".button-icon");
    playLabel.textContent = state.running ? "Pause" : "Play";
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

  function nearestPreset(angle) {
    return [0, 28, 45, 55].reduce((best, value) => Math.abs(value - angle) < Math.abs(best - angle) ? value : best, 0);
  }

  function setAngle(value) {
    stop();
    state.angle = Math.abs(value - 45) < 0.05 ? 45 : Math.max(0, Math.min(55, value));
    angleRange.value = String(state.angle);
    preset.value = String(nearestPreset(state.angle));
    render();
  }

  function setZoomPercent(value) {
    state.zoom = clampZoom(Number(value) / 100);
    zoomRange.value = String(Math.round(state.zoom * 100));
    $("model-zoom-value").textContent = `${Math.round(state.zoom * 100)}%`;
    renderStage();
    $("live-region").textContent = `Model zoom: ${Math.round(state.zoom * 100)} percent`;
  }

  function applyView(name, announce = true) {
    if (!VIEW_PRESETS[name]) return;
    state.view = name;
    state.camera = cameraForView(name);
    viewPreset.value = name;
    renderStage();
    if (announce) $("live-region").textContent = `View: ${VIEW_PRESETS[name].label}`;
  }

  function moveToStep(next) {
    stop();
    state.step = Math.max(0, Math.min(7, next));
    if (state.step <= 6) state.angle = 28;
    if (state.step === 7) state.angle = 55;
    state.view = STEP_VIEWS[state.step];
    state.camera = cameraForView(state.view);
    angleRange.value = String(state.angle);
    preset.value = String(nearestPreset(state.angle));
    viewPreset.value = state.view;
    render();
    $("live-region").textContent = `Step ${state.step + 1}: ${steps[state.step][0]}`;
  }

  function toggleAnimation() {
    if (state.step !== 6) return;
    if (state.running) {
      stop();
      render();
      return;
    }
    const reduced = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setAngle(45);
      return;
    }
    const startAngle = state.angle >= 44.95 ? 28 : state.angle;
    const started = root.performance.now();
    state.running = true;
    function frame(now) {
      if (!state.running) return;
      const t = Math.min(1, (now - started) / 4800);
      const eased = 1 - Math.pow(1 - t, 3);
      state.angle = startAngle + (45 - startAngle) * eased;
      angleRange.value = String(state.angle);
      render();
      if (t < 1) state.raf = root.requestAnimationFrame(frame);
      else {
        state.angle = 45;
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
    state.angle = 28;
    state.choice = "";
    state.view = "isometric";
    state.camera = cameraForView("isometric");
    state.zoom = 1;
    state.drag = null;
    state.layers = { ...DEFAULT_LAYERS };
    angleRange.value = "28";
    preset.value = "28";
    viewPreset.value = "isometric";
    zoomRange.value = "100";
    $("layer-menu").open = false;
    svg.classList.remove("is-dragging");
    choices.forEach(button => button.setAttribute("aria-pressed", "false"));
    render();
  }

  function endDrag(event) {
    if (!state.drag || (event && event.pointerId !== state.drag.pointerId)) return;
    if (event && svg.hasPointerCapture && svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
    state.drag = null;
    svg.classList.remove("is-dragging");
  }

  svg.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    event.preventDefault();
    state.drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    if (svg.setPointerCapture) svg.setPointerCapture(event.pointerId);
    svg.classList.add("is-dragging");
  });
  svg.addEventListener("pointermove", event => {
    if (!state.drag || event.pointerId !== state.drag.pointerId) return;
    event.preventDefault();
    const dx = event.clientX - state.drag.x;
    const dy = event.clientY - state.drag.y;
    state.drag.x = event.clientX;
    state.drag.y = event.clientY;
    state.camera.yaw += dx * 0.008;
    state.camera.pitch = Math.max(-0.18, Math.min(1.12, state.camera.pitch - dy * 0.007));
    state.view = "custom";
    viewPreset.value = "custom";
    renderStage();
  });
  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);
  svg.addEventListener("lostpointercapture", () => {
    state.drag = null;
    svg.classList.remove("is-dragging");
  });

  tabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  choices.forEach(button => button.addEventListener("click", () => {
    state.choice = button.dataset.choice;
    choices.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
    updateLedger();
  }));
  angleRange.addEventListener("input", event => setAngle(Number(event.target.value)));
  zoomRange.addEventListener("input", event => setZoomPercent(Number(event.target.value)));
  preset.addEventListener("change", event => setAngle(Number(event.target.value)));
  viewPreset.addEventListener("change", event => applyView(event.target.value));
  layerInputs.forEach(input => input.addEventListener("change", event => {
    const name = event.target.dataset.layer;
    state.layers[name] = event.target.checked;
    renderStage();
    updateLayerControls();
    const label = event.target.closest(".layer-toggle").querySelector("span:last-child").textContent;
    $("live-region").textContent = `${label}: ${event.target.checked ? "shown" : "hidden"}`;
  }));
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
