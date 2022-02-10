import React from 'react';
import { Button } from '../Button/Button';
import { calculateRobotForwardPosition } from '../../domain/classes/Robot';
import { turnLeft, turnRight } from '../../domain/classes/Direction';
import { ERROR_MESSAGES } from '../../domain/config/constants';
import { isGridCellFull } from '../../domain/classes/Grid';

export const RobotMovementBar = ({
	activeRobot,
	displayToast,
	updateActiveRobot,
	robotArray,
}) => {
	if (!activeRobot) {
		return null;
	}

	const moveRobot = () => {
		try {
			const potentialRobotPosition = calculateRobotForwardPosition(activeRobot);

			if (isGridCellFull(robotArray, potentialRobotPosition)) {
				throw new Error(ERROR_MESSAGES.GRID_CELL_OCCUPIED);
			}

			activeRobot.coordinate = { ...potentialRobotPosition };

			updateActiveRobot(activeRobot.id, 'coordinate', activeRobot.coordinate);
		} catch (e) {
			displayToast(e.message);
		}
	};

	const turnRobotLeft = () => {
		try {
			turnLeft(activeRobot);
			updateActiveRobot(activeRobot.id, 'direction', activeRobot.direction);
		} catch (e) {
			displayToast(e.message);
		}
	};

	const turnRobotRight = () => {
		try {
			turnRight(activeRobot);
			updateActiveRobot(activeRobot.id, 'direction', activeRobot.direction);
		} catch (e) {
			displayToast(e.message);
		}
	};

	return (
		<div>
			<h2>Active Robot Commands</h2>
			<Button label="Move Robot Forward" onClick={moveRobot} />
			<Button label="Turn Robot Left" onClick={turnRobotLeft} />
			<Button label="Turn Robot Right" onClick={turnRobotRight} />
		</div>
	);
};
