import React from 'react';
import './RobotMovementBar.css';
import Button from '../Button/Button';
import { moveRobotForward } from '../../domain/classes/Robot';
import { turnLeft, turnRight } from '../../domain/classes/Direction';
import { ERROR_MESSAGES } from '../../domain/config/constants';

function RobotMovementBar({ activeRobot, displayToast, updateActiveRobot }) {
	const validateActiveRobotExists = () => {
		if (!activeRobot) {
			throw new Error(ERROR_MESSAGES.NO_ACTIVE_ROBOT);
		}
		return true;
	};

	const moveRobot = () => {
		try {
			validateActiveRobotExists();
			moveRobotForward(activeRobot);
			updateActiveRobot(activeRobot.id, 'coordinate', activeRobot.coordinate);
		} catch (e) {
			displayToast(e.message);
		}
	};

	const turnRobotLeft = () => {
		try {
			validateActiveRobotExists();
			turnLeft(activeRobot);
			updateActiveRobot(activeRobot.id, 'direction', activeRobot.direction);
		} catch (e) {
			displayToast(e.message);
		}
	};

	const turnRobotRight = () => {
		try {
			validateActiveRobotExists();
			turnRight(activeRobot);
			updateActiveRobot(activeRobot.id, 'direction', activeRobot.direction);
		} catch (e) {
			displayToast(e.message);
		}
	};

	return (
		<div className="robotMovementBar">
			<h2>Active Robot Commands</h2>
			<Button label="Move Robot Forward" onClick={moveRobot} />
			<Button label="Turn Robot Left" onClick={turnRobotLeft} />
			<Button label="Turn Robot Right" onClick={turnRobotRight} />
		</div>
	);
}

export default RobotMovementBar;
