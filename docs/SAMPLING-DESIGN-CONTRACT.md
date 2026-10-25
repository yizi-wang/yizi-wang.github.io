# Sampling-design support for STATVERSE

Standalone ES module: `statverse-lab/src/sampling-design.js`. It has no imports,
I/O, DOM, global random state or dependencies. This addition does not change
`inference.js`, the UI or build scripts. Main development can integrate it
after independent review; add `src/sampling-design.js` to the static build's
copy whitelist if the UI imports it. No integration/deployment is claimed.

The course mapping is [Pearson IAL Mathematics, Issue 3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf),
S3 §2.1–2.2 (sampling methods) and §1.1 (independent Normal combinations).
The exact finite-population design calculations are supplementary support;
this document does not claim that every formula is explicitly mandated by
the specification. Mathematical cross-checks include Statistics Canada's
[probability sampling explanation](https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch13/prob/5214899-eng.htm)
and [stratified estimator/variance formulas](https://www150.statcan.gc.ca/n1/pub/12-001-x/2019002/article/00006/02-eng.htm).

## Inputs and common output

Population is an ordinary array of 1..10000 records:
`{ id, stratum, value, accessibility }`. IDs are unique; ID/stratum are
nonblank strings of at most 64 characters, compared exactly. Values are finite
numbers with |value|<=1e6. Accessibility is a finite score in [0,1], used only
by the convenience selector. It is a rank score, not a response probability
or eligibility threshold. All other fields are ignored. **Array order is the
sampling frame order**; there is no separate sort/order property.

At most 100 population strata are supported. They are derived from records
and therefore nonempty; no declared empty population strata are accepted or
silently inserted. An empty population is invalid. Sample n is an integer in
1..N. Missing/invalid fields, duplicate IDs, sparse arrays and unsupported
ranges throw `RangeError`; inputs are not coerced or mutated. A nonobject
options argument such as null may throw JavaScript's `TypeError`.

Random selectors require an explicit nonempty **string** seed, <=128 characters.
Each call starts its own Mulberry32 stream from a deterministic FNV-style
Unicode-code-point seed hash. Integer draws use rejection
before modulo reduction, then partial Fisher–Yates selection. Same population,
frame order, n, method and seed reproduce the result. These are pseudorandom
teaching draws, not cryptographic lotteries. Design expectations below refer
to ideal uniform draws, not an assertion that a collection of chosen seeds
proves unbiasedness. Quota convenience is deterministic and takes no seed.

```js
makeDemoPopulation(order = "periodic") // "periodic" or "balanced"; fresh records
finitePopulationSummary(population)
proportionalAllocation({ population, n })
simpleRandomTheory({ population, n })
proportionalStratifiedTheory({ population, n })
systematicRandomStartTheory({ population, n })

simpleRandomSample({ population, n, seed })
proportionalStratifiedSample({ population, n, seed })
systematicRandomStartSample({ population, n, seed })
quotaConvenienceSample({ population, n })
```

Samples contain `method, estimator, populationSize, sampleSize, selected,
selectedIds, sampleMean, populationMean, estimate, error, replacement:false,
samplingVariance, standardError, designUnbiased, randomized, probabilitySample,
status, seed, theory`. Selected records are copies with a zero-based
`frameIndex`. `error=estimate-populationMean` describes this realization,
**not evidence of design bias**. Census estimates equal the known population
mean exactly. `sampleMean` is always the raw sample mean; a stratified/quota
`estimate` uses population weights instead. Missing-stratum estimates/errors
are null. `theory` is the corresponding design result, or null for convenience.

## Designs and exact finite-population theory

`finitePopulationSummary` returns N, mean, `varianceN` (denominator N),
`varianceNMinus1` (denominator N-1, null for N=1), and stratum summaries with
population weights. Variances use centered, compensated sums. Design SEs use
the **entire known fictional population**, not a sample-based variance estimate.

- **SRS without replacement:** partial Fisher–Yates picks n distinct units.
  Theoretical E(sample mean)=population mean and
  `Var(mean) = (N-n)/N * S²/n`, where S² has denominator N-1. Equivalently,
  for N>1, `Var(mean) = varianceN/n * (N-n)/(N-1)`. This finite-population
  correction is required here; IID variance/n is inappropriate. A census,
  singleton population or constant population has design SE=0.
- **Proportional stratified:** largest remainders round `n*N_h/N` to integer
  quotas summing to n. Integer remainders make ties exact; ties follow strata's
  first appearance in the frame. The plan exposes ideal, quota, remainder,
  weight, `exactProportions`, tie rule and `unrepresentedStrata`. It does not
  force a minimum quota of one, which could silently change the chosen rule.
  Independent SRS without replacement is performed within strata. The
  estimator is `sum((N_h/N)*sampleMean_h)`, including after rounding. Its
  variance is `sum((N_h/N)^2 * (N_h-n_h)/N_h * S_h²/n_h)`.
  Census singleton strata contribute zero. Theory exposes each contribution.
- **Unrepresented stratum:** if any quota is zero, the random within-stratum
  selection still returns n units but status is `unrepresented-stratum`.
  Full-population estimate, expectedMean, error, variance and SE are null;
  `designUnbiased:null`, `probabilitySample:false`. `randomized:true` only
  describes selection inside covered strata. No weight renormalization or
  invented mean fills the missing stratum. Increase n or revise the plan
  deliberately; arbitrary/custom allocations are outside this version.
- **Systematic random start:** only exact N divisible by n is supported.
  Interval k=N/n; start is uniform on integers 0..k-1; select start+j*k.
  Theory lists every possible start, its indices, probability and mean. Each
  unit appears in exactly one start, so E(mean)=population mean, for **any
  fixed frame ordering**. Variance/SE are computed across these k means,
  not from an IID or SRS formula. Ordering can greatly change variance;
  periodicity does not make every uniform-random-start design biased.
- **Quota convenience:** uses the same integer plan, then selects greatest
  accessibility scores within each stratum; ties follow frame order. This is
  one explicit convenience mechanism, not a definition of all quota sampling.
  It returns a population-weighted descriptive estimate, `randomized:false`,
  `probabilitySample:false`, `designUnbiased:null`, and no design SE/theory.
  There is no implication that every quota scheme has a fixed bias, its sign
  or magnitude. Its known-population error can change or vanish when the
  selection mechanism/values change. The plan is exposed as `allocation`.

## Fictional scenario and hand/enumeration oracles

`SAMPLING_DEMO` describes Orbit Academy: 12 entirely invented students in
Amber/Cobalt/Violet groups of sizes 6/4/2; target is fictional task points.
`SAMPLING_LIMITS` exports the frozen bounds. No real student records are used.

Population mean is 275/6; varianceN=22625/36 and S²=22625/33. At n=6:

| Design | Mathematical design variance | Relevant behavior |
| --- | --- | --- |
| SRS | 22625/396 | All 924 subsets enumerated in tests |
| Proportional stratified, quotas 3/2/1 | 1355/108 | All 240 within-stratum combinations enumerated |
| Systematic, periodic frame | 100 | Start means 215/6 and 335/6; design mean 275/6 |
| Systematic, balanced frame | 0 | Same units/values/accessibility, different order |
| This quota convenience mechanism | No probability-sampling SE | Estimate 215/6, error -10 |

Reversing accessibility rankings gives quota error +10; constant target values
give error zero. This demonstrates mechanism-dependent error, not a universal
quota-bias theorem. At n=5, integer quotas are 2/2/1: all 180 combinations
give the weighted estimator expectation 275/6. The raw unweighted mean has
expectation 50, demonstrating why population weights matter after rounding.
At n=3 quotas are 2/1/0 and the full-population estimator is unavailable.

## Independent Normal linear combinations

```js
independentNormalCombination({
  terms: [{ id: "X", coefficient: 2, mean: 3, variance: 4 },
          { id: "Y", coefficient: -3, mean: 5, variance: 9 }],
  constant: 7, independent: true
}) // mean=-2, variance=97, sd=sqrt(97)
```

Requires explicit `independent:true`, 1..100 terms with unique nonblank IDs,
finite coefficients/means/constant and finite nonnegative **variances**.
Mean is `constant+sum(a_i*mu_i)` and variance is `sum(a_i²*variance_i)`.
Negative/zero coefficients work. Zero total variance returns distribution
`point-mass`; otherwise distribution is `normal`. Result also contains sd,
independent and varianceRule. Repeated variables must have their coefficients
combined first; equal parameter values do not imply the same variable.
Correlated Normal inputs, covariance matrices and non-Normal distribution
claims are unsupported. Overflow, or underflow of a nonzero variance term,
throws. Variance zero is allowed as a degenerate case.

## Verification and limitations

```bash
node --test statverse-lab/tests/sampling-design.test.mjs
npm --prefix statverse-lab test
```

Tests use complete small-design enumeration and hand/rational values, plus
reproducibility, transformations, invalid domains and input immutability.
Random-stream smoke checks are not evidence that a design is unbiased.
This is binary64 computation, not symbolic arithmetic: near zero, under
severe mean cancellation or in subnormal Normal variance terms, no universal
relative error guarantee is made. Compensated/centered sums reduce rounding;
displayed means/errors can still round. No estimated SE from one observed
sample, nonresponse model, unequal-probability design, fractional-interval
systematic design, complex survey inference, CI or UI is implemented here.

Implementer verification, 25 October 2026 (independent review is pending):
17/17 sampling-design groups PASS; full existing/new suite 55/55 PASS. An
additional 752 deterministic small-design cases were checked against complete
enumeration/Fraction arithmetic: no failures; largest observed design-variance
relative discrepancy 1.11e-15 (not a universal bound). Chromium 151 module
checks passed all four selectors, missing-stratum state and Normal combination.
The root Astro compatibility build passed 289 pages in 47.27 seconds. No
deployment or UI integration was performed; this F change set changes no inference
files.
