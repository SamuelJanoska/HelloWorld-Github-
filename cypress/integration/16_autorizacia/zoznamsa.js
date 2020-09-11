/// <reference types="cypress" />

it('overenie user id', () => {

  cy
    .visit('/')

  /*cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
      //  accept: 'application/json, text/plain, 
       // authorization: '' // dopln autorizaciu
      //}
    //}).then( boards => {


   // })*/
  
  cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
      }
    }).then( boards => {

              let privateBoard = Cypress._.find(boards.body,{name: 'moj board'})
              expect(privateBoard.user).to.eq(0)
    })
  
});