import { test, expect, type Page } from '@playwright/test';
import { config } from 'process';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // await page.setDefaultTimeout(40000)
    // await expect.configure({timeout:50000})
})


export { test, expect, type Page }