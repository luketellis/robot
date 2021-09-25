import Button from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component test: Button', () => {
	it('Should render component', () => {
		render(<Button label="Search" />);
		const searchButton = screen.getByText('Search');
		expect(searchButton).toBeInTheDocument();
	});

	it('Should register click handler', () => {
		const onClick = jest.fn();
		render(<Button label="Search" onClick={onClick} />);
		const button = screen.getByText('Search');
		userEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});
});
