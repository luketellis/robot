import Error from './Error';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Component test: Error', () => {
	it('Should render component', () => {
		render(<Error />);
	});

	it('Should display prop text', () => {
		render(<Error text="This is an error" />);
		const error = screen.getByText('This is an error');
		expect(error).toBeInTheDocument();
	});
});
