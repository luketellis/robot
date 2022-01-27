/// <reference types="cypress" />

import { validPlaceCommands } from './testHelper';

describe('robots should be able to turn left from all directions', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('robot facing north and turns left ends up facing west', () => {
		cy.createRobot(validPlaceCommands.placeNorthCommand);
		cy.turnRobotLeft();

		cy.get('.robot1').should('have.class', 'west');
	});

	it('robot facing east and turns left ends up facing north', () => {
		cy.createRobot(validPlaceCommands.placeEastCommand);
		cy.turnRobotLeft();

		cy.get('.robot1').should('have.class', 'north');
	});

	it('robot facing south and turns left ends up facing east', () => {
		cy.createRobot(validPlaceCommands.placeSouthCommand);
		cy.turnRobotLeft();

		cy.get('.robot1').should('have.class', 'east');
	});

	it('robot facing west and turns left ends up facing south', () => {
		cy.createRobot(validPlaceCommands.placeWestCommand);
		cy.turnRobotLeft();

		cy.get('.robot1').should('have.class', 'south');
	});
});

describe('robots should be able to turn right from all directions', () => {
	beforeEach(() => {
		cy.visit(Cypress.config().baseUrl);
	});

	it('robot facing north and turns right ends up facing east', () => {
		cy.createRobot(validPlaceCommands.placeNorthCommand);
		cy.turnRobotRight();

		cy.get('.robot1').should('have.class', 'east');
	});

	it('robot facing east and turns right ends up facing south', () => {
		cy.createRobot(validPlaceCommands.placeEastCommand);
		cy.turnRobotRight();

		cy.get('.robot1').should('have.class', 'south');
	});

	it('robot facing south and turns right ends up facing west', () => {
		cy.createRobot(validPlaceCommands.placeSouthCommand);
		cy.turnRobotRight();

		cy.get('.robot1').should('have.class', 'west');
	});

	it('robot facing west and turns right ends up facing north', () => {
		cy.createRobot(validPlaceCommands.placeWestCommand);
		cy.turnRobotRight();

		cy.get('.robot1').should('have.class', 'north');
	});
});
