import { Config } from "protractor";

export const config: Config = {
  framework: "mocha",
  mochaOpts: {
    reporter: "mochawesome-screenshots",
  },
  specs: ["../test/ui/**/*.js"],
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: "http://localhost:4444/wd/hub",
};
