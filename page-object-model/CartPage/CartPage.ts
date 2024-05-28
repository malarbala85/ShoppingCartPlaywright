import { Locator, Page, expect} from "@playwright/test";
import {BasePage} from "../BasePage/BasePage";

export class CartPage extends BasePage {
  public cartIcon: Locator;
  public checkout: Locator;
  public remove: Locator;
  public continueShopping: Locator;
  public firstname: Locator;
  public lastname: Locator;
  public zip: Locator;
  public continue: Locator;
  public finish: Locator;
  public backHome: Locator;
  public checkoutCompleteText: Locator;
  public cartBag: Locator;
  public badgeValue: Locator;

  constructor(page: Page) {
    super(page);
    this.cartIcon = this.page.locator(".shopping_cart_link");
    this.remove=this.page.locator("#remove-sauce-labs-backpack")
    this.cartBag=this.page.locator("#shopping_cart_container > a")
    this.checkout=this.page.locator("#checkout")
    this.continueShopping=this.page.locator("#continue-shopping")
    this.firstname=this.page.locator("#first-name")
    this.lastname=this.page.locator("#last-name")
    this.zip=this.page.locator("#postal-code")
    this.continue=this.page.locator("#continue")
    this.finish=this.page.locator("#finish")
    this.backHome=this.page.locator("#back-to-products")
    this.checkoutCompleteText = this.page.locator("text=Checkout: Complete!");
    this.badgeValue=this.page.locator("#shopping_cart_container .shopping_cart_badge")
  }

  async fillfirstName(username: string) {
    const firstName = this.firstname;
    await firstName.fill(username);
  }

  async fillLastName(lastname: string) {
    const lastName = this.lastname;
    await lastName.fill(lastname);
  }

  async fillpostalCode(zip: string) {
    const Zip = this.zip;
    await Zip.fill(zip);
  }


  async enterDetails(firstName: string, lastName: string, Zip: string): Promise<void> {
    if (!firstName) {
      throw new Error('First name is required');
    }
    if (!lastName) {
      throw new Error('Last name is required');
    }
    if (!Zip) {
      throw new Error('Zip code is required');
    }

    await this.fillfirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillpostalCode(Zip);
  }


  async openCartMenu(): Promise<void> {
    await this.cartIcon.click();
  }

  async verifyCheckoutComplete(): Promise<void> {
    await expect(this.checkoutCompleteText).toBeVisible();
  }
  async getBadgeValue(): Promise<string> {
    const value = await this.badgeValue.textContent();
    return value ? value.trim() : '';
  }

}
