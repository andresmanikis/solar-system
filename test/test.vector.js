describe('Vector', function(){
  describe('new', function(){
    it('should create vector with set coordinates', function(){
      var vector = new Vector(1, 2);
      vector.getX().should.equal(1);
      vector.getY().should.equal(2);
    })

    it('should raise an error when arguments are missing', function(){
      (function() { new Vector(1) }).should.throw("Missing arguments!");
    })
  })

  describe('getLength', function(){
    it('should return the length of the vector', function(){
      var vector = new Vector(2, 2);
      vector.getLength().should.equal(Math.sqrt(8));
    })
  })
})