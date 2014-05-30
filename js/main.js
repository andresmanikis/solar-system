$(function() {
	var planet1 = new Planet();
	planet1.setPosition(new Vector(-200,0));

	var planet2 = new Planet();
	planet2.setPosition(new Vector(200,0));

	var space = new Space();
	space.addPlanet(planet1);
	space.addPlanet(planet2);

	var display = new Display($("#space"), space);
	display.draw();
});