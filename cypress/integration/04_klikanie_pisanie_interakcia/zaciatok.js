/// <reference types="cypress" />

it('vytvorenie nového boardu', () => {

cy.visit('/')

cy.get('#new-board').click()

cy.get('#new-board input').type('new board{enter}')

});

it('označenie boardu hviezdičkou', () => {

    cy.visit('/')
    cy.get('.Star').click({force:true})

});

it.only('označenie tasku', () => {

    /*cy.visit('/')*/
    cy.visit('/board/36219092588')
    cy.get('.Task input').check()

    cy.get('.Task input').uncheck()
});