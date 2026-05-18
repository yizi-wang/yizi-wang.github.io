# TMUA Practice System Audit Progress

## Done

## In Progress

## Next
- [x] 2016 Paper 1
- [ ] 2016 Paper 2
- [ ] 2017 Paper 1
- [ ] 2017 Paper 2
- [ ] 2018 Paper 1
- [ ] 2018 Paper 2
- [ ] 2019 Paper 1
- [ ] 2019 Paper 2
- [ ] 2020 Paper 1
- [ ] 2020 Paper 2
- [ ] 2021 Paper 1
- [ ] 2021 Paper 2
- [ ] 2022 Paper 1
- [ ] 2022 Paper 2
- [ ] 2023 Paper 1
- [ ] 2023 Paper 2

## Notes
- One long-task session handles exactly one unchecked paper item.
- Within the paper item, dispatch one independent subagent per question whenever subagents are available.
- Each subagent checks one question end to end: data shape, question text, options, answer, solution, image references, topic tags, module links, flexible section/skill tags, and browser rendering.
- The working public practice route is `/practice/tmua/`; keep deep links such as `/practice/tmua/?id=2019-P1-Q3` working.
- Static audit command: `node scripts/tmua-static-audit.mjs --paper 2019-P1`.
- Browser audit command after build/preview: `node scripts/tmua-browser-audit.mjs --paper 2019-P1 --base http://localhost:4321`.
- Build verification: on Windows, prefer `Remove-Item -Recurse -Force .astro; npx.cmd astro build` if `npm run build` hits shell compatibility issues.
- Do not mark an item complete until static audit, build, and browser audit all pass for that paper.
- Commit only relevant TMUA practice files, TMUA handout classification changes, audit scripts, and this progress file.
