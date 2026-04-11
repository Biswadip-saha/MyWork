// Symbols

const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');

console.log(sym1, sym2);

// Get read-only description
console.log(Symbol('sym1').description);

// Symbols are unique
console.log(Symbol('sym1') === Symbol('sym1')); // false
console.log(Symbol().description); // undefined

// Ensure our id is unique and can not be overwritten
const user = {
	[Symbol('id')]: 1,
	name: 'John',
	email: 'john@gmail.com',
};

user.id = '123';

console.log(user);

// This will not work either
console.log(user[Symbol('id')]); // undefined

// Symbols are not enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
	console.log(key);
}

// getOwnPropertySymbols() - returns an array of symbols
console.log(Object.getOwnPropertySymbols(user));

// Using Symbol.for() for global symbols
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // true

// Symbol.keyFor() - returns a name of a global symbol
console.log(Symbol.keyFor(sym3)); // foo
// It will be undefined for any Symbol that is not global and not created with Symbol.for()
console.log(Symbol.keyFor(sym1)); // undefined

// toString() - returns a string representation of a symbol

console.log(sym1.toString()); // Symbol(sym1)
console.log(sym3.toString()); // Symbol(foo)

// valueOf - returns a primitive value of a symbol
console.log(sym1.valueOf()); // Symbol(sym1)
console.log(sym3.valueOf()); // Symbol(foo)

// Iterators

// const app = {
//   nextIndex: 0,
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnValue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnValue;
//   },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
	teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
	[Symbol.iterator]: function () {
		let nextIndex = 0;
		return {
			next: () => {
				return nextIndex < this.teams.length
					? { value: this.teams[nextIndex++], done: false }
					: { done: true };
			},
		};
	},
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

for (const team of app) {
	console.log(team);
}

// Generators

function* createTeamIterator(teams) {
	for (let i = 0; i < teams.length; i++) {
		yield teams[i];
	}
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const genIterator = createTeamIterator(teams);

console.log(iterator.next().value); // Red Sox
console.log(iterator.next().value); // Yankees
console.log(iterator.next().value); // Astros
console.log(iterator.next().value); // Dodgers
console.log(iterator.next().done); // true

// Use with for... of
for (const team of createTeamIterator(teams)) {
	console.log(team);
}

// Use with spread operator
console.log([...createTeamIterator(teams)]);

// Use with destructuring
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);

// Sets

const set = new Set([1, 2, 2, 3, 3, 4]);

// Add a new value to the set
set.add(5);

console.log(set);

// Check for membership
console.log(set.has(5));
console.log(set.has(6));

// Remove a value from the set
set.delete(5);

console.log(set);

// Convert to array
const array = Array.from(set);

// Convert array to set
const arraySet = new Set(array);

// Get the size of the set
console.log('Set Size:', set.size);

// Get values from the set - returns an iterator
console.log(set.values());

// Iterate through the set using a loop
for (let item of set) {
	console.log(item);
}

// use iterator
const setIterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Clear the set
set.clear();

console.log(set);

// Maps

const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2);

console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', { phone: '555-555-5555', email: 'brad@gmail.com' });
peopleMap.set('jack', { phone: '555-555-5555', email: 'jack@gmail.com' });
peopleMap.set('jill', { phone: '555-555-5555', email: 'jill@gmail.com' });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const mapIterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);

// Stacks

class Stack {
	constructor() {
		this._items = [];
		this._count = 0;
	}

	push(item) {
		this._items[this._count] = item;
		this._count++;
	}

	pop() {
		if (this.isEmpty()) {
			return 'Underflow';
		}

		const item = this._items[this._count - 1];
		this._count--;

		for (let i = this._count; i < this._items.length; i++) {
			this._items[i] = this._items[i + 1];
		}

		this._items.length = this._count;
		return item;
	}

	peek() {
		if (this.isEmpty()) {
			return 'No items in stack';
		}

		return this._items[this._count - 1];
	}

	isEmpty() {
		return this._count === 0;
	}

	length() {
		return this._count;
	}

	clear() {
		this._items = [];
		this._count = 0;
	}
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
stack.push('Item 4');
stack.push('Item 5');

stack.pop();
stack.pop();

// stack.clear();

console.log('Top Item: ', stack.peek());
console.log('Stack Length: ', stack.length());

// Queues

class Queue {
	constructor() {
		this._items = [];
		this._count = 0;
		this._front = 0;
	}

	enqueue(item) {
		this._items[this._count] = item;
		this._count++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}

		const item = this._items[this._front];
		for (let i = this._front; i < this._count - 1; i++) {
			this._items[i] = this._items[i + 1];
		}
		this._count--;
		this._items.length = this._count;
		return item;
	}

	peek() {
		if (this.isEmpty()) {
			return 'No items in the queue';
		}

		return this._items[this._front];
	}

	length() {
		return this._count - this._front;
	}

	isEmpty() {
		return this._count === 0;
	}
}

const q = new Queue();

q.enqueue('Item 1');
q.enqueue('Item 2');
q.enqueue('Item 3');

q.dequeue();
q.dequeue();

console.log('Front Item: ', q.peek());
console.log('Queue Length: ', q.length());

// LinkedLists

class Node {
	constructor(value) {
		this._value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this._head = null;
		this._length = 0;
	}

	// Insert first node (Head)
	insertFirst(value) {
		const newNode = new Node(value);
		newNode.next = this._head;
		this._head = newNode;
		this._length++;
	}

	// Insert last node (Tail)
	insertLast(value) {
		const newNode = new Node(value);
		let current = this._head;

		while (current.next) {
			current = current.next;
		}

		current.next = newNode;
		this.length++;
	}

	// Insert at index
	insertAt(value, index) {
		if (index > this._length) {
			return;
		}

		if (index === 0) {
			this.insertFirst(value);
			return;
		}

		const newNode = new Node(value);
		let current, previous;
		current = this._head;
		let count = 0;

		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		newNode.next = current;
		previous.next = newNode;
		this._length++;
	}

	// Get at index
	getAt(index) {
		let current = this._head;
		let count = 0;
		while (current) {
			if (count === index) {
				console.log(current._value);
			}
			count++;
			current = current.next;
		}
		return null;
	}

	// Remove at index
	removeAt(index) {
		if (index > this._length) {
			return;
		}

		let current = this._head;
		let previous;
		let count = 0;

		if (index === 0) {
			this._head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}

		this._length--;
	}

	// Print list data
	printListData() {
		let current = this._head;
		let list = '';

		while (current) {
			list += current._value + ' ';
			current = current.next;
		}

		console.log(list);
	}

	// Clear list
	clearListData() {
		this._head = null;
		this._length = 0;
	}
}

const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertLast(10);
list.insertAt(500, 2);
list.insertAt(600, 4);

list.removeAt(2);
list.removeAt(0);

// list.clearListData();
list.printListData();
list.getAt(2);
list.getAt(0);
