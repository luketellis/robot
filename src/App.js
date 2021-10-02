import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import BikeMovementBar from './components/BikeMovementBar/BikeMovementBar';

function App() {
	const [bikeArray, setBikeArray] = useState([]);
	const [coordinate, setCoordinate] = useState({ x: 1, y: 4 });
	const [direction, setDirection] = useState('NORTH');
	const [activeBike, setActiveBike] = useState(null);

	const addBike = () => {
		setBikeArray((prevState) => [
			...prevState,
			{
				id: bikeArray.length + 1,
				coordinate: coordinate,
				direction: direction,
				active: false,
			},
		]);
	};

	//console.log(`bike ${JSON.stringify(bikeArray)}`);

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
				<BikeMovementBar />
				<Grid />
			</header>
		</div>
	);
}

export default App;
