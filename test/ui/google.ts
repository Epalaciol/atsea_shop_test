import { browser } from "protractor";
const chai = require("chai");
const { expect } = chai;

describe("Given a SDET learning protractor", () => {
  it("should have a title", async () => {
    await browser.get("http://www.google.com");
    let title = await browser.getTitle();
    console.log(title);
    expect(title).to.equal("Google");
  });
});
