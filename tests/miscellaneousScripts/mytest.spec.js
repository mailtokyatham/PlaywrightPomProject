import { test, expect, chromium } from '@playwright/test'

const capabilities = [
    {
        browserName: "Chrome",// Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
        browserVersion: "latest",
        "LT:Options": {
            platform: "Windows 10",
            build: "Playwright Test Buidls ",
            name: "Playwright Test Scenario on Windows 10 - Chrome",
             user: "process.env.LT_USERNAME",
             accessKey: "process.env.LT_ACCESS_KEY",
            network: true,
            video: true,
            console: true,
            tunnel: false, // Add tunnel configuration if testing locally hosted webpage
            tunnelName: "", // Optional
            geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
        }
    },
    {
        browserName: "pw-webkit",// Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
        browserVersion: "latest",
        "LT:Options": {
            platform: "macOS Catalina",
            build: "Playwright Test Buidls ",
            name: "Playwright Test Scenario on Mac Catalina - Safari)",
             user: "process.env.LT_USERNAME",
             accessKey: "process.env.LT_ACCESS_KEY",
            network: true,
            video: true,
            console: true,
            tunnel: false, // Add tunnel configuration if testing locally hosted webpage
            tunnelName: "", // Optional
            geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
        }
    }

]



test("TestScenario 1:", async () => {


    const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    // wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
    // const browser = await chromium.connect({
    //     wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    //   })
    const context = await browser.newContext();
    const page = await context.newPage();

    //Step1: Open LambdaTest’s Selenium Playground from
    await page.goto('https://www.lambdatest.com/selenium-playground/')

    //Step2: Click “Simple Form Demo” under Input Forms.

    await page.frame({ url: 'https://www.googletagmanager.com/ns.html?id=GTM-53DM3BZ' })
    await page.getByRole('link', { name: 'Simple Form Demo' }).click();

    //Step3: Validate that the URL contains “simple-form-demo”.
    await expect(page).toHaveURL(/.*simple-form-demo/)

    //Step4: Create a variable for a string value E.g: “Welcome to LambdaTest”.
    const textMsg = "Welcome to LambdaTest."

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


test('TestScenario 2:', async () => {


    const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    const context = await browser.newContext();
    const page = await context.newPage();

    //Step1: Open LambdaTest’s Selenium Playground from and click “Drag & Drop Sliders” under “Progress Bars & Sliders”.
    await page.goto('https://www.lambdatest.com/selenium-playground/')

    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();

    //Step2: Select the slider “Default value 15” and drag the bar to make it 95 byvalidating whether the range value shows 95.
    await page.locator('#slider3').getByRole('slider').fill('95');
    await expect.soft(page.locator("//output[@id='rangeSuccess']", "95"));


    await page.close()
    await context.close()
    await browser.close()

})

test('TestScenario 3:', async () => {


    const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    const context = await browser.newContext();
    const page = await context.newPage();

    //Step1: Open the https://www.lambdatest.com/selenium-playground page and click “Input Form Submit” under “Input Forms”.
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await page.getByRole('link', { name: 'Input Form Submit' }).click();

    //Step2: Click “Submit” without filling in any information in the form.
    const nameInput = await page.locator('input[id="name"]');
    await nameInput.click();

    await page.getByRole('button', { name: 'Submit' }).click();

    //Step3: Assert “Please fill in the fields” error message.
    const validationMessage = await nameInput.evaluate(input => input.validationMessage);
    await expect.soft(validationMessage).toBe('Please fill in this field.');

    //Step4: Fill in Name, Email, and other fields.
    await page.getByPlaceholder('Name', { exact: true }).click();
    await page.getByPlaceholder('Name', { exact: true }).fill('Sanjog Sri');

    await page.getByPlaceholder('Email', { exact: true }).click();
    await page.getByPlaceholder('Email', { exact: true }).fill('kyathamconsultant@gmail.com');

    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Welcome!');

    await page.getByPlaceholder('Company').click();
    await page.getByPlaceholder('Company').fill('Lamda Test');

    await page.getByPlaceholder('Website').click();
    await page.getByPlaceholder('Website').fill('www.lamdatest.com');



    //Step5: From the Country drop-down, select “United States” using the text property.
    await page.selectOption("//select[@name='country']", { label: 'United States' })


    //Step6: Fill all fields and click “Submit”.
    await page.getByPlaceholder('City').click();
    await page.getByPlaceholder('City').fill('Texas');

    await page.getByPlaceholder('Address 1').click();
    await page.getByPlaceholder('Address 1').fill('10 Turn way texas');

    await page.getByPlaceholder('State').click();
    await page.getByPlaceholder('State').fill('TX');

    await page.getByPlaceholder('Zip code').click();
    await page.getByPlaceholder('Zip code').fill('40003');

    await page.getByPlaceholder('Address 2').click();
    await page.getByPlaceholder('Address 2').fill('Melton');

    await page.getByRole('button', { name: 'Submit' }).click();

    //Step7: Once submitted, validate the success message “Thanks for contacting us, we will get back to you shortly.” on the screen.
    await expect(page.locator("//p[@class='success-msg hidden']")).toHaveText('Thanks for contacting us, we will get back to you shortly.');

    await page.close()
    await context.close()
    await browser.close()

})



