import{test,expect} from '@playwright/test';
test('Verify the tile and image in VMO app',async({page})=>{
    await page.goto('https://app.vwo.com/#/login');
    await expect(page).toHaveTitle('Login - Wingify');
    const image=page.locator('#vow-login-logo');
    await expect(image).toBeVisible();
});
