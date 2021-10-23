import RobotMovementBar from './RobotMovementBar';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Component test: RobotMovementBar', () => {
	it('Should render component', () => {
		render(<RobotMovementBar />);
		const forwardButton = screen.getByText('Move Robot Forward');
		expect(forwardButton).toBeInTheDocument();
	});
});
