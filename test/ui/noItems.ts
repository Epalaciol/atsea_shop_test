import { browser } from "protractor";
import { CheckoutPage, MenuContentPage } from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("try to buy no items", () => {
  const menuContent: MenuContentPage = new MenuContentPage();
  beforeEach(async () => {
    await browser.get("http://172.19.48.1:8080");
  });
  describe("click checkout", () => {
    beforeEach(async () => {
      await menuContent.clickCheckout();
    });
    describe("complete the inputs", () => {
      const checkout: CheckoutPage = new CheckoutPage();
      beforeEach(async () => {
        await checkout.setFirstName("daniela");
        await checkout.setLastName("higuita");
        await checkout.setCardNumber("123423678936");
        await checkout.setCvv("987");
        await checkout.setExpirationDate("07/23");
        await checkout.setCompany("Romaguera-Crona");
        await checkout.setTitle("junior");
        await checkout.setAddress("Kulas Light, Apt. 556");
        await checkout.setCity("Gwenborough");
        await checkout.completeOrden();
      });
      it("theh show the error message", async () => {
        expect(await checkout.getErrorMessage()).to.equal(
          "Please add to cart first..."
        );
      });
    });
  });
});
