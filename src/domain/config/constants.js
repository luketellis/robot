export const ROW_LENGTH = 5;
export const COLUMN_LENGTH = 5;

export const ERROR_MESSAGES = {
	INVALID_PLACE_COMMAND:
		'PLACE commands should be in the following format "PLACE 1,2,NORTH"',
	INVALID_INSTRUCTION:
		'"PLACE", "MOVE", "LEFT", "RIGHT", "REPORT" are the only valid commands',
	INVALID_DIRECTION:
		'DIRECTIONS can only be "NORTH", "SOUTH", "EAST" or "WEST"',
	OUTSIDE_OF_GRID:
		'That instruction would result in the robot being outside of the grid',
	INCORRECT_ARGUMENT: 'The argument passed in appears to be incorrect',
};
