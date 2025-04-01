const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.cozaprezent.pl",
    specPattern: "cypress/integration/**/*.spec.js",
  },
});
