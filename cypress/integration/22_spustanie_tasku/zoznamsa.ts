it('spustenie aplikácie s 0 taskami', () => {


    cy
    .task('resetTsks')

    cy
    .visit('/board/35869487476')


});