import { timeout } from '../playwright.config';

const { expect } = require('@playwright/test');

export class HomePageObject{

    constructor(page){
        this.page = page
        this.switchNightTheame =  page.locator('[data-test-id="switch"] span').nth(1)
        this.originInputField = page.locator('[data-test-id="origin-autocomplete-field"]')
        this.destinationInputField = page.locator('[data-test-id="destination-autocomplete-field"]')
        this.departureDateInputField = page.locator('[data-test-id="departure-date-field"]')
        this.passagerField = page.locator('[data-test-id="passengers-field"]')
        this.numberPassangerButton = page.locator('[data-test-id="passengers-adults-field"] a').nth(1)
        this.bookingCheckbox = page.getByText('Open Booking.com in a new tab')
        this.departureDate = page.locator('data-test-id="departure-date-input"')
        this.submitButton = page.locator('[data-test-id="form-submit"]')
        this.passengerText = page.getByText('2 passengers')
    
    }

    visit = async () => {
        await this.page.goto("/")
    }

    searchForFlights = async(origin, destination, departureDate) => {

        await this.switchNightTheame.waitFor();
        await this.switchNightTheame.click();

        await this.bookingCheckbox.waitFor();
        await this.bookingCheckbox.click();

        await this.originInputField.waitFor();
        await this.originInputField.click();
        await this.originInputField.fill(origin);
        await this.page.waitForTimeout(3000);

        await this.destinationInputField.waitFor();
        await this.destinationInputField.click();
        await this.destinationInputField.fill(destination);
        await this.page.waitForTimeout(3000);

        await this.departureDateInputField.waitFor();
        await this.departureDateInputField.click();

        await this.page.getByLabel(departureDate).getByText('30').click();

        await this.departureDateInputField.waitFor();

        await this.passagerField.click();

        await this.numberPassangerButton.waitFor();
        await this.numberPassangerButton.click();

        await this.submitButton.click();

    }

    validadeInformationInTheNewSearchPageasync = async(origin, destination, selectedDate) => {

        await expect(this.originInputField).toHaveValue(origin);
        await expect(this.destinationInputField).toHaveValue(destination);
        await this.page.waitForTimeout(10000);
        const departureDateSelected = await this.page.locator('[data-test-id="departure-date-input"]').getAttribute('value')
        await expect(selectedDate).toBe(departureDateSelected);
        await expect(this.passengerText).toBeVisible();

    }
}