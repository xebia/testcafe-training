# NAVIGATION

For our first test we are going to perform some basic actions with Cypress. We are going to open our application and make sure that we've landed on the correct page.

Cypress works with `Commands`. These let you interact with your application as a user normally would using a browser. You can perform navigation actions, type in text and create assertions. 

To complete this exercise you will need to use at least the following commands:

- [cy.visit()](https://docs.cypress.io/api/commands/visit.html)
- [cy.get()](https://docs.cypress.io/api/commands/get.html)
- [cy.should()](https://docs.cypress.io/api/commands/should.html)

### If you get stuck
You can find the three Commands used in this exercise in the Cypress API documentation. Use this documentation to complete your exercise. 
https://docs.cypress.io/api/introduction/api.html

## Exercise: Basic commands
1. After running the Cypress GUI, a folder called "cypress/integration" was created. Create a new spec file called ```first_test.js``` in this folder and copy in the code below:

```
describe('First test', function () {
    
    it('should open the main page', function () {
    // Create your test here

    });
});
```
2. Navigate to the main page by using `cy.visit()` to open our Tab Tracker application.
You can run your test by saving all the changes you've made and open the Cypress GUI (```npx cypress open```). 

3. Get a (unique) element on the page.
Use `cy.get()` to select an element on the page.

3. Assert that this element contains certain attributes.
Use `cy.should()` to assert that the element is represented according to your expectations. The goal of your test is to assert that the landing page has been successfully opened. 

### Important!
The TabTracker has a nasty bug that sometimes redirects you to the Songs page. If you notice this please use `cy.clock()` as the first command in your test.

### If you get stuck
You can find the three used Commands in this exercise in the Cypress API documentation. Use this documentation to complete your exercise. 
https://docs.cypress.io/api/introduction/api.html

