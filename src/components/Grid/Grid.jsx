import React from 'react';
import './Grid.css';
import Row from '../Row/Row';
import { COLUMN_LENGTH } from '../../domain/config/constants';

export default function Grid({ robotArray }) {
	var rowsArray = [];
	for (var i = 0; i < COLUMN_LENGTH; i++) {
		rowsArray.push(<Row key={i} rowNumber={i} robotArray={robotArray} />);
	}

	return <div className="grid">{rowsArray}</div>;
}
