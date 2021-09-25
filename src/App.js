import './App.css';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import Bike from './domain/Classes/Bike';
import Coordinate from './domain/Classes/Coordinate';

function App() {
	const startingPoint = new Coordinate(1, 2);
	const bike = new Bike(startingPoint, 'NORTH');

	console.log(`startingPoint ${JSON.stringify(startingPoint)}`);
	console.log(`bike ${JSON.stringify(bike)}`);
	console.log(`bikeCount ${Bike.numberOfBikes}`);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Robot</h1>
				<Table tableHeadings={['Bike ID', 'Active']} tableData={[1, 'yes']} />
				<TextInput helperText="Place" />
				<Button label="Create New Bike" />
				<Button label="Turn Active Bike Left" />
				<Button label="Turn Active Bike Right" />
				<Grid />
			</header>
		</div>
	);
}

export default App;
