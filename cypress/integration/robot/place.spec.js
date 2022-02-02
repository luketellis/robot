/// <reference types="cypress" />

describe('should be able to place robots in all directions', () => {
	before(() => {
		cy.fixture('validPlaceCommands').then((data) => {
			cy.northPlaceCommand = data.north;
			cy.southPlaceCommand = data.south;
			cy.eastPlaceCommand = data.east;
			cy.westPlaceCommand = data.west;
		});
	});
	beforeEach(() => {
		cy.visit('');
	});

	it('place robot north direction', () => {
		cy.createRobot(cy.northPlaceCommand);
		cy.get('.robot1').should('have.class', 'north');
	});

	it('place robot east direction', () => {
		cy.createRobot(cy.eastPlaceCommand);
		cy.get('.robot1').should('have.class', 'east');
	});

	it('place robot south direction', () => {
		cy.createRobot(cy.southPlaceCommand);
		cy.get('.robot1').should('have.class', 'south');
	});

	it('place robot west direction', () => {
		cy.createRobot(cy.westPlaceCommand);
		cy.get('.robot1').should('have.class', 'west');
	});
});
