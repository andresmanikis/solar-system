describe('Space', function() {
	describe('#update', function() {
		it('should calculate the forces between two planets', function() {
			var space = new Space();

			var planet1 = new Planet();
			planet1.setMass(1);
			planet1.setPosition(new Vector(0,0));

			var planet2 = new Planet();
			planet2.setMass(1);
			planet2.setPosition(new Vector(1,0));

			space.addPlanet(planet1);
			space.addPlanet(planet2);

			planet1.getForce().should.eql(new Vector(0,0));
			planet2.getForce().should.eql(new Vector(0,0));

			space.update();

			planet1.getForce().should.eql(new Vector(1,0));
			planet2.getForce().should.eql(new Vector(-1,0));

			planet1.setPosition(new Vector(-1,0));

			planet1.getForce().should.eql(new Vector(1,0));
			planet2.getForce().should.eql(new Vector(-1,0));

			space.update();

			planet1.getForce().should.eql(new Vector(0.25,0));
			planet2.getForce().should.eql(new Vector(-0.25,0));
		})

		it('should calculate the forces between three inline planets', function() {
			var space = new Space();

			var planet1 = new Planet();
			planet1.setMass(1);
			planet1.setPosition(new Vector(-1,0));

			var planet2 = new Planet();
			planet2.setMass(1);
			planet2.setPosition(new Vector(0,0));

			var planet3 = new Planet();
			planet3.setMass(1);
			planet3.setPosition(new Vector(1,0));

			space.addPlanet(planet1);
			space.addPlanet(planet2);
			space.addPlanet(planet3);

			planet1.getForce().should.eql(new Vector(0,0));
			planet2.getForce().should.eql(new Vector(0,0));
			planet3.getForce().should.eql(new Vector(0,0));

			space.update();

			planet1.getForce().should.eql(new Vector(1.25,0));
			planet2.getForce().should.eql(new Vector(0,0));
			planet3.getForce().should.eql(new Vector(-1.25,0));
		})

		it('should calculate the forces between five balanced planets', function() {
			var space = new Space();

			var planet1 = new Planet();
			planet1.setMass(1);
			planet1.setPosition(new Vector(-1,0));

			var planet2 = new Planet();
			planet2.setMass(1);
			planet2.setPosition(new Vector(1,0));

			var planet3 = new Planet();
			planet3.setMass(1);
			planet3.setPosition(new Vector(0,0));

			var planet4 = new Planet();
			planet4.setMass(1);
			planet4.setPosition(new Vector(0,-1));

			var planet5 = new Planet();
			planet5.setMass(1);
			planet5.setPosition(new Vector(0,1));

			space.addPlanet(planet1);
			space.addPlanet(planet2);
			space.addPlanet(planet3);
			space.addPlanet(planet4);
			space.addPlanet(planet5);

			planet1.getForce().should.eql(new Vector(0,0));
			planet2.getForce().should.eql(new Vector(0,0));
			planet3.getForce().should.eql(new Vector(0,0));
			planet4.getForce().should.eql(new Vector(0,0));
			planet5.getForce().should.eql(new Vector(0,0));

			space.update();

			planet1.getForce().getX().should.be.greaterThan(0);
			planet1.getForce().getY().should.eql(0);
			planet2.getForce().getX().should.be.lessThan(0);
			planet2.getForce().getY().should.eql(0);
			planet3.getForce().should.eql(new Vector(0,0));
			planet4.getForce().getX().should.eql(0);
			planet4.getForce().getY().should.be.greaterThan(0);
			planet5.getForce().getX().should.eql(0);
			planet5.getForce().getY().should.be.lessThan(0);
		})
	})
})