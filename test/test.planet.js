describe('Planet', function() {
	describe('#getAttractionTo', function() {
		it("should return 1.0 when is at distance 1.0 and the two planets have 1.0 mass", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();

			planet1.setPosition(new Vector(0.0, 0.0));
			planet2.setPosition(new Vector(1.0, 0.0));

			planet1.getAttractionTo(planet2).should.equal(1.0);
		})

		it("should return 0.25 when is at distance 2.0 and the two planets have 1.0 mass", function() {
			var planet1 = new Planet();
			var planet2 = new Planet();

			planet1.setPosition(new Vector(0.0, 0.0));
			planet2.setPosition(new Vector(2.0, 0.0));

			planet1.getAttractionTo(planet2).should.equal(0.25);
		})
	})
})