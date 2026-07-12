import{chromium,Browser,BrowserContext,Page} from "playwright";
async function run(){
     // LEVEL 1: Launch browser — heaviest operation, do it once

     let browser: Browser = await chromium.launch({headless:false});
     console.log("Browser is launched", browser);

     // LEVEL 2: Create context — fresh session, isolated cookies

        let context: BrowserContext = await browser.newContext();
        console.log("Context is created", context);

     // LEVEL 3: Create page — tab in the browser

        let page: Page = await context.newPage();
        console.log("Page is created");
        
        // LEVEL 4: Interact with page
        await page.goto("https://app.vwo.com/#/login");
        console.log("Title:", await page.title());

         // Cleanup - reverse oder
    await page.close();
    await context.close();
    await browser.close();
}
run();





