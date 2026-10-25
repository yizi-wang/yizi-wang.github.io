# SUPERSEDED — historical guide, not the current teaching script

Use [the current printable guide](../guide.html) or [canonical Markdown](CLASSROOM-GUIDE.md). Historical repair-pending statements below describe their original checkpoint only.

> Historical v2. Superseded by classroom-guide-aurora-v3.md; do not use its obsolete chart-warning paragraph as current product guidance.

# 18-minute classroom demonstration — estimator, estimate and sampling distribution

Version2, 2026-10-25. Independent teaching reviewer script based on actual Aurora model and controls reported for commit6797009. Supersedes the earlier hypothetical-pool skeleton. This is a teacher script, not evidence of a real classroom trial. Complete outstanding hide-answer/chart/regression fixes before class. Stage3 control changes are recorded at the end.

## Preparation

Open **Sampling & estimators**, Teacher mode. Select **Aurora Archive · skewed**, estimator **Sample mean · X̄**. Set **n=3**; set seed **aurora-2026**, then **Reset & repeat**. Reset after changing parameters; do not assume an earlier cohort survives. Keep probabilities visible, formulas/answers initially revealed only when needed.

Actual fixed model (IID draws with replacement):

|Power x|2|4|8|16|40|
|---|---:|---:|---:|---:|---:|
|Probability|.45|.30|.16|.07|.02|

Population mean μ=5.3; variance σ²=38.67. With n=3, SE(X̄)=√(38.67/3)≈3.590. Do not calculate SE in the opening minutes.

Known seeded first sample for n=3: **[8,40,2]**, observed mean **50/3≈16.6667**. This comes from independent browser evidence for the target build. If a later model/RNG change invalidates this, record actual displayed values rather than claim reproducibility falsely. Second mean under the reported seed is5.3333; after two samples the mean of those two estimates is11, not5.3.

## 0–2 min · Predict: what stays fixed?

Show five card types and probabilities. Ask: “These are possible outcomes of ONE draw. What is random before we draw? Does the card pool change when we draw?”

Target: X is the power of one random draw; an observed x is a number. Fixed probability model, IID with replacement; this is not physically depleting a deck. Explain replacement briefly because otherwise the model of repeated draws is wrong.

Ask students to predict whether every group of3 must average5.3. Do not first ask about the shape/spread of an unseen sampling distribution.

## 2–5 min · Experiment: three cards, one observed estimate

Draw one sample. Read8,40,2; ask students to calculate the mean before revealing16.667.

Point deliberately to three separate objects:

1. **μ=5.3**: property of the fixed population model.
2. **X̄=(X₁+X₂+X₃)/3**: rule/random variable before the sample; an estimator of μ.
3. **x̄=16.667**: the observed value of that estimator for these cards; an estimate.

Question: “Have we discovered the population mean is16.667?” No. “Is this draw broken because it is above5.3?” No: the rare40 can occur. The task estimates the mean power, not the chance of a rare card.

## 5–8 min · Observe: one whole sample becomes one point

Use **Find sample #1's point** / **Revisit sample**. Ask: “Does this point stand for the40 card, or for all three cards?” It represents the statistic computed from the entire sample.

Draw again. Compare two samples and their means; return to sample1. Population μ and the rule stay fixed; observed x̄ changes. With the recorded seed, second x̄≈5.333 and the average of the two x̄ values is11. This provides a strong counterexample to “the average of a few estimates must equalμ”.

Original review warning until VP-01 is resolved: interpret horizontal position as the mean; do not assign probability to a dot's arbitrary vertical placement. Prefer the corrected chart if available.

## 8–11 min · Repeat: build a sampling distribution

Choose **Repeated samples R +200**, **Run batch**. Pause if needed. Ask students to identify n and R before pressing it: n=3 cards within each sample; R counts repeated samples/one-mean-per-sample points. Starting from two samples, adding200 yields202, not200; read the actual displayed R.

Observe the growing distribution of estimates. Ask: “Are these the individual card powers?” No: it is an empirical sampling distribution of X̄. “Does more R make a single future sample of3 more accurate?” No; it makes our simulation of that sampling distribution more stable. Finite empirical average need not equal5.3 exactly.

Reveal `E(X̄)=μ`: expectation averages over all possible samples with their probabilities. It is not a promise about one sample or exact equality after any finite number of simulations.

## 11–14 min · Explain: exact possibilities versus simulation

Switch to n=2 (warn that the old cohort is cleared), keep sample-mean estimator, enable **Exact small model**, open **Inspect exact ordered samples & weights**. There are25 ordered pairs, with unequal probabilities, not25 equally likely cases.

Inspect [2,2]: probability .45²=.2025; mean2; weighted contribution .405. Ask whether [40,40] is equally likely: no, .02²=.0004. Show sum of probabilities1 and weighted expected mean5.3. Explain exact enumeration does not require taking thousands of samples and has no Monte Carlo fluctuation. Do not use S² with n=1; variance estimator is undefined.

If this advanced table overloads the group, use just these two rows and the total; omit the rest of the table, not the weighting principle.

## 14–16 min · Transfer: n changes the distribution; R changes the evidence

Return to n=3 and a fresh seeded cohort, then compare with n=12 using fresh samples. Ask a prediction before changing n: “Will the centre move? Will spread change?” Theoretical centre remains5.3; SE halves when n quadruples, approximately3.590→1.795. Simulation may look irregular when R is small. n changes reset the cohort so the chart does not silently mix different sampling distributions.

Do not frame the mean of this highly skewed model at every small n as exactly Normal. The lesson concerns expectation and SE; approximate shape is the next CLT lesson.

## 16–18 min · Independent exit check

Students answer before revealing:

1. Before taking a sample, identify parameter, estimator and random variable. After observing8,40,2, identify estimate. (μ; X̄; X for one draw, X̄ also random before sampling;16.667.)
2. A dot in this sampling-distribution plot represents what? (One complete sample's calculated mean, not one card.)
3. “We repeated sampling200 times, so the next sample mean will equal5.3.” Explain the error. (R concerns simulation precision, not a guarantee about a new sample.)
4. If n changes3→12, what happens to μ, E(X̄), and SE? (μ and E(X̄) stay5.3; SE halves under the stated IID model.)

Success evidence for an actual class would be students independently classifying the objects and explaining these changes; it is not simply completing the button sequence. No class outcomes have been collected for this script.

## Short follow-on to CLT / CI

Next lesson: nonnormal population versus approximate distribution of means, then fixed μ with random intervals. Preserve the same model so students learn a new relationship rather than a new interface. Distinguish R from n again, and nominal coverage from a finite observed proportion. Do not imply unbiased X̄ alone guarantees accurate Normal-approximation coverage.

## Stage3 implementation synchronization

The default now starts at n3. First two on-page predictions concern a whole sample and what changes; the n-versus-spread question follows them. The semantic chain keeps fixed target, pre-sampling rule, observed estimate and R together. Histogram **bars** encode relative frequency; saved sample **dots** occupy a separate strip whose vertical position only separates cases. A selected dot still retrieves its exact original cards. These are developer changes with browser evidence; independent recheck of the new commit remains pending. Teacher Predict stage intentionally conceals the semantic chain until Population/Sample stages; use Hide worked answers to conceal calculated results and reveal when students have calculated. Keep μ visible initially, then optionally hide the fixed truth without changing it.
