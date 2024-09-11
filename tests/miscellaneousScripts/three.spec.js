import {test,expect, chromium} from '@playwright/test'


test('Test Scenario 3:',async()=>{


    // const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    const browser = await chromium.launch()
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
    await expect(validationMessage).toBe('Please fill in this field.');

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