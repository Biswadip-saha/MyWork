// Array Literal

const num = [12, 45, 78, 69, 55, 40];
console.log(num);

x = num.length;
x = num.includes(45);
x = num.indexOf(40);
x = num.slice(1, 3);
// x = num.splice(1, 4);
// console.log(x ,num);
x = num.toString();
console.log(x);

// Array Constructor
const fruit = new Array('Apple', 'Watermelon', 'Grape', 'Orange');
const berries = ['Strawberries', 'Blueberries', 'Rasberries'];

fruit[2] = 'Pear';
fruit.push('Peach');
console.log(fruit);

fruit.pop();
fruit.unshift('Mango');
console.log(fruit);

fruit.shift();
fruit.reverse();
console.log(fruit);

// Concatinating
let allFruits = fruit.concat(berries);
console.log(allFruits);

// Spread Operators
allFruits = [...fruit, ...berries];
console.log(allFruits);

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, 6, [7, 8], 9];
x = arr.flat();
console.log(x);

// Nesting
allFruits = [fruit, berries];
console.log(allFruits);

fruit.push(berries);
console.log(fruit);

// Static Methods on Array Object

/*

Array.isArray(input)  (returns true and false after checking that the input is an array or not)
Array.from(input)  (input a string to make a array of each letter)
Array.of(inputs)  (creates a array of the variables passed in the input)

*/

// Object Literals

const person = {
  name: 'Jhon Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main Street',
    city: 'Boston',
    state: 'LA',
  },
  hobbies: ['music', 'sport'],
};
person.name = 'RDJ';
delete person.age;
person.hasChildren = true;
console.log(person);

x = person.name;
x = person['isadmin'];
x = person.address.street;
x = person.hobbies;
x = person.hasOwnProperty('address');
console.log(x);

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person.greet();

// Spread Operators

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const todo = [
  { id: 1, name: 'BuyMilk' },
  { id: 2, name: 'Pickup trash' },
  { id: 3, name: 'Read' },
];
x = todo[0].name;
x = Object.keys(person);
x = Object.keys(person).length;
x = Object.values(person);
x = Object.entries(person);
console.log(x);

// Destructuring Object Literal

const firstName = 'David';
const lastName = 'Harvard';
const age = 30;

// const hire = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };
const hire = {
  firstName,
  lastName,
  age,
};

console.log(hire);

const todos = {
  id: 1,
  title: 'take out trash',
  user: {
    name: 'jhon',
  },
};
const {
  id: no,
  title,
  user: { name },
} = todos;
console.log(no, title, name);

const numbers = [23, 67, 33, 49, 52];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// JSON

const post ={
    id: 1,
    title: 'post-1',
    body: 'this is the body'
}

const str = JSON.stringify(post)
console.log(str);
const obj= JSON.parse(str)
console.log(obj);
