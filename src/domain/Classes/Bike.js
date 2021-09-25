class Bike {
	static numberOfBikes = 0;

	constructor(coordinate, direction) {
		this.coordinate = coordinate;
		this.direction = direction;
		Bike.increaseNumberOfBikes();
		this.id = Bike.numberOfBikes;
		this.bikeName = `Bike ${Bike.numberOfBikes}`;
	}

	get getCoordinate() {
		return this._coordinate;
	}

	get getDirection() {
		return this.direction;
	}

	get getId() {
		return this.id;
	}

	static get getBikeNumber() {
		return this.numberOfBikes;
	}

	static increaseNumberOfBikes() {
		this.numberOfBikes = ++this.numberOfBikes;
	}

	set setCoordinate(newCoordinate) {
		this.coordinate = newCoordinate;
	}

	set setDirection(newDirection) {
		this.direction = newDirection;
	}

	turnLeft() {
		switch (this.direction) {
			case 'NORTH':
				this.direction = 'WEST';
				break;
			case 'EAST':
				this.direction = 'NORTH';
				break;
			case 'SOUTH':
				this.direction = 'EAST';
				break;
			case 'WEST':
				this.direction = 'SOUTH';
				break;
			default:
				console.log('Error Turning Left');
		}
	}

	turnRight() {
		switch (this.direction) {
			case 'NORTH':
				this.direction = 'EAST';
				break;
			case 'EAST':
				this.direction = 'SOUTH';
				break;
			case 'SOUTH':
				this.direction = 'WEST';
				break;
			case 'WEST':
				this.direction = 'NORTH';
				break;

			default:
				console.log('Error Turning Right');
		}
	}
}

export default Bike;
