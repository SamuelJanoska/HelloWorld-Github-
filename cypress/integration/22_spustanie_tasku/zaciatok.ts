beforeEach(() => {
  
  cy
    //.request('POST', '/api/reset');
    .task('resetDB')

});

it('zaciatok testu v cistom stave', () => {

  cy
    .visit('/')
  
});