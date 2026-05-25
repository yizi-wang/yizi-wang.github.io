# AGENTS.md - yizi-wang.github.io rules

This repository is the public teaching website. Keep this file as the short
entry point for agents; detailed procedures live in `docs/`.

## Modes

Pick one mode before working:

- **Site maintenance**: read `docs/maintain-site.md`.
- **Content editing or TeX-to-Starlight conversion**: read `docs/maintain-content.md`.
- **TikZ/SVG image work**: read `docs/maintain-tikz.md`.
- **STEP website audit long task**: read `docs/step-long-task.md` and `PROGRESS.md`.
- **TMUA practice review long task**: read `docs/tmua-long-task.md`, `TMUA_PROGRESS.md`, and `TMUA_LONG_TASK.md`.
- **Long-term project decisions**: read `docs/decisions.md`.

Reusable task cards live in `prompts/`.

## Hard Boundaries

These apply in every mode:

- Do not `git push`, publish, deploy, or trigger public release without explicit user confirmation.
- Do not edit `.env`, secrets, tokens, CI/CD config, or deployment config unless explicitly asked.
- Do not convert Starlight content to `.mdx`; lesson/content files stay `.md`.
- Do not bypass build or rendering failures by commenting out content. Fix the source issue.
- Do not mix STEP and TMUA long-task progress queues in one session.
- Do not manually edit generated build output such as `.astro/` or `dist/`.
- Do not move official exam content into public pages unless the task explicitly opens that scope.

## Directory Map

```text
yizi-wang.github.io/
  AGENTS.md
  CLAUDE.md
  README.md
  docs/
    maintain-site.md
    maintain-content.md
    maintain-tikz.md
    step-long-task.md
    tmua-long-task.md
    decisions.md
  prompts/
  src/content/docs/
  public/
  scripts/
  tikz-src/
```

## Minimal Validation

From this repository root:

```powershell
npm run build
```

For a full clean verification before public release or dependency-sensitive work:

```bash
rm -rf .astro && npm ci && npm run build
```

If Windows shell compatibility blocks the normal build command:

```powershell
Remove-Item -Recurse -Force .astro
npx.cmd astro build
```

Mode-specific browser audits and long-task checks are in the relevant `docs/`
files.

## Status Sources

- STEP long task: `PROGRESS.md`
- TMUA long task: `TMUA_PROGRESS.md` and `TMUA_LONG_TASK.md`
- Durable site decisions: `docs/decisions.md`
