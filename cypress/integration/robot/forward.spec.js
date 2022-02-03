/// <reference types="cypress" />
import { ERROR_MESSAGES } from '../../../src/domain/config/constants';

before(() => {
	cy.fixture('facingBorderPlaceCommands').then((data) => {
		cy.northPlaceCommand = data.north;
		cy.southPlaceCommand = data.south;
		cy.eastPlaceCommand = data.east;
		cy.westPlaceCommand = data.west;
	});
});

describe('robots should not be able to move outside grid from all directions', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('robot facing north and move forward ends up one cell up', () => {
		cy.createRobot(cy.northPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('be.visible');
	});

	it('robot facing east and move forward ends up one cell to the right', () => {
		cy.createRobot(cy.eastPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('be.visible');
	});

	it('robot facing south and move forward ends up one cell down', () => {
		cy.createRobot(cy.southPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('be.visible');
	});

	it('robot facing east and move forward ends up one cell to the right', () => {
		cy.createRobot(cy.westPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('be.visible');
	});
});

describe('robots should be able to move forward from all directions', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('robot facing north and move forward ends up one cell up', () => {
		cy.createRobot(cy.northPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('not.exist');
	});

	it('robot facing east and move forward ends up one cell to the right', () => {
		cy.createRobot(cy.eastPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('not.exist');
	});

	it('robot facing south and move forward ends up one cell down', () => {
		cy.createRobot(cy.southPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('not.exist');
	});

	it('robot facing east and move forward ends up one cell to the right', () => {
		cy.createRobot(cy.westPlaceCommand);
		cy.forward();
		cy.contains(ERROR_MESSAGES.OUTSIDE_OF_GRID).should('not.exist');
	});
});
