Cypress.Commands.add('createRobot', (placeCommand) => {
	cy.get("[placeholder='Enter Starting Instructions']").type(placeCommand);

	cy.contains('Create New Robot').click();
});

Cypress.Commands.add('turnRobotLeft', () => {
	cy.contains('Turn Robot Left').click();
});

Cypress.Commands.add('turnRobotRight', () => {
	cy.contains('Turn Robot Right').click();
});
