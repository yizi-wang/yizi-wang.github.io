(function (root, factory) {
  "use strict";
  const runtime = factory();
  root.SpatialRuntime = runtime;
  if (typeof module === "object" && module.exports) module.exports = runtime;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const v = (x, y, z) => ({ x, y, z });
  const add = (a, b) => v(a.x + b.x, a.y + b.y, a.z + b.z);
  const sub = (a, b) => v(a.x - b.x, a.y - b.y, a.z - b.z);
  const scale = (a, k) => v(a.x * k, a.y * k, a.z * k);
  const dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
  const cross = (a, b) => v(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
  const norm = (a) => Math.hypot(a.x, a.y, a.z);
  const unit = (a) => scale(a, 1 / norm(a));
  const lerp = (a, b, t) => add(a, scale(sub(b, a), t));
  const close = (a, b, tolerance = 1e-9) => Math.abs(a - b) <= tolerance;

  const linePoint = (anchor, direction, parameter) => add(anchor, scale(direction, parameter));
  const planePoint = (anchor, first, second, lambda, mu) => add(anchor, add(scale(first, lambda), scale(second, mu)));
  const pointOnPlane = (point, normal, constant, tolerance = 1e-9) => close(dot(point, normal), constant, tolerance);

  const projectOnto = (vector, direction) => scale(direction, dot(vector, direction) / dot(direction, direction));
  const vectorAngle = (a, b) => Math.acos(Math.max(-1, Math.min(1, dot(a, b) / (norm(a) * norm(b)))));
  const parallelogramArea = (a, b) => norm(cross(a, b));
  const scalarTriple = (a, b, c) => dot(cross(a, b), c);
  const matrixFromColumns = (first, second, third) => [
    [first.x, second.x, third.x],
    [first.y, second.y, third.y],
    [first.z, second.z, third.z]
  ];
  const applyMatrix = (matrix, vector) => v(
    matrix[0][0] * vector.x + matrix[0][1] * vector.y + matrix[0][2] * vector.z,
    matrix[1][0] * vector.x + matrix[1][1] * vector.y + matrix[1][2] * vector.z,
    matrix[2][0] * vector.x + matrix[2][1] * vector.y + matrix[2][2] * vector.z
  );
  const determinant3 = (matrix) => (
    matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1])
    - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])
    + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
  );
  const inverse3 = (matrix) => {
    const determinant = determinant3(matrix);
    if (Math.abs(determinant) < 1e-10) return null;
    const a = matrix;
    return [
      [a[1][1] * a[2][2] - a[1][2] * a[2][1], a[0][2] * a[2][1] - a[0][1] * a[2][2], a[0][1] * a[1][2] - a[0][2] * a[1][1]],
      [a[1][2] * a[2][0] - a[1][0] * a[2][2], a[0][0] * a[2][2] - a[0][2] * a[2][0], a[0][2] * a[1][0] - a[0][0] * a[1][2]],
      [a[1][0] * a[2][1] - a[1][1] * a[2][0], a[0][1] * a[2][0] - a[0][0] * a[2][1], a[0][0] * a[1][1] - a[0][1] * a[1][0]]
    ].map((row) => row.map((value) => value / determinant));
  };
  const multiplyMatrices = (left, right) => left.map((row) => right[0].map((_, column) => (
    row.reduce((sum, value, index) => sum + value * right[index][column], 0)
  )));
  const matrixPowerApply = (matrix, vector, exponent) => {
    let result = vector;
    for (let index = 0; index < exponent; index += 1) result = applyMatrix(matrix, result);
    return result;
  };
  const linePlaneAngle = (direction, normal) => Math.asin(Math.max(0, Math.min(1, Math.abs(dot(direction, normal)) / (norm(direction) * norm(normal)))));
  const planePlaneAngle = (normalA, normalB) => Math.acos(Math.max(0, Math.min(1, Math.abs(dot(normalA, normalB)) / (norm(normalA) * norm(normalB)))));

  const pointLineFoot = (point, anchor, direction) => linePoint(anchor, direction, dot(sub(point, anchor), direction) / dot(direction, direction));
  const pointLineDistance = (point, anchor, direction) => norm(cross(sub(point, anchor), direction)) / norm(direction);
  const pointPlaneFoot = (point, anchor, normal) => sub(point, scale(normal, dot(sub(point, anchor), normal) / dot(normal, normal)));
  const pointPlaneDistance = (point, anchor, normal) => Math.abs(dot(sub(point, anchor), normal)) / norm(normal);
  const skewClosest = (anchorA, directionA, anchorB, directionB) => {
    const w = sub(anchorA, anchorB);
    const aa = dot(directionA, directionA);
    const ab = dot(directionA, directionB);
    const bb = dot(directionB, directionB);
    const aw = dot(directionA, w);
    const bw = dot(directionB, w);
    const denominator = aa * bb - ab * ab;
    if (close(denominator, 0)) return null;
    const s = (ab * bw - bb * aw) / denominator;
    const t = (aa * bw - ab * aw) / denominator;
    return { s, t, pointA: linePoint(anchorA, directionA, s), pointB: linePoint(anchorB, directionB, t) };
  };
  const skewDistance = (anchorA, directionA, anchorB, directionB) => {
    const normal = cross(directionA, directionB);
    return Math.abs(dot(sub(anchorB, anchorA), normal)) / norm(normal);
  };

  const cameraPresets = Object.freeze({
    oblique: { yaw: -0.68, pitch: 0.43, label: "Oblique" },
    front: { yaw: 0, pitch: 0, label: "Face-on axes" },
    normal: { yaw: -Math.PI / 4, pitch: Math.asin(1 / Math.sqrt(3)), label: "Along normal" },
    line: { yaw: -Math.atan(2), pitch: Math.asin(2 / 3), label: "Along line" },
    side: { yaw: -Math.PI / 2, pitch: .3, label: "Side depth" },
    reverse: { yaw: 2.45, pitch: .42, label: "Reverse oblique" },
    confirm: { yaw: -Math.PI / 4, pitch: .18, label: "Perpendicular check" }
  });
  const cameraFor = (name) => ({ ...(cameraPresets[name] || cameraPresets.oblique) });
  const project3D = (point, camera, options = {}) => {
    const yaw = camera.yaw;
    const pitch = camera.pitch;
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    const x1 = cy * point.x + sy * point.z;
    const z1 = -sy * point.x + cy * point.z;
    const y1 = cp * point.y - sp * z1;
    const depth = sp * point.y + cp * z1;
    const projectionScale = options.scale || 82;
    const perspective = options.perspective === undefined ? .055 : options.perspective;
    const perspectiveFactor = 1 / Math.max(.68, 1 - perspective * depth);
    return { x: (options.cx || 500) + projectionScale * x1 * perspectiveFactor, y: (options.cy || 330) - projectionScale * y1 * perspectiveFactor, depth, perspectiveFactor };
  };
  const cameraDirection = (camera) => v(-Math.cos(camera.pitch) * Math.sin(camera.yaw), Math.sin(camera.pitch), Math.cos(camera.pitch) * Math.cos(camera.yaw));

  const lineLanguage = Object.freeze({
    anchor: v(1, 2, 1),
    direction: v(2, -1, 1),
    secondPoint: v(3, 1, 2),
    shiftedAnchor: v(3, 1, 2),
    parameterMin: -1.6,
    parameterMax: 1.6
  });

  const planeLanguage = Object.freeze({
    anchor: v(1, 0, 1),
    first: v(2, 1, 0),
    second: v(0, 1, 2),
    normal: v(1, -2, 1),
    constant: 2,
    alternateAnchor: v(3, 1, 1),
    alternateFirst: v(2, 2, 2),
    alternateSecond: v(0, 1, 2)
  });

  const products = Object.freeze({
    a: v(3, 0, 0),
    b: v(2, 2, 1),
    dot: 6,
    angle: Math.acos(2 / 3),
    projection: v(2, 0, 0),
    perpendicular: v(0, 2, 1),
    cross: v(0, -3, 6),
    area: 3 * Math.sqrt(5)
  });

  const angles = Object.freeze({
    a: v(3, 0, 0),
    b: v(2, 2, 1),
    projection: v(2, 0, 0),
    perpendicular: v(0, 2, 1),
    lineDirection: v(3, 2, 2),
    planeNormal: v(0, 0, 1),
    firstPlaneNormal: v(0, 0, 1),
    secondPlaneNormal: v(0, 1, 1)
  });

  const areaVolume = Object.freeze({
    a: v(3, 0, 0),
    b: v(1, 2, 1),
    c: v(1, 0, 2),
    cross: v(0, -3, 6),
    area: 3 * Math.sqrt(5),
    triple: 12,
    tetrahedronVolume: 2
  });

  const distances = Object.freeze({
    line: { anchor: v(0, 0, 0), direction: v(2, 1, 0), point: v(1, 3, 2), foot: v(2, 1, 0), distance: 3 },
    plane: { anchor: v(0, 0, 0), normal: v(1, 2, 2), point: v(3, 0, 3), foot: v(2, -2, 1), distance: 3 },
    skew: {
      anchorA: v(0, 0, 0), directionA: v(1, 0, 0),
      anchorB: v(0, 1, 1), directionB: v(0, 1, 0),
      footA: v(0, 0, 0), footB: v(0, 0, 1), distance: 1
    }
  });

  const matrices3 = Object.freeze({
    transform: Object.freeze({
      basis: Object.freeze([v(1, 0, 0), v(0, 1, 0), v(0, 0, 1)]),
      columns: Object.freeze([v(2, 0, 0), v(1, 2, 0), v(0, 1, 1)]),
      singularThird: v(1, 1, 0),
      nullDirection: v(-.25, -.5, 1),
      sample: v(1, 1, 1)
    }),
    eigen: Object.freeze({
      matrix: Object.freeze([[2, 1, 0], [1, 2, 0], [0, 0, -2]]),
      vectors: Object.freeze([v(1, 1, 0), v(1, -1, 0), v(0, 0, 1)]),
      values: Object.freeze([3, 1, -2]),
      sample: v(1, .25, .75)
    })
  });

  return {
    v, add, sub, scale, dot, cross, norm, unit, lerp, close,
    linePoint, planePoint, pointOnPlane,
    projectOnto, vectorAngle, parallelogramArea, scalarTriple,
    matrixFromColumns, applyMatrix, determinant3, inverse3, multiplyMatrices, matrixPowerApply,
    linePlaneAngle, planePlaneAngle,
    pointLineFoot, pointLineDistance, pointPlaneFoot, pointPlaneDistance,
    skewClosest, skewDistance, cameraPresets, cameraFor, project3D, cameraDirection,
    lineLanguage, planeLanguage, products, angles, areaVolume, distances, matrices3
  };
});
