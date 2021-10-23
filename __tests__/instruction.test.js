import {
	InstructionEnum,
	isValidInstruction,
} from '../src/domain/classes/Instruction';
import { ERROR_MESSAGES } from '../src/domain/config/constants';

const each = require('jest-each').default;

describe('Wrong instruction string arugment', () => {
	it.each(['', undefined, null, [], {}, 0, 1])(
		`should return proper result when passed arguments are: %s`,
		(text) => {
			try {
				isValidInstruction(text);
			} catch (e) {
				expect(e.message).toBe(ERROR_MESSAGES.INCORRECT_ARGUMENT);
			}
		}
	);
});

describe('Correct instruction arguments', () => {
	it.each(['REPORT', 'LEFT', 'RIGHT', 'MOVE'])(
		`should return proper result when passed arguments are: %s`,
		(text) => {
			try {
				expect(isValidInstruction(text)).toBe(true);
			} catch (e) {
				expect(e.message).toBe(ERROR_MESSAGES.INCORRECT_ARGUMENT);
			}
		}
	);
});
