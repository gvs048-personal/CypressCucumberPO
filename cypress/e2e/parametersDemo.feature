Feature: Verify passing params from feature file


Scenario: passing values as prameter 
Given user is on newtours website
When enter valid "mercury" and "mercury"
And hit enter
Then user logged in successfully

Scenario: passing values as datatable 
Given user is on newtours website
When login with following details
| username | password |
| mercury  | mercury  |
And hit enter
Then user logged in successfully