import { DirectionEnum } from './Direction';
import { isValidCoordinate } from './Grid';
import { ERROR_MESSAGES } from '../config/constants';

export function Robot(id, coordinate, direction, active) {
	this.id = id;
	this.coordinate = coordinate;
	this.direction = direction;
	this.active = active;
}

export const calculateRobotForwardPosition = (robot) => {
	if (!robot) {
		throw new Error(ERROR_MESSAGES.NO_ACTIVE_ROBOT);
	}
	if (!robot.direction) {
		throw new Error(ERROR_MESSAGES.ROBOT_MISSING_DIRECTION);
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
