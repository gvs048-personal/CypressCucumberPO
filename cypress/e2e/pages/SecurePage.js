export default class SecurePage {
    path = "/secure";
 
    // Create variables for element locators
    messageDiv = 'div[class="oxd-topbar-header-title"] h6';
 
    // Create independent methods to do actions on elements
    getMessage(){
        return cy.get(this.messageDiv).invoke('text');
    }
}
