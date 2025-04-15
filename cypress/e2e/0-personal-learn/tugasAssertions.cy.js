/// <reference types="cypress" />

describe('My second test', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io', {timeout: 10000})
        cy.contains('type').click()
    }); 

    it('Should be on a new URL which includes "/commands/actions"', () => {
        cy.url().should('include', '/commands/actions')
    });

    it('Get an input, type into it and verify that the value has been updated', () => {
        cy.get('.action-email')
        .type('emailtest@gmail.com')
        .should('have.value','emailtest@gmail.com')
    });
});