import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login UI', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('verify title', async ({ page }) => {
    await expect(page).toHaveTitle("OrangeHRM");
  });

  test('verify header', async ({ page }) => {
    await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText("Login")
  });

})



