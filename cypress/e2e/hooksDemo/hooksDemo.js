import {Given, When, Then, And, Before, After, BeforeEach, AfterEach } from "cypress-cucumber-preprocessor/steps"

Before(()=>{
    cy.log("Before hook");
})
/*
BeforeEach(()=>{
    cy.log("before each hook")
})
*/
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

When("enter valid {string} and {string}",(username,password)=>{
    cy.get('[name="userName"]').type(username);
    cy.get('[name="password"]').type(password);
})
When('login with following details', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('[name="userName"]').type(element.username);
        cy.get('[name="password"]').type(element.password);
    });

});
After(()=>{
    cy.log("After Hook")
})
/*
AfterEach(()=>{
    cy.log("After each hook")
})
*/