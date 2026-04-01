const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "cypress/tests/**/*.spec.js", // adjust path & pattern
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});