import { browser } from "protractor";
import { ProductListPage, MenuContentPage, CheckoutPage } from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("try to but without login", () => {
  const menuContent: MenuContentPage = new MenuContentPage();
  beforeEach(async () => {
    await browser.get("http://172.19.48.1:8080");
  });
  describe("first buy something", () => {
    const products: ProductListPage = new ProductListPage();
    beforeEach(async () => {
      await products.selectProduct("Docker Tooling");
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
          "Please login before completing order..."
        );
      });
    });
  });
});
