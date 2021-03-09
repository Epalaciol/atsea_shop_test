import { browser } from "protractor";
import {
  ProductListPage,
  MenuContentPage,
  SignInUserPage,
} from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("Let's buy something", () => {
  const menuContent: MenuContentPage = new MenuContentPage();
  beforeEach(async () => {
    await browser.get("http://172.19.48.1:8080");
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
        await singInUser.setUsername("daniela");
        await singInUser.setPassword("12345");
        await singInUser.signUp();
      });
      it("then is login", async () => {
        await browser.sleep(3000);
        expect(await menuContent.getNumberItems()).to.equal("1");
      });
    });
  });
});
