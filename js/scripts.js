$(function() {
	var planet1 = new Planet($("#planet1"));
	planet1.setMass(1);
	planet1.setPosition(-100, -100);

	var planet2 = new Planet($("#planet2"));
	planet2.setMass(1);
	planet2.setPosition(100, 100);

	var space = new Space($("#space"));
	space.addPlanet(planet1);
	space.addPlanet(planet2);

	space.draw();
	space.update();
});