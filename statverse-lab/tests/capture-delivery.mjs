/** Actual developer screenshots. No independent/student/physical-device claim. */
import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const base=process.env.STATVERSE_BASE_URL||'http://127.0.0.1:4174';
const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const manifest={timestamp:new Date().toISOString(),baseUrl:base,evidenceType:'Developer actual Chromium screenshots, not independent review, physical devices or real students',images:[]};
async function capture(name,fullPage=false){await page.screenshot({path:'evidence/'+name,fullPage});manifest.images.push({file:name,viewport:page.viewportSize(),fullPage,lab:await page.evaluate(()=>window.STATVERSE?.getSnapshot().lab??'guide'),scrollY:await page.evaluate(()=>scrollY)})}
await page.goto(base);await page.locator('#draw').click();await page.locator('#draw').click();await page.locator('#sample-picker').fill('1');await page.locator('#sample-picker').dispatchEvent('change');let s=await page.evaluate(()=>window.STATVERSE.getSnapshot());assert.deepEqual(s.samples[0].ids,[2,4,0]);assert.equal(s.samples.length,2);assert.equal(s.selected,0);await page.evaluate(()=>scrollTo(0,0));await capture('final-sampling-desktop.png',true);
await page.setViewportSize({width:390,height:844});await page.locator('.sample-panel').evaluate(e=>e.scrollIntoView({block:'center'}));await capture('final-sampling-mobile.png');const after=await page.evaluate(()=>window.STATVERSE.getSnapshot());assert.deepEqual(after.samples,s.samples);assert.equal(after.selected,0);
await page.setViewportSize({width:1920,height:1080});await page.locator('#teacher').click();await page.locator('#teacher-stage').selectOption('distribution');await page.evaluate(()=>scrollTo(0,0));const quantitative=await page.locator('.distribution-metrics').boundingBox();assert.ok(quantitative.y+quantitative.height<=1080,'Teacher distribution metrics fit the CSS viewport');await capture('final-sampling-teacher.png');
await page.goto(base+'/guide.html');await page.setViewportSize({width:390,height:844});await capture('final-guide-mobile.png');await page.setViewportSize({width:1440,height:900});await capture('final-guide-desktop.png');
await browser.close();await fs.writeFile('evidence/featured-screenshot-manifest.json',JSON.stringify(manifest,null,2)+'\n');console.log(JSON.stringify(manifest,null,2));
