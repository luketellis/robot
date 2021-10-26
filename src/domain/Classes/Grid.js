import { COLUMN_LENGTH, ERROR_MESSAGES, ROW_LENGTH } from '../config/constants';

function Grid() {
	this.rows = ROW_LENGTH;
	this.columns = COLUMN_LENGTH;
}

const validateValidCoordinate = (coordinate) => {
	if (coordinate.x < 0 || coordinate.y < 0) {
		throw new Error(ERROR_MESSAGES.OUTSIDE_OF_GRID);
	}

	if (coordinate.x > ROW_LENGTH - 1 || coordinate.y > COLUMN_LENGTH - 1) {
		throw new Error(ERROR_MESSAGES.OUTSIDE_OF_GRID);
	}
};

export { Grid, validateValidCoordinate };
