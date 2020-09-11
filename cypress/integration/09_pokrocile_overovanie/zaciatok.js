/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/84693275238');

});

it('overenie textu prveho tasku', () => {

  cy
    .get('.Task')
    .should('contain.text', 'chlieb')


});

it('overenie textov vsetkych taskov', () => {

});

it('task s textom „syr“ je na poslednej pozicii (riesenie 1)', () => {

  cy
    .get('.Task')
    .last()
    .should('contain.text', 'syr');

});

it('task s textom „mlieko“ je na poslednej pozícii (riesenie 2)', () => {

});

it.only('over vsetky zaskrtnute tasky', () => {

  cy
    .get('[data-id="68317985447"]').get('.checkmark')
    .then( task => {
        /*expect(task[0]).to.be.checked*/
        expect(task[1]).to.be.checked
        expect(task[2]).to.be.checked
    })

})

