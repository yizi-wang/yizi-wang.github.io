---
name: starlight-publish
description: >
  Validate, build-test, and publish changes to the Starlight website. Checks MDX/Markdown
  integrity, Aside components, KaTeX rendering, bilingual filename matching, then runs build,
  git commit, and push. Use when the user asks to "发布", "检查并推送", "deploy website",
  or after converting TeX files and ready to go live.
---

# Starlight Website Publish Checklist

Validates and publishes changes to `/home/admin/.openclaw/workspace-academic/yizi-wang.github.io/`.

## Pre-flight Checks

Run ALL checks before attempting build. Fix issues in order.

### 1. Frontmatter Integrity

Every `.md`/`.mdx` file must have valid frontmatter:

```bash
cd /home/admin/.openclaw/workspace-academic/yizi-wang.github.io

# Check all new/modified files have frontmatter
for f in src/content/docs/teaching-notes/s2/*.mdx src/content/docs/zh/teaching-notes/s2/*.mdx; do
  first_line=$(head -1 "$f")
  if [ "$first_line" != "---" ]; then
    echo "BROKEN: $f (first line: $first_line)"
  fi
done
```

**Common corruption patterns:**
- Missing closing `---` → `title: Required` error
- Extra `---` after frontmatter → build failure
- Blank lines inside frontmatter → parsing error
- Python scripts that process content often corrupt `---` delimiters

### 2. Aside Component Validation (Markdown files)

```bash
# Check for invalid Aside types
grep -rn ':::success' src/content/docs/ --include="*.md"
# Must return NOTHING — 'success' is not a valid Aside type

# Check for <Aside> JSX components (should use ::: syntax instead)
grep -rn '<Aside' src/content/docs/ --include="*.md"
# Must return NOTHING — use ::: syntax in .md files

# Check ::: syntax is properly closed
for f in src/content/docs/teaching-notes/**/*.md; do
  open=$(grep -c '^:::' "$f" | head -1)
  # Each :::type should have a matching ::: closer
done
```

### 3. KaTeX / Math Validation

```bash
# Check for Chinese characters inside display math blocks
python3 << 'EOF'
import re, glob
for f in glob.glob('src/content/docs/zh/**/*.mdx', recursive=True):
    with open(f) as fh:
        content = fh.read()
    for m in re.finditer(r'\$\$(.*?)\$\$', content, re.DOTALL):
        block = m.group(1)
        if re.search(r'[\u4e00-\u9fff]', block):
            parts = re.split(r'(\\text\{[^}]*\})', block)
            for j, part in enumerate(parts):
                if j % 2 == 0 and re.search(r'[\u4e00-\u9fff]', part):
                    print(f"ISSUE: {f} has Chinese in display math")
                    break
EOF

# Check for \underline{\hspace{}} (causes MDX parse errors)
grep -rn '\\underline{\\hspace' src/content/docs/ --include="*.mdx"
# Must return NOTHING

# Check $$ and \begin{aligned} are on separate lines
grep -n '^\$\$\\begin{aligned}' src/content/docs/ --include="*.mdx" -r
# Must return NOTHING
```

### 4. Bilingual Filename Matching

```bash
# Check EN/ZH filenames match for teaching-notes
for f in src/content/docs/teaching-notes/s2/*.mdx; do
  base=$(basename "$f")
  zh="src/content/docs/zh/teaching-notes/s2/$base"
  if [ ! -f "$zh" ]; then
    echo "MISSING ZH: $zh"
  fi
done

# Same check for tmua/
for f in src/content/docs/tmua/*.md; do
  base=$(basename "$f")
  zh="src/content/docs/zh/tmua/$base"
  if [ ! -f "$zh" ]; then
    echo "MISSING ZH: $zh"
  fi
done
```

### 5. SVG Image Check

```bash
# Verify SVG files have white background (for dark mode)
for f in public/images/*.svg; do
  if ! grep -q 'fill="white"' "$f"; then
    echo "NO WHITE BG: $f"
  fi
done
```

## Build & Publish

### Step 1: Build

```bash
cd /home/admin/.openclaw/workspace-academic/yizi-wang.github.io
npm run build
```

Expected: `XX page(s) built in XX.XXs` → `Complete!`

**If build fails:**
1. Read the error message carefully — it usually points to the exact file and line
2. Common errors:
   - `title: Required` → check frontmatter
   - `Expected component 'Aside' to be defined` → check import statement
   - `Could not parse expression with acorn` → check for `{}` in math blocks
   - `katex-error` → check math syntax
3. Fix and rebuild

### Step 2: Verify Output

```bash
# Page count (should match expected, not doubled)
find dist -name "index.html" | wc -l

# No KaTeX errors in rendered HTML
grep -r 'katex-error' dist/ | wc -l
# Must be 0
```

### Step 3: Git Commit

```bash
git add -A
git status  # Review what will be committed
git commit -m "feat: <description>"
```

**Commit message conventions:**
- `feat:` — new content
- `fix:` — bug fixes
- `chore:` — maintenance

**⚠️ Do NOT merge to main without user confirmation.**

### Step 4: Push

```bash
git push origin master
```

### Step 5: Confirm

Tell user:
- Commit hash
- Files changed (count)
- GitHub Actions deployment time (~2-3 min)
- Ask user to verify on the live site

## Known Pitfalls Quick Reference

| Issue | Symptom | Fix |
|---|---|---|
| Missing frontmatter `---` | `title: Required` | Add closing `---` |
| Extra `---` in frontmatter | Build failure | Remove extra delimiters |
| `:::success` | Invalid Aside type | Use `tip` instead |
| `<Aside>` in `.md` | Not recognized | Use `:::` syntax |
| `.mdx` extension | JSX breaks LaTeX | Use `.md` |
| Chinese in `$$...$$` | KaTeX unicode error | Move Chinese outside |
| `\underline{\hspace{}}` | Parse error | Replace with `___` |
| `$$\begin{aligned}` same line | KaTeX parse error | Separate lines |
| EN/CN filename mismatch | Sidebar duplication | Rename to match |
| SVG no white background | Dark mode text invisible | Add `<rect fill="white"/>` |
