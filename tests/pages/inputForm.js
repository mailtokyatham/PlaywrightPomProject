
exports.InputForm = class InputForm {
    constructor(page) {

        this.page = page
        this.txtName = page.locator("#name")
        this.txtEmail = page.locator("#inputEmail4")
        this.txtPassword = page.locator("#inputPassword4")
        this.txtComapanyName = page.locator("#company")
        this.txtWebsiteName = page.locator("#websitename")
        this.txtCity = page.locator("#inputCity")
        this.cmbCountry = page.getByRole('combobox')
        this.txtAddress1 = page.locator("#inputAddress1")
        this.txtAddress2 = page.locator("#inputAddress2")
        this.txtState= page.locator("#inputState")
        this.txtZipCode= page.locator("#inputZip")
        this.btnSubmit =page.getByRole('button', { name: 'Submit' })
        this.lblSuccessMsg= page.locator("//p[@class='success-msg hidden']")
        

    }

    async setName(name) {
        await this.txtName.click()
        await this.txtName.fill(name)

    }
    async setEmail(email) {
        await this.txtEmail.click()
        await this.txtEmail.fill(email)

    }

    async setPassword(password) {
        await this.txtPassword.click()
        await this.txtPassword.fill(password)
    }

    async setComapanyName(companyname) {
        await this.txtComapanyName.click()
        await this.txtComapanyName.fill(companyname)
    }

    async setWebsiteName(websitename) {
        await this.txtWebsiteName.click()
        await this.txtWebsiteName.fill(websitename)
    }

    async setCity(city) {
        await this.txtCity.click()
        await this.txtCity.fill(city)
    }

    async setAddress1(add1) {
        await this.txtAddress1.click()
        await this.txtAddress1.fill(add1)
    }

    async setAddress2(add2) {
        await this.txtAddress2.click()
        await this.txtAddress2.fill(add2)
    }

    async setState(state) {
        await this.txtState.click()
        await this.txtState.fill(state)
    }

    async setZipCode(zipcode) {
        await this.txtZipCode.click()
        await this.txtZipCode.fill(zipcode)
    }

    async selectCountry(country) {
        await  this.cmbCountry.selectOption(country);
    }
    async clickOnSubmit(){
        await this.btnSubmit.click()
    }

    // async getSuccessMessage(){
    //     await this.lblSuccessMsg
    // }

   

}
