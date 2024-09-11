import { test } from '@playwright/test'

test('Handling alerts', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

    page.on('Dialog', async (alert) => {

        const text = alert.defaultValue()
        console.log(text)
        await alert.click()

    })

    await page.locator("button:has-text('Click Me')").nth(0).click()


})

test('Select dropdonw value', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')


    await page.selectOption('id=select-demo', { value: 'Friday' })
    await page.selectOption('id=multi-select', [{ value: 'New York' }, { value: 'Florida' }])



})

test.only('Handling JQuery Dropdown', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo')

    await page.locator('#country+span').click()
    await page.locator('ul#select2-country-results').locator("li", {
        hasText: 'Australia'
    }).click()

    page.setDefaultTimeout(5000)

})

