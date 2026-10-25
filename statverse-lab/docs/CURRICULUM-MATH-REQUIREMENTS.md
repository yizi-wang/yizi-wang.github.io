# Independent curriculum and mathematical requirements review

Prepared by the parent task's independent reviewer, 2026-10-25 UTC. Scope: official curriculum and computational oracles, **not review of unseen implementation**. This is a requirements map, not a completion claim. Subsequent development tests do not convert this document into independent implementation approval.

## Authority

Pearson Edexcel International Advanced Level Mathematics/Further Mathematics/Pure Mathematics Specification, Issue 3, April 2019, exact user source:
https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf

99 PDF pages. Printed page p corresponds to PDF page p+6 (one-based). S1 content: printed 55–56; S2:58–59; S3:61–62. S3 assumes S1/S2. The Normal section on printed 56 has a numbering inconsistency: cite section title as well as number. The independent reviewer retains the downloaded PDF/layout extraction in the parent task; this checkout has the source URL and requirements.

| Reference / printed page | Official content | Proposed module |
|---|---|---|
| S1.3 §1 /55 | Modelling | All |
| S1.3 §2 /55 | Displays, location, dispersion, skew, outliers | F/C |
| S1.3 §3 /55 | Probability, conditioning, independence, sampling | F/A |
| S1.3 §4 /56 | Least-squares regression, prediction, PMCC | C |
| S1.3 §5 /56 | Discrete RV, PMF/CDF, moments, uniform | A/F |
| S1.3 §6 /56 | Normal probabilities | B/F |
| S2.3 §1 /58 | Binomial/Poisson, moments, approximation | A/D/F |
| S2.3 §2 /58 | Polynomial PDF/CDF, moments, quantiles | F |
| S2.3 §3 /58 | Continuous uniform, Normal approximation, continuity correction | F |
| S2.3 §4.1–4.2 /59 | Population/census/sample/frame, statistic, sampling distribution | A/F |
| S2.3 §4.3–4.6 /59 | Hypotheses, critical regions, tails, binomial/Poisson tests | D |
| S3.3 §1 /61 | Independent Normal linear combinations | F/B |
| S3.3 §2 /61 | Random, stratified, systematic, quota sampling | F |
| S3.3 §3.1–3.2 /61 | Estimation, bias, standard error, mean distribution | A/B |
| S3.3 §3.3–3.6 /61 | CI, Normal-mean tests, CLT, large-sample inference | B/D |
| S3.3 §3.7–3.8 /62 | Two-mean tests | B/D |
| S3.3 §4 /62 | Chi-square fit/independence, pooling, fitted-parameter df | E |
| S3.3 §5 /62 | Spearman and zero-correlation tests | C |

## Scope boundaries

- Core inference: known-variance Normal z and large-sample unknown-variance approximations. Student t/Welch is not required and must not become default S3 content.
- Ties have conceptual relevance; numerical exam questions with ties are excluded. Label ties exploration accordingly.
- Correlation significance uses supplied critical tables. Pearson t-based p-values are an extension with assumptions, not a substitute.
- Expected chi-square cells below 5 require combining. Yates is not required. GOF eventually needs uniform/binomial/Poisson/Normal/continuous uniform; independence-only is incomplete.
- Type I/II, power, p-values, causal diagrams and permutation distributions are user-requested enrichment/explanation, not explicitly named assessment clauses here.
- Repeated CI coverage is a teaching realization, not an additional exam technique.
- No universal n=30 guarantee or approximation cutoff occurs in these clauses. Shape, tail behaviour and finite variance matter.
- Histogram area represents frequency/proportion with unequal widths. No universal 1.5 IQR exam rule; skew is not universally defined by ordering mean/median/mode.

## Model contracts

### A: sampling and estimators

State iid with replacement and finite variance. Finite outcomes may be unequally probable. Each ordered sample has product probability; exact enumeration must weight those probabilities.
A statistic is a sample function independent of unknown parameters. An estimator is a statistic used to estimate a target before observation. Its estimate is the realized number. Distinguish Xbar/xbar in wording.
For fixed n/model: E(Xbar)=mu, Var(Xbar)=sigma²/n, SE=sigma/sqrt(n). Finite R empirical mean is not exact expectation; empirical chart is not the exact distribution. R changes simulation precision, not theoretical SE. Changing n/model/rule must clear or separate cohorts.
S² uses n−1 with n≥2; n=1 is unavailable, never0. Divisor-n variance is different; unbiased S² does not imply unbiased sqrt(S²).
Hide/show cannot change truth/RNG. Enumeration cap cannot silently become simulation. Seed reproducibility includes action/RNG stream semantics; batch10+90 must match100 if stream semantics promise this.

### B: CLT and CI

IID Normal data give an exactly Normal mean for every n. Non-Normal finite-variance iid data give a large-n approximation; raw population does not become Normal. Standardization separates shape from concentration.
Known-sigma CI: xbar ± z_(1−alpha/2)sigma/sqrt(n), exact under Normal data; CLT use approximate otherwise. Unknown-sigma substitution is a large-sample approximation.
Mu is fixed; repeated intervals random. No 95% probability claim about fixed mu inside an observed interval. Coverage is not raw-data proportion inside a CI.
Two independent means use SE=sqrt(sigma_x²/nx+sigma_y²/ny); substitute sample variances only under stated large-sample conditions. Paired design differs.
Variance of aX−bY adds squared coefficient terms under independence.

### C: correlation/regression

Pearson uses centered sums and is undefined if a variable is constant, never fabricated0. Spearman=Pearson(average ranks), ties included. The 1−6Σd²/[n(n²−1)] shortcut requires no ties. Strict increasing transforms preserve ranks; decreasing reverses them. A U shape may have both coefficients0 and remain dependent. Correlation does not establish causation; significance differs from effect size.
Regression is response on explanatory variable with intercept; swapping axes usually does not invert the same fit. Mark extrapolation.
Permutation pairing is a conditional independence null. Generic no-ties tables do not automatically apply to ties. Monte Carlo p uses (b+1)/(B+1), method/B/uncertainty stated; never p=0 from finite simulations.

### D: tests

Evaluate observed statistics under H0. Upper P(X≥x)=1−P(X≤x−1), lower P(X≤x); inclusive integer boundaries matter.
Declare discrete two-sided convention (e.g. doubled smaller tail capped1 or equal-tailed critical regions), do not silently mix mass-ordering conventions. Nominal alpha differs from actual rejection probability. Critical region probability must not exceed allocation.
Alpha=P(reject|H0 true); beta/power need specified alternative. P-value is not P(H0 true|data). Failure to reject is insufficient evidence, not proof of equality.
Binomial n integer≥1, p∈[0,1]; Poisson lambda≥0. Handle p0/1 and lambda0 without NaN.

### E: chi-square

GOF expectations sum to observed N and probabilities sum1. Fully specified k cells df=k−1; after q fitted parameters and pooling to k' cells df=k'−1−q under regular conditions; reject df≤0.
Contingency Eij=row_i col_j/N; df=(r−1)(c−1), positive margins. Remove/explicitly invalidate empty margins and N0; no divide by expected0.
Chi-square≥0; reference distribution is asymptotic. Expected<5 must restrict conclusions, not cosmetic warning beside an unqualified decision.
Pool with defensible meaning in both O/E; contingency pooling merges whole rows/columns, never arbitrary isolated cells. Do not count every fitted expected cell as an independent parameter.
Fixed-margin label shuffling is conditional randomization, distinct from asymptotic chi-square.

### F: fundamentals

SRS gives equal probability to every eligible subset, not only equal individual inclusion. Systematic random start+interval may interact with periodic ordering. Stratification samples every stratum; quotas need not randomize. Large samples do not remove selection bias.
PDF may exceed1; area is probability. CDF nondecreasing, bounded0–1, right-continuous; continuous point probability0. Declare piecewise support.
Continuity correction follows event: X≥k →k−.5; X≤k →k+.5, never universal +.5.

## Independent numerical oracles

Elementary tolerances1e−10; special-function tails1e−7, declared in tests.

1. {1,2,9} equal, n2: mu4, sigma²38/3; ordered means [1,1.5,5,1.5,2,5.5,5,5.5,9]; E(Xbar)4, Var19/3, E(S²)38/3, E(Vn)19/3.
2. {0,10} with {.9,.1}, n2: ordered weights [.81,.09,.09,.01], means [0,5,5,10]; E1, Var4.5. Unweighted would wrongly report5.
3. X~N(10,4), Y~N(3,9) independent:2X−3Y~N(11,97).
4. mu0=500,sigma10,n25,xbar496: z−2; lower p .0227501319481792, two p .0455002638963584;95%CI [492.0800720309199,499.9199279690801].
5. Two means100,97, sigma10,8, n25,16: SE=sqrt8, z1.0606601717798212, two p .2888443663464849.
6. Bin(20,.1): P≥5 .04317449528446339, P≥4 .1329533234343351; upper5% critical starts5; actual4.31745%. P≤0 .12157665459056925; doubled-tail x5 p .08634899056892678.
7. Poisson4: P≥8 .0511336157928473, P≥9 .02136343448798414; upper5% starts9; P≤0 .01831563888873418.
8. [[16,4],[4,16]]: E all10, chi²14.4,df1,p .000147802310334454; no Yates.
9. Uniform GOF O[8,9,10,13]: E all10, chi²1.4,df3,p .7055347312040912.
10. Tied x[1,2,2,4],y[4,1,1,3]: average-rank rs−1/3. x[1,2,3,4],y[1,4,9,16]:rs1,r .9843740386976972.
11. Bin(20,.5),X≥13: exact .13158798217773438; Normal CC12.5 .13177623864148635; noCC13 .08985624743949988.

## Boundary/metamorphic gates

Reject empty/nonfinite samples, noninteger/negative counts, all-zero tables, alpha0/1, bad probability sums, enumeration beyond cap. Handle n1 S² and constant-variable correlation as undefined.
Location shift moves means and not variance; scale a multiplies variance a²; order reversal preserves symmetric estimators. Same seed/model/actions reproduce samples. Pause prevents advancement; reset clears stale results; hide only changes visibility.
Histogram counts sum R. Raw observations and mean dots must not be interchanged; no silent clipping. CI inclusive endpoints; greater confidence widens intervals; n×4 halves known-sigma margin. Finite-R coverage is not forced95%; assess binomial uncertainty.
Chi-square0 when O=E; count×m multiplies chi-square by m with row percentages fixed; row/column swaps preserve result. Joint pair permutations preserve correlation; monotone increase preserves Spearman. All formulae/warnings/totals/SE/curves derive from the same selected state.

## Review status

Requirements only. No implementation/UI/deployment/student behaviour was inspected by this reviewer. Next review must record issue → evidence → severity → proposal → actual change → regression.
