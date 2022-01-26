import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button';

afterEach(cleanup);

it('renders button correctly', () => {
	const { asFragment } = render(<Button />);
	expect(asFragment()).toMatchSnapshot();
});
