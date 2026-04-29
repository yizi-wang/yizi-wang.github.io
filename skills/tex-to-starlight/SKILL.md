---
name: tex-to-starlight
description: >
  Convert LaTeX (.tex) teaching materials to Starlight-ready MDX for the personal website.
  Handles arbitrary TeX formats, bilingual content, tcolorbox→Aside conversion, SVG diagram
  generation, and multi-modal image verification. Use when the user provides a .tex file
  and asks to publish it to the website, or mentions "导入讲义", "TeX 转 Markdown".
---

# TeX → Starlight MDX Converter

Converts LaTeX teaching materials into bilingual MDX for the Astro + Starlight website at
`/home/admin/.openclaw/workspace-academic/yizi-wang.github.io/`.

## Output Paths

| Content Type | English Path | Chinese Path |
|---|---|---|
| TMUA Handouts | `src/content/docs/tmua/<name>.md` | `src/content/docs/zh/tmua/<name>.md` |
| S2 / Teaching Notes | `src/content/docs/teaching-notes/s2/<name>.mdx` | `src/content/docs/zh/teaching-notes/s2/<name>.mdx` |
| History of Math | `src/content/docs/history-of-math/<name>.md` | `src/content/docs/zh/history-of-math/<name>.md` |

**Filename MUST be identical for EN and ZH.** English only, no Chinese characters, use underscores.

## Core Rules

### 1. Bilingual Split (MANDATORY)

Starlight i18n requires separate files. Even if input TeX is mixed, output must be split into EN + ZH.
Chinese version is AI-translated (natural translation, not word-for-word).

### 2. File Extension: ALWAYS use `.md`

**ALWAYS use `.md`** (not `.mdx`). The MDX JSX parser runs before remark-math and treats LaTeX `{}` (like `\text{}`, `\frac{}`) as JSX expressions, causing build failures.

`.md` files skip JSX parsing entirely, so remark-math can handle LaTeX normally.

### 3. Aside Components: Use `:::` Syntax (NOT `<Aside>`)

Since we use `.md` files, we cannot use JSX components. Use Starlight's native `:::` directive syntax:

```
:::note[Title]
Content here with **bold** and $math$.
:::

:::tip[Key Insight]
Content here.
:::

:::caution[Warning]
Content here.
:::

:::danger[Critical]
Content here.
:::
```

**Valid type values — ONLY 4:**
- `note` — exercises, neutral information, definitions
- `tip` — key insights, beautiful symmetry, helpful hints
- `caution` — constraints, important warnings, central challenges
- `danger` — common pitfalls, critical errors

**❌ NEVER use `success`** — it does NOT exist in Starlight!
**❌ NEVER use `<Aside>` components** — they require `.mdx` which breaks LaTeX!
**❌ NEVER use `.mdx` extension** — JSX parser will break `\text{}`, `\frac{}`, etc.

```yaml
---
title: "Page Title Here"
---
```

**Rules:**
- Opening `---` on line 1, closing `---` after title
- **NO extra `---` after the closing delimiter** — this breaks the build
- **NO blank lines inside the frontmatter block**
- Title must be quoted if it contains special characters (`:`, `-`, etc.)
- After conversion scripts, **always verify the frontmatter is intact** — scripts often corrupt it

### 4. Frontmatter (CRITICAL — frequent failure point)

**Inline math:** `$...$`
**Display math:** `$$...$$` on its own line

**Multi-line environments — `$$` and `\begin{aligned}` MUST be on separate lines:**
```
$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2
\end{aligned}
$$
```

❌ **Never write**: `$$\begin{aligned}...` (single line) — breaks remark-math

**Chinese characters in math mode (CRITICAL):**
- KaTeX strict mode **does NOT allow Chinese characters** even inside `\text{}`
- **Move all Chinese text OUTSIDE the `$$...$$` block**
- Example: `$$P(X=k) = \frac{\lambda^k}{k!}$$，其中 $k = 0, 1, 2, ...$`
- NOT: `$$P(X=k) = \frac{\lambda^k}{k!} \text{ 其中 } k = 0, 1, 2, ...$$`

**`\underline{\hspace{}}` in MDX (CRITICAL):**
- Curly braces `{}` in MDX are interpreted as JSX expressions
- `\underline{\hspace{3cm}}` causes `acorn` parse errors
- **Replace with `___`** (three underscores) or a descriptive placeholder

**Other rules:**
- No `\begin{equation}` or `\begin{displaymath}` — use `$$...$$` instead
- No `\vspace{}`, `\hspace{}`, `\clearpage` — remove them
- Convert `\begin{enumerate}[label=(\alph*)]` to numbered lists

### 6. TikZ / Diagrams

TikZ cannot render in web browsers. Options:

**Option A: SVG (preferred for important diagrams)**
1. Write SVG using Python string concatenation (no dependencies needed)
2. Save to `public/images/<name>.svg`
3. **Add white background**: `<rect width="100%" height="100%" fill="white"/>`
4. Reference as `![Diagram](/images/<name>.svg)`
5. **Verify with multi-modal model**: convert SVG → PNG (sharp), then use image tool

**Option B: Descriptive text (for simple diagrams)**
Replace with a text description or markdown table.

**SVG generation workflow:**
```bash
# Write SVG as Python string (no dependencies)
python3 -c "
svg = '''<svg>...</svg>'''
with open('public/images/diagram.svg', 'w') as f:
    f.write(svg)
"

# Convert to PNG for verification
cd /tmp && npm install sharp
node -e "
const sharp = require('sharp');
const fs = require('fs');
sharp(fs.readFileSync('public/images/diagram.svg')).png().toFile('/tmp/diagram.png');
"

# Then use image tool to verify: no overlaps, readable text, white background
```

### 7. Content Preservation

- Keep ALL examples, exercises, homework questions exactly as-is
- Keep ALL math formulas exactly as-is from source
- Tables: convert to markdown GFM format
- Remove `\vspace{}`, `\clearpage`, `\newpage`
- Convert `\begin{itemize}`/`\begin{enumerate}` to markdown lists
- Solution blocks with `\vspace{}` → keep the label, remove the vspace

## Conversion Checklist

Before declaring conversion complete, verify ALL of:

- [ ] File extension: `.md` (NEVER `.mdx`)
- [ ] Frontmatter: `---` open AND close present, no extra `---`
- [ ] Aside syntax: `:::type[title]` (NEVER `<Aside>`, NEVER `success`)
- [ ] No Chinese in `$$...$$` blocks
- [ ] No `\underline{\hspace{}}` (use `___` instead)
- [ ] No `\vspace{}`, `\clearpage`
- [ ] `$$` and `\begin{aligned}` on separate lines
- [ ] EN and ZH filenames match exactly
- [ ] SVG diagrams have white background

## Common Failure Patterns

| Pattern | Symptom | Fix |
|---|---|---|
| `$$\begin{aligned}` same line | KaTeX parse error | Separate onto own lines |
| `\text{中文}` in math | KaTeX unicode error | Move Chinese outside `$$` |
| `\underline{\hspace{3cm}}` | MDX acorn parse error | Replace with `___` |
| `<Aside type="success">` | Component not found | Use `tip` instead |
| `<Aside>` in `.mdx` | JSX breaks LaTeX | Use `:::` in `.md` |
| `.mdx` extension | JSX parser breaks `\text{}`, `\frac{}` | Use `.md` |
| Missing frontmatter `---` | `title: Required` error | Add closing `---` |
| Extra `---` after frontmatter | Build failure | Remove extra `---` |
| EN/CN filename mismatch | Sidebar duplication | Rename to match |
