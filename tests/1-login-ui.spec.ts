import { test, expect } from "../fixtures/base-fixture.js"

test.describe('OrangeHRM Login UI', () => {

  test('verify title', async ({ page }) => {
    await expect(page).toHaveTitle("OrangeHRM");
  });

  test('verify header', async ({ page }) => {
    await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText("Login")
  });

})



