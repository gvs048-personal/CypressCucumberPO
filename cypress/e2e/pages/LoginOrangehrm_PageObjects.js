const inputUserName = 'input[name=username]'
const inputUserPassword = 'input[name="password"]'
const loginButtonSubmit = 'button[type="submit"]'
const label_Welcome = '.oxd-topbar-header-title span' //li.oxd-userdropdown p
const loginFooterLink = 'a[href="http://www.orangehrm.com"]'
const loginFooterLinkText ='div.oxd-layout-footer a'

export const loginOrangehrmPage = {
  launchPage () {
    cy.visit('/login')
  },
  enterUsername (args) {
    cy.get(inputUserName)
            .click()
            .clear()
            .type(args)
  },
  enterPassword (args) {
    cy.get(inputUserPassword)
            .click()
            .clear()
            .type(args)
  },
  clickSubmit () {
    cy.get(loginButtonSubmit)
            .click()
  },
  signIn () {
    cy.fixture('testdata').then((data) => {
      this.enterUsername(data.username)
      this.enterPassword(data.password)
      this.clickSubmit()
      cy.wait(2000)
    })
  },
  
  verifyAccountNameDisplayed () {
    cy.fixture('testdata').then((data) => {
      cy.get(label_Welcome)
            .invoke('text')
            .should('contain', `${data.displayName}`)
    })

  },

  verifyPageFooterLink () {
    cy.get(loginFooterLink)
            .should('exist')
  },
  verifyFooterLinkTextCheck () {
    cy.get(loginFooterLinkText)
            .should('exist')
  }

}
