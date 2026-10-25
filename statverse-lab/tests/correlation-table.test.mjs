import { test } from "node:test";
import assert from "node:assert/strict";
import {
  correlationCritical,
  compareAtTablePrecision,
} from "../src/correlation-tables.js";
import { pearson, ranks } from "../src/statistics.js";
const decide = (method, n, r, tail = "two-sided", alpha = 0.05) =>
  compareAtTablePrecision(r, correlationCritical(method, n, tail, alpha));
test("independent official PMCC tail, direction and equality vectors", () => {
  assert.equal(correlationCritical("pearson", 10, "greater").critical, 0.5494);
  assert.equal(
    correlationCritical("pearson", 10, "two-sided").critical,
    0.6319,
  );
  assert.equal(decide("pearson", 10, 0.6, "greater").reject, true);
  assert.equal(decide("pearson", 10, 0.6).reject, false);
  assert.equal(decide("pearson", 10, -0.7, "greater").reject, false);
  assert.equal(decide("pearson", 10, -0.7, "less").reject, true);
  assert.equal(decide("pearson", 10, 0.6319).reject, true);
  assert.equal(decide("pearson", 10, 0.6318).reject, false);
});
test("upward-rounded no-ties Spearman boundary includes equality", () => {
  const xs = [1, 2, 3, 4, 5, 6],
    rs = pearson(ranks(xs), ranks([2, 1, 4, 3, 6, 5]));
  assert.ok(Math.abs(rs - 29 / 35) < 1e-12);
  assert.equal(decide("spearman", 6, rs, "greater").reject, true);
  assert.equal(decide("spearman", 6, rs, "two-sided").reject, false);
  assert.equal(decide("spearman", 6, 31 / 35).reject, true);
  assert.equal(decide("spearman", 5, 0.9, "greater").reject, true);
  assert.equal(decide("spearman", 5, 0.9).reject, false);
  assert.equal(decide("spearman", 4, 1, "greater").reject, true);
});
test("printed dashes, absent columns/rows and unimplemented entries are distinct", () => {
  assert.equal(
    correlationCritical("spearman", 4, "two-sided").reason,
    "printed-dash",
  );
  assert.equal(
    correlationCritical("spearman", 10, "two-sided", 0.01).reason,
    "no-official-column",
  );
  assert.equal(correlationCritical("pearson", 31).reason, "no-official-row");
  assert.equal(
    correlationCritical("pearson", 25).reason,
    "not-implemented-row",
  );
  assert.equal(
    correlationCritical("pearson", 7, "greater", 0.01).reason,
    "not-implemented-cell",
  );
  assert.equal(
    correlationCritical("spearman", 10, "two-sided", 0.02).critical,
    0.7455,
  );
  assert.equal(decide("spearman", 10, 0.6363636363636).reject, false);
});
