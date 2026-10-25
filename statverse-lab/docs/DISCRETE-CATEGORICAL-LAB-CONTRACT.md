# D/E interaction contracts — checkpoint4

Pure reference calculations come from inference.js; no copied tail/critical/p-value implementation in the UI. UI sampling uses the seeded statistics RNG; categorical aggregation/randomization is separated in categorical-model.js. All records are synthetic.

## D: one experiment → one decision

Binomial:n1–200, probabilities0–1, observed integerk0–n. Poisson:null/generatingλ0–30 per minute, observedk0–100000. The display caps the Poisson window at100 and states omitted null tail; an observed value beyond the window is marked, never silently clipped. Inactive Binomialn is not read for Poisson.

The displayed null PMF uses p₀/λ₀. Generating truth is independent of that null setting. Observedk changes the observation without changing masses or critical region. The engine returns inclusive critical boundaries; the UI tests each simulated count against those returned boundaries. Nominalα and actual null rejection probability are distinct. Two-tail convention: equalα/2 critical budgets; displayedp=min(1,2×smaller inclusive tail), no probability-ordering substitution.

A Binomial replication retains all n success/failure draws, using n RNG calls even atp0/1. Poisson uses the product/Knuth count generator atλ>0; λ0 yields count0 without consuming RNG. Identical seed/model/action stream reproduces data. Batch200 and single draws use the same stream. Capacity2000 checked at every append/tick; pause stops advancement. A manual step adds one additional experiment; remaining scheduled batch work is clamped to remaining capacity. Reset restores seed/generator; changing model,n,null,truth,tail orα clears incompatible history. Navigation pauses old callbacks via cancellation token.

Rejection/power/TypeI/II are labelled enrichment. TypeI is shown when generatingtruth=null. β is labelled only for a generating truth in the chosen H₁ direction; an opposite-direction truth gets an operating rejection probability with explicit direction warning. Degenerate impossible observations retain the declared directional tail definition; the UI separately warns thatp1 from an opposite tail does not make the observation possible. Positive underflow tails retain log explanation; true impossible probabilities may be0.

## E: one state snapshot for counts, margins and reference

Original input counts are integers0–1,000,000 per cell, independent synthetic observations, mutually exclusive categories. Empty/fractional/negative counts invalid. Zero total or margins retain engine diagnostic, no division/NaN/decision. Computed outputs clear on invalid state. Editing does not recreate input elements, so keyboard entry retains focus.

Contingency:E=row×column/N; df=(r−1)(c−1). Fully specified GOF:E=Np,df=k′−1. Supported GOF:four-category uniform,four positive specified probabilities summing to1 within1e−12, and Binomial(3,p). Fitting Binomialp from original counts uses weighted count mean/3 and q1; it is recomputed from the same original data even after grouping. After pooling df=k′−1−q; df≤0 rejected. No free arbitrary fitted-parameter slider; no automatic distribution fitting outside this model.

Pooling merges adjacent whole row/column/category groups after an explicit meaningful-category confirmation. Original data remain editable; O and probabilities/E are aggregated using the same partition. Counts/probabilities cannot be invalid in originals and hidden through pooling. No arbitrary isolated-cell merger or automatic renormalization. At least two groups remain; a fitted GOF can still reject further pooling if df0. Restoring groups preserves original counts. Doubling all counts preserves proportions and illustrates statistic scaling/significance versus magnitude.

Any E<5:asymptoticp/reject withheld, not a cosmetic badge. GOF suggests meaningful pooling and honestly states exact multinomial testing absent. Contingency can separately explore conditional fixed-margin label shuffles atN≤500. Both margins remain fixed. Monte Carlo estimator(b+1)/(R+1), finite resolution1/(R+1) and approximate MCSE labelled; χ² comparisons rounded to10 decimals for numerical ties. Capacity2000; seed/reset/pause/cancel semantics explicit. This is neither an exact enumerated permutationp nor the asymptotic χ² law, and it does not silently approve the sparse asymptotic test.

## Presentation and review limits

Effective Teacher worked hiding covers decisions/feedback/calculated geometry without changing model/RNG. Original observations, model parameters and margins are data for the task. D/E projection focus selects model/result/repetitions; result views have actual1920×1080 developer screenshots and bounds assertions. Physical projection and screen-reader testing not done. New modules await independent implementation/browser review; the pure8f088 engine's finite independent numerical review is distinct from UI approval.
