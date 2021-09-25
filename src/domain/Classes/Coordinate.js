class Coordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	get getX() {
		return this.x;
	}

	get getY() {
		return this.y;
	}

	set setX(newX) {
		this.x = newX;
	}

	set setY(newY) {
		this.y = newY;
	}

	get position() {
		return `(${this.x}), (${this.width}`;
	}
}

export default Coordinate;
