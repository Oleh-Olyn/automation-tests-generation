import { test } from '@playwright/test';
import { ModivoHomePage } from './pageObjects/modivoHomePage';
import { ModivoCartPage } from './pageObjects/modivoCartPage';

/**
 * Test Case ID: TC-MODIVO-CLAUDE-001
 * Title: Verify shopping cart is accessible
 *
 * Preconditions:
 * - The MODIVO.UA website is available at https://modivo.ua/
 * - The user is not logged in
 *
 * Test Data:
 * - URL: https://modivo.ua/
 * - No account credentials required
 *
 * Steps:
 * 1. Open https://modivo.ua/
 * 2. Verify the home page is displayed
 * 3. Verify the shopping cart link is visible in the header
 * 4. Click the shopping cart link
 * 5. Verify the shopping cart page is displayed
 *
 * Expected Results:
 * - The MODIVO.UA home page is opened
 * - The shopping cart link is visible and accessible in the header
 * - After clicking it, the shopping cart page is displayed at /checkout/cart
 *   with the title containing "Кошик" and the empty-cart heading visible
 */
test('TC-MODIVO-CLAUDE-001: shopping cart is accessible from the home page', async ({ page }) => {
  const homePage = new ModivoHomePage(page);
  const cartPage = new ModivoCartPage(page);

  await homePage.open();

  await homePage.expectHomePageToBeDisplayed();
  await homePage.expectCartLinkToBeVisible();

  await homePage.openCart();

  await cartPage.expectCartPageToBeDisplayed();
});
