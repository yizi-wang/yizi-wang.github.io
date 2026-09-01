(function () {
  "use strict";

  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }

  function solveProjectile(options) {
    const speed = options.speed;
    const angleDeg = options.angleDeg;
    const initialHeight = options.initialHeight || 0;
    const g = options.g === undefined ? 9.8 : options.g;
    if (!(speed >= 0)) {
      throw new Error("speed must be non-negative");
    }
    if (!(g > 0)) {
      throw new Error("g must be positive");
    }
    if (!(initialHeight >= 0)) {
      throw new Error("initialHeight must be non-negative");
    }

    const angle = toRadians(angleDeg);
    const ux = speed * Math.cos(angle);
    const uy = speed * Math.sin(angle);
    const discriminant = uy * uy + 2 * g * initialHeight;
    const timeOfFlight = (uy + Math.sqrt(discriminant)) / g;
    const range = ux * timeOfFlight;
    const timeToMaxHeight = Math.max(0, uy / g);
    const maxHeight = uy > 0 ? initialHeight + (uy * uy) / (2 * g) : initialHeight;

    return {
      speed,
      angleDeg,
      initialHeight,
      g,
      ux,
      uy,
      timeOfFlight,
      range,
      timeToMaxHeight,
      maxHeight,
      positionAt(t) {
        return { x: ux * t, y: initialHeight + uy * t - 0.5 * g * t * t };
      },
      velocityAt(t) {
        return { x: ux, y: uy - g * t };
      },
    };
  }

  function groundTargetSolutions(challenge) {
    const ratio = (challenge.targetDistance * challenge.g) / (challenge.speed * challenge.speed);
    if (ratio > 1) {
      return [];
    }
    const low = 0.5 * toDegrees(Math.asin(Math.max(0, ratio)));
    const high = 0.5 * toDegrees(Math.PI - Math.asin(Math.max(0, ratio)));
    if (Math.abs(low - high) < 1e-10) {
      return [45];
    }
    return [low, high];
  }

  window.M2Projectile = { groundTargetSolutions, solveProjectile, toRadians };
})();
