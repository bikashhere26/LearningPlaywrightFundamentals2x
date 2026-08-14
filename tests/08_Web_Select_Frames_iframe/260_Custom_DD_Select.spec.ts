import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Select!', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
    await page.locator('#lang-trigger').click();
    await page.getByText('Java', { exact: true }).click();

    await page.getByTestId('framework-trigger').click();
    await page.getByText('Angular', { exact: true }).click();

    await page.getByTestId('experience-trigger').click();
    await page.getByText('Senior (7+ years)', { exact: true }).click();

    await page.close();
    

});