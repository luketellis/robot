const DirectionEnum = Object.freeze({
	NORTH: 'NORTH',
	EAST: 'EAST',
	SOUTH: 'SOUTH',
	WEST: 'WEST',
});

const turnLeft = (currentDirection) => {
	if (!currentDirection) {
		throw new Error('Current direction is not defined');
	}

	switch (currentDirection) {
		case DirectionEnum.NORTH:
			return DirectionEnum.WEST;
		case DirectionEnum.EAST:
			return DirectionEnum.NORTH;
		case DirectionEnum.SOUTH:
			return DirectionEnum.EAST;
		case DirectionEnum.WEST:
			return DirectionEnum.SOUTH;
		default:
			return currentDirection;
	}
};

const turnRight = (currentDirection) => {
	if (!currentDirection) {
		throw new Error('Current direction is not defined');
	}

	switch (currentDirection) {
		case DirectionEnum.NORTH:
			return DirectionEnum.EAST;
		case DirectionEnum.EAST:
			return DirectionEnum.SOUTH;
		case DirectionEnum.SOUTH:
			return DirectionEnum.WEST;
		case DirectionEnum.WEST:
			return DirectionEnum.NORTH;
		default:
			return currentDirection;
	}
};

export { DirectionEnum, turnRight, turnLeft };
