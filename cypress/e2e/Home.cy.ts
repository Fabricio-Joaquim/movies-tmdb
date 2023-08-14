
describe('Home', () => {
    it('should load the home page', () => {
        cy.visit('http://localhost:3000')
        cy.get('#movie-search').type('Star Wars')
        cy.get('.input-button').click()
        cy.get('.text-gray-900').contains('Star Wars')
    })
    }
)