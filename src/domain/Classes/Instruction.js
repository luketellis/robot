import { DirectionEnum } from './Direction';
import { ERROR_MESSAGES } from '../config/constants';
import { Robot } from './Robot';
import { isGridCellFull, isValidCoordinate } from './Grid';

//Validates commands to be of valid format, "PLACE 1,2,NORTH"
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

export const getCoordinateAndDirection = (place) => {
	const placeArray = place.split(',');

	if (placeArray.length !== 3) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	const x = parseInt(placeArray[0]);
	const y = parseInt(placeArray[1]);
	const direction = placeArray[2].toUpperCase();

	if (isNaN(x) || isNaN(y)) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	if (!(direction in DirectionEnum)) {
		throw new Error(ERROR_MESSAGES.INVALID_PLACE_COMMAND);
	}

	const coord = { x, y };
	return [coord, direction];
};

export const isValidPlaceCommand = (place, robotArray) => {
	const [potentialCoordinate] = getCoordinateAndDirection(place);

	if (!isValidCoordinate(potentialCoordinate)) {
		throw new Error(ERROR_MESSAGES.OUTSIDE_OF_GRID);
	}

	if (isGridCellFull(robotArray, potentialCoordinate)) {
		throw new Error(ERROR_MESSAGES.GRID_CELL_OCCUPIED);
	}

	return true;
};

export const createRobotFromString = ({ instruction, id, active }) => {
	const [, place] = instruction.split(' ');
	const [coordinate, direction] = getCoordinateAndDirection(place);

	return new Robot(id, coordinate, direction, active);
};
