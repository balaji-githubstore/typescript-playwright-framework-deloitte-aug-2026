import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login UI', () => {

  test('verify title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle("OrangeHRM");
  });

  test('verify header', async ({ page }) => {
     await page.goto('/');

     await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText("Login")
  });
  
})



