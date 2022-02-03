import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './Grid';
import { Coordinate } from '../../domain/classes/Coordinate';
import { Robot } from '../../domain/classes/Robot';

const robot1 = new Robot(1, new Coordinate(1, 2), 'NORTH');

describe('Component test: Grid', () => {
	it('Should render Grid', () => {
		render(<Grid />);
	});

	it('Should render Grid with robotArray', () => {
		render(<Grid robotArray={[robot1]} />);
	});
});
