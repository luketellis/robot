import React from 'react';
import './Row.css';
import GridCell from '../GridCell/GridCell';
import { COLUMN_LENGTH } from '../../domain/config/constants';

export default function Row({ robotArray = [], rowNumber }) {
	var cellsArray = [];

	const doesGridCellAlreadyHaveRobot = (row, column) => {
		let robotFound = false;
		robotArray.forEach((robot) => {
			if (robot.coordinate.x === row && robot.coordinate.y === column) {
				robotFound = robot;
			}
		});
		return robotFound;
	};

	for (var columnNumber = 0; columnNumber < COLUMN_LENGTH; columnNumber++) {
		cellsArray.push(
			<GridCell
				key={columnNumber}
				content={`${rowNumber}, ${columnNumber}`}
				robot={doesGridCellAlreadyHaveRobot(rowNumber, columnNumber)}
			/>
		);
	}

	return <div className="row">{cellsArray}</div>;
}
