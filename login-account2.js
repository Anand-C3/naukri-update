const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

const PROFILE_DIR_2 = path.join(__dirname, '.naukri-account2-profile');

(async () => {
  console.log('Opening Chrome window for Account 2 login...');
  const ctx = await chromium.launchPersistentContext(PROFILE_DIR_2, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1280, height: 850 }
  });
  const page = ctx.pages()[0] || await ctx.newPage();
  await page.goto('https://www.naukri.com/mnjuser/profile', { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  console.log('\nPlease log into your 2nd Naukri account in the opened Chrome window if not logged in already.');
  console.log('Once you are on the Naukri Profile page (/mnjuser/profile), the session will be saved automatically.\n');
  
  // Wait until user lands on /mnjuser/profile
  let loggedIn = false;
  for (let i = 0; i < 180; i++) {
    await page.waitForTimeout(2000);
    const url = page.url();
    if (url.includes('/mnjuser/profile') || url.includes('/mnjuser/homepage')) {
      loggedIn = true;
      break;
    }
  }
  
  if (loggedIn) {
    await page.waitForTimeout(3000);
    const state = await ctx.storageState();
    const essentialCookies = (state.cookies || []).filter(c => c.domain && c.domain.includes('naukri.com'));
    const essentialOrigins = (state.origins || []).filter(o => o.origin && o.origin.includes('naukri.com'));
    const minState = { cookies: essentialCookies, origins: essentialOrigins };
    const minJson = JSON.stringify(minState);
    const compressed = zlib.gzipSync(Buffer.from(minJson, 'utf8'));
    const b64 = compressed.toString('base64');
    
    fs.writeFileSync(path.join(__dirname, 'session_account2_base64.txt'), b64, 'utf8');
    console.log('SUCCESS: Account 2 session captured and saved to session_account2_base64.txt!');
    console.log('Token length:', b64.length);
  } else {
    console.log('Timeout waiting for profile page. Please run the script again when ready.');
  }
  
  await ctx.close();
  process.exit(0);
})();
