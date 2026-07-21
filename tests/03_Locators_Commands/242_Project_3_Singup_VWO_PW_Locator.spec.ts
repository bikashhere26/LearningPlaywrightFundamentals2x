import { test , expect } from "@playwright/test";

test('Verify the signup page error on VWO when incorrect email is entered',async({page})=>{
    await page.goto("https://vwo.com/free-trial/");
    let email=page.getByRole('textbox',{name:'Email'}).fill("testuser"); 
    await page.locator("[data-qa='page-free-trial-step1-gdpr-consent-checkbox']").click();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();

    let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");

});






