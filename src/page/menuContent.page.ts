import { $, ElementFinder } from "protractor";

export class MenuContentPage {
  private cartDigit: ElementFinder;

  constructor() {
    this.cartDigit = $(".cartDigit");
  }

  public async getNumberItems(): Promise<string> {
    return await this.cartDigit.getText();
  }
}
