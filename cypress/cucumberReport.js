const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress.cucumber-report",
  
  /*
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },

  },
  */
  customData: {
    title: "Run info",
    data: [
      { label: "Company", value: "QA Source" },
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "V1.2.3" },
    ],
  },
});