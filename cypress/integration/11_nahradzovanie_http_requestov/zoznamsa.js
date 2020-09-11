

/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

    /*cy
    .route({
      method: 'GET',
      url: '/api/boards',
      response: 'fx:twoBoards',
      status: 200
    }).as('createBoard')*/

    cy
    .route({
      method: 'POST',
      url: '/api/tasks',
      response: [],
      status: 500
    }).as('createBoard')

  /*cy
    .visit('/')*/


    cy
    .visit('/board/84693275238')

});

it('zoznam dvoch boardov z fixture', () => {

  // použi súbor twoBoards.json z fixtures foldra. do tohto it() bloku nemusíš nič písať. stačí, že zmeníš .route() príkaz v beforeEach bloku

})

it('zoznam boardov s hviezdickou z fixture', () => {

  // ak sa Ti podarilo splniť predošlú úlohu, stačí si vyfiltrovať tento test a zmeniť dáta v súbore twoBoards.json po uložení testu a súboru twoBoards.json by si mal/a vidieť správny výsledok



})

it.only('chyba pri vytvoreni tasku', () => {

  // pridaj si ďalší .route() príkaz, ktorým si odchytíš api volanie, ktoré sa robí pri vytvorení tasku. nahraď odpoveď tak, aby zo servra prišiel chybový status kód. dôležitá poznámka: pri nahradzovaní odpovede je parameter „response“ povinný
  cy.get('.List_addTask').click()

  cy.get('[data-id="newTaskTitle"]').type("napisem nieco{enter}")

  cy.wait('@createBoard')

  cy.get('#errorMessage').should('be.visible')

})