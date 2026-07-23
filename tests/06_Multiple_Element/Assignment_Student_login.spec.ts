import{test,expect} from "@playwright/test";

test("Verify student login in the page", async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
await page.getByRole('textbox', { name: 'Email Address' }).fill('demo123@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('123456');
await page.getByLabel('Remember me').check();
await page.locator('[data-testid="login-button"]').click();

await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/multiple_element_filter?email=demo123%40gmail.com&password=123456&remember=yes#login-success')
console.log("Login Successfull");
await page.waitForTimeout(2000);
await page.close();


});