function Planet(handler) {
	this.handler = handler;
	this.x = 0;
	this.y = 0;
	this.w = parseInt(handler.css("width"));
	this.h = parseInt(handler.css("height"));
	this.forceX = 0.0;
	this.forceY = 0.0;

	this.mass = 1;
}

Planet.prototype.setMass = function(mass) {
	this.mass = mass;
};

Planet.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
};

Planet.prototype.draw = function(centerX, centerY) {
	this.handler.css("left", centerX - this.w / 2 + this.x);
	this.handler.css("top", centerY - this.h / 2 + this.y);
};

Planet.prototype.setForce = function(forceX, forceY) {
	this.forceX = forceX;
	this.forceY = forceY;
};