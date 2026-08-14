import { test, expect } from '@playwright/test';

test('Select box variants practice', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    // ① Single — searchable

    await page.getByTestId("rs-single-input").click();
    await page.getByRole('option', { name: 'Playwright' }).click();
    //await page.pause();

    // ② Multi — chips with remove

    await page.getByTestId("rs-multi-input").click();
    await page.getByRole('option', { name: 'Pytest' }).click();
    await page.getByRole('option', { name: 'JUnit' }).click();
    await page.getByRole('option', { name: 'Cucumber' }).click();
    await page.keyboard.press("Escape");

    // ③ Creatable multi — type and Enter

    await page.locator('#rs-creatable').click();
    await page.getByText('api-testing', { exact: true }).click();
    await page.getByText('accessibility', { exact: true }).click();
    await page.getByText('security', { exact: true }).click();
    await page.keyboard.press("Escape");

    // ④ Grouped — categorised options

    await page.locator('[data-testid="rs-grouped-input"]').click();
    await page.getByText('Azure', { exact: true }).click();

    // ⑤ Async — fetched on type

    await page.getByRole('textbox', { name: 'Search cities' }).click();
    await page.getByRole('textbox', { name: 'Search cities' }).fill('del');
    await page.locator('[data-value="Delhi"]').click();


});
