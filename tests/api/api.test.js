import {test, expect} from '@playwright/test'

test.describe.parallel('Playwright API Test Framework ' , ()=>{

    const baseURL = 'https://reqres.in'
    test('GET API TEST-001 - Assert Status Code and Response Body ', async({request})=>{
        const response = await request.get(`${baseURL}/api/users/2`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(responseBody.data.id).toBe(2)
        // expect(responseBody.data.email).toBe('janet.weaver@reqres.in')
        expect(responseBody.data.email).toBeTruthy()
        expect(responseBody.data.first_name).toBe('Janet')
        expect(responseBody.data.last_name).toBe('Weaver')

    })

    test('GET API TEST-002 - Assert Invalid Endpoint URL', async({request})=>{
        const response = await request.get(`${baseURL}/api/users/non-exists-end-point-url`)

        expect(response.status()).toBe(404)

    })

})