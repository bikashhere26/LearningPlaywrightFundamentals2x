import{test,expect, Locator} from "@playwright/test";

test("Find the elements in a staticWeb Table", async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

// locate table body

const tablebody = page.locator('#companies-table');
const rows = tablebody.locator('tbody tr');
const totalrow = await rows.count();
console.log(totalrow);

// Loop through rows

for (let i = 0; i < totalrow; i++) {

    // Pick one Row
    const row = rows.nth(i);
    // Locate all cells in that Row
    const cells = row.locator('td');
    // Count the number of cells in that Row
    const totalcell = await cells.count();

    // Loop through cells and read all the text in it
    for (let j = 0; j < totalcell; j++) {
        
        const text = await cells.nth(j).innerText();
        //console.log(text);

        if(text.includes("Yoshi Tannamuri")){
            const country = await cells.nth(j+1).innerText();
            console.log("Country of Yoshi Tannamuri is : "+country);
        }

    }

}


});