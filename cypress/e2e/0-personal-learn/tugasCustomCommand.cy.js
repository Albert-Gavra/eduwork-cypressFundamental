/// <reference types="cypress" />

describe('Working with inputs', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include', 'login.html')
    });

    it('Visit the website', () => {

    });

    it('should fill username and password', () => {
        cy.fixture("user").then(user => {
            const user2 = user[1]
            const username = user2.username
            const password = user2.password
            const amount = 1000
            const date = "2025-04-12"
            const description = "This is a test"

            cy.login(username, password)

            cy.contains('a', 'Pay Bills').click()

            cy.pay(amount, date, description)
        })
    });
});