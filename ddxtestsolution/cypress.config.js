const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: 'cypress/output/screenshots',
  videosFolder: 'cypress/output/videos',
  viewportWidth: 1980,
  viewportHeight: 1060,
  waitForAnimations: true,
  watchForFileChanges: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://live.techpanda.org/',
  },
})
