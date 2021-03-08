import { $, ElementFinder } from "protractor";

export class ProductPage {
  private addButton: ElementFinder;

  constructor() {
    this.addButton = $(
      "#block_top_menu .menu-content > li > a[title='T-shirts']"
    );
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
