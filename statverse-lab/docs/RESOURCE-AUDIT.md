# Resource and provenance audit

2026-10-25, checkout base a843be9 (origin/master snapshot). The branch statverse-lab-20261025 did not exist on origin when checked; created from this existing clean checkout. Original branch name was work. New files are contained in statverse-lab/; original public resources, homepage, electronic-screen content and deployment configuration are unchanged.

## Actual investigation

- Read root AGENTS.md, docs/maintain-site.md, docs/decisions.md and skills/starlight-publish/SKILL.md. Available repository skills: starlight-publish and tex-to-starlight. They target existing publishing/content conversion; neither is used to publish production here. User explicitly authorized only independent branch/private preview. No master push/merge.
- `public/interactive-fm/`: actual directories complex-numbers, coordinate-geometry, spatial-vectors. No S2/S3 sampling, estimation, CLT, correlation or chi-square scene exists in this cloud snapshot. No `ANIMATION-PEDAGOGICAL-REVIEW-2026-10-17.md` found via rg --files across the repo. These are missing, not silently claimed as reused.
- Existing `src/content/docs/further-math/s2` and `/s3`, plus zh versions, contain sampling, estimation/CI, CLT/mean differences, correlation and chi-square prose. Read targeted chapter files for contextual audit, not as curriculum authority. Official Pearson PDF alone establishes scope.
- Existing `tikz-src/s2-clt-dice-convergence.tex`, `s3-correlation-outlier.tex`, `s3-correlation-nonlinear.tex` and `public/images/tikz/` SVGs exist. They remain unchanged. They are static, so are not described as interactive scenes.
- `D:\cw\teaching-resources\interactive-math\ial-further-maths` is a Windows source clue. MiBook is offline; this cloud environment has no mounted D: drive. It was not read or assumed available.

## Reuse / refactor / replacement decisions

| Resource | Decision | Actual result |
|---|---|---|
|Existing interactive-fm statistics scenes|Unavailable|New statverse-lab implementation, not overwrite|
|Existing S2/S3 teaching prose|Context reference only|Original concise bilingual app prompts authored; independent spec matrix|
|Static CLT/correlation TikZ/SVG|Retained in place|No reuse in dynamic SVG charts; new state-linked charts|
|Existing complex/conic runtime|Retained, not imported|Avoid unrelated geometry coupling; pure statistics engine separate from UI|
|Animation pedagogical review file|Not found|Use parent independent requirements and acceptance plans, no invented earlier review|
|Original card visuals|New|Authored SVG sigils for five fictional characters; no external IP/real student data|
