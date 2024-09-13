import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { InputForm } from '../pages/inputForm'
import * as data from '../testdata/inputform-data.json'


test('TestCase_001', async ({ page, baseURL }) => {
    const homepage = new HomePage(page)
    const inputform = new InputForm(page)

    await page.goto(`${baseURL}selenium-playground/`)

    await homepage.clickOnINputForm()
    await inputform.setName(data.name)
    await inputform.setEmail(data.email)
    await inputform.setPassword(data.password)
    await inputform.setComapanyName(data.company)
    await inputform.setWebsiteName(data.website)
    await inputform.selectCountry(data.country)
    await inputform.setCity(data.city)
    await inputform.setAddress1(data.address1)
    await inputform.setAddress2(data.address2)
    await inputform.setState(data.state)
    await inputform.setZipCode(data.zipcode)
    await inputform.clickOnSubmit()

    

})