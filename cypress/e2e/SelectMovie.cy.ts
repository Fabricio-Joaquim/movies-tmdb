
describe(
    'Select Movie',
    () => {
        it(
            'should select a movie',
            () => {
                cy.visit('http://localhost:3000')
                cy.get('#movie-search').type('Star Wars')
                cy.get('.input-button').click()
                cy.get('.text-gray-900').contains('Star Wars')
                cy.contains('.movie', 'Star Wars').click()
                cy.url().should('include', '/details/')
                cy.get('.text-7xl').contains('Star Wars')
            }
        )
    }
)