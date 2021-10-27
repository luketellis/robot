import { COLUMN_LENGTH, ROW_LENGTH } from '../config/constants';

function Grid() {
	this.rows = ROW_LENGTH;
	this.columns = COLUMN_LENGTH;
}

const validateValidCoordinate = (coordinate) => {
	if (coordinate.x < 0 || coordinate.y < 0) {
		return false;
	}

	if (coordinate.x > ROW_LENGTH - 1 || coordinate.y > COLUMN_LENGTH - 1) {
		return false;
	}
	return true;
};

export { Grid, validateValidCoordinate };
