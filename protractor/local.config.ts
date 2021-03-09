import { browser, Config } from "protractor";

const firefoxConfig = {
  browserName: "firefox",
  name: "firefox-tests",
  shardTestFiles: true,
  maxInstances: 1,
  "moz:firefoxOptions": {
    args: [
      "--disable-popup-blocking",
      "--no-default-browser-check",
      "--window-size=800,600",
    ],
  },
};

const chromeConfig = {
  browserName: "chrome",
  name: "chrome-tests",
  shardTestFiles: true,
  maxInstances: 1,
  chromeOptions: {
    args: [
      "--disable-popup-blocking",
      "--no-default-browser-check",
      "--window-size=800,600",
    ],
    prefs: { credentials_enable_service: false },
  },
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  multiCapabilities,
  framework: "mocha",
  mochaOpts: {
    reporter: "mochawesome-screenshots",
    timeout: 120000,
  },
  specs: ["../test/ui/**/*.js"],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: "http://0.0.0.0:4444",
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
};
