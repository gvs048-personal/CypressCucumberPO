Feature: Scenario Outline Demo

    Scenario Outline: passing values from Examples section 
        Given user is on newtours website
        When enter username as '<Username>' and password as '<Password>'
        And hit enter
        Then user logged in successfully
        Examples:
            | Username | Password |
            | mercury  | mercury  |
            | mercury2 | abcdef   |
