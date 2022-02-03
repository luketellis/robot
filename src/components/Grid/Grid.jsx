import React from 'react';
import { Row } from '../Row/Row';
import { NUM_ROWS } from '../../domain/config/constants';

export const Grid = ({ robots, setActive }) => {
	var rowsArray = [];
	for (var i = NUM_ROWS - 1; i > -1; i--) {
		rowsArray.push(
			<Row key={i} rowNumber={i} robots={robots} setActive={setActive} />
		);
	}

	return <div className="grid">{rowsArray}</div>;
};
