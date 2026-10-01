import { test } from '@playwright/test';
import { ModivoHomePage } from './pageObjects/modivoHomePage';

/**
 * Test Case ID: TC-MODIVO-HOME-002
 * Title: Verify search field is displayed on the MODIVO.UA home page
 *
 * Preconditions:
 * - The MODIVO.UA website is available at https://modivo.ua/
 * - The user is not required to be logged in
 *
 * Test Data:
 * - URL: https://modivo.ua/
 * - No search query is entered (UI visibility check only)
 *
 * Steps:
 * 1. Open https://modivo.ua/
 * 2. Verify that the product search field is visible
 *
 * Expected Results:
 * - The MODIVO.UA home page is displayed
 * - The product search field is visible and available to the user
 */
test('TC-MODIVO-HOME-002: search field is displayed on the MODIVO.UA home page', async ({
  page,
}) => {
  const homePage = new ModivoHomePage(page);

  await homePage.open();

  await homePage.expectHomePageToBeDisplayed();
  await homePage.expectProductSearchFieldToBeVisible();
});
