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
