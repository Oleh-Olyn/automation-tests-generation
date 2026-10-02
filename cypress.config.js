const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7o8grg",
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
