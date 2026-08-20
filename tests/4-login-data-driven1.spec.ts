import { test, expect } from "../fixtures/base-fixture.js"
import { invalidLoginData } from "../utils/data-source.js"

test.describe('OrangeHRM Login Tests', () => {


    for (const { username, password, expectedError } of invalidLoginData) {

        test(`verify invalid login: ${username} and ${password}`, async ({ page }) => {
            await page.locator("xpath=//input[@name='username']").fill(username)
            await page.locator("xpath=//input[@name='password']").fill(password)
            await page.locator("xpath=//button[normalize-space()='Login']").click()
            await expect(page.locator(
                "xpath=//p[contains(normalize-space(),'Invalid')]")).toHaveText(expectedError)
        });
    }




})



