import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RobotMovementBar } from './RobotMovementBar';

describe('Component test: RobotMovementBar', () => {
	it('Should render component', () => {
		render(<RobotMovementBar activeRobot={true} />);
		const forwardButton = screen.getByText('Move Robot Forward');
		expect(forwardButton).toBeInTheDocument();
	});
});
