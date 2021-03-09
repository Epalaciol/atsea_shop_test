import { browser } from "protractor";
import { ProductListPage, MenuContentPage } from "../../src/page";
const chai = require("chai");
const { expect } = chai;

describe("Let's buy something", () => {
  beforeEach(async () => {
    await browser.get("http://localhost:8080");
  });

  describe("add items to the car", () => {
    const productList: ProductListPage = new ProductListPage();
    const menuContent: MenuContentPage = new MenuContentPage();
    beforeEach(async () => {
      productList.selectProduct("Unusable Security");
    });
    it("im in the button", async () => {
      await browser.sleep(10000);
      expect(await menuContent.getNumberItems()).to.equal("1");
    });
  });
});
