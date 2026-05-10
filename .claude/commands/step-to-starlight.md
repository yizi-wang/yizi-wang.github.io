Generate a Starlight page for a STEP exam paper from the database.

Input: $ARGUMENTS — exam identifier, e.g. "step2-2018", "step3-2022"

## Workflow

### 1. Generate scaffold

Parse the exam and year from $ARGUMENTS (e.g. "step2-2018" → exam=STEP2, year=2018).

Run the generator script:

```bash
cd "C:\Users\46537\OneDrive\claude workspace\teaching-resources\STEP\handouts"
python -X utf8 generate_starlight.py STEP2 2018
```

### 2. Write detailed solutions

Read the generated .md file. For each question that has a `<!-- TODO: Write detailed solution -->` placeholder:

- Launch 4 subagents in parallel (Q1-Q2, Q3-Q4, Q5-Q6, Q7-Q8)
- Each agent receives the full question text and must write a complete step-by-step solution
- Solutions should use LaTeX math: `$...$` inline, `$$...$$` display
- Do NOT use `\tag` — use `\qquad \text{(...)}` instead
- Keep prose concise but show ALL algebraic working
- Use `**Part (i)**` etc. for sub-parts

### 3. Embed solutions

Replace each `<!-- TODO: Write detailed solution for QN -->` placeholder with the corresponding solution from the subagents.

### 4. Verify

Restart the dev server and open the page in browser:

```bash
# Kill old server, start new one
powershell -Command "Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force"
cd "C:\Users\46537\OneDrive\claude workspace\web-projects\yizi-wang.github.io"
npm run dev
# Open http://localhost:4321/step/<slug>/
```

### 5. Update index.md

Add a link to the new page in `src/content/docs/step/index.md` under the appropriate STEP section.
