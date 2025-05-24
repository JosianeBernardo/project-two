const { defineConfig } = require('cypress')

module.exports = defineConfig ({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          launchOptions.args.push('--incognito') // Ativa o modo anônimo
        }
        return launchOptions
      })
    },
  },
})
