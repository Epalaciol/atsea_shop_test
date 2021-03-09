import { $, ElementFinder } from "protractor";

export class UserPage {
  private username: ElementFinder;
  private password: ElementFinder;
  private signInButton: ElementFinder;

  constructor() {
    this.username = $("input[name='username']");
    this.password = $("input[name='password']");
    this.signInButton = $(".createFormButton > button");
  }

  public async setUsername(username: string): Promise<void> {
    await this.username.sendKeys(username);
  }
  public async setPassword(password: string): Promise<void> {
    await this.password.sendKeys(password);
  }
  public async signIn(): Promise<void> {
    await this.signInButton.click();
  }
}
