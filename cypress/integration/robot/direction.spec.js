/// <reference types="cypress" />

describe('robots should be able to turn left from all directions', () => {
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

	it('robot facing north and turns left ends up facing west', () => {
		cy.createRobot(cy.northPlaceCommand);
		cy.turnRobotLeft();
		cy.get('.robot1').should('have.class', 'west');
	});

	it('robot facing east and turns left ends up facing north', () => {
		cy.createRobot(cy.eastPlaceCommand);
		cy.turnRobotLeft();
		cy.get('.robot1').should('have.class', 'north');
	});

	it('robot facing south and turns left ends up facing east', () => {
		cy.createRobot(cy.southPlaceCommand);
		cy.turnRobotLeft();
		cy.get('.robot1').should('have.class', 'east');
	});

	it('robot facing west and turns left ends up facing south', () => {
		cy.createRobot(cy.westPlaceCommand);
		cy.turnRobotLeft();
		cy.get('.robot1').should('have.class', 'south');
	});
});

describe('robots should be able to turn right from all directions', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('robot facing north and turns right ends up facing east', () => {
		cy.createRobot(cy.northPlaceCommand);
		cy.turnRobotRight();
		cy.get('.robot1').should('have.class', 'east');
	});

	it('robot facing east and turns right ends up facing south', () => {
		cy.createRobot(cy.eastPlaceCommand);
		cy.turnRobotRight();
		cy.get('.robot1').should('have.class', 'south');
	});

	it('robot facing south and turns right ends up facing west', () => {
		cy.createRobot(cy.southPlaceCommand);
		cy.turnRobotRight();
		cy.get('.robot1').should('have.class', 'west');
	});

	it('robot facing west and turns right ends up facing north', () => {
		cy.createRobot(cy.westPlaceCommand);
		cy.turnRobotRight();
		cy.get('.robot1').should('have.class', 'north');
	});
});
