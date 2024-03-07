import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 100 * 1000,
  expect: {
    timeout: 40000,
  },
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: "html",
  outputDir: "test-results",
  testMatch:'*spec.ts',
  use: {
    actionTimeout: 1000 * 80,
    launchOptions: {
      slowMo: 250,
    },
  }
});
