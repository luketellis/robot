const NUM_ROWS = 5;
const NUM_COLUMNS = 5;

const ERROR_MESSAGES = {
	INVALID_PLACE_COMMAND:
		'PLACE commands should be in the following format "PLACE 1,2,NORTH"',
	INVALID_INSTRUCTION:
		'"PLACE", "MOVE", "LEFT", "RIGHT", "REPORT" are the only valid commands',
	INVALID_DIRECTION:
		'DIRECTIONS can only be "NORTH", "SOUTH", "EAST" or "WEST"',
	OUTSIDE_OF_GRID:
		'That instruction would result in the robot being outside of the grid',
	GRID_CELL_OCCUPIED: 'The proposed grid cell is already occupied',
	INCORRECT_ARGUMENT: 'The argument passed in appears to be incorrect',
};

export { ERROR_MESSAGES, NUM_COLUMNS, NUM_ROWS };
