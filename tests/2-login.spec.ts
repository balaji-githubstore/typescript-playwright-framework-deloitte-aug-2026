import { test, expect } from "../fixtures/base-fixture.js"

test.describe('OrangeHRM Login Tests', () => {

    test('verify invalid login', async ({ page }) => {
        await page.locator("xpath=//input[@name='username']").fill("john")
        await page.locator("xpath=//input[@name='password']").fill("john123")
        await page.locator("xpath=//button[normalize-space()='Login']").click()
        await expect(page.locator(
            "xpath=//p[contains(normalize-space(),'Invalid')]")).toHaveText("Invalid credentials")
    });

    test('verify valid login', async ({ page }) => {
        await page.locator("xpath=//input[@name='username']").fill("Admin")
        await page.locator("xpath=//input[@name='password']").fill("admin123")
        await page.locator("xpath=//button[normalize-space()='Login']").click()

        //assert the Quick Launch text
        await expect(page.locator(
            "xpath=//p[text()='Quick Launch']")).toHaveText("Quick Launch")
    });
})



