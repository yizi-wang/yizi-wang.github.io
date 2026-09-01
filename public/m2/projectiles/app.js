(function () {
  "use strict";

  const canvas = document.getElementById("stageCanvas");
  const ctx = canvas.getContext("2d");
  const sceneTabs = Array.from(document.querySelectorAll("[data-scene]"));
  const choicesRoot = document.getElementById("predictionChoices");
  const questionNode = document.getElementById("sceneQuestion");
  const predictionStatus = document.getElementById("predictionStatus");
  const predictionResult = document.getElementById("predictionResult");
  const equationPanel = document.getElementById("equationPanel");
  const equationLines = document.getElementById("equationLines");
  const sceneConclusion = document.getElementById("sceneConclusion");
  const teacherCueText = document.getElementById("teacherCueText");
  const worksheetAnchor = document.getElementById("worksheetAnchor");
  const phaseBadge = document.getElementById("phaseBadge");
  const stagePrompt = document.getElementById("stagePrompt");
  const stageTitle = document.getElementById("stageTitle");
  const stageText = document.getElementById("stageText");
  const revealButton = document.getElementById("revealButton");
  const resetButton = document.getElementById("resetButton");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const droppedBall = window.M2Projectile.solveProjectile({ speed: 0, angleDeg: 0, initialHeight: 12, g: 9.8 });
  const horizontalBall = window.M2Projectile.solveProjectile({ speed: 16, angleDeg: 0, initialHeight: 12, g: 9.8 });
  const compare30 = window.M2Projectile.solveProjectile({ speed: 20, angleDeg: 30, initialHeight: 20, g: 10 });
  const compare45 = window.M2Projectile.solveProjectile({ speed: 20, angleDeg: 45, initialHeight: 20, g: 10 });
  const trackerAngle = Math.atan2(16, 12) * 180 / Math.PI;
  const trackerSolution = window.M2Projectile.solveProjectile({ speed: 20, angleDeg: trackerAngle, g: 9.8 });
  const trackerTime = (trackerSolution.uy + 9) / trackerSolution.g;
  const trackerVelocity = trackerSolution.velocityAt(trackerTime);
  const targetSpeed = Math.hypot(10, 15);
  const targetAngle = Math.atan2(15, 10) * 180 / Math.PI;
  const targetSolution = window.M2Projectile.solveProjectile({ speed: targetSpeed, angleDeg: targetAngle, g: 10 });

  const scenes = [
    {
      id: "horizontal-clock",
      question: "Which ball lands first?",
      choices: [
        ["A", "Ball A · dropped"],
        ["B", "Ball B · launched horizontally"],
        ["same", "They land at the same time"],
      ],
      correctChoice: "same",
      revealLabel: "Reveal the shared clock",
      worksheet: "Lesson 01 · Horizontal Projection",
      teacherCue: "Change only the horizontal speed in the discussion. Ask what changes and what cannot change before reading the equations.",
      predictTitle: "Which ball lands first?",
      predictText: "One is dropped. One is launched horizontally.",
      revealTitle: "One clock · two motions",
      revealText: "Their vertical positions match at every instant.",
      revealPrompt: "The red datum line tracks their shared vertical position.",
      canvasLabel: "A dropped ball and a horizontally launched ball sharing the same vertical position",
      equations: [
        "A and B: y = 12 − 4.9t²",
        `T_A = T_B = ${droppedBall.timeOfFlight.toFixed(2)} s`,
        `B: x = 16t, so range = ${horizontalBall.range.toFixed(2)} m`,
      ],
      conclusion: "Horizontal speed changes where Ball B lands, not when it lands.",
      duration: 1900,
      timeFaithful: true,
      xMax: 34,
      yMax: 14,
      draw: drawHorizontalClock,
    },
    {
      id: "balcony-range",
      question: "From a 20 m balcony, which angle gives the greater range?",
      choices: [
        ["30", "30°"],
        ["45", "45°"],
        ["same", "The ranges are equal"],
      ],
      correctChoice: "30",
      revealLabel: "Reveal both flights",
      worksheet: "Lesson 02 · Position Events",
      teacherCue: "Keep the speed fixed. The 30° projectile lands first but travels farther because its horizontal component is larger.",
      predictTitle: "Is 45° always best?",
      predictText: "Both balls leave the same balcony with speed 20 m s⁻¹.",
      revealTitle: "The landing level changes the result",
      revealText: "Compare horizontal speed and flight time together.",
      revealPrompt: "Both flights use the same real-time clock.",
      canvasLabel: "Thirty-degree and forty-five-degree projectiles launched from a balcony",
      equations: [
        `30°: T = ${compare30.timeOfFlight.toFixed(2)} s, R = ${compare30.range.toFixed(2)} m`,
        `45°: T = ${compare45.timeOfFlight.toFixed(2)} s, R = ${compare45.range.toFixed(2)} m`,
        "The 30° launch has the greater range.",
      ],
      conclusion: "The familiar 45° result needs launch and landing at the same height.",
      duration: 2200,
      timeFaithful: true,
      xMax: 72,
      yMax: 34,
      draw: drawRangeComparison,
    },
    {
      id: "tracker-check",
      question: "Can both tracker readings be true?",
      choices: [
        ["faulty", "The tracker is faulty"],
        ["both", "Both readings are possible"],
        ["unknown", "There is not enough information"],
      ],
      correctChoice: "both",
      revealLabel: "Reveal the velocity vector",
      worksheet: "Lesson 03 · Velocity Conditions",
      teacherCue: "Name the reference vector before taking a dot product. The word descending selects the negative vertical component.",
      predictTitle: "Can both readings be true?",
      predictText: "Speed = 15 m s⁻¹ and current velocity perpendicular to u.",
      revealTitle: "Follow the motion · place the vector",
      revealText: "The velocity turns during flight; the final red vector belongs at t = 2.55 s.",
      revealPrompt: "Track the changing velocity, then translate the checked vector onto the trajectory.",
      canvasLabel: "Projectile trajectory with changing velocity arrows and a perpendicular velocity vector translated to its position",
      equations: [
        "v = 12i + qj and 12² + q² = 15²",
        "Descending ⇒ q = −9, so v = 12i − 9j",
        "v · u = 12(12) + (−9)(16) = 0",
      ],
      conclusion: `Both readings are true at t = ${trackerTime.toFixed(2)} s.`,
      duration: 2600,
      timeFaithful: true,
      draw: drawTrackerCheck,
    },
    {
      id: "target-choice",
      question: "Which target lies exactly on the projectile path?",
      choices: [
        ["A", "Target A at (20, 10)"],
        ["B", "Target B at (25, 7)"],
        ["both", "Both targets"],
      ],
      correctChoice: "A",
      revealLabel: "Reveal the trajectory",
      worksheet: "Lesson 04 · Trajectory and Targets",
      teacherCue: "Take the vote while the curve is hidden. After reveal, compare each target's stated height with the trajectory height at the same x-coordinate.",
      predictTitle: "Which target is on the path?",
      predictText: "Judge A and B before the trajectory is shown.",
      revealTitle: "Target A is on the path",
      revealText: "Target B sits 0.75 m above the trajectory.",
      revealPrompt: "The red gap measures how far Target B misses the path.",
      canvasLabel: "Projectile trajectory through Target A and below Target B",
      equations: [
        "x = 10t, y = 15t − 5t²",
        "t = x / 10 ⇒ y = 1.5x − 0.05x²",
        "y(20) = 10; y(25) = 6.25",
      ],
      conclusion: "A is on the path. B is 0.75 m above the path.",
      duration: 1900,
      timeFaithful: true,
      xMax: 34,
      yMax: 14,
      draw: drawTargetChoice,
    },
  ];

  let scene = scenes[0];
  let prediction = null;
  let revealed = false;
  let revealProgress = 0;
  let animationFrame = null;
  let animationStartedAt = null;

  function colours() {
    const style = getComputedStyle(document.documentElement);
    return {
      ink: style.getPropertyValue("--ink").trim(),
      muted: style.getPropertyValue("--muted").trim(),
      line: style.getPropertyValue("--line").trim(),
      current: style.getPropertyValue("--current").trim(),
      motion: style.getPropertyValue("--motion").trim(),
      result: style.getPropertyValue("--result").trim(),
      velocity: style.getPropertyValue("--velocity").trim(),
      comparisonA: style.getPropertyValue("--comparison-a").trim(),
      comparisonB: style.getPropertyValue("--comparison-b").trim(),
      quiet: style.getPropertyValue("--quiet").trim(),
      surface: style.getPropertyValue("--surface").trim(),
      grid: style.getPropertyValue("--grid").trim(),
    };
  }

  function plot(sceneData) {
    return window.M2Classroom.createPlotTransform({
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      pad: { left: 78, right: 42, top: 45, bottom: 75 },
      xMax: sceneData.xMax,
      yMax: sceneData.yMax,
    });
  }

  function line(x1, y1, x2, y2, colour, width, dash) {
    ctx.save();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width || 2;
    ctx.setLineDash(dash || []);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  function label(text, x, y, colour, align, size, weight) {
    ctx.save();
    ctx.fillStyle = colour;
    ctx.font = `${weight || 650} ${size || 20}px Bahnschrift, Segoe UI, sans-serif`;
    ctx.textAlign = align || "left";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  function arrow(x1, y1, x2, y2, colour, width) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const head = 14;
    line(x1, y1, x2, y2, colour, width || 4);
    ctx.save();
    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6), y2 - head * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6), y2 - head * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function point(x, y, radius, fill, stroke) {
    ctx.save();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke || fill;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function panel(x, y, width, height, stroke, fill) {
    ctx.save();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 6);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function clearStage() {
    const c = colours();
    ctx.fillStyle = c.surface;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let x = 0; x <= canvas.width; x += 64) line(x, 0, x, canvas.height, c.grid, 1);
    for (let y = 0; y <= canvas.height; y += 64) line(0, y, canvas.width, y, c.grid, 1);
  }

  function drawAxes(p, sceneData) {
    const c = colours();
    line(p.x(0), p.y(0), p.x(sceneData.xMax), p.y(0), c.ink, 3);
    line(p.x(0), p.y(0), p.x(0), p.y(sceneData.yMax), c.ink, 3);
    label("x / m", p.x(sceneData.xMax), p.y(0) + 31, c.muted, "right", 17, 700);
    label("y / m", p.x(0) - 18, p.y(sceneData.yMax) + 7, c.muted, "right", 17, 700);
  }

  function drawTrail(points, colour, width) {
    if (points.length === 0) return;
    ctx.save();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width || 5;
    ctx.beginPath();
    points.forEach(function (item, index) {
      if (index === 0) ctx.moveTo(item.x, item.y); else ctx.lineTo(item.x, item.y);
    });
    ctx.stroke();
    ctx.restore();
  }

  function projectilePoints(solution, p, endTime, xOffset) {
    const points = [];
    for (let index = 0; index <= 100; index += 1) {
      const t = endTime * index / 100;
      const pos = solution.positionAt(t);
      points.push({ x: p.x((xOffset || 0) + pos.x), y: p.y(Math.max(0, pos.y)) });
    }
    return points;
  }

  function drawHorizontalClock(progress) {
    clearStage();
    const c = colours();
    const p = plot(scene);
    const aX = 4;
    const bOffset = 6;
    const elapsed = droppedBall.timeOfFlight * progress;
    const aState = droppedBall.positionAt(elapsed);
    const bState = horizontalBall.positionAt(elapsed);
    const sharedY = Math.max(0, aState.y);

    line(p.x(0), p.y(0), p.x(scene.xMax), p.y(0), c.ink, 4);
    line(p.x(0), p.y(0), p.x(0), p.y(12), c.ink, 6);
    line(p.x(0), p.y(12), p.x(7), p.y(12), c.ink, 6);
    label("12 m", p.x(0) + 18, (p.y(0) + p.y(12)) / 2, c.muted, "left", 18, 700);

    if (revealed) {
      drawTrail(projectilePoints(droppedBall, p, elapsed, aX), c.comparisonA, 5);
      drawTrail(projectilePoints(horizontalBall, p, elapsed, bOffset), c.comparisonB, 5);
    } else {
      line(p.x(aX), p.y(12), p.x(aX), p.y(0), c.quiet, 2, [8, 8]);
      line(p.x(bOffset), p.y(12), p.x(bOffset), p.y(0), c.quiet, 2, [8, 8]);
    }

    const aPoint = { x: p.x(aX), y: p.y(sharedY) };
    const bPoint = { x: p.x(bOffset + bState.x), y: p.y(Math.max(0, bState.y)) };
    line(aPoint.x, aPoint.y, bPoint.x, bPoint.y, c.velocity, 3, [10, 7]);
    point(aPoint.x, aPoint.y, 11, c.comparisonA, c.ink);
    point(bPoint.x, bPoint.y, 11, c.comparisonB, c.ink);
    label("A · dropped", aPoint.x, aPoint.y - 29, c.comparisonA, "center", 18, 800);
    label("B · horizontal", bPoint.x + 8, bPoint.y - 29, c.comparisonB, "left", 18, 800);
    arrow(p.x(bOffset), p.y(12), p.x(bOffset + 4.6), p.y(12), c.velocity, 4);
    label("16 m s⁻¹", p.x(bOffset + 2.3), p.y(12) - 31, c.velocity, "center", 18, 800);

    if (revealed) {
      label("shared y(t)", (aPoint.x + bPoint.x) / 2, aPoint.y - 22, c.velocity, "center", 18, 800);
      label(`t = ${elapsed.toFixed(2)} s`, p.x(30.8), p.y(13), c.ink, "right", 24, 800);
      if (progress >= 0.999) label("same landing time", p.x(17), p.y(1.2), c.result, "center", 24, 800);
    } else {
      label("same starting height", (aPoint.x + bPoint.x) / 2, aPoint.y + 30, c.velocity, "center", 18, 800);
    }
  }

  function drawBalcony(p) {
    const c = colours();
    line(p.x(0), p.y(0), p.x(0), p.y(20), c.ink, 8);
    line(p.x(0), p.y(20), p.x(5), p.y(20), c.ink, 8);
    label("20 m", p.x(0) + 18, (p.y(0) + p.y(20)) / 2, c.muted, "left", 18, 700);
  }

  function drawRangeComparison(progress) {
    clearStage();
    const c = colours();
    const p = plot(scene);
    const sharedTime = compare45.timeOfFlight * progress;
    const time30 = Math.min(sharedTime, compare30.timeOfFlight);
    const time45 = Math.min(sharedTime, compare45.timeOfFlight);
    const state30 = compare30.positionAt(time30);
    const state45 = compare45.positionAt(time45);

    drawAxes(p, scene);
    drawBalcony(p);
    point(p.x(0), p.y(20), 10, c.motion, c.ink);
    arrow(p.x(0), p.y(20), p.x(7.8), p.y(24.5), c.comparisonA, 5);
    arrow(p.x(0), p.y(20), p.x(6.4), p.y(26.4), c.comparisonB, 5);
    label("30°", p.x(8.1), p.y(24.4), c.comparisonA, "left", 19, 800);
    label("45°", p.x(6.8), p.y(26.6), c.comparisonB, "left", 19, 800);

    if (revealed) {
      drawTrail(projectilePoints(compare30, p, time30), c.comparisonA, 5);
      drawTrail(projectilePoints(compare45, p, time45), c.comparisonB, 5);
      point(p.x(state30.x), p.y(Math.max(0, state30.y)), 9, c.comparisonA, c.ink);
      point(p.x(state45.x), p.y(Math.max(0, state45.y)), 9, c.comparisonB, c.ink);
      label(`t = ${sharedTime.toFixed(2)} s`, p.x(69), p.y(32), c.ink, "right", 23, 800);
    }

    if (revealed && progress >= 0.999) {
      line(p.x(compare30.range), p.y(0), p.x(compare30.range), p.y(5), c.comparisonA, 3);
      line(p.x(compare45.range), p.y(0), p.x(compare45.range), p.y(8), c.comparisonB, 3);
      label(`30° · ${compare30.range.toFixed(2)} m`, p.x(compare30.range) + 12, p.y(5.5), c.comparisonA, "left", 18, 800);
      label(`45° · ${compare45.range.toFixed(2)} m`, p.x(compare45.range) - 12, p.y(8.6), c.comparisonB, "right", 18, 800);
    } else if (!revealed) {
      label("same speed · different components", p.x(37), p.y(4), c.muted, "center", 20, 700);
    }
  }

  function drawTrackerCheck(progress) {
    clearStage();
    const c = colours();
    const p = window.M2Classroom.createPlotTransform({
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      pad: { left: 78, right: 330, top: 45, bottom: 75 },
      xMax: 44,
      yMax: 30,
    });
    const pathProgress = revealed ? Math.min(1, progress / 0.56) : 0;
    const elapsed = trackerTime * pathProgress;
    const state = trackerSolution.positionAt(elapsed);
    const currentVelocity = trackerSolution.velocityAt(elapsed);
    const vectorScale = 6;
    const particlePoint = { x: p.x(state.x), y: p.y(state.y) };

    panel(66, 45, 300, 72, c.line, c.surface);
    panel(386, 45, 415, 72, c.line, c.surface);
    label("READING 1", 86, 67, c.current, "left", 12, 800);
    label("speed = 15 m s⁻¹", 86, 94, c.ink, "left", 21, 800);
    label("READING 2", 406, 67, c.current, "left", 12, 800);
    label("current v is perpendicular to u", 406, 94, c.ink, "left", 20, 800);

    line(p.x(0), p.y(0), p.x(44), p.y(0), c.ink, 3);
    line(p.x(0), p.y(0), p.x(0), p.y(16), c.ink, 3);
    label("x / m", p.x(44), p.y(0) + 29, c.muted, "right", 16, 700);
    label("y / m", p.x(0) - 14, p.y(16), c.muted, "right", 16, 700);
    point(p.x(0), p.y(0), 9, c.motion, c.ink);
    arrow(p.x(0), p.y(0), p.x(0) + 12 * vectorScale, p.y(0) - 16 * vectorScale, c.comparisonB, 5);
    label("u", p.x(0) + 79, p.y(0) - 103, c.comparisonB, "left", 19, 800);

    if (!revealed) {
      line(p.x(0), p.y(0), p.x(39), p.y(0), c.quiet, 2, [9, 8]);
      label("trajectory hidden until reveal", p.x(19.5), p.y(1.4), c.muted, "center", 19, 700);
      return;
    }

    drawTrail(projectilePoints(trackerSolution, p, elapsed), c.result, 5);
    point(particlePoint.x, particlePoint.y, 9, c.motion, c.ink);
    label(`t = ${elapsed.toFixed(2)} s`, particlePoint.x, particlePoint.y - 31, c.ink, "center", 17, 800);

    if (progress < 0.78) {
      arrow(
        particlePoint.x,
        particlePoint.y,
        particlePoint.x + currentVelocity.x * vectorScale,
        particlePoint.y - currentVelocity.y * vectorScale,
        c.velocity,
        5,
      );
      label("v(t)", particlePoint.x + currentVelocity.x * vectorScale + 8, particlePoint.y - currentVelocity.y * vectorScale, c.velocity, "left", 17, 800);
    }

    if (elapsed >= trackerSolution.timeToMaxHeight) {
      const apex = trackerSolution.positionAt(trackerSolution.timeToMaxHeight);
      arrow(p.x(apex.x), p.y(apex.y), p.x(apex.x) + 12 * vectorScale, p.y(apex.y), c.quiet, 4);
      point(p.x(apex.x), p.y(apex.y), 6, c.quiet, c.quiet);
      label("vᵧ = 0", p.x(apex.x) + 36, p.y(apex.y) - 20, c.muted, "center", 16, 700);
    }

    const checkProgress = Math.max(0, Math.min(1, (progress - 0.56) / 0.22));
    const checkOrigin = { x: 1010, y: 235 };
    const checkScale = 6;
    const checkRadius = 15 * checkScale;
    const xAtTwelve = checkOrigin.x + 12 * checkScale;
    const upper = { x: xAtTwelve, y: checkOrigin.y - 9 * checkScale };
    const lower = { x: xAtTwelve, y: checkOrigin.y + 9 * checkScale };

    if (checkProgress > 0) {
      ctx.save();
      ctx.globalAlpha = checkProgress;
      panel(875, 72, 345, 292, c.line, c.surface);
      label("VELOCITY CHECK", 895, 96, c.current, "left", 12, 800);
      line(905, checkOrigin.y, 1192, checkOrigin.y, c.ink, 2);
      line(checkOrigin.x, 335, checkOrigin.x, 126, c.ink, 2);
      ctx.strokeStyle = c.velocity;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(checkOrigin.x, checkOrigin.y, checkRadius, 0, Math.PI * 2);
      ctx.stroke();
      line(xAtTwelve, checkOrigin.y - checkRadius, xAtTwelve, checkOrigin.y + checkRadius, c.current, 2, [7, 6]);
      arrow(checkOrigin.x, checkOrigin.y, checkOrigin.x + 12 * checkScale, checkOrigin.y - 16 * checkScale, c.comparisonB, 4);
      point(upper.x, upper.y, 6, c.quiet, c.ink);
      point(lower.x, lower.y, 6, c.velocity, c.ink);
      line(upper.x - 9, upper.y - 9, upper.x + 9, upper.y + 9, c.muted, 3);
      line(upper.x - 9, upper.y + 9, upper.x + 9, upper.y - 9, c.muted, 3);
      label("u", checkOrigin.x + 79, checkOrigin.y - 102, c.comparisonB, "left", 17, 800);
      label("q = −9", lower.x + 13, lower.y, c.velocity, "left", 16, 800);
      label("|v| = 15", checkOrigin.x - 75, checkOrigin.y - 74, c.velocity, "center", 15, 800);
      const uUnit = { x: 0.6, y: -0.8 };
      const vUnit = { x: 0.8, y: 0.6 };
      const p1 = { x: checkOrigin.x + uUnit.x * 22, y: checkOrigin.y + uUnit.y * 22 };
      const corner = { x: p1.x + vUnit.x * 22, y: p1.y + vUnit.y * 22 };
      const p2 = { x: checkOrigin.x + vUnit.x * 22, y: checkOrigin.y + vUnit.y * 22 };
      line(p1.x, p1.y, corner.x, corner.y, c.result, 3);
      line(corner.x, corner.y, p2.x, p2.y, c.result, 3);
      ctx.restore();
    }

    const translation = Math.max(0, Math.min(1, (progress - 0.78) / 0.22));
    if (checkProgress >= 0.98) {
      const vectorOrigin = {
        x: checkOrigin.x + (particlePoint.x - checkOrigin.x) * translation,
        y: checkOrigin.y + (particlePoint.y - checkOrigin.y) * translation,
      };
      if (translation > 0) line(checkOrigin.x, checkOrigin.y, particlePoint.x, particlePoint.y, c.quiet, 2, [7, 7]);
      arrow(
        vectorOrigin.x,
        vectorOrigin.y,
        vectorOrigin.x + trackerVelocity.x * vectorScale,
        vectorOrigin.y - trackerVelocity.y * vectorScale,
        c.velocity,
        6,
      );
      if (translation >= 0.99) {
        label("v = 12i − 9j", particlePoint.x + 80, particlePoint.y + 47, c.velocity, "left", 18, 800);
        label("translated to r(2.55)", particlePoint.x - 4, particlePoint.y + 79, c.muted, "center", 16, 700);
      }
    }
  }

  function drawTargetMarker(p, x, y, name, colour) {
    const px = p.x(x);
    const py = p.y(y);
    ctx.save();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(px, py, 13, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px - 20, py);
    ctx.lineTo(px + 20, py);
    ctx.moveTo(px, py - 20);
    ctx.lineTo(px, py + 20);
    ctx.stroke();
    ctx.restore();
    label(`${name} (${x}, ${y})`, px + 20, py - 24, colour, "left", 18, 800);
  }

  function drawTargetChoice(progress) {
    clearStage();
    const c = colours();
    const p = plot(scene);
    const elapsed = targetSolution.timeOfFlight * progress;
    const state = targetSolution.positionAt(elapsed);

    drawAxes(p, scene);
    point(p.x(0), p.y(0), 10, c.motion, c.ink);
    arrow(p.x(0), p.y(0), p.x(4.5), p.y(6.75), c.velocity, 5);
    label("u = 10i + 15j", p.x(4.8), p.y(7.1), c.velocity, "left", 19, 800);
    drawTargetMarker(p, 20, 10, "A", c.ink);
    drawTargetMarker(p, 25, 7, "B", c.ink);

    if (!revealed) {
      label("Which target will the projectile pass through?", p.x(16), p.y(2.2), c.muted, "center", 21, 700);
      return;
    }

    drawTrail(projectilePoints(targetSolution, p, elapsed), c.result, 5);
    point(p.x(state.x), p.y(Math.max(0, state.y)), 9, c.motion, c.ink);
    if (progress >= 0.999) {
      const pathAtB = 1.5 * 25 - 0.05 * 25 * 25;
      line(p.x(25), p.y(7), p.x(25), p.y(pathAtB), c.velocity, 4);
      label("0.75 m", p.x(25) + 15, (p.y(7) + p.y(pathAtB)) / 2, c.velocity, "left", 18, 800);
      point(p.x(20), p.y(10), 8, c.result, c.result);
      label("y = 1.5x − 0.05x²", p.x(12.5), p.y(13), c.result, "center", 22, 800);
    }
  }

  function renderPredictionChoices() {
    choicesRoot.replaceChildren();
    scene.choices.forEach(function (choice) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.dataset.choice = choice[0];
      button.textContent = choice[1];
      button.disabled = revealed;
      button.setAttribute("aria-pressed", prediction === choice[0] ? "true" : "false");
      button.addEventListener("click", function () {
        if (revealed) return;
        prediction = choice[0];
        renderPredictionChoices();
        predictionStatus.textContent = `Class prediction: ${choice[1]}`;
        revealButton.disabled = false;
      });
      choicesRoot.appendChild(button);
    });
  }

  function populateReveal() {
    equationLines.replaceChildren();
    scene.equations.forEach(function (text) {
      const lineNode = document.createElement("div");
      lineNode.className = "equation-line";
      lineNode.textContent = text;
      equationLines.appendChild(lineNode);
    });
    const selected = scene.choices.find(function (choice) { return choice[0] === prediction; });
    predictionResult.textContent = prediction === scene.correctChoice
      ? `Prediction confirmed: ${selected[1]}`
      : `Prediction to revisit: ${selected[1]}`;
    sceneConclusion.textContent = scene.conclusion;
  }

  function finishReveal() {
    revealProgress = 1;
    scene.draw(revealProgress);
    animationFrame = null;
    animationStartedAt = null;
    document.body.dataset.revealState = "complete";
    revealButton.disabled = false;
    revealButton.textContent = "Replay reveal";
  }

  function animateReveal(timestamp) {
    if (animationStartedAt === null) animationStartedAt = timestamp;
    const linear = Math.min(1, (timestamp - animationStartedAt) / scene.duration);
    revealProgress = scene.timeFaithful ? linear : 1 - Math.pow(1 - linear, 3);
    scene.draw(revealProgress);
    if (linear < 1) {
      animationFrame = requestAnimationFrame(animateReveal);
    } else {
      finishReveal();
    }
  }

  function startReveal() {
    if (prediction === null) return;
    if (animationFrame) cancelAnimationFrame(animationFrame);
    revealed = true;
    revealProgress = 0;
    animationStartedAt = null;
    document.body.dataset.phase = "reveal";
    document.body.dataset.revealState = "playing";
    phaseBadge.textContent = "Reveal";
    stagePrompt.textContent = scene.revealPrompt;
    stageTitle.textContent = scene.revealTitle;
    stageText.textContent = scene.revealText;
    equationPanel.hidden = false;
    predictionStatus.textContent = "Prediction locked. Read the reveal against the handout question.";
    revealButton.disabled = true;
    revealButton.textContent = "Revealing…";
    populateReveal();
    renderPredictionChoices();
    scene.draw(0);
    if (reducedMotion.matches) {
      finishReveal();
    } else {
      animationFrame = requestAnimationFrame(animateReveal);
    }
  }

  function resetScene() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    animationStartedAt = null;
    prediction = null;
    revealed = false;
    revealProgress = 0;
    document.body.dataset.phase = "predict";
    document.body.dataset.revealState = "idle";
    phaseBadge.textContent = "Predict";
    stagePrompt.textContent = "Hold the launch. Take the vote first.";
    stageTitle.textContent = scene.predictTitle;
    stageText.textContent = scene.predictText;
    equationPanel.hidden = true;
    predictionStatus.textContent = "Take a class vote before revealing the model.";
    revealButton.disabled = true;
    revealButton.textContent = scene.revealLabel;
    document.querySelector(".teacher-cue").open = false;
    renderPredictionChoices();
    scene.draw(0);
  }

  function selectScene(sceneId) {
    scene = scenes.find(function (item) { return item.id === sceneId; });
    sceneTabs.forEach(function (tab) {
      tab.setAttribute("aria-selected", tab.dataset.scene === sceneId ? "true" : "false");
    });
    questionNode.textContent = scene.question;
    teacherCueText.textContent = scene.teacherCue;
    worksheetAnchor.textContent = scene.worksheet;
    canvas.setAttribute("aria-label", scene.canvasLabel);
    resetScene();
  }

  sceneTabs.forEach(function (tab) {
    tab.addEventListener("click", function () { selectScene(tab.dataset.scene); });
  });
  revealButton.addEventListener("click", startReveal);
  resetButton.addEventListener("click", resetScene);
  document.addEventListener("keydown", function (event) {
    if (event.target.matches("input, button, select, textarea")) return;
    if (/^[1-4]$/.test(event.key)) {
      selectScene(scenes[Number(event.key) - 1].id);
    } else if (event.code === "Space" && prediction !== null) {
      event.preventDefault();
      startReveal();
    } else if (event.key.toLowerCase() === "r") {
      resetScene();
    }
  });

  window.M2ProjectileIntro = {
    getState: function () {
      return { sceneId: scene.id, prediction, revealed, revealProgress };
    },
  };

  selectScene(scene.id);
})();
