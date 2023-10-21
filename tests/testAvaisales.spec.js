// @ts-check
const { test, expect } = require('@playwright/test');


//John F. Kennedy International Airport

test.skip('Open page and check it is loaded', async ({ page }) => {
  await page.goto('/');

  await page.waitForSelector('[data-test-id="logo-text"]', { timeout: 5000 });

  // create a locator
  const theameLocator = page.locator('[data-test-id="switch"] span').nth(1)

  await theameLocator.waitFor();
  theameLocator.click();

  await page.pause();
});
