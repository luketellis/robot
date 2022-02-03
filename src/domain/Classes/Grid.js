import {
	ERROR_MESSAGES,
	MAX_ROBOTS,
	NUM_ROWS,
	NUM_COLUMNS,
} from '../config/constants';

export const isValidCoordinate = ({ x, y }) => {
	if (x < 0 || y < 0) {
		return false;
	}

	if (x > NUM_COLUMNS - 1 || y > NUM_ROWS - 1) {
		return false;
	}
	return true;
};

export const isMaxRobotsExceeded = (currentRobotNumber) => {
	if (currentRobotNumber >= MAX_ROBOTS) {
		throw new Error(ERROR_MESSAGES.MAX_ROBOTS_EXCEEDED);
	}

	return true;
};

export const isGridCellFull = (robots = [], { x, y }) => {
	if (!Array.isArray(robots)) {
		throw new Error('Not an array');
	}

	const matchingRobots = robots.filter((robot) => {
		return robot.coordinate.x == x && robot.coordinate.y == y;
	});

	return matchingRobots.length;
};
