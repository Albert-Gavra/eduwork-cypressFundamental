/// <reference types="cypress" />

describe('Working with inputs', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Visit the website', () => {

    });

    it('should fill username and password', () => {
        cy.fixture("user").then(user => {
            const user1 = user[0]
            const username = user1.username
            const password = user1.password


            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('#user_remember_me').check()

            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
        })
    });
});