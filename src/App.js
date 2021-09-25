import './App.css';
import Grid from './components/Grid/Grid';
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
				<Grid />
			</header>
		</div>
	);
}

export default App;
