import { test } from '@playwright/test';
import { ModivoHomePage } from './pageObjects/modivoHomePage';

/**
 * Test Case ID: TC-MODIVO-CLAUDE-002
 * Title: Verify main navigation is displayed on the home page
 *
 * Preconditions:
 * - The MODIVO.UA website is available at https://modivo.ua/
 * - The user is not required to be logged in
 *
 * Test Data:
 * - URL: https://modivo.ua/
 * - No account credentials required
 *
 * Steps:
 * 1. Open https://modivo.ua/
 * 2. Verify the home page is displayed
 * 3. Verify the gender switcher links (ЖІНКА / ЧОЛОВІК / ДИТИНА) are visible
 * 4. Verify the main navigation landmark is visible
 * 5. Verify the main category links in the navigation are visible
 *
 * Expected Results:
 * - The MODIVO.UA home page is displayed
 * - The gender switcher links are visible in the top bar
 * - The main navigation landmark is visible
 * - The category links (Нова колекція, Бренди, Одяг, Взуття, Сумки,
 *   Аксесуари, Спортивні, Преміум) are all visible and accessible
 */
test('TC-MODIVO-CLAUDE-002: main navigation is displayed on the home page', async ({ page }) => {
  const homePage = new ModivoHomePage(page);

  await homePage.open();

  await homePage.expectHomePageToBeDisplayed();
  await homePage.expectGenderSwitcherToBeVisible();
  await homePage.expectMainNavigationToBeVisible();
  await homePage.expectMainNavCategoryLinksToBeVisible();
});
