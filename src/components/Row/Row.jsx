import React from 'react';
import './Row.css';
import GridCell from '../GridCell/GridCell';
import { COLUMN_LENGTH } from '../../domain/config/constants';
import Robot from '../../domain/classes/Robot';
import Coordinate from '../../domain/classes/Coordinate';

export default function Row({ robotArray, rowNumber }) {
	var cellsArray = [];
	for (var columnNumber = 0; columnNumber < COLUMN_LENGTH; columnNumber++) {
		cellsArray.push(
			<GridCell
				key={columnNumber}
				content={`${rowNumber}, ${columnNumber}`}
				robot={
					rowNumber === 1 &&
					columnNumber === 4 &&
					new Robot('NORTH', new Coordinate(2, 4))
				}
			/>
		);
	}

	return <div className="row">{cellsArray}</div>;
}
