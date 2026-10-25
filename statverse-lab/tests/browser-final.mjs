/** Developer global browser/print/offline checks; not independent review or a student study. */
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const base=process.env.STATVERSE_BASE_URL||'http://127.0.0.1:4174';
const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
page.setDefaultTimeout(6500);
const consoleErrors=[],errors=[],results=[],scans=[],external=[],performanceEvidence={};
page.on('pageerror',e=>errors.push(String(e)));
page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text())});
page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
await page.route('**/*',route=>{if(!route.request().url().startsWith(base)){external.push(route.request().url());return route.abort()}return route.continue()});
const $=s=>page.locator(s),snap=()=>page.evaluate(()=>window.STATVERSE.getSnapshot());
const choose=async v=>{if(await $('#lab-switch').isVisible())await $('#lab-switch').selectOption(v);else await $(`[data-lab="${v}"]`).click()};
const change=async(s,v)=>{await $(s).fill(String(v));await $(s).dispatchEvent('change')};
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t,`${a} vs ${b}`);
async function test(name,fn){const t=Date.now();try{await fn();results.push({name,status:'PASS',ms:Date.now()-t})}catch(e){results.push({name,status:'FAIL',ms:Date.now()-t,error:String(e)});console.log(name,String(e))}}
await page.goto(base);
await test('nine labs: visible control/image names, unique IDs and no whole-page overflow at four viewports',async()=>{
 for(const size of [{width:320,height:740},{width:390,height:844},{width:1440,height:900},{width:1920,height:1080}]){
  await page.setViewportSize(size);
  for(const lab of ['sampling','clt','coverage','correlation','mean','discrete','chisquare','design','normal']){
   await choose(lab);
   const a=await page.evaluate(()=>{
    const visible=e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return !!(r.width&&r.height)&&s.visibility!=='hidden'&&s.display!=='none'&&!e.closest('[inert]')};
    const name=e=>e.getAttribute('aria-label')||(e.getAttribute('aria-labelledby')||'').split(' ').map(id=>document.getElementById(id)?.textContent||'').join(' ').trim()||[...(e.labels||[])].map(l=>l.textContent).join(' ').trim()||(['BUTTON','A','SUMMARY'].includes(e.tagName)?e.textContent.trim():'')||e.getAttribute('title');
    const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);
    return {unlabelled:[...document.querySelectorAll('input,select,textarea,button,[role="button"],svg[role="img"]')].filter(visible).filter(e=>!name(e)).map(e=>e.outerHTML.slice(0,160)),duplicates:ids.filter((id,i)=>ids.indexOf(id)!==i),overflow:document.documentElement.scrollWidth-innerWidth,current:[...document.querySelectorAll('[data-lab][aria-current="page"]')].map(e=>e.dataset.lab)};
   });scans.push({viewport:size,lab,...a});assert.deepEqual(a.unlabelled,[],lab);assert.deepEqual(a.duplicates,[],lab);assert.ok(a.overflow<=1,`${lab}: ${a.overflow}`);assert.deepEqual(a.current,[lab]);
  }
 }
});
await test('keyboard skip link focuses main; named modal Escape restores its opener; native lab switch changes current state',async()=>{
 await page.setViewportSize({width:390,height:844});await page.goto(base);await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement?.className),'skip');await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement?.id),'main');
 await $('#help').focus();await page.keyboard.press('Enter');assert.ok(await page.getByRole('dialog',{name:'From a population to an estimate.'}).isVisible());assert.match(await $('#guide').textContent(),/In the card lab, n independent draws with replacement/);assert.match(await $('#guide').textContent(),/finite-frame lab instead selects distinct units without replacement/);await page.keyboard.press('Escape');assert.equal(await page.evaluate(()=>document.activeElement?.id),'help');await choose('design');await $('#help').click();assert.match(await $('#guide').textContent(),/those observations are not assumed IID/);await page.keyboard.press('Escape');
 await $('#lab-switch').focus();await page.keyboard.press('End');await page.keyboard.press('Enter');assert.equal((await snap()).lab,'normal');assert.equal(await $('[aria-current=page][data-lab]').getAttribute('data-lab'),'normal');
});
await test('actual18-minute Teacher route preserves seed/sample, uses weighted exact cases and distinguishes n/R',async()=>{
 await page.setViewportSize({width:1920,height:1080});await page.goto(base);await $('#teacher').click();await $('#teacher-stage').selectOption('sample');await $('#estimator').selectOption('mean');await change('#seed','aurora-2026');await $('#reset').click();await $('#teacher-stage').selectOption('population');await $('#teacher-next').click();await $('#hide-worked').check();await $('#draw').click();let s=await snap();assert.deepEqual(s.samples[0].ids,[2,4,0]);assert.equal(s.effectiveAnswersHidden,true);assert.equal(await $('#observed').evaluate(e=>getComputedStyle(e).visibility),'hidden');assert.doesNotMatch(await page.locator('#main').ariaSnapshot(),/16\.667/);await $('#hide-worked').uncheck();near(Number(await $('#observed').textContent()),50/3,.001);await $('#teacher-next').click();assert.equal((await snap()).teacherStage,'distribution');await $('#trace-point').click();assert.equal((await snap()).samples.length,1);await $('#draw').click();s=await snap();near(s.samples[1].value,16/3);near((s.samples[0].value+s.samples[1].value)/2,11);await $('#sample-picker').fill('1');await $('#sample-picker').dispatchEvent('change');assert.equal((await snap()).selected,0);
 await page.evaluate(()=>{window.STATVERSE_PERF=[];if(PerformanceObserver.supportedEntryTypes.includes('longtask'))new PerformanceObserver(list=>window.STATVERSE_PERF.push(...list.getEntries().map(e=>e.duration))).observe({type:'longtask',buffered:false})});const t=Date.now();await $('#batch').selectOption('200');await $('#run').click();await page.waitForFunction(()=>!window.STATVERSE.getSnapshot().running);s=await snap();assert.equal(s.samples.length,202);performanceEvidence.sampleMeanAdd200={elapsedMs:Date.now()-t,n:s.n,R:s.samples.length,longTaskDurationsMs:await page.evaluate(()=>window.STATVERSE_PERF)};
 const n3se=Number(await $('#se').textContent());near(n3se,Math.sqrt(38.67/3),.001);
 await $('#n').fill('2');await $('#n').dispatchEvent('input');await $('#exact').check();const details=$('#exact-inspector details');await details.locator('summary').click();assert.match(await details.textContent(),/25 cases/);assert.match(await details.textContent(),/0.2025/);await change('#exact-page',3);assert.match(await details.textContent(),/\[40, 40\]/);assert.match(await details.textContent(),/0.0004/);near(Number(await $('#expectation').textContent()),5.3,.001);
 await $('#n').fill('12');await $('#n').dispatchEvent('input');assert.equal((await snap()).samples.length,0);near(Number(await $('#se').textContent()),Math.sqrt(38.67/12),.001);assert.match(await $('#chart-description').textContent(),/20,000|20000|cap|too/i);
});
await test('reduced motion removes the compression ghost while original data/statistic stay available',async()=>{
 await page.goto(base);await $('#draw').click();assert.equal(await $('.sample-flight').count(),0);const s=await snap();assert.deepEqual(s.samples[0].ids,[2,4,0]);assert.equal(s.samples.length,1);await $('#trace-point').click();assert.equal((await snap()).selected,0);
});
await test('printable guide has accessible teacher disclosure and correct distinct student/teacher PDFs',async()=>{
 await page.goto(base+'/guide.html');assert.equal(await page.locator('.teacher-only[open]').count(),0);assert.equal(await $('#answers').getAttribute('aria-pressed'),'false');await $('#answers').focus();await page.keyboard.press('Enter');assert.equal(await $('#answers').getAttribute('aria-pressed'),'true');assert.ok(await page.locator('.teacher-only[open]').count()>0);
 await page.evaluate(()=>{window.print=()=>{window.PRINT_CAPTURE={student:document.body.classList.contains('student-print'),teacher:document.body.classList.contains('teacher-copy')}}});await $('#print-student').click();assert.deepEqual(await page.evaluate(()=>window.PRINT_CAPTURE),{student:true,teacher:false});await page.pdf({path:'evidence/STATVERSE-student-transfer.pdf',format:'A4',printBackground:true});const student=execFileSync('pdftotext',['evidence/STATVERSE-student-transfer.pdf','-'],{encoding:'utf8'});assert.match(student,/Student transfer sheet/);assert.match(student,/New fictional model/);assert.doesNotMatch(student,/Weighted exact expectation|Teacher answers|SE\(T₁\)|preparation checks/i);
 await $('#print-teacher').click();assert.deepEqual(await page.evaluate(()=>window.PRINT_CAPTURE),{student:false,teacher:true});await page.pdf({path:'evidence/STATVERSE-18min-teacher-guide.pdf',format:'A4',printBackground:true});const teacher=execFileSync('pdftotext',['evidence/STATVERSE-18min-teacher-guide.pdf','-'],{encoding:'utf8'});assert.match(teacher,/Teacher answers/);assert.match(teacher,/Weighted exact expectation/);assert.match(teacher,/0–2 MINUTES/i);performanceEvidence.pdfPages={student:(student.match(/\f/g)||[]).length,teacher:(teacher.match(/\f/g)||[]).length};await page.screenshot({path:'evidence/final-guide-desktop.png',fullPage:false});
});
await test('coverage page distinguishes bounded complete, partial, enrichment and absent content with official sources',async()=>{
 await page.goto(base+'/scope.html');assert.ok(await page.getByRole('heading',{name:'Official content map'}).isVisible());assert.equal(await page.locator('#matrix tbody tr').count(),23);for(const label of ['Complete bounded interaction','Partial','Not built'])assert.ok(await page.getByText(label,{exact:true}).count()>0);assert.match(await $('#enrichment').textContent(),/TypeI\/II/);assert.equal(await page.locator('a[href*="qualifications.pearson.com"]').count(),2);await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth<=1));await page.screenshot({path:'evidence/final-scope-mobile.png',fullPage:true});
});
await test('Teacher finite-design method labels meet projection text target and remain keyboard controls',async()=>{
 await page.goto(base);await page.setViewportSize({width:1920,height:1080});await choose('design');await $('#teacher').click();await $('#design-view').selectOption('compare');const buttons=$('#design-compare .text-button');assert.equal(await buttons.count(),4);for(const button of await buttons.all())assert.ok(await button.evaluate(e=>parseFloat(getComputedStyle(e).fontSize)>=18));await buttons.first().focus();await page.keyboard.press('Enter');assert.equal((await snap()).samplingDesign.method,'srs');await page.screenshot({path:'evidence/final-design-compare-teacher.png',fullPage:false});
});
await test('built local package requires no external font/assets/network for all nine labs and reading pages',async()=>{
 const icon=await page.request.get(base+'/favicon.svg');assert.equal(icon.status(),200);assert.match(icon.headers()['content-type'],/image\/svg\+xml/);assert.deepEqual(external,[]);assert.deepEqual(errors,[]);assert.deepEqual(consoleErrors,[]);
});
await browser.close();const out={timestamp:new Date().toISOString(),baseUrl:base,evidenceType:'Developer actual built-output Chromium global/keyboard/print/offline checks. Not a WCAG certification, screen-reader speech trial, independent review or real student study.',results,scans,performanceEvidence,externalRequests:external,pageErrors:errors,consoleErrors};await fs.writeFile('evidence/browser-final-results.json',JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({pass:results.filter(r=>r.status==='PASS').length,total:results.length,failed:results.filter(r=>r.status==='FAIL'),performanceEvidence},null,2));if(results.some(r=>r.status==='FAIL'))process.exitCode=1;
