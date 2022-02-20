module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	},
	//Skip cypress tests when using Jest
	testPathIgnorePatterns: ['<rootDir>/cypress/'],
	modulePaths: ['<rootDir>'],
};
