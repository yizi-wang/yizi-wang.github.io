# Review loop and evidence

Independent requirements review received from parent; no independent implementation review has yet happened. Developer checks are explicitly developer checks. No real student testing. Prospective simulated-novice tasks stay NOT TESTED until independently operated.

| ID | Problem | Evidence | Severity | Proposal | Actual change | Regression | Status |
|---|---|---|---|---|---|---|---|
|DEV-01|CLT Normal curve could overflow y domain before first sample|Developer code inspection: ymax omitted theoretical overlay peak|P1|Include overlay peak in shared scale|src/app.js chart ymax includes normalPeak|Browser/math check scheduled|Open pending check|
|DEV-02|Transfer question kept n5 after n change|Developer inspection of static question|P2|Use selected n|metrics updates challenge text|Browser check scheduled|Open pending check|

Automation evidence: evidence/browser-results.json and screenshots. Numerical tests: npm test. Neither constitutes independent review. Independent reviewers should add actual issue/action/seed/viewport then rerun failure after a fix. Mathematical P0 blocks release regardless of score.
|DEV-03|390px viewport overflow by2px|Actual Chromium: prediction-options left66 right392, width390 viewport; browser-results first run failed phone width assertion|P2|Constrain options width after left inset|style.css max-width/phone width calc|Rerunning browser flow|Open|
|DEV-04|Primary draw below initial desktop fold|Actual initial screenshot1440×1000|P2|Add first-draw action in intro and direct trace link|index intro quick draw; app scrolls to sample and trace link scrolls to point panel|Rerunning browser flow|Open|

## Checkpoint1 developer regression closure — 2026-10-25 16:07UTC

- DEV-01: overlay peak now included; CLT UI flow passed. Numerical range-specific SVG coordinate assertion remains desirable in independent review, so this is a developer code fix with partial verification.
- DEV-02: transfer text uses selected n; code inspected and browser ran parameter changes. Independent copy review pending.
- DEV-03: same Chromium390px width assertion rerun PASS; no horizontal overflow. Closed for tested viewport, see browser-results.json.
- DEV-04: intro quick-draw action and per-sample point trace link implemented; browser flow/screenshot evidence exists. Independent timed first-use evaluation still NOT TESTED.
- Browser suite:11/11 PASS, Chromium151.0.7922.173; viewports1440×1000,1920×1080,390×844; no pageerror. These are developer automated checks, not independent review.

## Publication evidence

Native owner-private Sites save+deploy succeeded2026-10-25 16:07:01UTC. Project appgprj_6ade2582c75481919d80c39e48a6a523; deployment appgdep_6ade291e29648191a101da18099bacc7; version appgprj_6ade2582c75481919d80c39e48a6a523~appgver_0d76797a24a881918d1a7173c1c5ca72; pushed Sites source commit f04e1f65494f9bedf2d2faeda14aada4d4692dbe.
URL https://statverse-statistics-lab-20261025.qswsaxs.chatgpt.site . Local browser-tested source matches this deployment. No deployed-browser test or public sharing claimed. Sites helper scripts were unavailable in this environment; source was pushed using supplied short-lived repo-scoped credential passed via hidden stdin (no stored token), and archive created directly from that committed source with git archive.

## Checkpoint1 revision2 — 2026-10-25 16:17:55UTC

|ID|Problem|Evidence|Severity|Proposal|Actual modification|Regression|Limitation|
|---|---|---|---|---|---|---|---|
|DEV-05|Unavailable n1 S² view retained old sample selector|Developer lifecycle inspection; early chart return skipped descriptor reset|P1|Clear stale descriptor on invalid variance|chart invalid-state message; reset disables exact n1 variance|Browser now asserts sample-picker absent; PASS|Independent review pending|
|DEV-06|Phone chart labels shrank with fixed600px SVG|Actual390px screenshot/code inspection|P2|Render at actual container width|Responsive SVG viewBox,10px ticks, resize/teacher redraw; teacher type increased|390px screenshot and no-overflow checks PASS|Projection distance not student-tested|
|DEV-07|Unvalidated nonfinite/empty and invalid model inputs in helper API|Developer inspection of exported pure engine|P1 for future exposed custom inputs|Validate data/model/rule/counts|RangeError guards, explicit undefined constant correlation/n1S²|Ninth unit test and existing oracles PASS|Current UI uses fixed valid models|

Latest developer unit suite9/9 PASS; browser11/11 PASS, captured2026-10-25T16:14:35.819Z. Exact viewport image dimensions checked with PIL:1440×900,1920×1080,390×844. First-draw browser flow now uses the intro action and actually clicks sample1's SVG point; native sample selector also checked. Code is formatted for independent inspection. No simulated-novice success or independent implementation approval is claimed.

Latest private deployment appgdep_6ade2bacbc748191962659b498cbdddf, version appgprj_6ade2582c75481919d80c39e48a6a523~appgver_6454bf5ca8ac8191972b9e5b5c446b44, Sites source afb1652087ef50d233545c696b41e2351d95f541. Status succeeded, same private URL.

## Independent review round1 → checkpoint2 developer response

Original findings: [pedagogy report](reviews/ROUND1-INDEPENDENT-PEDAGOGY.md), [transmitted math/engineering findings and failed materialization](reviews/ROUND1-MATH-ENGINEERING-RECEIVED.md). These original statuses are immutable history; the following is developer verification, not independent acceptance.

|ID|Issue/evidence at65cf|Severity|Proposed repair|Actual modification|Actual developer regression|Independent status|
|---|---|---|---|---|---|---|
|R1|Only sidebar labs; hidden on phone/Teacher|P1|Always-available native lab chooser|index.html compact lab select; app shared lab/cancel path; responsive/Teacher visibility|browser-stage2:390px and1920px Teacher select Sampling/CLT/CI/C; PASS|Recheck pending|
|R2|CI interval details only hover/color; sample1 n3 seed gives miss|P1|Numeric interval selector, explicit endpoints/μ/hit text, pointer/keyboard access|coverage renderer/selectors, selected-window labels, focusable interval points; miss line dashed, hidden truth preserves endpoints|Actual sample1[9.63,23.703] missesμ5.3, hide/reveal unchanged; keyboard sample2 and mobile selector PASS|Recheck pending|
|R3|First-card estimator paired with mean-only prediction|P1|Bind prompt/baseline/feedback to rule and model|Rule-specific questions; SE baseline comparison; incompatible predictions cleared; raw/Z wording explicit|Mean n3→12 narrows; first SE unchanged and prompt names first-card rule; PASS|Recheck pending|
|R4|Exact weighted outcomes not inspectable|P2|Paged original-sample/probability/contribution table|Exact cache and inspectable ordered rows, p products, p×T, weighted expectation, paging|9 tiny-model rows E2; Aurora page2 case11; PASS|Recheck pending|
|R5|Pause4990+manual1+resume10→5001|P2 / engineering blocker|Capacity guard at append and each tick, update paused remaining|addOne guard; remaining clamped after manual draw and tick; visible reset-at-cap message|Real Chromium DOM with deterministic RAF schedule:4990/rem10→4991/rem9→5000/rem0; PASS, evidence/stage2-cap-regression.json|Recheck pending|
|R6|Projection tick/metric sizes unverified|P2 risk|Increase core text and provide focus stages|Teacher ticks14px, labels12px, metrics25px, selector14px, genuine workspace reveal stages|Actual1920×1080 screenshots; font/layout code checked. No physical back-row test|Risk reduced, independent visual/physical review pending|
|M1|Constant7 model produced degenerate NaN chart|P2|Weighted-anchor moments, padded display domains, zero-SE guards|Point mass/CI[μ,μ]; no divide-by-zero standardization/Normal density|Unit fixture plus actual browser SE0/CI[7,7]/finite SVG PASS|Recheck pending|
|M2|Large finite values overflowed intermediate moments|P2|Supported-domain rejection instead of fake validity|Explicit |value|≤1e70 and |offset|≤1e70 RangeError contract; document limits|1e308 mean and±1e100 moment fixture rejected; PASS|Recheck pending|
|M3|Invalid probabilities/negative SD/NaN RNG accepted|P2|Enforce helper contracts|Probability/n/RNG/Normal checks; binomial edge support; improved CDF accuracy|Domain cases and81-point independent Python erfc reference PASS|Recheck pending|

Additional developer regression fixes during checkpoint2: CI selector blur could recreate an intended focus target; duplicate unchanged selections now do not redraw, and pointer/keyboard interval selection is explicit. The exact-row test initially assumed a closed details panel after a model change; product now preserves openness, and test opens only when needed. Screenshots are captured after blur/scroll-top to avoid fixed-element full-page capture artifacts; mobile skip-link positioning and resting invisibility improved.

No independent checkpoint2 scores or real-student outcomes have been assigned. Developer browser evidence is evidence/browser-stage2-results.json; original11 flows were also rerun. The parent can pin the code commit enclosing this update for the next independent review.

Projection follow-up: actual1920×1080 Distribution-stage screenshot initially put the bottom metrics below the viewport. Focus stages now omit the overview intro, retain the lab selector/model/teacher controls, and reduce top padding; Explain focuses the distribution and explanation. The first layout assertion still found a4px overflow (metrics bottom1084px); chart padding was reduced further and the same actual browser assertion was rerun, with final bounds recorded in evidence/stage2-projection-check.json. This is a measured viewport layout fix, not physical classroom validation.

## Independent phase2 findings → checkpoint3 developer response

Current independent evidence supersedes the historical opening sentence: independent code/math and actual Chromium review now exist. The first reviewer's0/8 BLOCKED record remains unchanged; a different reviewer actually tested Chromium. Phase2 reported7/8 basic simulated novice tasks PASS, Teacher hiding FAIL; no real students and no learning score. Source summaries/reports retained under docs/reviews.

|ID|Problem and independent evidence|Severity|Accepted repair and actual files|Developer regression evidence|Independent closure / limitation|
|---|---|---|---|---|---|
|S2-01|Worked hiding leaked SE feedback/live estimate/C fitted geometry|P1|Shared visibility.js; app feedback/live/chain redaction; correlation omits fit and prediction geometry; Mean same contract|browser-stage3: hide/unhide retains exact samples and records, no mean announcement or fit lines; PASS|New commit recheck pending; raw observations intentionally remain visible|
|S2-02|Old n2/S² exact rows/E retained after n1 invalid return|P1|Clear exact state/page/inspector before early return and on reset|Actual n2 exact→n1:0 rows,empty inspector,checkbox disabled,n≥2 message; PASS|Independent recheck pending|
|S2-03|y-only edit changed x12345.67→12300 through formatted editor|P2|correlation numeric fields use lossless String instead of display formatter|Actual stored[12345.67,4] after onlyy edit; PASS|Independent recheck pending|
|S2-04|CI99% body said95%|P2|app copy binds confidence|99% body/transfer and no95% string; PASS|Independent recheck pending|
|VP-01|Arbitrary point y shared frequency axis,115% labels|P1|Accepted: histogram empirical-bin bars and distinct saved-sample rug; max frequency≤100%; Normal overlay uses actual bin probability|Built browser: R1count1/bar1.0, R2proportionssum1, dots below histogram, explicit not-probability label; trace/batch regressions PASS; Teacher screenshot|Independent visual recheck pending; strip collision is layout only and native sample selector remains|
|VP-02|Phone question assumed sampling distribution before first draw|P1|Accepted: n3 default; first two prompts whole-sample/change; advanced n/spread after2; batch starts after first draw; semantic chain sticky|First[8,40,2]→16.667, second prompt→advanced after2; exact recall and no overflow PASS|No real novice timing/learning evidence. Advanced settings remain available|
|VP-03|μ/rule/estimate relationship visually dispersed|P2|Accepted: semantic-chain fixed target, pre-sampling rule, observed number,R and later expectation explanation; CI-specific target|Chain matches recalled original sample, hidden target/estimate follows respective controls; screenshots|Independent comprehension/visual recheck pending|
|VP-04|Teacher used narrow width/tiny core relation|P2|Accepted: max1840 projection width,18px essential chain labels,25px values,focused sample/distribution without full population panel|Actual1920×1080 four stage screenshots and bottom-bound assertion PASS; Predict intentionally hides chain until Population|Physical projector distance remains NOT TESTED; nonessential controls smaller|
|VP-05|CI bias card distracts; transfer tested n/R not confidence meaning|P2|Accepted: remove CI bias card; fixedμ/random interval prediction; realized interval and not-exactly99/100 checks|99% specific transfer/feedback, zero-bias card absent; constant[7,7] CI and earlier keyboard/touch regressions PASS|Independent learning recheck pending|
|VP-06|Box-like action glyphs|P3|Accepted: replace ambiguous launch/pause symbols with text/plain arrows; teacher label remains on phone|Actual screenshots and named-control operation PASS|Font rendering on other OS untested|
|DEV-S3-01|Developer screenshot showed old sampling workspace alongside Mean|P1 UI integration|app lab switch hides Sampling for both Mean/C; regression now asserts only active workspace|390/1440/1920 actual screenshots and explicit visibility checks PASS|New module independent review pending|
|DEV-S3-02|New estimated-SD label incorrectly said Unbiased sample SD|P0 if shipped|Corrected before checkpoint: Estimated s (s² uses n−1); statement never claims sqrt(S²) unbiased|Source/UI screenshot shows corrected label; math contract unchanged|Independent new-module review pending|
|DEV-S3-03|Hidden Normal reference lacked unconditional SVG closing tag; prereveal could show observedz|P2|Unconditional closing/axis; observed geometry requires reveal and effective visibility|Hidden/new Mean flow and screenshots PASS, no pageerror|Independent new-module review pending|

Current developer suite:47 unit groups PASS;11 baseline +13 stage2 +14 built-output stage3 actual Chromium flows PASS. Initial teacher test incorrectly required the chain in intentionally concealed Predict stage; expectation corrected to the documented reveal design, then four actual stage screenshots and distribution-bottom assertion passed. Initial Mean screenshot exposed DEV-S3-01, which was repaired before rerunning. No failure is closed merely by changing a label in this table.

## Inference independent loop

See original840f report and7e45 re-review. Original M1 E5/P1, M2 center-quantile/tiny-confidence/P2 and M3 direction wording/P3 were repaired by the isolated inference owner and independently rechecked PASS at7e45fa8 (30,451 finite-sweep calls plus key vectors; no UI tested). Main branch imported both commits without modifying inference semantics.

New INFER-R1/P2: high-count near-independent contingency at extreme alpha has cancellation error and different decision; original owner fixing, main developer does not duplicate changes. New INFER-R2/P3: confidence adjacent doubles can reduce critical by1ulp; documented numerical limitation, not a95% CI failure. Both remain OPEN here until new commit and explicit independent regression. No chi-square UI released in this checkpoint. D/E breadth is deferred in this checkpoint to prioritize P1 instructional fixes; next work can connect the already reviewed discrete APIs and meaningful pooling after the engine fix.

### Inference R1 import follow-up —18:06UTC

Imported owner commit8f088e0d87e3907437ee6be5e58fd1dea13c2bae as main-branch c6e0d16e40f2f78ce4758044429203949d3964c9 after clean-state/diff inspection. The engine now forms exact BigInt residual D=O·N−row·column, calculates D²/(N·row·column), and classifies E<5 with integer products. New high-count/transposed/near-E5 regression is included. Main developer48 test groups PASS and14 built-output browser checks PASS after import; independent R1 re-review is **PENDING**, not yet closed. R2's1ulp adjacent-confidence issue is explicitly documented by the owner as a retained P3 limitation. This does not imply ordinary95% intervals are wrong. Original report statuses above remain historical.

## Independent phase3 → checkpoint4 response

Phase3 actual built-output review fixed7baa7fd: S2-01–04 independently CLOSED; VP01/03/05/06 closed on tested routes, first-flow core fixed with phone partial, Sampling projection browser goal improved. No tested P0/P1;7 simulated novice tasks6PASS/1PARTIAL, no real students. Separate16-PNG visual reviewer adds source-supported stage3 hidden-target P2. Original reports saved under reviews; those historical P2 statuses are not overwritten.

|ID|Problem/evidence|Severity|Actual repair|Actual developer regression|Independent status|
|---|---|---|---|---|---|
|S3-01|390px original[8,40,2] number text7px past hidden card boundary|P2|Flex column card layout, explicit SVG/tier/value line heights and nonshrinking numeric row|Range text rectangles inside each card with≥2px bottom space in student andTeacher390×844; original values preserved; PNGs and browser-stage4 PASS|Recheck pending|
|S3-02|Mean pausedR60/rem140 leaves single-step disabled|P2|Central executionControls from pause/render/run, including model validity/cap; manual remaining-cap clamp|Actual DOM controlled frames:R60 pause→single61→continue201; same201-record seed replay; cap2000 disables both, invalid model remains disabled after globalPause; PASS|Recheck pending|
|VP3-TRACE|Teacher stage3 link scrolls to stage-hidden distribution|P2|Trace reveals stage4 before scrolling/focusing selected dot; roving focus and keyboard point activation; navigation link alone remains accessible with answers concealed|Actual stage3→4 with same samples/R/seed/selected; reduced motion, hidden chart and student route PASS. Initial focus assertion exposed nonfocusable SVG; focusable labelled circles added. Hidden-link test exposed inherited concealment; only nonnumeric trace action gets visibility override|Recheck pending|
|DEV4-NAV|Body metadata reused data-lab, collided with nav selectors|P2|Separate data-current-lab metadata; external module registry pauses all inactive modules|14 earlier built browser checks rerun PASS; seven-lab nav and late-update checks PASS|Developer regression complete|
|DEV4-PROJECTION|E result validity message bottom1082.9px, outside1080|P2|Local projection focus, compact result margins/spacing,18px E labels,16px null ticks|Actual D/E result bound assertions and1920PNGs PASS after spacing adjustment|Physical distance remains open|
|DEV4-BETA|Opposite-direction generating truth could get TypeII label despite not satisfying chosenH₁|P1 if released|β label gated by alternative direction; opposite truth explicitly only rejection operating probability; tiny1−power precision stated|UI truth outsideH₁ regression and supported-engine tests PASS|New module independent review pending|
|DEV4-UNDERFLOW|Finite Normal/χ² tailp0 could read as exact0|P2|Use log tails and positive-below-machine label; preserve actual impossible discretep0|Actual finite extreme Normal/χ²/PoissonUI positive-underflow assertions PASS; degenerate directional p0/1 PASS|New module independent review pending|

New D/E validation:24 actual Chromium built-output flows PASS, including null PMF sum/inclusive boundary, actualα, Poisson critical9vs8, invalid counts, cap2000pause/manual/resume, exactE5, lowE withholding, original-data-preserving pooling, GOFq/df0, probability sum, fixed-margin randomization and stale-callback cancellation.53 unit groups PASS including independent numeric oracles and new aggregation/invalid-original cases. Initial test helper tried desktop-hidden compact navigation; changed it to the actual visible sidebar path, not a product bypass. Initial focus-layout failure retained above, then actual tested repair. Old11/13 baseline suites rerun PASS after module integration;14 prior built-output regressions also PASS. Final trace-specific change has its own actual regression.

Inference R1 independent closure: report INFERENCE-R1-REREVIEW-8f088e0.md confirms17,795 public calls,3498 Fraction table comparisons and unchanged normal/discrete APIs; no new P0/P1/P2 in tested domain. Close high-count R1 and originalM1–M3 sampled key behaviours. KeepCI1ulpP3/tinyTypeII complement limitations. This does not approve D/E UI or classroom use.

F658f005 independent pure-math pass report saved but not integrated. No F UI/coverage claim. Low-priority mobile sticky-chain space and physical projection-distance suggestions remain deferred pending independent review and user-device evidence; no invented learning score.

## Independent phase4 → checkpoint5 response

Parent-transmitted original independent summaries/full mathematical report are preserved in reviews/PHASE4-INDEPENDENT-BROWSER-dbe9351.md and reviews/D-E-INTEGRATED-MATH-REVIEW-dbe9351.md. The first review used actual Chromium on dbe9351; the second used actual module DOM fixtures plus independent calibration, not a browser. Historical failure states are retained. Independent phase4 closed S3-01/S3-02/VP3-TRACE on tested routes; these are no longer merely developer fixes.

|ID|Problem and evidence|Severity|Actual change|Developer regression result|Independent closure|
|---|---|---|---|---|---|
|S4-01|Uniform O[17,9,10,13]/N49 silently became specified-example O[12,18,30,40]/N100 on null change|P1|chi-square-lab separates observed datasets from null model, preserves portal data/groups, keeps separate semantic contexts with notice, replaces defaults only by explicit Load example counts|Actual built Chromium retainsO49, recomputesE[4.9,9.8,14.7,19.6], p/rejectnull; return context retains data; blank values remain invalid; explicit load changesN100. PASS|PENDING new fixed SHA; do not mark earlier failure passed|
|S4-MATH-P1|Raw four-class fitted Binomialp followed by pooling has invalid χ²(k′−2) calibration; independent20万nullreplicates rejected10.2035% at nominal5%|P1|categorical-model flags unsupported-fitted-pooling-calibration; approximationAppropriate=false, referenceDFnull and p/reject/asymptoticPnull; UI retains descriptive O/E/contribution/statistic and explains unsupported workflow. No inference.js change|Both actual operation orders fit→pool/pool→fit withhold; [7263,2491,238,8] retainsχ3.9346774145 descriptively; restore4classes yieldsdf2/p≈.05443020; fixedp pooling valid; df≤0 rejected. Unit+actual Chromium PASS|PENDING independent calibration-guard recheck|
|DEV5-PHONE|Initial finite-frame badge overflowed390px by21px|P2|Wrap badges and responsive frame controls|390px no horizontal overflow; screenshots and actual bounding assertions PASS|New F UI independent review pending|
|DEV5-FOCUS|Hidden→visible SVG used stale width; initial Teacher Normal/weighted sample exceeded1080|P2|Redraw on focus, two-column Normal output; compact focused sample text/FPC disclosure and collapsed exact systematic detail in Teacher|Actual1920 focusedSRS/weightedn5/systematicn6/Normal bounds PASS; trace preserves sample and redraws chart. Final21-flow browser suite PASS|Physical projection and independent UI approval pending|
|DEV5-PREDICT|A fixed design question could be wrong after constant values/n changed|P2 prevented|Bind prediction to current method, quotas, n and systematic design spread; invalid design disables answers|Boundary/constant/quota/stratum actual flow assertions PASS|New-module review pending|

Pure F658f005 imported unchanged, including reviewed contracts and null states. Its independent5017call/13645SRS/5877stratified/868start evidence is mathematics only; no F UI pass inferred. New developer evidence:71 unit groups,24 D/E built Chromium flows and21 F/P1 flows PASS; root Astro289page build PASS19:37:14UTC. Screenshots and execution timestamps are in evidence/. Initial test-harness failures from editing hidden focus controls or measuring All instead of Sample were corrected to the actual visible path; no force-click bypass. No real students, measured30-second understanding, physical projector or screen-reader speech trial, and no weighted learning score.

### Checkpoint5 independent mathematical recheck received —20:02UTC

PHASE5-INDEPENDENT-MATH-REVIEW-94d0b8d.md is preserved in full as transmitted by the coordinator. Fixed94d0b8d:78 actual-module event assertions and13,311 independent comparisons passed, including384 finite-frame control combinations,20,168 finite design outcomes and318 Normal UI snapshots. Both S4-01 and S4-MATH-P1 are **closed for the tested mathematical/event paths**; the latter is a safe withheld-reference restriction, not a new valid fitted+pooled method. No new P0/P1/P2 in that finite scope. This review used Node/linkedom events and exact independent arithmetic, not a browser, screenshot or real student. Actual-browser recheck remains pending, so overall UI approval is not inferred.

## Checkpoint6 global consistency / access / delivery work

|ID|Evidence/problem|Severity|Actual change|Developer regression|Independent status|
|---|---|---|---|---|---|
|DEV6-REFLOW|Additional320px check found Mean badge33px and conditional-MC badge37px outside viewport|P2|Small-screen section headings wrap; badges wrap within their container. Wide data tables retain their own scroll containers|Nine labs at320/390/1440/1920 (36 combinations) with no whole-page overflow, duplicate IDs or unlabelled visible controls/images; PASS|New narrow fix not independently rechecked|
|DEV6-ACCESS|Current lab was visual only; help dialog had no explicit name; skip target not focusable|P2|aria-current on current nav, labelled dialog, main tabindex−1, visible summary focus|Actual keyboard Tab/Enter→main; named dialog→Escape returns opener; native lab switch updates current lab; PASS|Not a screen-reader speech trial or WCAG certification|
|DEV6-OFFLINE|Remote font import unnecessary for actual system-font rendering|P2 delivery dependency|Removed font network import; retains local system fallbacks. Added standard-library loopback launcher, exact offline instructions and static guide/scope pages|All nine labs and both reading pages load with external requests blocked; observed external requests0; local launcher served guide and ES module HTTP200 exact bytes. PASS|Owner private-host login not retested|
|DEV6-HANDOUT|Guide existed only as Markdown/modal; original transfer/teacher answer separation needed|P2 classroom support|guide.html+reading.css; six original transfer prompts, closed teacher notes, separate student/teacher print actions; current coverage page and JSON/Markdown matrix|Actual print-mode controls; extracted studentPDF excludes answer blocks;2-page student and6-page teacher PDFs. Teacher sample→dot→R202→weighted25cases→n12 route PASS. Fraction check confirms original answers|Full18-minute classroom rehearsal and genuine learner outcome unmeasured|

Initial new global-QA failures were harness assumptions: CSS-concealed text is retained in textContent, actual trace ID is trace-point, and PDF uppercase timing uses CSS text-transform. Checks were corrected to computed visibility plus actual accessible tree, observed control IDs and case-insensitive extracted text. No concealment bypass or product mathematics change. Seven global workflow groups/36 layout scans now PASS; exact performance values/timestamps in evidence/browser-final-results.json. One headless add200 run took398ms with no observed>50ms long task; this is a local measurement, not a device guarantee. Pure engines remain unchanged.

### Final content review94d0b8d → checkpoint6 wording repair

Full original report CONTENT-SCOPE-REVIEW-94d0b8d.md is preserved. NoP0/P1; C1/C2 areP2, C3–C5P3.

|ID|Change|Actual regression/status|
|---|---|---|
|C1/P2|Global Field guide explicitly scopes replacement/IID to card lab; finite-frame sample is distinct units without replacement and not assumedIID; generic population/SE wording adapted|Actual help opened from bothA andF, two-model boundary text visible; named-modal keyboard route PASS. Independent wording recheck pending|
|C2/P2|COVERAGE.md replaced with a unified current23-row matrix at its first screen, fixed implementation baseline94d0b8d, clear bounded-complete/partial/absent/enrichment. Historical snapshots moved to docs/archive and the old fit-before-pool claim marked superseded/invalid inline|Current first table marks GOFpartial and both orders offit+actualpoolunsupported; scope.html/JSON/Markdown match. No need to read end-of-file to find correction|
|C3/P3|Current CLT reference§3.6; combined large-sample route§3.6,3.8; one/two-mean tests§3.5–3.8; CI§3.3–3.4|Current matrix/pages checked against reviewer-provided official clause correction; no mathematics changed|
|C4/P3|Guide adds Page1[2,2], Page3/case25[40,40] and totals; record theoreticalSE before n change; any empirical comparison uses same statedR in fresh cohorts and is optional|Actual Teacher route now opens Page3 and verifies[40,40],p.0004; n3/n12 theory checked. PDF student answers isolated. No measured18-minute claim|
|C5/P3|README and D/E contract limit explicit example replacement to same semantic dataset; cross-context initialization/restoration remains explicit with notice|Existing actual browser preservation/context/blank/example gates passed; wording matches independently verified event semantics|
