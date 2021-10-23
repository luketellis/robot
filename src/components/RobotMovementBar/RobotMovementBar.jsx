import React from 'react';
import './RobotMovementBar.css';
import Button from '../Button/Button';

function RobotMovementBar({ activeRobot, setErrorMsg }) {
	const validateActiveRobotExists = () => {
		if (!activeRobot) {
			setErrorMsg('No active robot is set');
		} else {
			setErrorMsg('');
		}
	};

	const moveRobotForward = () => {
		validateActiveRobotExists();
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
			<Button label="Move Robot Forward" onClick={moveRobotForward} />
			<Button label="Turn Robot Left" onClick={turnRobotLeft} />
			<Button label="Turn Robot Right" onClick={turnRobotRight} />
		</div>
	);
}

export default RobotMovementBar;
