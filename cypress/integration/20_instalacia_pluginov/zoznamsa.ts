it('upload obrazku', () => {

  cy
    .visit('/board/20252105861')

  /*cy
    .get('.dz-message').as('toBeClicked')

    cy.get('@toBeClicked').attachFile('\zass.jpg');*/

    cy.get('.Task').click()
    //tohle nedelej: zhodi to cely server
    /*cy.get('[type="file"]')
      .attachFile('cypressLogo.png');*/

});