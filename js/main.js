$(function() {
	const FPS = 60;

	var theSun = new Planet();
	theSun.setMass(2000);
	theSun.setPosition(new Vector(0,0));

	var earth = new Planet();
	earth.setMass(10);
	earth.setPosition(new Vector(100,0));
	earth.setSpeed(new Vector(0,-138));

	var mars = new Planet();
	mars.setMass(5);
	mars.setPosition(new Vector(210,0));
	mars.setSpeed(new Vector(0,-90));

	var space = new Space();
	space.addPlanet(theSun);
	space.addPlanet(earth);
	space.addPlanet(mars);

	var display = new Display($("#space"), space);

	var interval = setInterval(function() {
		try {
			space.update(1.0 / FPS);
		} catch (e) {
			clearInterval(interval);
			display.showSimulationAborted();
		}

		display.draw();
	}, 1000 / FPS);
	display.draw();
});