// Object literals

const Rectangle = {
	name: 'Rectangle 1',
	width: 30,
	height: 10,

	area: function () {
		return this.width * this.height;
	},
};

console.log(Rectangle.area());

// Constructor functions

function RectangleConstructor(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;

	this.area = function () {
		return this.width * this.height;
	};
}

const rect1 = new RectangleConstructor('Rectangle 1', 10, 10);
console.log(rect1);
console.log(rect1.area());

const rect2 = new RectangleConstructor('Rectangle 2', 20, 10);
console.log(rect2);
console.log(rect2.area());

// Literals vs Built-in Constructors

const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

console.log(strLit.toUpperCase()); // Boxing
console.log(strObj.valueOf(), typeof strObj.valueOf()); // Unboxing

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function (x) {
	return x * x;
};

console.log(funcLit, typeof funcLit);

console.log(funcLit(5));

const funcObj = new Function('x', 'return x * x');

// We can execute the function created with the Function constructor
console.log(funcObj(3));

const obj1 = {};
const obj2 = new Object(); // Behind the scenes, JS does this for the previous line as well

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);

// Object Properties

const rect3 = new RectangleConstructor('Rectangle 3', 20, 20);
const rect4 = new RectangleConstructor('Rectangle 4', 20, 30);

console.log(rect3.name, rect4.width);
console.log(rect3['width']);

// Add property
rect3.color = 'red';
console.log(rect3);

rect4.perimeter = () => 2 * (rect4.width + rect4.height);
console.log(rect4.perimeter());

// Delete property
delete rect4.perimeter;

// Check for property
console.log(rect4.hasOwnProperty('color'));
console.log(rect3.hasOwnProperty('color'));

// Get keys
console.log(Object.keys(rect3));

// Get values
console.log(Object.values(rect4));

// Get entries
console.log(Object.entries(rect3));

for (let [key, value] of Object.entries(rect3)) {
	if (typeof value !== 'function') {
		console.log(`${key} - ${value}`);
	}
}

// Prototypes and Prototype chaining

console.log(Object.getPrototypeOf(rect1));

function RectanglePrototype(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
}

RectanglePrototype.prototype.area = function () {
	return this.width * this.height;
};
RectanglePrototype.prototype.perimeter = function () {
	return 2 * (this.width + this.height);
};

const rect5 = new RectanglePrototype('Rectangle 5', 50, 10);
console.log(rect5);
console.log(rect5.area());
console.log(rect5.perimeter());

// Object.create

const RectangleObjectCreate = {
	area: function () {
		return this.width * this.height;
	},
	perimeter: function () {
		return 2 * (this.width + this.height);
	},
};

function createRectangle(height, width) {
	return Object.create(RectangleObjectCreate, {
		height: {
			value: height,
		},
		width: {
			value: width,
		},
	});
}

const rect6 = createRectangle(30, 50);
console.log(rect6);

// Prototypical inheritance and call

function Shape(name) {
	this.name = name;
}

Shape.prototype.logName = function (){
    console.log(`Shape Name : ${this.name}`);
}

function RectanglePrototypical(name, height, width) {
	Shape.call(this, name);

	this.height = height;
	this.width = width;
}

function CirclePrototypical(name, radius){
    Shape.call(this, name)
    this.radius = radius
}

// Inherit Prototypes
CirclePrototypical.prototype = Object.create(Shape.prototype)
CirclePrototypical.prototype.logName = function (){
    console.log(`Circle Name : ${this.name}`);
}

// Set prototype constructers
CirclePrototypical.prototype.constructor = CirclePrototypical

const rect7 = new RectanglePrototypical('Rectangle 7', 20, 20)
console.log(rect7);

const circ1 = new CirclePrototypical('Circle 1', 2)
console.log(circ1);
circ1.logName()