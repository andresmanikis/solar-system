function Space() {
	this.planets = [];
}

Space.prototype.addPlanet = function(planet) {
	this.planets.push(planet);
};

Space.prototype.update = function() {
	for (var i = this.planets.length - 1; i >= 0; i--) {
		this.planets[i].setForce(this.calculateForce(this.planets[i]));
	}
};

Space.prototype.calculateForce = function(planet) {
	var force = new Vector(0,0);

	for (var i = this.planets.length - 1; i >= 0; i--) {
		if (this.planets[i] === planet) {
			continue;
		}

		force.add(planet.getAttractionTo(this.planets[i]));
	}

	return force;
};
