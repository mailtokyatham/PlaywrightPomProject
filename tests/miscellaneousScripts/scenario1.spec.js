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

test('Test Scenario 1:',async()=>{


    // const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();

    //Step1: Open LambdaTest’s Selenium Playground from
    await page.goto('https://www.lambdatest.com/selenium-playground/')
   
    //Step2: Click “Simple Form Demo” under Input Forms.
    
    await page.frame({url:'https://www.googletagmanager.com/ns.html?id=GTM-53DM3BZ'})
    await page.getByRole('link', { name: 'Simple Form Demo' }).click();

    //Step3: Validate that the URL contains “simple-form-demo”.
    // await expect.soft(page).toHaveURL('simple-form-demo')
    await expect(page).toHaveURL(/.*simple-form-demo/)
   
    //Step4: Create a variable for a string value E.g: “Welcome to LambdaTest”.
    const textMsg="Welcome to LambdaTest."

    //Step5: Use this variable to enter values in the “Enter Message” text box.
    await page.getByPlaceholder('Please enter your Message').click();
    await page.getByPlaceholder('Please enter your Message').fill(textMsg);

    //Step6: Click “Get Checked Value”.
    await page.getByRole('button', { name: 'Get Checked Value' }).click();

    //Step7: Validate whether the same text message is displayed in the right-hand panel under the “Your Message:” section.
    await expect(page.locator('id=message')).toHaveText(textMsg)

  
  
    await page.close()
    await context.close()
    await browser.close()

})