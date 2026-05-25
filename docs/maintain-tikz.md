# TikZ Image Maintenance

Use this for source images written in TikZ and compiled to SVG.

## Locations

- Source TeX: `tikz-src/`
- Output SVG: `public/images/tikz/`

## Toolchain

The local toolchain is MiKTeX with `latex` and `dvisvgm`.

Known path:

```text
C:\Users\46537\AppData\Local\Programs\MiKTeX\miktex\bin\x64
```

## Compile Commands

From the repository root:

```powershell
cd tikz-src
powershell -ExecutionPolicy Bypass -File build-all.ps1 fp3-unit-hyperbola
```

Compile all `.tex` files:

```powershell
cd tikz-src
powershell -ExecutionPolicy Bypass -File build-all.ps1
```

## Add a New Image

1. Create a `.tex` file in `tikz-src/`.
2. Use the `standalone` class.
3. Compile to SVG under `public/images/tikz/`.
4. Reference it in Markdown as:

```markdown
![description](/images/tikz/file-name.svg)
```

## Template

```latex
\documentclass[border=5pt]{standalone}
\usepackage{tikz}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}[scale=1.8, >=stealth]
  % image content
\end{tikzpicture}
\end{document}
```

## Notes

- `--no-fonts` makes `dvisvgm` turn text into vector paths.
- `--exact` uses exact coordinates.
- MiKTeX may download missing packages the first time a new package is used.
- Compiled SVG files are static assets and can be committed when the task scope
  includes image updates.
