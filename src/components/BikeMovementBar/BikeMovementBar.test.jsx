import BikeMovementBar from './BikeMovementBar';
import { render, screen } from '@testing-library/react';

describe('Component test: BikeMovementBar', () => {
	it('Should render component', () => {
		render(<BikeMovementBar />);
		const forwardButton = screen.getByText('Move Bike Forward');
		expect(forwardButton).toBeInTheDocument();
	});
});
