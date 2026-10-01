import { expect, type Locator, type Page } from '@playwright/test';

export class ModivoLoginPage {
  private readonly loginForm: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.emailInput = page.getByRole('textbox', { name: 'Адреса e-mail' });
    this.passwordInput = page.getByRole('textbox', { name: 'Пароль' });
    this.loginButton = page.getByRole('button', { name: 'Ввійти', exact: true });
    this.loginForm = page.locator('form').filter({ has: this.emailInput });
  }

  async expectLoginFormToBeDisplayed(): Promise<void> {
    await expect(this.loginForm).toBeVisible();
  }

  async expectEmailInputToBeVisible(): Promise<void> {
    await expect(this.emailInput).toBeVisible();
  }

  async expectPasswordInputToBeVisible(): Promise<void> {
    await expect(this.passwordInput).toBeVisible();
  }

  async expectLoginButtonToBeVisible(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
  }
}
