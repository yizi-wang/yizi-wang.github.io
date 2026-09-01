(function (root) {
  "use strict";
  if (!root.document) return;

  const L = root.LociRuntime;
  const scene = document.body.dataset.scene;
  const svg = document.getElementById("geometry-stage");
  const app = document.querySelector(".instrument-app");
  const tabs = Array.from(document.querySelectorAll(".step-tab"));
  const playButton = document.getElementById("play-button");
  const reduced = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionSteps = {
    loci: new Set([1, 2, 3, 4, 5]),
    apollonius: new Set([1, 2, 3, 4, 5, 6]),
    mappings: new Set([1, 2, 3, 4, 5, 6])
  }[scene];
  let step = 0;
  let progress = 1;
  let running = false;
  let paused = false;
  let raf = 0;
  let frameTimer = 0;
  let frameToken = 0;
  let animationStart = 0;
  let renderedMathStep = -1;

  const LEFT = { x: 255, y: 326 };
  const RIGHT = { x: 745, y: 326 };
  const PLANE = { left: 50, right: 540, top: 52, width: 410, height: 536 };
  const clamp = (value, minimum = 0, maximum = 1) => Math.max(minimum, Math.min(maximum, value));
  const checked = (name) => document.querySelector(`[data-layer-toggle="${name}"]`)?.checked;
  const finite = (z) => z && Number.isFinite(z.re) && Number.isFinite(z.im);
  const polar = (radius, angle, centre = { re: 0, im: 0 }) => ({ re: centre.re + radius * Math.cos(angle), im: centre.im + radius * Math.sin(angle) });
  const screen = (z, origin, scale) => ({ x: origin.x + scale * z.re, y: origin.y - scale * z.im });
  const rotateScale = (z, factor, angle) => L.multiply(z, { re: factor * Math.cos(angle), im: factor * Math.sin(angle) });
  const affinePoint = (u, shift, factor, angle) => L.add(shift, rotateScale(u, factor, angle));

  tabs.forEach((tab, index) => {
    tab.dataset.short = String(index + 1).padStart(2, "0");
    tab.setAttribute("aria-label", tab.textContent.trim());
  });

  function planeGrid(origin, scale, side, label) {
    const x0 = side === "left" ? PLANE.left : PLANE.right;
    let out = `<g data-plane="${label}"><rect class="plane-window" x="${x0}" y="${PLANE.top}" width="${PLANE.width}" height="${PLANE.height}"/>`;
    for (let k = -5; k <= 5; k += 1) {
      const x = origin.x + k * scale;
      const y = origin.y + k * scale;
      if (x >= x0 && x <= x0 + PLANE.width) out += `<line class="argand-grid" x1="${x}" y1="${PLANE.top}" x2="${x}" y2="${PLANE.top + PLANE.height}"/>`;
      if (y >= PLANE.top && y <= PLANE.top + PLANE.height) out += `<line class="argand-grid" x1="${x0}" y1="${y}" x2="${x0 + PLANE.width}" y2="${y}"/>`;
    }
    out += `<line class="axis" x1="${x0}" y1="${origin.y}" x2="${x0 + PLANE.width}" y2="${origin.y}"/><line class="axis" x1="${origin.x}" y1="${PLANE.top}" x2="${origin.x}" y2="${PLANE.top + PLANE.height}"/><text class="plane-label" data-callout="${side}-plane-label" x="${x0 + 18}" y="${PLANE.top + 28}">${label}</text></g>`;
    return out;
  }

  function twoPlanes(leftLabel, rightLabel, leftScale = 46, rightScale = leftScale) {
    return `<defs><clipPath id="left-clip"><rect x="${PLANE.left}" y="${PLANE.top}" width="${PLANE.width}" height="${PLANE.height}"/></clipPath><clipPath id="right-clip"><rect x="${PLANE.right}" y="${PLANE.top}" width="${PLANE.width}" height="${PLANE.height}"/></clipPath></defs>${planeGrid(LEFT, leftScale, "left", leftLabel)}${planeGrid(RIGHT, rightScale, "right", rightLabel)}<line class="plane-divider" x1="500" y1="${PLANE.top}" x2="500" y2="${PLANE.top + PLANE.height}"/>`;
  }

  function mark(z, origin, scale, label, role, css = "", dx = 12, dy = -12) {
    const p = screen(z, origin, scale);
    return `<g data-point-role="${role}" data-point-label="${label}" data-re="${z.re}" data-im="${z.im}"><circle class="point ${css}" cx="${p.x}" cy="${p.y}" r="7"/><text class="point-label" data-callout="${role}-label" x="${p.x + dx}" y="${p.y + dy}">${label}</text></g>`;
  }

  function curve(values, origin, scale, css, role, side, branch = "single") {
    const points = values.filter(finite).map((z) => {
      const p = screen(z, origin, scale);
      return `${p.x.toFixed(3)},${p.y.toFixed(3)}`;
    });
    if (points.length < 2 || !checked("traces") && scene === "mappings" || !checked("mapping-traces") && scene === "apollonius") return "";
    return `<polyline class="mapped-curve ${css}" data-curve-role="${role}" data-curve-branch="${branch}" clip-path="url(#${side}-clip)" points="${points.join(" ")}"/>`;
  }

  function livePlate(lines, role, x = 566, y = 72, width = 350) {
    const plateY = 458;
    return `<g data-callout="${role}" data-live-readout="${role}"><rect class="live-plate" x="${x}" y="${plateY}" width="${width}" height="${34 + Math.max(0, lines.length - 1) * 24}" rx="5"/>${lines.map((line, index) => `<text class="live-value" x="${x + 15}" y="${plateY + 23 + index * 24}">${line}</text>`).join("")}</g>`;
  }

  function sectorValues(radius, lower, upper, samples = 64, centre = { re: 0, im: 0 }) {
    return Array.from({ length: samples + 1 }, (_, index) => polar(radius, lower + (upper - lower) * index / samples, centre));
  }

  function sectorPath(origin, scale, transform, upper = Math.PI / 3, radius = 2) {
    const centre = transform({ re: 0, im: 0 });
    const values = sectorValues(radius, 0, upper, 48).map(transform);
    const c = screen(centre, origin, scale);
    return `M${c.x.toFixed(3)} ${c.y.toFixed(3)}L${values.map((z) => { const p = screen(z, origin, scale); return `${p.x.toFixed(3)} ${p.y.toFixed(3)}`; }).join("L")}Z`;
  }

  function sectorMarkup(origin, scale, transform, side, role, options = {}) {
    const upper = options.upper ?? Math.PI / 3;
    const radius = options.radius ?? 2;
    const path = sectorPath(origin, scale, transform, upper, radius);
    const centre = screen(transform({ re: 0, im: 0 }), origin, scale);
    const lowerEnd = screen(transform(polar(radius, 0)), origin, scale);
    const upperEnd = screen(transform(polar(radius, upper)), origin, scale);
    const arc = sectorValues(radius, 0, upper, 64).map(transform);
    const fill = options.fill ? `<path class="${options.fillClass || "transform-region"}" data-region-role="${role}" clip-path="url(#${side}-clip)" d="${path}"/>` : "";
    return `<g data-set-role="${role}" data-upper-angle="${upper}" data-radius="${radius}">${fill}${curve(arc, origin, scale, options.ghost ? "transform-ghost" : options.css || "image", `${role}-arc`, side)}<line class="set-boundary open ${options.ghost ? "transform-ghost" : ""}" x1="${centre.x}" y1="${centre.y}" x2="${lowerEnd.x}" y2="${lowerEnd.y}"/><line class="set-boundary open ${options.ghost ? "transform-ghost" : ""}" x1="${centre.x}" y1="${centre.y}" x2="${upperEnd.x}" y2="${upperEnd.y}"/></g>`;
  }

  function correspondingPair(source, image, sourceOrigin, imageOrigin, sourceScale, imageScale, role, labels = ["u", "z"]) {
    if (!checked("corresponding-points") && scene === "loci" || !checked("mapping-points") && scene === "apollonius" || !checked("markers") && scene === "mappings") return "";
    return mark(source, sourceOrigin, sourceScale, labels[0], `${role}-source`, "is-result") + mark(image, imageOrigin, imageScale, labels[1], `${role}-image`, "is-conjugate");
  }

  function annularSectorPath(origin, scale, transform, inner, outer, lower, upper) {
    const outerValues = sectorValues(outer, lower, upper, 64).map(transform);
    const innerValues = sectorValues(inner, upper, lower, 64).map(transform);
    const values = [...outerValues, ...innerValues];
    return values.map((z, index) => {
      const p = screen(z, origin, scale);
      return `${index === 0 ? "M" : "L"}${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
    }).join("") + "Z";
  }

  function annularSectorMarkup(origin, scale, transform, side, role, options = {}) {
    const inner = options.inner ?? 1;
    const outer = options.outer ?? 2;
    const lower = options.lower ?? 0;
    const upper = options.upper ?? Math.PI / 3;
    const css = options.css || "source";
    const outerValues = sectorValues(outer, lower, upper, 64).map(transform);
    const innerValues = sectorValues(inner, lower, upper, 64).map(transform);
    const lowerInner = screen(transform(polar(inner, lower)), origin, scale);
    const lowerOuter = screen(transform(polar(outer, lower)), origin, scale);
    const upperInner = screen(transform(polar(inner, upper)), origin, scale);
    const upperOuter = screen(transform(polar(outer, upper)), origin, scale);
    const fill = options.fill ? `<path class="${options.fillClass || "transform-region"}" data-region-role="${role}" clip-path="url(#${side}-clip)" d="${annularSectorPath(origin, scale, transform, inner, outer, lower, upper)}"/>` : "";
    const ghost = options.ghost ? " transform-ghost" : "";
    const openMarkers = options.open === false ? "" : [lowerInner, lowerOuter, upperInner, upperOuter].map((p) => `<circle class="excluded-point locus-open-marker" cx="${p.x}" cy="${p.y}" r="4.5"/>`).join("");
    return `<g data-set-role="${role}" data-inner-radius="${inner}" data-outer-radius="${outer}" data-lower-angle="${lower}" data-upper-angle="${upper}">${fill}${curve(outerValues, origin, scale, `${css}${ghost}`, `${role}-outer`, side)}${curve(innerValues, origin, scale, `${css}${ghost}`, `${role}-inner`, side)}<line class="set-boundary open ${css}${ghost}" x1="${lowerInner.x}" y1="${lowerInner.y}" x2="${lowerOuter.x}" y2="${lowerOuter.y}"/><line class="set-boundary open ${css}${ghost}" x1="${upperInner.x}" y1="${upperInner.y}" x2="${upperOuter.x}" y2="${upperOuter.y}"/>${openMarkers}</g>`;
  }

  function annularBoundarySamples(inner, outer, lower, upper, samples = 48) {
    const outerArc = sectorValues(outer, lower, upper, samples);
    const upperEdge = Array.from({ length: Math.floor(samples / 2) + 1 }, (_, index) => polar(outer - (outer - inner) * index / Math.floor(samples / 2), upper));
    const innerArc = sectorValues(inner, upper, lower, samples);
    const lowerEdge = Array.from({ length: Math.floor(samples / 2) + 1 }, (_, index) => polar(inner + (outer - inner) * index / Math.floor(samples / 2), lower));
    return [...outerArc, ...upperEdge.slice(1), ...innerArc.slice(1), ...lowerEdge.slice(1)];
  }

  function substitutionGate(symbol, title) {
    return `<g class="substitution-gate" data-substitution-gate="${title.toLowerCase()}"><line class="substitution-arrow" x1="468" y1="326" x2="532" y2="326"/><path class="substitution-arrow-head" d="M526 319L535 326L526 333Z"/><circle class="substitution-badge" cx="500" cy="326" r="25"/><text class="substitution-symbol" x="500" y="322" text-anchor="middle">${symbol}</text><text class="substitution-title" x="500" y="365" text-anchor="middle">${title}</text></g>`;
  }

  function locusReadout(lines, role) {
    const y = 492;
    return `<g data-callout="${role}" data-live-readout="${role}"><rect class="live-plate locus-live-plate" x="566" y="${y}" width="358" height="${34 + Math.max(0, lines.length - 1) * 23}" rx="5"/>${lines.map((line, index) => `<text class="live-value" x="581" y="${y + 23 + index * 23}">${line}</text>`).join("")}</g>`;
  }

  function lociMarkup() {
    const shift = { re: 1, im: 1 };
    const turn = Math.PI / 6;
    const identity = (z) => z;
    const zFromBase = (s) => L.add(shift, s);
    const uFromBase = identity;
    const vFromBase = (s) => rotateScale(s, 1, turn);
    const wFromBase = (s) => rotateScale(s, 2, turn);
    const qFromBase = (s) => L.reciprocal(wFromBase(s));
    const sourceOptions = { inner: 1, outer: 2, lower: 0, upper: Math.PI / 3, css: "source" };
    const rotatedOptions = { inner: 1, outer: 2, lower: turn, upper: Math.PI / 2, css: "source" };
    const scaledOptions = { inner: 2, outer: 4, lower: turn, upper: Math.PI / 2, css: "source" };
    const reciprocalOptions = { inner: 0.25, outer: 0.5, lower: -Math.PI / 2, upper: -turn, css: "image" };
    const fillSource = checked("source-region");
    const fillImage = checked("image-region");
    let out = "";

    if (step === 0) {
      out = twoPlanes("z-plane: given set", "substitution chain", 58, 46);
      out += annularSectorMarkup(LEFT, 58, zFromBase, "left", "standard-set", { ...sourceOptions, fill: fillSource, fillClass: "source-transform-region" });
      out += `<g class="substitution-chain" data-transform-stage="substitution-chain"><rect class="chain-card source-card" x="608" y="118" width="274" height="58" rx="8"/><text class="chain-variable" x="632" y="154">z</text><text class="chain-operation" x="681" y="154">GIVEN REGION</text><line class="chain-link" x1="745" y1="176" x2="745" y2="205"/><rect class="chain-card" x="608" y="205" width="274" height="58" rx="8"/><text class="chain-variable" x="632" y="241">u</text><text class="chain-operation" x="681" y="241">RECENTER</text><line class="chain-link" x1="745" y1="263" x2="745" y2="292"/><rect class="chain-card" x="608" y="292" width="274" height="58" rx="8"/><text class="chain-variable" x="632" y="328">v</text><text class="chain-operation" x="681" y="328">ROTATE + SCALE</text><line class="chain-link" x1="745" y1="350" x2="745" y2="379"/><rect class="chain-card result-card" x="608" y="379" width="274" height="58" rx="8"/><text class="chain-variable" x="632" y="415">q</text><text class="chain-operation" x="681" y="415">RECIPROCAL</text></g>`;
      return out;
    }

    if (step === 1) {
      const movingCentre = L.scale(shift, 1 - progress);
      const moving = (s) => L.add(movingCentre, s);
      out = twoPlanes("z-plane: before", "u-plane: after", 58, 58);
      out += annularSectorMarkup(LEFT, 58, zFromBase, "left", "previous-set", { ...sourceOptions, fill: fillSource, fillClass: "source-transform-region" });
      if (checked("transform-guides")) out += annularSectorMarkup(RIGHT, 58, zFromBase, "right", "recenter-ghost", { ...sourceOptions, ghost: true, open: false });
      out += annularSectorMarkup(RIGHT, 58, moving, "right", "transformed-set", { ...sourceOptions, fill: fillImage, fillClass: "image-transform-region", css: "image" });
      const base = polar(1.55, Math.PI / 5);
      out += correspondingPair(zFromBase(base), moving(base), LEFT, RIGHT, 58, 58, "substitution-correspondence", ["z", "u"]);
      if (checked("transform-guides")) {
        const from = screen(shift, RIGHT, 58), to = screen(movingCentre, RIGHT, 58);
        out += `<line class="operation-guide" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"/><circle class="transform-centre" cx="${to.x}" cy="${to.y}" r="8"/>`;
      }
      out += substitutionGate("−a", "RECENTRE") + `<g data-motion-role="locus-recentre" data-operation-kind="rigid-translate" data-centre-re="${movingCentre.re}" data-centre-im="${movingCentre.im}" data-build-progress="${progress}"></g>` + locusReadout([`centre: (${movingCentre.re.toFixed(2)}, ${movingCentre.im.toFixed(2)})`, "shape, radii and angles unchanged"], "locus-recentre-live");
      return out;
    }

    if (step === 2) {
      const angle = turn * progress;
      const moving = (s) => rotateScale(s, 1, angle);
      out = twoPlanes("u-plane: before", "v-plane: after", 58, 58);
      out += annularSectorMarkup(LEFT, 58, uFromBase, "left", "previous-set", { ...sourceOptions, fill: fillSource, fillClass: "source-transform-region" });
      if (checked("transform-guides")) out += annularSectorMarkup(RIGHT, 58, uFromBase, "right", "rotate-ghost", { ...sourceOptions, ghost: true, open: false });
      out += annularSectorMarkup(RIGHT, 58, moving, "right", "transformed-set", { ...sourceOptions, lower: angle, upper: Math.PI / 3 + angle, fill: fillImage, fillClass: "image-transform-region", css: "image" });
      const base = polar(1.55, Math.PI / 5);
      out += correspondingPair(base, moving(base), LEFT, RIGHT, 58, 58, "substitution-correspondence", ["u", "v"]);
      if (checked("transform-guides")) {
        const origin = screen({ re: 0, im: 0 }, RIGHT, 58), before = screen(base, RIGHT, 58), after = screen(moving(base), RIGHT, 58);
        out += `<line class="radius-guide is-before" x1="${origin.x}" y1="${origin.y}" x2="${before.x}" y2="${before.y}"/><line class="radius-guide is-after" x1="${origin.x}" y1="${origin.y}" x2="${after.x}" y2="${after.y}"/>`;
      }
      out += substitutionGate("+30°", "ROTATE") + `<g data-motion-role="locus-rotate" data-turn="${angle}" data-modulus-ratio="1" data-build-progress="${progress}"></g>` + locusReadout([`turn: ${(angle * 180 / Math.PI).toFixed(1)} degrees`, "every argument gains the same angle"], "locus-rotate-live");
      return out;
    }

    if (step === 3) {
      const factor = 1 + progress;
      const moving = (s) => rotateScale(s, factor, turn);
      out = twoPlanes("v-plane: before", "w-plane: after", 46, 46);
      out += annularSectorMarkup(LEFT, 46, identity, "left", "previous-set", { ...rotatedOptions, fill: fillSource, fillClass: "source-transform-region" });
      if (checked("transform-guides")) out += annularSectorMarkup(RIGHT, 46, identity, "right", "scale-ghost", { ...rotatedOptions, ghost: true, open: false });
      out += annularSectorMarkup(RIGHT, 46, identity, "right", "transformed-set", { ...rotatedOptions, inner: factor, outer: 2 * factor, fill: fillImage, fillClass: "image-transform-region", css: "image" });
      const source = polar(1.55, Math.PI / 5 + turn), image = L.scale(source, factor);
      out += correspondingPair(source, image, LEFT, RIGHT, 46, 46, "substitution-correspondence", ["v", "w"]);
      if (checked("transform-guides")) {
        const origin = screen({ re: 0, im: 0 }, RIGHT, 46), before = screen(source, RIGHT, 46), after = screen(image, RIGHT, 46);
        out += `<line class="radius-guide is-before" x1="${origin.x}" y1="${origin.y}" x2="${before.x}" y2="${before.y}"/><line class="radius-guide is-after" x1="${origin.x}" y1="${origin.y}" x2="${after.x}" y2="${after.y}"/>`;
      }
      out += substitutionGate("×2", "SCALE") + `<g data-motion-role="locus-scale" data-scale="${factor}" data-turn="${turn}" data-build-progress="${progress}"></g>` + locusReadout([`scale: ${factor.toFixed(2)}`, `radii: ${factor.toFixed(2)} to ${(2 * factor).toFixed(2)}`], "locus-scale-live");
      return out;
    }

    if (step === 4) {
      out = twoPlanes("w-plane: before", "q-plane: after", 46, 300);
      out += annularSectorMarkup(LEFT, 46, identity, "left", "previous-set", { ...scaledOptions, fill: fillSource, fillClass: "source-transform-region" });
      out += annularSectorMarkup(RIGHT, 300, identity, "right", "transformed-set", { ...reciprocalOptions, fill: false });
      const sourceBoundary = annularBoundarySamples(2, 4, turn, Math.PI / 2, 52);
      const count = Math.max(2, Math.ceil((sourceBoundary.length - 1) * progress) + 1);
      const sourceTrace = sourceBoundary.slice(0, count);
      const imageTrace = sourceTrace.map(L.reciprocal);
      out += curve(sourceTrace, LEFT, 46, "progress-boundary source", "reciprocal-boundary-source", "left");
      out += curve(imageTrace, RIGHT, 300, "progress-boundary image", "reciprocal-boundary-image", "right");
      const source = sourceTrace[sourceTrace.length - 1], image = L.reciprocal(source);
      out += correspondingPair(source, image, LEFT, RIGHT, 46, 300, "reciprocal-boundary-correspondence", ["w", "q"]);
      if (checked("transform-guides")) {
        const sourceOrigin = screen({ re: 0, im: 0 }, LEFT, 46), sourcePoint = screen(source, LEFT, 46);
        const imageOrigin = screen({ re: 0, im: 0 }, RIGHT, 300), imagePoint = screen(image, RIGHT, 300);
        out += `<line class="radius-guide" x1="${sourceOrigin.x}" y1="${sourceOrigin.y}" x2="${sourcePoint.x}" y2="${sourcePoint.y}"/><line class="radius-guide" x1="${imageOrigin.x}" y1="${imageOrigin.y}" x2="${imagePoint.x}" y2="${imagePoint.y}"/>`;
      }
      const sourceRadius = L.modulus(source), imageRadius = L.modulus(image);
      out += substitutionGate("1/w", "INVERT") + `<g data-motion-role="locus-reciprocal-boundary" data-source-radius="${sourceRadius}" data-image-radius="${imageRadius}" data-source-angle="${L.argumentFrom(source, { re: 0, im: 0 })}" data-image-angle="${L.argumentFrom(image, { re: 0, im: 0 })}" data-radius-product="${sourceRadius * imageRadius}" data-build-progress="${progress}"></g>` + locusReadout([`radius: ${sourceRadius.toFixed(2)} -> ${imageRadius.toFixed(3)}`, "outer becomes inner; angle changes sign"], "locus-reciprocal-boundary-live");
      return out;
    }

    if (step === 5) {
      const currentUpper = turn + (Math.PI / 3) * progress;
      const imageLower = -currentUpper;
      out = twoPlanes("w-plane: before", "q-plane: after", 46, 300);
      out += annularSectorMarkup(LEFT, 46, identity, "left", "source-outline", { ...scaledOptions, fill: false });
      out += annularSectorMarkup(RIGHT, 300, identity, "right", "image-outline", { ...reciprocalOptions, fill: false });
      if (fillSource) out += annularSectorMarkup(LEFT, 46, identity, "left", "source-reciprocal-sweep", { ...scaledOptions, upper: currentUpper, fill: true, fillClass: "source-transform-region" });
      if (fillImage) out += annularSectorMarkup(RIGHT, 300, identity, "right", "image-reciprocal-sweep", { ...reciprocalOptions, lower: imageLower, fill: true, fillClass: "image-transform-region" });
      const source = polar(3, turn + Math.PI / 3 * Math.max(0.08, progress * 0.82));
      const image = L.reciprocal(source);
      out += correspondingPair(source, image, LEFT, RIGHT, 46, 300, "reciprocal-region-correspondence", ["w", "q"]);
      if (checked("transform-guides")) {
        const sourceOrigin = screen({ re: 0, im: 0 }, LEFT, 46), sourcePoint = screen(source, LEFT, 46);
        const imageOrigin = screen({ re: 0, im: 0 }, RIGHT, 300), imagePoint = screen(image, RIGHT, 300);
        out += `<line class="radius-guide is-before" x1="${sourceOrigin.x}" y1="${sourceOrigin.y}" x2="${sourcePoint.x}" y2="${sourcePoint.y}"/><line class="radius-guide is-after" x1="${imageOrigin.x}" y1="${imageOrigin.y}" x2="${imagePoint.x}" y2="${imagePoint.y}"/>`;
      }
      out += substitutionGate("1/w", "INVERT") + `<g data-motion-role="locus-reciprocal-region" data-source-lower="${turn}" data-source-upper="${currentUpper}" data-image-lower="${imageLower}" data-image-upper="${-turn}" data-source-inner="2" data-source-outer="4" data-image-inner="0.25" data-image-outer="0.5" data-build-progress="${progress}"></g>` + locusReadout(["every interior point follows the boundary", "orientation reverses; strict edges stay open"], "locus-reciprocal-region-live");
      return out;
    }

    out = twoPlanes("z-plane: original", "q-plane: composed", 58, 300);
    out += annularSectorMarkup(LEFT, 58, zFromBase, "left", "original-set", { ...sourceOptions, fill: fillSource, fillClass: "source-transform-region" });
    out += annularSectorMarkup(RIGHT, 300, identity, "right", "transformed-set", { ...reciprocalOptions, fill: fillImage, fillClass: "image-transform-region" });
    const base = polar(1.5, Math.PI / 5);
    const originalPoint = zFromBase(base), compositePoint = qFromBase(base);
    out += correspondingPair(originalPoint, compositePoint, LEFT, RIGHT, 58, 300, "composite-correspondence", ["z", "q"]);
    if (checked("transform-guides")) {
      const sourceCentre = screen(shift, LEFT, 58), sourcePoint = screen(originalPoint, LEFT, 58);
      const imageOrigin = screen({ re: 0, im: 0 }, RIGHT, 300), imagePoint = screen(compositePoint, RIGHT, 300);
      out += `<line class="radius-guide is-before" x1="${sourceCentre.x}" y1="${sourceCentre.y}" x2="${sourcePoint.x}" y2="${sourcePoint.y}"/><line class="radius-guide is-after" x1="${imageOrigin.x}" y1="${imageOrigin.y}" x2="${imagePoint.x}" y2="${imagePoint.y}"/>`;
    }
    out += substitutionGate("q", "COMPOSE") + `<g data-composite-map="reciprocal-after-affine" data-source-role="original-set" data-image-role="transformed-set"></g>`;
    return out;
  }

  const ratioA = { re: -2, im: 0 };
  const ratioB = { re: 2, im: 0 };
  const ratioMap = (z) => L.divide(L.subtract(z, ratioA), L.subtract(z, ratioB));
  const ratioInverse = (w) => L.divide(L.scale(L.add(w, { re: 1, im: 0 }), 2), L.subtract(w, { re: 1, im: 0 }));

  function ratioArms(z, scale) {
    if (!checked("ratio-arms")) return "";
    const p = screen(z, LEFT, scale), a = screen(ratioA, LEFT, scale), b = screen(ratioB, LEFT, scale);
    return `<g data-layer="ratio-arms"><path class="equal-arm" data-equal-arm="PA" d="M${p.x} ${p.y}L${a.x} ${a.y}"/><path class="equal-arm" data-equal-arm="PB" d="M${p.x} ${p.y}L${b.x} ${b.y}"/><text class="arm-label" x="${(p.x + a.x) / 2 - 25}" y="${(p.y + a.y) / 2 - 8}">PA</text><text class="arm-label" x="${(p.x + b.x) / 2 + 8}" y="${(p.y + b.y) / 2 - 8}">PB</text></g>`;
  }

  function ratioPair(z, w, zScale, wScale, role) {
    let out = ratioArms(z, zScale);
    if (!checked("mapping-points")) return out;
    const sourcePoint = screen(z, LEFT, zScale), imagePoint = screen(w, RIGHT, wScale), imageOrigin = screen({ re: 0, im: 0 }, RIGHT, wScale);
    const sourceDx = sourcePoint.x > PLANE.left + PLANE.width - 34 ? -28 : 12;
    const imageDx = imagePoint.x > PLANE.right + PLANE.width - 34 ? -28 : 12;
    out += `<line class="modulus-arm" data-segment-role="${role}-modulus" x1="${imageOrigin.x}" y1="${imageOrigin.y}" x2="${imagePoint.x}" y2="${imagePoint.y}"/><text class="modulus-arm-label" x="${(imageOrigin.x + imagePoint.x) / 2 + 8}" y="${(imageOrigin.y + imagePoint.y) / 2 - 8}">|w|</text>`;
    return out + mark(z, LEFT, zScale, "P", `${role}-source`, "is-result", sourceDx, -12) + mark(w, RIGHT, wScale, "w", `${role}-image`, "is-conjugate", imageDx, -12);
  }

  function apolloniusMarkup() {
    const zScale = 34, wScale = 52;
    let out = twoPlanes("z-plane: P", "w-plane: ratio", zScale, wScale);
    out += mark(ratioA, LEFT, zScale, "a", "ratio-a", "is-result", -20, 24) + mark(ratioB, LEFT, zScale, "b / pole", "ratio-b", "is-conjugate", 10, 24);
    const originW = mark({ re: 0, im: 0 }, RIGHT, wScale, "0", "ratio-origin", "", 10, 22);
    if (step === 0) return out + originW + `<g data-ratio-map-definition="true"><text class="mapping-summary" x="745" y="280" text-anchor="middle">distance ratio → modulus</text><text class="mapping-summary secondary-summary" x="745" y="314" text-anchor="middle">one point, two plane addresses</text></g>`;

    if (step === 1) {
      const theta = -0.35 + 1.25 * progress;
      const z = { re: -0.4 + 0.65 * progress, im: 1.65 + 0.45 * Math.sin(theta) };
      const w = ratioMap(z);
      out += ratioPair(z, w, zScale, wScale, "live-ratio-pair");
      out += `<g data-motion-role="ratio-to-modulus" data-pa="${L.distance(z, ratioA)}" data-pb="${L.distance(z, ratioB)}" data-w-modulus="${L.modulus(w)}" data-build-progress="${progress}"></g>` + livePlate([`PA/PB = ${(L.distance(z, ratioA) / L.distance(z, ratioB)).toFixed(3)}`, `|w| = ${L.modulus(w).toFixed(3)}`, "the two readings are identical"], "ratio-modulus-live");
      return out;
    }

    if (step === 2) {
      const span = (Math.PI - 1) * progress;
      const angles = Array.from({ length: Math.max(3, Math.ceil(90 * progress)) }, (_, index) => Math.PI - span + 2 * span * index / Math.max(1, Math.ceil(90 * progress) - 1));
      const wValues = angles.map((angle) => polar(1, angle));
      const zValues = wValues.map(ratioInverse);
      const wCentre = screen({ re: 0, im: 0 }, RIGHT, wScale), wPole = screen({ re: 1, im: 0 }, RIGHT, wScale);
      if (checked("mapping-traces")) out += `<circle class="transform-ghost" data-reference-circle="unit-circle-with-pole-gap" cx="${wCentre.x}" cy="${wCentre.y}" r="${wScale}"/><circle class="excluded-point" data-excluded-point="unit-circle-pole-gap" cx="${wPole.x}" cy="${wPole.y}" r="7"/>`;
      out += curve(wValues, RIGHT, wScale, "image", "unit-circle-trace", "right") + curve(zValues, LEFT, zScale, "source", "lambda-one-line-trace", "left");
      const movingAngle = Math.PI + span * 0.72;
      const w = polar(1, movingAngle), z = ratioInverse(w);
      out += ratioPair(z, w, zScale, wScale, "lambda-one-correspondence") + `<g data-motion-role="unit-circle-to-line" data-w-radius="1" data-source-real="${z.re}" data-build-progress="${progress}"></g>` + livePlate(["|w| = 1", `Re(P) = ${z.re.toFixed(3)}`, "centred circle → perpendicular bisector"], "unit-circle-line-live");
      return out;
    }

    if (step === 3) {
      const lambda = 1.06 + 0.94 * progress;
      const locus = L.apollonius(ratioA, ratioB, lambda);
      const wc = screen({ re: 0, im: 0 }, RIGHT, wScale), zc = screen(locus.centre, LEFT, zScale);
      out += `<circle class="locus-boundary closed image" data-locus-plane="w" data-lambda="${lambda}" cx="${wc.x}" cy="${wc.y}" r="${lambda * wScale}"/><circle class="locus-boundary closed source transition-circle" data-locus-plane="z" data-lambda="${lambda}" data-centre-re="${locus.centre.re}" data-radius-value="${locus.radius}" clip-path="url(#left-clip)" cx="${zc.x}" cy="${zc.y}" r="${locus.radius * zScale}"/>`;
      const w = polar(lambda, Math.PI * 0.72), z = ratioInverse(w);
      out += ratioPair(z, w, zScale, wScale, "lambda-morph-correspondence") + `<g data-motion-role="lambda-circle-morph" data-lambda="${lambda}" data-centre-re="${locus.centre.re}" data-radius-value="${locus.radius}" data-build-progress="${progress}"></g>` + livePlate([`lambda = ${lambda.toFixed(3)}`, `centre = ${locus.centre.re.toFixed(3)}`, `radius = ${locus.radius.toFixed(3)}`, "the line is the lambda → 1 limit"], "lambda-morph-live", 566, 72, 366);
      return out;
    }

    const target = L.apollonius(ratioA, ratioB, 2);
    const tc = screen(target.centre, LEFT, zScale), wc = screen({ re: 0, im: 0 }, RIGHT, wScale);
    if (step === 4) {
      const end = 2 * Math.PI * progress;
      const count = Math.max(3, Math.ceil(100 * progress));
      const angles = Array.from({ length: count }, (_, index) => end * index / Math.max(1, count - 1));
      const wValues = angles.map((angle) => polar(2, angle));
      const zValues = wValues.map(ratioInverse);
      out += curve(wValues, RIGHT, wScale, "image", "lambda-two-circle-trace", "right") + curve(zValues, LEFT, zScale, "source", "apollonius-circle-trace", "left");
      const w = wValues[wValues.length - 1], z = zValues[zValues.length - 1];
      out += ratioPair(z, w, zScale, wScale, "lambda-two-correspondence") + `<g data-motion-role="apollonius-pointwise-trace" data-lambda="2" data-centre-re="${target.centre.re}" data-radius-value="${target.radius}" data-build-progress="${progress}"></g>` + livePlate(["|w| = 2", "PA/PB = 2", "one revolution generates both circles"], "apollonius-trace-live");
      return out;
    }

    if (step === 5) {
      if (checked("mapping-traces")) out += `<circle class="locus-boundary closed image" cx="${wc.x}" cy="${wc.y}" r="${2 * wScale}"/><circle class="locus-boundary closed source" cx="${tc.x}" cy="${tc.y}" r="${target.radius * zScale}"/>`;
      if (checked("region-probes")) {
        out += `<circle class="mapped-region image-region" data-region-role="w-disk" cx="${wc.x}" cy="${wc.y}" r="${2 * wScale}"/><path class="mapped-region source-region" data-region-role="z-exterior" clip-path="url(#left-clip)" fill-rule="evenodd" d="M${PLANE.left} ${PLANE.top}H${PLANE.left + PLANE.width}V${PLANE.top + PLANE.height}H${PLANE.left}Z M${tc.x - target.radius * zScale} ${tc.y}a${target.radius * zScale} ${target.radius * zScale} 0 1 0 ${2 * target.radius * zScale} 0a${target.radius * zScale} ${target.radius * zScale} 0 1 0 -${2 * target.radius * zScale} 0"/>`;
        const probes = [];
        [0.45, 0.9, 1.35, 1.8].forEach((radius) => {
          for (let index = 0; index < 8; index += 1) {
            const w = polar(radius, Math.PI / 8 + index * Math.PI / 4);
            if (L.distance(w, { re: 1, im: 0 }) > 0.22) probes.push({ w, z: ratioInverse(w) });
          }
        });
        const visible = probes.slice(0, Math.max(1, Math.ceil(probes.length * progress)));
        out += visible.map((pair, index) => finite(pair.z) ? `<g data-region-probe="${index}" data-w-modulus="${L.modulus(pair.w)}" data-ratio="${L.distance(pair.z, ratioA) / L.distance(pair.z, ratioB)}"><circle class="probe-point image" cx="${screen(pair.w, RIGHT, wScale).x}" cy="${screen(pair.w, RIGHT, wScale).y}" r="4"/><circle class="probe-point source" clip-path="url(#left-clip)" cx="${screen(pair.z, LEFT, zScale).x}" cy="${screen(pair.z, LEFT, zScale).y}" r="4"/></g>` : "").join("");
        out += `<g data-motion-role="ratio-region-map" data-region-probe-count="${visible.length}" data-build-progress="${progress}"></g>`;
      }
      out += livePlate(["|w| < 2 maps to PA/PB < 2", "the centred disk becomes the circle exterior", "inside need not stay inside after a reciprocal"], "ratio-region-live", 566, 72, 370);
      return out;
    }

    const theta = Math.PI - (Math.PI - 0.13) * progress;
    const wUpper = polar(1, theta), wLower = polar(1, -theta);
    const zUpper = ratioInverse(wUpper), zLower = ratioInverse(wLower);
    const upperAngles = Array.from({ length: 48 }, (_, index) => Math.PI - (Math.PI - theta) * index / 47);
    const lowerAngles = upperAngles.map((angle) => -angle);
    out += curve(upperAngles.map((angle) => polar(1, angle)), RIGHT, wScale, "image", "unit-circle-pole-approach", "right", "upper") + curve(lowerAngles.map((angle) => polar(1, angle)), RIGHT, wScale, "image", "unit-circle-pole-approach", "right", "lower");
    out += curve(upperAngles.map((angle) => ratioInverse(polar(1, angle))), LEFT, zScale, "source", "line-to-infinity", "left", "upper") + curve(lowerAngles.map((angle) => ratioInverse(polar(1, angle))), LEFT, zScale, "source", "line-to-infinity", "left", "lower");
    if (checked("infinity-guide")) {
      const pole = screen({ re: 1, im: 0 }, RIGHT, wScale);
      out += `<circle class="excluded-point" data-excluded-point="inverse-pole-w1" cx="${pole.x}" cy="${pole.y}" r="9"/><text class="point-label" data-callout="inverse-pole-label" x="${pole.x - 105}" y="${pole.y + 64}">w=1 → infinity</text><line class="infinity-guide" x1="${LEFT.x}" y1="${PLANE.top + 12}" x2="${LEFT.x}" y2="${PLANE.top + PLANE.height - 12}"/>`;
    }
    if (checked("mapping-points")) {
      const sourceMarker = (z, role, label, direction) => {
        const point = screen(z, LEFT, zScale);
        if (point.y >= PLANE.top + 20 && point.y <= PLANE.top + PLANE.height - 20) return mark(z, LEFT, zScale, label, role, "is-result", 12, direction === "up" ? -12 : 24);
        const edge = { x: LEFT.x, y: direction === "up" ? PLANE.top + 20 : PLANE.top + PLANE.height - 20 };
        const triangle = direction === "up" ? `M${edge.x - 8} ${edge.y + 8}L${edge.x} ${edge.y - 8}L${edge.x + 8} ${edge.y + 8}Z` : `M${edge.x - 8} ${edge.y - 8}L${edge.x} ${edge.y + 8}L${edge.x + 8} ${edge.y - 8}Z`;
        return `<g data-point-role="${role}" data-offscreen-imaginary="${z.im}"><path class="offscreen-indicator" d="${triangle}"/><text class="offscreen-label" data-callout="${role}-label" x="${edge.x + 14}" y="${edge.y + 6}">${label}</text></g>`;
      };
      out += sourceMarker(zLower, "upper-pole-approach-source", "P ↑", "up") + sourceMarker(zUpper, "lower-pole-approach-source", "P ↓", "down");
      out += mark(wUpper, RIGHT, wScale, "w+", "upper-pole-approach-image", "is-conjugate", 12, -14) + mark(wLower, RIGHT, wScale, "w−", "lower-pole-approach-image", "is-conjugate", 12, 26);
    }
    out += `<g data-motion-role="unit-circle-through-inverse-pole" data-theta="${theta}" data-upper-z-im="${zUpper.im}" data-lower-z-im="${zLower.im}" data-build-progress="${progress}"></g>` + livePlate([`distance from w to 1 = ${L.distance(wUpper, { re: 1, im: 0 }).toFixed(3)}`, `preimages: Im(P) = ±${Math.abs(zUpper.im).toFixed(2)}`, "the circle opens into a line through infinity"], "ratio-pole-live", 566, 72, 374);
    return out;
  }

  const reciprocal = (z) => L.reciprocal(z);
  const finalMobius = (z) => L.mobius(z, { re: 1, im: 0 }, { re: 1, im: 0 }, { re: 1, im: 0 }, { re: -1, im: 0 });
  const vertical = (x, start = -5.4, end = 5.4, samples = 90) => Array.from({ length: samples + 1 }, (_, index) => ({ re: x, im: start + (end - start) * index / samples }));

  function halfPlaneRegion(side, origin, scale, boundaryX, css, role) {
    if (!checked("mapped-regions")) return "";
    const x = screen({ re: boundaryX, im: 0 }, origin, scale).x;
    const planeLeft = side === "left" ? PLANE.left : PLANE.right;
    return `<rect class="mapped-region ${css}" data-region-role="${role}" clip-path="url(#${side}-clip)" x="${planeLeft}" y="${PLANE.top}" width="${Math.max(0, x - planeLeft)}" height="${PLANE.height}"/>`;
  }

  function diskRegion(centre, radius, origin, scale, css, role) {
    if (!checked("mapped-regions")) return "";
    const c = screen(centre, origin, scale);
    return `<circle class="mapped-region ${css}" data-region-role="${role}" cx="${c.x}" cy="${c.y}" r="${radius * scale}"/>`;
  }

  function mappingPair(source, image, sourceScale, imageScale, labels, role) {
    return correspondingPair(source, image, LEFT, RIGHT, sourceScale, imageScale, role, labels);
  }

  function mappingsMarkup() {
    const scale = 46;
    const labels = [
      ["z-plane", "u-plane"],
      ["z-plane", "u=z-1"],
      ["u-plane", "v=1/u"],
      ["v-plane", "q=2v"],
      ["q-plane", "w=q+1"],
      ["z-plane", "w-plane"],
      ["z-plane", "w-plane"]
    ][step];
    let out = twoPlanes(labels[0], labels[1], scale, scale);
    if (step === 0) {
      return out + `<g data-mobius-factorisation="true"><rect class="operation-strip" x="104" y="250" width="792" height="142" rx="6"/><text class="operation-title" x="500" y="282" text-anchor="middle">w = 1 + 2 / (z - 1)</text><text class="operation-stage" x="205" y="340" text-anchor="middle">shift -1</text><text class="operation-stage" x="400" y="340" text-anchor="middle">reciprocal</text><text class="operation-stage" x="595" y="340" text-anchor="middle">scale ×2</text><text class="operation-stage" x="790" y="340" text-anchor="middle">shift +1</text><path class="operation-arrow" d="M278 332H328M474 332H523M668 332H718"/></g>`;
    }

    if (step === 1) {
      const boundary = -progress;
      out += halfPlaneRegion("left", LEFT, scale, 0, "source-region", "z-left-half-plane") + halfPlaneRegion("right", RIGHT, scale, boundary, "image-region", "u-shifted-half-plane");
      out += curve(vertical(0), LEFT, scale, "source", "z-boundary", "left") + curve(vertical(boundary), RIGHT, scale, "image", "u-boundary", "right");
      const z = { re: 0, im: 1.35 }, u = { re: boundary, im: 1.35 };
      out += mappingPair(z, u, scale, scale, ["z", "u"], "shift-minus-one-pair") + `<g data-motion-role="mobius-first-translation" data-operation-kind="rigid-translate" data-shift="${-progress}" data-build-progress="${progress}"></g>`;
      if (checked("operation-guides")) out += `<line class="operation-guide" x1="${RIGHT.x}" y1="${RIGHT.y}" x2="${RIGHT.x - progress * scale}" y2="${RIGHT.y}"/>`;
      out += livePlate([`u = z - ${progress.toFixed(2)}`, "the line and its whole half-plane slide", "shape and orientation are unchanged"], "mobius-shift-live");
      return out;
    }

    if (step === 2) {
      const end = -5.4 + 10.8 * progress;
      const values = vertical(-1, -5.4, end, Math.max(3, Math.ceil(92 * progress)));
      const images = values.map(reciprocal);
      out += halfPlaneRegion("left", LEFT, scale, -1, "source-region", "u-left-half-plane") + diskRegion({ re: -0.5, im: 0 }, 0.5, RIGHT, scale, "image-region", "v-disk");
      out += curve(values, LEFT, scale, "source", "u-line-trace", "left") + curve(images, RIGHT, scale, "image", "reciprocal-circle-trace", "right");
      const u = values[values.length - 1], v = images[images.length - 1];
      out += mappingPair(u, v, scale, scale, ["u", "v"], "reciprocal-pair") + `<g data-motion-role="mobius-reciprocal-bend" data-operation-kind="reciprocal" data-circle-centre="-0.5" data-circle-radius="0.5" data-build-progress="${progress}"></g>` + livePlate([`u = -1 ${u.im >= 0 ? "+" : "-"} ${Math.abs(u.im).toFixed(2)}i`, `v = ${v.re.toFixed(3)} ${v.im >= 0 ? "+" : "-"} ${Math.abs(v.im).toFixed(3)}i`, "this is the only step that bends the boundary"], "mobius-reciprocal-live", 566, 72, 370);
      return out;
    }

    if (step === 3) {
      const factor = 1 + progress;
      const leftCentre = { re: -0.5, im: 0 }, rightCentre = { re: -0.5 * factor, im: 0 };
      out += diskRegion(leftCentre, 0.5, LEFT, scale, "source-region", "v-disk") + diskRegion(rightCentre, 0.5 * factor, RIGHT, scale, "image-region", "q-disk");
      out += curve(sectorValues(0.5, 0, 2 * Math.PI, 90, leftCentre), LEFT, scale, "source", "v-circle", "left") + curve(sectorValues(0.5 * factor, 0, 2 * Math.PI, 90, rightCentre), RIGHT, scale, "image", "q-circle", "right");
      const v = polar(0.5, Math.PI / 3, leftCentre), q = L.scale(v, factor);
      out += mappingPair(v, q, scale, scale, ["v", "q"], "dilation-pair") + `<g data-motion-role="mobius-dilation" data-operation-kind="dilate" data-scale="${factor}" data-build-progress="${progress}"></g>` + livePlate([`q = ${factor.toFixed(2)}v`, "centre and radius scale together", "the circle remains a circle"], "mobius-dilate-live");
      return out;
    }

    if (step === 4) {
      const shift = progress;
      const leftCentre = { re: -1, im: 0 }, rightCentre = { re: -1 + shift, im: 0 };
      out += diskRegion(leftCentre, 1, LEFT, scale, "source-region", "q-disk") + diskRegion(rightCentre, 1, RIGHT, scale, "image-region", "w-unit-disk");
      out += curve(sectorValues(1, 0, 2 * Math.PI, 90, leftCentre), LEFT, scale, "source", "q-circle", "left") + curve(sectorValues(1, 0, 2 * Math.PI, 90, rightCentre), RIGHT, scale, "image", "w-unit-circle", "right");
      const q = polar(1, 2 * Math.PI / 3, leftCentre), w = L.add(q, { re: shift, im: 0 });
      out += mappingPair(q, w, scale, scale, ["q", "w"], "shift-plus-one-pair") + `<g data-motion-role="mobius-final-translation" data-operation-kind="rigid-translate" data-shift="${shift}" data-build-progress="${progress}"></g>`;
      if (checked("operation-guides")) out += `<line class="operation-guide" x1="${RIGHT.x - scale}" y1="${RIGHT.y}" x2="${RIGHT.x + (-1 + shift) * scale}" y2="${RIGHT.y}"/>`;
      out += livePlate([`w = q + ${shift.toFixed(2)}`, "the completed disk slides to the origin", "translation does not bend its boundary"], "mobius-final-shift-live");
      return out;
    }

    if (step === 5) {
      const end = -5.4 + 10.8 * progress;
      const zValues = vertical(0, -5.4, end, Math.max(3, Math.ceil(96 * progress)));
      const wValues = zValues.map(finalMobius);
      out += halfPlaneRegion("left", LEFT, scale, 0, "source-region", "z-left-half-plane") + diskRegion({ re: 0, im: 0 }, 1, RIGHT, scale, "image-region", "w-unit-disk");
      out += curve(zValues, LEFT, scale, "source", "complete-source-line", "left") + curve(wValues, RIGHT, scale, "image", "complete-image-circle", "right");
      const z = zValues[zValues.length - 1], w = wValues[wValues.length - 1];
      out += mappingPair(z, w, scale, scale, ["z", "w"], "complete-mobius-pair") + `<circle class="excluded-point" data-excluded-point="missing-w1" cx="${screen({ re: 1, im: 0 }, RIGHT, scale).x}" cy="${RIGHT.y}" r="8"/><g data-motion-role="complete-mobius-trace" data-source-real="0" data-image-modulus="${L.modulus(w)}" data-build-progress="${progress}"></g>` + livePlate(["Re(z)=0 → |w|=1", "Re(z)<0 → |w|<1", "w=1 is the image of infinity"], "complete-mobius-live", 566, 72, 374);
      return out;
    }

    const theta = Math.PI - (Math.PI - 0.14) * progress;
    const upperAngles = Array.from({ length: 54 }, (_, index) => Math.PI - (Math.PI - theta) * index / 53);
    const lowerAngles = upperAngles.map((angle) => -angle);
    const upperZ = upperAngles.map((angle) => polar(1, angle)), lowerZ = lowerAngles.map((angle) => polar(1, angle));
    const upperW = upperZ.map(finalMobius), lowerW = lowerZ.map(finalMobius);
    out += curve(upperZ, LEFT, scale, "source", "pole-circle-source", "left", "upper") + curve(lowerZ, LEFT, scale, "source", "pole-circle-source", "left", "lower") + curve(upperW, RIGHT, scale, "image", "pole-line-image", "right", "upper") + curve(lowerW, RIGHT, scale, "image", "pole-line-image", "right", "lower");
    const zUp = upperZ[upperZ.length - 1], wUp = upperW[upperW.length - 1];
    const zDown = lowerZ[lowerZ.length - 1], wDown = lowerW[lowerW.length - 1];
    if (checked("markers")) {
      const imageMarker = (w, role, label, direction) => {
        const point = screen(w, RIGHT, scale);
        if (point.y >= PLANE.top + 20 && point.y <= PLANE.top + PLANE.height - 20) return mark(w, RIGHT, scale, label, role, "is-conjugate", 12, direction === "up" ? -12 : 24);
        const edge = { x: RIGHT.x, y: direction === "up" ? PLANE.top + 20 : PLANE.top + PLANE.height - 20 };
        const triangle = direction === "up" ? `M${edge.x - 8} ${edge.y + 8}L${edge.x} ${edge.y - 8}L${edge.x + 8} ${edge.y + 8}Z` : `M${edge.x - 8} ${edge.y - 8}L${edge.x} ${edge.y + 8}L${edge.x + 8} ${edge.y - 8}Z`;
        return `<g data-point-role="${role}" data-offscreen-imaginary="${w.im}"><path class="offscreen-indicator" d="${triangle}"/><text class="offscreen-label" data-callout="${role}-label" x="${edge.x + 14}" y="${edge.y + 6}">${label}</text></g>`;
      };
      out += mark(zUp, LEFT, scale, "z+", "pole-upper-pair-source", "is-result", 12, -16) + mark(zDown, LEFT, scale, "z−", "pole-lower-pair-source", "is-result", 12, 28);
      out += imageMarker(wUp, "pole-upper-pair-image", "w ↓", "down") + imageMarker(wDown, "pole-lower-pair-image", "w ↑", "up");
    }
    if (checked("pole")) {
      const zp = screen({ re: 1, im: 0 }, LEFT, scale), wm = screen({ re: 0, im: 0 }, RIGHT, scale);
      out += `<circle class="excluded-point" data-excluded-point="mobius-pole-z1" cx="${zp.x}" cy="${zp.y}" r="9"/><text class="point-label" data-callout="mobius-pole-label" x="${zp.x - 92}" y="${zp.y + 48}">pole z=1</text><line class="infinity-guide" x1="${wm.x}" y1="${PLANE.top + 10}" x2="${wm.x}" y2="${PLANE.top + PLANE.height - 10}"/>`;
    }
    out += `<g data-motion-role="circle-through-pole-to-line" data-theta="${theta}" data-image-real-upper="${wUp.re}" data-image-real-lower="${wDown.re}" data-image-imaginary-magnitude="${Math.abs(wUp.im)}" data-build-progress="${progress}"></g>` + livePlate(["z → 1 from two sides", `w = ±${Math.abs(wUp.im).toFixed(2)}i`, "circle through pole → line"], "mobius-pole-test-live", 566, 72, 374);
    return out;
  }

  const copy = {
    loci: ["Read the displaced region", "Move its centre to zero", "Turn every argument together", "Double every radius", "Watch reciprocal swap the edges", "Carry the whole interior", "Compose the substitutions"],
    apollonius: ["Turn a distance ratio into a modulus", "Read the same point in two planes", "Map the unit circle", "Move lambda away from one", "Trace the lambda=2 circle", "Map the inequality region", "Let the unit circle meet the pole"],
    mappings: ["Factor the map into visible operations", "Shift the pole to the origin", "Apply the reciprocal", "Dilate by two", "Translate by one", "Compose the whole map", "Test a circle through the pole"]
  }[scene];
  const descriptions = {
    loci: ["Start with an open annular sector whose centre is displaced from the origin.", "The subtraction shown below carries every point rigidly to the origin.", "The unit complex factor shown below adds the same angle to every point.", "The real factor shown below doubles both bounding radii.", "As one boundary is traced, reciprocal inverts radius and reverses angle.", "The same reciprocal rule carries every interior point and reverses orientation.", "Read the final inequalities from the complete substitution chain."],
    apollonius: ["Define w so its modulus is exactly PA/PB.", "Move P and compare the two numerical readings.", "The circle |w|=1 pulls back to the perpendicular bisector.", "Watch the line-limit close into an Apollonius circle.", "One moving parameter generates both corresponding circles.", "A disk can pull back to the exterior of a circle.", "The exceptional point w=1 explains why lambda=1 gives a line."],
    mappings: ["Rewrite the fraction as a four-operation chain.", "The first translation is rigid.", "Reciprocal is the only bending step.", "Dilation preserves the circle type.", "The last translation is rigid again.", "The complete boundary and region are generated point by point.", "A circle through the pole becomes a line because one point maps to infinity."]
  }[scene];
  const claims = {
    loci: [["source-modulus", "source-argument"], ["recenter-definition", "recenter-equation", "recenter-region"], ["rotate-definition", "rotate-modulus", "rotate-argument"], ["scale-definition", "scale-modulus", "scale-argument"], ["reciprocal-definition", "reciprocal-radius", "reciprocal-angle"], ["region-source", "region-image", "region-correspondence"], ["composite-map", "final-modulus", "final-argument"]],
    apollonius: [
      ["ratio-map", "ratio-modulus-definition"],
      ["point-map", "ratio-modulus-identity"],
      ["unit-circle", "lambda-one-preimage"],
      ["lambda-family", "lambda-morph"],
      ["lambda-two-image", "lambda-two-equation", "lambda-two-preimage"],
      ["ratio-region-disk", "ratio-region-ratio", "ratio-region-preimage"],
      ["inverse-map", "inverse-pole-limit", "inverse-pole-line"]
    ],
    mappings: [
      ["mobius-factorisation", "mobius-operation-chain"],
      ["first-translation", "first-translation-boundary"],
      ["reciprocal-map", "reciprocal-boundary", "reciprocal-bend"],
      ["dilation-map", "dilation-source-disk", "dilation-image-disk"],
      ["final-translation", "final-translation-source-disk", "final-translation-image-disk"],
      ["complete-map", "complete-line-circle", "complete-region"],
      ["circle-through-pole", "circle-through-pole-line", "generalised-circle"]
    ]
  }[scene];

  function mathLines() {
    if (scene === "loci") return [
      ["1<|z-(1+i)|<2", "0<\\arg(z-1-i)<\\pi/3"],
      ["u=z-(1+i)", "1<|u|<2", "0<\\arg u<\\pi/3"],
      ["v=e^{i\\pi/6}u", "|v|=|u|", "\\pi/6<\\arg v<\\pi/2"],
      ["w=2v", "2<|w|<4", "\\pi/6<\\arg w<\\pi/2"],
      ["q=\\frac1w", "|q|=\\frac1{|w|}", "\\arg q=-\\arg w"],
      ["2<r<4,\\quad \\pi/6<\\theta<\\pi/2", "\\frac14<\\frac1r<\\frac12", "-\\pi/2<-\\theta<-\\pi/6"],
      ["q=\\frac1{2e^{i\\pi/6}(z-1-i)}", "\\frac14<|q|<\\frac12", "-\\frac\\pi2<\\arg q<-\\frac\\pi6"]
    ][step];
    if (scene === "apollonius") return [
      ["w=\\frac{z+2}{z-2}", "|w|=\\frac{|z+2|}{|z-2|}=\\frac{PA}{PB}"],
      ["P\\mapsto w", "PA/PB=|w|"],
      ["|w|=1", "\\operatorname{Re}z=0"],
      ["|w|=\\lambda", "1<\\lambda\\le2"],
      ["|w|=2", "|z+2|=2|z-2|", "C=10/3,\ R=8/3"],
      ["|w|<2", "\\frac{PA}{PB}<2", "P\\in\\operatorname{ext}(C)"],
      ["z=2\\frac{w+1}{w-1}", "w\\to1\\Longrightarrow |z|\\to\\infty", "\\lambda=1:\\ \\text{circle}\\to\\text{line}"]
    ][step];
    return [
      ["w=\\frac{z+1}{z-1}=1+\\frac{2}{z-1}", "z\\to u\\to v\\to q\\to w"],
      ["u=z-1", "\\operatorname{Re}z=0\\to\\operatorname{Re}u=-1"],
      ["v=1/u", "\\operatorname{Re}u=-1", "|v+1/2|=1/2"],
      ["q=2v", "|v+1/2|<1/2", "|q+1|<1"],
      ["w=q+1", "|q+1|<1", "|w|<1"],
      ["w=\\frac{z+1}{z-1}", "\\operatorname{Re}z=0\\to|w|=1", "\\operatorname{Re}z<0\\to|w|<1"],
      ["z_{\\rm pole}=1\\in\\{|z|=1\\}", "\\operatorname{Re}w=0", "\\text{through pole}\\Rightarrow\\text{line}"]
    ][step];
  }

  function renderMath(lines) {
    [1, 2, 3].forEach((number, index) => {
      const element = document.getElementById(`math-line-${number}`);
      element.dataset.claim = claims[step][index] || "";
      if (root.katex) root.katex.render(lines[index] || "", element, { throwOnError: false });
      else element.textContent = lines[index] || "";
    });
  }

  function render() {
    svg.innerHTML = scene === "loci" ? lociMarkup() : scene === "apollonius" ? apolloniusMarkup() : mappingsMarkup();
    tabs.forEach((button, index) => index === step ? button.setAttribute("aria-current", "step") : button.removeAttribute("aria-current"));
    document.getElementById("step-number").textContent = String(step + 1).padStart(2, "0");
    document.getElementById("step-title").textContent = copy[step];
    document.querySelector(".step-description").textContent = descriptions[step];
    document.getElementById("back-button").disabled = step === 0;
    document.getElementById("next-button").disabled = step === copy.length - 1;
    document.querySelectorAll("[data-min-step]").forEach((label) => { label.hidden = step < Number(label.dataset.minStep) || (label.dataset.maxStep && step > Number(label.dataset.maxStep)); });
    const active = motionSteps.has(step);
    playButton.disabled = !active;
    playButton.textContent = active ? (running ? "Pause" : paused ? "Resume" : "Play") : "Static";
    playButton.setAttribute("aria-label", active ? `${running ? "Pause" : paused ? "Resume" : "Play"} ${copy[step]} construction` : `${copy[step]} is a static construction step`);
    playButton.setAttribute("aria-pressed", running ? "true" : "false");
    app.dataset.stepMotion = active ? "active" : "static";
    app.dataset.stepIndex = String(step);
    app.dataset.animationState = running ? "running" : paused ? "paused" : "idle";
    app.dataset.animationProgress = progress.toFixed(4);
    if (renderedMathStep !== step) {
      renderMath(mathLines());
      renderedMathStep = step;
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
    frameTimer = setTimeout(() => deliver(performance.now()), 60);
  }

  function cancel() {
    cancelScheduledFrame();
    running = false;
    paused = false;
  }

  function move(next) {
    cancel();
    step = Math.max(0, Math.min(copy.length - 1, next));
    progress = 1;
    renderedMathStep = -1;
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
    if (reduced) { progress = 1; render(); return; }
    if (!paused || progress >= 1) progress = 0;
    paused = false;
    running = true;
    const longStep = (scene === "apollonius" && step === 6) || (scene === "mappings" && (step === 5 || step === 6));
    const duration = longStep ? 4600 : 2600;
    animationStart = performance.now() - progress * duration;
    const frame = (now) => {
      progress = Math.min(1, (now - animationStart) / duration);
      render();
      if (progress < 1) scheduleFrame(frame);
      else { running = false; paused = false; raf = 0; render(); }
    };
    scheduleFrame(frame);
  }

  tabs.forEach((button) => button.addEventListener("click", () => move(Number(button.dataset.step))));
  document.getElementById("back-button").addEventListener("click", () => move(step - 1));
  document.getElementById("next-button").addEventListener("click", () => move(step + 1));
  document.getElementById("reset-button").addEventListener("click", () => move(0));
  playButton.addEventListener("click", play);
  document.querySelectorAll("[data-layer-toggle]").forEach((control) => control.addEventListener("change", render));
  document.addEventListener("keydown", (event) => {
    if (["INPUT", "BUTTON", "SELECT", "SUMMARY"].includes(event.target.tagName)) return;
    if (event.key === "ArrowLeft") move(step - 1);
    if (event.key === "ArrowRight") move(step + 1);
    if (event.key.toLowerCase() === "r") move(0);
    if (event.key === " ") { event.preventDefault(); play(); }
  });
  render();
})(typeof globalThis !== "undefined" ? globalThis : this);
