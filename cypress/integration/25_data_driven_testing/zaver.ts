const lists = [
  {
    name: 'to do',
    tasks: ['odpáliť raketu', 'pobaliť jedlo', 'tlačová správa']
  },
  {
    name: 'in progress',
    tasks: ['pripraviť astronautov', 'nastaviť odpočítavanie']
  },
  {
    name: 'completed',
    tasks: ['natankovať raketu']
  }
]

lists.forEach((list, index) => {

  it(`skontrolovať ${list.name} zoznam`, () => {

    cy
      .visit('/board/59305256939')

    cy
      .get('.List')
      .eq(index)
      .find('.Task')
      .should('have.length', list.tasks.length)

      list.tasks.forEach((task, index2) => {
        
        console.log(index2)
        cy      
        .get('.List')
        .eq(index)
        .find('.Task')
        .find('.Task_title')
        .eq(index2)
        .should('contain', task)
        /*console.log(task)*/}
      )

  });

})