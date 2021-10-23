import React from 'react';
import Grid from './Grid';
import { render } from '@testing-library/react';

describe('Component test: Grid', () => {
	it('Should render component', () => {
		render(<Grid />);
	});
});
