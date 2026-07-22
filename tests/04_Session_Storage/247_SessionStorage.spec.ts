const { chromium } = require("playwright");

async function saveSession() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://app.wingify.com/#/login");
    await page.waitForTimeout(5000);
    await page.fill("#login-username", "opg73@singleuseemail.site");
    await page.fill("#login-password", "Wingify@4321");
    await page.waitForTimeout(1500);
    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.waitForTimeout(3000);
    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");
    await page.waitForTimeout(2000);
    await browser.close();
}

saveSession().catch((error) => {
    console.error("Session save failed:", error);
    process.exitCode = 1;
});