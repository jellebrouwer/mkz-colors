require('dotenv').config();

module.exports = {
  testConcurrency: 20, // 20 MAX
  serverUrl: 'https://kpneyes.applitools.com/',
  apiKey: process.env.APPLITOOLS_API_KEY,
  parentBranchName: 'mkz-colors/main',
  branchName: `mkz-colors/some-branch`,
  showLogs: true,
  browser: [
    { width: 1280, height: 600, name: 'chrome' },
    {
      iosDeviceInfo: {
        deviceName: 'iPhone X',
        iosVersion: 'latest',
      },
    },
  ],
  // failCypressOnDiff: true,
  // ignoreDisplacements: true,
  // layoutBreakpoints: true,
  batch: {
    name: 'mkz-colors',
  },
  // visualGridOptions: {
  //   stabilizationDelayPostNavigationMs: 1000,
  // },
};
