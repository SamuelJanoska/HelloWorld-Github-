/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

    cy.
    request('POST','/api/boards',{
      name: 'moj board'}).then( board => {
        Cypress.env('board', board.body)
    })

})

it('otvorenie novovytvoreneho boardu', () => {

    cy
      .visit('/board/' + Cypress.env('board')['id'])

})