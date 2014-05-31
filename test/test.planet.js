describe('Planet', function() {
	describe('#getAttractionTo', function() {
		it("should return (1,0) when is at (0,0) and the other is at (1,0) and the two have mass 1", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();
			
			planet1.setMass(1);
			planet2.setMass(1);

			planet1.setPosition(new Vector(0, 0));
			planet2.setPosition(new Vector(1, 0));

			planet1.getAttractionTo(planet2).should.eql(new Vector(1,0));
		})

		it("should return (0.25,0) when is at (0,0) and the other is at (2,0) and the two have mass 1", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();

			planet1.setMass(1);
			planet2.setMass(1);

			planet1.setPosition(new Vector(0, 0));
			planet2.setPosition(new Vector(2, 0));

			planet1.getAttractionTo(planet2).should.eql(new Vector(0.25,0));
		})

		it("should return (0,707..., 0.707...) when is at (0,0) and the other is at (0.707...,0.707...) and the two have mass 1", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();

			planet1.setMass(1);
			planet2.setMass(1);

			planet1.setPosition(new Vector(0, 0));
			planet2.setPosition(Vector.create(1, 1).setMagnitude(1));

			planet1.getAttractionTo(planet2).getX().should.be.approximately(Vector.create(1,1).setMagnitude(1).getX(), 0.00000001);
			planet1.getAttractionTo(planet2).getY().should.be.approximately(Vector.create(1,1).setMagnitude(1).getY(), 0.00000001);
		})

		it("should return (2,0) when is at (0,0) and the other is at (1,0) and has mass 1 and the other has mass 2", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();

			planet1.setMass(1);
			planet2.setMass(2);

			planet1.setPosition(new Vector(0,0));
			planet2.setPosition(new Vector(1,0));

			planet1.getAttractionTo(planet2).should.eql(Vector.create(2,0));
		})

		it('should raise an error when force is larger that 1000', function() {
			var planet1 = new Planet();
			var planet2 = new Planet();
			planet1.setPosition(new Vector(0,0));
			planet2.setPosition(new Vector(1,0));

			planet2.setMass(1);
			(function() { planet1.getAttractionTo(planet2) }).should.not.throw('Sorry, force too big :|Sorry, force too big :|');

			planet2.setMass(100);
			(function() { planet1.getAttractionTo(planet2) }).should.not.throw('Sorry, force too big :|');

			planet2.setMass(999);
			(function() { planet1.getAttractionTo(planet2) }).should.not.throw('Sorry, force too big :|');

			planet2.setMass(1001);
			(function() { planet1.getAttractionTo(planet2) }).should.throw('Sorry, force too big :|');
		})
	})

	describe('#update', function() {
		it('should stay still if speed is (0,0)', function() {
			var planet = new Planet();
			planet.setPosition(new Vector(0,0));
			planet.setSpeed(new Vector(0,0));
			planet.update(1).getPosition().should.eql(new Vector(0,0));
		})

		it('should be in (1,0) after 1 second if speed is (1,0)', function() {
			var planet = new Planet();
			planet.setPosition(new Vector(0,0));
			planet.setSpeed(new Vector(1,0));
			planet.update(1).getPosition().should.eql(new Vector(1,0));
		})

		it('should be in (-0.5,0) after 0.5 second if speed is (-1,0)', function() {
			var planet = new Planet();
			planet.setPosition(new Vector(0,0));
			planet.setSpeed(new Vector(1,0));
			planet.update(1).getPosition().should.eql(new Vector(1,0));
		})

		it('should keep speed the same when force is (0,0)', function() {
			var planet = new Planet();
			planet.setForce(new Vector(0,0));
			
			planet.setSpeed(new Vector(0,0));
			planet.update(1).getSpeed().should.eql(new Vector(0,0));

			planet.setSpeed(new Vector(10,10));
			planet.update(1).getSpeed().should.eql(new Vector(10,10));
		})

		it('should change speed in (1,0) after 1 second when force is (1,0)', function() {
			var planet = new Planet();
			planet.setForce(new Vector(1,0));
			
			planet.setSpeed(new Vector(0,0));
			planet.update(1).getSpeed().should.eql(new Vector(1,0));
		})

		it('should change speed in (0,-0.5) after 0.5 second when force is (0,-1)', function() {
			var planet = new Planet();
			planet.setForce(new Vector(0,-1));
			
			planet.setSpeed(new Vector(1,0));
			planet.update(0.5).getSpeed().should.eql(new Vector(1,-0.5));
		})
	})
})