import './App.css';
import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Error from './components/Error/Error';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import RobotMovementBar from './components/RobotMovementBar/RobotMovementBar';
//import { RobotMovementBar } from './domain/classes/Direction';

function App() {
	const [robotArray, setRobotArray] = useState([]);
	const [direction, setDirection] = useState('NORTH');
	const [coordinate, setCoordinate] = useState({ x: 1, y: 4 });
	const [instruction, setInstruction] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [activeRobot, setActiveRobot] = useState(0);

	const addRobot = () => {
		setRobotArray((prevState) => [
			...prevState,
			{
				id: robotArray.length + 1,
				coordinate: coordinate,
				direction: direction,
				active: !activeRobot,
			},
		]);

		!activeRobot && setActiveRobot(robotArray.length + 1);
	};

	const validateInstruction = () => {};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Robot</h1>
				<Table
					tableHeadings={['Robot ID', 'Coordinate', 'Direction', 'Active']}
					tableData={robotArray}
				/>
				<TextInput helperText="" placeholder="Enter Starting Instructions" />
				<Button label="Create New Robot" onClick={addRobot} />
				<Error text={errorMsg} />
				<RobotMovementBar activeRobot={activeRobot} setErrorMsg={setErrorMsg} />
				<Grid />
			</header>
		</div>
	);
}

export default App;
