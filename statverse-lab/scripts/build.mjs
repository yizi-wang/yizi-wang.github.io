import {mkdir,cp,rm} from 'node:fs/promises';
await rm(new URL('../dist/',import.meta.url),{recursive:true,force:true});await mkdir(new URL('../dist/',import.meta.url),{recursive:true});
for(const p of ['index.html','style.css'])await cp(new URL('../'+p,import.meta.url),new URL('../dist/'+p,import.meta.url));
await cp(new URL('../src/',import.meta.url),new URL('../dist/src/',import.meta.url),{recursive:true});
console.log('STATVERSE static build complete; all source modules included.');
