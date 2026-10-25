/** Five-attribute semantic patch: actual old/new pixels and keyboard/AX checks. */
import {chromium} from 'playwright';import {spawn} from 'node:child_process';import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const servers=[],screens=[],checks=[],errors=[],external=[];const output='/tmp/statverse-semantic-pixel-check';await fs.mkdir(output,{recursive:true});
async function serve(root,port){const child=spawn('python3',['start.py','--port',String(port),'--no-browser'],{cwd:root,stdio:'ignore'});servers.push(child);for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${port}/`)).ok)return}catch{}await new Promise(r=>setTimeout(r,30))}throw Error('server start failed')}
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
try{
await serve('/workspace/statverse-remote-freeze-audit/statverse-lab',4196);await serve('/workspace/yizi-wang.github.io/statverse-lab/dist',4197);
for(const width of [1440,390])for(const version of ['old','new']){
 const base=`http://127.0.0.1:${version==='old'?4196:4197}`;const c=await browser.newContext({viewport:{width,height:width===390?844:900},reducedMotion:'reduce'});await c.route('**/*',r=>{if(!r.request().url().startsWith(base)){external.push(r.request().url());return r.abort()}return r.continue()});const p=await c.newPage();p.setDefaultTimeout(7000);p.on('pageerror',e=>errors.push(String(e)));const $=s=>p.locator(s),snap=()=>p.evaluate(()=>window.STATVERSE.getSnapshot());
 const choose=async lab=>{if(await $('#lab-switch').isVisible())await $('#lab-switch').selectOption(lab);else await $(`[data-lab="${lab}"]`).click()};
 await p.goto(base);await p.waitForFunction(()=>window.STATVERSE);
 for(const lab of ['sampling','coverage','correlation','design']){
  await choose(lab);if(['sampling','coverage'].includes(lab)){await $('#draw').click();await $('#draw').click()}if(lab==='design')await $('#design-draw').click();
  const plots=p.locator('svg:has(circle[role="button"]):visible');assert.ok(await plots.count());for(const plot of await plots.all()){assert.equal(await plot.getAttribute('role'),version==='old'?'img':'group');assert.ok(await plot.getAttribute('aria-label')||await plot.getAttribute('aria-labelledby'))}
  if(lab==='sampling'){await $('circle.dot[tabindex="0"]').focus();await p.keyboard.press('ArrowLeft');assert.equal((await snap()).selected,0)}
  if(lab==='coverage'){await $('#coverage-chart circle[role="button"]').first().focus();await p.keyboard.press('Enter');assert.ok((await snap()).selected>=0)}
  if(lab==='correlation'){const before=(await snap()).correlation.points[0][0];await $('svg circle[role="button"]:visible').first().focus();await p.keyboard.press('ArrowRight');assert.ok(Math.abs((await snap()).correlation.points[0][0]-before-.1)<1e-9)}
  if(lab==='design'){await $('svg circle[role="button"]:visible').first().focus();await p.keyboard.press('Enter');assert.equal((await snap()).samplingDesign.selected,0)}
  if(version==='new'){const ax=await p.locator('#main').ariaSnapshot();assert.match(ax,/group/);assert.match(ax,/button/)}
  const file=`${output}/${width}-${lab}-${version}.png`;await p.screenshot({path:file});screens.push({width,lab,version,file});checks.push({width,lab,version,status:'PASS'});
 }
 if(version==='new'){
  await choose('mean');assert.equal(await $('#mean-repeat-dots').getAttribute('role'),'group');assert.equal(await $('#mean-repeat-dots').getAttribute('aria-label'),'Latest reference-test decisions');await choose('sampling');await $('#teacher').click();await $('#teacher-stage').selectOption('sample');await $('#hide-worked').check();await $('#reset').click();await $('#draw').click();assert.doesNotMatch(await p.locator('#main').ariaSnapshot(),/16\.667/);
 }
 await c.close();
}
assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
}finally{await browser.close();for(const child of servers){child.kill('SIGINT');await new Promise(r=>child.exitCode!==null?r():child.once('exit',r))}}
await fs.writeFile('evidence/semantic-role-regression-results.json',JSON.stringify({applicationCommit:'5f57ec2f690d98c4f8124ce047d5f19518ab313c',baseline:'accc8f9435ebfb6109568831704c1d34a350d5f7',timestamp:new Date().toISOString(),evidenceType:'Developer actual Chromium old/new role/name/keyboard/Teacher-hide checks; independent axe recheck remains separate.',checks,screens,pageErrors:errors,externalRequests:external},null,2)+'\n');console.log(JSON.stringify({checks:checks.length,errors,external,screens:screens.length}));
