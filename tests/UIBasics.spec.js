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

test('Pratice all the elements Test', async ({ page }) => {

  await page.goto('https://formy-project.herokuapp.com');
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  console.log(await page.title());
  await page.locator("//*[contains(text(),'Complete Web Form') and @class='btn btn-lg']").click();
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  console.log(await page.title());
  await page.locator("#first-name").fill("John");
  await page.waitForTimeout(9000);
});

test.only('Shpping Website Test', async ({ page }) => {

  await page.setViewportSize({ width: 1536, height: 864 });
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  //await page.locator("login-wrapper-footer-text a").click();
  await page.locator("a.text-reset").click();
  await page.locator("input#firstName").fill("Surya");
  await page.locator("input#lastName").fill("Raju");
  await page.locator("input#userEmail").fill("surya@gmail.com");
  await page.locator("input#userMobile").fill("9855527017");
  await page.locator("input#userPassword").fill("9855527017");
  await page.locator("input#confirmPassword").fill("9855527017");
  await page.locator("mt-3 ng-valid ng-dirty ng-touched").first().click();
  await page.locator("ng-dirty ng-valid ng-touched").click();



});
