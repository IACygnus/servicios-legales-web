import { test, expect } from '@playwright/test';

test('La página de inicio carga correctamente', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Create Next App/);
  await expect(page.locator('h1')).toContainText('Next.js');
});
