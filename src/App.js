import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Error from './components/Error/Error';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import BikeMovementBar from './components/BikeMovementBar/BikeMovementBar';

function App() {
	const [bikeArray, setBikeArray] = useState([]);
	const [coordinate, setCoordinate] = useState({ x: 1, y: 4 });
	const [direction, setDirection] = useState('NORTH');
	const [errorMsg, setErrorMsg] = useState('');
	const [activeBike, setActiveBike] = useState(0);

	const addBike = () => {
		setBikeArray((prevState) => [
			...prevState,
			{
				id: bikeArray.length + 1,
				coordinate: coordinate,
				direction: direction,
				active: !activeBike,
			},
		]);

		!activeBike && setActiveBike(bikeArray.length + 1);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Robot</h1>
				<Table
					tableHeadings={['Bike ID', 'Coordinate', 'Direction', 'Active']}
					tableData={bikeArray}
				/>
				<TextInput helperText="" placeholder="Enter Starting Instructions" />
				<Button label="Create New Bike" onClick={addBike} />
				<Error text={errorMsg} />
				<BikeMovementBar activeBike={activeBike} setErrorMsg={setErrorMsg} />
				<Grid />
			</header>
		</div>
	);
}

export default App;
