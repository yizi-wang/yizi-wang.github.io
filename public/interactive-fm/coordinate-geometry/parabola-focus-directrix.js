(function (globalScope) {
  "use strict";

  const WIDTH = 1000;
  const HEIGHT = 640;
  const PLOT = Object.freeze({ left: 58, right: 34, top: 42, bottom: 50 });
  const Y_MIN = -5;
  const Y_MAX = 5;
  const UNIT = (HEIGHT - PLOT.top - PLOT.bottom) / (Y_MAX - Y_MIN);
  const X_MIN = -6.5;
  const X_MAX = X_MIN + (WIDTH - PLOT.left - PLOT.right) / UNIT;
  const EPSILON = 1e-9;

  function point(x, y) {
    return { x, y };
  }

  function distance(A, B) {
    return Math.hypot(A.x - B.x, A.y - B.y);
  }

  function geometry(a, u) {
    if (!(a > 0)) throw new RangeError("The focus offset a must be positive.");
    const F = point(a, 0);
    const Q = point(-a, u);
    const M = point(0, u / 2);
    const P = point((u * u) / (4 * a), u);
    const segmentDirection = point(2 * a, -u);
    const bisectorDirection = point(u, 2 * a);
    return { a, u, F, Q, M, P, segmentDirection, bisectorDirection };
  }

  function toScreen(A) {
    return {
      x: PLOT.left + (A.x - X_MIN) * UNIT,
      y: PLOT.top + (Y_MAX - A.y) * UNIT
    };
  }

  function almostEqual(left, right, tolerance) {
    return Math.abs(left - right) <= (tolerance || EPSILON);
  }

  const ParabolaGeometry = Object.freeze({
    WIDTH,
    HEIGHT,
    PLOT,
    X_MIN,
    X_MAX,
    Y_MIN,
    Y_MAX,
    UNIT,
    scaleX: UNIT,
    scaleY: UNIT,
    point,
    distance,
    geometry,
    toScreen,
    almostEqual
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ParabolaGeometry;
  }
  globalScope.ParabolaGeometry = ParabolaGeometry;

  if (typeof document === "undefined") return;

  const steps = [
    {
      title: "Prepare the plane",
      kicker: "Begin with an equal-scale coordinate system.",
      description: "One square represents one unit in both directions, so length and perpendicularity remain geometrically honest.",
      ask: "What must be preserved if this diagram is to support geometric reasoning?",
      look: "Students noticing that equal units on both axes are essential.",
      watch: "Advance only after the coordinate system has been checked."
    },
    {
      title: "Fix the rule",
      kicker: "Place a focus and a vertical directrix symmetrically about the y-axis.",
      description: "The parameter a controls their separation. The locus will consist of points equidistant from these two fixed objects.",
      ask: "Which object is a point, and which object is a line?",
      look: "A distance to the line must be measured perpendicularly.",
      watch: "Change a briefly and ask what features should move."
    },
    {
      title: "Choose point Q",
      kicker: "Let Q move freely on the directrix.",
      description: "Draw the horizontal through Q. Because the directrix is vertical, this horizontal gives the shortest distance from any point on it.",
      ask: "Why is the horizontal through Q perpendicular to the directrix?",
      look: "A clear link between perpendicular distance and distance to a line.",
      watch: "The square marker at Q verifies the right angle."
    },
    {
      title: "Bisect FQ",
      kicker: "Construct the perpendicular bisector of segment FQ.",
      description: "Every point on this bisector is equidistant from F and Q. The square marker at M records the perpendicular relationship.",
      ask: "What is true for every point on the perpendicular bisector?",
      look: "Students stating equal distances, not just visual symmetry.",
      watch: "The displayed right angle stays exact as Q changes."
    },
    {
      title: "Locate point P",
      kicker: "Intersect the two constructed lines.",
      description: "P lies on the perpendicular bisector, so PF = PQ. It also lies on the horizontal through Q, so PQ is the distance from P to the directrix.",
      ask: "Which two facts combine to make P a locus point?",
      look: "PF = PQ and PQ is perpendicular to the directrix.",
      watch: "The equality is logical before it is algebraic."
    },
    {
      title: "Predict the locus",
      kicker: "Hold the invariant in mind before revealing the path.",
      description: "Q will now move along the directrix while the same construction is repeated. Record a prediction and a reason.",
      ask: "What symmetry and direction of opening do you expect?",
      look: "A prediction based on the construction rather than recognition alone.",
      watch: "Do not reveal the equation yet."
    },
    {
      title: "Generate the trace",
      kicker: "Move Q and rebuild P continuously.",
      description: "Press Play. Each green mark records one newly constructed position of P; the locus grows in the same order as a board construction.",
      ask: "Which property remains unchanged throughout the motion?",
      look: "Students tracking PF = distance from P to the directrix.",
      watch: "Pause midway if the emerging symmetry deserves discussion."
    },
    {
      title: "Name the curve",
      kicker: "Translate the geometric invariant into coordinates.",
      description: "The equal-distance condition simplifies to the standard equation of a right-opening parabola. Changing a updates the geometry and equation together.",
      ask: "Where does the factor 4a come from in the algebra?",
      look: "Correct expansion, cancellation, and interpretation of a.",
      watch: "Use the slider to connect focus position, directrix position, and width."
    }
  ];

  const state = {
    step: 0,
    a: 2,
    u: 3.15,
    selectedPrediction: null,
    traceHistory: [],
    animationFrame: null,
    animationRunning: false,
    animationProgress: 0,
    animationStart: 0
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svg = document.getElementById("geometry-stage");
  const stepNumber = document.getElementById("step-number");
  const stepTitle = document.getElementById("step-title");
  const stepKicker = document.getElementById("step-kicker");
  const stepDescription = document.getElementById("step-description");
  const cueAsk = document.getElementById("cue-ask");
  const cueLook = document.getElementById("cue-look");
  const cueWatch = document.getElementById("cue-watch");
  const mathLedger = document.getElementById("math-ledger");
  const mathLines = [1, 2, 3].map(index => document.getElementById(`math-line-${index}`));
  const predictionPanel = document.getElementById("prediction-panel");
  const feedbackLine = document.getElementById("feedback-line");
  const aRange = document.getElementById("a-range");
  const aValue = document.getElementById("a-value");
  const traceToggle = document.getElementById("trace-toggle");
  const constructionToggle = document.getElementById("construction-toggle");
  const labelsToggle = document.getElementById("labels-toggle");
  const resetButton = document.getElementById("reset-button");
  const backButton = document.getElementById("back-button");
  const playButton = document.getElementById("play-button");
  const nextButton = document.getElementById("next-button");
  const liveRegion = document.getElementById("live-region");
  const stepTabs = Array.from(document.querySelectorAll("[data-step]"));
  const predictionButtons = Array.from(document.querySelectorAll("[data-choice]"));

  function formatNumber(value) {
    return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(2)));
  }

  function screenPoint(A) {
    const result = ParabolaGeometry.toScreen(A);
    return `${result.x.toFixed(2)} ${result.y.toFixed(2)}`;
  }

  function line(A, B, className) {
    const start = ParabolaGeometry.toScreen(A);
    const end = ParabolaGeometry.toScreen(B);
    return `<line class="${className}" x1="${start.x.toFixed(2)}" y1="${start.y.toFixed(2)}" x2="${end.x.toFixed(2)}" y2="${end.y.toFixed(2)}"></line>`;
  }

  function circle(A, radius, className) {
    const position = ParabolaGeometry.toScreen(A);
    return `<circle class="${className}" cx="${position.x.toFixed(2)}" cy="${position.y.toFixed(2)}" r="${radius}"></circle>`;
  }

  function diamond(A, radius, className) {
    const position = ParabolaGeometry.toScreen(A);
    const points = [
      `${position.x.toFixed(2)},${(position.y - radius).toFixed(2)}`,
      `${(position.x + radius).toFixed(2)},${position.y.toFixed(2)}`,
      `${position.x.toFixed(2)},${(position.y + radius).toFixed(2)}`,
      `${(position.x - radius).toFixed(2)},${position.y.toFixed(2)}`
    ].join(" ");
    return `<polygon class="${className}" points="${points}"></polygon>`;
  }

  function label(text, A, anchor, className) {
    const position = ParabolaGeometry.toScreen(A);
    return `<text class="${className || "point-label"}" x="${position.x.toFixed(2)}" y="${position.y.toFixed(2)}" text-anchor="${anchor || "start"}">${text}</text>`;
  }

  function pathFromPoints(points, className) {
    const d = points.map((entry, index) => `${index === 0 ? "M" : "L"} ${screenPoint(entry)}`).join(" ");
    return `<path class="${className}" d="${d}"></path>`;
  }

  function rightAngleAtVertex(vertex, firstDirection, secondDirection, size) {
    const firstLength = Math.hypot(firstDirection.x, firstDirection.y);
    const secondLength = Math.hypot(secondDirection.x, secondDirection.y);
    const first = point(firstDirection.x / firstLength, firstDirection.y / firstLength);
    const second = point(secondDirection.x / secondLength, secondDirection.y / secondLength);
    const A = point(vertex.x + first.x * size, vertex.y + first.y * size);
    const B = point(A.x + second.x * size, A.y + second.y * size);
    const C = point(vertex.x + second.x * size, vertex.y + second.y * size);
    return pathFromPoints([A, B, C], "right-angle");
  }

  function segmentTick(A, B) {
    const midpoint = point((A.x + B.x) / 2, (A.y + B.y) / 2);
    const dx = B.x - A.x;
    const dy = B.y - A.y;
    const length = Math.hypot(dx, dy);
    const normal = point(-dy / length, dx / length);
    const half = 0.14;
    return line(
      point(midpoint.x - normal.x * half, midpoint.y - normal.y * half),
      point(midpoint.x + normal.x * half, midpoint.y + normal.y * half),
      "distance-tick"
    );
  }

  function gridMarkup() {
    const output = [];
    for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x += 1) {
      const className = x % 2 === 0 ? "major-grid" : "minor-grid";
      output.push(line(point(x, Y_MIN), point(x, Y_MAX), className));
    }
    for (let y = Y_MIN; y <= Y_MAX; y += 1) {
      const className = y % 2 === 0 ? "major-grid" : "minor-grid";
      output.push(line(point(X_MIN, y), point(X_MAX, y), className));
    }
    output.push(line(point(X_MIN, 0), point(X_MAX, 0), "axis"));
    output.push(line(point(0, Y_MIN), point(0, Y_MAX), "axis"));
    for (let x = -4; x <= 10; x += 2) {
      if (x !== 0) output.push(label(String(x), point(x, -0.34), "middle", "tick-label"));
    }
    for (let y = -4; y <= 4; y += 2) {
      if (y !== 0) output.push(label(String(y), point(-0.22, y - 0.08), "end", "tick-label"));
    }
    output.push(label("x", point(X_MAX - 0.18, 0.34), "end", "axis-label"));
    output.push(label("y", point(-0.22, Y_MAX - 0.2), "end", "axis-label"));
    return output.join("");
  }

  function parabolaPoints(a, lower, upper, count) {
    const output = [];
    for (let index = 0; index <= count; index += 1) {
      const u = lower + ((upper - lower) * index) / count;
      output.push(point((u * u) / (4 * a), u));
    }
    return output;
  }

  function renderDiagram() {
    const current = geometry(state.a, state.u);
    const { F, Q, M, P, bisectorDirection } = current;
    const showTrace = traceToggle.checked;
    const showConstruction = constructionToggle.checked;
    const showLabels = labelsToggle.checked;
    const drawing = [
      `<defs><clipPath id="plot-clip"><rect x="${PLOT.left}" y="${PLOT.top}" width="${WIDTH - PLOT.left - PLOT.right}" height="${HEIGHT - PLOT.top - PLOT.bottom}"></rect></clipPath></defs>`,
      `<title id="geometry-title">Focus-directrix construction of a parabola</title>`,
      `<desc id="geometry-description">Step ${state.step + 1}: ${steps[state.step].title}. The axes use the same number of pixels per unit.</desc>`,
      gridMarkup(),
      `<g clip-path="url(#plot-clip)">`
    ];

    if (state.step >= 6 && showTrace && state.traceHistory.length > 1) {
      drawing.push(pathFromPoints(state.traceHistory, "locus-line"));
      state.traceHistory.forEach((entry, index) => {
        if (index % 9 === 0) drawing.push(circle(entry, 3.2, "history-dot"));
      });
    }
    if (state.step >= 7 && showTrace) {
      drawing.push(pathFromPoints(parabolaPoints(state.a, -4.65, 4.65, 150), "locus-line"));
    }

    if (state.step >= 1) {
      drawing.push(line(point(-state.a, Y_MIN), point(-state.a, Y_MAX), "fixed-line"));
      drawing.push(circle(F, 17, "focus-halo"));
      drawing.push(circle(F, 7, "fixed-point"));
    }

    if (state.step >= 2) {
      if (showConstruction) {
        drawing.push(line(Q, point(X_MAX, Q.y), "construction-guide"));
        const verticalDirection = state.u >= 0 ? point(0, -1) : point(0, 1);
        drawing.push(rightAngleAtVertex(Q, point(1, 0), verticalDirection, 0.28));
      }
      drawing.push(diamond(Q, 9, "moving-point"));
    }

    if (state.step >= 3 && showConstruction) {
      drawing.push(line(F, Q, "construction-line"));
      const bisectorLength = Math.hypot(bisectorDirection.x, bisectorDirection.y);
      const unitBisector = point(bisectorDirection.x / bisectorLength, bisectorDirection.y / bisectorLength);
      drawing.push(line(
        point(M.x - unitBisector.x * 18, M.y - unitBisector.y * 18),
        point(M.x + unitBisector.x * 18, M.y + unitBisector.y * 18),
        "construction-guide"
      ));
      drawing.push(circle(M, 5.5, "fixed-point"));
      drawing.push(rightAngleAtVertex(M, point(F.x - M.x, F.y - M.y), bisectorDirection, 0.26));
    }

    if (state.step >= 4) {
      drawing.push(circle(P, 11, "moving-point"));
      drawing.push(circle(P, 4, "moving-core"));
    }

    if (state.step >= 7) {
      drawing.push(line(P, F, "distance-line"));
      drawing.push(line(P, Q, "distance-line"));
      drawing.push(segmentTick(P, F));
      drawing.push(segmentTick(P, Q));
    }
    drawing.push("</g>");

    if (showLabels) {
      if (state.step >= 1) {
        drawing.push(label(`ℓ: x = −${formatNumber(state.a)}`, point(-state.a - 0.2, 4.52), "end", "fixed-label"));
        drawing.push(label("F", point(F.x + 0.3, F.y - 0.28), "start", "fixed-label"));
      }
      if (state.step >= 2) drawing.push(label("Q", point(Q.x - 0.25, Q.y + 0.38), "end", "moving-label"));
      if (state.step >= 3 && showConstruction) drawing.push(label("M", point(M.x + 0.2, M.y - 0.28), "start", "construction-label"));
      if (state.step >= 4) drawing.push(label("P", point(P.x + 0.24, P.y + 0.34), "start", "moving-label"));
      if (state.step >= 7) {
        const pfDx = F.x - P.x;
        const pfDy = F.y - P.y;
        const pfLength = Math.hypot(pfDx, pfDy);
        const pfNormal = point(-pfDy / pfLength, pfDx / pfLength);
        drawing.push(label("PF", point((P.x + F.x) / 2 + pfNormal.x * 0.32, (P.y + F.y) / 2 + pfNormal.y * 0.32), "middle", "distance-label"));
        drawing.push(label("PQ", point((P.x + Q.x) / 2, P.y - 0.38), "middle", "distance-label"));
      }
    }

    svg.innerHTML = drawing.join("");
  }

  function renderKatex(element, expression) {
    element.textContent = expression || "";
    if (!expression) return;
    if (globalScope.katex && typeof globalScope.katex.render === "function") {
      globalScope.katex.render(expression, element, {
        throwOnError: false,
        displayMode: false,
        strict: false
      });
    }
  }

  function mathForStep() {
    const a = formatNumber(state.a);
    const coefficient = formatNumber(4 * state.a);
    switch (state.step) {
      case 1:
        return [`F=(${a},0)`, `\\ell:\\;x=-${a}`, ""];
      case 2:
        return [`Q=(-${a},u)`, `Q\\in\\ell,\\qquad y=u`, ""];
      case 3:
        return [`M=\\left(0,\\frac{u}{2}\\right)`, `MF=MQ,\\qquad b\\perp FQ`, ""];
      case 4:
      case 5:
      case 6:
        return [`P\\in b`, `PQ\\perp\\ell`, `PF=PQ=d(P,\\ell)`];
      case 7:
        return [
          `PF=PQ=d(P,\\ell)`,
          `\\sqrt{(x-${a})^2+y^2}=x+${a}`,
          `y^2=4ax\\quad\\Rightarrow\\quad y^2=${coefficient}x`
        ];
      default:
        return [];
    }
  }

  function renderMath() {
    const expressions = mathForStep();
    mathLedger.hidden = expressions.length === 0;
    mathLines.forEach((element, index) => renderKatex(element, expressions[index] || ""));
  }

  function renderPrediction() {
    predictionPanel.hidden = state.step !== 5;
    predictionButtons.forEach(button => {
      button.setAttribute("aria-pressed", button.dataset.choice === state.selectedPrediction ? "true" : "false");
    });
    if (!state.selectedPrediction || state.step < 6) {
      feedbackLine.hidden = true;
      feedbackLine.textContent = "";
      return;
    }
    feedbackLine.hidden = false;
    if (state.step >= 7) {
      feedbackLine.textContent = state.selectedPrediction === "parabola"
        ? "Confirmed: the generated locus is a parabola."
        : "The construction generates a parabola. Compare its symmetry and opening with your prediction.";
    } else {
      feedbackLine.textContent = "Prediction recorded. Let the moving construction test it.";
    }
  }

  function renderStep() {
    const current = steps[state.step];
    stepNumber.textContent = String(state.step + 1).padStart(2, "0");
    stepTitle.textContent = current.title;
    stepKicker.textContent = current.kicker;
    stepDescription.textContent = current.description;
    cueAsk.textContent = current.ask;
    cueLook.textContent = current.look;
    cueWatch.textContent = current.watch;
    aValue.textContent = formatNumber(state.a);
    backButton.disabled = state.step === 0;
    nextButton.disabled = state.step === steps.length - 1;
    playButton.disabled = state.step !== 6;
    stepTabs.forEach((tab, index) => {
      if (index === state.step) tab.setAttribute("aria-current", "step");
      else tab.removeAttribute("aria-current");
    });
    renderPrediction();
    renderMath();
    renderDiagram();
    liveRegion.textContent = `Step ${state.step + 1} of ${steps.length}: ${current.title}.`;
  }

  function stopAnimation() {
    state.animationRunning = false;
    if (state.animationFrame !== null) cancelAnimationFrame(state.animationFrame);
    state.animationFrame = null;
    if (state.step === 6) {
      playButton.querySelector(".button-label").textContent = state.animationProgress >= 1 ? "Replay" : "Play";
      playButton.querySelector(".button-icon").textContent = "▶";
    }
  }

  function buildCompleteTrace() {
    state.traceHistory = parabolaPoints(state.a, -4.45, 4.45, 110);
    state.u = 4.45;
    state.animationProgress = 1;
    renderStep();
    stopAnimation();
  }

  function animationTick(timestamp) {
    if (!state.animationRunning) return;
    const duration = 7800;
    state.animationProgress = Math.min(1, (timestamp - state.animationStart) / duration);
    state.u = -4.45 + 8.9 * state.animationProgress;
    const next = geometry(state.a, state.u).P;
    const previous = state.traceHistory[state.traceHistory.length - 1];
    if (!previous || Math.abs(next.y - previous.y) >= 0.055) state.traceHistory.push(next);
    renderDiagram();
    if (state.animationProgress >= 1) {
      stopAnimation();
      liveRegion.textContent = "Motion complete. The constructed points form a parabola.";
      return;
    }
    state.animationFrame = requestAnimationFrame(animationTick);
  }

  function toggleAnimation() {
    if (state.step !== 6) return;
    if (reducedMotion) {
      buildCompleteTrace();
      return;
    }
    if (state.animationRunning) {
      stopAnimation();
      liveRegion.textContent = "Motion paused.";
      return;
    }
    if (state.animationProgress >= 1) {
      state.animationProgress = 0;
      state.traceHistory = [];
      state.u = -4.45;
    }
    state.animationRunning = true;
    state.animationStart = performance.now() - state.animationProgress * 7800;
    playButton.querySelector(".button-label").textContent = "Pause";
    playButton.querySelector(".button-icon").textContent = "Ⅱ";
    liveRegion.textContent = "Motion started.";
    state.animationFrame = requestAnimationFrame(animationTick);
  }

  function moveToStep(nextStep) {
    const bounded = Math.max(0, Math.min(steps.length - 1, nextStep));
    if (bounded === state.step) return;
    stopAnimation();
    state.step = bounded;
    if (state.step === 6) {
      state.u = -4.45;
      state.traceHistory = [];
      state.animationProgress = 0;
    } else if (state.step >= 7) {
      state.u = 3.15;
    }
    renderStep();
  }

  function resetScene() {
    stopAnimation();
    Object.assign(state, {
      step: 0,
      a: 2,
      u: 3.15,
      selectedPrediction: null,
      traceHistory: [],
      animationProgress: 0,
      animationStart: 0
    });
    aRange.value = "2";
    traceToggle.checked = true;
    constructionToggle.checked = true;
    labelsToggle.checked = true;
    renderStep();
    liveRegion.textContent = "Construction reset.";
  }

  resetButton.addEventListener("click", resetScene);
  backButton.addEventListener("click", () => moveToStep(state.step - 1));
  nextButton.addEventListener("click", () => moveToStep(state.step + 1));
  playButton.addEventListener("click", toggleAnimation);
  stepTabs.forEach(tab => tab.addEventListener("click", () => moveToStep(Number(tab.dataset.step))));
  predictionButtons.forEach(button => {
    button.addEventListener("click", () => {
      state.selectedPrediction = button.dataset.choice;
      renderPrediction();
      liveRegion.textContent = `${button.textContent} selected as the prediction.`;
    });
  });
  aRange.addEventListener("input", event => {
    state.a = Number(event.target.value);
    if (state.traceHistory.length) {
      state.traceHistory = state.traceHistory.map(entry => point((entry.y * entry.y) / (4 * state.a), entry.y));
    }
    renderStep();
  });
  [traceToggle, constructionToggle, labelsToggle].forEach(control => control.addEventListener("change", renderDiagram));
  document.addEventListener("keydown", event => {
    const tagName = event.target && event.target.tagName;
    if (["INPUT", "BUTTON", "SUMMARY", "SELECT", "TEXTAREA"].includes(tagName)) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToStep(state.step - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToStep(state.step + 1);
    } else if (event.code === "Space") {
      event.preventDefault();
      toggleAnimation();
    } else if (event.key.toLowerCase() === "r") {
      event.preventDefault();
      resetScene();
    }
  });

  renderStep();
})(typeof window !== "undefined" ? window : globalThis);
