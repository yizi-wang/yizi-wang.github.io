---
name: starlight-publish
description: >
  Validate, build-test, and publish changes to the TMUA Starlight website. Checks KaTeX rendering,
  bilingual filename matching, frontmatter completeness, then runs build, git commit, and push.
  Use when the user asks to "发布文章", "检查并推送", "deploy website", or after converting
  TeX files and ready to go live.
---

# Starlight Website Publish Checklist

Validates and publishes changes to `/home/admin/.openclaw/workspace-academic/yizi-wang.github.io/`.

## Pre-flight Checks

### 1. KaTeX Rendering

```bash
cd /home/admin/.openclaw/workspace-academic/yizi-wang.github.io
npm run build 2>&1 | grep -i "katex\|error"
```

After build, check HTML output for errors:

```bash
grep -c 'katex-error' dist/<path>/index.html
```

**Must be 0.** If errors exist, check:
- `$$` and `\begin{...}` on separate lines
- No `\begin{equation}` (use `$$` instead)
- All `$` pairs are balanced

### 2. Bilingual Filename Matching

```bash
# English files
ls src/content/docs/tmua/
# Chinese files
ls src/content/docs/zh/tmua/
```

Every file in `zh/tmua/` must have an exact match in `tmua/` (same filename). Mismatched names cause sidebar duplication.

### 3. Frontmatter Check

Every `.md` file must have valid frontmatter:

```yaml
---
title: "Page Title"
---
```

Missing or malformed frontmatter causes build failures.

### 4. No Dead Links

```bash
npm run build 2>&1 | grep -i "broken\|404\|not found"
```

## Build & Publish

### Step 1: Build

```bash
cd /home/admin/.openclaw/workspace-academic/yizi-wang.github.io
npm run build
```

Expected output: `43 page(s) built in XX.XXs` followed by `Complete!`.

### Step 2: Verify Output

```bash
# Check page count (should be ~43+, not doubled)
find dist -name "index.html" | wc -l
# Check no KaTeX errors
grep -r 'katex-error' dist/ | wc -l
```

### Step 3: Git Commit

```bash
cd /home/admin/.openclaw/workspace-academic/yizi-wang.github.io
git add -A
git status  # Show user what will be committed
git commit -m "<describe change>"
```

⚠️ **Do NOT merge to main without user confirmation** if on a feature branch.

### Step 4: Push

```bash
git push origin master
```

### Step 5: Confirm

Tell user:
- Commit hash
- Files changed
- Expected deployment time (~2-3 min via GitHub Actions)

## Known Pitfalls

| Issue | Symptom | Fix |
|---|---|---|
| `$$\begin{aligned}` same line | KaTeX parse error | Separate `$$` and `\begin{aligned}` |
| EN/CN filename mismatch | Sidebar shows both languages | Rename to match |
| Missing `title` in frontmatter | Build fails | Add frontmatter |
| OOM during build | Process killed (exit 137) | Server has 2GB RAM — avoid `npm install` on server |
