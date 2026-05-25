# TMUA Paper Review Task Card

Use this when starting one TMUA practice review paper.

1. Read `AGENTS.md`.
2. Read `docs/tmua-long-task.md`.
3. Read `TMUA_PROGRESS.md` and `TMUA_LONG_TASK.md`.
4. Select the first unchecked paper.
5. Review only that paper's questions.
6. Verify:

```powershell
node scripts/tmua-static-audit.mjs --paper <YYYY-PN>
npm run build
node scripts/tmua-browser-audit.mjs --paper <YYYY-PN> --base http://localhost:4321
```

7. Update `TMUA_PROGRESS.md` only after all checks pass.
