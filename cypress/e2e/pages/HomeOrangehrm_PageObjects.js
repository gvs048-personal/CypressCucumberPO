const admin_tabselector_Homepage = '#menu_admin_viewAdminModule'
const userDetail_Adminpage = '.oxd-topbar-header-title span'
const pimTab_Homepage = 'ul > li:nth-child(2) > a'
const selectAll_pimTab = 'div[role="columnheader"] input'
const admin_tabxPath_Homepage = 'ul > li:nth-child(1) > a'
const records_count_text = 'div>.oxd-text.oxd-text--span'
const records_count='.oxd-table-card'
const admin_role='div.oxd-table-card>.oxd-table-row>div:nth-child(5)'
const pim_addbutton_HomePage='.orangehrm-header-container>.oxd-button--secondary'
const pim_addEmployeelbl_HomePage='.orangehrm-card-container>.orangehrm-main-title'
const pim_firstname_addEmp='input[name="firstName"]'
const pim_lastname_addEmp='input[name="lastName"]'
const pip_saveBtn_addEmp='button.orangehrm-left-space'
const pip_firstname_req_addEmp='div.--name-grouped-field>div:nth-child(1) span'
const pip_lastname_req_addEmp='div.--name-grouped-field>div:nth-child(3) span'
const pip_successtoast_addEmp='.oxd-toast-start>div:nth-child(2)>p'


export const homeOrangehrmPage = {
  checkAdminTab () {
    cy.get(admin_tabxPath_Homepage).invoke('show').should('be.visible')
  },

  checkAdminTabCssMethod () {
    cy.get(admin_tabselector_Homepage).invoke('show').should('be.visible')
  },
  checkAdminTabTextMethod () {
    cy.contains('Admin').invoke('show').should('be.visible')
  },
  clickAdminTab () {
    cy.get(admin_tabxPath_Homepage)
      .invoke('show')
      .should('be.visible')
      .click()
  },
  dblclickAdminTab () {
    cy.get(admin_tabxPath_Homepage)
      .invoke('show')
      .should('be.visible')
      .dblclick()
  },
  checkAdminTabSubsection () {
    cy.get(userDetail_Adminpage).invoke('show').should('be.visible')
  },
  rhtclickAdminTab () {
    cy.get(admin_tabxPath_Homepage).rightclick()
  },
  clickPIMTab () {
    cy.get(pimTab_Homepage).invoke('show').should('be.visible').click()
  },
  checkEmployees () {
    cy.get(selectAll_pimTab).not('[disabled]').check({ force: true })
  },
  allEmployeesSelected () {
    cy.get(selectAll_pimTab).not('[disabled]').should('be.checked')
  },
  uncheckEmployees () {
    cy.get(selectAll_pimTab).not('[disabled]').should('be.checked').uncheck({ force: true })
  },
  selectAdminEmployee () {
    cy.get(admin_role).each(($el, index, $list) => {

      if($el.text().includes("IT Manager")){
        cy.get("div.oxd-table-card:nth-child("+(index+1)+")>.oxd-table-row input").click({force: true});
      }

    })
  },
  adminEmployeeAssertion () {
    //cy.get(salesMgr_PIM).not('[disabled]').should('be.checked')
    cy.get(admin_role).each(($el, index, $list) => {

      if($el.text().includes("IT Manager")){
        cy.get("div.oxd-table-card:nth-child("+(index+1)+")>.oxd-table-row input").not('[disabled]').should('be.checked')
      }

    })
  },
  noEmployeesSelected () {
    cy.get(selectAll_pimTab).not('[disabled]').should('not.be.checked')
  },
/*
  jobTitleDropdown () {
    cy.get('select')
      .xpath(jobTitleDropdown_pim)
      .select('Sales Representative')
      .should('have.value', '13')
  },
  clickSearchbtn () {
    cy.xpath(searchBtn_pim).click()
  },
  resultTableDisplay () {
    cy.xpath(searchResults).invoke('show').should('be.visible')
  },
  */
  mousedownAdminTab () {
    cy.get(admin_tabxPath_Homepage)
      .invoke('show')
      .should('be.visible')
      .trigger('mousedown')
  },
  touchAdminTab () {
    cy.get(admin_tabxPath_Homepage)
      .invoke('show')
      .should('be.visible')
      .trigger('touchstart')
  },
  mouseoverAdminTab () {
    cy.get(admin_tabxPath_Homepage)
      .invoke('show')
      .should('be.visible')
      .trigger('mouseover')
  },
/*
  mouseOverAdminResultTableR1C2 () {
    cy.xpath(admin_resultTableRow1Column2)
      .invoke('show')
      .should('be.visible')
      .trigger('mouseover')
  },
  mouseleaveAdminResultTableR1C2 () {
    cy.xpath(admin_resultTableRow1Column2)
      .invoke('show')
      .should('be.visible')
      .trigger('mouseleave')
  },
  mouseOverAdminResultTableR2C2 () {
    cy.xpath(admin_resultTableRow2Column2)
      .invoke('show')
      .should('be.visible')
      .trigger('mouseover')
  },
  mousActionsonDashboardGraph () {
    cy.xpath(graph_dashboard)
      .as('graph')
      .trigger('mousedown')
      .trigger('mousemove')
      .trigger('mouseup')
      .trigger('mouseleft', { which: 1, pageX: 600, pageY: 100 })
      .trigger('mouseright', { which: 1, pageX: 600, pageY: 600 })
      .trigger('mouseleave')
  },

  textInsightsBelowGraph () {
    cy.xpath(sectionBelowGraph).invoke('show').should('be.visible')
  },
  */
  viewPortIphone6 () {
    cy.viewport('iphone-6')
  },
  viewPortIphonexr () {
    cy.viewport('iphone-xr')
  },
  viewPortmac15 () {
    cy.viewport('macbook-15')
  },
  viewPortipad2 () {
    cy.viewport('ipad-2')
  },
/*
  //accessibility related methods:
  navJobtitleusingKeyboard () {
    cy.xpath(supervisorPIMtab).click().tab().focused(jobTitleDropdown_pim)
  },
  navempNameusingKeyboard () {
    cy.xpath(empIdPIMTab).click().tab({shift: true}).focused(empNamePIMTab)
  },
  enterempNameusingKeyboard () {
    cy.focused(empNamePIMTab).type('Peter')
  },
  selectjobTitleusingKeyboard () {
    cy.xpath(jobTitleDropdown_pim).type('{enter}{downArrow}sales{downArrow}{enter}')
  },
  pressSearchusingKeyboard () {
    cy.xpath(searchBtn_pim).type('{enter}')
  },
*/

  pressAltLeftusingKeyboard(){
   cy.geet(pimTab_Homepage).type('{alt}{leftArrow}')

  },
  pressAltRightusingKeyboard(){
    cy.get(admin_tabxPath_Homepage).type('{alt}{rightArrow}')

   },
   pressAltRightusingKeyboard(){
    cy.get(admin_tabxPath_Homepage).type('{alt}{rightArrow}')

   },
   pressPageDownusingKeyboard(){
    cy.get(admin_tabxPath_Homepage).type('{pageDown}')
   },
   pressPageUpusingKeyboard(){
    cy.get(admin_tabxPath_Homepage).type('{pageUp}')
   },
   pressUpDownRightLeftusingKeyboard(){
   cy.get('body').type(
    '{uparrow}{uparrow}{downarrow}{downarrow}{leftarrow}{rightarrow}{leftarrow}{rightarrow}')
   },
   pressSelectAllusingKeyboard(){
    cy.get(admin_tabxPath_Homepage).type('{selectAll}')
   },
   pressMoveToEndusingKeyboard(){
    cy.get(admin_tabxPath_Homepage).type('{moveToEnd}')
   },
   verifyUsersCount(){
    cy.get(records_count_text).then(($first) => {
      // save text from the first element
      let text = $first.text()
      .replace("(","")
      .replace(")","")
      .split(' ')
      //cy.log(text)
      cy.log(text[1])
      cy.get(records_count).should('have.length',text[1]) 
    })
   },
   clickonAddButton(){
    cy.get(pim_addbutton_HomePage).invoke('show').should('be.visible').click()
   },
   verifyAddEmployeeText(string){
    cy.get(pim_addEmployeelbl_HomePage).invoke('text')
    .then(function (text) {
      expect(text).to.include(string)
    })
   },
   enterEmployeeDetails(){
    cy.fixture('testdata').then((data) => {
      cy.get(pim_firstname_addEmp).type(`${data.fName}`)
      cy.get(pim_lastname_addEmp).type(`${data.lName}`)
    })
    
   },
   clickonSaveButton(){
    cy.get(pip_saveBtn_addEmp).invoke('show').should('be.visible').click()
   },
   verifyAddEmpRequiredFieldValidation(){
    cy.get(pip_firstname_req_addEmp).invoke('text')
    .Then(function (text) {
      expect(text).to.include(`${data.validation}`)
    })
    cy.get(pip_lastname_req_addEmp).invoke('text')
    .Then(function (text) {
      expect(text).to.include(`${data.validation}`)
    })
   },
   verifytheSuccessToastMessage(){
    cy.get(pip_successtoast_addEmp).should('be.visible')
    cy.get(pip_successtoast_addEmp).invoke('text').should('contain','Success')
   },
}
