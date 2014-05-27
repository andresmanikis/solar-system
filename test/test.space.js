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
	})
})