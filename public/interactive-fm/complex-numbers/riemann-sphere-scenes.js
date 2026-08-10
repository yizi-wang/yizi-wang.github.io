(function (root, factory) {
  "use strict";
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./loci-runtime.js"), require("../spatial-vectors/spatial-runtime.js"));
  } else {
    const api = factory(root.LociRuntime, root.SpatialRuntime);
    root.RiemannSphereRuntime = api;
    api.mount();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (L, S) {
  "use strict";

  const TAU = 2 * Math.PI;
  const close = (a, b, tolerance = 1e-9) => Math.abs(a - b) <= tolerance;
  const clamp = (value, lower = 0, upper = 1) => Math.max(lower, Math.min(upper, value));
  const complex = (re, im = 0) => ({ re, im });
  const northPole = Object.freeze(S.v(0, 1, 0));

  const stereographic = (z) => {
    const radiusSquared = z.re * z.re + z.im * z.im;
    const denominator = radiusSquared + 1;
    return S.v(
      2 * z.re / denominator,
      (radiusSquared - 1) / denominator,
      2 * z.im / denominator
    );
  };

  const inverseStereographic = (point) => {
    const denominator = 1 - point.y;
    if (Math.abs(denominator) < 1e-10) return null;
    return complex(point.x / denominator, point.z / denominator);
  };

  // The complex plane is drawn tangent to the sphere at its south pole.
  // N, S(z), and P(z) are collinear for P(z)=(2x,-1,2y).
  const planeAddress = (z) => S.v(2 * z.re, -1, 2 * z.im);

  const rotationMobius = (z, angle) => {
    const cosine = Math.cos(angle / 2);
    const sine = Math.sin(angle / 2);
    return L.mobius(
      z,
      complex(cosine),
      complex(-sine),
      complex(sine),
      complex(cosine)
    );
  };

  const rotateSphere = (point, angle) => {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    return S.v(
      cosine * point.x + sine * point.y,
      -sine * point.x + cosine * point.y,
      point.z
    );
  };

  const rotationMobiusOnSphere = (point, angle) => rotateSphere(point, angle);

  const lineLiftPlane = (realPart) => ({
    normal: S.v(1, realPart, 0),
    constant: realPart
  });

  const circleLiftPlane = (centre, radius) => {
    const square = centre.re * centre.re + centre.im * centre.im - radius * radius;
    return {
      normal: S.v(-2 * centre.re, 1 - square, -2 * centre.im),
      constant: -(1 + square)
    };
  };

  const pointPlaneResidual = (point, plane) => S.dot(point, plane.normal) - plane.constant;

  function mount() {
    if (typeof document === "undefined") return;
    const app = document.querySelector(".sphere-app");
    if (!app) return;

    const stage = document.getElementById("geometry-stage");
    const tabs = [...document.querySelectorAll(".step-tab")];
    const playButton = document.getElementById("play-button");
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");
    const resetButton = document.getElementById("reset-button");
    const viewSelect = document.getElementById("sphere-view");
    const zoomInput = document.getElementById("sphere-zoom");
    const zoomOutput = document.getElementById("sphere-zoom-output");
    const layerInputs = [...document.querySelectorAll("[data-layer-toggle]")];
    const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    const stepMotion = new Set([0, 1, 2, 3]);
    const durations = [5400, 4400, 5600, 6000];
    const viewPresets = Object.freeze({
      projection: { yaw: -0.68, pitch: 0.34 },
      front: { yaw: 0, pitch: 0 },
      pole: { yaw: -0.2, pitch: 0.9 }
    });
    const copy = [
      {
        title: "Match a moving plane point to the sphere",
        kicker: "One projection ray gives the same point two addresses.",
        description: "The complex plane is tangent at the south pole. The ray from the north pole through P(z) meets the sphere once, at S(z).",
        maths: [
          "P(z)=(2x,-1,2y),\\qquad z=x+iy",
          "S(z)=\\frac{1}{x^2+y^2+1}\\begin{pmatrix}2x\\\\x^2+y^2-1\\\\2y\\end{pmatrix}",
          "N,\\ S(z),\\ P(z)\\ \\text{are collinear}"
        ]
      },
      {
        title: "Close the plane with one point at infinity",
        kicker: "Every direction of escape reaches the same north pole.",
        description: "As the plane point moves farther away, its sphere address climbs continuously towards N. Infinity is one ordinary point on the sphere.",
        maths: [
          "z=r e^{i\\theta},\\qquad r\\to\\infty",
          "S(re^{i\\theta})=\\frac{1}{r^2+1}\\begin{pmatrix}2r\\cos\\theta\\\\r^2-1\\\\2r\\sin\\theta\\end{pmatrix}",
          "|z|\\to\\infty\\quad\\Longleftrightarrow\\quad S(z)\\to N"
        ]
      },
      {
        title: "Lift both lines and circles to sphere circles",
        kicker: "Only one question remains: does the sphere circle pass through N?",
        description: "A plane circle lifts to a sphere circle missing N. A plane line closes through N, so both become the same kind of object upstairs.",
        maths: [
          "\\Gamma\\ \\text{line or circle}\\quad\\Longleftrightarrow\\quad \\widehat\\Gamma=S^2\\cap\\Pi",
          "N\\in\\widehat\\Gamma\\quad\\Longleftrightarrow\\quad\\Gamma\\ \\text{is a line}",
          "N\\notin\\widehat\\Gamma\\quad\\Longleftrightarrow\\quad\\Gamma\\ \\text{is a circle}"
        ]
      },
      {
        title: "Turn a plane line into a circle by rotating upstairs",
        kicker: "A sphere rotation is a special Möbius transformation.",
        description: "This example is a rigid sphere rotation: a circle through N rotates away from N and projects back as a plane circle. General Möbius maps need not be rigid, but still preserve sphere circles.",
        maths: [
          "f_\\alpha(z)=\\frac{cz-s}{sz+c},\\qquad c=\\cos\\frac\\alpha2,\\ s=\\sin\\frac\\alpha2",
          "R_\\alpha S(z)=S\\!\\left(f_\\alpha(z)\\right)",
          "\\alpha=\\frac\\pi2:\\quad \\operatorname{Re}z=0\\longmapsto |w|=1"
        ]
      }
    ];

    let step = 0;
    let progress = 0;
    let animationState = "idle";
    let animationFrame = null;
    let animationStart = 0;
    let animationStartProgress = 0;
    let animationDuration = 0;
    let camera = { ...viewPresets.projection };
    let zoom = 1;
    let drag = null;

    const layer = (name) => {
      const input = layerInputs.find((item) => item.dataset.layerToggle === name);
      return Boolean(input && input.checked && !input.closest("label")?.hidden);
    };
    const number = (value) => Number(value.toFixed(3));
    const point = (value, options = {}) => S.project3D(value, camera, {
      cx: options.cx || 455,
      cy: options.cy || 300,
      scale: (options.scale || 175) * zoom,
      perspective: 0
    });
    const pathAttribute = (points, closePath = false) => {
      if (!points.length) return "";
      return `M ${points.map((item) => `${number(item.x)} ${number(item.y)}`).join(" L ")}${closePath ? " Z" : ""}`;
    };
    const pointsAttribute = (points) => points.map((item) => `${number(item.x)},${number(item.y)}`).join(" ");

    const splitProjected = (worldPoints, options = {}) => {
      const projected = worldPoints.map((item) => point(item, options));
      if (projected.length < 2) return [];
      const result = [];
      let current = { front: projected[0].depth >= 0, points: [projected[0]] };
      for (let index = 1; index < projected.length; index += 1) {
        const front = projected[index].depth >= 0;
        if (front !== current.front) {
          current.points.push(projected[index]);
          result.push(current);
          current = { front, points: [projected[index - 1], projected[index]] };
        } else {
          current.points.push(projected[index]);
        }
      }
      result.push(current);
      return result.filter((item) => item.points.length > 1);
    };

    const curve3D = (worldPoints, className, role, options = {}) => splitProjected(worldPoints, options).map((segment, index) => (
      `<path class="${className} ${segment.front ? "is-front" : "is-back"}" data-curve-role="${role}" data-depth-segment="${index}" d="${pathAttribute(segment.points)}"/>`
    )).join("");

    const sphereGridCurves = () => {
      const curves = [];
      [-0.72, -0.36, 0, 0.36, 0.72].forEach((latitude, index) => {
        const radius = Math.cos(latitude);
        const height = Math.sin(latitude);
        curves.push({
          role: `latitude-${index}`,
          points: Array.from({ length: 97 }, (_, sample) => {
            const angle = TAU * sample / 96;
            return S.v(radius * Math.cos(angle), height, radius * Math.sin(angle));
          })
        });
      });
      for (let longitude = 0; longitude < 8; longitude += 1) {
        const angle = longitude * Math.PI / 4;
        curves.push({
          role: `longitude-${longitude}`,
          points: Array.from({ length: 65 }, (_, sample) => {
            const latitude = -Math.PI / 2 + Math.PI * sample / 64;
            return S.v(
              Math.cos(latitude) * Math.cos(angle),
              Math.sin(latitude),
              Math.cos(latitude) * Math.sin(angle)
            );
          })
        });
      }
      return curves;
    };

    const sectionPlanePatch = (plane, className, options = {}) => {
      const normal = S.unit(plane.normal);
      const centre = S.scale(plane.normal, plane.constant / S.dot(plane.normal, plane.normal));
      const seed = Math.abs(normal.y) < 0.82 ? S.v(0, 1, 0) : S.v(1, 0, 0);
      const first = S.unit(S.cross(normal, seed));
      const second = S.unit(S.cross(normal, first));
      const size = 1.08;
      const corners = [
        S.add(centre, S.add(S.scale(first, -size), S.scale(second, -size))),
        S.add(centre, S.add(S.scale(first, size), S.scale(second, -size))),
        S.add(centre, S.add(S.scale(first, size), S.scale(second, size))),
        S.add(centre, S.add(S.scale(first, -size), S.scale(second, size)))
      ].map((item) => point(item, options));
      return `<polygon class="sphere-section-plane ${className}" points="${pointsAttribute(corners)}"/>`;
    };

    const sphereMarkup = (options = {}) => {
      const cx = options.cx || 455;
      const cy = options.cy || 300;
      const scale = (options.scale || 175) * zoom;
      const cameraOptions = { cx, cy, scale: options.scale || 175 };
      const grids = layer("sphere-grid") ? sphereGridCurves() : [];
      const planes = layer("section-planes") && options.sectionPlanes
        ? options.sectionPlanes.map((item) => sectionPlanePatch(item.plane, item.className, cameraOptions)).join("")
        : "";
      const curves = (options.curves || []).map((item) => curve3D(item.points, item.className, item.role, cameraOptions)).join("");
      const north = point(northPole, cameraOptions);
      return `
        <g class="riemann-sphere" data-sphere-role="${options.role || "riemann-sphere"}" data-camera-view="${document.body.dataset.view || "projection"}" data-camera-yaw="${camera.yaw.toFixed(4)}" data-camera-pitch="${camera.pitch.toFixed(4)}">
          ${planes}
          <circle class="sphere-shadow" cx="${cx + 9}" cy="${cy + 15}" r="${scale * 0.96}"/>
          <circle class="sphere-body" cx="${cx}" cy="${cy}" r="${scale}"/>
          ${grids.map((grid) => curve3D(grid.points, "sphere-grid-line", grid.role, cameraOptions)).join("")}
          ${curves}
          <circle class="north-pole" data-sphere-point="north-pole" cx="${number(north.x)}" cy="${number(north.y)}" r="8"/>
          <text class="sphere-label north-label" x="${number(north.x + 13)}" y="${number(north.y - 11)}">N</text>
        </g>`;
    };

    const baseDefs = () => `
      <defs>
        <radialGradient id="sphere-surface" cx="30%" cy="24%" r="78%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity=".98"/>
          <stop offset="48%" stop-color="#d9e5f7" stop-opacity=".92"/>
          <stop offset="100%" stop-color="#9db4d4" stop-opacity=".96"/>
        </radialGradient>
        <filter id="sphere-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="7" stdDeviation="8" flood-color="#18304a" flood-opacity=".18"/>
        </filter>
        <marker id="sphere-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="#d56a3a"/>
        </marker>
      </defs>`;

    const planePatchMarkup = (range = 1.38, options = {}) => {
      const corners = [
        planeAddress(complex(-range, -range)),
        planeAddress(complex(range, -range)),
        planeAddress(complex(range, range)),
        planeAddress(complex(-range, range))
      ].map((item) => point(item, options));
      const xStart = point(planeAddress(complex(-range, 0)), options);
      const xEnd = point(planeAddress(complex(range, 0)), options);
      const yStart = point(planeAddress(complex(0, -range)), options);
      const yEnd = point(planeAddress(complex(0, range)), options);
      return `
        <g data-plane-role="tangent-complex-plane" data-plane-height="-1">
          <polygon class="stereo-plane" points="${pointsAttribute(corners)}"/>
          <line class="stereo-axis" x1="${number(xStart.x)}" y1="${number(xStart.y)}" x2="${number(xEnd.x)}" y2="${number(xEnd.y)}"/>
          <line class="stereo-axis" x1="${number(yStart.x)}" y1="${number(yStart.y)}" x2="${number(yEnd.x)}" y2="${number(yEnd.y)}"/>
          <text class="sphere-label plane-axis-label" x="${number(xEnd.x + 8)}" y="${number(xEnd.y + 2)}">Re z</text>
          <text class="sphere-label plane-axis-label" x="${number(yEnd.x + 6)}" y="${number(yEnd.y - 8)}">Im z</text>
        </g>`;
    };

    const correspondenceMarkup = (z, options = {}) => {
      const planeWorld = planeAddress(z);
      const sphereWorld = stereographic(z);
      const planePoint = point(planeWorld, options);
      const spherePoint = point(sphereWorld, options);
      const north = point(northPole, options);
      const ray = layer("projection-rays")
        ? `<line class="projection-ray" data-motion-role="stereographic-projection-ray" x1="${number(north.x)}" y1="${number(north.y)}" x2="${number(planePoint.x)}" y2="${number(planePoint.y)}"/>`
        : "";
      const markers = layer("correspondence-points") ? `
        <circle class="plane-address" data-correspondence-point="plane" cx="${number(planePoint.x)}" cy="${number(planePoint.y)}" r="8"/>
        <circle class="sphere-address" data-correspondence-point="sphere" cx="${number(spherePoint.x)}" cy="${number(spherePoint.y)}" r="9"/>
        <text class="sphere-label point-caption" x="${number(planePoint.x + 13)}" y="${number(planePoint.y + 23)}">z</text>
        <text class="sphere-label point-caption" x="${number(spherePoint.x + 13)}" y="${number(spherePoint.y - 11)}">S(z)</text>`
        : "";
      const collinearity = S.norm(S.cross(S.sub(sphereWorld, northPole), S.sub(planeWorld, northPole)));
      return { markup: `${ray}${markers}`, collinearity, planeWorld, sphereWorld };
    };

    const closedLineLift = (realPart, samples = 145) => Array.from({ length: samples }, (_, index) => {
      if (index === 0 || index === samples - 1) return northPole;
      const theta = -Math.PI + TAU * index / (samples - 1);
      const imaginary = Math.tan(theta / 2);
      return stereographic(complex(realPart, imaginary));
    });

    const splitVisiblePlane = (values, limit = 1.46) => {
      const groups = [];
      let group = [];
      values.forEach((value) => {
        const visible = value && Math.abs(value.re) <= limit && Math.abs(value.im) <= limit;
        if (visible) group.push(planeAddress(value));
        else if (group.length > 1) {
          groups.push(group);
          group = [];
        } else {
          group = [];
        }
      });
      if (group.length > 1) groups.push(group);
      return groups;
    };

    const stepPointCorrespondenceMarkup = () => {
      const start = -0.85;
      const sweep = 1.65 * Math.PI;
      const angle = start + sweep * progress;
      const z = complex(0.42 + 0.55 * Math.cos(angle), 0.18 + 0.55 * Math.sin(angle));
      const count = Math.max(2, Math.floor(121 * progress));
      const planeCurve = Array.from({ length: count }, (_, index) => {
        const theta = start + sweep * index / 120;
        return planeAddress(complex(0.42 + 0.55 * Math.cos(theta), 0.18 + 0.55 * Math.sin(theta)));
      });
      const sphereCurve = planeCurve.map((item) => stereographic(complex(item.x / 2, item.z / 2)));
      const pair = correspondenceMarkup(z);
      return `${baseDefs()}
        <g data-motion-role="point-sphere-correspondence" data-step-progress="${progress.toFixed(4)}" data-sample-count="${count}" data-collinearity-residual="${pair.collinearity.toFixed(10)}" data-plane-height="-1">
          ${planePatchMarkup()}
          ${layer("plane-curves") ? curve3D(planeCurve, "plane-generated-curve", "moving-plane-curve") : ""}
          ${sphereMarkup({
            role: "point-correspondence-sphere",
            curves: layer("plane-curves") ? [{ points: sphereCurve, className: "sphere-generated-curve", role: "lifted-sphere-curve" }] : []
          })}
          ${pair.markup}
        </g>`;
    };

    const stepInfinityMarkup = () => {
      const direction = 0.48;
      const radius = 0.35 * 70 ** progress;
      const z = complex(radius * Math.cos(direction), radius * Math.sin(direction));
      const spherePoint = stereographic(z);
      const count = Math.max(2, Math.floor(121 * progress));
      const spherePath = Array.from({ length: count }, (_, index) => {
        const sampleRadius = 0.35 * 70 ** (index / 120);
        return stereographic(complex(sampleRadius * Math.cos(direction), sampleRadius * Math.sin(direction)));
      });
      const planeCap = complex(1.32 * Math.cos(direction), 1.32 * Math.sin(direction));
      const originScreen = point(planeAddress(complex(0)));
      const capScreen = point(planeAddress(planeCap));
      const sphereScreen = point(spherePoint);
      const north = point(northPole);
      const planeTrack = layer("plane-curves")
        ? `<line class="plane-escape-track" x1="${number(originScreen.x)}" y1="${number(originScreen.y)}" x2="${number(capScreen.x)}" y2="${number(capScreen.y)}" marker-end="url(#sphere-arrow)"/>`
        : "";
      const rayEnd = point(planeAddress(z));
      const ray = layer("projection-rays")
        ? `<line class="projection-ray infinity-ray" data-motion-role="infinity-projection-ray" x1="${number(north.x)}" y1="${number(north.y)}" x2="${number(rayEnd.x)}" y2="${number(rayEnd.y)}"/>`
        : "";
      const markers = layer("correspondence-points") ? `
        <circle class="sphere-address" data-correspondence-point="sphere-limit" cx="${number(sphereScreen.x)}" cy="${number(sphereScreen.y)}" r="9"/>
        <circle class="plane-address is-offstage-proxy" data-correspondence-point="plane-escape-direction" cx="${number(capScreen.x)}" cy="${number(capScreen.y)}" r="8"/>`
        : "";
      return `${baseDefs()}
        <g data-motion-role="infinity-limit" data-step-progress="${progress.toFixed(4)}" data-plane-radius="${radius.toFixed(6)}" data-sphere-height="${spherePoint.y.toFixed(6)}" data-gap-to-north="${S.norm(S.sub(northPole, spherePoint)).toFixed(6)}">
          ${planePatchMarkup()}
          ${sphereMarkup({
            role: "infinity-sphere",
            curves: layer("plane-curves") ? [{ points: spherePath, className: "sphere-limit-path", role: "sphere-path-to-north" }] : []
          })}
          ${planeTrack}${ray}${markers}
        </g>`;
    };

    const stepGeneralisedCirclesMarkup = () => {
      const centre = complex(0.38, -0.18);
      const radius = 0.58;
      const realPart = -0.5;
      const circleFull = Array.from({ length: 145 }, (_, index) => {
        const angle = TAU * index / 144;
        return complex(centre.re + radius * Math.cos(angle), centre.im + radius * Math.sin(angle));
      });
      const circleCount = Math.max(2, Math.floor(145 * progress));
      const lineFullSphere = closedLineLift(realPart, 145);
      const lineCount = Math.max(2, Math.floor(145 * progress));
      const extent = 0.08 + 1.5 * progress;
      const linePlane = Array.from({ length: 81 }, (_, index) => (
        planeAddress(complex(realPart, -extent + 2 * extent * index / 80))
      ));
      const circlePlane = circleFull.slice(0, circleCount).map(planeAddress);
      const circleSphere = circleFull.slice(0, circleCount).map(stereographic);
      const lineSphere = lineFullSphere.slice(0, lineCount);
      return `${baseDefs()}
        <g data-motion-role="generalised-circle-lift" data-step-progress="${progress.toFixed(4)}" data-circle-samples="${circleCount}" data-line-samples="${lineCount}" data-line-closes-at-north="${progress >= 1}">
          ${planePatchMarkup(1.48)}
          ${layer("plane-curves") ? `
            ${curve3D(circlePlane, "plane-circle-curve", "source-plane-circle")}
            ${curve3D(linePlane, "plane-line-curve", "source-plane-line")}` : ""}
          ${sphereMarkup({
            role: "generalised-circle-sphere",
            sectionPlanes: [
              { plane: circleLiftPlane(centre, radius), className: "is-circle-section" },
              { plane: lineLiftPlane(realPart), className: "is-line-section" }
            ],
            curves: [
              { points: circleSphere, className: "sphere-circle-lift", role: "lifted-plane-circle" },
              { points: lineSphere, className: "sphere-line-lift", role: "lifted-plane-line-through-north" }
            ]
          })}
        </g>`;
    };

    const stepMobiusRotationMarkup = () => {
      const targetAngle = Math.PI / 2;
      const angle = targetAngle * progress;
      const sourceSphere = closedLineLift(0, 181);
      const rotatedSphere = sourceSphere.map((item) => rotateSphere(item, angle));
      const sourceLine = Array.from({ length: 101 }, (_, index) => (
        planeAddress(complex(0, -1.45 + 2.9 * index / 100))
      ));
      const imageValues = rotatedSphere.map(inverseStereographic);
      const imageGroups = splitVisiblePlane(imageValues);
      const rotationTraces = [42, 88, 134].map((index, traceIndex) => {
        const sourcePoint = sourceSphere[index];
        const points = Array.from({ length: Math.max(2, Math.floor(41 * progress)) }, (_, sample) => (
          rotateSphere(sourcePoint, angle * sample / 40)
        ));
        return curve3D(points, "sphere-rotation-trace", `rigid-point-trace-${traceIndex}`);
      }).join("");
      const sourceMarker = point(sourceSphere[42]);
      const imageMarker = point(rotatedSphere[42]);
      const markers = layer("correspondence-points") ? `
        <circle class="sphere-map-point source" cx="${number(sourceMarker.x)}" cy="${number(sourceMarker.y)}" r="8"/>
        <circle class="sphere-map-point image" cx="${number(imageMarker.x)}" cy="${number(imageMarker.y)}" r="8"/>`
        : "";
      const rigidError = Math.max(...rotatedSphere.map((item) => Math.abs(S.norm(item) - 1)));
      return `${baseDefs()}
        <g data-motion-role="sphere-rigid-mobius-rotation" data-step-progress="${progress.toFixed(4)}" data-rotation-angle="${angle.toFixed(6)}" data-rigid-radius-error="${rigidError.toFixed(10)}" data-source-through-north="true" data-image-through-north="${progress === 0}">
          ${planePatchMarkup(1.48)}
          ${layer("plane-curves") ? `
            ${curve3D(sourceLine, "plane-mobius-source-line", "mobius-source-line")}
            ${imageGroups.map((group, index) => curve3D(group, "plane-mobius-image-circle", `mobius-image-locus-${index}`)).join("")}` : ""}
          ${sphereMarkup({
            role: "mobius-rotation-sphere",
            curves: [
              { points: sourceSphere, className: "source-sphere-circle", role: "source-line-circle-through-north" },
              { points: rotatedSphere, className: "image-sphere-circle", role: "rigidly-rotated-sphere-circle" }
            ]
          })}
          ${layer("projection-rays") ? rotationTraces : ""}
          ${markers}
        </g>`;
    };

    const renderStage = () => {
      const markup = [
        stepPointCorrespondenceMarkup,
        stepInfinityMarkup,
        stepGeneralisedCirclesMarkup,
        stepMobiusRotationMarkup
      ][step]();
      stage.innerHTML = markup;
      stage.dataset.renderedStep = String(step);
      stage.dataset.renderedProgress = progress.toFixed(4);
    };

    const renderMath = () => {
      const current = copy[step];
      document.getElementById("step-title").textContent = current.title;
      document.querySelector(".step-kicker").textContent = current.kicker;
      document.querySelector(".step-description").textContent = current.description;
      current.maths.forEach((math, index) => {
        const target = document.getElementById(`math-line-${index + 1}`);
        if (globalThis.katex) globalThis.katex.render(math, target, { throwOnError: false, displayMode: true });
        else target.textContent = math;
        target.dataset.claim = [
          ["tangent-plane-address", "stereographic-address", "projection-collinearity"],
          ["radial-escape", "sphere-limit-formula", "infinity-north-limit"],
          ["sphere-section-circle", "line-circle-through-north", "circle-circle-misses-north"],
          ["rotation-mobius-form", "stereographic-rotation-commutes", "rigid-circle-preservation"]
        ][step][index];
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
        const allowedSteps = label?.dataset.steps
          ? label.dataset.steps.split(",").map(Number)
          : null;
        if (label) label.hidden = allowedSteps ? !allowedSteps.includes(step) : false;
      });
      playButton.disabled = !active;
      playButton.setAttribute("aria-pressed", animationState === "running" ? "true" : "false");
      if (animationState === "running") {
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
      document.body.dataset.view = viewSelect.value;
      zoomOutput.textContent = `${Math.round(zoom * 100)}%`;
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
      progress = 0;
      syncControls();
    };

    const reset = () => {
      stopAnimation(false);
      step = 0;
      progress = 0;
      camera = { ...viewPresets.projection };
      viewSelect.value = "projection";
      zoom = 1;
      zoomInput.value = "100";
      layerInputs.forEach((input) => {
        input.checked = input.dataset.layerToggle !== "section-planes";
      });
      syncControls();
    };

    tabs.forEach((tab) => tab.addEventListener("click", () => chooseStep(Number(tab.dataset.step))));
    playButton.addEventListener("click", play);
    backButton.addEventListener("click", () => chooseStep(step - 1));
    nextButton.addEventListener("click", () => chooseStep(step + 1));
    resetButton.addEventListener("click", reset);
    layerInputs.forEach((input) => input.addEventListener("change", renderStage));
    viewSelect.addEventListener("change", () => {
      camera = { ...viewPresets[viewSelect.value] };
      document.body.dataset.view = viewSelect.value;
      renderStage();
    });
    zoomInput.addEventListener("input", () => {
      zoom = Number(zoomInput.value) / 100;
      zoomOutput.textContent = `${zoomInput.value}%`;
      renderStage();
    });

    stage.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      drag = { x: event.clientX, y: event.clientY, yaw: camera.yaw, pitch: camera.pitch };
      stage.classList.add("is-dragging");
      if (stage.setPointerCapture) stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointermove", (event) => {
      if (!drag) return;
      camera.yaw = drag.yaw + (event.clientX - drag.x) * 0.008;
      camera.pitch = clamp(drag.pitch + (event.clientY - drag.y) * 0.006, -1.05, 1.05);
      document.body.dataset.view = "custom";
      renderStage();
    });
    const endDrag = (event) => {
      if (!drag) return;
      drag = null;
      stage.classList.remove("is-dragging");
      if (stage.releasePointerCapture && stage.hasPointerCapture?.(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    };
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);

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
    stereographic,
    inverseStereographic,
    planeAddress,
    rotationMobius,
    rotateSphere,
    rotationMobiusOnSphere,
    lineLiftPlane,
    circleLiftPlane,
    pointPlaneResidual,
    northPole,
    mount,
    close
  });
});
