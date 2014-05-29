describe('Vector', function(){
  describe('comparison for testing', function() {
    it('should be able to detect two equal vectors', function() {
      var vector1 = new Vector(1,1);
      var vector2 = new Vector(1,1);

      vector1.should.eql(vector2);
    })
  })

  describe('#new', function(){
    it('should create vector with set coordinates', function(){
      var vector = new Vector(1, 2);
      vector.getX().should.be.exactly(1.0);
      vector.getY().should.be.exactly(2.0);
    })

    it('should raise an error when arguments are missing', function(){
      (function() { new Vector(1) }).should.throw("Missing arguments!");
    })
  })

  describe('::create', function() {
    it('should be able to create a new vector', function() {
      Vector.create(1,1).should.eql(new Vector(1,1));
    })
  })

  describe('#getMagnitude', function(){
    it('should return the magnitude of the vector', function(){
      var vector = new Vector(2, 2);
      vector.getMagnitude().should.be.exactly(Math.sqrt(8));
    })
  })

  describe('#distanceTo', function() {
    it("should return 1 when is at (0,0) and the other is at (1,0)", function() {
      var vector1 = new Vector(0, 0);
      var vector2 = new Vector(1, 0);

      vector1.distanceTo(vector2).should.be.exactly(1.0);
    })

    it("should return 3 when is at (0,0) and the other is at (0,-3)", function() {
      var vector1 = new Vector(0, 0);
      var vector2 = new Vector(0, -3);

      vector1.distanceTo(vector2).should.be.exactly(3.0);
    })
  })

  describe('#minus', function() {
    it("should return (2,2) when first is at (2,2) and second at (2,2)", function() {
      var vector1 = new Vector(0, 0);
      var vector2 = new Vector(2, 2);

      vector2.minus(vector1).getX().should.be.exactly(2.0);
      vector2.minus(vector1).getY().should.be.exactly(2.0);
    })

    it("should return (-2,-2) when first is at (0,0) and second at (2,2)", function() {
      var vector1 = new Vector(0, 0);
      var vector2 = new Vector(2, 2);

      vector1.minus(vector2).getX().should.be.exactly(-2.0);
      vector1.minus(vector2).getY().should.be.exactly(-2.0);
    })
  })

  describe('#normalize', function() {
    it('should return (1,0) when original was (10,0)', function() {
      var vector = new Vector(10,0);
      vector.normalize().getX().should.be.exactly(1.0);
      vector.normalize().getY().should.be.exactly(0.0);
    })

    it('should return (-1,0) when original was (-10,0)', function() {
      var vector = new Vector(-10,0);
      vector.normalize().getX().should.be.exactly(-1.0);
      vector.normalize().getY().should.be.exactly(0.0);
    })

    it('should return (0.707...,0.707...) when original was (10,10)', function() {
      var vector = new Vector(10,10);
      var side = 1.0 / Math.sqrt(2);

      vector.normalize().getX().should.be.approximately(side, 0.00000001);
      vector.normalize().getY().should.be.approximately(side, 0.00000001);
    })
  })

  describe('#setMagnitude', function() {
    it('should go from (1,0) to (10,0) when set magnitude to 10', function() {
      var vector = new Vector(1,0);
      vector.setMagnitude(10);

      vector.getX().should.equal(10);
      vector.getY().should.equal(0);
    })

    it('should go from (-1,0) to (-10,0) when set magnitude to 10', function() {
      var vector = new Vector(-1,0);
      vector.setMagnitude(10);

      vector.getX().should.equal(-10);
      vector.getY().should.equal(0);
    })

    it('should go from (1,1) to (7.07...,7.07...) when set magnitude to 10', function() {
      var vector = new Vector(1,1);
      vector.setMagnitude(10);

      var side = 10.0 / Math.sqrt(2);

      vector.getX().should.equal(side);
      vector.getY().should.equal(side);
    })
  })

  describe('#add', function() {
    it('should be able to add two vectors', function() {
      Vector.create(1,1).add(Vector.create(2,2)).should.eql(Vector.create(3,3));
    })

    it('should return the same vector updated', function() {
      var original = new Vector(0,0);
      original.add(Vector.create(0,0)).should.be.exactly(original);
    })
  })

  describe('::add', function() {
    it('should be able to add two vectors', function() {
      Vector.add(new Vector(1,1), new Vector(2,2)).should.eql(new Vector(3,3));
    })
  })

  describe('#by', function() {
    it('should be able to multiply a vector by a scalar', function() {
      Vector.create(1,1).by(2).should.eql(Vector.create(2,2));
    })

    it('should return the same vector updated', function() {
      var original = new Vector(1,1);
      original.by(2).should.be.exactly(original);
    })
  })

  describe('::by', function() {
    it('should be able to multiply a vector by a scalar', function() {
      Vector.by(new Vector(1,1), 2).should.eql(Vector.create(2,2));
    })
  })
})