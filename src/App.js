import './App.css';
import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Grid } from './components/Grid/Grid';
import { Table } from './components/Table/Table';
import { TextInput } from './components/TextInput/TextInput';
import { RobotMovementBar } from './components/RobotMovementBar/RobotMovementBar';
import {
	isValidInstruction,
	createRobotFromString,
} from './domain/classes/Instruction';
import { isMaxRobotsExceeded } from './domain/classes/Grid';
import { toast, Toaster } from 'react-hot-toast';
import { INFO_MESSAGES } from './domain/config/constants';

function App() {
	const [robots, setRobots] = useState([]);
	const [instruction, setInstruction] = useState('');
	const [activeRobot, setActiveRobot] = useState('');

	const addRobot = () => {
		try {
			isMaxRobotsExceeded(robots.length);
			isValidInstruction(instruction, robots);
			const potentialRobot = createRobotFromString({
				instruction,
				id: robots.length + 1,
				active: !activeRobot,
			});
			setRobots((prevState) => [...prevState, potentialRobot]);
			setInstruction('');
			!activeRobot && setActiveRobot(potentialRobot);
		} catch (e) {
			displayToast(e.message);
			return;
		}
	};

	const updateActiveRobot = (id, property, value) => {
		try {
			const oldRobotArray = [...robots];

			const matchingRobotArray = oldRobotArray.filter((robot) => {
				return robot.id === id;
			});

			const nonMatchingRobotArray = oldRobotArray.filter((robot) => {
				return robot.id !== id;
			});

			if (property === 'active') {
				nonMatchingRobotArray.forEach((robot) => {
					robot.active = false;
				});
			}

			const matchingRobot = { ...matchingRobotArray[0] };
			matchingRobot[property] = value;

			const robotArrayWithUpdatedValues = [
				...nonMatchingRobotArray,
				matchingRobot,
			];

			robotArrayWithUpdatedValues.sort((a, b) => a.id - b.id);

			setRobots(robotArrayWithUpdatedValues);

			if (property === 'active' && activeRobot.id !== id) {
				displayToast(INFO_MESSAGES.ACTIVE_ROBOT_CHANGED + id, '✔️');
			}
			setActiveRobot(matchingRobot);
		} catch (e) {
			displayToast(e.message);
			return;
		}
	};

	const handleInstructionTerm = (e) => {
		setInstruction(e.target.value);
	};

	const displayToast = (message, icon = '⚠️') => {
		toast.error(message, {
			icon: icon,
		});
	};

	return (
		<div className="app">
			<div>
				<Toaster
					toastOptions={{
						duration: 2000,
					}}
				/>
			</div>
			<h1>Robot</h1>

			<Table
				tableHeadings={['ID', 'Coordinate', 'Direction', 'Active']}
				tableData={robots}
				setActive={updateActiveRobot}
			/>

			<TextInput
				placeholder="Enter Starting Instructions"
				onChange={handleInstructionTerm}
				value={instruction}
			/>
			<Button
				label="Create New Robot"
				onClick={addRobot}
				disabled={!instruction}
			/>

			<RobotMovementBar
				activeRobot={activeRobot}
				displayToast={displayToast}
				updateActiveRobot={updateActiveRobot}
				robotArray={robots}
			/>
			<Grid robots={robots} setActive={updateActiveRobot} />
		</div>
	);
}

export default App;
