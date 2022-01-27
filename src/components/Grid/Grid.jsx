import React from 'react';
import Row from '../Row/Row';
import { grid } from '../../domain/classes/Grid';

export default function Grid({ robotArray, setActive }) {
	var rowsArray = [];
	for (var i = grid.num_rows - 1; i > -1; i--) {
		rowsArray.push(
			<Row
				key={i}
				rowNumber={i}
				robotArray={robotArray}
				setActive={setActive}
			/>
		);
	}

	return <div className="grid">{rowsArray}</div>;
}
