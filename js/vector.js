function Vector(x, y) {
	if (x === undefined || y === undefined) { throw new Error("Missing arguments!") };
	
	this.x = x;
	this.y = y;
}

Vector.prototype.getX = function() {
	return this.x;
};

Vector.prototype.getY = function() {
	return this.y;
};

Vector.prototype.getLength = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};
