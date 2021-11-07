import React from 'react';
import './Row.css';
import GridCell from '../GridCell/GridCell';
import { NUM_COLUMNS } from '../../domain/config/constants';

export default function Row({ robotArray = [], rowNumber, setActive }) {
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

	for (var columnNumber = 0; columnNumber < NUM_COLUMNS; columnNumber++) {
		cellsArray.push(
			<GridCell
				key={`${columnNumber}, ${rowNumber}`}
				content={`${columnNumber}, ${rowNumber}`}
				robot={doesGridCellAlreadyHaveRobot(columnNumber, rowNumber)}
				setActive={setActive}
			/>
		);
	}

	return <div className="row">{cellsArray}</div>;
}
