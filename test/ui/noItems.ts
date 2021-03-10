import { browser } from "protractor";
import { MenuContentPage, CheckoutPage } from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("try to but no items", () => {
  const menuContent: MenuContentPage = new MenuContentPage();
  before(async () => {
    await browser.get("http://172.19.48.1:8080");
  });
  describe("let's checkout", () => {
    const checkout: CheckoutPage = new CheckoutPage();
    beforeEach(async () => {
      await menuContent.clickCheckout();
      await checkout.setFirstName("daniela");
      await checkout.setLastName("higuita");
      await checkout.setCardNumber("123423678936");
      await checkout.setCvv("987");
      await checkout.setExpirationDate("07/23");
      await checkout.setCompany("Romaguera-Crona");
      await checkout.setTitle("junior");
      await checkout.setAddress("Kulas Light, Apt. 556");
      await checkout.setCity("Gwenborough");
    });
    it("you can't continue", async () => {
      await checkout.completeOrden();
      expect(await checkout.getErrorMessage()).to.equal(
        "Please add to cart first..."
      );
    });
  });
});
