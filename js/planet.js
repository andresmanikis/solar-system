function Planet() {
	this.position = new Vector(0.0, 0.0);
	this.force = new Vector(0.0, 0.0);
	this.mass = 1.0;
}

Planet.prototype.setMass = function(mass) {
	this.mass = mass;
};

Planet.prototype.setPosition = function(position) {
	this.position = position;
};

Planet.prototype.setForce = function(force) {
	this.force = force;
};

Planet.prototype.getForce = function() {
	return this.force;
};

Planet.prototype.getAttractionTo = function(otherPlanet) {
	var forceMagnitude = this.getMass() * otherPlanet.getMass() / Math.pow(this.getPosition().distanceTo(otherPlanet.getPosition()), 2);
	return otherPlanet.getPosition().minus(this.getPosition()).normalize().setMagnitude(forceMagnitude);
};

Planet.prototype.getMass = function() {
	return this.mass;
};

Planet.prototype.getPosition = function() {
	return this.position;
};

Planet.prototype.getDistanceTo = function(otherPlanet) {
	return this.getPosition().distanceTo(otherPlanet.getPosition());
};