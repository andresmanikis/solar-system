describe('Vector', function(){
  describe('#new', function(){
    it('should create vector with set coordinates', function(){
      var vector = new Vector(1, 2);
      vector.getX().should.equal(1);
      vector.getY().should.equal(2);
    })

    it('should raise an error when arguments are missing', function(){
      (function() { new Vector(1) }).should.throw("Missing arguments!");
    })
  })

  describe('#getLength', function(){
    it('should return the length of the vector', function(){
      var vector = new Vector(2, 2);
      vector.getLength().should.equal(Math.sqrt(8));
    })
  })

  describe('#getDistanceTo', function() {
    it("should return 1.0 when is at (0,0) and the other is at (1,0)", function() {
      var vector1 = new Vector(0.0, 0.0);
      var vector2 = new Vector(1.0, 0.0);

      vector1.getDistanceTo(vector2).should.equal(1.0);
    })

    it("should return 3.0 when is at (0,0) and the other is at (0,-3)", function() {
      var vector1 = new Vector(0.0, 0.0);
      var vector2 = new Vector(0.0, -3.0);

      vector1.getDistanceTo(vector2).should.equal(3.0);
    })
  })

  describe('#getDifferenceTo', function() {
    it("shuold return (2.0, 2.0) when one is at (0.0, 0.0) and the other at (2.0, 2.0)")
  })
})