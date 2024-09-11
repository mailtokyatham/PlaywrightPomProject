import {test,expect, chromium} from '@playwright/test'

// const capabilities = {
//     browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//     browserVersion: "latest",
//     "LT:Options": {
//         platform: "Windows 10",
//         build: "Playwright Test Buils ",
//         name: "Playwright Test Scenario1",
//         //  user: "process.env.LT_USERNAME",
//         //  accessKey: "process.env.LT_ACCESS_KEY",
//         user: 'kyathamconsultant',
//         accessKey: 'BpGEA80fxzjX1rK7GG3ma6wp52ZljLc6W4Lycd8MTxaSJnhwj7',
//         network: true,
//         video: true,
//         console: true,
//         tunnel: false, // Add tunnel configuration if testing locally hosted webpage
//         tunnelName: "", // Optional
//         geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
//     },
// };

test('Test Scenario 2:',async()=>{


    // const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();

    //Step1: Open LambdaTest’s Selenium Playground from and click “Drag & Drop Sliders” under “Progress Bars & Sliders”.
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();

    //Step2: Select the slider “Default value 15” and drag the bar to make it 95 byvalidating whether the range value shows 95.
    await page.locator('#slider3').getByRole('slider').fill('95');
    await expect.locator("//output[@id='rangeSuccess']", "95");
  
  
    await page.close()
    await context.close()
    await browser.close()

})