/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/84693275238'); // doplň si adresu svojho boardu

});

// ⚠️ pred začiatkom testovania si prosím vytvor dva zoznamy
// použi príkaz .contains()
it('pridanie položky do druhého zoznamu', () => {
  /*cy.get('[data-id="32964852072"]').contains('.List_addTask').click()*/
  cy.get('.List_addTask').contains('[data-id="32964852072"]').click()
})

it('nastavenie timeoutu', () => {
      cy.get('.List', {timeout: 10000})
      .should('have.length',1)
})