(function (globalScope) {
  "use strict";

  const WIDTH = 1000;
  const HEIGHT = 640;
  const PLOT = Object.freeze({ left: 58, right: 34, top: 42, bottom: 50 });
  const Y_MIN = -6.5;
  const Y_MAX = 6.5;
  const UNIT = (HEIGHT - PLOT.top - PLOT.bottom) / (Y_MAX - Y_MIN);
  const X_MIN = -5.75;
  const X_MAX = X_MIN + (WIDTH - PLOT.left - PLOT.right) / UNIT;
  const DOMAINS = Object.freeze({
    full: Object.freeze({ lower: -3, upper: 3, mathematical: "real" }),
    positive: Object.freeze({ lower: 0, upper: 3, mathematical: "nonnegative" }),
    short: Object.freeze({ lower: -2, upper: 2, mathematical: "bounded" })
  });

  function point(x, y) {
    return { x, y };
  }

  function pointAt(t) {
    return point(t * t, 2 * t);
  }

  function domain(name) {
    const selected = DOMAINS[name];
    if (!selected) throw new RangeError(`Unknown parameter domain: ${name}`);
    return selected;
  }

  function tracePoints(name, count) {
    const selected = domain(name);
    const samples = count || 160;
    const output = [];
    for (let index = 0; index <= samples; index += 1) {
      const t = selected.lower + ((selected.upper - selected.lower) * index) / samples;
      output.push(pointAt(t));
    }
    return output;
  }

  function toScreen(A) {
    return {
      x: PLOT.left + (A.x - X_MIN) * UNIT,
      y: PLOT.top + (Y_MAX - A.y) * UNIT
    };
  }

  const ParametricCurveGeometry = Object.freeze({
    WIDTH,
    HEIGHT,
    PLOT,
    X_MIN,
    X_MAX,
    Y_MIN,
    Y_MAX,
    UNIT,
    DOMAINS,
    scaleX: UNIT,
    scaleY: UNIT,
    point,
    pointAt,
    domain,
    tracePoints,
    toScreen
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ParametricCurveGeometry;
  }
  globalScope.ParametricCurveGeometry = ParametricCurveGeometry;

  if (typeof document === "undefined") return;

  const steps = [
    {
      title: "Prepare the plane",
      kicker: "A parameter will drive both coordinates.",
      description: "Keep the same physical scale on both axes so the generated path is not visually distorted.",
      ask: "What information must a coordinate plane preserve?",
      look: "Equal physical units on the two axes.",
      watch: "Introduce the coordinate rules only after the plane is checked."
    },
    {
      title: "Set the rule",
      kicker: "One number produces an ordered pair.",
      description: "For each value of t, the two coordinate rules return exactly one point P(t). The parameter labels a position; it is not the curve itself.",
      ask: "What changes when t changes, and what stays fixed?",
      look: "Both coordinates change, while the two rules remain fixed.",
      watch: "Keep the Cartesian equation hidden."
    },
    {
      title: "Generate one point",
      kicker: "Feed a value of t into both coordinate channels.",
      description: "The dashed projections show how x(t) and y(t) locate the moving point. Drag the parameter control to generate other points.",
      ask: "At t = −2, why is x positive while y is negative?",
      look: "Squaring removes the sign in x=t², but y=2t keeps it.",
      watch: "Use the live readout to connect symbol, number, and point."
    },
    {
      title: "Collect samples",
      kicker: "A handful of points begins to expose structure.",
      description: "Opposite parameter values share an x-coordinate and have opposite y-coordinates. The sample pattern suggests symmetry about the x-axis.",
      ask: "What do P(t) and P(−t) have in common?",
      look: "Same x-coordinate, opposite y-coordinates.",
      watch: "A finite sample suggests a curve but does not prove its shape."
    },
    {
      title: "Predict the path",
      kicker: "Commit to a curve before motion supplies the answer.",
      description: "Imagine t changing continuously across the visible window. Record a prediction and justify it from the coordinate rules.",
      ask: "Which features can you infer without eliminating t?",
      look: "Right-opening shape, x≥0, and symmetry about the x-axis.",
      watch: "Do not reveal the Cartesian equation yet."
    },
    {
      title: "Run the plotter",
      kicker: "Let the parameter generate points continuously.",
      description: "Press Play. The orange point is the current output; the green path is the accumulated record of earlier outputs.",
      ask: "Is t part of the drawn plane, or a label controlling the point?",
      look: "The point lies in the xy-plane; t controls where it is placed.",
      watch: "Pause at t=0 to discuss direction of travel."
    },
    {
      title: "Range and rate",
      kicker: "Range changes points; rate changes timing.",
      description: "Choose a range or travel rate, then replay. The faint path is the all-real reference.",
      ask: "Which control changes the set of visited points?",
      look: "The range changes the locus shown; the rate does not.",
      watch: "Use t≥0 to isolate the upper half of the curve."
    },
    {
      title: "Eliminate t",
      kicker: "Translate the point rule into Cartesian language.",
      description: "The equation names the underlying parabola. Keep any parameter restriction, because it may describe only part of the curve.",
      ask: "Why is the equation alone insufficient after restricting t?",
      look: "Elimination can introduce points that the permitted parameter values never visit.",
      watch: "Switch the range and make the final condition update."
    }
  ];

  const state = {
    step: 0,
    t: -2,
    range: "full",
    rate: 1,
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
  const ledger = document.querySelector(".ledger");
  const mathLines = [1, 2, 3].map(index => document.getElementById(`math-line-${index}`));
  const predictionPanel = document.getElementById("prediction-panel");
  const feedbackLine = document.getElementById("feedback-line");
  const tRange = document.getElementById("t-range");
  const tValue = document.getElementById("t-value");
  const rangeMinLabel = document.getElementById("range-min-label");
  const rangeMaxLabel = document.getElementById("range-max-label");
  const rangeSelect = document.getElementById("range-select");
  const rateSelect = document.getElementById("rate-select");
  const resetButton = document.getElementById("reset-button");
  const backButton = document.getElementById("back-button");
  const playButton = document.getElementById("play-button");
  const nextButton = document.getElementById("next-button");
  const liveRegion = document.getElementById("live-region");
  const stepTabs = Array.from(document.querySelectorAll("[data-step]"));
  const predictionButtons = Array.from(document.querySelectorAll("[data-choice]"));

  function formatNumber(value, places) {
    const rounded = Number(value.toFixed(places === undefined ? 2 : places));
    if (Object.is(rounded, -0)) return "0";
    return String(rounded).replace("-", "−");
  }

  function screenPoint(A) {
    const result = toScreen(A);
    return `${result.x.toFixed(2)} ${result.y.toFixed(2)}`;
  }

  function line(A, B, className) {
    const start = toScreen(A);
    const end = toScreen(B);
    return `<line class="${className}" x1="${start.x.toFixed(2)}" y1="${start.y.toFixed(2)}" x2="${end.x.toFixed(2)}" y2="${end.y.toFixed(2)}"></line>`;
  }

  function circle(A, radius, className) {
    const position = toScreen(A);
    return `<circle class="${className}" cx="${position.x.toFixed(2)}" cy="${position.y.toFixed(2)}" r="${radius}"></circle>`;
  }

  function label(text, A, anchor, className) {
    const position = toScreen(A);
    return `<text class="${className || "point-label"}" x="${position.x.toFixed(2)}" y="${position.y.toFixed(2)}" text-anchor="${anchor || "start"}">${text}</text>`;
  }

  function pathFromPoints(points, className) {
    const d = points.map((entry, index) => `${index === 0 ? "M" : "L"} ${screenPoint(entry)}`).join(" ");
    return `<path class="${className}" d="${d}"></path>`;
  }

  function telemetryMarkup(P) {
    if (state.step < 1) return "";
    const entries = [
      { x: 72, label: "PARAMETER", value: `t = ${formatNumber(state.t)}` },
      { x: 340, label: "X-CHANNEL", value: `x = ${formatNumber(P.x)}` },
      { x: 610, label: "Y-CHANNEL", value: `y = ${formatNumber(P.y)}` }
    ];
    return `<line class="telemetry-rule" x1="${PLOT.left}" y1="35" x2="${WIDTH - PLOT.right}" y2="35"></line>${entries.map(entry => `<text class="telemetry-label" x="${entry.x}" y="23">${entry.label}</text><text class="telemetry-value" x="${entry.x + 112}" y="23">${entry.value}</text>`).join("")}`;
  }

  function gridMarkup() {
    const output = [];
    for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x += 1) {
      const className = x % 2 === 0 ? "major-grid" : "minor-grid";
      output.push(line(point(x, Y_MIN), point(x, Y_MAX), className));
    }
    for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 1) {
      const className = y % 2 === 0 ? "major-grid" : "minor-grid";
      output.push(line(point(X_MIN, y), point(X_MAX, y), className));
    }
    output.push(line(point(X_MIN, 0), point(X_MAX, 0), "axis"));
    output.push(line(point(0, Y_MIN), point(0, Y_MAX), "axis"));
    for (let x = -4; x <= 14; x += 2) {
      if (x !== 0) output.push(label(String(x).replace("-", "−"), point(x, -0.42), "middle", "tick-label"));
    }
    for (let y = -6; y <= 6; y += 2) {
      if (y !== 0) output.push(label(String(y).replace("-", "−"), point(-0.24, y - 0.08), "end", "tick-label"));
    }
    output.push(label("x", point(X_MAX - 0.22, 0.42), "end", "axis-label"));
    output.push(label("y", point(0.34, Y_MAX - 0.22), "start", "axis-label"));
    return output.join("");
  }

  function sampleMarkup() {
    const samples = [-2, -1, 0, 1, 2];
    return samples.map(sample => {
      const P = pointAt(sample);
      const offset = sample < 0 ? point(0.28, -0.38) : sample > 0 ? point(0.28, 0.46) : point(0.38, -0.36);
      const className = sample === 0 ? "sample-point is-origin" : "sample-point";
      return `${circle(P, 6, className)}${label(`t=${String(sample).replace("-", "−")}`, point(P.x + offset.x, P.y + offset.y), "start", "sample-label")}`;
    }).join("");
  }

  function renderDiagram() {
    const P = pointAt(state.t);
    const drawing = [
      `<defs><clipPath id="plot-clip"><rect x="${PLOT.left}" y="${PLOT.top}" width="${WIDTH - PLOT.left - PLOT.right}" height="${HEIGHT - PLOT.top - PLOT.bottom}"></rect></clipPath></defs>`,
      `<title id="geometry-title">A parameter generates a curve</title>`,
      `<desc id="geometry-description">Step ${state.step + 1}: ${steps[state.step].title}. The axes have equal scale.</desc>`,
      gridMarkup(),
      telemetryMarkup(P),
      `<g clip-path="url(#plot-clip)">`
    ];

    if (state.step >= 6 && state.range !== "full") {
      drawing.push(pathFromPoints(tracePoints("full"), "locus-preview"));
    }
    if (state.step >= 5 && state.traceHistory.length > 1) {
      drawing.push(pathFromPoints(state.traceHistory, "locus-line"));
      state.traceHistory.forEach((entry, index) => {
        if (index % 12 === 0) drawing.push(circle(entry, 3.1, "history-dot"));
      });
    }
    if (state.step === 3 || state.step === 4) drawing.push(sampleMarkup());
    if (state.step >= 2) {
      drawing.push(line(P, point(P.x, 0), "projection-line"));
      drawing.push(line(P, point(0, P.y), "projection-line"));
      drawing.push(circle(point(P.x, 0), 4, "fixed-point"));
      drawing.push(circle(point(0, P.y), 4, "fixed-point"));
      drawing.push(circle(P, 11, "moving-point"));
      drawing.push(circle(P, 4, "moving-core"));
    }
    drawing.push("</g>");

    if (state.step >= 2) {
      const verticalOffset = state.t >= 0 ? 0.42 : -0.34;
      drawing.push(label("P(t)", point(P.x + 0.3, P.y + verticalOffset), "start", "moving-label"));
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

  function rangeExpression() {
    if (state.range === "positive") return "0\\le t<\\infty\\quad(\\text{view: }0\\le t\\le3)";
    if (state.range === "short") return "-2\\le t\\le2";
    return "t\\in\\mathbb R\\quad(\\text{view: }-3\\le t\\le3)";
  }

  function finalEquation() {
    if (state.range === "positive") return "y^2=4x,\\qquad y\\ge0";
    if (state.range === "short") return "y^2=4x,\\qquad -4\\le y\\le4";
    return "y^2=4x,\\qquad y\\in\\mathbb R";
  }

  function mathForStep() {
    const P = pointAt(state.t);
    switch (state.step) {
      case 1:
        return ["x=t^2,\\qquad y=2t", "P(t)=(t^2,2t)", ""];
      case 2:
        return [
          "P(t)=(t^2,2t)",
          `t=${String(state.t).replace("-", "-")}\\quad\\Rightarrow\\quad P=(${formatNumber(P.x).replace("−", "-")},${formatNumber(P.y).replace("−", "-")})`,
          ""
        ];
      case 3:
        return ["P(\\pm2)=(4,\\pm4)", "P(\\pm1)=(1,\\pm2)", "P(-t)=(x,-y)"];
      case 4:
        return ["P(t)=(t^2,2t)", "x\\ge0", "t\\uparrow\\quad\\Rightarrow\\quad P\\text{ moves}"];
      case 5:
        return ["P(t)=(t^2,2t)", "-3\\le t\\le3\\quad\\text{on screen}", "\\text{trace}=\\{P(t)\\}"];
      case 6:
        return [rangeExpression(), `\\text{rate}=${state.rate}\\times`, "\\text{rate}\\Rightarrow\\text{time only}"];
      case 7:
        return ["t=\\frac y2", "x=t^2=\\frac{y^2}{4}", finalEquation()];
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
    predictionPanel.hidden = state.step !== 4;
    predictionButtons.forEach(button => {
      button.setAttribute("aria-pressed", button.dataset.choice === state.selectedPrediction ? "true" : "false");
    });
    if (!state.selectedPrediction || state.step < 5 || state.step === 6) {
      feedbackLine.hidden = true;
      feedbackLine.textContent = "";
      return;
    }
    feedbackLine.hidden = false;
    if (state.step >= 7) {
      feedbackLine.textContent = state.selectedPrediction === "parabola"
        ? "Confirmed: the parameter generates a parabola, subject to its range."
        : "The generated points lie on a parabola. Compare that path with your prediction.";
    } else {
      feedbackLine.textContent = "Prediction recorded. Let the plotter test it.";
    }
  }

  function updateRangeControl() {
    const selected = domain(state.range);
    tRange.min = String(selected.lower);
    tRange.max = String(selected.upper);
    tRange.value = String(state.t);
    rangeMinLabel.textContent = formatNumber(selected.lower, 0);
    rangeMaxLabel.textContent = formatNumber(selected.upper, 0);
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
    tValue.textContent = formatNumber(state.t);
    tRange.disabled = state.step < 2;
    rangeSelect.disabled = state.step < 6;
    rateSelect.disabled = state.step < 6;
    backButton.disabled = state.step === 0;
    nextButton.disabled = state.step === steps.length - 1;
    playButton.disabled = state.step !== 5 && state.step !== 6;
    stepTabs.forEach((tab, index) => {
      if (index === state.step) tab.setAttribute("aria-current", "step");
      else tab.removeAttribute("aria-current");
    });
    updateRangeControl();
    renderPrediction();
    renderMath();
    renderDiagram();
    liveRegion.textContent = `Step ${state.step + 1} of ${steps.length}: ${current.title}.`;
  }

  function stopAnimation() {
    state.animationRunning = false;
    if (state.animationFrame !== null) cancelAnimationFrame(state.animationFrame);
    state.animationFrame = null;
    if (state.step === 5 || state.step === 6) {
      playButton.querySelector(".button-label").textContent = state.animationProgress >= 1 ? "Replay" : "Play";
      playButton.querySelector(".button-icon").textContent = "▶";
    }
  }

  function buildCompleteTrace() {
    state.traceHistory = tracePoints(state.range);
    state.t = domain(state.range).upper;
    state.animationProgress = 1;
    renderStep();
    stopAnimation();
  }

  function animationTick(timestamp) {
    if (!state.animationRunning) return;
    const selected = domain(state.range);
    const duration = 7600 / state.rate;
    state.animationProgress = Math.min(1, (timestamp - state.animationStart) / duration);
    state.t = selected.lower + (selected.upper - selected.lower) * state.animationProgress;
    const next = pointAt(state.t);
    const previous = state.traceHistory[state.traceHistory.length - 1];
    if (!previous || Math.hypot(next.x - previous.x, next.y - previous.y) >= 0.075) state.traceHistory.push(next);
    tRange.value = String(state.t);
    tValue.textContent = formatNumber(state.t);
    renderDiagram();
    if (state.animationProgress >= 1) {
      stopAnimation();
      liveRegion.textContent = "Trace complete.";
      return;
    }
    state.animationFrame = requestAnimationFrame(animationTick);
  }

  function toggleAnimation() {
    if (state.step !== 5 && state.step !== 6) return;
    if (reducedMotion) {
      buildCompleteTrace();
      return;
    }
    if (state.animationRunning) {
      stopAnimation();
      liveRegion.textContent = "Motion paused.";
      return;
    }
    const selected = domain(state.range);
    if (state.animationProgress >= 1) {
      state.animationProgress = 0;
      state.traceHistory = [];
      state.t = selected.lower;
    }
    const duration = 7600 / state.rate;
    state.animationRunning = true;
    state.animationStart = performance.now() - state.animationProgress * duration;
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
    if (state.step === 2) state.t = -2;
    if (state.step === 3) state.t = 2.5;
    if (state.step === 4) state.t = 2;
    if (state.step === 5) {
      state.range = "full";
      state.rate = 1;
      rangeSelect.value = "full";
      rateSelect.value = "1";
      state.t = domain("full").lower;
      state.traceHistory = [];
      state.animationProgress = 0;
    }
    if (state.step >= 6) {
      const selected = domain(state.range);
      state.t = selected.upper;
      state.traceHistory = tracePoints(state.range);
      state.animationProgress = 1;
    }
    ledger.scrollTop = 0;
    renderStep();
  }

  function resetScene() {
    stopAnimation();
    Object.assign(state, {
      step: 0,
      t: -2,
      range: "full",
      rate: 1,
      selectedPrediction: null,
      traceHistory: [],
      animationProgress: 0,
      animationStart: 0
    });
    rangeSelect.value = "full";
    rateSelect.value = "1";
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
  tRange.addEventListener("input", event => {
    stopAnimation();
    state.t = Number(event.target.value);
    state.animationProgress = 0;
    if (state.step === 5) state.traceHistory = [];
    tValue.textContent = formatNumber(state.t);
    renderMath();
    renderDiagram();
  });
  rangeSelect.addEventListener("change", event => {
    stopAnimation();
    state.range = event.target.value;
    const selected = domain(state.range);
    state.t = selected.upper;
    state.traceHistory = tracePoints(state.range);
    state.animationProgress = 1;
    renderStep();
  });
  rateSelect.addEventListener("change", event => {
    stopAnimation();
    state.rate = Number(event.target.value);
    renderStep();
  });
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
