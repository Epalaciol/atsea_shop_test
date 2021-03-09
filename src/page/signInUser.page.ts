import { $, ElementFinder } from "protractor";

export class SignInUserPage {
  private username: ElementFinder;
  private password: ElementFinder;
  private signinButton: ElementFinder;

  constructor() {
    this.username = $("input[name='username']");
    this.password = $("input[name='password']");
    this.signinButton = $(".loginFormButton > button");
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
    await this.signinButton.click();
  }
}
