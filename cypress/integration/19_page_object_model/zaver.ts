import { BoardList } from '../../page_objects/boardList'
const boardList = new BoardList
const boardDefault = 'novy board'

beforeEach(() => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: boardDefault
    })

  cy
    .visit('/')

});

it('ohviezdickovanie boardu', () => {

  boardList
    .star()

});

it('otvorenie boardu', () => {

  boardList
    .star()
    .open(boardDefault)

});