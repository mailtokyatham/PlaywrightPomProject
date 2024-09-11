import {test,expect, chromium} from '@playwright/test'


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
    //  await page.pause();
    // await delay(3000);
    // await expect.locator("//output[@id='rangeSuccess']", "95");
    const locator1 = page.locator("//output[@id='rangeSuccess']");
    await expect(locator1).toHaveText("95");
  
  
    await page.close()
    await context.close()
    await browser.close()

})