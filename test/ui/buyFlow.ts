import { browser } from "protractor";
import {
  ProductListPage,
  MenuContentPage,
  UserPage,
  SuccessPage,
} from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("Let's buy something", () => {
  const menuContent: MenuContentPage = new MenuContentPage();
  beforeEach(async () => {
    await browser.get("http://localhost:8080");
  });

  describe("add items to the car", () => {
    const productList: ProductListPage = new ProductListPage();
    beforeEach(async () => {
      await productList.selectProduct("Unusable Security");
    });
    describe("let's create an user", () => {
      const userPage: UserPage = new UserPage();
      const successPage: SuccessPage = new SuccessPage();
      beforeEach(async () => {
        await menuContent.clickCreateUser();
        await browser.sleep(3000);
        await userPage.setUsername("daniela");
        await userPage.setPassword("12345");
        await userPage.signIn();
      });
      it("go to create an user", async () => {
        await browser.sleep(3000);
        await successPage.success();
        expect(await menuContent.getNumberItems()).to.equal("1");
      });
    });
  });
});
