import {test,expect} from "@playwright/test";
test("Verify elements by Filter", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    page.locator('a.list-group-item').filter({ hasText: 'Forgotten Password' }).click();
    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13);

    const privacyLink=  page.locator('footer a').filter({ hasText: 'Privacy Policy' });
    await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');

});

