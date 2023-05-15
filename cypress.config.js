const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    video: false,
    retries: 1,     // The number of times to retry a failing test. Can be configured to apply to cypress run or cypress open separately. See Test Retries for more information.
    defaultCommandTimeout: 5000,    // default : 4000
    viewportHeight: 800,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});