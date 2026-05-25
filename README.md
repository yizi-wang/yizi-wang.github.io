# yizi-wang.github.io

Public personal mathematics teaching website for Wang Yizi.

- Site: `https://yizi-wang.github.io`
- Repository: `git@github.com:yizi-wang/yizi-wang.github.io`
- Framework: Astro + Starlight
- Math rendering: KaTeX through `remark-math` and `rehype-katex`
- Languages: English root plus Chinese content
- Deployment: GitHub Pages / Vercel build flow

For agent rules, start with `AGENTS.md`. For human project orientation, use this
file and the documents under `docs/`.

## Main Structure

```text
src/
  content/
    docs/
      further-math/
      tmua/
      history-of-math/
      teaching-notes/
      about.md
      index.md
  assets/
  styles/
    custom.css
public/
scripts/
tikz-src/
```

Sidebar configuration lives in `astro.config.mjs`. Most content navigation uses
Starlight autogeneration.

## Daily Commands

```powershell
npm run dev
npm run build
npm run preview
```

Use `docs/maintain-site.md` for build and release checks, and
`docs/maintain-content.md` for Markdown, KaTeX, and naming rules.
