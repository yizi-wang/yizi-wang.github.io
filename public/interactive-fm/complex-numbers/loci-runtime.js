(function (root) {
  "use strict";
  const add = (z, w) => ({ re: z.re + w.re, im: z.im + w.im });
  const subtract = (z, w) => ({ re: z.re - w.re, im: z.im - w.im });
  const scale = (z, k) => ({ re: k * z.re, im: k * z.im });
  const multiply = (z, w) => ({ re: z.re * w.re - z.im * w.im, im: z.re * w.im + z.im * w.re });
  const divide = (z, w) => {
    const denominator = w.re * w.re + w.im * w.im;
    if (denominator === 0) return null;
    return { re: (z.re * w.re + z.im * w.im) / denominator, im: (z.im * w.re - z.re * w.im) / denominator };
  };
  const modulus = (z) => Math.hypot(z.re, z.im);
  const distance = (z, w) => modulus(subtract(z, w));
  const argumentFrom = (z, a) => Math.atan2(z.im - a.im, z.re - a.re);
  const pointOnCircle = (centre, radius, angle) => ({ re: centre.re + radius * Math.cos(angle), im: centre.im + radius * Math.sin(angle) });
  const modulusMembership = (z, a, radius, relation = "=") => relation === "=" ? Math.abs(distance(z, a) - radius) < 1e-9 : relation === "<" ? distance(z, a) < radius : distance(z, a) > radius;
  const boundedArgumentMembership = (z, a, lower, upper, includeLower = false, includeUpper = false) => {
    const angle = argumentFrom(z, a);
    const lowerPass = includeLower ? angle >= lower : angle > lower;
    const upperPass = includeUpper ? angle <= upper : angle < upper;
    return distance(z, a) > 1e-12 && lowerPass && upperPass;
  };
  function apollonius(a, b, lambda) {
    if (!(lambda > 0)) throw new RangeError("lambda must be positive");
    if (Math.abs(lambda - 1) < 1e-12) return { kind: "line", midpoint: scale(add(a, b), 0.5), direction: { re: -(b.im - a.im), im: b.re - a.re } };
    const square = lambda * lambda;
    return {
      kind: "circle",
      centre: scale(subtract(a, scale(b, square)), 1 / (1 - square)),
      radius: lambda * distance(a, b) / Math.abs(1 - square)
    };
  }
  const apolloniusMembership = (z, a, b, lambda, tolerance = 1e-9) => Math.abs(distance(z, a) - lambda * distance(z, b)) <= tolerance;
  function apolloniusPoint(a, b, lambda, angle) {
    const locus = apollonius(a, b, lambda);
    if (locus.kind !== "circle") throw new RangeError("apolloniusPoint requires lambda different from one");
    return pointOnCircle(locus.centre, locus.radius, angle);
  }
  const affine = (z, a, b) => add(multiply(a, z), b);
  const reciprocal = (z) => divide({ re: 1, im: 0 }, z);
  function mobius(z, a, b, c, d) {
    return divide(add(multiply(a, z), b), add(multiply(c, z), d));
  }
  const pole = (c, d) => divide(scale(d, -1), c);
  const api = Object.freeze({ add, subtract, scale, multiply, divide, modulus, distance, argumentFrom, pointOnCircle, modulusMembership, boundedArgumentMembership, apollonius, apolloniusMembership, apolloniusPoint, affine, reciprocal, mobius, pole });
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.LociRuntime = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
