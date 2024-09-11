import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/login'


const loginPage=null;

test.beforeAll('setup ',async({page})=>{
     loginPage = new LoginPage(page)
})

test('Login Test',async({page})=>{

    
    //launch application
    await loginPage.launchApplication('https://www.saucedemo.com/')

    //Provide User details and submit
    await loginPage.setUserName('standard_user')
    await loginPage.setPassword('secret_sauce')
    await loginPage.clickOnSubmit()
    // await expect.soft(page).toHaveTitle('Swag Labs')

})

test('Verify the title',async({page})=>{

    // await expect.soft(page).toHaveTitle('Swag Labs')
    await expect.soft(page).toHaveTitle('Swag Labs')

})