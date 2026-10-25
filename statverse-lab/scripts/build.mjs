import { mkdir, cp, rm } from "node:fs/promises";
await rm(new URL("../dist/", import.meta.url), {
  recursive: true,
  force: true,
});
await mkdir(new URL("../dist/src/", import.meta.url), { recursive: true });
for (const p of ["index.html", "style.css", "src/statistics.js", "src/app.js"])
  await cp(
    new URL("../" + p, import.meta.url),
    new URL("../dist/" + p, import.meta.url),
  );
console.log("STATVERSE static build complete.");
