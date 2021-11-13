const MAX_ROBOTS = 5;
const NUM_ROWS = 5;
const NUM_COLUMNS = 5;

const ERROR_MESSAGES = {
	GRID_CELL_OCCUPIED: 'The proposed grid cell is already occupied',
	INCORRECT_ARGUMENT: 'The argument passed in appears to be incorrect',
	INVALID_DIRECTION:
		'DIRECTIONS can only be "NORTH", "SOUTH", "EAST" or "WEST"',
	INVALID_INSTRUCTION:
		'"PLACE", "MOVE", "LEFT", "RIGHT", "REPORT" are the only valid commands',
	INVALID_PLACE_COMMAND:
		'PLACE commands should be in the following format "PLACE 1,2,NORTH"',
	MAX_ROBOTS_EXCEEDED: 'You cannot create any more robots',
	NO_ACTIVE_ROBOT: 'There is no active robot',
	OUTSIDE_OF_GRID:
		'Instruction would result in the robot being outside of the grid',
};

export { ERROR_MESSAGES, MAX_ROBOTS, NUM_COLUMNS, NUM_ROWS };
