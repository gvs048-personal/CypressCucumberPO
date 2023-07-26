Feature: Verying the tags 


Background: open website
Given user is on newtours website

@smoke
Scenario: passing values as prameter 
When enter valid "mercury" and "mercury"
And hit enter
Then user logged in successfully

@regression
Scenario: passing values as datatable 
When login with following details
| username | password |
| mercury  | mercury  |
And hit enter
Then user logged in successfully