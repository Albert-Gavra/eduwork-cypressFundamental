/// <reference types="cypress" />

describe('Browser actions', () => {

    beforeEach(() => {
        cy.visit('https://www.example.com/', {timeout: 10000})
    });

    it('Should load correct url', () => {

    });

    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    });
});