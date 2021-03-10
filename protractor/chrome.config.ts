import { browser, Config } from "protractor";

export const config: Config = {
  framework: "mocha",
  mochaOpts: {
    timeout: 600000,
    reporter: "mochawesome-screenshots",
    reporterOptions: {
      reportName: "report" + new Date().getTime(),
      multiRepor: true,
      clearOldScreenshots: false,
    },
  },
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: [
        "--disable-popup-blocking",
        "--no-default-browser-check",
        "--window-size=1200,800",
      ],
    },
  },
  specs: ["../test/ui/**/*.js"],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: "http://0.0.0.0:4444",
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
  },
};
