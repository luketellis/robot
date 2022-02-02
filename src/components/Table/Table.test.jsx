import { Table } from './Table';
import React from 'react';
import { render } from '@testing-library/react';

describe('Component test: Table', () => {
	it('Should render component', () => {
		render(<Table />);
	});
});
