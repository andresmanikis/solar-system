function Display(drawingArea, space) {
	this.drawingArea = drawingArea;
	this.space = space;
	this.center = {
		x: Math.floor(parseInt(drawingArea.css('width')) / 2),
		y: Math.floor(parseInt(drawingArea.css('height')) / 2)
	};

	this.planetSize = this.determinePlanetSize();
}

Display.prototype.draw = function() {
	this.drawingArea.empty();
	var planets = this.space.getPlanets();

	for (var i = planets.length - 1; i >= 0; i--) {
		this.drawPlanetAtPosition(planets[i].getPosition());
	};
};

Display.prototype.drawPlanetAtPosition = function(position) {
	var planet = $('<div class="planet"></div>');

	planet.css('left', position.getX() - (this.planetSize.w / 2) + this.center.x);
	planet.css('top', position.getY() - (this.planetSize.h / 2) + this.center.y);

	this.drawingArea.append(planet);
};

Display.prototype.determinePlanetSize = function() {
	var hiddenPlanet = $('<div id="hiddenPlanet" style="display:none" class="planet"></div>');
	this.drawingArea.append(hiddenPlanet);
	var size = {
		w: parseInt(hiddenPlanet.css('width')),
		h: parseInt(hiddenPlanet.css('height'))
	};

	$("#hiddenPlanet").remove();

	return size;
};