import {
	isValidCoordinate,
	isMaxRobotsExceeded,
	isGridCellFull,
} from '../src/domain/classes/Grid';
import {
	ERROR_MESSAGES,
	MAX_ROBOTS,
	NUM_COLUMNS,
	NUM_ROWS,
} from '../src/domain/config/constants';
import { Coordinate } from '../src/domain/classes/Coordinate';
import { Robot } from '../src/domain/classes/Robot';

const robot1 = new Robot(1, new Coordinate(1, 2), 'NORTH');
const matchingCoord1 = new Coordinate(1, 2);
const nonMatchingCoord1 = new Coordinate(2, 1);

describe('isValidCoordinate incorrect argument tests', () => {
	it.each(['', [], {}, 1])(
		`should return false when incorrect argument provided: %s`,
		(coordinate) => {
			expect(isValidCoordinate(coordinate)).toBe(false);
		}
	);
});

describe('isValidCoordinate incorrect coordinate tests', () => {
	it.each([
		{ x: -1, y: 2 },
		{ x: -2, y: -1 },
		{ x: NUM_ROWS, y: 2 },
		{ x: 2, y: NUM_COLUMNS },
	])(
		`should return false when incorrect coordinate provided: %s`,
		(coordinate) => {
			expect(isValidCoordinate(coordinate)).toBe(false);
		}
	);
});

describe('isValidCoordinate correct coordinate tests', () => {
	it.each([
		{ x: 0, y: 0 },
		{ x: 1, y: 1 },
		{ x: NUM_ROWS - 1, y: 1 },
		{ x: 1, y: NUM_COLUMNS - 1 },
	])(`should return true when coordinate provided: %s`, (coordinate) => {
		expect(isValidCoordinate(coordinate)).toBe(true);
	});
});

describe('isMaxRobotsExceeded - false tests', () => {
	it.each([0, 1, MAX_ROBOTS])(
		`should return false when currentRobotNumber appraches MAX_ROBOTS : %s`,
		(argument) => {
			expect(isMaxRobotsExceeded(argument.currentRobotNumber)).toBe(false);
		}
	);
});

it('isMaxRobotsExceeded - should throw appropriate Error when too many robots tests', () => {
	expect(() => {
		isMaxRobotsExceeded(MAX_ROBOTS + 1);
	}).toThrow(ERROR_MESSAGES.MAX_ROBOTS_EXCEEDED);
});

describe('isGridCellFull tests', () => {
	it.each([
		{ robots: [], coord: nonMatchingCoord1, expected: false },
		{ robots: [robot1], coord: nonMatchingCoord1, expected: false },
		{ robots: [robot1], coord: matchingCoord1, expected: true },
	])(
		'should return expected result when looking for occupied gridCell: %p',
		(argument) => {
			expect(isGridCellFull(argument.robots, argument.coord)).toBe(
				argument.expected
			);
		}
	);
});
