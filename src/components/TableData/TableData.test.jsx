import TableData from './TableData';
import React from 'react';
import { render } from '@testing-library/react';

describe('Component test: TableData', () => {
	it('Should render component', () => {
		render(<TableData data="hello" />);
	});
});
