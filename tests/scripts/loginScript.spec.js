import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/login'

test('Login Test',async({page})=>{

    const loginPage = new LoginPage(page)
    //launch application
    await loginPage.launchApplication('https://www.saucedemo.com/')

    //Provide User details and submit
    await loginPage.setUserName('')
    await loginPage.setPassword('')
    await loginPage.clickOnSubmit()

})