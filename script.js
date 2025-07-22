// Complete the js code
function Car(make, model) {
	constructor(make,modle){
	this.make=make;
	this.modle=modle;
}
}
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	constructor(make,modle,topSpeed){
	super(make,model,topSpeed);
		this.topSpeed=topSpeed
	}	
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
