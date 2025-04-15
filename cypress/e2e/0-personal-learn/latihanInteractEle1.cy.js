/// <reference types="cypress" />

describe('Browser actions', () => {

    beforeEach(() => {
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000})
        cy.url().should('include', 'index.html')
    });
    
    
    it('Should load books website', () => {
       
    });

    it('Should click on travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    });

});