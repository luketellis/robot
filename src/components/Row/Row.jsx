import React from 'react';
import './Row.css';
import GridCell from '../GridCell/GridCell';
import { grid } from '../../domain/classes/Grid';

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

	for (var columnNumber = 0; columnNumber < grid.num_columns; columnNumber++) {
		cellsArray.push(
			<GridCell
				key={`${columnNumber}, ${rowNumber}`}
				coordinateText={`${columnNumber}, ${rowNumber}`}
				robot={doesGridCellAlreadyHaveRobot(columnNumber, rowNumber)}
				setActive={setActive}
			/>
		);
	}

	return <div className="row">{cellsArray}</div>;
}
