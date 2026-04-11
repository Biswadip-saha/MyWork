// console

console.log();
console.error();
console.warn('Hi!');

console.table({ name: 'Biswadip', age: 17 });

console.group('name');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: black';
console.log('%cHello World', styles);

//Variables var, let, const

let firstName = 'Jhon';
console.log(firstName);

let a, b, c;
const d = 10,
  e = 0,
  f = 90;

// DataType

const lastName = 'Sara';
console.log(lastName, typeof lastName);

const int = 30;
console.log(int, typeof int);

const float = 90.9;
console.log(float, typeof float);

const bool = true;
console.log(bool, typeof bool);

const nulldata = null;
console.log(nulldata, typeof nulldata);

//Type Conversion

let amount = '100';
console.log(amount, typeof amount);
// way 1: amount = parseInt(amount);
// way 2: amount = +amount;
// way 3:
amount = Number(amount);
console.log(amount, typeof amount);

let tostring = 100;
// way 1: tostring = tostring.toString();
// way 2:
tostring = String(tostring);
console.log(tostring, typeof tostring);

let decimal = '99.5';
decimal = parseFloat(decimal);
console.log(decimal, typeof decimal);

let numtobool = 1;
numtobool = Boolean(numtobool);
console.log(numtobool, typeof numtobool);

//Operators

/*

+   (Add)
-   (substract)
*   (Multiply)
/   (Divide)
%   (Modulus)
**  (Exponent)
++  (Increment)
--  (Decrement)
=   (Assignment)
==  (Comparison)
=== (compares type and value)
!=  (Not equals)
!== (Not equals and type)

*/

// Type Coersion

let x;
x = 5 + '5'; // returns string
x = 5 + Number('5'); // returns number
x = 5 * '5'; // returns number
x = 5 + null; // retuns number
x = 5 + true; // returns 5+1 ie number
x = 5 + false; // returns 5+0 ie number
x = 5 + undefined; //returns NaN
console.log(x, typeof x);

//Strings

// Way 1:
let name;

const realName = 'Jhon';
const ageNo = 30;

name = 'Hello, my name is' + realName + 'and I am ' + ageNo + 'years old';

//Way 2:
name = `Hello, my name is ${realName} and I am ${ageNo} years old`;
console.log(name);

// String propeties and methods
const len = name.length;
console.log(len);

// Acess value by key
const key = name[1];
console.log(key);

// String object
// cont str = new String("hi!");

// List of all methods
const proto = name.__proto__;
console.log(proto);

/*

.toUpperCase()  (method)
.toLowerCase()  (method)
.charAt(index)  (similar like indexing)
.indexOf('character')  (gives the index of the first occurence)
.substring(start, end) (gives the substring from the start index to .end-1 index)
.slice(start, end)  (gives the substring from the start index to end-1 index and also supports negative indexing)
.trim()  (trims the whitespace)
.replace('what to replace', 'with what to replace')  (replaces the first argument with the second argument)
.includes('what to find')  (returns true or false after trying to find the string provided)
.split('seperator')  (splits the string into a array according to the seperator)

*/

// Numbers

const num = 5;
console.log(num, typeof num);

// Number object
//const num = new Number(50);

// List of all methods
const numproto = num.__proto__;
console.log(numproto);

/*

.toString()
.toString().length
.toFixed(num)  (allows to specify the number of decimal points but returns string also rounds the float)
.toPrecision(num)  (allows to specify total num of digits)
.toExponential(num)
.toLocalString('')  (changes to lacal representation of numbers)
.valueOf()  (gives the value)

*/

// MathObject
console.log(Math);

/*

Math.sqrt(num)
Math.abs(num)
Math.round(num)
Math.ceil(num)
Math.floor(num)
Math.pow(num, num)
Math.min(num, num, num...)
Math.max(num, num, num...)
Math.random()  (random decimal from 0 to 1)

*/

// Date And Time

let date;
let dateobj;

date = new Date();
console.log(date, typeof date);

date = new Date(2021, 0, 10, 12, 30, 0);
console.log(date);

date = new Date('2020-07-10T12:30:00');
date = new Date('07/10/2021 12:30:00');
console.log(date);

date = Date.now();
console.log(date);

date = new Date('07-10-2022');
console.log(date.getTime());
console.log(date.valueOf());

date = new Date();
dateobj = date.toString();
dateobj = date.getTime();
dateobj = date.valueOf();
dateobj = date.getFullYear();
dateobj = date.getMonth();
dateobj = date.getDate();
dateobj = date.getDay();
dateobj = date.getHours();
dateobj = date.getMinutes();
dateobj = date.getSeconds();
dateobj = date.getMilliseconds();

// Date API

dateobj = Intl.DateTimeFormat('en-US').format(date);
dateobj = Intl.DateTimeFormat('en-GB').format(date);
dateobj = Intl.DateTimeFormat('default').format(date);
dateobj = Intl.DateTimeFormat('default', {month: 'long'}).format(date);
dateobj = date.toLocaleString('default', {month: "short"})
dateobj = date.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})
console.log(dateobj);
