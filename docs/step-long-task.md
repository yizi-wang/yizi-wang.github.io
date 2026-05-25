# STEP Website Audit Long Task

This repository contains a continuing STEP website audit task.

## Start Here

Read `PROGRESS.md` first. Find the first unchecked item under `## Next`.

## One Item Per Session

Process exactly one unchecked item per session. Finish its check, repair,
verification, and progress update before moving to another item.

## Single Item Flow

1. Run the static audit:

```powershell
node scripts/step-static-audit.mjs <path-to-step-md>
```

2. Read the target Markdown manually and repair:

- missing, repeated, or out-of-order `## Question N`
- question count mismatches, especially not Q1--Q8 where that is expected
- inconsistent `### Problem`, `Hint`, `Model Solution`, or `Examiner Notes`
  sections
- broken or empty `<details>` / `<summary>` blocks
- obvious LaTeX render risks
- TODO/FIXME markers
- leftover conversion noise

3. Content rules:

- `Model Solution` is required for every question.
- If `Hint` is missing, it may be added from the existing problem statement and
  solution.
- Do not invent `Examiner Notes`; keep them absent unless reliable source
  content exists.

4. Verify the target:

```powershell
node scripts/step-static-audit.mjs <path-to-step-md>
npm run build
node scripts/step-browser-audit.mjs <path-or-slug>
```

5. Only after all verification passes, update the corresponding checkbox in
   `PROGRESS.md`.

6. When committing is explicitly allowed, include only the related STEP file,
   audit scripts if changed, and `PROGRESS.md`. Do not revert or tidy unrelated
   existing changes.

## Periodic Full Check

After every 5--10 completed STEP items, run:

```powershell
node scripts/step-static-audit.mjs
npm run build
node scripts/step-browser-audit.mjs step
```
