# Implemented coverage — checkpoint 1

Authority: official Pearson IAL specification in CURRICULUM-MATH-REQUIREMENTS.md. No other exam board is used. Status is implementation status, not independent approval.

| Module | Official reference | Current status | Boundary |
|---|---|---|---|
|A: fixed population, iid sample, statistic, distribution|S2.3§4.1–4.2 p59|Implemented; developer unit/browser checks|Sampling frame/census not interactive|
|A: mean, first value, shifted mean, bias, SE|S3.3§3.1–3.2 p61|Implemented; numerical exact checks|First/shift rules teaching examples|
|A: variance n−1 versus n|S3 estimation, prerequisite moments|Implemented; n1 undefined|No claim sqrt(S²) unbiased|
|A: exact ordered sample enumeration|Teaching realization|Implemented, weighted; cap20,000|Extension as technique, core sampling concept|
|B: CLT|S3.3§3.5–3.6 p61|Partial: mean distribution+Normal overlay|No standardization control/Normal population yet|
|B: repeated CI coverage|S3.3§3.3 p61 interpretation|Partial:95% knownσ intervals, nonnormal approximation|No unknownσ/confidence slider yet|
|B/D: one/two-mean tests|S3.3§3.4,3.6–3.8 pp61–62|Absent|Next priority after flagship review|
|C: correlation/regression/significance|S1.3§4 p56;S3.3§5 p62|Absent UI; basic engine helpers only|Ties exploration must be labelled extension|
|D: binomial/Poisson tests|S2.3§4.3–4.6 p59|Absent|TypeI/II,pvalue,power enrichment requested|
|E: GOF/contingency|S3.3§4 p62|Absent UI; expected-count helper only|GOF models/pooling not implemented|
|F: sampling methods|S3.3§2 p61|Absent|Large sample does not remove bias|
|F: independent Normal combinations|S3.3§1 p61|Absent|Variances add under independence|
|F: PMF/CDF, distributions, PDF|S1.3§5–6 p56;S2.3§1–3 p58|Card PMF/moments only|Full distribution workbench absent|
|F: displays/skew/outliers|S1.3§2 p55|Partial empirical histogram-style dots|No unequal-bin histogram lesson|

Core inference plan: Normal z, known variance or explicit large-sample substitution; no t default. No blanket n≥30 guarantee. No claim of whole S1–S3 completion.
