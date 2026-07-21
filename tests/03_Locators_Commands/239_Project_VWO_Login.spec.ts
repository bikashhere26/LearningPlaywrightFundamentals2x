// https://app.vwo.com/#/login

 // Defalt Locators
    //  id, name, className, Tag., Custom Locator (Via CSS selector)

  // Css Seclector ->  Browser - Css Engine, Help you to find the element
    // by using the default locators
    // id => #id
    // className => .
    // name => [name="value"]
    // Tag => [tag]

import {test,expect} from "@playwright/test";
test('Verify the url login is not working and gives you an error with lazy, strict, and auto wait concepts',async({page})=>{
    await page.goto("https://app.vwo.com/#/login");
    let username=page.locator("#login-username");
    let password=page.locator("#login-password");
    let loginbutton=page.locator("#js-login-btn");
   
    // NOW Playwright finds the element and acts (auto-wait)

    await username.fill("testuser");
    await password.fill("testpassword");
    await loginbutton.click();

    let error=page.locator("#js-notification-box-msg");
    await expect(error).toHaveText("Your email, password, IP address or location did not match");
});

