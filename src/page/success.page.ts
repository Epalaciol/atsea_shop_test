import { $, ElementFinder } from "protractor";

export class SuccessPage {
  private successButton: ElementFinder;

  constructor() {
    this.successButton = $(".successButton");
  }

  public async success(): Promise<void> {
    await this.successButton.click();
  }
}
