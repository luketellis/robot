/// <reference types="cypress" />

import { validPlaceCommands } from './testHelper';

describe('should be able to place robots in all directions', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('place robot north direction', () => {
		cy.createRobot(validPlaceCommands.placeNorthCommand);

		cy.get('.robot1').should('have.class', 'north');
	});

	it('place robot east direction', () => {
		cy.createRobot(validPlaceCommands.placeEastCommand);

		cy.get('.robot1').should('have.class', 'east');
	});

	it('place robot south direction', () => {
		cy.createRobot(validPlaceCommands.placeSouthCommand);

		cy.get('.robot1').should('have.class', 'south');
	});

	it('place robot west direction', () => {
		cy.createRobot(validPlaceCommands.placeWestCommand);

		cy.get('.robot1').should('have.class', 'west');
	});
});
