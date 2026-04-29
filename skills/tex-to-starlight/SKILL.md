---
name: tex-to-starlight
description: >
  Convert LaTeX (.tex) teaching materials to Starlight-ready Markdown for the TMUA personal website.
  Handles arbitrary TeX formats, bilingual content, image extraction, and generates paired
  English/Chinese Markdown files. Use when the user provides a .tex file and asks to publish it
  to the website, or mentions "导入讲义", "TeX 转 Markdown", "文章转换".
---

# TeX → Starlight Markdown Converter

Converts LaTeX teaching materials into bilingual Markdown for the Astro + Starlight website at `/home/admin/.openclaw/workspace-academic/yizi-wang.github.io/`.

## Core Rules

### 1. Bilingual Split (MANDATORY)

Starlight i18n requires separate files for English and Chinese. Even if input TeX mixes both, output must be split:

| Output Path | Content |
|---|---|
| `src/content/docs/tmua/<filename>.md` | English version |
| `src/content/docs/zh/tmua/<filename>.md` | Chinese version |

**The `<filename>` MUST be identical for both files.** AI generates the name (e.g. `A1_Algebra_Basics.md`). Never use Chinese characters in filenames.

### 2. KaTeX Syntax (CRITICAL — known failures)

- **Inline math**: `$...$` or `\( ... \)`
- **Display math**: `$$...$$` on its own line
- **Multi-line environments**: `\begin{aligned}` and `\end{aligned}` **must each be on a separate line** from `$$`:

```
$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2
\end{aligned}
$$
```

❌ **Never write**: `$$\begin{aligned}...` (single line) — this breaks remark-math

- **No `\begin{equation}` or `\begin{displaymath}`** — use `$$...$$` instead
- Convert `\frac{a}{b}` → `$\frac{a}{b}$` (wrap in delimiters)
- Convert `\text{...}` inside math to plain text where possible

### 3. Markdown Structure

```markdown
---
title: "Module Title"
---

# Module Heading

> **Syllabus**: MM1.1, ...
> **Paper**: P1/P2 ...

## Section Heading

Content with `$inline$` and `$$display$$` math.
```

- Use `##` for sections, `###` for subsections
- Tables use standard GFM syntax
- Remove LaTeX-only commands (`\newpage`, `\vspace`, `\hspace`, etc.)
- Keep `\\` line breaks in `aligned` environments only

### 4. Image Handling

- Extract images referenced via `\includegraphics{path}` from the TeX
- Copy image files to `src/assets/images/`
- Reference in Markdown as `![alt](../../assets/images/filename.png)`
- If image is embedded in TeX (TikZ, PSTricks), describe it as text or flag for manual creation

### 5. Conversion Notes

After conversion, provide a brief summary:

```
## 转换备注
- 源文件: xxx.tex
- 生成文件: A1_Algebra_Basics.md (EN) + zh/A1_Algebra_Basics.md (ZH)
- 图片: N 张 → src/assets/images/
- ⚠️ 需注意: [列出转换中不确定或有风险的地方]
```

## Workflow

1. Read the .tex file
2. Analyze structure: sections, subsections, math environments, images
3. Generate a matching filename (English, no spaces/special chars, e.g. `A1_Algebra_Basics.md`)
4. Create English version → `src/content/docs/tmua/<filename>.md`
5. Create Chinese version → `src/content/docs/zh/tmua/<filename>.md`
6. Extract images if any
7. Run `npm run build` to verify no KaTeX errors
8. Report conversion notes

## Input Variations

TeX format is not fixed. Common patterns include:

- `\section{}`, `\subsection{}`, `\subsubsection{}`
- `\begin{itemize}`, `\begin{enumerate}`, `\begin{description}`
- `\begin{align}`, `\begin{align*}`, `\begin{aligned}`
- `\begin{tabular}`, `\begin{array}`
- `\begin{proof}`, `\begin{theorem}`, `\begin{example}`
- Inline math: `$...$`, `\( ... \)`
- Display math: `$$...$$`, `\[ ... \]`

Map each appropriately to Markdown + KaTeX. When uncertain, prefer readability.
