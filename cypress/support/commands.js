/// <reference types="cypress" />

Cypress.Commands.add('visitHome', (url = '', options) =>{
    cy.visit(`${Cypress.env('homeUrl')}${url}`, options);
});

Cypress.Commands.add('addItem', (itemId) => {
    cy.get(`${itemId}`).contains('Add to cart').click();
    cy.wait(5000);
});

Cypress.Commands.add('closeConfirmation', (confirmationClass, submitButton) => {
    cy.get(`${confirmationClass}`, { timeout: 10000 }).should('be.visible');
    cy.contains(`${submitButton}`).click();
})

Cypress.Commands.add('checkCartOnHomePage', (cartTitle, countElements) =>{
    cy.get(`${cartTitle}`).contains(`${countElements}`);
});