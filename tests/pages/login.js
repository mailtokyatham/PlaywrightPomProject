exports.LoginPage=class LoginPage {

    //Constructor for locators
    constructor(page) {
        this.page = page
        this.txtUserName = page.locator('[data-test="username"]')
        this.txtPassword = page.locator('[data-test="password"]')
        this.btnLogin = page.locator('[data-test="login-button"]')
    }


    //Actions
    
    async launchApplication(url){
        await this.page.goto(url)
    }
    async setUserName(username){
       await this.txtUserName.fill(username)

    }
    async setPassword(password){
        await this.txtPassword.fill(password)

    }
    async clickOnSubmit(){
        await this.btnLogin.click()

    }




}