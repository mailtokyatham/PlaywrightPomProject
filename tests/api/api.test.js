import {test, expect} from '@playwright/test'
import * as data from '../testdata/api-config.json'
import * as expData  from '../testdata/api-test-data.json'

test.describe.parallel('Playwright API Test Framework ' , ()=>{

    test('GET API TEST-001 - Assert Status Code and Response Body ', async({request})=>{
        const response = await request.get(`${data.baseURL}${data.endPoint}${expData.TC001.id}`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(responseBody.data.id).toBe(expData.TC001.id)

        // expect(responseBody.data.email).toBe('janet.weaver@reqres.in')
        expect(responseBody.data.email).toBeTruthy()
        expect(responseBody.data.first_name).toBe(expData.TC001.first_name)
        expect(responseBody.data.last_name).toBe(expData.TC001.last_name)

    })

    test('GET API TEST-002 - Assert Invalid Endpoint URL', async({request})=>{
        const response = await request.get(`${data.baseURL}/api/users/non-exists-end-point-url`)
        expect(response.status()).toBe(404)

    })

    test('GET API TEST-003 - Assert Invalid Resource Id', async({request})=>{
        const response = await request.get(`${data.baseURL}/api/users/13`)
        expect(response.status()).toBe(404)

    })

})