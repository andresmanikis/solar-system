describe('Planet', function() {
	describe('#getAttractionTo', function() {
		it("should return 1 when is at distance 1 and the two planets have mass 1", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();
			
			planet1.setMass(1);
			planet2.setMass(1);

			planet1.setPosition(new Vector(0, 0));
			planet2.setPosition(new Vector(1, 0));

			planet1.getAttractionTo(planet2).should.equal(1);
		})

		it("should return 0.25 when is at distance 2 and the two planets have mass 1", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();

			planet1.setMass(1);
			planet2.setMass(1);

			planet1.setPosition(new Vector(0, 0));
			planet2.setPosition(new Vector(2, 0));

			planet1.getAttractionTo(planet2).should.equal(0.25);
		})
	})
})