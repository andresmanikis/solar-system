function Space(handler) {
	this.handler = handler;
	this.planets = [];
}

Space.prototype.addPlanet = function(planet) {
	this.planets.push(planet);
};

Space.prototype.draw = function() {
	var centerX = parseInt(this.handler.css("width")) / 2;
	var centerY = parseInt(this.handler.css("height")) / 2;

	for (var i = this.planets.length - 1; i >= 0; i--) {
		this.planets[i].draw(centerX, centerY);
	}
};

Space.prototype.update = function() {
	for (var i = this.planets.length - 1; i >= 0; i--) {
		this.planets[i].setForce(this.calculateForce(this.planets[i]));
	};
};

Space.prototype.calculateForce = function(planet) {
	var forceX = 0.0;
	var forceY = 0.0;

	for (var i = this.planets.length - 1; i >= 0; i--) {
		if (this.planets[i] === planet) {
			continue;
		}

		console.log("Calculating force caused by planet " + i);
	};
};
