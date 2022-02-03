Cypress.Commands.add('createRobot', (placeCommand) => {
	cy.get("[placeholder='Enter Starting Instructions']").type(placeCommand);
	cy.contains(/Create New Robot/i).click();
});

Cypress.Commands.add('turnRobotLeft', () => {
	cy.contains(/Turn Robot Left/i).click();
});

Cypress.Commands.add('turnRobotRight', () => {
	cy.contains(/Turn Robot Right/i).click();
});

Cypress.Commands.add('forward', () => {
	cy.contains(/Move Robot Forward/i).click();
});
