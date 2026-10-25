import test from "node:test";
import assert from "node:assert/strict";
import {
  identityGroups,
  mergeAdjacent,
  evaluateContingency,
  evaluateGOF,
  fixedMarginShuffle,
} from "../src/categorical-model.js";
import { seededRandom } from "../src/statistics.js";
const near = (a, b, t = 1e-10) =>
  assert.ok(Math.abs(a - b) < t, `${a} vs ${b}`);
test("meaningful whole-column pooling keeps O/E aligned and enables low-E reference", () => {
  const o = [
      [27, 1, 2],
      [23, 4, 3],
    ],
    rows = identityGroups(2),
    cols = identityGroups(3),
    a = evaluateContingency(o, rows, cols);
  assert.equal(a.status, "needs-pooling");
  assert.equal(a.pValue, null);
  assert.deepEqual(a.expected, [
    [25, 2.5, 2.5],
    [25, 2.5, 2.5],
  ]);
  const b = evaluateContingency(o, rows, mergeAdjacent(cols, 1));
  assert.deepEqual(b.grouped, [
    [27, 3],
    [23, 7],
  ]);
  assert.deepEqual(b.expected, [
    [25, 5],
    [25, 5],
  ]);
  near(b.statistic, 1.92);
  assert.equal(b.df, 1);
  assert.equal(b.status, "ok");
  assert.deepEqual(o, [
    [27, 1, 2],
    [23, 4, 3],
  ]);
});
test("uniform and specified GOF independent numeric oracles and probability validation", () => {
  const a = evaluateGOF([8, 9, 10, 13]);
  near(a.statistic, 1.4);
  near(a.pValue, 0.7055347312040912);
  assert.equal(a.df, 3);
  assert.throws(
    () =>
      evaluateGOF([8, 9, 10, 13], {
        model: "specified",
        probabilities: [0.1, 0.1, 0.1, 0.1],
      }),
    RangeError,
  );
});
test("raw-count Binomial fit plus pooling retains description but withholds unsupported calibration", () => {
  const o = [12, 38, 36, 14],
    g = identityGroups(4),
    a = evaluateGOF(o, { model: "binomial3", fit: true, groups: g }),
    b = evaluateGOF(o, {
      model: "binomial3",
      fit: true,
      groups: mergeAdjacent(g, 0),
    });
  near(a.parameter, 152 / 300);
  near(b.parameter, a.parameter);
  assert.equal(a.df, 2);
  assert.equal(b.df, 1);
  assert.equal(b.referenceDf, null);
  assert.equal(b.referenceDistributionSupported, false);
  assert.equal(b.status, "unsupported-fitted-pooling-calibration");
  assert.equal(b.approximationAppropriate, false);
  assert.equal(b.pValue, null);
  assert.equal(b.reject, null);
  assert.equal(b.asymptoticPValue, null);
  near(
    a.expected.reduce((s, x) => s + x, 0),
    100,
  );
  near(
    b.expected.reduce((s, x) => s + x, 0),
    100,
  );
});
test("fixed-margin randomization preserves margins, supports ties and seed reproducibility", () => {
  const a = [
      [27, 1, 2],
      [23, 4, 3],
    ],
    rng = seededRandom("shuffle"),
    rng2 = seededRandom("shuffle");
  for (let i = 0; i < 100; i++) {
    const t = fixedMarginShuffle(a, rng);
    assert.deepEqual(t, fixedMarginShuffle(a, rng2));
    assert.deepEqual(
      t.map((r) => r.reduce((s, x) => s + x, 0)),
      [30, 30],
    );
    assert.deepEqual(
      t[0].map((_, j) => t.reduce((s, r) => s + r[j], 0)),
      [50, 5, 5],
    );
  }
  assert.throws(
    () =>
      fixedMarginShuffle(
        [
          [500, 1],
          [1, 1],
        ],
        rng,
      ),
    RangeError,
  );
});
test("original invalid counts or probabilities cannot be concealed by pooling", () => {
  assert.throws(
    () => evaluateGOF([0.5, 0.5, 1, 2], { groups: [[0, 1], [2], [3]] }),
    RangeError,
  );
  assert.throws(
    () =>
      evaluateGOF([1, 2, 3, 4], {
        model: "specified",
        probabilities: [-0.1, 0.6, 0.2, 0.3],
        groups: [[0, 1], [2], [3]],
      }),
    RangeError,
  );
  assert.throws(
    () =>
      evaluateContingency(
        [
          [1.5, 2.5],
          [3, 4],
        ],
        identityGroups(2),
        identityGroups(2),
      ),
    RangeError,
  );
  assert.throws(
    () => evaluateGOF([1, 2, 3, 4], { groups: [[0, 1], [1], [3]] }),
    RangeError,
  );
});

test("independent fitted-pooling P1 oracle is withheld, unpool and fixed p recover supported routes", () => {
  const o = [7263, 2491, 238, 8],
    g = identityGroups(4),
    pooled = mergeAdjacent(g, 0),
    a = evaluateGOF(o, { model: "binomial3", fit: true, groups: pooled });
  near(a.parameter, 0.0997, 1e-12);
  near(a.statistic, 3.9346774144922705, 1e-10);
  assert.equal(a.pValue, null);
  assert.equal(a.reject, null);
  assert.equal(a.referenceDf, null);
  assert.equal(a.approximationAppropriate, false);
  const b = evaluateGOF(o, { model: "binomial3", fit: true, groups: g });
  assert.equal(b.df, 2);
  near(b.pValue, 0.0544302, 1e-7);
  assert.equal(b.reject, false);
  const c = evaluateGOF(o, {
    model: "binomial3",
    p: 0.1,
    fit: false,
    groups: pooled,
  });
  assert.equal(c.df, 2);
  assert.equal(c.referenceDistributionSupported, true);
  assert.ok(c.pValue !== null);
  assert.throws(
    () =>
      evaluateGOF(o, {
        model: "binomial3",
        fit: true,
        groups: [
          [0, 1],
          [2, 3],
        ],
      }),
    RangeError,
  );
});
