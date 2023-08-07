import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  globalSetup: "./global-setup",
  globalTeardown: "./global-teardown",
  use: {
    baseURL: process.env.API_URL,
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: { playwright: "yes" },
    navigationTimeout: 15000,
    actionTimeout: 15000,
    browserName: "chromium",
    headless: true,
    testIdAttribute: "data-test-id",
    launchOptions: {
      args: [
        "--disable-dev-shm-usage",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
      ],
    },
    permissions: ["clipboard-read"],
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    locale: "en-US",
  },
  retries: 0,
  // reporter: 'html',
  forbidOnly: !!process.env.CI,
});
