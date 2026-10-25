# Independent pedagogy and simulated-novice acceptance plan

Prepared2026-10-25 15:51UTC by a reviewer separate from development. This prospective plan is **NOT evidence that the app has been tested**. No real students participated. All task statuses below remain **NOT TESTED** pending independent actual operation. Developer browser automation is recorded separately.

## Learning contract

A fixed population produces a random sample; a fixed rule turns each sample into one realized statistic; repeating sampling produces a distribution of those statistics. First discovery target: ~30seconds, not a measured result. Predict → Draw → See whole sample become one mean-dot → Draw again → Compare, with population parameter fixed.

Keep fixed population/model parameters, pre-observation variables/statistics, observed values, theoretical versus finite simulation, and raw data versus statistic distributions distinct. Every dot must expose the original generating sample. If retention is capped, identify it, never fabricate reconstructed samples.

## Severity gates

P0: mathematical/severe instructional error; affected module cannot release, regardless of visual score.
P1: core learning action fails, mixed cohorts, indistinguishable n/R, missing accessible comparison; fix before classroom-ready claims.
P2: substantial friction, jargon, reset ambiguity, slow feedback, phone/transfer issues; fix before expansion where possible.
P3: non-obstructive polish.

Release: no P0/P1; complete Predict–Experiment–Observe–Explain–Transfer cycle; conceptual transfer possible; teacher/student mathematics identical; hide preserves model; limitations visible in context.

## Weighted rubric (NOT TESTED)

| Dimension | Weight | Evidence | Score |
|---|---|---|---|
| Mathematics |30%|Independent oracles, assumptions, boundaries, exact/simulated labels|NOT TESTED|
| Pedagogy |30%|Discovery, misconception, sample traceability, transfer|NOT TESTED|
| UI/UX |20%|Labels, first action, card/data mapping, phone/16:9, keyboard/reduced motion|NOT TESTED|
| Engineering |15%|Seed, reset, state, pause/repeat, synchronization|NOT TESTED|
| Curriculum/classroom |5%|Official matrix, extension labels,15–20minute route|NOT TESTED|

0 absent/incorrect;1 superficial;2 substantial friction;3 sound independently usable;4 exceptional with edge evidence. Weighted score=sum(weight×score/4). Internal structure, not validated learning measurement. P0 overrides score. Report evidence confidence separately: inspected/browser tested/independently recalculated/real student tested (unavailable).

## First-use tasks — all NOT TESTED

Record path, measured elapsed time if measured, hesitation, wrong turns, visible output and explanation. Do not pre-direct to a control. Expected outcomes are not observations.

| ID | Prompt | Pass / likely confusion | Status |
|---|---|---|---|
|N1|Take a sample of3. Predict whether pool/sample mean changes; draw twice.|Visible primary action, two means compare, population stays. Capture before/after. Avoid owned-collection interpretation/rarity distraction.|NOT TESTED|
|N2|Make5 samples. Pick a dot and explain its source.|Original n card values yield that exact statistic. A dot is a sample statistic, not a card. No fabricated reconstruction.|NOT TESTED|
|N3|Keep rule, redraw; identify estimator and estimate. Switch to first card.|Both rules are estimators; observed number changes, rule fixed. Clear history after switch. Transfer: unbiased need not equal truth next time.|NOT TESTED|
|N4|Try larger samples and more reruns separately; which stabilizes a mean?|Distinct n/R effects; R is repetitions, not sample size. Comparable/explicit axes; no mixed cohorts.|NOT TESTED|
|N5|Hide true mean. Does that make it random? Draw and explain target.|Hide only changes display; reveal same truth; parameter remains fixed.|NOT TESTED|
|N6|Tiny pool, enumerate all samples. Why exact expectation vs20-draw average?|Weighted ordered sample probabilities, finite mean separately labelled. Do not average unique outcomes equally or mark estimate wrong for missing truth.|NOT TESTED|
|N7|Skewed pool, increase n. Which distribution becomes bell-shaped?|Population unchanged; statistic distribution changes; standardization not magic Normality, no universal30 threshold.|NOT TESTED|
|N8|Generate20 intervals, find misses, explain randomness, reveal truth.|Fixed mu, random intervals; coverage need not19/20; no95% probability for realized fixed interval.|NOT TESTED|
|N9|Square positive y values without reordering, predict Spearman/Pearson.|Ranks inspectable; Spearman invariant, Pearson may change. Average ties; undefined not0.|NOT TESTED|
|N10|Group sizes10/30, half choose A. Predict expectations; shuffle.|E[5,5;15,15], observed vary/margins fixed; distinguish asymptotic reference and conditional shuffle; sensible pooling.|NOT TESTED|

## Browser review checklist

- Actual screenshots/interactions at phone~390×844,desktop~1440×900,teacher1920×1080.
- Same seed/model/action reproduces outputs; new seed preserves model parameters.
- Change n during batch: stop/reset or separate cohorts; no contamination.
- Pause/resume/reset/double draw/navigation while running; no late duplicate updates.
- n1 S² explains undefined; enumeration cap avoids freeze.
- Hide truth/answers, mode/resize preserves hiddenness and mathematics.
- Cosmetic rarity reflects probabilities; owned collection never alters pool.
- Teacher pause/stage controls reachable, projection text readable, no hover-only essentials.
- Keyboard and reduced-motion equivalents; scatter editing alternative.
- Axes unit/denominator, empirical frequency/density distinction, explicit clipping/scaling, bins not exact probabilities.
- Feedback invites explanation and targeted hints; no scoring by simulation luck.

## Review-loop record

ID | module/version | problem | evidence(action,seed,viewport,screenshot/test) | severity | proposal | actual change/commit | regression | limitation.

Use measured timestamps, never implied continuous hours. Code fix ≠ verified fix; rerun original failure. No scores assigned yet.
