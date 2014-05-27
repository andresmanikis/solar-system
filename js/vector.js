function Vector(x, y) {
	if (x === undefined || y === undefined) { throw new Error("Missing arguments!") };
	
	this.x = parseFloat(x);
	this.y = parseFloat(y);
}

Vector.prototype.getX = function() {
	return this.x;
};

Vector.prototype.getY = function() {
	return this.y;
};

Vector.prototype.getMagnitude = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.minus = function(otherVector) {
	return new Vector(this.getX() - otherVector.getX(), this.getY() - otherVector.getY());
};

Vector.prototype.distanceTo = function(otherVector) {
	var diff = this.minus(otherVector);
	return Math.sqrt(Math.pow(diff.getX(), 2) + Math.pow(diff.getY(), 2));
};

Vector.prototype.normalize = function() {
	var normalized = new Vector(this.getX() / this.getMagnitude(), this.getY() / this.getMagnitude());
	this.x = normalized.getX();
	this.y = normalized.getY();

	return this;
};

Vector.prototype.setMagnitude = function(magnitude) {
	this.normalize();
	this.x *= magnitude;
	this.y *= magnitude;

	return this;
};