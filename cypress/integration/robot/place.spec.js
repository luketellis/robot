/// <reference types="cypress" />

const placeNorthValidCommand = 'PLACE 0,4,NORTH';
const placeEastValidCommand = 'PLACE 4,4,EAST';
const placeSouthValidCommand = 'PLACE 4,0,SOUTH';
const placeWestValidCommand = 'PLACE 0,0,WEST';

describe('should be able to place robots in all directions', () => {
	beforeEach(() => {
		cy.visit(Cypress.config().baseUrl);
	});

	it('place robot north direction', () => {
		cy.createRobot(placeNorthValidCommand);

		cy.get('.robot1').should('have.class', 'north');
	});

	it('place robot east direction', () => {
		cy.createRobot(placeEastValidCommand);

		cy.get('.robot1').should('have.class', 'east');
	});

	it('place robot south direction', () => {
		cy.createRobot(placeSouthValidCommand);

		cy.get('.robot1').should('have.class', 'south');
	});

	it('place robot west direction', () => {
		cy.createRobot(placeWestValidCommand);

		cy.get('.robot1').should('have.class', 'west');
	});
});
