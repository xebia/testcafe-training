# BONUS EXERCISES

Want to know more? We have some extra exercises for you to try out!

# Using the Cypress Dashboard

## Exercise: Output your results to the Cypress Dashboard

1. Click on the `Runs tab` of your project within the Test Runner.
2. Login using your Github credentials.
3. Click `Setup Project` to Record.
4. After setting up your project, Cypress inserted a unique `projectID` into your `cypress.json`.
5. Run your test suite using a command like this: ```cypress run --record --key <record key>```
6. Review your results in your dashboard

-------------
# Skipping the UI
You can use the [cy.request](https://docs.cypress.io/api/commands/request.html) command to do a HTTP request.

This can often be useful to _create a shortcut_. If the focus of your test is a piece of functionality behind a login screen, it would be great if we do not have to login through the UI before we can start our actual test. Or, when we want to modify an entity through the UI, perhaps we don't want to create it through the UI beforehand, but use the API directly.

In this exercise we will practice with a few online examples of this, to show you how this can be applied in practice.

## Exercise: Skipping the login screen
A well known Selenium practice site is [http://the-internet.herokuapp.com/](http://the-internet.herokuapp.com/). It has a simple login screen on [/login](http://the-internet.herokuapp.com/login), which forwards the user to [/secure](http://the-internet.herokuapp.com/secure) on a successful login.

1. Figure out how the authentication for [/secure](http://the-internet.herokuapp.com/secure) works
2. Write a test in Cypress that uses [cy.request](https://docs.cypress.io/api/commands/request.html) to authenticate
3. Visit [/secure](http://the-internet.herokuapp.com/secure) directly
4. Add a check that you are indeed logged in and on the secured page

## Exercise: Retrieving data through an API
Let's imagine we have to fill in a form somewhere, but we need to use data from another API to complete the form.

1. Retrieve the user data from [https://reqres.in/api/users](https://reqres.in/api/users), you can add `?page=1` to the url to get different data.
2. Visit the [/register page](https://www.phptravels.net/register) and enter the first and last name from the previous request in the form

### Need help?
* Use the network tab in the developer tools of your browser to figure out how the authentication is implemented
* Check out the [cy.request documentation](https://docs.cypress.io/api/commands/request.html) for the correct syntax
* Read up on how cookies are set using [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
* [Alias documentation](https://docs.cypress.io/guides/core-concepts/aliases-and-references.html#Introducing-Aliasing) on how to refer to the response values of the called API
* [This gitter discussion](https://gitter.im/cypress-io/cypress/archives/2017/01/13) has some good hints on how to store and reuse the values
* [Req | Res](https://reqres.in/) is an online dummy API, we use this to fetch some data we can re-use in our test
* [PHP Travels](https://www.phptravels.net/register) is a dummy site where we can enter the data retrieved from the API

-------------
# Unit testing

Although running in the browser, Cypress also allows you to do unit testing for your code, using [the frameworks](https://docs.cypress.io/guides/references/bundled-tools.html) you are familiar with.

This can be convenient when you want one report or one tool for all the tests. But more importantly it supports a nice TDD flow for all of your tests.

## Exercise: Setting up the unit tests
Today we are going to setup some unit tests for a very simple unit: [sum_all.js](https://raw.githubusercontent.com/xebia/cypress-advanced-meetup-2018/master/my_simple_library/sum_all.js).
It provides two methods to sum a list of numbers.

1. Start by downloading the [sum_all.js](https://gist.github.com/joostvanwollingen/4e5f3919055642d526707a8dd97f652d) file.
2. Put it somewhere in your Cypress project.
3. Next, create a new test file in the `cypress/integration` folder.
4. Create the test structure as per [Mocha](https://mochajs.org/) standards:
```
describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
     })
})
```
5. Import the sum_all.js file and write some unit tests for the `sumAll`-function.


### Need Help?
* [Unit testing](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/unit-testing__application-code) examples by Cypress
* [Mocha interfaces](https://mochajs.org/#interfaces) for TDD and BDD

## Exercise: Finding the bug in sum_all.js (bonus exercise)
1. Write a unit test for the addFirstArgumentToRestThenSumTheRest-function in `sum_all.js` and then find and fix the bug!

### Need Help?

* [Rest and Spread operators](https://codingwithspike.wordpress.com/2016/06/11/javascript-rest-spread-operators/), how do they work in Javascript?

-------------
## Exercise: Setting up the reporting

Running tests is fun, but reporting on them is even more fun! Especially when it's automated, right? Let's figure out how we can do that with Cypress.

1. First, let's do a test run with `npx cypress run`, this should produce a `videos` and `screenshots` folder and some console output similiar to:
```
login through cy.request and reuse the cookie
    ✓ should load the secure page with the cy.request cookie (1536ms)
```
2. When running in CI you'll probably want to publish your tests results, let's use the `junit` format for that. Cypress has a [reporter built-in](https://mochajs.org/#reporters) for that format.
```
npx cypress run --reporter junit
```
Running this should produce a `test-results.xml`-file in your root directory.
3. Now set up the `junit` reporter as the default reporter so you can `npx cypress run` without having to specify it


### Need Help?
* [Reporters](https://docs.cypress.io/guides/tooling/reporters.html) are offered by Cypress through Mocha
* [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is an easy way to run binaries from your `node_modules`

-------------
# Run tests in a Docker container

Now you have succesfully completed all the assignments it is time to take a first step towards running your Cypress tests in CI

You do not want to worry about installing Cypress and it's dependencies on a server, instead you will create a docker container with both Cypress, the server and the tests. This way you can be sure your tests run anywhere, anytime.


## 1: Creating the docker file and run it locally

1. Download the Docker Desktop client via <https://docs.docker.com/install/>
2. Install the client and create a Docker account  <https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install>
3. Figure out how to create a Docker file and where to put it in your project <https://docs.docker.com/develop/develop-images/dockerfile_best-practices/>
4. Create the docker container including it's dependencies. Don't forget you need an instance of the tabtracker client to run the tests <https://github.com/cypress-io/cypress-docker-images>
5. Run the container and run a cypress test on your container

## 2: Output the results to the online Cypress Dashboard

The Cypress Dashboard is a service that gives you access to recorded tests - typically when running Cypress tests from your CI provider. The Dashboard provides you insight into what happened when your tests ran.

You can setup your project to record using the steps outlined here:
1. Cypress Dashboard https://docs.cypress.io/guides/core-concepts/dashboard-service.html#Setup
2. Output the results of the tests you've created thusfar to the online Dashboard.
