Cypress.Commands.add('createRobot', (placeCommand) => {
	cy.get("[placeholder='Enter Starting Instructions']").type(placeCommand);

	cy.contains('Create New Robot').click();
});
