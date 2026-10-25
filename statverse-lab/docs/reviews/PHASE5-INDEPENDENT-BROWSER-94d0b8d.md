# Phase5 independent actual-browser review —94d0b8d

Parent-transmitted complete review summary,2026-10-25UTC. Fixed source **94d0b8ded2cefe1091f237543adde7c0330ce888** only. Reviewer did not modify products, push or deploy. This is actual built-output Chromium evidence; no real students or physical devices.

## Decision

Both existingP1 actual UI regressions passed; no newP0/P1 within the tested scope. One nonblockingP2 identified. This does not approve later checkpoint6 changes or imply full mathematical/physical-classroom coverage.

|Existing issue|Independent actual result|
|---|---|
|GOF changingH₀ preserves observations|O=[17,9,10,13],N49 retained; specifiedE=[4.9,9.8,14.7,19.6], lowE correctly withholds inference. Contexts, edited probabilities and invalid blank roundtrips preserved. Explicit Load example replaces the same-context observations.|
|Original-four-class fit followed by pooling has unsupported calibration|fit→pool andpool→fit both withholdp/reject and display Not calibrated / Withheld. EditingO preserves the gate. Restore gives the original four-class inference; independently fixedp pooling remains supported.|

## New S5-UI-01 / P2

Teacher1920×1080 → Finite sampling designs → Compare designs: all four method-name buttons are10px with17px line-height, while adjacent values/descriptions are16px. Source sampling-design-lab.js:233 uses ordinary.text-button, inheriting style.css:388. Suggested narrowly scoped Teacher comparison-button font inheritance, at least16px (18px suggested), retaining layout.

Independent font-size gate **FAIL / exit1** at this fixed SHA. No product fix was performed by reviewer. Pixel/CSS measurements are not a physical projection-distance trial.

## F actual browser findings

- SRSn6:924 independently enumerated subsets,μ45.8333333 andVar(T)57.1338384 matchUI. OriginalIDs/values/inclusion marks and sample recall trace correctly.
- Stratifiedn5:quota[2,2,1], population weights[.5,1/3,1/6]; actual weighted estimate42.9167 versusraw mean47 correctly separated. n2 missingViolet gives estimate/error/SEnull.
- Systematic same units, periodic/balanced designvariance100/0 and unchanged expectation; no inevitable-periodicity-bias claim.
- Quota given/reverse/constant42 errors−10/+10/0; explicitly nonprobability mechanism, no designSE/random batch.
- Normal default2X−3Y mean11,var97; sign-flip mean29,var97. RepeatedID, cancelled Normal/independence declarations, blank input and negative variance block output; zero variance is point mass.
- F pause→single→resume101 records exactly match reset→single+100; histogram counts/dots101. All six running parameter-change classes cancel old batches.

## Global actual classroom-path regression

Nine workspaces desktop/mobile **18/18 flowsPASS**, Teacher **9/9PASS**. Additional mobileTeacher cycle through nine workspaces: navigation, hidden outputs and touch work, no whole-page horizontal overflow.

Before/after hiding, answering while hidden, actual accessible tree and calculated graph geometry checked: no answer-feedback leakage found. D21 independent endpoint/critical examples andE7 common cases rerun. D/E/Mean same-seed pause/single replay passed. Original card clipping, Teacher sample-stage trace and n1S² staleexact regressions passed.

**FourteenJS source/dist modules matched byte-for-byte and actual requests were allHTTP200. JS pageErrors empty.** This is not a claim that the browser console was entirely clean: GoogleFonts connection failure andfavicon404 were recorded.

Seven model-simulated first-use tasks passed: phone sample/ID trace, stratified horizontal touch table, Teacher periodic ordering comparison, quota reversal, Normal sign flip, phone GOF data retention, Teacher fitted/pooling withholding. These are **simulated novice evaluation**, not real learner tests.

## Evidence delivery

Full REPORT.md and STATVERSE-independent-review-S5-94d0b8d.zip saved to Library:

- LibraryID: **libfile_769f44ef833c8191a359f6cc4222672d**
- FileID: file_00000000ba2081f5abe2d1fe69618ec9
- Filename: STATVERSE-independent-review-S5-94d0b8d.zip
- Contains scripts, originalJSON, source excerpts and **59 originalPNGs**. Images are in thisZIP, not separately registered imageIDs.

Priority images:

- design-srs-desktop-1440x900.png
- novice-stratified-swiped-mobile-390x844.png
- novice-fitted-pooling-teacher-1920x1080.png
- design-compare-teacher-type-1920x1080.png (P2evidence)

Not materialized or independently re-executed by the main developer at receipt. Prior blocked reviewer0/8 history remains separate.

## Limits / environment

Actual Playwright/Chromium built-dist environment. Not tested: physical phones, OSsoft keyboard, screen-reader speech, real classroom/students, every extreme numerical input. Screenshots used system fallback fonts because GoogleFonts failed; cannot claim console all-clean. Local review service closed; no pending external writes. Exact later fixSHA can reuse reviewer's browser environment.

Developer follow-up is recorded separately in REVIEW-LOOP.md, not substituted into this fixed-version finding.
