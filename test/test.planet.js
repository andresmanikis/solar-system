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
	})
})