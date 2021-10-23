import { DirectionEnum } from './Direction';
import { COLUMN_LENGTH, ROW_LENGTH, ERROR_MESSAGES } from '../config/constants';
import Grid from './Grid';

const InstructionEnum = Object.freeze({
	PLACE: 1,
	MOVE: 2,
	LEFT: 3,
	RIGHT: 4,
	REPORT: 5,
});

//PLACE 1,2,NORTH
const isValidInstruction = (instruction) => {
	const instructionArray = instruction.split(' ');
	if (instructionArray.length !== 2) {
		throw new Error(ERROR_MESSAGES.INVALID_INSTRUCTION);
	}

	if (!(instructionArray[0] in InstructionEnum)) {
		throw new Error(ERROR_MESSAGES.INVALID_INSTRUCTION);
	}

	isValidPlaceCommand(instructionArray[1]);
};

const isValidPlaceCommand = (place) => {
	const placeArray = place.split(',');
	if (placeArray.length !== 2) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}
	if (placeArray[0].isNan || placeArray[1].isNan) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	if (placeArray[0] < 0 || placeArray[1] < 0) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	if (placeArray[0] > ROW_LENGTH - 1 || placeArray[1] > ROW_LENGTH - 1) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	if (!(placeArray[2] in DirectionEnum)) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}
};

export { InstructionEnum, isValidInstruction };
