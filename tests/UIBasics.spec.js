const { test, expect } = require('@playwright/test');



// https://formy-project.herokuapp.com/
// https://the-internet.herokuapp.com/


test('should have the correct title', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/');
  await expect(page).toHaveTitle('Example Domain');
});

test('First Test', async ({ page }) => {

  await page.goto('https://google.com');

  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await expect(page).toHaveTitle('Google');
  console.log(await page.title());
  await page.locator("textarea#APjFqb").fill("Playwright");
  await page.locator("textarea#APjFqb").press('Enter');

});

test.only('Pratice all the elements Test', async ({ page }) => {

  await page.goto('https://formy-project.herokuapp.com');

  await page.screenshot({ path: 'screenshot/screenshot.png' });

  
  console.log(await page.title());
  await page.locator("//*[contains(text(),'Complete Web Form') and @class='btn btn-lg']").click();
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  
  console.log(await page.title());
  await page.locator("#first-name").fill("John");
  await page.waitForTimeout(9000);
    

});