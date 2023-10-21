// @ts-check
const { test, expect } = require('@playwright/test');
import { HomePageObject } from '../page-objects/HomePageObject';


test.describe("Aviasales search for Flights", () => {


test.only('Search for a flight sucessfully', async ({ page }) => {

  const homepageObject = new HomePageObject(page);
  await homepageObject.visit();
  

const origin = "John F. Kennedy International Airport";
const destination = "Berlin"
const departureDate = "Mon Oct 30 2023"

const originalURL = page.url();

  homepageObject.searchForFlights(origin, destination, departureDate);

  await page.waitForTimeout(5000);

  // Capture the URL of the new page
  const newURL = page.url();

  // Check if a new page has opened by comparing URLs
  expect(originalURL).not.toEqual(newURL);
//   await page.pause();
  homepageObject.validadeInformationInTheNewSearchPageasync(origin, destination, "Mon, October 30")
  await page.pause();
  //await page.pause();
});

});
