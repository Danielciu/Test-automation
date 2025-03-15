const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jsmski',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
