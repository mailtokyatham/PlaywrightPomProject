import {test} from '@playwright/test'

test('Handling frames',async({page})=>{

    await page.goto('https://letcode.in/frame')

    const allFrames = page.frames();
    console.log("No.Of Frames : "+ allFrames.length)

    const myFrame = page.frame('firstFr')
    await myFrame?.fill("input[name='fname']","srinivas")
    await myFrame?.fill("input[name='lname']","kyatham")

})