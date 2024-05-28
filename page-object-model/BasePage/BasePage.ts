import { Page, Locator, expect } from "@playwright/test";
import * as dotenv from 'dotenv';

dotenv.config();

export class BasePage {
  public page: Page;
  public baseurl: string;
  public usernameInput: Locator;
  public passwordInput: Locator;
  public submit: Locator;
  public hamburgIcon: Locator;
  public logout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseurl = "https://www.saucedemo.com/";
    this.usernameInput = page.locator('input[id="user-name"]');
    this.passwordInput = page.locator('input[id="password"]');
    this.submit = page.locator('#login-button');
    this.hamburgIcon=page.locator('button[id="react-burger-menu-btn"]')
    this.logout=page.locator('#logout_sidebar_link')
  }

  async fillUsername(username) {
    const usernameInputField = this.usernameInput;
    await usernameInputField.fill(username);
  }

  async fillPassword(password) {
    const passwordInputField = this.passwordInput;
    await passwordInputField.fill(password);
  }

  async login() {
    const submitButton = this.submit;
    await submitButton.click();
  }

  async isUsernameInputFieldVisible() {
    const usernameInputField = this.usernameInput;
    return await usernameInputField.isVisible();
  }

  async isPasswordInputFieldVisible() {
    const passwordInputField = this.passwordInput;
    return await passwordInputField.isVisible();
  }

  async isSubmitButtonVisible() {
    const submitButton = this.submit;
    return await submitButton.isVisible();
  }

  async maximizeWindow() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }
  async waitForNavigation(urlPath: string | null = null): Promise<void> {
    const targetUrl = urlPath ? `${this.baseurl}/${urlPath}` : this.baseurl;

    await this.page.goto(targetUrl);
    await this.page.waitForURL(targetUrl);
    await expect(this.page).toHaveURL(targetUrl);
  }
}
