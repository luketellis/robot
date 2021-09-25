import React from 'react';
import './BikeMovementBar.css';
import Button from '../Button/Button';

function BikeMovementBar() {
	return (
		<div className="bikeMovementBar">
			<h2>Active Bike Commands</h2>
			<Button label="Move Bike Forward" />
			<Button label="Turn Bike Left" />
			<Button label="Turn Bike Right" />
		</div>
	);
}

export default BikeMovementBar;
