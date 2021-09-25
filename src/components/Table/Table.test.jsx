import Table from './Table';
import { render, screen } from '@testing-library/react';

describe('Component test: Table', () => {
	it('Should render component', () => {
		render(<Table />);
		const searchButton = screen.getByText('Search');
		expect(searchButton).toBeInTheDocument();
	});
});
