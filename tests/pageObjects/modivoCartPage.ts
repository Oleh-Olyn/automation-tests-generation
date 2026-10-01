import { expect, type Locator, type Page } from '@playwright/test';

export class ModivoCartPage {
  private readonly cartPageHeading: Locator;

  constructor(private readonly page: Page) {
    this.cartPageHeading = page.getByRole('heading', { name: 'Твій кошик порожній' });
  }

  async expectCartPageToBeDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(/\/checkout\/cart/);
    await expect(this.page).toHaveTitle(/Кошик/);
    await expect(this.cartPageHeading).toBeVisible();
  }
}
