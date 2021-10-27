import { NUM_ROWS, NUM_COLUMNS } from '../config/constants';

function Grid() {
	this.rows = NUM_ROWS;
	this.columns = NUM_COLUMNS;
}

const validateValidCoordinate = (coordinate) => {
	if (coordinate.x < 0 || coordinate.y < 0) {
		return false;
	}

	if (coordinate.x > NUM_COLUMNS - 1 || coordinate.y > NUM_ROWS - 1) {
		return false;
	}
	return true;
};

export { Grid, validateValidCoordinate };
