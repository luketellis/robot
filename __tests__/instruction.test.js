import { isValidInstruction } from '../src/domain/classes/Instruction';
import {
	ERROR_MESSAGES,
	NUM_COLUMNS,
	NUM_ROWS,
} from '../src/domain/config/constants';

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
		`PLACE ${NUM_ROWS - 1},${NUM_COLUMNS - 1},NORTH`,
		'PLACE 0,0,SOUTH',
		`PLACE ${NUM_ROWS - 1},0,EAST`,
		'PLACE 0,4,WEST',
		'PLACE 0,4,west',
	])(
		`should return proper result when passed argument instruction argument: %s`,
		(instruction) => {
			expect(isValidInstruction(instruction, [])).toBe(true);
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
		`PLACE ${NUM_COLUMNS},2,WEST`,
		`PLACE 1,${NUM_ROWS},WEST`,
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
