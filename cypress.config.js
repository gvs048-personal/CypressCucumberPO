const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    
  },
})
