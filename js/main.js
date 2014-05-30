$(function() {
	const FPS = 60;

	var planet1 = new Planet();
	planet1.setMass(1000);
	planet1.setPosition(new Vector(-200,0));

	var planet2 = new Planet();
	planet2.setMass(1000);
	planet2.setPosition(new Vector(200,0));

	var space = new Space();
	space.addPlanet(planet1);
	space.addPlanet(planet2);

	var display = new Display($("#space"), space);

	setInterval(function() {
		console.log('tic');
		space.update(1.0 / FPS);
		display.draw();
	}, 1.0 / FPS);
	display.draw();
});