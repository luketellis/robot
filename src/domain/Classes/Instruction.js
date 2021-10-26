import { DirectionEnum } from './Direction';
import { ERROR_MESSAGES } from '../config/constants';
import { Robot } from './Robot';
import Coordinate from './Coordinate';
import { validateValidCoordinate } from './Grid';

const InstructionEnum = Object.freeze({
	PLACE: 1,
	MOVE: 2,
	LEFT: 3,
	RIGHT: 4,
	REPORT: 5,
});

//PLACE 1,2,NORTH
const isValidInstruction = (instruction) => {
	if (!instruction || typeof instruction !== 'string') {
		throw new Error(ERROR_MESSAGES.INCORRECT_ARGUMENT);
	}
	const instructionArray = instruction.split(' ');
	if (instructionArray.length > 2) {
		throw new Error(ERROR_MESSAGES.INVALID_INSTRUCTION);
	}

	if (
		instructionArray.length !== 2 ||
		instructionArray[0].toUpperCase() !== 'PLACE'
	) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	if (isValidPlaceCommand(instructionArray[1])) {
		return true;
	} else {
		return false;
	}
};

const isValidPlaceCommand = (place) => {
	const placeArray = place.split(',');
	if (placeArray.length !== 3) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}
	if (placeArray[0].isNan || placeArray[1].isNan) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	validateValidCoordinate(new Coordinate(placeArray[0], placeArray[1]));

	if (!(placeArray[2].toUpperCase() in DirectionEnum)) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}
	return true;
};

const createRobotFromString = (instruction, id, active) => {
	const instructionArray = instruction.split(' ');
	instruction.split(' ');

	const placeArray = instructionArray[1].split(',');

	return new Robot(
		id,
		new Coordinate(parseInt(placeArray[0]), parseInt(placeArray[1])),
		placeArray[2],
		active
	);
};

export { InstructionEnum, isValidInstruction, createRobotFromString };
