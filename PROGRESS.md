# STEP Website Audit Progress

## Done

## In Progress

## Next
- [x] src/content/docs/step/index.md
- [x] src/content/docs/step/step2-2024.md
- [x] src/content/docs/step/step2-2023.md
- [x] src/content/docs/step/step2-2022.md
- [x] src/content/docs/step/step2-2021.md
- [x] src/content/docs/step/step2-2020.md
- [x] src/content/docs/step/step2-2019.md
- [x] src/content/docs/step/step2-2018.md
- [x] src/content/docs/step/step2-2017.md
- [x] src/content/docs/step/step2-2016.md
- [x] src/content/docs/step/step2-2015.md
- [x] src/content/docs/step/step2-2014.md
- [ ] src/content/docs/step/step2-2013.md
- [ ] src/content/docs/step/step2-2012.md
- [ ] src/content/docs/step/step2-2011.md
- [ ] src/content/docs/step/step2-2010.md
- [ ] src/content/docs/step/step2-2009.md
- [ ] src/content/docs/step/step2-2008.md
- [ ] src/content/docs/step/step2-2007.md
- [ ] src/content/docs/step/step2-2006.md
- [ ] src/content/docs/step/step2-2005.md
- [ ] src/content/docs/step/step2-2004.md
- [ ] src/content/docs/step/step2-2003.md
- [ ] src/content/docs/step/step2-2002.md
- [ ] src/content/docs/step/step2-2001.md
- [ ] src/content/docs/step/step2-2000.md
- [ ] src/content/docs/step/step2-1999.md
- [ ] src/content/docs/step/step2-1998.md
- [ ] src/content/docs/step/step3-2024.md
- [ ] src/content/docs/step/step3-2023.md
- [ ] src/content/docs/step/step3-2022.md
- [ ] src/content/docs/step/step3-2021.md
- [ ] src/content/docs/step/step3-2020.md
- [ ] src/content/docs/step/step3-2019.md
- [ ] src/content/docs/step/step3-2018.md
- [ ] src/content/docs/step/step3-2017.md
- [ ] src/content/docs/step/step3-2016.md
- [ ] src/content/docs/step/step3-2015.md
- [ ] src/content/docs/step/step3-2014.md
- [ ] src/content/docs/step/step3-2013.md
- [ ] src/content/docs/step/step3-2012.md
- [ ] src/content/docs/step/step3-2011.md
- [ ] src/content/docs/step/step3-2010.md
- [ ] src/content/docs/step/step3-2009.md
- [ ] src/content/docs/step/step3-2008.md
- [ ] src/content/docs/step/step3-2007.md
- [ ] src/content/docs/step/step3-2006.md
- [ ] src/content/docs/step/step3-2005.md
- [ ] src/content/docs/step/step3-2004.md
- [ ] src/content/docs/step/step3-2003.md
- [ ] src/content/docs/step/step3-2002.md
- [ ] src/content/docs/step/step3-2001.md
- [ ] src/content/docs/step/step3-2000.md
- [ ] src/content/docs/step/step3-1999.md
- [ ] src/content/docs/step/step3-1998.md

## Notes
- Process exactly one unchecked item per long-task session.
- Static audit: `node scripts/step-static-audit.mjs <path-to-step-md>`.
- Build: `npm run build`.
- Browser audit after build: `node scripts/step-browser-audit.mjs <path-or-slug>`.
- Full STEP static sweep: `node scripts/step-static-audit.mjs`.
- Missing `Hint` sections may be added from the existing problem and solution when there is enough basis.
- Missing `Examiner Notes` should not be invented; leave absent unless already present or clearly recoverable from existing content.
- Do not touch unrelated dirty worktree files. Commit only relevant STEP files, audit scripts, and this progress file.
