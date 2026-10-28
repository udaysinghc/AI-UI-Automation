import { Given, When, Then } from "@cucumber/cucumber";


Given("I open the login page", async function () {
    console.log("Opening the login page");
});

When("I enter valid credentials", async function () {
    console.log("Entering valid credentials");
});

Then("I should see the dashboard", async function () {
    console.log("Checking the dashboard");
});