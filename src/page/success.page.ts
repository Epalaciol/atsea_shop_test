import { $, ElementFinder, ExpectedConditions, browser } from "protractor";

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
    await browser.wait(
      ExpectedConditions.presenceOf(this.successMessage),
      5000
    );
    return await this.successMessage.getText();
  }
}
