import React from 'react';
import './RobotMovementBar.css';
import Button from '../Button/Button';
import { moveRobotForward } from '../../domain/classes/Robot';

function RobotMovementBar({ activeRobot, setErrorMsg }) {
	const validateActiveRobotExists = () => {
		if (!activeRobot) {
			setErrorMsg('No active robot is set');
			return false;
		}

		setErrorMsg('');
		return true;
	};

	const moveRobot = (activeRobot) => {
		if (validateActiveRobotExists()) {
			moveRobotForward(activeRobot);
		}
	};

	const turnRobotLeft = () => {
		validateActiveRobotExists();
	};

	const turnRobotRight = () => {
		validateActiveRobotExists();
	};

	return (
		<div className="robotMovementBar">
			<h2>Active Robot Commands</h2>
			<Button
				label="Move Robot Forward"
				onClick={() => moveRobot(activeRobot)}
			/>
			<Button label="Turn Robot Left" onClick={turnRobotLeft} />
			<Button label="Turn Robot Right" onClick={turnRobotRight} />
		</div>
	);
}

export default RobotMovementBar;
