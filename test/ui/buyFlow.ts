import { browser } from "protractor";
import {
  ProductListPage,
  MenuContentPage,
  SignInUserPage,
  CheckoutPage,
  SuccessPage,
} from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("Let's buy something", () => {
  const menuContent: MenuContentPage = new MenuContentPage();
  const success: SuccessPage = new SuccessPage();
  beforeEach(async () => {
    await browser.get("http://3.128.131.98:8080/index.html#/?_k=xrptyg");
  });

  describe("add items to the car", () => {
    const productList: ProductListPage = new ProductListPage();
    beforeEach(async () => {
      await productList.selectProduct("Unusable Security");
    });
    describe("let's sign In", () => {
      const singInUser: SignInUserPage = new SignInUserPage();
      beforeEach(async () => {
        await menuContent.clickSignIn();
        await browser.sleep(3000);
        await singInUser.setUsername("p");
        await singInUser.setPassword("1");
        await singInUser.signUp();
      });

      describe("let's checkout", () => {
        const checkout: CheckoutPage = new CheckoutPage();
        beforeEach(async () => {
          await browser.sleep(2000);
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
          await checkout.completeOrden();
        });
        it("then you buy something", async () => {
          expect(await success.getSuccessMessage()).to.equal(
            "You have successfully placed an order!"
          );
        });
      });
    });
  });
});
