import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('iframe practice', async ({ page }) => {

    // Step 1 - Open URL
    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1 : FrameLocator = page.frameLocator('iframe#pact1').first();
    let frame2 : FrameLocator = frame1.frameLocator('iframe#pact2').first();
    let frame3 : FrameLocator = frame2.frameLocator('iframe#pact3').first();

    await frame1.locator('#inp_val').fill('Queen');
    await frame2.locator('#jex').fill('King');
    await frame3.locator('#glaf').fill('Princess');

     const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);  

});

