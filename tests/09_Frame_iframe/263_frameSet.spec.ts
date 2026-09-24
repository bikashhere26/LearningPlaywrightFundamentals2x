import { test, expect, FrameLocator } from '@playwright/test';

test('iframe practice', async ({ page }) => {

    // Step 1 - Open URL
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    // Step 2 - Locate the Side frame and interact with it
    const sideFrame : FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByRole('link', { name: 'Overview' }).click();

    const mainFrame : FrameLocator = await page.frameLocator('frame[name="main"]');
    const heading = await mainFrame.locator('#main-heading').innerText();
    console.log('mainFrame Heading text:', heading);


});

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    const mainFrame: FrameLocator = page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    const sideFrame: FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();
    await page.pause();
});
