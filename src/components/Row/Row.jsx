import React from 'react';
import './Row.css';
import GridCell from '../GridCell/GridCell';
import { COLUMN_LENGTH } from '../../domain/config/constants';
import { Robot } from '../../domain/classes/Robot';
import Coordinate from '../../domain/classes/Coordinate';

export default function Row({ robotArray = [], rowNumber }) {
	var cellsArray = [];

	const doesGridCellAlreadyHaveRobot = (row, column) => {
		let robotExists = false;
		robotArray.forEach((robot) => {
			const currentCoordinate = new Coordinate(row, column);{
			if (robot.coordinate.x === row && robot.coordinate.y === column) {
				robotExists = true;
			}
		});
		return robotExists;
	};

	for (var columnNumber = 0; columnNumber < COLUMN_LENGTH; columnNumber++) {
		// console.log(
		// 	rowNumber,
		// 	columnNumber,
		// 	doesGridCellAlreadyHaveRobot(rowNumber, columnNumber)
		// );
		cellsArray.push(
			<GridCell
				key={columnNumber}
				content={`${rowNumber}, ${columnNumber}`}
				robot={
					doesGridCellAlreadyHaveRobot(rowNumber, columnNumber) &&
					new Robot(1, new Coordinate(rowNumber, columnNumber), 'NORTH', true)
				}
			/>
		);
	}

	return <div className="row">{cellsArray}</div>;
}
