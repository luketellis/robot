import './App.css';
import React, { useState } from 'react';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import RobotMovementBar from './components/RobotMovementBar/RobotMovementBar';
import {
	isValidInstruction,
	createRobotFromString,
} from './domain/classes/Instruction';
import { isMaxRobotsExceeded } from './domain/classes/Grid';
import { toast, Toaster } from 'react-hot-toast';
import { INFO_MESSAGES } from './domain/config/constants';

function App() {
	const [robotArray, setRobotArray] = useState([]);
	const [instruction, setInstruction] = useState('');
	const [activeRobot, setActiveRobot] = useState('');

	const addRobot = () => {
		let potentialRobot;
		try {
			isMaxRobotsExceeded(robotArray.length);
			isValidInstruction(instruction, robotArray);
			potentialRobot = createRobotFromString(
				instruction,
				robotArray.length + 1,
				!activeRobot
			);

			setRobotArray((prevState) => [...prevState, potentialRobot]);
		} catch (e) {
			displayToast(e.message);
			return;
		}

		!activeRobot && setActiveRobot(potentialRobot);
	};

	const updateActiveRobot = (id, property, value) => {
		try {
			let oldRobotArray = [...robotArray];

			var matchingRobotArray = oldRobotArray.filter((robot) => {
				return robot.id === id;
			});

			var nonMatchingRobotArray = oldRobotArray.filter((robot) => {
				return robot.id !== id;
			});

			if (property === 'active') {
				nonMatchingRobotArray.forEach((robot) => {
					robot.active = false;
				});
			}

			var matchingRobot = { ...matchingRobotArray[0] };
			matchingRobot[property] = value;

			const robotArrayWithUpdatedValues = [
				...nonMatchingRobotArray,
				matchingRobot,
			];

			robotArrayWithUpdatedValues.sort((a, b) => a.id - b.id);

			setRobotArray(robotArrayWithUpdatedValues);

			if (property === 'active' && activeRobot.id !== id) {
				displayToast(INFO_MESSAGES.ACTIVE_ROBOT_CHANGED + id, '✔️');
			}
			setActiveRobot(matchingRobot);
		} catch (e) {
			displayToast(e.message);
			return;
		}
	};

	const handleSearchTerm = (e) => {
		setInstruction(e.target.value.trim());
	};

	const displayToast = (message, icon = '⚠️') => {
		toast.error(message, {
			icon: icon,
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Robot</h1>
				<Table
					tableHeadings={['ID', 'Coordinate', 'Direction', 'Active']}
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
				<div>
					<Toaster
						toastOptions={{
							duration: 2000,
						}}
					/>
				</div>

				<RobotMovementBar
					activeRobot={activeRobot}
					displayToast={displayToast}
					updateActiveRobot={updateActiveRobot}
					robotArray={robotArray}
				/>
				<Grid robotArray={robotArray} setActive={updateActiveRobot} />
			</header>
		</div>
	);
}

export default App;
