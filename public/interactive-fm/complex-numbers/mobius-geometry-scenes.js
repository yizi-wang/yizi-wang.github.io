(function (root, factory) {
  "use strict";
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./loci-runtime.js"));
  } else {
    const api = factory(root.LociRuntime);
    root.MobiusGeometryRuntime = api;
    api.mount();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (L) {
  "use strict";

  const TAU = 2 * Math.PI;
  const complex = (re, im = 0) => ({ re, im });
  const clamp = (value, lower = 0, upper = 1) => Math.max(lower, Math.min(upper, value));
  const close = (a, b, tolerance = 1e-9) => Math.abs(a - b) <= tolerance;
  const dot = (z, w) => z.re * w.re + z.im * w.im;
  const modulusSquared = (z) => dot(z, z);
  const normalise = (z) => {
    const length = Math.hypot(z.re, z.im);
    return complex(z.re / length, z.im / length);
  };

  const coefficients = Object.freeze({
    a: complex(1),
    b: complex(1),
    c: complex(1),
    d: complex(-1)
  });
  const pole = Object.freeze(complex(1));
  const infinityImage = Object.freeze(complex(1));

  const mobius = (z) => L.mobius(z, coefficients.a, coefficients.b, coefficients.c, coefficients.d);
  const mobiusDerivative = (z) => {
    const denominator = L.multiply(L.subtract(z, pole), L.subtract(z, pole));
    return L.divide(complex(-2), denominator);
  };

  const reflectAcrossLine = (point, linePoint, direction) => {
    const unit = normalise(direction);
    const relative = L.subtract(point, linePoint);
    const parallel = L.scale(unit, dot(relative, unit));
    const perpendicular = L.subtract(relative, parallel);
    return L.subtract(point, L.scale(perpendicular, 2));
  };

  const angleBetween = (first, second) => {
    const denominator = Math.sqrt(modulusSquared(first) * modulusSquared(second));
    return Math.acos(clamp(dot(first, second) / denominator, -1, 1));
  };

  const quarterTurn = (z) => complex(-z.im, z.re);

  const lineImageData = (linePoint, direction) => {
    const reflectedPole = reflectAcrossLine(pole, linePoint, direction);
    const centre = mobius(reflectedPole);
    if (centre === null) return { kind: "line", reflectedPole, centre: null, radius: null };
    const sample = mobius(linePoint);
    return {
      kind: "circle",
      reflectedPole,
      centre,
      radius: L.distance(centre, sample)
    };
  };

  const rightAngleData = () => {
    const intersection = complex(-1, 1);
    const first = complex(1, 0);
    const second = complex(0, 1);
    const derivative = mobiusDerivative(intersection);
    const imageFirst = L.multiply(derivative, first);
    const imageSecond = L.multiply(derivative, second);
    return Object.freeze({
      intersection,
      imageIntersection: mobius(intersection),
      derivative,
      first,
      second,
      imageFirst,
      imageSecond,
      sourceAngle: angleBetween(first, second),
      imageAngle: angleBetween(imageFirst, imageSecond)
    });
  };

  const reflectionProofData = (height = 2) => {
    if (Math.abs(height) < 1e-9) throw new Error("The proof point must not coincide with the reflection foot.");
    const lineDirection = complex(0, 1);
    const reflectedPole = complex(-3);
    const point = complex(-1, height);
    const auxiliaryCentre = complex(-1, (height * height - 4) / (2 * height));
    const auxiliaryRadius = L.distance(auxiliaryCentre, pole);
    const sourceRadius = L.subtract(point, auxiliaryCentre);
    const auxiliaryTangent = quarterTurn(sourceRadius);
    const imagePoint = mobius(point);
    const imageCentre = mobius(reflectedPole);
    const imageNormal = L.subtract(imagePoint, imageCentre);
    const imageTangent = quarterTurn(imageNormal);
    return Object.freeze({
      lineDirection,
      reflectedPole,
      point,
      auxiliaryCentre,
      auxiliaryRadius,
      auxiliaryTangent,
      imagePoint,
      imageCentre,
      imageNormal,
      imageTangent,
      sourceAngle: angleBetween(lineDirection, auxiliaryTangent),
      imageAngle: angleBetween(imageNormal, imageTangent)
    });
  };

  const circleDiameterData = (angle = 0) => {
    const sourceCentre = complex(0);
    const sourceRadius = 2;
    const direction = complex(Math.cos(angle), Math.sin(angle));
    const first = L.scale(direction, -sourceRadius);
    const second = L.scale(direction, sourceRadius);
    const imageFirst = mobius(first);
    const imageSecond = mobius(second);
    const imageCentre = complex(5 / 3);
    const imageRadius = 4 / 3;
    const imageTrace = lineImageData(sourceCentre, direction);
    const chordMidpoint = L.scale(L.add(imageFirst, imageSecond), 0.5);
    const chordDirection = L.subtract(imageSecond, imageFirst);
    const imageRadiusDirection = L.subtract(imageSecond, imageCentre);
    return Object.freeze({
      angle,
      sourceCentre,
      sourceRadius,
      direction,
      first,
      second,
      imageFirst,
      imageSecond,
      imageCentre,
      imageRadius,
      imageTrace,
      chordMidpoint,
      midpointError: L.distance(chordMidpoint, imageCentre),
      linePoleDistance: Math.abs(direction.re * pole.im - direction.im * pole.re),
      imageChordAngle: angleBetween(chordDirection, imageRadiusDirection)
    });
  };

  function mount() {
    if (typeof document === "undefined") return;
    const app = document.querySelector(".mobius-toolkit-app");
    if (!app) return;

    const stage = document.getElementById("geometry-stage");
    const tabs = [...document.querySelectorAll(".step-tab")];
    const playButton = document.getElementById("play-button");
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");
    const resetButton = document.getElementById("reset-button");
    const layerInputs = [...document.querySelectorAll("[data-layer-toggle]")];
    const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const stepMotion = new Set([1, 2, 3, 4]);
    const durations = [0, 5200, 4300, 6400, 5600];
    const planes = Object.freeze({
      source: { cx: 250, cy: 345, clip: "mobius-source-clip" },
      image: { cx: 750, cy: 345, clip: "mobius-image-clip" }
    });
    const plotScale = 48;

    const copy = [
      {
        title: "Locate the two exceptional addresses",
        kicker: "Start every mapping question with the pole and infinity.",
        description: "The denominator locates the pole; the ratio of leading coefficients locates the image of infinity.",
        maths: [
          "f(z)=\\frac{z+1}{z-1}",
          "p=1,\\qquad f(p)=\\infty",
          "f(\\infty)=1"
        ],
        cue: "Ask for the pole and the image of infinity before students manipulate an equation."
      },
      {
        title: "Decide whether the image is a line or a circle",
        kicker: "The only test is whether the source locus contains the pole.",
        description: "A moving source line produces expanding image circles. At the pole, the image closes through infinity and becomes a line.",
        maths: [
          "p\\in\\Gamma\\Longrightarrow f(\\Gamma)\\text{ is a line}",
          "p\\notin\\Gamma\\Longrightarrow f(\\Gamma)\\text{ is a circle}",
          "\\infty\\in f(\\Gamma)\\Longleftrightarrow p\\in\\Gamma"
        ],
        cue: "Pause on the central plateau. The image is not a failed circle; it is a circle through infinity."
      },
      {
        title: "Carry a right angle through the map",
        kicker: "Both tangent directions receive the same local multiplier.",
        description: "Two perpendicular lines become two complete circles, but their tangents still meet at a right angle.",
        maths: [
          "dw=f'(z_0)\\,dz",
          "f'(z_0)\\ne0",
          "90^\\circ\\longmapsto90^\\circ"
        ],
        cue: "Pause halfway. Ask what may change—length, direction or angle—and separate the three answers."
      },
      {
        title: "Prove the reflected pole becomes the centre",
        kicker: "The shortcut follows from the previous two properties.",
        description: "First carry ∞ on L to f(∞) on C. Then move pₜ from p to p* while f(pₜ) enters from infinity and reaches f(p*). Paired traces reveal the common image centre.",
        maths: [
          "\\infty\\in L\\quad\\longmapsto\\quad f(\\infty)\\in C",
          "p^*=\\operatorname{refl}_L(p),\\qquad p,p^*,z\\in\\Gamma_z\\perp L",
          "f(\\Gamma_z)\\perp C,\\ f(p^*)\\in f(\\Gamma_z)\\Longrightarrow f(p^*)=\\operatorname{centre}(C)"
        ],
        cue: "Pause after each paired trace. Ask what remains fixed on the source plane and what remains fixed on the image plane."
      },
      {
        title: "Turn a source diameter into an image diameter",
        kicker: "Use the unique source diameter that also passes through the pole.",
        description: "A rotating source diameter maps to a circular arc meeting C′ at right angles. When its supporting line reaches the pole, that arc flattens into a line through the centre.",
        maths: [
          "p\\notin D_\\theta\\Longrightarrow f(D_\\theta)\\text{ is a circle}",
          "p\\in D_0\\Longrightarrow f(D_0)\\text{ is a line}",
          "w_1=\\frac13,\\quad w_2=3,\\quad \\frac{w_1+w_2}{2}=\\frac53=C'"
        ],
        cue: "Pause before alignment. The curved image is still perpendicular to C′; only the pole makes it flatten into the diameter line."
      }
    ];

    let step = 0;
    let progress = 1;
    let animationState = "idle";
    let animationFrame = null;
    let animationStart = 0;
    let animationStartProgress = 0;
    let animationDuration = 0;

    const layer = (name) => {
      const input = layerInputs.find((item) => item.dataset.layerToggle === name);
      return Boolean(input && input.checked && !input.closest("label")?.hidden);
    };
    const number = (value) => Number(value.toFixed(3));
    const plotAtScale = (z, planeName, scale = plotScale) => ({
      x: planes[planeName].cx + scale * z.re,
      y: planes[planeName].cy - scale * z.im
    });
    const plot = (z, planeName) => plotAtScale(z, planeName);
    const pathFromPoints = (points, closePath = false) => {
      if (!points.length) return "";
      const commands = points.map((point, index) => `${index ? "L" : "M"} ${number(point.x)} ${number(point.y)}`);
      return `${commands.join(" ")}${closePath ? " Z" : ""}`;
    };
    const sampleLine = (point, direction, lower, upper, count = 121) => Array.from({ length: count }, (_, index) => {
      const parameter = lower + (upper - lower) * index / (count - 1);
      return L.add(point, L.scale(direction, parameter));
    });
    const sampleCircle = (centre, radius, lower, upper, count = 145) => Array.from({ length: count }, (_, index) => (
      L.pointOnCircle(centre, radius, lower + (upper - lower) * index / (count - 1))
    ));
    const mappedSegments = (sourcePoints) => {
      const segments = [];
      let current = [];
      let previous = null;
      sourcePoints.forEach((sourcePoint) => {
        const imagePoint = mobius(sourcePoint);
        if (imagePoint === null || Math.abs(imagePoint.re) > 24 || Math.abs(imagePoint.im) > 24) {
          if (current.length > 1) segments.push(current);
          current = [];
          previous = null;
          return;
        }
        const screen = plot(imagePoint, "image");
        if (previous && Math.hypot(screen.x - previous.x, screen.y - previous.y) > 180) {
          if (current.length > 1) segments.push(current);
          current = [];
        }
        current.push(screen);
        previous = screen;
      });
      if (current.length > 1) segments.push(current);
      return segments;
    };
    const mappedPaths = (sourcePoints, className, role) => mappedSegments(sourcePoints).map((segment, index) => (
      `<path class="${className}" data-locus-role="${role}" data-branch="${index}" d="${pathFromPoints(segment)}"/>`
    )).join("");

    const defs = () => `
      <defs>
        <clipPath id="mobius-source-clip"><rect x="52" y="128" width="396" height="434" rx="4"/></clipPath>
        <clipPath id="mobius-image-clip"><rect x="552" y="128" width="396" height="434" rx="4"/></clipPath>
        <marker id="mobius-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 Z"/>
        </marker>
      </defs>`;

    const planeMarkup = (planeName, title, variable, scale = plotScale) => {
      const model = planes[planeName];
      const grid = [];
      for (let value = -3; value <= 3; value += 1) {
        const vertical = plotAtScale(complex(value, 0), planeName, scale);
        const horizontal = plotAtScale(complex(0, value), planeName, scale);
        if (vertical.x >= model.cx - 176 && vertical.x <= model.cx + 176) {
          grid.push(`<line x1="${number(vertical.x)}" y1="152" x2="${number(vertical.x)}" y2="548"/>`);
        }
        if (horizontal.y >= 152 && horizontal.y <= 548) {
          grid.push(`<line x1="${number(model.cx - 176)}" y1="${number(horizontal.y)}" x2="${number(model.cx + 176)}" y2="${number(horizontal.y)}"/>`);
        }
      }
      return `
        <g class="mobius-plane" data-plane="${planeName}">
          <text class="mobius-plane-title" x="${model.cx}" y="82" text-anchor="middle">${title}</text>
          <rect class="mobius-plane-field" x="${model.cx - 198}" y="128" width="396" height="434" rx="4"/>
          <g class="mobius-plane-grid">${grid.join("")}</g>
          <line class="mobius-axis" x1="${model.cx - 190}" y1="${model.cy}" x2="${model.cx + 190}" y2="${model.cy}" marker-end="url(#mobius-arrow)"/>
          <line class="mobius-axis" x1="${model.cx}" y1="542" x2="${model.cx}" y2="140" marker-end="url(#mobius-arrow)"/>
          <text class="mobius-axis-label" x="${model.cx + 176}" y="${model.cy - 12}">Re ${variable}</text>
          <text class="mobius-axis-label" x="${model.cx + 12}" y="158">Im ${variable}</text>
        </g>`;
    };

    const baseMarkup = (imageScale = plotScale) => `
      ${defs()}
      ${planeMarkup("source", "SOURCE z-PLANE", "z")}
      ${planeMarkup("image", "IMAGE w-PLANE", "w", imageScale)}
      <g class="mobius-map-bridge">
        <line x1="466" y1="345" x2="534" y2="345" marker-end="url(#mobius-arrow)"/>
        <text x="500" y="322" text-anchor="middle">f</text>
      </g>`;

    const pointMarkup = (value, planeName, className, label, role, dx = 12, dy = -12) => {
      const screen = plot(value, planeName);
      return `
        <g class="${className}" data-point-role="${role}">
          <circle cx="${number(screen.x)}" cy="${number(screen.y)}" r="7"/>
          <text x="${number(screen.x + dx)}" y="${number(screen.y + dy)}">${label}</text>
        </g>`;
    };

    const linkMarkup = (sourcePoint, imagePoint, label = "") => {
      if (!layer("sample-links") || imagePoint === null) return "";
      const sourceScreen = plot(sourcePoint, "source");
      const imageScreen = plot(imagePoint, "image");
      return `
        <g class="mobius-sample-link">
          <line x1="${number(sourceScreen.x)}" y1="${number(sourceScreen.y)}" x2="${number(imageScreen.x)}" y2="${number(imageScreen.y)}" marker-end="url(#mobius-arrow)"/>
          ${label ? `<text x="500" y="${number((sourceScreen.y + imageScreen.y) / 2 - 8)}" text-anchor="middle">${label}</text>` : ""}
        </g>`;
    };

    const stepZeroMarkup = () => {
      const poleScreen = plot(pole, "source");
      const imageScreen = plot(infinityImage, "image");
      return `${baseMarkup()}
        <g data-motion-role="mobius-special-points" data-pole="1,0" data-infinity-image="1,0">
          ${layer("pole-construction") ? `
            <path class="mobius-exception-arrow" d="M ${number(poleScreen.x)} ${number(poleScreen.y)} C 430 178, 570 178, 720 166" marker-end="url(#mobius-arrow)"/>
            <path class="mobius-exception-arrow is-secondary" d="M 280 520 C 430 598, 570 598, ${number(imageScreen.x)} ${number(imageScreen.y + 10)}" marker-end="url(#mobius-arrow)"/>
            <g class="mobius-infinity-badge" transform="translate(714 142)"><rect width="72" height="40" rx="20"/><text x="36" y="28" text-anchor="middle">∞</text></g>
            <g class="mobius-infinity-badge is-source" transform="translate(244 500)"><rect width="72" height="40" rx="20"/><text x="36" y="28" text-anchor="middle">∞</text></g>` : ""}
          ${layer("labels") ? `
            ${pointMarkup(pole, "source", "mobius-pole-point", "p = 1", "pole")}
            ${pointMarkup(infinityImage, "image", "mobius-image-point", "q = 1", "infinity-image", 12, 24)}
            <text class="mobius-stage-claim" x="500" y="112" text-anchor="middle">p maps to infinity · infinity maps to q</text>` : ""}
        </g>`;
    };

    const rightAngleSquare = (origin, first, second, planeName, size = 0.34, projector = (value) => plot(value, planeName)) => {
      const a = projector(L.add(origin, L.scale(normalise(first), size)));
      const b = projector(L.add(L.add(origin, L.scale(normalise(first), size)), L.scale(normalise(second), size)));
      const c = projector(L.add(origin, L.scale(normalise(second), size)));
      return `<path class="mobius-right-angle" d="M ${number(a.x)} ${number(a.y)} L ${number(b.x)} ${number(b.y)} L ${number(c.x)} ${number(c.y)}"/>`;
    };

    const stepOneMarkup = () => {
      const model = rightAngleData();
      const locusProgress = clamp(progress / 0.9);
      const angleProgress = clamp((progress - 0.92) / 0.08);
      const angleVisible = angleProgress > 0;
      const rayExtent = 0.02 + 120 * locusProgress ** 6;
      const ray = (direction, sign) => Array.from({ length: 241 }, (_, index) => {
        const parameter = sign * rayExtent * (index / 240) ** 2;
        return L.add(model.intersection, L.scale(direction, parameter));
      });
      const rayMarkup = (sourcePoints, className, sourceRole, imageRole) => {
        const sourceScreen = sourcePoints.map((item) => plot(item, "source"));
        const imageScreen = sourcePoints.map(mobius).filter(Boolean).map((item) => plot(item, "image"));
        if (locusProgress >= 1) imageScreen.push(plot(infinityImage, "image"));
        return {
          source: `<path class="mobius-source-locus ${className}" data-locus-role="${sourceRole}" d="${pathFromPoints(sourceScreen)}"/>`,
          image: `<path class="mobius-image-locus ${className}" data-locus-role="${imageRole}" d="${pathFromPoints(imageScreen)}"/>`
        };
      };
      const horizontalPositive = rayMarkup(ray(model.first, 1), "mobius-correspondence-one", "source-horizontal-positive", "image-horizontal-positive");
      const horizontalNegative = rayMarkup(ray(model.first, -1), "mobius-correspondence-one", "source-horizontal-negative", "image-horizontal-negative");
      const verticalPositive = rayMarkup(ray(model.second, 1), "mobius-correspondence-two", "source-vertical-positive", "image-vertical-positive");
      const verticalNegative = rayMarkup(ray(model.second, -1), "mobius-correspondence-two", "source-vertical-negative", "image-vertical-negative");
      const sourcePoint = plot(model.intersection, "source");
      const imagePoint = plot(model.imageIntersection, "image");
      const imageFirstEnd = plot(L.add(model.imageIntersection, L.scale(normalise(model.imageFirst), 0.8)), "image");
      const imageSecondEnd = plot(L.add(model.imageIntersection, L.scale(normalise(model.imageSecond), 0.8)), "image");
      return `${baseMarkup()}
        <g data-motion-role="conformal-right-angle" data-step-progress="${progress.toFixed(4)}" data-locus-progress="${locusProgress.toFixed(4)}" data-angle-progress="${angleProgress.toFixed(4)}" data-angle-visible="${angleVisible}" data-rays-start-at-intersections="true" data-source-angle="${number(model.sourceAngle * 180 / Math.PI)}" data-image-angle="${number(model.imageAngle * 180 / Math.PI)}" data-image-branch-count="4" data-image-circles-complete="${progress >= 1}">
          ${layer("loci") ? `
            <g clip-path="url(#mobius-source-clip)">
              ${horizontalPositive.source}
              ${horizontalNegative.source}
              ${verticalPositive.source}
              ${verticalNegative.source}
            </g>
            <g clip-path="url(#mobius-image-clip)">
              ${horizontalPositive.image}
              ${horizontalNegative.image}
              ${verticalPositive.image}
              ${verticalNegative.image}
            </g>` : ""}
          <g class="mobius-angle-intersection-point" data-point-role="source-angle-intersection">
            <circle cx="${number(sourcePoint.x)}" cy="${number(sourcePoint.y)}" r="7"/>
            ${layer("labels") ? `<text x="${number(sourcePoint.x - 34)}" y="${number(sourcePoint.y + 28)}">z₀</text>` : ""}
          </g>
          <g class="mobius-angle-intersection-point" data-point-role="image-angle-intersection">
            <circle cx="${number(imagePoint.x)}" cy="${number(imagePoint.y)}" r="7"/>
            ${layer("labels") ? `<text x="${number(imagePoint.x - 34)}" y="${number(imagePoint.y + 30)}">w₀</text>` : ""}
          </g>
          ${layer("angle-guides") && angleVisible ? `
            <g class="mobius-final-angle-guides" style="opacity:${number(angleProgress)}">
              ${rightAngleSquare(model.intersection, model.first, model.second, "source")}
              ${rightAngleSquare(model.imageIntersection, model.imageFirst, model.imageSecond, "image")}
              <line class="mobius-tangent-guide mobius-correspondence-one" x1="${number(imagePoint.x)}" y1="${number(imagePoint.y)}" x2="${number(imageFirstEnd.x)}" y2="${number(imageFirstEnd.y)}"/>
              <line class="mobius-tangent-guide mobius-correspondence-two" x1="${number(imagePoint.x)}" y1="${number(imagePoint.y)}" x2="${number(imageSecondEnd.x)}" y2="${number(imageSecondEnd.y)}"/>
              ${layer("labels") ? `
                <text class="mobius-angle-label" x="${number(sourcePoint.x + 28)}" y="${number(sourcePoint.y - 28)}">90°</text>
                <text class="mobius-angle-label" x="${number(imagePoint.x + 30)}" y="${number(imagePoint.y - 28)}">90°</text>` : ""}
            </g>` : ""}
          ${linkMarkup(model.intersection, model.imageIntersection, "z₀ ↦ w₀")}
        </g>`;
    };

    const classifierOffset = (value) => {
      if (value < 0.44) return -1 + 1.94 * value / 0.44;
      if (value <= 0.56) return 1;
      return 1.06 + 0.94 * (value - 0.56) / 0.44;
    };

    const stepTwoMarkup = () => {
      const offset = classifierOffset(progress);
      const containsPole = close(offset, 1, 1e-6);
      const sourceTop = plot(complex(offset, 3.4), "source");
      const sourceBottom = plot(complex(offset, -3.4), "source");
      let imageLocus = "";
      let kind = "circle";
      let centre = null;
      let radius = null;
      if (containsPole) {
        kind = "line";
        const lineTop = plot(complex(1, 3.5), "image");
        const lineBottom = plot(complex(1, -3.5), "image");
        imageLocus = `<line class="mobius-image-locus is-limit-line" data-locus-role="image-line" x1="${number(lineTop.x)}" y1="${number(lineTop.y)}" x2="${number(lineBottom.x)}" y2="${number(lineBottom.y)}"/>`;
      } else {
        centre = complex(offset / (offset - 1), 0);
        radius = Math.abs(1 / (offset - 1));
        const centreScreen = plot(centre, "image");
        imageLocus = `<circle class="mobius-image-locus" data-locus-role="image-circle" cx="${number(centreScreen.x)}" cy="${number(centreScreen.y)}" r="${number(radius * plotScale)}"/>`;
      }
      const sampleSource = complex(offset, 1.7);
      const sampleImage = mobius(sampleSource);
      return `${baseMarkup()}
        <g data-motion-role="generalised-circle-classifier" data-step-progress="${progress.toFixed(4)}" data-line-offset="${offset.toFixed(4)}" data-contains-pole="${containsPole}" data-image-kind="${kind}" data-image-centre="${centre ? centre.re.toFixed(6) : ""}" data-image-radius="${radius === null ? "" : radius.toFixed(6)}">
          ${layer("loci") ? `
            <g clip-path="url(#mobius-source-clip)"><line class="mobius-source-locus classifier-line" x1="${number(sourceTop.x)}" y1="${number(sourceTop.y)}" x2="${number(sourceBottom.x)}" y2="${number(sourceBottom.y)}"/></g>
            <g clip-path="url(#mobius-image-clip)">${imageLocus}</g>` : ""}
          ${layer("pole-construction") ? pointMarkup(pole, "source", "mobius-pole-point", "pole p", "classifier-pole", 12, 24) : ""}
          ${layer("labels") ? `
            <text class="mobius-locus-label" x="${number(sourceTop.x + 12)}" y="176">x = ${offset.toFixed(2)}</text>
            <g class="mobius-kind-readout ${containsPole ? "is-line" : ""}" transform="translate(610 486)">
              <rect width="280" height="58" rx="8"/>
              <text x="140" y="25" text-anchor="middle">${containsPole ? "CONTAINS THE POLE" : "AVOIDS THE POLE"}</text>
              <text x="140" y="45" text-anchor="middle">${containsPole ? "IMAGE: LINE THROUGH ∞" : "IMAGE: CIRCLE"}</text>
            </g>` : ""}
          ${linkMarkup(sampleSource, sampleImage)}
        </g>`;
    };

    const stepThreeMarkup = () => {
      const reflectedPole = complex(-3);
      const centre = complex(0.5);
      const foot = complex(-1);
      const reflectionProgress = clamp(progress / 0.22);
      const mappingVisible = progress >= 0.22;
      const proofProgress = clamp((progress - 0.36) / 0.64);
      const proofVisible = progress >= 0.36;
      const movingReflection = L.add(pole, L.scale(L.subtract(reflectedPole, pole), reflectionProgress));
      const model = reflectionProofData(0.9 + 1.8 * proofProgress);
      const poleScreen = plot(pole, "source");
      const reflectedScreen = plot(reflectedPole, "source");
      const movingScreen = plot(movingReflection, "source");
      const footScreen = plot(foot, "source");
      const firstTick = plot(complex(0), "source");
      const secondTick = plot(complex(-2), "source");
      const centreScreen = plot(centre, "image");
      const sourceTop = plot(complex(-1, 3.4), "source");
      const sourceBottom = plot(complex(-1, -3.4), "source");
      const imageCircleRadius = 0.5 * plotScale;
      const auxiliaryCentreScreen = plot(model.auxiliaryCentre, "source");
      const sourcePointScreen = plot(model.point, "source");
      const sourceTangentUnit = normalise(model.auxiliaryTangent);
      const sourceTangentStart = plot(L.add(model.point, L.scale(sourceTangentUnit, -0.7)), "source");
      const sourceTangentEnd = plot(L.add(model.point, L.scale(sourceTangentUnit, 0.7)), "source");
      const imageNormalUnit = normalise(model.imageNormal);
      const imageTangentUnit = normalise(model.imageTangent);
      const normalStart = plot(L.add(model.imageCentre, L.scale(imageNormalUnit, -3.6)), "image");
      const normalEnd = plot(L.add(model.imageCentre, L.scale(imageNormalUnit, 3.6)), "image");
      const tangentStart = plot(L.add(model.imagePoint, L.scale(imageTangentUnit, -0.72)), "image");
      const tangentEnd = plot(L.add(model.imagePoint, L.scale(imageTangentUnit, 0.72)), "image");
      const historySpecs = [
        { height: 1.1, threshold: 0.48 },
        { height: 1.65, threshold: 0.67 },
        { height: 2.2, threshold: 0.84 }
      ];
      const visibleHistory = historySpecs.filter((item) => proofProgress >= item.threshold);
      const sourceHistory = visibleHistory.map((item, index) => {
        const previous = reflectionProofData(item.height);
        const previousCentre = plot(previous.auxiliaryCentre, "source");
        const previousPoint = plot(previous.point, "source");
        return `
          <circle class="mobius-auxiliary-circle-history" data-proof-pair="${index}" cx="${number(previousCentre.x)}" cy="${number(previousCentre.y)}" r="${number(previous.auxiliaryRadius * plotScale)}"/>
          <circle class="mobius-proof-point-history" cx="${number(previousPoint.x)}" cy="${number(previousPoint.y)}" r="4"/>`;
      }).join("");
      const imageHistory = visibleHistory.map((item, index) => {
        const previous = reflectionProofData(item.height);
        const unit = normalise(previous.imageNormal);
        const start = plot(L.add(previous.imageCentre, L.scale(unit, -3.6)), "image");
        const end = plot(L.add(previous.imageCentre, L.scale(unit, 3.6)), "image");
        const point = plot(previous.imagePoint, "image");
        return `
          <line class="mobius-proof-normal-history" data-proof-pair="${index}" x1="${number(start.x)}" y1="${number(start.y)}" x2="${number(end.x)}" y2="${number(end.y)}"/>
          <circle class="mobius-proof-point-history is-image" cx="${number(point.x)}" cy="${number(point.y)}" r="4"/>`;
      }).join("");
      const phase = progress < 0.22 ? "reflect-pole" : progress < 0.36 ? "map-fixed-point" : "sweep-normal-family";
      const phaseClaim = phase === "reflect-pole"
        ? "1 · reflect p across L to p*"
        : phase === "map-fixed-point"
          ? "2 · map p* to the fixed point f(p*)"
          : "3 · Γz through p maps to a normal through f(p*)";
      return `${baseMarkup()}
        <g data-motion-role="line-circle-reflection-shortcut" data-step-progress="${progress.toFixed(4)}" data-proof-phase="${phase}" data-reflection-settled="${reflectionProgress >= 1}" data-reflected-pole="-3,0" data-image-centre="0.5,0" data-image-radius="0.5" data-proof-height="${model.point.im.toFixed(6)}" data-auxiliary-centre="${model.auxiliaryCentre.re.toFixed(6)},${model.auxiliaryCentre.im.toFixed(6)}" data-auxiliary-radius="${model.auxiliaryRadius.toFixed(6)}" data-auxiliary-through="p,p*,z" data-source-angle="${number(model.sourceAngle * 180 / Math.PI)}" data-image-angle="${number(model.imageAngle * 180 / Math.PI)}" data-normal-through-centre="true" data-visible-normal-count="${proofVisible ? visibleHistory.length + 1 : 0}">
          ${layer("loci") ? `
            <line class="mobius-source-locus" data-locus-role="reflection-source-line" x1="${number(sourceTop.x)}" y1="${number(sourceTop.y)}" x2="${number(sourceBottom.x)}" y2="${number(sourceBottom.y)}"/>
            ${mappingVisible ? `<circle class="mobius-image-locus" data-locus-role="constructed-image-circle" cx="${number(centreScreen.x)}" cy="${number(centreScreen.y)}" r="${number(imageCircleRadius)}"/>` : ""}
            ${proofVisible ? `
              <g clip-path="url(#mobius-source-clip)">
                ${layer("angle-guides") ? sourceHistory : ""}
                <circle class="mobius-auxiliary-circle" data-locus-role="source-proof-circle" cx="${number(auxiliaryCentreScreen.x)}" cy="${number(auxiliaryCentreScreen.y)}" r="${number(model.auxiliaryRadius * plotScale)}"/>
              </g>
              <g clip-path="url(#mobius-image-clip)">
                ${layer("angle-guides") ? imageHistory : ""}
                <line class="mobius-proof-normal" data-locus-role="image-proof-line" x1="${number(normalStart.x)}" y1="${number(normalStart.y)}" x2="${number(normalEnd.x)}" y2="${number(normalEnd.y)}"/>
              </g>` : ""}` : ""}
          <g data-proof-role="reflection-backbone">
            <line class="mobius-reflection-line" x1="${number(poleScreen.x)}" y1="${number(poleScreen.y)}" x2="${number(movingScreen.x)}" y2="${number(movingScreen.y)}"/>
            ${pointMarkup(pole, "source", "mobius-pole-point", "p", "line-pole", 10, -14)}
            ${reflectionProgress >= 1
              ? pointMarkup(reflectedPole, "source", "mobius-reflected-point", "p* = reflₗ(p)", "reflected-pole", -102, -14)
              : pointMarkup(movingReflection, "source", "mobius-reflected-point is-moving", "p*", "reflected-pole-moving", -28, -14)}
            ${reflectionProgress >= 1 ? `
              <path class="mobius-right-angle" d="M ${number(footScreen.x + 12)} ${number(footScreen.y)} L ${number(footScreen.x + 12)} ${number(footScreen.y - 12)} L ${number(footScreen.x)} ${number(footScreen.y - 12)}"/>
              <line class="mobius-reflection-tick" x1="${number(firstTick.x)}" y1="${number(firstTick.y - 9)}" x2="${number(firstTick.x)}" y2="${number(firstTick.y + 9)}"/>
              <line class="mobius-reflection-tick" x1="${number(secondTick.x)}" y1="${number(secondTick.y - 9)}" x2="${number(secondTick.x)}" y2="${number(secondTick.y + 9)}"/>
              <text class="mobius-proof-label" x="${number(footScreen.x - 18)}" y="${number(footScreen.y + 28)}">H</text>` : ""}
          </g>
          ${mappingVisible ? `
            ${pointMarkup(centre, "image", "mobius-centre-point", "c = f(p*)", "image-centre", 12, -14)}` : ""}
          ${proofVisible ? `
            ${pointMarkup(model.point, "source", "mobius-sample-point", "z", "proof-source-point", 10, -14)}
            ${pointMarkup(model.imagePoint, "image", "mobius-image-point", "f(z)", "proof-image-point", -54, 26)}
            <line class="mobius-proof-tangent" x1="${number(sourceTangentStart.x)}" y1="${number(sourceTangentStart.y)}" x2="${number(sourceTangentEnd.x)}" y2="${number(sourceTangentEnd.y)}"/>
            ${rightAngleSquare(model.point, model.lineDirection, model.auxiliaryTangent, "source", 0.22)}
            <line class="mobius-proof-tangent" x1="${number(tangentStart.x)}" y1="${number(tangentStart.y)}" x2="${number(tangentEnd.x)}" y2="${number(tangentEnd.y)}"/>
            ${rightAngleSquare(model.imagePoint, model.imageNormal, model.imageTangent, "image", 0.18)}
            ${layer("pole-construction") ? `
              <line class="mobius-proof-radius" x1="${number(auxiliaryCentreScreen.x)}" y1="${number(auxiliaryCentreScreen.y)}" x2="${number(poleScreen.x)}" y2="${number(poleScreen.y)}"/>
              <line class="mobius-proof-radius" x1="${number(auxiliaryCentreScreen.x)}" y1="${number(auxiliaryCentreScreen.y)}" x2="${number(reflectedScreen.x)}" y2="${number(reflectedScreen.y)}"/>
              <line class="mobius-proof-radius" x1="${number(auxiliaryCentreScreen.x)}" y1="${number(auxiliaryCentreScreen.y)}" x2="${number(sourcePointScreen.x)}" y2="${number(sourcePointScreen.y)}"/>
              ${pointMarkup(model.auxiliaryCentre, "source", "mobius-source-centre-point", "OΓ on L", "proof-circle-centre", 10, 24)}` : ""}` : ""}
          ${layer("labels") ? `
            <text class="mobius-stage-claim" x="500" y="112" text-anchor="middle">${phaseClaim}</text>
            <text class="mobius-proof-label" x="${number(sourceTop.x + 14)}" y="176">L</text>
            ${mappingVisible ? `<text class="mobius-proof-label is-image" x="822" y="398">C = f(L)</text>` : ""}
            ${proofVisible ? `
              <text class="mobius-proof-label" x="${number(auxiliaryCentreScreen.x - 64)}" y="${number(sourcePointScreen.y - 34)}">Γz through p, p*, z</text>
              <text class="mobius-proof-label is-image" x="900" y="174" text-anchor="end">ℓz = f(Γz)</text>
              <text class="mobius-proof-label is-image" x="900" y="196" text-anchor="end">normal to C</text>` : ""}
            ${progress >= 0.96 ? `
              <g class="mobius-result-readout" transform="translate(608 484)">
                <rect width="284" height="60" rx="8"/>
                <text x="142" y="26" text-anchor="middle">EVERY ℓz PASSES THROUGH f(p*)</text>
                <text x="142" y="47" text-anchor="middle">THEREFORE f(p*) IS THE CENTRE</text>
              </g>` : ""}` : ""}
          ${mappingVisible ? linkMarkup(reflectedPole, centre, "p* ↦ f(p*)") : ""}
          ${proofVisible ? linkMarkup(model.point, model.imagePoint, "z ↦ f(z)") : ""}
        </g>`;
    };

    const stepThreeSynchronizedMarkup = () => {
      const reflectedPole = complex(-3);
      const imageCentre = complex(0.5);
      const foot = complex(-1);
      const proofImageScale = 84;
      const proofImagePlot = (value) => plotAtScale(value, "image", proofImageScale);
      const sourceTop = plot(complex(-1, 3.4), "source");
      const sourceBottom = plot(complex(-1, -3.4), "source");
      const poleScreen = plot(pole, "source");
      const reflectedScreen = plot(reflectedPole, "source");
      const footScreen = plot(foot, "source");
      const firstTick = plot(complex(0), "source");
      const secondTick = plot(complex(-2), "source");
      const imageCentreScreen = proofImagePlot(imageCentre);
      const infinityImageScreen = proofImagePlot(infinityImage);
      const infinityProgress = clamp(progress / 0.14);
      const reflectionProgress = clamp((progress - 0.14) / 0.16);
      const pairOneProgress = clamp((progress - 0.32) / 0.18);
      const pairTwoProgress = clamp((progress - 0.52) / 0.18);
      const motionProgress = clamp((progress - 0.74) / 0.26);
      const reflectionVisible = progress >= 0.14;
      const reflectionSettled = progress >= 0.3;
      const infinityMarkersVisible = progress < 0.32;
      const poleImageAtInfinityVisible = progress < 0.14 ||
        (reflectionVisible && reflectionProgress < 0.08);
      const pairOneVisible = progress >= 0.32;
      const pairTwoVisible = progress >= 0.52;
      const motionVisible = progress >= 0.74;
      const movingReflection = L.add(pole, L.scale(L.subtract(reflectedPole, pole), reflectionProgress));
      const movingReflectionScreen = plot(movingReflection, "source");
      const mappedMovingReflection = reflectionProgress > 1e-6 ? mobius(movingReflection) : null;
      const imageReflectionLeft = planes.image.cx - 176;
      const mappedMovingReflectionScreen = mappedMovingReflection
        ? proofImagePlot(mappedMovingReflection)
        : { x: imageReflectionLeft, y: planes.image.cy };
      const movingImageReflectionScreen = {
        x: clamp(mappedMovingReflectionScreen.x, imageReflectionLeft, planes.image.cx + 176),
        y: planes.image.cy
      };
      const imageReflectionClipped = mappedMovingReflection === null ||
        mappedMovingReflectionScreen.x < imageReflectionLeft;
      const phase = progress < 0.14
        ? "map-infinity"
        : progress < 0.32
          ? "reflect-pole"
          : progress < 0.52
            ? "trace-first-pair"
            : progress < 0.74
              ? "trace-second-pair"
              : "move-pair";
      const pairGeometry = (height) => {
        const data = reflectionProofData(height);
        const sourceCentre = plot(data.auxiliaryCentre, "source");
        const sourcePoint = plot(data.point, "source");
        const imagePoint = proofImagePlot(data.imagePoint);
        const unit = normalise(data.imageNormal);
        const normalStart = proofImagePlot(L.add(data.imageCentre, L.scale(unit, -2.2)));
        const normalEnd = proofImagePlot(L.add(data.imageCentre, L.scale(unit, 2.2)));
        return Object.freeze({
          data,
          sourceCentre,
          sourcePoint,
          imagePoint,
          normalStart,
          normalEnd
        });
      };
      const pairOne = pairGeometry(1.15);
      const pairTwo = pairGeometry(2.15);
      const movingPair = pairGeometry(0.85 + 1.95 * motionProgress);
      const point = (screen, className, role, label, dx = 10, dy = -14) => `
        <g class="${className}" data-point-role="${role}">
          <circle cx="${number(screen.x)}" cy="${number(screen.y)}" r="7"/>
          ${layer("labels") ? `<text x="${number(screen.x + dx)}" y="${number(screen.y + dy)}">${label}</text>` : ""}
        </g>`;
      const pairMarkup = (pair, index, drawProgress, history = false, activeLabel = "") => {
        const dash = number(1 - drawProgress);
        const historyClass = history ? " is-history" : "";
        const settledClass = drawProgress >= 0.999 ? " is-settled" : "";
        const pairClass = index === 1 ? " pair-one" : index === 2 ? " pair-two" : " pair-moving";
        const sourceLabel = index === "moving" ? "z" : activeLabel ? `z${activeLabel}` : "";
        const imageLabel = index === "moving" ? "f(z)" : activeLabel ? `f(z${activeLabel})` : "";
        return `
          <g data-proof-pair="${index}" data-pair-progress="${drawProgress.toFixed(4)}" data-pair-history="${history}">
            <g clip-path="url(#mobius-source-clip)">
              <circle class="mobius-proof-trace-circle${pairClass}${historyClass}${settledClass}" cx="${number(pair.sourceCentre.x)}" cy="${number(pair.sourceCentre.y)}" r="${number(pair.data.auxiliaryRadius * plotScale)}" pathLength="1" style="stroke-dashoffset:${dash}"/>
            </g>
            <g clip-path="url(#mobius-image-clip)">
              <line class="mobius-proof-trace-line${pairClass}${historyClass}${settledClass}" x1="${number(imageCentreScreen.x)}" y1="${number(imageCentreScreen.y)}" x2="${number(pair.normalStart.x)}" y2="${number(pair.normalStart.y)}" pathLength="1" style="stroke-dashoffset:${dash}"/>
              <line class="mobius-proof-trace-line${pairClass}${historyClass}${settledClass}" x1="${number(imageCentreScreen.x)}" y1="${number(imageCentreScreen.y)}" x2="${number(pair.normalEnd.x)}" y2="${number(pair.normalEnd.y)}" pathLength="1" style="stroke-dashoffset:${dash}"/>
            </g>
            ${point(pair.sourcePoint, `mobius-sample-point${pairClass}${historyClass}`, `proof-source-point-${index}`, sourceLabel, 10, -14)}
            ${point(pair.imagePoint, `mobius-image-point${pairClass}${historyClass}`, `proof-image-point-${index}`, imageLabel, -54, 26)}
          </g>`;
      };
      const activePair = motionVisible ? movingPair : pairTwoVisible ? pairTwo : pairOne;
      const activeDrawProgress = motionVisible ? 1 : pairTwoVisible ? pairTwoProgress : pairOneVisible ? pairOneProgress : 0;
      const activeLabel = motionVisible ? "" : pairTwoVisible ? "₂" : "₁";
      const visiblePairCount = Number(pairOneVisible) + Number(pairTwoVisible) + Number(motionVisible);
      const scaledLink = layer("sample-links") && pairOneVisible ? `
        <g class="mobius-sample-link">
          <line x1="${number(activePair.sourcePoint.x)}" y1="${number(activePair.sourcePoint.y)}" x2="${number(activePair.imagePoint.x)}" y2="${number(activePair.imagePoint.y)}" marker-end="url(#mobius-arrow)"/>
        </g>` : "";
      return `${baseMarkup(proofImageScale)}
        <g data-motion-role="line-circle-reflection-shortcut" data-step-progress="${progress.toFixed(4)}" data-proof-phase="${phase}" data-synchronised="true" data-infinity-progress="${infinityProgress.toFixed(4)}" data-reflection-progress="${reflectionProgress.toFixed(4)}" data-image-reflection-progress="${reflectionProgress.toFixed(4)}" data-image-reflection-clipped="${imageReflectionClipped}" data-pair-one-progress="${pairOneProgress.toFixed(4)}" data-pair-two-progress="${pairTwoProgress.toFixed(4)}" data-motion-progress="${motionProgress.toFixed(4)}" data-visible-pair-count="${visiblePairCount}" data-image-view-scale="${proofImageScale}" data-reflected-pole="-3,0" data-image-centre="0.5,0" data-image-radius="0.5" data-proof-height="${activePair.data.point.im.toFixed(6)}" data-auxiliary-centre="${activePair.data.auxiliaryCentre.re.toFixed(6)},${activePair.data.auxiliaryCentre.im.toFixed(6)}" data-auxiliary-radius="${activePair.data.auxiliaryRadius.toFixed(6)}" data-auxiliary-through="p,p*,z" data-source-angle="${number(activePair.data.sourceAngle * 180 / Math.PI)}" data-image-angle="${number(activePair.data.imageAngle * 180 / Math.PI)}" data-normal-through-centre="true" data-visible-normal-count="${visiblePairCount}">
          ${layer("loci") ? `
            <line class="mobius-source-locus mobius-infinity-trace" data-locus-role="reflection-source-line" x1="${number(sourceTop.x)}" y1="${number(sourceTop.y)}" x2="${number(sourceBottom.x)}" y2="${number(sourceBottom.y)}" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:${number(1 - infinityProgress)}"/>
            <circle class="mobius-image-locus mobius-proof-base-locus mobius-infinity-trace" data-locus-role="constructed-image-circle" cx="${number(imageCentreScreen.x)}" cy="${number(imageCentreScreen.y)}" r="${number(0.5 * proofImageScale)}" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:${number(1 - infinityProgress)}"/>
            ${pairOneVisible ? pairMarkup(pairOne, 1, pairOneProgress, pairTwoVisible || motionVisible, phase === "trace-first-pair" ? activeLabel : "") : ""}
            ${pairTwoVisible ? pairMarkup(pairTwo, 2, pairTwoProgress, motionVisible, phase === "trace-second-pair" ? activeLabel : "") : ""}
            ${motionVisible ? pairMarkup(movingPair, "moving", 1, false, "") : ""}` : ""}
          <g data-proof-role="reflection-backbone">
            ${point(poleScreen, "mobius-pole-point", "line-pole", "p", 10, -14)}
            ${infinityMarkersVisible ? `
              ${layer("labels") ? `
                <text class="mobius-infinity-label" x="${number(sourceTop.x + 12)}" y="${number(sourceTop.y + 8)}">∞</text>
                <text class="mobius-infinity-label is-image" x="${number(infinityImageScreen.x + 10)}" y="${number(infinityImageScreen.y - 12)}">f(∞)</text>` : ""}
              <circle class="mobius-infinity-point is-source" cx="${number(sourceTop.x)}" cy="${number(sourceTop.y)}" r="6"/>
              <circle class="mobius-infinity-point is-image" cx="${number(infinityImageScreen.x)}" cy="${number(infinityImageScreen.y)}" r="6"/>` : ""}
            ${poleImageAtInfinityVisible ? point(
              { x: imageReflectionLeft, y: planes.image.cy },
              "mobius-pole-image-point",
              "pole-image",
              "f(p)=∞",
              12,
              -14
            ) : ""}
            ${reflectionVisible ? `
              <line class="mobius-reflection-line" x1="${number(poleScreen.x)}" y1="${number(poleScreen.y)}" x2="${number(movingReflectionScreen.x)}" y2="${number(movingReflectionScreen.y)}"/>
              ${reflectionProgress >= 0.08
                ? point(movingReflectionScreen, "mobius-reflected-point is-moving", "reflected-pole", reflectionSettled ? "p*" : "", -28, -14)
                : ""}
              <g clip-path="url(#mobius-image-clip)" data-proof-role="mapped-reflection">
                <line class="mobius-image-reflection-line" x1="${number(imageReflectionLeft)}" y1="${number(planes.image.cy)}" x2="${number(movingImageReflectionScreen.x)}" y2="${number(movingImageReflectionScreen.y)}"/>
                ${reflectionProgress >= 0.08
                  ? point(
                    movingImageReflectionScreen,
                    "mobius-reflected-image-point is-moving",
                    "reflected-image",
                    reflectionSettled ? "f(p*)" : "",
                    -58,
                    30
                  )
                  : ""}
              </g>` : ""}
            ${layer("pole-construction") && reflectionSettled ? `
              <path class="mobius-right-angle" d="M ${number(footScreen.x + 12)} ${number(footScreen.y)} L ${number(footScreen.x + 12)} ${number(footScreen.y - 12)} L ${number(footScreen.x)} ${number(footScreen.y - 12)}"/>
              <line class="mobius-reflection-tick" x1="${number(firstTick.x)}" y1="${number(firstTick.y - 9)}" x2="${number(firstTick.x)}" y2="${number(firstTick.y + 9)}"/>
              <line class="mobius-reflection-tick" x1="${number(secondTick.x)}" y1="${number(secondTick.y - 9)}" x2="${number(secondTick.x)}" y2="${number(secondTick.y + 9)}"/>` : ""}
          </g>
          ${layer("angle-guides") && pairOneVisible && activeDrawProgress >= 0.94 ? `
            ${rightAngleSquare(activePair.data.point, activePair.data.lineDirection, activePair.data.auxiliaryTangent, "source", 0.22)}
            ${rightAngleSquare(activePair.data.imagePoint, activePair.data.imageNormal, activePair.data.imageTangent, "image", 0.18, proofImagePlot)}` : ""}
          ${layer("labels") ? `
            ${infinityProgress >= 0.2 ? `
              <text class="mobius-proof-label" x="${number(sourceTop.x + 14)}" y="176">L</text>
              <text class="mobius-proof-label is-image" x="${number(imageCentreScreen.x + 50)}" y="${number(imageCentreScreen.y + 58)}">C</text>` : ""}` : ""}
          ${scaledLink}
        </g>`;
    };

    const stepDiameterMarkup = () => {
      const angle = (1 - progress) * Math.PI / 3;
      const model = circleDiameterData(angle);
      const sourceCircle = sampleCircle(model.sourceCentre, model.sourceRadius, 0, TAU, 181).map((item) => plot(item, "source"));
      const sourceCentreScreen = plot(model.sourceCentre, "source");
      const sourceFirstScreen = plot(model.first, "source");
      const sourceSecondScreen = plot(model.second, "source");
      const sourceLineStart = plot(L.scale(model.direction, -3.55), "source");
      const sourceLineEnd = plot(L.scale(model.direction, 3.55), "source");
      const imageCentreScreen = plot(model.imageCentre, "image");
      const imageFirstScreen = plot(model.imageFirst, "image");
      const imageSecondScreen = plot(model.imageSecond, "image");
      const poleScreen = plot(pole, "source");
      const aligned = progress >= 0.999;
      const traceKind = model.imageTrace.kind;
      const imageTracePoints = traceKind === "circle"
        ? (() => {
          const firstAngle = Math.atan2(
            model.imageFirst.im - model.imageTrace.centre.im,
            model.imageFirst.re - model.imageTrace.centre.re
          );
          const secondAngle = Math.atan2(
            model.imageSecond.im - model.imageTrace.centre.im,
            model.imageSecond.re - model.imageTrace.centre.re
          );
          let turn = secondAngle - firstAngle;
          while (turn > Math.PI) turn -= TAU;
          while (turn < -Math.PI) turn += TAU;
          return Array.from({ length: 121 }, (_, index) => {
            const theta = firstAngle + turn * index / 120;
            return plot(
              L.pointOnCircle(model.imageTrace.centre, model.imageTrace.radius, theta),
              "image"
            );
          });
        })()
        : [imageFirstScreen, imageSecondScreen];
      const point = (screen, className, role, label, dx = 10, dy = -14) => `
        <g class="${className}" data-point-role="${role}">
          <circle cx="${number(screen.x)}" cy="${number(screen.y)}" r="7"/>
          ${layer("labels") ? `<text x="${number(screen.x + dx)}" y="${number(screen.y + dy)}">${label}</text>` : ""}
        </g>`;
      return `${baseMarkup()}
        <g data-motion-role="circle-to-circle-diameter" data-step-progress="${progress.toFixed(4)}" data-source-angle="${number(angle * 180 / Math.PI)}" data-passes-pole="${aligned}" data-line-pole-distance="${model.linePoleDistance.toFixed(6)}" data-midpoint-error="${model.midpointError.toFixed(6)}" data-image-trace-kind="${traceKind}" data-image-trace-centre="${traceKind === "circle" ? `${model.imageTrace.centre.re.toFixed(6)},${model.imageTrace.centre.im.toFixed(6)}` : "infinity"}" data-image-trace-radius="${traceKind === "circle" ? model.imageTrace.radius.toFixed(6) : "infinity"}" data-image-centre="1.666667,0" data-image-radius="1.333333" data-source-first="${model.first.re.toFixed(6)},${model.first.im.toFixed(6)}" data-source-second="${model.second.re.toFixed(6)},${model.second.im.toFixed(6)}" data-image-first="${model.imageFirst.re.toFixed(6)},${model.imageFirst.im.toFixed(6)}" data-image-second="${model.imageSecond.re.toFixed(6)},${model.imageSecond.im.toFixed(6)}">
          ${layer("loci") ? `
            <path class="mobius-source-locus mobius-diameter-base-circle" data-locus-role="diameter-source-circle" d="${pathFromPoints(sourceCircle, true)}"/>
            <line class="mobius-diameter-selector" data-locus-role="source-diameter-line" x1="${number(sourceLineStart.x)}" y1="${number(sourceLineStart.y)}" x2="${number(sourceLineEnd.x)}" y2="${number(sourceLineEnd.y)}"/>
            <circle class="mobius-image-locus mobius-diameter-base-circle" data-locus-role="diameter-image-circle" cx="${number(imageCentreScreen.x)}" cy="${number(imageCentreScreen.y)}" r="${number(model.imageRadius * plotScale)}"/>
            <path class="mobius-diameter-image-trace ${aligned ? "is-diameter" : "is-arc"}" data-locus-role="diameter-image-trace" d="${pathFromPoints(imageTracePoints)}"/>` : ""}
          ${layer("pole-construction") ? `
            ${point(poleScreen, "mobius-pole-point", "diameter-pole", "p", 10, -14)}
            ${point(sourceCentreScreen, "mobius-neutral-point", "source-circle-centre", "O", 10, 24)}
            ${point(sourceFirstScreen, "mobius-correspondence-a-point", "diameter-source-first", "z₁", -34, -14)}
            ${point(sourceSecondScreen, "mobius-correspondence-b-point", "diameter-source-second", "z₂", 10, -14)}
            ${point(imageFirstScreen, "mobius-correspondence-a-point", "diameter-image-first", "w₁", -32, 26)}
            ${point(imageSecondScreen, "mobius-correspondence-b-point", "diameter-image-second", "w₂", -38, -18)}
            ${aligned ? point(imageCentreScreen, "mobius-neutral-point", "diameter-image-centre", "C′", -12, -22) : ""}` : ""}
          ${linkMarkup(model.first, model.imageFirst, "z₁ ↦ w₁")}
          ${linkMarkup(model.second, model.imageSecond, "z₂ ↦ w₂")}
        </g>`;
    };

    const renderStage = () => {
      const markup = [
        stepZeroMarkup,
        stepTwoMarkup,
        stepOneMarkup,
        stepThreeSynchronizedMarkup,
        stepDiameterMarkup
      ][step]();
      stage.innerHTML = markup;
      stage.dataset.renderedStep = String(step);
      stage.dataset.renderedProgress = progress.toFixed(4);
    };

    const claims = [
      ["mobius-form", "pole-to-infinity", "infinity-image"],
      ["pole-membership-line", "pole-avoidance-circle", "generalised-circle-classifier"],
      ["local-linearisation", "nonzero-derivative", "conformal-right-angle"],
      ["source-line-reflection", "auxiliary-circle-to-normal", "reflected-pole-image-centre"],
      ["source-diameter-through-pole", "mapped-diameter-endpoints", "image-centre-radius-from-diameter"]
    ];

    const renderMath = () => {
      const current = copy[step];
      document.getElementById("step-title").textContent = current.title;
      document.querySelector(".step-kicker").textContent = current.kicker;
      document.querySelector(".step-description").textContent = current.description;
      document.getElementById("teacher-cue-text").textContent = current.cue;
      current.maths.forEach((math, index) => {
        const target = document.getElementById(`math-line-${index + 1}`);
        if (globalThis.katex) globalThis.katex.render(math, target, { throwOnError: false, displayMode: true });
        else target.textContent = math;
        target.dataset.claim = claims[step][index];
      });
    };

    const syncControls = () => {
      const active = stepMotion.has(step);
      tabs.forEach((tab, index) => tab.setAttribute("aria-current", index === step ? "step" : "false"));
      document.getElementById("step-number").textContent = String(step + 1).padStart(2, "0");
      backButton.disabled = step === 0;
      nextButton.disabled = step === tabs.length - 1;
      layerInputs.forEach((input) => {
        const label = input.closest("label");
        const allowedSteps = label?.dataset.steps ? label.dataset.steps.split(",").map(Number) : null;
        if (label) label.hidden = allowedSteps ? !allowedSteps.includes(step) : false;
      });
      playButton.disabled = !active;
      playButton.setAttribute("aria-pressed", animationState === "running" ? "true" : "false");
      if (!active) {
        playButton.textContent = "Static";
        playButton.setAttribute("aria-label", "This is a static construction step");
      } else if (animationState === "running") {
        playButton.textContent = "Pause";
        playButton.setAttribute("aria-label", "Pause the current mathematical construction");
      } else if (animationState === "paused") {
        playButton.textContent = "Resume";
        playButton.setAttribute("aria-label", "Resume the current mathematical construction");
      } else {
        playButton.textContent = progress >= 1 ? "Replay" : "Play";
        playButton.setAttribute("aria-label", progress >= 1 ? "Replay the mathematical construction" : "Play the mathematical construction");
      }
      app.dataset.stepMotion = active ? "active" : "static";
      app.dataset.animationState = animationState;
      app.dataset.animationProgress = progress.toFixed(4);
      renderMath();
      renderStage();
    };

    const stopAnimation = (paused = false) => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
      animationFrame = null;
      animationState = paused ? "paused" : "idle";
    };

    const animationTick = (time) => {
      const elapsed = time - animationStart;
      const remaining = 1 - animationStartProgress;
      progress = clamp(animationStartProgress + remaining * elapsed / animationDuration);
      app.dataset.animationProgress = progress.toFixed(4);
      renderStage();
      if (progress >= 1) {
        stopAnimation(false);
        syncControls();
        return;
      }
      animationFrame = requestAnimationFrame(animationTick);
    };

    const play = () => {
      if (!stepMotion.has(step)) return;
      if (animationState === "running") {
        stopAnimation(true);
        syncControls();
        return;
      }
      if (progress >= 1) progress = 0;
      if (prefersReducedMotion.matches) {
        progress = 1;
        animationState = "idle";
        syncControls();
        return;
      }
      animationState = "running";
      animationStartProgress = progress;
      animationDuration = Math.max(160, durations[step] * (1 - progress));
      animationStart = performance.now();
      syncControls();
      animationFrame = requestAnimationFrame(animationTick);
    };

    const chooseStep = (nextStep) => {
      stopAnimation(false);
      step = clamp(nextStep, 0, tabs.length - 1);
      progress = stepMotion.has(step) ? 0 : 1;
      syncControls();
    };

    const reset = () => {
      stopAnimation(false);
      step = 0;
      progress = 1;
      layerInputs.forEach((input) => {
        input.checked = input.dataset.layerToggle !== "sample-links";
      });
      syncControls();
    };

    tabs.forEach((tab) => tab.addEventListener("click", () => chooseStep(Number(tab.dataset.step))));
    playButton.addEventListener("click", play);
    backButton.addEventListener("click", () => chooseStep(step - 1));
    nextButton.addEventListener("click", () => chooseStep(step + 1));
    resetButton.addEventListener("click", reset);
    layerInputs.forEach((input) => input.addEventListener("change", renderStage));

    document.addEventListener("keydown", (event) => {
      if (/INPUT|SELECT|TEXTAREA/.test(event.target.tagName)) return;
      if (event.key === "ArrowRight") chooseStep(step + 1);
      else if (event.key === "ArrowLeft") chooseStep(step - 1);
      else if (event.key === " ") {
        event.preventDefault();
        play();
      } else if (event.key.toLowerCase() === "r") reset();
    });

    reset();
  }

  return Object.freeze({
    mobius,
    mobiusDerivative,
    reflectAcrossLine,
    angleBetween,
    lineImageData,
    rightAngleData,
    reflectionProofData,
    circleDiameterData,
    pole,
    infinityImage,
    mount,
    close
  });
});
