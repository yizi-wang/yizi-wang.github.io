# STATVERSE inference engine contract

Implementation branch: `statverse-inference-20261025`, based on
`65cf743c2f264cd063f2891e8edc3598605250be` of `statverse-lab-20261025`.
The implementation is `statverse-lab/src/inference.js`: a standalone browser/Node
ES module with no dependencies, imports, network calls, randomness, DOM access,
global mutable cache or input mutation. It does not import `statistics.js`, so
there is no circular dependency. The UI must explicitly import this new module;
the existing engine and UI are unchanged. This is implementer verification;
independent mathematical review remains a parent-task responsibility.

Integration follow-up: the existing `statverse-lab/scripts/build.mjs` copies
an explicit four-file whitelist. When the main developer imports the engine
from the UI, they must add `src/inference.js` to that whitelist. That script
is outside this branch's authorized three-file change set; this branch alone
does not wire or package a new UI feature.

## Pearson IAL scope

The curriculum reference is the [official Pearson Edexcel IAL Mathematics
specification, Issue 3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf),
printed pp. 59, 61–62 (PDF pp. 65, 67–68), checked 25 October 2026.

| Engine coverage | Official content | Treatment |
| --- | --- | --- |
| Binomial/Poisson one/two-tailed critical regions | S2 §4.3–4.6 | Exact distribution probabilities; explicit size |
| Normal mean CI and test, known variance | S3 §3.4–3.5 | Exact under the stated Normal model |
| CLT / estimated variance | S3 §3.6, §3.8 | Explicit large-sample Normal approximation |
| Two independent Normal means, known variances | S3 §3.7 | Independent samples required |
| Pearson χ² GOF / contingency, fitted-parameter df | S3 §4.1–4.2 | Approximation; categories with E<5 need pooling |
| p-values, Type I/II and power | Not explicitly listed in these content sections | Enrichment; no claim of a separately mandated syllabus item |

S3 does not require the t distribution or Yates correction. Neither is applied.
GOF accepts caller-supplied categories, enabling discrete uniform, Binomial,
Poisson, Normal and continuous uniform model fits after appropriate binning.
Parameter estimation and category construction are the caller's responsibility.

## Common conventions and numerical domains

- No coercion: numeric strings, NaN, missing required numbers and nonfinite
  finite-domain inputs throw `RangeError`. Array inputs are ordinary JS arrays.
  Object APIs accept an options object; JS itself can throw `TypeError` for a
  nonobject such as `null`. There is no hidden invalid-input fallback.
- Discrete `k` is a safe integer in `[-100000, 100000]`. Fractional queries
  throw; the engine never silently floors a count. Valid distribution queries
  outside the mathematical support return exact 0/1. Test observations must
  additionally lie in the distribution's support (`0..n`, or `0..100000`).
- Binomial `n`: integer `0..10000`; `p`: finite `0..1`. Poisson `lambda`:
  finite `0..10000`. Unsupported ranges throw rather than approximate.
- Every inference `alpha` defaults to `.05`, supported from `1e-12` through
  `1 - 1e-12`, inclusive. Alternatives are exactly `"less"`, `"greater"`,
  `"two-sided"`; default is `"two-sided"`.
- `CDF(k) = P(X <= k)`. **Discrete survival(k) = P(X >= k)**, inclusive.
  Thus `CDF(k) + survival(k+1) = 1`, and `CDF(k) + survival(k) = 1 + PMF(k)`.
  This differs from the common library `sf(k) = P(X > k)` convention.
- `*Tails` returns `{ lower, upper, logLower, logUpper }`, using natural logs.
  Logs preserve tiny nonzero probabilities when a binary64 probability rounds
  to zero. Exact impossible events have probability 0 and log `-Infinity`.
- `INFERENCE_LIMITS` is a frozen, exported description of the supported bounds.
  Floating point comparisons use computed probabilities without an added
  acceptance tolerance. No universal correctly-rounded or interval-arithmetic
  guarantee is claimed at an alpha exactly on a numerical rounding boundary.

## Discrete API

Scalar signatures:

```js
binomialPMF(k, n, p)          // number
binomialLogPMF(k, n, p)       // number, including -Infinity
binomialCDF(k, n, p)          // P(X <= k)
binomialSurvival(k, n, p)     // P(X >= k)
binomialTails(k, n, p)        // both inclusive tails and their logs
binomialPValue(k, n, p, alternative = "two-sided")

poissonPMF(k, lambda)
poissonLogPMF(k, lambda)
poissonCDF(k, lambda)
poissonSurvival(k, lambda)
poissonTails(k, lambda)
poissonPValue(k, lambda, alternative = "two-sided")
```

`binomialDistribution(n, p)` builds once, then exposes a frozen query object
`{ n, p, pmf(k), logPMF(k), cdf(k), survival(k), tails(k) }`. Use this factory
for charts or repeated queries; a scalar helper rebuilds the table each call.
Construction is O(n) time/space; queries are O(1). Private typed arrays cannot
be mutated through the public object. Degenerate `n=0`, `p=0/1`, `lambda=0`
are exact point masses. An impossible observation has two-sided p-value 0;
its one-sided p-value is 0 only in the direction of that observation and is
1 for the opposite direction. For example, Binomial(20,0) or Poisson(0)
observed at k=1 has less p=1 and greater/two-sided p=0. Binomial(20,1)
observed at k=19 has less/two-sided p=0 and greater p=1. The test-observation
domain restrictions above still apply.
Negative Poisson PMF/CDF queries return 0, and their survival returns 1.

Two-sided p-values use **doubled minimum inclusive tail**:
`min(1, 2 * min(P(X<=k), P(X>=k)))`. They do not use probability ordering.
This convention is an explicit product choice, not a claim that Pearson
prescribes this p-value algorithm.

```js
binomialCriticalRegion({ n, p, alpha = .05, alternative = "two-sided" })
poissonCriticalRegion({ lambda, alpha = .05, alternative = "two-sided" })
// => {
//   distribution, parameters, alternative, nominalAlpha, actualSize,
//   lower: null | { max, nominalAlpha, actualSize },
//   upper: null | { min, nominalAlpha, actualSize }, convention
// }

binomialTest({ k, n, p, alpha = .05, alternative = "two-sided" })
poissonTest({ k, lambda, alpha = .05, alternative = "two-sided" })
// => { statistic: k, pValue, tails, pValueConvention,
//      criticalRegion, reject, approximate: false }
```

Regions are inclusive: reject for `k <= lower.max` or `k >= upper.min`.
`null` means an empty tail. Each nonempty boundary is the most inclusive
integer boundary whose computed probability does not exceed its allocation.
Two-sided tests allocate alpha/2 to each tail, without transferring unused
allocation; one-sided tests allocate all alpha to the selected tail. The sum
is `actualSize <= nominalAlpha`. Impossible support points can form a region
of size 0 under a degenerate null. `reject` uses region membership; the UI
should display the returned result instead of rebuilding its own boundary.

Regression examples:

| Null / upper test at 5% | First rejecting count | Actual size |
| --- | --- | --- |
| Binomial(20, .1) | 5 | .04317449528446339 |
| Poisson(4) | 9 | .02136343448798414 |

For Poisson(4), `P(X>=8)=.0511336157928473`, so 8 does not reject.
For Bernoulli(.05) at alpha .05, `k=1` rejects on a greater alternative.

```js
binomialPower({ n, p0, p1, alpha = .05, alternative = "two-sided" })
poissonPower({ lambda0, lambda1, alpha = .05, alternative = "two-sided" })
// => { power, typeII, typeI, criticalRegion,
//      approximate: false, curriculum: "enrichment" }
```

The region is fixed using the null parameter, then evaluated under the single
specified alternative. `typeI` is the actual null size and `typeII=1-power`.
There is no parameter search, randomized rejection, Normal-power function or
continuous composite-alternative calculation. A tiny Type II error can round
to zero when power rounds to 1; no log Type II error is provided.

## Normal and z API

```js
normalCDF(z)
normalSurvival(z)            // P(Z >= z), equal to P(Z > z) for continuous Z
normalTails(z)
normalInverseCDF(p)          // standard Normal quantile
normalPValue(z, alternative = "two-sided")

zTestOneMean({ mean, nullMean = 0, variance, n,
  varianceType = "known", largeSample = false,
  alpha = .05, alternative = "two-sided", confidenceLevel = .95 })

zTestTwoMeans({ meanX, meanY, varianceX, varianceY, nX, nY,
  nullDifference = 0, varianceType = "known", largeSample = false,
  alpha = .05, alternative = "two-sided", confidenceLevel = .95 })
```

`normalCDF/Survival/Tails/PValue` accept finite z and ±Infinity; NaN and
non-numbers throw. Quantiles accept p in `[0,1]`, with endpoint results
±Infinity. Positive and negative infinite quantiles are intentional.

Means/null values must be finite. Variances are **variances, not standard
deviations**, and must be finite and strictly positive. Zero variance inference
is unsupported and throws. Sample sizes are integers `1..1e9`, or `2..1e9`
when variance is estimated. Derived SE, z and interval endpoints must remain
finite with SE>0, otherwise the function throws rather than returning NaN.
Confidence levels are numbers in `[1e-12, 1 - 1e-12]`.

Known variance with `largeSample:false` assumes a Normal population and
independent observations. Two means additionally assumes independent samples.
`varianceType:"estimated"` requires explicit `largeSample:true`; supply the
unbiased sample variance (divisor n-1). Known variance with `largeSample:true`
uses a CLT approximation for a non-Normal population. The caller must assess
the large-sample assumption; the engine does not invent a universal n cutoff.
The two-sample API uses one variance type for both samples. Mixed known/estimated
variance inputs, paired data and t inference are outside this API.

Results contain `{ estimate, nullValue, standardError, z, pValue, alpha,
alternative, reject, approximate, method, confidenceInterval }`. The interval
is `{ lower, upper, confidenceLevel, kind:"two-sided", criticalValue }` and is
always two-sided, independently of the selected test alternative. A one-sided
test must not be presented as dual to this two-sided interval.
`approximate` is true exactly when `largeSample:true`.

The one-mean example with mean 496, nullMean 500, variance 100 and n=25 gives
SE=2, z=-2, lower p=.0227501319481792, two-sided p=.0455002638963584,
and 95% CI [492.0800720309199, 499.9199279690801]. Two means 100/97,
variances 100/64 and sample sizes 25/16 give SE=√8, z=1.0606601717798212
and two-sided p=.2888443663464849.

## χ² and categorical API

```js
chiSquareCDF(x, df)
chiSquareSurvival(x, df)
chiSquareTails(x, df)
contingencyTest(observed, { alpha = .05 } = {})
goodnessOfFit({ observed, probabilities, expected,
  fittedParameters = 0, alpha = .05 })
```

Chi-square x is in `[0,1e15]` or +Infinity; df is a finite real in `[1,10000]`
(test-produced df is integer). Negative x, unsupported df or NaN throw.
At x=0, CDF=0 and survival=1; at +Infinity the results reverse.

Counts must be nonnegative safe integers; each aggregate total is at most
1e12. Negative, fractional or nonfinite counts throw. No weights, percentages,
missing-data conversion, fitted-parameter inference or continuity correction
are applied.

Contingency tables must be rectangular, with 2..100 rows and columns.
For N>0 and positive row/column margins:
`E[i][j]=(rowTotal[i]*columnTotal[j])/N`, each contribution is `(O-E)^2/E`,
the statistic is their sum and df=(rows-1)(columns-1). The result includes
`total, rowTotals, columnTotals, expected, contributions`.
Integer margins are converted to BigInt. E<5 is tested exactly as `r*c < 5*N`.
For each contribution the integer residual `D=O*N-r*c` is formed exactly, then
`D^2/(N*r*c)` is converted to a floating point statistic.
This avoids subtracting nearly equal rounded large counts. Display expected
counts use the exact rational's integer and fractional parts. A displayed E
may round to O even when its exact residual is nonzero: the UI should use the
returned contributions, not recompute them from rounded displayed expected
counts. Exact E=5 remains 5 and is suitable; no tolerance promotes a low cell.
An all-zero table returns `valid:false, status:"invalid-total"`; any zero
margin returns `valid:false, status:"invalid-zero-margin"`. Both return null
statistic, expected, contributions, pValue, asymptoticPValue and reject.
Margins and df remain available for diagnosis; the caller must correct the
table deliberately rather than deleting a row/column silently.

GOF requires a positive observed total, 2..10001 categories and exactly one
of `probabilities` or `expected`. Lengths must match; all model probabilities
and expected frequencies must be strictly positive. Probabilities must sum
to 1 and expected counts to N, within relative tolerance 1e-12. They are
**not renormalized**. Structural zero categories must be explicitly removed
by the caller; observed=0 with positive expected is valid. The result copies
expected frequencies and supplies each contribution.
`fittedParameters` is an integer `0..categories-2`, and
df=categories-1-fittedParameters must remain positive. Zero total, zero
expected, inconsistent sums, impossible df, expected underflow or a statistic
outside `[0,1e15]` throws. For infinite-support distributions include complete
tail bins; do not truncate then silently renormalize the model.

For either categorical test, a computable result includes `valid:true,
status, statistic, df, approximate:true, method:"pearson-chi-square", alpha,
minExpected, smallExpectedCount, approximationAppropriate, asymptoticPValue,
pValue, reject`. `valid` describes well-defined arithmetic, not model validity.

- All E>=5: `status:"ok"`, `approximationAppropriate:true`, pValue is the
  χ² survival approximation and reject compares it with alpha. Independent
  observations and the statistical model remain caller assumptions.
- Any E<5: `status:"needs-pooling"`, `approximationAppropriate:false`,
  **pValue:null and reject:null**. `asymptoticPValue` remains explicitly
  diagnostic and must not be displayed as an approved inference. The engine
  never pools categories automatically; the caller supplies meaningful pooled
  categories and the corresponding estimated-parameter count.

`[[16,4],[4,16]]` gives E=10 in every cell, statistic 14.4, df=1 and
p=.000147802310334454. Uniform GOF `[8,9,10,13]` gives statistic 1.4,
df=3 and p=.7055347312040912.

## Algorithms, accuracy and verification

Binomial probabilities use mode-centered recurrence and compensated
normalization/tail sums; log weights use a separately compensated recurrence.
This avoids beginning at a tiny P(X=0). Bernoulli probabilities preserve the
supplied p directly. Poisson and χ² tails use regularized incomplete gamma:
lower series / upper continued fraction, computing small tails directly.
A centered Stirling expression avoids large-argument log-gamma cancellation.
Normal tails use the gamma identity. Inverse Normal uses a compensated
central-integral series with Newton refinement for p in [.25,.75], preserving
the doubles adjacent to p=.5, and bisects log survival in the tails. For
confidence levels <=.5, the z interval critical value inverts confidence/2
as central mass directly, avoiding cancellation in (1-confidence)/2. The
supported confidence domain remains `[1e-12, 1 - 1e-12]`; ordinary 95% CI
behavior is unchanged.
Iterations are capped, and nonconvergence throws `RangeError`.
Numerical definitions and identities can be checked against
[NIST DLMF §8.2](https://dlmf.nist.gov/8.2) and
[§8.9](https://dlmf.nist.gov/8.9); the curriculum mapping above uses Pearson.

This is binary64 numerical computation, not symbolic exact arithmetic.
Probabilities below the representable range can be 0; logs remain useful.
Relative accuracy is not promised for subnormal probabilities (below roughly
2.23e-308); compare log probabilities instead. Extremely large Normal z can
overflow z², returning a zero small tail and log -Infinity. Complementary
probabilities near 1 can round to 1; use the direct opposite-tail function.
Do not compute a tiny upper tail as `1-CDF`.
CI critical values are accurate within floating point tolerance, but strict
monotonicity for every pair of adjacent binary64 confidence levels is not
guaranteed: at .49999999999994543 and .4999999999999455 the current solver
can decrease by one ulp. Both results remain within 5e-15 relative of their
100-digit references; this local rounding limitation does not describe an
error in ordinary 95% intervals.

Checked-in tests have frozen SciPy 1.17.0 references, exact BigInt rational
enumeration, analytic identities, boundary maximality/conservativeness,
degenerate cases, reflection/recurrence/moment checks, transformations,
permutations, assumption states, input immutability and explicit rejection
of unsupported inputs. They need only Node, with no Python/runtime dependency:

```bash
node --test statverse-lab/tests/inference.test.mjs
npm --prefix statverse-lab test
```

The reference convention is `scipy.stats.binom.sf(k-1,n,p)` and
`scipy.stats.poisson.sf(k-1,lambda)` for inclusive survival. There are 276
frozen reference rows: 39 Binomial, 59 Poisson, 80 χ², 19 Normal, 16 quantile
and 63 critical-region rows. Additional deterministic grid comparisons and
their measured errors are reported in the implementation handoff; these are
empirical checks, not proofs of a bound over every floating point input.
Target ordinary-probability accuracy across the documented domain is 1e-10
relative above 1e-300, with absolute tolerances near 0/1. Tests intentionally
exercise tails much smaller than standard browser CDF approximations retain.

Initial implementation verification at `840f850` on 25 October 2026
(not independent approval):

- `npm --prefix statverse-lab test`: 34/34 PASS (25 inference groups and 9
  existing groups), including 276 frozen rows and high-precision edge cases.
- An additional 4,100-case deterministic sweep, Python random seed 20261025,
  against SciPy 1.17.0: no discrepancy above 1e-10 relative for reference
  probabilities >1e-300. Largest relative discrepancies: Binomial 3.63e-13,
  Poisson 3.28e-11, χ² 6.40e-12, Normal 4.21e-13. A discrepancy with SciPy
  is not itself an error bound; 100-digit mpmath checks confirm the engine's
  more accurate result in the largest Poisson discrepancy case.
- Chromium 151.0.7922.173 imported the actual ES module over a local HTTP
  server. Binomial/Poisson boundaries, z/CI, contingency p-value, low-count
  state, a tiny χ² lower tail and an extreme Normal quantile passed smoke
  assertions. This was a module check, not a new UI-feature acceptance test.
- Root Astro compatibility build: 289 pages, PASS, 38.21 seconds, using
  `ASTRO_TELEMETRY_DISABLED=1 npm run build`. No deployment was performed.

Review follow-up M1–M3, 25 October 2026 (implementer regression verification;
the parent task owns independent re-review):

- M1: multiply integer margins before division. For `[[10,0],[67,77]]`,
  E is exactly `[[5,5],[72,72]]`, statistic=385/36, df=1,
  p≈.0010745773786670282, status=`ok`, reject=true. Transposition preserves
  the result. `[[5,5],[72,72]]` and its transpose give statistic=0, p=1.
  Genuine E=[2,3,95] still needs pooling; caller-pooled E=[5,95] is suitable.
- M2: central quantile inversion and direct central CI mass fix the relative
  accuracy of values extremely close to p=.5 and confidence=1e-12. No input
  range was narrowed. Confidence levels 1e-8, .8, .95, .99, 1-1e-12 and
  extreme tail quantiles remain covered; the ordinary 95% CI regression passes.
- M3: documented the direction dependence of impossible-observation one-sided
  p-values; the existing algorithm is unchanged and all alternatives are tested.
- `npm --prefix statverse-lab test`: 37/37 PASS (28 inference groups plus
  9 existing groups). Three additional groups specifically regress M1–M3.
- Additional deterministic seed-20261025 check: 931 Normal quantiles and 407
  CI critical values against mpmath 1.3.0 at 400 decimal digits, maximum relative
  discrepancy 8.67e-16. For 1,600 contingency tables, all E<5 classifications
  agree with exact Fraction arithmetic; maximum statistic relative discrepancy
  is 3.48e-14. These are empirical checks, not universal error bounds.
- Chromium 151.0.7922.173 module smoke passed M1, its transpose, the two
  adjacent-to-.5 quantiles, confidence=1e-12 and all degenerate-null directions.
- Root Astro compatibility build passed again: 289 pages, 45.07 seconds,
  with `ASTRO_TELEMETRY_DISABLED=1 npm run build`. No deployment was performed.

Adjacent-domain follow-up R1, 25 October 2026: contingency contributions now
use exact BigInt residuals, not floating point subtraction of O and E. For
`[[5,6],[454545454536,545454545443]]`, statistic is
`3.666666666780211e-25`, p is `.9999999999995168`, and reject=false at
alpha=`1-1e-12`. Exact E<5 classification and the M1 boundary/transpose
regressions remain covered. The additional tiny-CI one-ulp behavior is
recorded above rather than claimed to be fixed.
R1 verification: 38/38 inference/existing tests PASS (the new sampling-design
work is excluded from this fix commit); 1,600 Fraction table comparisons PASS,
maximum statistic relative discrepancy 2.94e-16; Chromium R1 and M1–M3 smoke
PASS. Root Astro compatibility build again passed 289 pages; no deployment.
