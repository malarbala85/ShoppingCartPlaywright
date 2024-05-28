import { test, expect } from "../../fixtures/baseTest";
import {BasePage} from "../../page-object-model/BasePage/BasePage";
import {CartPage} from "../../page-object-model/CartPage/CartPage";
import {ProductPage} from "../../page-object-model/ProductPage/ProductPage";
import * as dotenv from 'dotenv';

dotenv.config();
const username = process.env.USER_NAME;
const password = process.env.PASSWORD

test.beforeEach(async ({ context }) => {
  await context.clearCookies();
});


test('Test log in functionality with valid credentials', async ({page}) => {
  const loginPage = new BasePage(page);
  const cartPage :CartPage = new CartPage(page);
  const productPage :ProductPage = new ProductPage(page);
  await loginPage.waitForNavigation();
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
  await loginPage.login()

  await productPage.backpackProduct.click();
  await productPage.bikeLight.click();
  await cartPage.openCartMenu()
  await cartPage.checkout.click();
  await cartPage.enterDetails("Test","Automation","0600")
  await cartPage.continue.click();
  await cartPage.finish.click();
  await cartPage.verifyCheckoutComplete();

})