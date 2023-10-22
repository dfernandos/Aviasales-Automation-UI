# Aviasales-Automation-UI

### Build
 - Install:
   - [NodeJS >=14](https://nodejs.org/en/)
   - Project dependency setup  
     - `cd aviasales-ui-test` 
     - `npm install` 

### How to run the tests

 - In the project root: ` npm run test`

### What should be tested:

  ####  Task: implement web UI auto test for ticket search
  To do:
  - Navigate to https://www.aviasales.com/
  - Enable Night Theme
  - For FROM field set NEW York, Kennedy airport
  - For TO field set Berlin
  - For DATE field set October, 30
  - No returning ticket
  - Passengers – 2 adults, economy
  - Click search flight
  #### Assert that:
  - New search page is opened
  All previous data is displayed on the new page
  
  #### Additional requirements:
  - Browser - Chrome
  - Use JavaScript + framework you prefer (playwright as a plus)
  - Use public GIT (github, gitlab) repo to share results

### Note:

- For some reason I could not run the test headless. Also, the test in debub mode is passing only if I add a pause() in  the end of test. Since I do not have enough experience in Playwright I could not figure why. 
- I noticed when I select the departure date, it shows as  "Mon Oct 30 2023" but when I check
the date in the Search page the input value is "Mon, October 30" with no year and differente format. Is it a bug?
