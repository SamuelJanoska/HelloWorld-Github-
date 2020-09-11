/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('board/84693275238')

})

it('vytvorenie tasku', () => {



})

it('overenie poctu taskov', () => {

  cy.contains('Add a card').click()
  cy
    .get('[data-id="newTaskTitle"]')
    .type('wash dishes{enter}')

    cy
    .get('.Task')
    .should('have.length',2)

})

it('overenie zaskrtnutia', () => {

  
  cy
    .get('.Task input').check()

    cy
    .get('.Task input').should('be.checked')
})

it.only('overenie názvu listu', () => {
  
    cy
    .get('.taskTitle').should('have.value','new list')
})