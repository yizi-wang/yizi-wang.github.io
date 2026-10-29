# Oxbridge screen maintenance

The published screen is `/oxbridge-screen/`. The approved daily news, date,
previous answers and weekly questions live in
`public/oxbridge-screen/content/approved.json`. Publish only approved content.

Approved posters are maintained separately in
`public/oxbridge-screen/content/posters.json`, with original image assets under
`public/oxbridge-screen/assets/posters/`. Daily news/date updates must retain this
manifest and the playback insertion after the daily news, before previous
answers. Do not copy a daily draft over the poster manifest or remove campaigns
as part of a daily content replacement.

The retro-show recruitment poster uses the original 1024 × 1536 JPEG, fitted
with `object-fit: contain` on the 9:16 screen so all text and the QR code remain
visible. It plays for 36 seconds; the feed's other slides remain at 18 seconds.
The campaign expires at **2026-11-28 16:15 Asia/Shanghai**, recorded as
`2026-11-28T16:15:00+08:00`. At that instant the player removes it, including
from an already-open screen or a cached feed. The timer uses the display
device's clock. Expiry does not delete the original image file.

Before release, run the full clean build in `maintain-site.md`, then run
`node scripts/oxbridge-screen-browser-audit.mjs` against the built output.
The audit covers the original image, fixed ordering, per-slide timing, manual
navigation, rollover, daily refresh, offline caching, and the expiry boundary.
The default browser is `/usr/bin/chromium`; set `CHROMIUM_PATH` when needed.

Use the existing GitHub Pages workflow after explicit publication approval.
Verify the Actions run for the exact pushed commit and the public HTML, script,
manifest and JPEG. Local browser verification and a successful deployment do
not establish acceptance on the physical school screen.
