const { test, expect, beforeEach } = require('@playwright/test');
import { HomePageObject } from '../page-objects/HomePageObject';

test.describe("Aviasales search for Flights", () => {
  let page, homepageObject; 
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    homepageObject = new HomePageObject(page);
    await homepageObject.visit();
  });

  test.only('Search for a flight successfully', async () => {

    const origin = "John F. Kennedy International Airport";
    const destination = "Berlin";
    const departureDate = "Mon Oct 30 2023";
    const originalURL = page.url();

    homepageObject.searchForFlights(origin, destination, departureDate);

    await page.waitForTimeout(7000);
    const newURL = page.url();
    expect(originalURL).not.toEqual(newURL);
    homepageObject.validadeInformationInTheNewSearchPageasync(origin, destination, "Mon, October 30");
    await page.pause();
  });

});