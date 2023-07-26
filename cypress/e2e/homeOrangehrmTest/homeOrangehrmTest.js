import { loginOrangehrmPage } from '../../e2e/pages/LoginOrangehrm_PageObjects'
import { homeOrangehrmPage } from '../../e2e/pages/HomeOrangehrm_PageObjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open OrangeHRM homepage', () => {
  loginOrangehrmPage.launchPage()
})
//      When I SignIn as user:
When('I SignIn as user', () => {
    loginOrangehrmPage.signIn()
  })
  //Then the user name should be displayed:
Then('the user name should be displayed', () => {
    loginOrangehrmPage.verifyAccountNameDisplayed()
  })
  //step definition for the feature file's line: And the Admin tab should be displayed
Then('the Admin tab should be displayed', () => {
    homeOrangehrmPage.checkAdminTab()
    //homeOrangehrmPage.checkAdminTabCssMethod();
    //homeOrangehrmPage.checkAdminTabTextMethod();
  })

  //Then the admin sub tab section displayed
Then('the admin sub tab section displayed', () => {
    homeOrangehrmPage.checkAdminTabSubsection()
  })
  //And I click on admin tab of home page
When('I click on admin tab of home page', () => {
    homeOrangehrmPage.clickAdminTab()
  })
  //And I double click on admin tab of home page
When('I double click on admin tab of home page', () => {
    homeOrangehrmPage.dblclickAdminTab()
  })
  //And I right click on admin tab of home page
When('I right click on admin tab of home page', () => {
    homeOrangehrmPage.rhtclickAdminTab()
  })
  //And I click on PIM tab of home page
When('I click on PIM tab of home page', () => {
    homeOrangehrmPage.clickPIMTab()
  })
  //And I select all employees in the employees list
When('I select all employees in the employees list', () => {
    homeOrangehrmPage.checkEmployees()
  })
  //Then all employees should be selected successfully
Then('all employees should be selected successfully', () => {
    homeOrangehrmPage.allEmployeesSelected()
  })
  //And I uncheck all employees in the employees list
When('I uncheck all employees in the employees list', () => {
    homeOrangehrmPage.uncheckEmployees()
  })
  //Then no employees should be selected successfully
Then('no employees should be selected successfully', () => {
    homeOrangehrmPage.noEmployeesSelected()
  })

  //And I select admin in the employees list
When('I select admin in the employees list', () => {
    homeOrangehrmPage.selectAdminEmployee()
  })

  //Then admin should be selected successfully
Then('admin should be selected successfully', () => {
    homeOrangehrmPage.adminEmployeeAssertion()
  })

  // And Verify the displayed users count
And('Verify the displayed users count', () => {
    homeOrangehrmPage.verifyUsersCount()
  })