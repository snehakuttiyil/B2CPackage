const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://octopus-package-dashboard.vercel.app',
  },
});

