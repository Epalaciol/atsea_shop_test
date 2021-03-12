import { $, browser, ElementFinder, ExpectedConditions } from "protractor";

export class CheckoutPage {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private cardNumber: ElementFinder;
  private cvv: ElementFinder;
  private expirationDate: ElementFinder;
  private company: ElementFinder;
  private title: ElementFinder;
  private address: ElementFinder;
  private city: ElementFinder;
  private compleOrdenButton: ElementFinder;

  constructor() {
    this.firstName = $("input[name='firstName']");
    this.lastName = $("input[name='lastName']");
    this.cardNumber = $("input[name='cardNumber']");
    this.cvv = $("input[name='cvv']");
    this.expirationDate = $("input[name='expirationDate']");
    this.company = $("input[name='company']");
    this.title = $("input[name='title']");
    this.address = $("input[name='address']");
    this.city = $("input[name='city']");
    this.compleOrdenButton = $(".infoButton > button");
  }

  public async setFirstName(firstName: string): Promise<void> {
    await this.firstName.click();
    await this.firstName.sendKeys(firstName);
  }
  public async setLastName(lastName: string): Promise<void> {
    await this.lastName.click();
    await this.lastName.sendKeys(lastName);
  }
  public async setCardNumber(cardNumber: string): Promise<void> {
    await this.cardNumber.click();
    await this.cardNumber.sendKeys(cardNumber);
  }
  public async setCvv(cvv: string): Promise<void> {
    await this.cvv.click();
    await this.cvv.sendKeys(cvv);
  }
  public async setExpirationDate(expirationDate: string): Promise<void> {
    await this.expirationDate.click();
    await this.expirationDate.sendKeys(expirationDate);
  }
  public async setCompany(company: string): Promise<void> {
    await this.company.click();
    await this.company.sendKeys(company);
  }
  public async setTitle(title: string): Promise<void> {
    await this.title.click();
    await this.title.sendKeys(title);
  }
  public async setAddress(address: string): Promise<void> {
    await this.address.click();
    await this.address.sendKeys(address);
  }
  public async setCity(city: string): Promise<void> {
    await this.city.click();
    await this.city.sendKeys(city);
  }
  public async completeOrden(): Promise<void> {
    await this.compleOrdenButton.click();
  }
  public async getErrorMessage(): Promise<string> {
    const err = $(".loginErrorMessage");
    await browser.wait(ExpectedConditions.presenceOf(err), 5000);
    return err.getText();
  }
}
