import{test,expect} from "@playwright/test";

test("Verify multiple elements on the page", async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const rightpanellinktest = await page.locator('.list-group-item').allInnerTexts();
console.log(rightpanellinktest.length);

for(const i of rightpanellinktest){
    if(i === "Forgotten Password"){
        await page.getByText(i).first().click();
    }
    
}
await page.waitForTimeout(5000);

const rightpanellink = await page.locator('.list-group-item').all();
for(const i of rightpanellink){
    console.log(await i.getAttribute('href'));
}



});