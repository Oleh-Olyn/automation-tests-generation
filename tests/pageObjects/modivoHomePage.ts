import { expect, type Locator, type Page } from '@playwright/test';

export class ModivoHomePage {
  private readonly loginLink: Locator;
  private readonly cookieDialog: Locator;
  private readonly cookieConsentButton: Locator;
  private readonly productSearchField: Locator;

  constructor(private readonly page: Page) {
    this.loginLink = page.getByRole('link', { name: 'Ввійти' });
    this.cookieDialog = page.getByRole('dialog');
    this.cookieConsentButton = page.getByRole('button', { name: 'Згода', exact: true });
    this.productSearchField = page.getByRole('searchbox', { name: 'Пошук товарів' });
  }

  async open(): Promise<void> {
    await this.page.goto('https://modivo.ua/');
    await this.acceptCookieConsentIfShown();
  }

  async openLogin(): Promise<void> {
    await this.loginLink.click();
  }

  async expectHomePageToBeDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(/https:\/\/modivo\.ua\/?/);
    await expect(this.page).toHaveTitle(/MODIVO\.UA/);
  }

  async expectProductSearchFieldToBeVisible(): Promise<void> {
    await expect(this.productSearchField).toBeVisible();
    await expect(this.productSearchField).toBeEnabled();
  }

  private async acceptCookieConsentIfShown(): Promise<void> {
    await this.cookieConsentButton.waitFor({ state: 'visible' });
    await this.cookieConsentButton.click();
    await expect(this.cookieDialog).toBeHidden();
  }
}
