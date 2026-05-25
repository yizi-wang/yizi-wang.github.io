# Content Maintenance

Use this for Starlight content, A-Level/TMUA lecture conversion, teaching notes,
and math-history pages.

## File Format

- Use `.md` for Starlight teaching documents.
- Do not use `.mdx` for lesson content; JSX parsing can damage LaTeX.
- Frontmatter format:

```markdown
---
title: Title
---

# Title
```

## Naming

- Markdown file names and directories should be lowercase.
- Use underscores for course chapter files, for example
  `chapter01_binomial.md`, `fp2_01_inequalities.md`, and
  `lecture01_pythagorean_theorem.md`.
- Keep index links lowercase and matching the real file names.
- Avoid Chinese names and spaces in content file paths.

## Math Rules

- Inline math: `$...$`
- Display math: `$$...$$`
- KaTeX is globally configured; do not add page-local math renderers.
- `\&` may need escaping or placement inside a formula block.
- Avoid raw `\_`, `^`, and similar LaTeX control characters in prose.
- After substantial formula edits, verify rendering in browser, not just by
  reading the Markdown.

## Source Mapping

New teaching notes usually come from local or OneDrive TeX sources, then enter
Starlight under the matching content directory. The conversion method is
documented in `../../../workflows/tex-to-starlight.md` from the
workspace root when that workflow is available.

Examples:

- OneDrive/M2 Notes -> `src/content/docs/further-math/`
- TMUA source notes -> `src/content/docs/tmua/`
- Math-history drafts -> `src/content/docs/history-of-math/`

## Common Tasks

### Add a new note

1. Add the `.md` file under `src/content/docs/<section>/`.
2. Check frontmatter, title, file name, and links.
3. Run `npm run dev` for local preview when visual rendering matters.
4. Run `npm run build` before reporting the work as complete.

### Change navigation

Edit `astro.config.mjs` only when autogeneration is insufficient.
