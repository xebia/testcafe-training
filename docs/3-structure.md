# STRUCTURE

## Structure your test with Custom Commands
Custom commands work well when you need to describe behavior that’s desirable across **all of your tests**. These are **reusable functions** that you can execute multiple times in your test without rewriting the steps, but by feeding different data to it.
Examples in the context of our Tab Tracker application are: 'Login', 'Adding a Song', or using the 'Search' functionality.

## Exercise: Creating a Custom Command
For this first exercise we are going to create a custom command for the search functionality. 

1. Create a new spec file

In your Cypress Integration folder create a new spec file called ```cc_exercise1_spec.js``` and copy in the code below.

```
describe('Search actions', function () {
    
    it('should search on song title', function () {

      cy.visit('http://localhost:8080/');
      cy.search('Drop it');
      cy.get('.song-title').should('contain','Drop it');
    });
});
```
Notice that we are calling a custom search function cy.search here. This function can be called as any other command in Cypress. Like ```cy.get()``` we can now simply invoke the custom command by typing ```cy.<custom command>```. In this case our custom command is called search and it takes a string to search on as an argument.

2. Create a new custom command 

Custom commands are stored in the ```cypress/support/``` folder. A good place to define your custom commands is in the ```cypress/support/commands.js``` file. You can create several custom commands in one file, but it is also possible to create separate files to group logical commands together. If you do this, you need to add these files to the ```cypress/support/index.js``` file. This file is loaded before any of the tests are run, ensuring your reusable functions are available for all your tests. 

We are now going to create the needed search function in the ```cypress/support/commands.js``` file. You can use the code below.
```
Cypress.Commands.add("search", function(input) {
    cy
        .get('input[aria-label="Search by song title, artist, album, or genre"]')
        .type(input)
        .type('{enter}');
});
```

This small function gets the text field on the songs page, selects the text field for input and types in the input that you define when you call this function. 
It also uses ```.type("{enter}");``` to simulate the push of the Enter key on the keyboard, executing the search. 

3. Run the test
Save all the changes you've made and open the Cypress UI (```node_modules/.bin/cypress open```). You should now see your newly created spec file. 

![Exercise1specfile](./images/cc_exercise1_screenshot1.png "Exercise 1: Cypress UI")

4. Create a variation

Now create a new test in your ```cc_exercise1_spec.js``` spec file that:
    1. Searches on a artist name in your database
    2. Asserts that the artist has been found 

5. Create a variation

Add another test in your ```cc_exercise1_spec.js``` spec file that:
    1. Searches on an unknown artist
    2. Asserts that the correct error message is shown

    Note: For step 4 and 5 you need to reuse the custom command you've just created and only add a new test function.   

## Exercise: Create a custom command for logging in 

Now do it yourself! Create a new custom command for the Login functionality. 
You need to cover the following criteria:
1. Your starting position should be from the baseurl of the application.
2. Create a custom command that performs a successful login.
3. Create a minimum of one assertion to verify that you are indeed logged in.
4. Add this reusable function to each test you've created thus far in this workshop. (hint: use the before step functionality).
5. Re-use this function with different data, including a failed login scenario.

### If you get stuck

You can find more examples [here](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax) to help you.
