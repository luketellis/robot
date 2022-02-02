import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextInput } from './TextInput';

describe('Component test: TextInput', () => {
	it('Should render component', () => {
		render(<TextInput defaultValue={'Hello'} />);
		const textInput = screen.getByRole('textbox');
		expect(textInput).toHaveValue('Hello');
	});
});
