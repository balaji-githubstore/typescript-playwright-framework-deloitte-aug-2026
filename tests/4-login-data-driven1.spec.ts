import { test, expect } from "../fixtures/base-fixture.js"
import { invalidLoginDataJson, validLoginData } from "../utils/data-source.js"

test.describe('OrangeHRM Login Tests', () => {

    for (const { username, password, expectedError } of invalidLoginDataJson) {

        test(`verify invalid login: ${username} and ${password}`, async ({ page }) => {
            await page.locator("xpath=//input[@name='username']").fill(username)
            await page.locator("xpath=//input[@name='password']").fill(password)
            await page.locator("xpath=//button[normalize-space()='Login']").click()
            await expect(page.locator(
                "xpath=//p[contains(normalize-space(),'Invalid')]")).toHaveText(expectedError)
        });
    }

    for (const { username, password, expectedValue } of validLoginData) {

        test('verify valid login', async ({ page }) => {
            await page.locator("xpath=//input[@name='username']").fill(username)
            await page.locator("xpath=//input[@name='password']").fill(password)
            await page.locator("xpath=//button[normalize-space()='Login']").click()

            //assert the Quick Launch text
            await expect(page.locator(
                "xpath=//p[text()='Quick Launch']")).toHaveText(expectedValue)
        });
    }
})



