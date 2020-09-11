/// <reference types="cypress" />

describe('testovanie casu pomocou momentjs', () => {

  beforeEach( () => {
    
    cy
      .server()

    cy
      .route('POST', '/api/tasks')
      .as('createTask')

    cy
      .request('DELETE', '/api/tasks')

    cy
      .visit('/board/76916257031')

  })

  it('vytvoreny task ma deadline o 3 dni', () => {

    cy
      .contains('Add a card...')
      .click()

    cy
      .get('.List .TextArea')
      .type('chlieb{enter}')

    cy
      .wait('@createTask')
      .then( task => {
        expect(task.response.body.deadline).to.eq(Cypress.moment().add(3, 'days').format('YYYY-MM-DD'))

      })

  })
  
})

const tasks = ['chlieb', 'mlieko', 'pivo', 'syr']

describe('testovanie taskov pomocou lodash', () => {

  beforeEach( () => {

    cy
      .server()

    cy
      .route('/api/boards/*')
      .as('boardDetails')
    
    cy
      .request('DELETE', '/api/tasks')
    
    tasks.forEach( task => {

      cy
        .request('POST', '/api/tasks', { 
          title: task, 
          listId: 64239983817,
          boardId: 76916257031
        })

    })

    // ⚠️ dopln id boardu
    cy
      .visit('/board/76916257031')

  })

  it.only('nazov druheho tasku v liste', () => {

    cy
      .wait('@boardDetails')
      .then( board => {

        let taskIndex = 1
        let taskName = Cypress._.map(board.response.body.tasks,"title")
        //malo byt:
        let taskIndex = Cypress._.findIndex(board.response.body.tasks, {title: 'mlieko'})
        console.log(taskIndex)
        expect(taskIndex).to.eq(1)
        //expect(taskName[1]).to.eq("mlieko")

      })

  })
  
})