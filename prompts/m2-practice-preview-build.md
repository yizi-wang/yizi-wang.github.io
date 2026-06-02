# M2 Practice Preview Build Task Card

Use this when asking an agent or goal thread to implement the M2 practice preview from the saved plan.

```text
You are building the M2 teacher-review practice preview.

First read:
- AGENTS.md
- web-projects/yizi-wang.github.io/AGENTS.md
- web-projects/yizi-wang.github.io/docs/maintain-site.md
- teaching-resources/A-Level/question-bank/AGENTS.md
- teaching-resources/A-Level/question-bank/review/m2-choice-conversion-pilot/README.md
- teaching-resources/A-Level/question-bank/review/m2-choice-conversion-pilot/final-summary.md
- docs/superpowers/plans/2026-05-26-m2-practice-system.md

Goal:
Implement the plan in docs/superpowers/plans/2026-05-26-m2-practice-system.md. The first deliverable is an unlinked M2 teacher-review preview route with seven allowlisted 2024 June MCQ items.

Scope:
- Create the allowlist and export scripts described in the plan:
  - teaching-resources/A-Level/question-bank/review/m2-choice-conversion-pilot/website-import-allowlist.yaml
  - teaching-resources/A-Level/question-bank/scripts/export_m2_practice_data.py
  - teaching-resources/A-Level/question-bank/scripts/validate_m2_practice_export.py
- Create the website preview route and audits:
  - web-projects/yizi-wang.github.io/public/practice/m2/**
  - web-projects/yizi-wang.github.io/scripts/m2-static-audit.mjs
  - web-projects/yizi-wang.github.io/scripts/m2-browser-audit.mjs
  - web-projects/yizi-wang.github.io/package.json if adding audit aliases

Rules:
- Do not modify web-projects/yizi-wang.github.io/public/practice/tmua/questions_data.js.
- Do not publish, push, deploy, or add M2 to public navigation.
- Do not submit M2 scores to the TMUA QuickForm endpoint.
- Do not repair AL-4 or normalized M2 source files in this task.
- Do not import all 725 MCQ draft items; use only the allowlisted first batch.
- Do not create a database, FTS, Parquet, durable index, graph edge, or backlink file.

Implementation order:
1. Follow the saved plan task by task.
2. Keep the M2 page direct-URL only.
3. Preserve TMUA route behavior.
4. Copy only required images into public/practice/m2/images and rewrite references.
5. Keep generated questions_data.js compatible with window.QUESTIONS.

Validation:
- From workspace root:
  - python teaching-resources/A-Level/question-bank/scripts/export_m2_practice_data.py
  - python teaching-resources/A-Level/question-bank/scripts/validate_m2_practice_export.py
- From web-projects/yizi-wang.github.io:
  - npm run audit:m2-static
  - npm run build
  - node scripts/m2-browser-audit.mjs --base http://127.0.0.1:4321
- Confirm M2 is not linked into public navigation:
  - rg -n "practice/m2|M2 选择题预览系统" src astro.config.mjs

Report:
- Direct local URL for the preview.
- Files changed.
- Validation outputs.
- Whether TMUA files remained untouched.
- Whether public-navigation check returned no matches.
```

