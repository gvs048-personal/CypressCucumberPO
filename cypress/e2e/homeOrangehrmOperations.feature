Feature: Home Page perrform operationslike edit and delete on OrangeHRM website


    Background: user is on PIM tab and clicked on the Add button
        Given I open OrangeHRM homepage
        When I SignIn as user
        And I click on PIM tab of home page
        And I click on the Add button
        Then Add employee panel should be loaded and should contains text "Add Employee"

   Scenario: Check Add employee in PIM tab
        When I enter the details 
        And Click on Save button
        Then Entered details should be saved successfully

   Scenario: Verify required field validation of Add employee in PIM tab 
        When Click on Save button
        Then Should able to see the Required field validation for First name and Last name
