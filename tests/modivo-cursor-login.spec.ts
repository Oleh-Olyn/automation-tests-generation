import { test } from '@playwright/test';
import { ModivoHomePage } from './pageObjects/modivoHomePage';
import { ModivoLoginPage } from './pageObjects/modivoLoginPage';

/**
 * Test Case ID: TC-MODIVO-LOGIN-001
 * Title: Verify login form elements after clicking "Ввійти"
 *
 * Preconditions:
 * - The MODIVO.UA website is available at https://modivo.ua/
 * - The user is not logged in
 *
 * Test Data:
 * - URL: https://modivo.ua/
 * - No credentials are entered (UI visibility check only)
 *
 * Steps:
 * 1. Open https://modivo.ua/
 * 2. Click the "Ввійти" account/login control
 * 3. Verify that the login form is displayed
 * 4. Verify that the email input is visible
 * 5. Verify that the password input is visible
 * 6. Verify that the login button is visible
 *
 * Expected Results:
 * - The login form is displayed
 * - Email input is visible
 * - Password input is visible
 * - Login button is visible
 */
test('TC-MODIVO-LOGIN-001: login form elements are visible after clicking Ввійти', async ({
  page,
}) => {
  const homePage = new ModivoHomePage(page);
  const loginPage = new ModivoLoginPage(page);

  await homePage.open();
  await homePage.openLogin();

  await loginPage.expectLoginFormToBeDisplayed();
  await loginPage.expectEmailInputToBeVisible();
  await loginPage.expectPasswordInputToBeVisible();
  await loginPage.expectLoginButtonToBeVisible();
});
