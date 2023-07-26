import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("user is on newtours website",()=>{
    cy.visit("https://demo.guru99.com/test/newtours/");
    cy.title().should("eq","Welcome: Mercury Tours");
})

When("enter valid username and password",()=>{
    cy.get('[name="userName"]').type("mercury");
    cy.get('[name="password"]').type("mercury");
})

And("hit enter",()=>{
    cy.get('[name="submit"]').click();
})

Then("user logged in successfully",()=>{
    cy.title().should("eq","Login: Mercury Tours");
})