const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const PROFILE_DIR = path.join(__dirname, '.naukri-chrome-profile');

(async () => {
  console.log('Exporting saved session from .naukri-chrome-profile...');
  const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
    channel: 'chrome',
    headless: true
  });
  const page = ctx.pages()[0] || await ctx.newPage();
  await page.goto('https://www.naukri.com/mnjuser/profile', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  
  await ctx.storageState({ path: path.join(__dirname, 'storageState.json') });
  await ctx.close();
  
  const raw = fs.readFileSync(path.join(__dirname, 'storageState.json'), 'utf8');
  const b64 = Buffer.from(raw).toString('base64');
  fs.writeFileSync(path.join(__dirname, 'session_base64.txt'), b64, 'utf8');
  console.log('Session successfully exported to storageState.json and session_base64.txt!');
})();
