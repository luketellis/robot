import React from 'react';
import './Grid.css';
import Row from '../Row/Row';
import { NUM_ROWS } from '../../domain/config/constants';

export default function Grid({ robotArray, setActive }) {
	var rowsArray = [];
	for (var i = NUM_ROWS - 1; i > -1; i--) {
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
