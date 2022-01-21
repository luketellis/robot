/// <reference types="cypress" />

const expectedTitle = 'Robot';

describe('robot page', () => {
	beforeEach(() => {
		cy.visit(Cypress.config().baseUrl);
	});

	it('displays Robot heading', () => {
		cy.get('h1').contains(expectedTitle);
	});

	it('displays Robot title', () => {
		cy.title().should('include', expectedTitle);
	});
});
