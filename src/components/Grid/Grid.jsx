import React from 'react';
import './Grid.css';
import Row from '../Row/Row';
import { COLUMN_LENGTH } from '../../domain/config/constants';

export default function Grid({ robotArray }) {
	var rowsArray = [];
	for (var i = COLUMN_LENGTH - 1; i > -1; i--) {
		rowsArray.push(<Row key={i} rowNumber={i} robotArray={robotArray} />);
	}

	return <div className="grid">{rowsArray}</div>;
}
