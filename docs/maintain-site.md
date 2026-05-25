# Site Maintenance

Use this for framework, build, preview, sidebar, style, or release-adjacent work.

## Tech Stack

| Layer | Tool |
| --- | --- |
| Framework | Astro 6.1.9 + Starlight 0.38.4 |
| Math | KaTeX 0.16.45 + remark-math + rehype-katex |
| MDX package | `@astrojs/mdx` 5.0.4, but teaching docs should stay `.md` |
| Deploy | GitHub Pages / Vercel automatic build |

## Development

```powershell
npm run dev
npm run build
npm run preview
```

The normal build is the default verification after site or content edits:

```powershell
npm run build
```

For dependency-sensitive work or public-release preparation, run a full clean
verification:

```bash
rm -rf .astro && npm ci && npm run build
```

If Windows shell compatibility blocks the normal build command:

```powershell
Remove-Item -Recurse -Force .astro
npx.cmd astro build
```

## Build Cache

`.astro` can keep stale state. The `package.json` build script is expected to
clean it before building. If a build failure looks cache-related, remove
`.astro` and rebuild; do not hand-edit `.astro` or `dist/`.

## Sidebar

Edit `astro.config.mjs` only when the navigation structure itself needs to
change. Prefer Starlight `autogenerate` for ordinary content directories.

## Styles

Custom site-wide styles live in `src/styles/custom.css`. Keep style changes
scoped to the requested page or component behavior.

## Publishing Boundary

`git push` triggers the public deployment path through the repository hosting
flow. Do not push or publish without explicit user confirmation.
