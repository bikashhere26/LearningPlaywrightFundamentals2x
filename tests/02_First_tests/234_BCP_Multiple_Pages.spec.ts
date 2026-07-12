import { test, expect } from '@playwright/test';

test('Open multiple pages in the same browser context', async ({ browser }) => {
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://app.vwo.com/#login');
    console.log('Tab 1: Login');

    const page2 = await context.newPage();
    await page2.goto('https://app.vwo.com/#dashboard');
    console.log('Tab 2: Dashboard');

    await expect(page1).toHaveURL(/app\.vwo\.com/);
    await expect(page2).toHaveURL(/app\.vwo\.com/);

    await context.close();
});