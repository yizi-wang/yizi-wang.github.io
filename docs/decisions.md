# Site Decisions

This file keeps durable site decisions out of `AGENTS.md`.

## Framework

The site uses Astro + Starlight. Starlight autogeneration is preferred for
content navigation unless a section needs explicit sidebar control.

## Content Format

Teaching documents stay in `.md`. Do not migrate lesson content to `.mdx`
because JSX parsing can interfere with LaTeX and KaTeX source.

## Naming

Content file names should be lowercase and stable. Course chapter files use
underscores, matching the established site convention.

## Build Verification

The normal completion gate for site/content work is `npm run build`. Use a full
clean build with `npm ci` for release-sensitive or dependency-sensitive changes.

## Long Tasks

STEP and TMUA review queues are separate:

- STEP status: `PROGRESS.md`
- TMUA status: `TMUA_PROGRESS.md` and `TMUA_LONG_TASK.md`

Do not transfer completion status between these files without local evidence.

## Public Release

Publishing happens through the repository hosting flow after a push. That is a
red-line operation and requires explicit user confirmation.

## TMUA practice data ownership

- `public/practice/tmua/questions_data.js` is the deployment-enriched live
  source and the only TMUA source imported by Question Bank Manager.
- `web-projects/TMUA-Practice` is a distributable standalone baseline. The two
  datasets must keep the same 320 year/paper/question identities, but their
  hashes are expected to differ because the live source owns additional
  taxonomy and deployment features.
- Real QuickForm endpoints, feedback pages, and deployment-only configuration
  stay in the live site. Do not overwrite them from the standalone package.
- Run `question-bank-manager/scripts/check_tmua_source_contract.py` from the
  workspace before a data-sync or manager-import batch.
