/// <reference types="cypress" />

describe('Working with inputs', () => {

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });    

    it('Visit the website', () => {

    });

    it('should fill username and password', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
});