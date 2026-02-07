const { test, expect } = require('@playwright/test');


test('should have the correct title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test.only('First Test', async ({ page }) => {

  await page.goto('https://google.com');

  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await expect(page).toHaveTitle('Google');
  console.log(await page.title());
  await page.locator("textarea#APjFqb").fill("Playwright");
  await page.locator("textarea#APjFqb").press('Enter');

});