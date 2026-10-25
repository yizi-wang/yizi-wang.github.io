# Finite-frame and independent Normal UI contract — checkpoint5

## Scope and authoritative engine

`sampling-design.js` is imported unchanged from isolated commit658f005. Its independent mathematical report establishes finite tested behaviour, not UI approval. The two new interfaces are `sampling-design-lab.js` and `normal-combination-lab.js`. They use fictional observations only. Official curriculum links: S3.3§2 sampling methods and S3.3§1 independent Normal linear combinations, printedp61. Finite-population design-SE algebra is supplementary teaching support, not an assertion that every displayed formula is compulsory exam content.

## A different random experiment from the card lab

The fixed frame has12 distinct invented unit IDs, strata Amber6/Cobalt4/Violet2 and task-point values. A sample cannot repeat an ID. All units are restored before the next sample. This is not the card lab's IID with-replacement model.

- SRS: every eligible size-n subset has equal probability under the declared design.
- Stratified: random sampling within each stratum. Integer quotas use the reviewed allocation. Estimator weights are populationN_h/N, not roundedn_h/n. Missing a stratum makes the full-population estimate/error/SE unavailable; the raw sample mean remains descriptive and is never substituted.
- Systematic: uniform integer start followed by fixed interval. Only n dividing12 is supported. Both demonstrated frame orders are design-unbiased, but variance changes. At n6 the periodic frame has designvariance100, balanced0. Do not label periodicity as inevitable bias.
- Quota: this explicit deterministic highest-accessibility mechanism fills quotas. Ranking is not response probability. Given/reversed ranks give errors−10/+10 at n6; constant42 gives0. There is no probability-designSE or random batch, and no universal quota-bias theorem.

The displayed designSE uses the complete known fictional population and all possibilities of the stated design. It is not estimated from the one observed sample. n ranges1–12; probability cohorts cap1000. Each repetition has seed `base|method|r`, r one-based; single/batch/pause use the same reproducible sequence. Recall never reconstructs a sample from its mean: original selected IDs and values are retained. Changes to design/frame/n/values/ranking/seed clear the cohort and cancel pending callbacks. Truth hiding changes visibility only.

Histogram bars represent relative frequency per bin; separately plotted sample dots use horizontal estimate and arbitrary vertical separation. A trace action reveals the distribution focus before scrolling and retains the selected units. Theory/design spread is independent of R. Invalid and missing-stratum states cannot inherit a previous estimate. Predictions adapt to current method, quotas, n and constant-value settings.

## Independent Normal combination

Two declared distinct independent Normal variables, coefficient/mean/variance/constant controls. Mean is c+aμ_X+bμ_Y; variance is a²σ_X²+b²σ_Y². A negative coefficient changes mean contribution sign; variance contributions stay nonnegative. Repeated IDs are rejected: X+X must first combine coefficients and cannot be passed as independent copies. Equal distributions with different IDs remain allowed under explicit independence.

The bounded interface accepts coefficients magnitude≤20, means magnitude≤100, eachvariance0–400, constant magnitude≤200; IDs are rendered as text. Both Normality and independence must be explicitly confirmed. Missing declarations/invalid values clear output. Zero total variance is a point mass; a tiny positive variance remains Normal with scientific notation and coordinate-resolution guidance where necessary. Density height is not probability; the display shows a central4SD window, tails continue. Sign flip compares before/current curves on common axes; other parameter edits clear the comparison. No covariance or non-Normal distribution inference is implemented.

## Visibility, access and evidence

Teacher focus and phone navigation use the same state. Worked concealment hides computed text/geometry/feedback without changing data; fixed-truth hiding is separate. Unit buttons and native numeric/sample selectors supply keyboard alternatives. Focus changes redraw responsive SVGs after visibility changes. Actual developer screenshots at390×844,1440×900,1920×1080 and21 built-output regression flows are in evidence/. Physical projection distance, physical phone, screen-reader speech and real student understanding are untested. New F UI independent approval remains pending.
