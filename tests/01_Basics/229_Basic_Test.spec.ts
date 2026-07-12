import {test, expect} from '@playwright/test';
test("verify the title of the page", async ({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});