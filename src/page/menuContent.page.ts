import { $, $$, ElementFinder } from "protractor";

export class MenuContentPage {
  private cartDigit: ElementFinder;
  private createUser: ElementFinder;

  constructor() {
    this.cartDigit = $(".cartDigit");
    this.createUser = $$(".buttonSection > div > button").first();
  }

  public async getNumberItems(): Promise<string> {
    return await this.cartDigit.getText();
  }
  public async clickCreateUser(): Promise<void> {
    await this.createUser.click();
  }
}
