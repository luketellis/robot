import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
	render(<App />);
	const headerElement = screen.getByText('Robot');
	expect(headerElement).toBeInTheDocument();
});
