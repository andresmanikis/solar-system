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
	})
})