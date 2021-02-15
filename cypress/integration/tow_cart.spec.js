/// <reference types="cypress" />
import { cartTitle, firstItem, secondItem, contineShoppingButton, classCartPopup } from '../fixtures/cart.json'

describe('Check if user can add items to the cart', () => {
    before(()=> {
        cy.visitHome(''); 
    });

    it('Check if cart is empty', () => {
        cy.checkCartOnHomePage(cartTitle, '(empty)');
    });

    it('Add items to cart', () => {
        cy.addItem(firstItem);
        cy.closeConfirmation(classCartPopup, contineShoppingButton);
        cy.addItem(secondItem);
        cy.closeConfirmation(classCartPopup, contineShoppingButton);
    });

    it('Check if cart has 2 items', () => {
        cy.checkCartOnHomePage(cartTitle, '2'); 
    });
});