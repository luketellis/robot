import {
	ERROR_MESSAGES,
	MAX_ROBOTS,
	NUM_ROWS,
	NUM_COLUMNS,
} from '../config/constants';

function Grid() {
	this.num_rows = NUM_ROWS;
	this.num_columns = NUM_COLUMNS;
	this.max_robots = MAX_ROBOTS;
}

var grid = new Grid();

const validateValidCoordinate = (coordinate) => {
	if (coordinate.x < 0 || coordinate.y < 0) {
		return false;
	}

	if (coordinate.x > grid.num_columns - 1 || coordinate.y > grid.num_rows - 1) {
		return false;
	}
	return true;
};

const isMaxRobotsExceeded = (currentRobotNumber) => {
	if (currentRobotNumber >= grid.max_robots) {
		throw new Error(ERROR_MESSAGES.MAX_ROBOTS_EXCEEDED);
	}

	return true;
};

export { grid, isMaxRobotsExceeded, validateValidCoordinate };
