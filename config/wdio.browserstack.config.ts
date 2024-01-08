

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'dharunr_TgAxvB',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'hGpAuxyqtHMDpdwse38H',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://6307eff2f50ecf32ddb48f18e8788cb558f38dfb',
          // buildIdentifier: "${DATE_TIME}",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, 
  ],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sauce Labs App",
        buildName: "bstack-sauceLabs",
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 1,
    specs: [
      '/Users/testvagrant_1/Documents/Mobile/WDIO-Typescript/test/specs/gestures/swipeGestures.test.ts'
  ],
}