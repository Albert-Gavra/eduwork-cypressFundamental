/// <reference types="cypress" />

describe('Percobaan fitur login Sauce Demo', () => {
    it('Percobaan login', () => {
        cy.visit('https://www.saucedemo.com')

        cy.fixture("sauceDemo").then(user => {
            const user1 = user[0];
            const username = user1.username
            const password = user1.password
            const firstName = user1.firstName
            const lastName = user1.lastName
            const Zip = user1.Zip

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()

            cy.url().should('include', 'inventory.html')

            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').click();

            cy.url().should('include', 'cart.html')
            cy.get('#checkout').click();

            cy.url().should('include', 'checkout-step-one.html')
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstName)

            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastName)

            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(Zip)

            cy.get('input[name="continue"]').click()

            cy.url().should('include', 'checkout-step-two.html')
            cy.get('#finish').click()

            cy.url().should('include', 'checkout-complete.html')
            cy.get('#back-to-products').click()
        })
    });
});