import './App.css';
import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Error from './components/Error/Error';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import RobotMovementBar from './components/RobotMovementBar/RobotMovementBar';
import {
	InstructionEnum,
	isValidInstruction,
	createRobotFromString,
} from './domain/classes/Instruction';

function App() {
	const [robotArray, setRobotArray] = useState([]);
	const [direction, setDirection] = useState('NORTH');
	const [coordinate, setCoordinate] = useState({ x: 1, y: 4 });
	const [instruction, setInstruction] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [activeRobot, setActiveRobot] = useState(0);

	const addRobot = () => {
		setErrorMsg('');
		try {
			isValidInstruction(instruction);
			let potentialBike = createRobotFromString(
				instruction,
				robotArray.length + 1,
				!activeRobot
			);
			setRobotArray((prevState) => [...prevState, potentialBike]);
		} catch (e) {
			setErrorMsg(e.message);
			return;
		}

		!activeRobot && setActiveRobot(robotArray.length + 1);
	};

	const handleSearchTerm = (e) => {
		setInstruction(e.target.value.trim());
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Robot</h1>
				<Table
					tableHeadings={['Robot ID', 'Coordinate', 'Direction', 'Active']}
					tableData={robotArray}
				/>
				<TextInput
					helperText=""
					placeholder="Enter Starting Instructions"
					onChange={handleSearchTerm}
				/>
				<Button
					label="Create New Robot"
					onClick={addRobot}
					disabled={!instruction}
				/>
				<Error text={errorMsg} />
				<RobotMovementBar activeRobot={activeRobot} setErrorMsg={setErrorMsg} />
				<Grid robotArray={robotArray} />
			</header>
		</div>
	);
}

export default App;
