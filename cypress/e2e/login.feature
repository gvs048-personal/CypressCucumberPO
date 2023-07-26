@login
Feature: Login
  Scenario: Login successfully
    Given I open Login Page
    When I fill the username input with "Admin"
    And I fill the password input with "admin123"
    And I click on Login button
    Then I see "Dashboard" message
