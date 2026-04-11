// Classes

class Rectangle {
	constructor(name, width, height) {
		this.name = name;
		this.width = width;
		this.height = height;
	}

	area() {
		return this.height * this.width;
	}
	perimeter() {
		return 2 * (this.height + this.width);
	}
	isSquare() {
		return this.width === this.height;
	}

	// Static Method
	static getClass() {
		return 'Rectangle';
	}
}

const square1 = new Rectangle('Square 1', 20, 20);
console.log(square1);
console.log(square1.area());
console.log(square1.perimeter());
console.log(square1.isSquare());

// Inheritance

class Shape {
	constructor(name) {
		this.name = name;
	}

	logName() {
		console.log(`Shape Name: ${this.name}`);
	}
}

class Square extends Shape {
	constructor(name, width, height) {
		super(name);

		this.width = width;
		this.height = height;
	}
}

const square2 = new Square('Square 2', 10, 10);
console.log(square2);
square2.logName();

// Bind() & this

class App {
	constructor() {
		this.severName = 'localHost';
		document
			.querySelector('button')
			.addEventListener('click', this.getServerName.bind(this));
	}

	getServerName() {
		console.log(this.severName);
	}
}

const app = new App();

// Getters and Setters

class Person {
	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		return this.capitalizeFirst(this._firstName);
	}

	set firstName(value) {
		this._firstName = this.capitalizeFirst(value);
	}

	get lastName() {
		return this.capitalizeFirst(this._lastName);
	}

	set lastName(value) {
		this._lastName = this.capitalizeFirst(value);
	}

	capitalizeFirst(value) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}

const person1 = new Person('jhon', 'doe');
console.log(person1.firstName);

person1.firstName = 'joe';
console.log(person1);

// In a Constructive Function
function PersonConstructiveFunction(firstName, lastName) {
	this._firstName = firstName;
	this._lastName = lastName;

	Object.defineProperty(this, 'firstName', {
		get: function () {
			return this.capitalizeFirst(this._firstName);
		},
		set: function (value) {
			this._firstName = value;
		},
	});

	Object.defineProperty(this, 'lastName', {
		get: function () {
			return this.capitalizeFirst(this._lastName);
		},
		set: function (value) {
			this._lastName = value;
		},
	});
}

PersonConstructiveFunction.prototype.capitalizeFirst = function (value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

const person2 = new PersonConstructiveFunction('jhon', 'doe');
console.log(person2.firstName);
console.log(person2.lastName);

// In a Object Literal
const PersonOBJ = {
	_firstName: 'jane',
	_lastName: 'doe',

	get firstName() {
		return Person.prototype.capitalizeFirst(this._firstName);
	},

	set firstName(value) {
		this._firstName = value;
	},

	get lastName() {
		return Person.prototype.capitalizeFirst(this._lastName);
	},

	set lastName(value) {
		this._lastName = value;
	},
};

const person3 = Object.create(PersonOBJ);
console.log(person3.firstName);
console.log(person3.lastName);

// Private property convention

class Wallet {
	#balance = 0;
	#transactions = [];

	deposit(amount) {
		this.#processDeposit(amount);
		this.#balance += amount;
	}

	withdraw(amount) {
		this.#processWithdraw(amount);
		this.#balance -= amount;
	}

	#processDeposit(amount) {
		console.log(`Depositing: ${amount}`);
		this.#transactions.push({
			type: 'deposit',
			amount,
		});
	}

	#processWithdraw(amount) {
		console.log(`Withdrawing: ${amount}`);
		this.#transactions.push({
			type: 'withdraw',
			amount,
		});
	}

	get balance() {
		return this.#balance;
	}

	get transactions() {
		return this.#transactions;
	}
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.balance);

// Property flags and descriptors

// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `false`, the property will not be returned in a `for...in` loop
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

const rectObj = {
	name: 'Rectangle 1',
	width: 20,
	hwight: 10,
};

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

Object.defineProperty(rectObj, 'name', {
	writable: false,
	configurable: false,
	enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'NewName';
delete rectObj.name;
console.log(rectObj);

// Sealing and Freezing

// Sealing - Prevents properties from being added or removed. Can still be changed.
// Freezing - Prevents properties from being added, removed or changed

Object.seal(rectObj)
// Object.freeze(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj)
console.log(descriptors);

