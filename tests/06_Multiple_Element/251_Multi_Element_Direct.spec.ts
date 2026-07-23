import{test,expect} from "@playwright/test";

test("Verify multiple elements on the page", async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

await page.locator('[data-testid="forgotten-password-link"]').click();
await page.waitForTimeout(2000);

});