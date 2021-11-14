import { DirectionEnum } from './Direction';
import { isGridCellFull, isValidCoordinate } from './Grid';
import { ERROR_MESSAGES } from '../config/constants';

function Robot(id, coordinate, direction, active) {
	this.id = id;
	this.coordinate = coordinate;
	this.direction = direction;
	this.active = active;
}

const calculateRobotForwardPosition = (robot) => {
	if (!robot) {
		throw new Error(ERROR_MESSAGES.NO_ACTIVE_ROBOT);
	}
	if (!robot.direction) {
		throw new Error(ERROR_MESSAGES.NO_ACTIVE_ROBOT);
	}

	let potentialPosition = { ...robot.coordinate };

	switch (robot.direction) {
		case DirectionEnum.NORTH:
			potentialPosition.y++;
			break;
		case DirectionEnum.EAST:
			potentialPosition.x++;
			break;
		case DirectionEnum.SOUTH:
			potentialPosition.y--;
			break;
		case DirectionEnum.WEST:
			potentialPosition.x--;
			break;
		default:
			throw new Error(ERROR_MESSAGES.INVALID_DIRECTION);
	}

	if (!isValidCoordinate(potentialPosition)) {
		throw new Error(ERROR_MESSAGES.OUTSIDE_OF_GRID);
	}

	return potentialPosition;
};

export { calculateRobotForwardPosition, Robot };
