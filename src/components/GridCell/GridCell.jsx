import React from 'react';
import './GridCell.css';
import { FaRobot } from 'react-icons/fa';

export default function GridCell({ content, robot, setActive }) {
	const turnDirectionIntoLowerCase = (direction) => {
		return direction.toLowerCase();
	};

	return (
		<span className="gridcell">
			{content}
			<span>
				{robot && (
					<FaRobot
						onClick={() => setActive(robot.id, 'active', true)}
						className={turnDirectionIntoLowerCase(robot.direction)}
					/>
				)}
			</span>
		</span>
	);
}
