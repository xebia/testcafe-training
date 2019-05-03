# NAVIGATION

For our first test we are going to perform some basic actions with TestCafe. We are going to open our application and make sure that we've landed on the correct page.

TestCafé works with `Fixtures`. A Fixture is an object in which you store the url (start webpage of your test), metadata (key- value),  initialization functions and clean-up functions.

To complete this exercise you will need to use at least the following:

- [Fixtures) (https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#fixtures)
- [Selecting Page Elements](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/using-selectors.html)
- [Assertions](https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html)


## Exercise: Basic commands
1. After installing the TestCafé package, create a folder with the name 'tests' in the client folder. Create a new spec file called ```first_test.js``` in this folder and copy in the code below:

```
fixture `my first fixture`
    .page `http://localhost:8080`
    
    test('MyTest', async t => {
      
    })
```

2. Navigate to the main page by using the page-element in your fixture to open our Tab Tracker application.
You can run your test by saving all the changes you've made and start the test with TestCafé (```testcafe firefox tests/*```). 

3. Get a (unique) element on the page. 
Use `expect(Selector(<element>))` to select an element on the page.

3. Assert that this element contains certain attributes.
Use Chai's `contains` - assertion to assert that the element is represented according to your expectations. The goal of your test is to assert that the landing page has been successfully opened. 
