import { DirectionEnum } from './Direction';
import { ERROR_MESSAGES } from '../config/constants';
import { Robot } from './Robot';
import Coordinate from './Coordinate';
import { isGridCellFull, isValidCoordinate } from './Grid';

//Validates commands to be valid, PLACE 1,2,NORTH
export const isValidInstruction = (instruction, robotArray) => {
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

	if (!isValidPlaceCommand(instructionArray[1], robotArray)) {
		return false;
	}

	return true;
};

export const isValidPlaceCommand = (place, robotArray) => {
	const placeArray = place.split(',');

	if (placeArray.length !== 3) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	if (placeArray[0].isNan || placeArray[1].isNan) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	const potentialCoordinate = new Coordinate(placeArray[0], placeArray[1]);

	if (!isValidCoordinate(potentialCoordinate)) {
		throw new Error(ERROR_MESSAGES.OUTSIDE_OF_GRID);
	}

	if (isGridCellFull(robotArray, potentialCoordinate)) {
		throw new Error(ERROR_MESSAGES.GRID_CELL_OCCUPIED);
	}

	if (!(placeArray[2].toUpperCase() in DirectionEnum)) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	return true;
};

export const createRobotFromString = ({ instruction, id, active }) => {
	const instructionArray = instruction.split(' ');

	const placeArray = instructionArray[1].split(',');

	return new Robot(
		id,
		new Coordinate(parseInt(placeArray[0]), parseInt(placeArray[1])),
		placeArray[2].toUpperCase(),
		active
	);
};
