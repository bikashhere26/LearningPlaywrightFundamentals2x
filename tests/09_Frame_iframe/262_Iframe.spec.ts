import { test, expect, FrameLocator } from '@playwright/test';

test('Nested iframe practice', async ({ page }) => {

    // Step 1 - Open URL
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    // Locate nested iframe in one selector and interact
    const frameRoot = page.frameLocator("#frame-one");

    // Fill fields and assert values
    await frameRoot.locator('#RESULT_TextField-1').fill('Toyota');
   // await expect(frameRoot.locator('#RESULT_TextField-1')).toHaveValue('Toyota');

    await frameRoot.locator('#RESULT_TextField-2').fill('Bikash Gupta');
   // await expect(frameRoot.locator('#RESULT_TextField-2')).toHaveValue('Bikash Gupta');
   await frameRoot.locator('#RESULT_TextField-3').fill('WB-24-AN-1987');
   await frameRoot.locator('#RESULT_RadioButton-1').selectOption('Sedan');
    await frameRoot.locator('#RESULT_TextField-4').fill('2024');
    await frameRoot.locator('#RESULT_TextArea-1').fill('The registration is successfully completed');
    await frameRoot.locator('#vehicle-submit').click();
    const outputmessage = frameRoot.locator('#vehicle-output');
    console.log(await outputmessage.textContent());
    

});



