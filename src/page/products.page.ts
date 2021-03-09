import {
  $$,
  ElementFinder,
  ExpectedConditions,
  browser,
  ElementArrayFinder,
} from "protractor";

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$(".tile");
  }
  private async findByProduct(product: string): Promise<ElementFinder> {
    console.log((await this.products).length);
    return this.products
      .filter(async (item) => {
        const resItem = await item
          .$(".tileTitle")
          .getText()
          .then(async (txt: string) => {
            const res = txt.includes(product);
            return res;
          });
        return resItem;
      })
      .first();
  }

  public async selectProduct(item: string): Promise<void> {
    const product: ElementFinder = await this.findByProduct(item);
    const button: ElementFinder = await product.$(".titleBottom > .tileAdd");
    await browser.wait(ExpectedConditions.elementToBeClickable(button), 5000);
    await button.click();
  }
}
