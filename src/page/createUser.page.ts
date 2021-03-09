import { $, browser, ElementFinder } from "protractor";

export class CreateUserPage {
  private username: ElementFinder;
  private password: ElementFinder;
  private signupButton: ElementFinder;

  constructor() {
    this.username = $("input[name='username']");
    this.password = $("input[name='password']");
    this.signupButton = $(".createFormButton > button");
  }

  public async setUsername(username: string): Promise<void> {
    await this.username.sendKeys(username[0]);
    await this.username.sendKeys(username.slice(1));
  }
  public async setPassword(password: string): Promise<void> {
    await this.password.click();
    await this.password.sendKeys(password);
  }
  public async signUp(): Promise<void> {
    await browser.sleep(3000);
    await this.signupButton.click();
  }
}
