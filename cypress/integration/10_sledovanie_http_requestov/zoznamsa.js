/// <reference types="cypress" />

beforeEach( () => {

    cy.server()

    /*cy.route({
      method: 'DELETE',
      url: '/api/lists/*'
    })
      .as('boardList')*/

      
    cy.route({
      method: 'PATCH',
      url: '/api/tasks/*'
    })
      .as('boardList')

    cy.visit('/board/84693275238'); // doplň si adresu svojho boardu

});

it('vytvorenie tasku', () => {

  // vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení. pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

cy.get('[data-id="68317985447"] .List_addTask').click()

cy.get('[data-id="newTaskTitle"]').eq(0).type('stvrty{enter}')

/*cy.wait('@boardList').its('response.body.name').should('eq', 201)*/
cy.wait('@boardList').its('status').should('eq',201)

cy.wait('@boardList').then(task => {
    expect(task.status).to.eq(201)
})

})

it('odstránenie zoznamu', () => {

  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu
cy.get('.taskTitle').get('.Input').eq(1).next().click()

/*y.get('#myDropdown').children().click({force: true})*/
cy.contains('Delete list').click()


cy.wait('@boardList')

})

it.only('zaskrtnutie tasku', () => {

  // pomocou testu si zaškrtni task v zozname a odsleduj si request, ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request. skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

  cy.get('.Task input').click()

  cy.wait('@boardList')

  //PATCH 200 /api/tasks/86549248134

})