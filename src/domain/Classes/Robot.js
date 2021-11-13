import { DirectionEnum } from './Direction';
import { validateValidCoordinate } from './Grid';
import { ERROR_MESSAGES } from '../config/constants';

function Robot(id, coordinate, direction, active) {
	this.id = id;
	this.coordinate = coordinate;
	this.direction = direction;
	this.active = active;
}

const moveRobotForward = (robot) => {
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

	if (validateValidCoordinate(potentialPosition)) {
		robot.coordinate = potentialPosition;
	} else {
		throw new Error(ERROR_MESSAGES.OUTSIDE_OF_GRID);
	}
};

export { moveRobotForward, Robot };
