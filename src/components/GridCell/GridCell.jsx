import React from 'react';
import './GridCell.css';
import { FaRobot } from 'react-icons/fa';

export default function GridCell({ content, robot }) {
	//console.log(`robot ${JSON.stringify(robot)}`);

	return (
		<span className="gridcell">
			{content}
			<span>{robot && <FaRobot />}</span>
		</span>
	);
}
