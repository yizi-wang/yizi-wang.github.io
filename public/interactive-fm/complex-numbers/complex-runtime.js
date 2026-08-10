(function (root) {
  "use strict";
  const TAU = 2 * Math.PI;
  const add = (z, w) => ({ re: z.re + w.re, im: z.im + w.im });
  function translationFrame(z, displacement, progress) {
    const amount = Math.max(0, Math.min(1, progress));
    const tail = { re: displacement.re * amount, im: displacement.im * amount };
    const head = add(z, tail);
    return {
      amount,
      tail,
      head,
      copy: { re: head.re - tail.re, im: head.im - tail.im },
      result: add(z, displacement)
    };
  }
  const multiply = (z, w) => ({ re: z.re * w.re - z.im * w.im, im: z.re * w.im + z.im * w.re });
  const conjugate = z => ({ re: z.re, im: -z.im });
  const modulus = z => Math.hypot(z.re, z.im);
  const argument = z => Math.atan2(z.im, z.re);
  const polar = (r, theta) => ({ re: r * Math.cos(theta), im: r * Math.sin(theta) });
  const power = (z, n) => polar(modulus(z) ** n, n * argument(z));
  function roots(z, n) {
    if (!Number.isInteger(n) || n < 1) throw new RangeError("n must be a positive integer");
    const radius = modulus(z) ** (1 / n), theta = argument(z);
    return Array.from({ length: n }, (_, k) => ({ ...polar(radius, (theta + TAU * k) / n), k, theta: (theta + TAU * k) / n }));
  }
  function indexedRootAngle(targetArgument, n, k) {
    if (!Number.isInteger(n) || n < 1 || !Number.isInteger(k)) throw new RangeError("n and k must be integers with n positive");
    return (targetArgument + TAU * k) / n;
  }
  function rootPowerSweep(rootValue, targetPower, progress) {
    if (!Number.isInteger(targetPower) || targetPower < 1) throw new RangeError("targetPower must be a positive integer");
    const amount = Math.max(0, Math.min(1, progress));
    const exponent = 1 + (targetPower - 1) * amount;
    const baseArgument = Number.isFinite(rootValue.theta) ? rootValue.theta : argument(rootValue);
    return { exponent, modulus: modulus(rootValue) ** exponent, argument: exponent * baseArgument };
  }
  const approx = (a, b, tolerance = 1e-9) => Math.abs(a - b) <= tolerance;
  const api = Object.freeze({ TAU, add, translationFrame, multiply, conjugate, modulus, argument, polar, power, roots, indexedRootAngle, rootPowerSweep, approx });
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.ComplexRuntime = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
