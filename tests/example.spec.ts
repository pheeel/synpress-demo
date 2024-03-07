import { Page } from "@playwright/test";
import { test, expect } from "../pw-fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

let sharedPage: Page;

test.describe.configure({ mode: "serial" });

test.beforeAll(async ({ page }) => {
  sharedPage = page;
  await page.goto("https://side.xyz/login");
});
//
// test.afterAll(async ({ context }) => {
//   await context.close();
// });
//
// test("should connect to MetaMask and display wallet address", async () => {
//   await expect(sharedPage.locator("#address")).toHaveText("Address: ??");
//   await expect(sharedPage.locator("#connected")).toHaveText("Connected: NO");
//
//   await sharedPage.locator("#connect-btn").click();
//   await metamask.acceptAccess();
//
//   await expect(sharedPage.locator("#address")).toHaveText(
//     "Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
//   );
//   await expect(sharedPage.locator("#connected")).toHaveText("Connected: YES");
//
//   sharedPage.locator("#disconnect-btn").click();
//   await expect(sharedPage.locator("#address")).toHaveText("Address: ??");
//   await expect(sharedPage.locator("#connected")).toHaveText("Connected: NO");
// });


test("connect wallet using default metamask account", async (page) => {
  // await page.goto(url);
  // await page.goto("https://side.xyz/login");
  await page.click("text=MetaMask");
  // await page.waitForTimeout(6000);
  await metamask.acceptAccess({ confirmSignatureRequest: true });
  await page.waitForTimeout(3000);
});
