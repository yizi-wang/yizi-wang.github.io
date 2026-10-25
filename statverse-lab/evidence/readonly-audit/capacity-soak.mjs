/** Developer Chromium capacity observation. No code changes or new methods. */
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const b=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const c=await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const external=[],errors=[],out=[],base='http://127.0.0.1:4174';
await c.route('**/*',r=>{if(!r.request().url().startsWith(base)){external.push(r.request().url());return r.abort()}return r.continue()});
const p=await c.newPage();p.setDefaultTimeout(120000);p.on('pageerror',e=>errors.push(String(e)));
await p.goto(base);await p.waitForFunction(()=>window.STATVERSE);
await p.evaluate(()=>{window.SOAK_LONG=[];if(PerformanceObserver.supportedEntryTypes.includes('longtask'))new PerformanceObserver(l=>window.SOAK_LONG.push(...l.getEntries().map(e=>e.duration))).observe({type:'longtask'});});
async function test(name,fn){let started=Date.now();try{let detail=await fn();out.push({name,status:'PASS',elapsedMs:Date.now()-started,...detail});}catch(e){out.push({name,status:'FAIL',error:String(e),elapsedMs:Date.now()-started});}console.log(JSON.stringify(out.at(-1)))}
async function choose(lab){await p.locator(`[data-lab="${lab}"]`).click()}
const snap=()=>p.evaluate(()=>window.STATVERSE.getSnapshot());
await test('Card cap5000 with n60; first/last identity and reset remain functional',async()=>{
 await p.locator('#n').fill('60');await p.locator('#n').dispatchEvent('input');await p.locator('#draw').click();let initial=(await snap()).samples[0];await p.locator('#batch').selectOption('1000');
 for(let i=0;i<5;i++){await p.locator('#run').click();await p.waitForFunction(()=>!window.STATVERSE.getSnapshot().running)}
 let s=await snap();assert.equal(s.samples.length,5000);assert.equal(s.remaining,0);assert.ok(await p.locator('#draw').isDisabled());assert.ok(await p.locator('#run').isDisabled());assert.equal(s.samples[4999].ids.length,60);
 await p.locator('#sample-picker').fill('1');await p.locator('#sample-picker').dispatchEvent('change');assert.deepEqual((await snap()).samples[0],initial);assert.equal((await snap()).selected,0);
 const longTasks=await p.evaluate(()=>window.SOAK_LONG.splice(0));const nodes=await p.locator('svg *').count();await p.locator('#reset').click();assert.equal((await snap()).samples.length,0);assert.ok(await p.locator('#draw').isEnabled());
 return {R:5000,n:60,svgElementsAtCapacity:nodes,longTaskCount:longTasks.length,longestTaskMs:Math.max(0,...longTasks)};
});
for(const [lab,key,run,pause,one,reset,cap,batch] of [
 ['mean','meanInference','#mean-run','#mean-pause','#mean-one','#mean-reset',2000,200],
 ['discrete','discrete','#dis-run','#dis-pause','#dis-one','#dis-reset',2000,200],
 ['chisquare','chiSquare','#chi-run','#chi-pause','#chi-shuffle','#chi-reset',2000,200],
 ['design','samplingDesign','#design-run','#design-pause','#design-draw','#design-reset',1000,100]
])await test(`${lab}: real RAF batches reach cap${cap}; disabled controls and reset remain coherent`,async()=>{
 await choose(lab);let s=(await snap())[key];assert.ok(s.result);for(let i=0;i<cap/batch;i++){await p.locator(run).click();await p.waitForFunction(k=>!window.STATVERSE.getSnapshot()[k].running,key);}
 s=(await snap())[key];assert.equal(s.records.length,cap);assert.equal(s.remaining,0);assert.ok(await p.locator(run).isDisabled());assert.ok(await p.locator(one).isDisabled());assert.ok(await p.locator(pause).isDisabled());
 const longTasks=await p.evaluate(()=>window.SOAK_LONG.splice(0));await p.locator(reset).click();s=(await snap())[key];assert.equal(s.records.length,0);assert.ok(await p.locator(run).isEnabled());return {R:cap,longTaskCount:longTasks.length,longestTaskMs:Math.max(0,...longTasks)};
});
await test('Post-load navigation still works; no NaN/Infinity geometry, pageerror or network dependency',async()=>{
 for(const lab of ['sampling','clt','coverage','correlation','mean','discrete','chisquare','design','normal']){await choose(lab);assert.equal((await snap()).lab,lab)}
 const bad=await p.evaluate(()=>[...document.querySelectorAll('svg *')].flatMap(e=>[...e.attributes].filter(a=>/^(d|x|y|x1|x2|y1|y2|cx|cy|r|width|height|viewBox|transform|points)$/.test(a.name)&&/NaN|Infinity/.test(a.value)).map(a=>({tag:e.tagName,attribute:a.name}))));assert.deepEqual(bad,[]);assert.deepEqual(errors,[]);assert.deepEqual(external,[]);return {pageErrors:errors,externalRequests:external};
});
await b.close();let report={timestamp:new Date().toISOString(),applicationCommit:'accc8f9435ebfb6109568831704c1d34a350d5f7',evidenceType:'Developer single-session Chromium real requestAnimationFrame capacity audit; not an independent review, long-duration soak, physical-device performance guarantee or student study.',results:out,pageErrors:errors,externalRequests:external};await fs.writeFile('evidence/readonly-audit/capacity-soak-results.json',JSON.stringify(report,null,2)+'\n');if(out.some(r=>r.status==='FAIL'))process.exitCode=1;
