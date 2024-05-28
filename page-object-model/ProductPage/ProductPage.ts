import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "../BasePage/BasePage";

export class ProductPage extends BasePage {

  public _products: Array<Locator> = [];
  public backpackProduct: Locator;
  public bikeLight: Locator;
  public tshirt: Locator;
  public fleeceJacket: Locator;
  public onesie: Locator;
  public redTshirt: Locator;
  public removebackPack: Locator;


  constructor(page: Page) {
    super(page);
    this.backpackProduct=this.page.locator("#add-to-cart-sauce-labs-backpack");
    this.bikeLight=this.page.locator("#add-to-cart-sauce-labs-bike-light");
    this.tshirt=this.page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
    this.fleeceJacket=this.page.locator("#add-to-cart-sauce-labs-fleece-jacket");
    this.onesie=this.page.locator("#add-to-cart-sauce-labs-onesie");
    this.redTshirt=this.page.locator("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");
    this.removebackPack=this.page.locator("#remove-sauce-labs-backpack");
  }

  async  getProductNames(page: Page) {
    const productNames = await page.$$eval('.cart_list .cart_item[data-test="inventory-item"] .inventory_item_name', items => {
      return items.map(item => item.textContent?.trim() ?? '');
    });
    return productNames;
  }

  async products(): Promise<Array<Locator>> {
    await this.getProductNames(this.page);
    return this._products;
  }


}
