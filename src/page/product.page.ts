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
    this.products = $$(".productListWrapper");
  }
  private async findByProduct(product: string): Promise<ElementFinder> {
    return this.products
      .filter(async (item) => {
        return await item
          .$(".titleTitle")
          .getText()
          .then(async (txt: string) => await txt.includes(product));
      })
      .first();
  }

  public async selectProduct(item: string): Promise<void> {
    const product: ElementFinder = (await this.findByProduct(item)).$(
      ".titleAdd > button"
    );
    await browser.wait(ExpectedConditions.elementToBeClickable(product), 5000);

    await product.click();
  }
}
