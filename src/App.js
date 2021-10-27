import './App.css';
import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Error from './components/Error/Error';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import RobotMovementBar from './components/RobotMovementBar/RobotMovementBar';
import {
	isValidInstruction,
	createRobotFromString,
} from './domain/classes/Instruction';

function App() {
	const [robotArray, setRobotArray] = useState([]);
	const [instruction, setInstruction] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [activeRobot, setActiveRobot] = useState('');

	const addRobot = () => {
		setErrorMsg('');
		let potentialRobot;
		try {
			isValidInstruction(instruction);
			potentialRobot = createRobotFromString(
				instruction,
				robotArray.length + 1,
				!activeRobot
			);

			setRobotArray((prevState) => [...prevState, potentialRobot]);
		} catch (e) {
			setErrorMsg(e.message);
			return;
		}

		!activeRobot && setActiveRobot(potentialRobot);
		//robotArray[robotArray.length - 1]
	};

	const updateActiveRobot = (id, property, value) => {
		setErrorMsg('');
		try {
			let oldRobotArray = [...robotArray];

			var matchingRobotArray = oldRobotArray.filter((robot) => {
				return robot.id === id;
			});

			var nonMatchingRobotArray = oldRobotArray.filter((robot) => {
				return robot.id !== id;
			});

			var matchingRobot = { ...matchingRobotArray[0] };
			matchingRobot[property] = value;

			setRobotArray([...nonMatchingRobotArray, matchingRobot]);
			setActiveRobot(matchingRobot);
		} catch (e) {
			setErrorMsg(e.message);
			return;
		}
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
				<RobotMovementBar
					activeRobot={activeRobot}
					setErrorMsg={setErrorMsg}
					updateActiveRobot={updateActiveRobot}
				/>
				<Grid robotArray={robotArray} />
			</header>
		</div>
	);
}

export default App;
