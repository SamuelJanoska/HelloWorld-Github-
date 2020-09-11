/// <reference types="cypress" />

it('oznacovanie elementov', () => {

  cy
    .visit('/');

  /* oznacenie pomocou class */
  cy
  .get('.background_title')

  cy
  .contains('My Boards')
})