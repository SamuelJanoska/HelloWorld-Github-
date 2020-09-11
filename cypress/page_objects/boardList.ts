export class BoardList {

    star() {
        cy.get('.Star')
        //asi sme zvolili force:true hned kvoli skusenosti z minula pri tomto elemente
        .click({force:true})

        return this
    }
    
    open(boardName: string) {
        cy.contains(boardName)
        .click()
    }
}