import { $, ElementFinder } from "protractor";

export class SuccessPage {
  private successButton: ElementFinder;
  private successMessage: ElementFinder;

  constructor() {
    this.successButton = $(".successButton");
    this.successMessage = $(".successMessage");
  }

  public async clickSuccessButton(): Promise<void> {
    await this.successButton.click();
  }
  public async getSuccessMessage(): Promise<string> {
    return await this.successMessage.getText();
  }
}
