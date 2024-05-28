import { test, expect } from "../../fixtures/baseTest";
import {BasePage} from "../../page-object-model/BasePage/BasePage";
import * as dotenv from 'dotenv';

dotenv.config();
const username = process.env.USER_NAME;
const password = process.env.PASSWORD

test('Test log in functionality with valid credentials', async ({page}) => {
  const loginPage = new BasePage(page);
  await loginPage.maximizeWindow();
  await loginPage.waitForNavigation();
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
  await loginPage.login()

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await loginPage.hamburgIcon.click();
  await loginPage.logout.click();


})