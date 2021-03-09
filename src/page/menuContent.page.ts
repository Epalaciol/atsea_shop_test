import { $, $$, ElementFinder } from "protractor";

export class MenuContentPage {
  private cartDigit: ElementFinder;
  private createUser: ElementFinder;
  private signInUser: ElementFinder;

  constructor() {
    this.cartDigit = $(".cartDigit");
    this.createUser = $$(".buttonSection > div > button").first();
    this.signInUser = $$(".buttonSection > div > button").last();
  }

  public async getNumberItems(): Promise<string> {
    return await this.cartDigit.getText();
  }
  public async clickCreateUser(): Promise<void> {
    await this.createUser.click();
  }
  public async clickSignIn(): Promise<void> {
    await this.signInUser.click();
  }
}
