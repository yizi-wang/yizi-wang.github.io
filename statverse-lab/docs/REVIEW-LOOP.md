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
