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
