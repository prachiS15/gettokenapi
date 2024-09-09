const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logToken(token) {
          console.log('New Token:', token);  // Display token in the terminal
          return null;
        }
      });
    }
  }
});
