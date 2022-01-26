import { isValidInstruction } from '../src/domain/classes/Instruction';
import { ERROR_MESSAGES } from '../src/domain/config/constants';

describe('Wrong instruction arugments - non strings', () => {
	it.each(['', undefined, null, [], {}, 0, 1])(
		`should return proper result when passed instruction argument: %s`,
		(instruction) => {
			try {
				isValidInstruction(instruction, []);
			} catch (e) {
				expect(e.message).toBe(ERROR_MESSAGES.INCORRECT_ARGUMENT);
			}
		}
	);
});

describe('Correct instruction arguments', () => {
	it.each([
		'PLACE 4,4,NORTH',
		'PLACE 0,0,SOUTH',
		'PLACE 4,0,EAST',
		'PLACE 0,4,WEST',
	])(
		`should return proper result when passed argument instruction argument: %s`,
		(instruction) => {
			try {
				expect(isValidInstruction(instruction, [])).toBe(true);
			} catch (e) {
				throw new Error('These commands should be valid');
			}
		}
	);
});

describe('Incorrect instruction arguments - wrong strings', () => {
	it.each(['PLACE 1,2,ABC', 'PACE 1,2,ABC'])(
		`should throw error when passed incorrect instruction argument: %s`,
		(instruction) => {
			try {
				isValidInstruction(instruction, []);
			} catch (e) {
				expect(e.message).toBe(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
			}
		}
	);
});

describe('Incorrect instruction arguments - outside of grid', () => {
	it.each([
		'PLACE -1,2,NORTH',
		'PLACE 1,-1,NORTH',
		'PLACE 5,2,WEST',
		'PLACE 1,5,WEST',
	])(
		`should throw error when passed coordinates outside of gird: %s`,
		(instruction) => {
			try {
				isValidInstruction(instruction);
			} catch (e) {
				expect(e.message).toBe(ERROR_MESSAGES.OUTSIDE_OF_GRID);
			}
		}
	);
});
