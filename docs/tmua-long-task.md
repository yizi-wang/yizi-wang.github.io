# TMUA Practice Review Long Task

This repository also contains a continuing TMUA practice-system review task.

## Start Here

Read both `TMUA_PROGRESS.md` and `TMUA_LONG_TASK.md`. Do not mix this queue with
the STEP audit queue.

## One Paper Per Session

Process the first unchecked paper in `TMUA_PROGRESS.md`, for example
`2019 Paper 1`.

Within that paper, subagents may work in parallel when the environment and user
instructions allow it. Each subagent should own one question and avoid changing
unrelated files.

## Per-Question Review Scope

Check each question for:

- complete question, options, answer, and explanation fields
- continuous option labels and an answer that matches one option
- no stray page numbers, OCR headers/footers, topic fragments, duplicated
  question text, or broken Markdown/LaTeX
- image paths that exist and match the question
- browser rendering for image questions
- `topic` and `related_topics` compatibility with the old UI
- `modules` matching lecture file names
- `sections` and `skills` updated from the actual question analysis when needed
- `/practice/tmua/?id=<question-id>` opening the specific question instead of
  falling back to the practice home page

## Validation

```powershell
node scripts/tmua-static-audit.mjs --paper 2019-P1
npm run build
node scripts/tmua-browser-audit.mjs --paper 2019-P1 --base http://localhost:4321
```

If Windows shell compatibility blocks the build:

```powershell
Remove-Item -Recurse -Force .astro
npx.cmd astro build
```

Only after static audit, build, and browser audit all pass should the matching
paper be marked complete in `TMUA_PROGRESS.md`.
