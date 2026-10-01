import { expect, type Locator, type Page } from '@playwright/test';

export class ModivoHomePage {
  private readonly loginLink: Locator;
  private readonly cookieDialog: Locator;
  private readonly cookieConsentButton: Locator;
  private readonly productSearchField: Locator;
  readonly cartLink: Locator;

  // Gender switcher (top bar)
  readonly genderLinkWomen: Locator;
  readonly genderLinkMen: Locator;
  readonly genderLinkKids: Locator;

  // Main navigation landmark
  readonly mainNavigation: Locator;

  // Main navigation category links
  readonly navLinkNewCollection: Locator;
  readonly navLinkBrands: Locator;
  readonly navLinkClothing: Locator;
  readonly navLinkFootwear: Locator;
  readonly navLinkBags: Locator;
  readonly navLinkAccessories: Locator;
  readonly navLinkSports: Locator;
  readonly navLinkPremium: Locator;

  constructor(private readonly page: Page) {
    this.loginLink = page.getByRole('link', { name: 'Ввійти' });
    this.cookieDialog = page.getByRole('dialog');
    this.cookieConsentButton = page.getByRole('button', { name: 'Згода', exact: true });
    this.productSearchField = page.getByRole('searchbox', { name: 'Пошук товарів' });
    this.cartLink = page.getByRole('link', { name: 'Кошик' });

    // Gender switcher (top bar)
    this.genderLinkWomen = page.getByRole('link', { name: 'ЖІНКА', exact: true });
    this.genderLinkMen   = page.getByRole('link', { name: 'ЧОЛОВІК', exact: true });
    this.genderLinkKids  = page.getByRole('link', { name: 'ДИТИНА', exact: true });

    // Main navigation landmark and its category links
    this.mainNavigation       = page.getByRole('navigation');
    this.navLinkNewCollection = page.getByRole('link', { name: 'Нова колекція', exact: true });
    this.navLinkBrands        = page.getByRole('link', { name: 'Бренди', exact: true });
    this.navLinkClothing      = page.getByRole('link', { name: 'Одяг', exact: true });
    this.navLinkFootwear      = page.getByRole('link', { name: 'Взуття', exact: true });
    this.navLinkBags          = page.getByRole('link', { name: 'Сумки', exact: true });
    this.navLinkAccessories   = page.getByRole('link', { name: 'Аксесуари', exact: true });
    this.navLinkSports        = page.getByRole('link', { name: 'Спортивні', exact: true });
    this.navLinkPremium       = page.getByRole('link', { name: 'Преміум', exact: true });
  }

  async open(): Promise<void> {
    await this.page.goto('https://modivo.ua/');
    await this.acceptCookieConsentIfShown();
  }

  async openLogin(): Promise<void> {
    await this.loginLink.click();
  }

  async expectCartLinkToBeVisible(): Promise<void> {
    await expect(this.cartLink).toBeVisible();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async expectHomePageToBeDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(/https:\/\/modivo\.ua\/?/);
    await expect(this.page).toHaveTitle(/MODIVO\.UA/);
  }

  async expectMainNavigationToBeVisible(): Promise<void> {
    await expect(this.mainNavigation).toBeVisible();
  }

  async expectGenderSwitcherToBeVisible(): Promise<void> {
    await expect(this.genderLinkWomen).toBeVisible();
    await expect(this.genderLinkMen).toBeVisible();
    await expect(this.genderLinkKids).toBeVisible();
  }

  async expectMainNavCategoryLinksToBeVisible(): Promise<void> {
    await expect(this.navLinkNewCollection).toBeVisible();
    await expect(this.navLinkBrands).toBeVisible();
    await expect(this.navLinkClothing).toBeVisible();
    await expect(this.navLinkFootwear).toBeVisible();
    await expect(this.navLinkBags).toBeVisible();
    await expect(this.navLinkAccessories).toBeVisible();
    await expect(this.navLinkSports).toBeVisible();
    await expect(this.navLinkPremium).toBeVisible();
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
