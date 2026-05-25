# STEP Audit Item Task Card

Use this when starting one STEP website audit item.

1. Read `AGENTS.md`.
2. Read `docs/step-long-task.md`.
3. Read `PROGRESS.md` and select the first unchecked item under `## Next`.
4. Run:

```powershell
node scripts/step-static-audit.mjs <path-to-step-md>
```

5. Repair only the selected item.
6. Verify:

```powershell
node scripts/step-static-audit.mjs <path-to-step-md>
npm run build
node scripts/step-browser-audit.mjs <path-or-slug>
```

7. Update `PROGRESS.md` only after verification passes.
