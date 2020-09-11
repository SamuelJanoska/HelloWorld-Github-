/// <reference types="cypress" />

beforeEach( () => {

    // pred začiatkom testu vymaž všetky boardy
    cy.request('POST','/api/reset')

    /*cy.request('POST','/boards')*/

    cy.request('POST','/boards',{
      name: 'novy board'
    })

})

it('vytvorenie boardu cez api a overenie', () => {

  cy
    .visit('/')

    cy.get('.board_item').should('exist')

})