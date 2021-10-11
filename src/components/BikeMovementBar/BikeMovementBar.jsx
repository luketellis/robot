import React from 'react';
import './BikeMovementBar.css';
import Button from '../Button/Button';

function BikeMovementBar({ activeBike, setErrorMsg }) {
	const validateActiveBikeExists = () => {
		if (!activeBike) {
			setErrorMsg('No active bike is set');
		} else {
			setErrorMsg('');
		}
	};

	const moveBikeForward = () => {
		validateActiveBikeExists();
	};

	const turnBikeLeft = () => {
		validateActiveBikeExists();
	};

	const turnBikeRight = () => {
		validateActiveBikeExists();
	};

	return (
		<div className="bikeMovementBar">
			<h2>Active Bike Commands</h2>
			<Button label="Move Bike Forward" onClick={moveBikeForward} />
			<Button label="Turn Bike Left" onClick={turnBikeLeft} />
			<Button label="Turn Bike Right" onClick={turnBikeRight} />
		</div>
	);
}

export default BikeMovementBar;
