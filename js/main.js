$(function() {
	const FPS = 60;

	var sun_ = new Planet();
	sun_.setMass(2000);
	sun_.setPosition(new Vector(0,0));

	var earth = new Planet();
	earth.setMass(10);
	earth.setPosition(new Vector(100,0));
	earth.setSpeed(new Vector(0,-98));

	var moon = new Planet();
	moon.setMass(5);
	moon.setPosition(new Vector(210,0));
	moon.setSpeed(new Vector(0,-90));

	var space = new Space();
	space.addPlanet(sun_);
	space.addPlanet(earth);
	space.addPlanet(moon);

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