import React from 'react';
import './Row.css';
import GridCell from '../GridCell/GridCell';
import { ROW_LENGTH } from '../../domain/config/constants';

export default function Row({ rowNumber }) {
	var cellsArray = [];
	for (var i = 0; i < ROW_LENGTH; i++) {
		cellsArray.push(<GridCell key={i} content={`${rowNumber}, ${i}`} />);
	}

	return <div className="row">{cellsArray}</div>;
}
