import React from 'react';
import './Row.css';
import { GridCell } from '../GridCell/GridCell';
import { NUM_COLUMNS } from '../../domain/config/constants';

export const Row = ({ robots = [], rowNumber, setActive }) => {
	const doesGridCellAlreadyHaveRobot = (row, column) => {
		return robots.find((robot) => {
			return robot.coordinate.x === row && robot.coordinate.y === column;
		});
	};

	return (
		<div className="row">
			{Object.keys(Array.from(Array(NUM_COLUMNS))).map((_, index) => {
				return (
					<GridCell
						key={`${index}, ${rowNumber}`}
						coordinateText={`${index}, ${rowNumber}`}
						robot={doesGridCellAlreadyHaveRobot(index, rowNumber)}
						setActive={setActive}
					/>
				);
			})}
		</div>
	);
};
