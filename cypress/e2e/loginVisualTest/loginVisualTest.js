import { loginOrangehrmPage } from '../../e2e/pages/LoginOrangehrm_PageObjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


  
Given('I open OrangeHRM homepage', () => {
  loginOrangehrmPage.launchPage()
})

// capture snapshot
Then('I capture snapshot and compare {string}', (string) => {
    cy.matchImageSnapshot(string)
  })

//      When I SignIn as user:
When('I SignIn as user', () => {
    loginOrangehrmPage.signIn()
  })
  
//Then the user name should be displayed:
Then('the user name should be displayed', () => {
    loginOrangehrmPage.verifyAccountNameDisplayed()
  })  

  