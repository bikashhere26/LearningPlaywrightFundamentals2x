import{test,expect, Locator} from "@playwright/test";

test("Find the elements in a Web Table", async ({ page }) => {

await page.goto("https://awesomeqa.com/webtable.html");
const table:Locator = page.locator("//table[@id='customers']");

const rows = table.locator('tbody tr');
const rowCount = await rows.count();
console.log(rowCount);
const columns = await table.locator('tr th').count();
console.log(columns);

const nameMatch = rows.filter({

    has:page.locator("td"),
    hasText: "Helen Bennett"
})

console.log(nameMatch);



});