# Independent mathematics/engineering findings received from parent

Pinned review commit65cf743c2f264cd063f2891e8edc3598605250be. This is a record of the parent's transmitted independent findings, not a replacement for the complete reviewer report and not a developer reclassification of their result.

Parent reported: Python rational oracles covered203 parameter configurations and120,130 ordered samples, all matched. Actual independent Chromium flows11/12 passed; failing flow exceeded5000 retained records. Independent CI result47/50=94% matched the UI. Another pedagogy reviewer was browser BLOCKED0/8; those are separate reviewers/evidence, not conflicting test counts.

|Finding|Independent evidence transmitted|Priority|Current developer response|
|---|---|---|---|
|Paused batch+manual draw exceeds cap|R4990,remaining10 → manual4991 → resume5001|Existing UI defect|Clamp every append/tick and paused remaining; real-DOM regression recorded separately|
|Degenerate constant population|All powers7 should yield SE0 and CI[7,7]; old plot had NaN/undefined push|P2 helper/fixture|Stable weighted anchor, finite display spans, zero-SE Normal curve/standardization guard, point-interval handling|
|Large finite intermediates overflow|mean([1e308,1e308]) Infinity; ±1e100 variance estimator SE Infinity|P2 helper domain|Explicit supported |observation|≤1e70 / |offset|≤1e70 moment-domain rejection, rather than reporting fake finite validity; current UI fixed pools and correlation bounds far smaller|
|Helper validation gaps|Invalid probabilities, negative Normal SD, NaN RNG falls through to final card|P2 helper contract|Reject invalid probabilities/RNG/Normal density arguments; zero/one binomial edge cases explicit|

## Attempt to retrieve complete evidence bundle

Library file: libfile_2054aca188e48191a371a17593c8a0a4, file_00000000448881f588b6df39a1149b48, filename statverse-review-65cf743-small-evidence.tar.gz, reported21354bytes.

The supported resolved-reference Library route was used: current Library skill, both current transfer/helper companion resources downloaded into one private temporary directory, prepare_materialize with exact IDs succeeded, complete returned transfer passed to bundled materialize helper via hidden stdin. Helper exited1: `library file transfer failed: download failed`. No archive exists in /workspace/statverse-independent-reviews; no extraction or report execution occurred. Status: failed transfer, no local bytes; not a user/automatic-approval denial, cause beyond the helper's message unknown. No retry or alternate network route attempted. The already transmitted findings remain actionable and are being fixed.
