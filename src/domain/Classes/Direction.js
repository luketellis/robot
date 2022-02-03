export const DirectionEnum = Object.freeze({
	NORTH: 'NORTH',
	EAST: 'EAST',
	SOUTH: 'SOUTH',
	WEST: 'WEST',
});

export const turnLeft = (robot) => {
	if (!robot) {
		throw new Error('Current robot is not defined');
	}

	switch (robot.direction) {
		case DirectionEnum.NORTH:
			robot.direction = DirectionEnum.WEST;
			break;
		case DirectionEnum.EAST:
			robot.direction = DirectionEnum.NORTH;
			break;
		case DirectionEnum.SOUTH:
			robot.direction = DirectionEnum.EAST;
			break;

		case DirectionEnum.WEST:
			robot.direction = DirectionEnum.SOUTH;
			break;

		default:
			throw new Error('Active robot direction is not defined');
	}
};

export const turnRight = (robot) => {
	if (!robot) {
		throw new Error('Current robot is not defined');
	}

	switch (robot.direction) {
		case DirectionEnum.NORTH:
			robot.direction = DirectionEnum.EAST;
			break;
		case DirectionEnum.EAST:
			robot.direction = DirectionEnum.SOUTH;
			break;
		case DirectionEnum.SOUTH:
			robot.direction = DirectionEnum.WEST;
			break;
		case DirectionEnum.WEST:
			robot.direction = DirectionEnum.NORTH;
			break;
		default:
			throw new Error('Current direction is not defined');
	}
};
