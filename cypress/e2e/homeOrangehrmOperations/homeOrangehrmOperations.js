import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginOrangehrmPage } from '../../e2e/pages/LoginOrangehrm_PageObjects'
import { homeOrangehrmPage } from '../../e2e/pages/HomeOrangehrm_PageObjects'


Given(`I open OrangeHRM homepage`, () => {
    loginOrangehrmPage.launchPage()
});

When(`I SignIn as user`, () => {
    loginOrangehrmPage.signIn()
});

When(`I click on PIM tab of home page`, () => {
    homeOrangehrmPage.clickPIMTab()
});

When(`I click on the Add button`, () => {
    homeOrangehrmPage.clickonAddButton()
});

Then(`Add employee panel should be loaded and should contains text {string}`, (string) => {
    homeOrangehrmPage.verifyAddEmployeeText(string)
});

When(`I enter the details`, () => {
    homeOrangehrmPage.enterEmployeeDetails()
});

When(`Click on Save button`, () => {
    homeOrangehrmPage.clickonSaveButton()
});

Then(`Entered details should be saved successfully`, () => {
    homeOrangehrmPage.verifytheSuccessToastMessage()
});

Then('Should able to see the Required field validation for First name and Last name', () => {
    homeOrangehrmPage.clickonSaveButton()
});