# INTERACTION

To complete this exercise have a look at the following commands:

- [cy.get()](https://docs.cypress.io/api/commands/get.html)
- [cy.click()](https://docs.cypress.io/api/commands/click.html)
- [cy.type()](https://docs.cypress.io/api/commands/type.html)
- [cy.last()](https://docs.cypress.io/api/commands/last.html)
- [cy.should()](https://docs.cypress.io/api/commands/should.html)
- [cy.contains()](https://docs.cypress.io/api/commands/contains.html)
- [cy.parent()](https://docs.cypress.io/api/commands/parent.html)
- [cy.find()](https://docs.cypress.io/api/commands/find.html)
- [cy.siblings()](https://docs.cypress.io/api/commands/siblings.html)

## Exercise: Adding a new song
**Let's create our first Song and validate it is shown on the first page.**
- On the Songs page click the + button to create a new Song 
- First thing you should do is validate that you are on the right page, do this by checking if the button is visible
- Create a song by filling in all the fields, they are all mandatory, click the button and validate that the song is created on the first page.
- Tip: use the `last` command because your song will be the last one in the list

## Exercise: Editing a song
Let's try to open the edit page for the song we've just added.

- Given that we know the song name, we should be able to locate the title on the page. To limit the results to a specific type of elements we can use the `contains`-function. Try to limit your search to `div`-elements where the `class`-attribute has the value `song-title`. 
- The `contains`-function will return the element that contains our song name. However, we want to select the button to open the song details. Figure out how to find the link to the details page of the correct song.
- Once we have the song details page open, click the edit button
- Update the details of the song and save your changes

### Deleting your testdata
If you want to get your database to it's initial state, go to 
http://localhost:8081/reset .

### If you get stuck
On the create page almost every element has an id, try to use the CSS-selector id and you will find this exercise a walk in the park
Have a look at this page if you want to refer to all the possible [css selectors](https://www.w3schools.com/cssref/css_selectors.asp).