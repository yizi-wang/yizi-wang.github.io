(function () {
  "use strict";

  function createPlotTransform(options) {
    const width = options.canvasWidth - options.pad.left - options.pad.right;
    const height = options.canvasHeight - options.pad.top - options.pad.bottom;
    const transform = {
      x(value) { return options.pad.left + value / options.xMax * width; },
      y(value) { return options.pad.top + height - value / options.yMax * height; },
      dx(value) { return value / options.xMax * width; },
      dy(value) { return value / options.yMax * height; },
      vector(origin, components, scale) {
        return {
          start: { x: transform.x(origin.x), y: transform.y(origin.y) },
          end: {
            x: transform.x(origin.x + components.x * scale),
            y: transform.y(origin.y + components.y * scale),
          },
        };
      },
      width,
      height,
      pad: options.pad,
    };
    return transform;
  }

  function createStepController(options) {
    let step = 0;

    function clamp(next) {
      return Math.max(0, Math.min(options.stepCount() - 1, next));
    }

    function setStep(next) {
      const clamped = clamp(next);
      if (clamped === step && next !== 0) {
        return;
      }
      step = clamped;
      options.onStep(step);
    }

    function reset() {
      step = 0;
      options.onReset();
      options.onStep(step);
    }

    document.addEventListener("keydown", function (event) {
      if (event.target.matches("input, button, select, textarea")) {
        return;
      }
      if (event.key === "ArrowLeft") {
        setStep(step - 1);
      } else if (event.key === "ArrowRight") {
        setStep(step + 1);
      } else if (event.key.toLowerCase() === "r") {
        reset();
      } else if (event.code === "Space") {
        event.preventDefault();
        options.onPlayToggle();
      }
    });

    return {
      current: function () { return step; },
      next: function () { setStep(step + 1); },
      previous: function () { setStep(step - 1); },
      reset: reset,
      set: setStep,
    };
  }

  window.M2Classroom = {
    createPlotTransform: createPlotTransform,
    createStepController: createStepController,
  };
})();
