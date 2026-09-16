const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");

(async () => {
  const storagePath = path.join(__dirname, "storageState.json");
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    storageState: fs.existsSync(storagePath) ? storagePath : undefined
  });
  const page = await ctx.newPage();
  console.log("Navigating to Naukri profile...");
  await page.goto("https://www.naukri.com/mnjuser/profile", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(5000);
  console.log("Current URL:", page.url());
  console.log("Page Title:", await page.title());
  
  await page.screenshot({ path: path.join(__dirname, "live-profile.png") });
  
  const bodyText = await page.locator("body").innerText();
  console.log("\n--- LIVE PROFILE DETAILS ---");
  const matchUploaded = /Uploaded on[^\n]*/i.exec(bodyText);
  if (matchUploaded) console.log("Resume Status:", matchUploaded[0]);
  const matchUpdated = /Profile last updated[^\n]*/i.exec(bodyText) || /Updated on[^\n]*/i.exec(bodyText) || /Last updated[^\n]*/i.exec(bodyText);
  if (matchUpdated) console.log("Profile Activity:", matchUpdated[0]);
  
  await browser.close();
})();
