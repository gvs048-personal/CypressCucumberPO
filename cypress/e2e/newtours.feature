Feature: newtours verification

Scenario: Home page validation
Given user is on newtours website
When enter valid username and password
And hit enter
Then user logged in successfully
