// IF statement

const x = 5;
const y = 10;

if (x == y) {
    console.log('This is true');
} else if (x > y) {
    console.log('X is bigger');
} else {
    console.log('Y is bigger');
}

// Switches

const d = new Date();
const mn = d.getMonth();

switch (mn) {
    case 1:
        console.log('It is Jan');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Its not 1 2 or 3');
}

// Truthy And Falsy Values

const email = 'test@test.com';
// string with anything in it is True
if (email) {
    console.log('You passed an email');
}

// Falsy values: false, 0, "" or '', null, undefined, NaN
const z = NaN;
if (z) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

// Checking for empty arrays
const post = ['Post 1', 'Post 2'];
if (post.length > 0) {
    console.log('List Post');
} else {
    console.log('No post to list');
}

// Checking for empty objects
const user = {
    name: 'Brad',
};
if (Object.keys(user).length > 0) {
    console.log('List users');
} else {
    console.log('No user');
}

// Logical Operators

// && (and), || (or)
// && - Will return first falsy value or the last value
// || - Will return first truthy value or the last value
// ?? - Returns the right side operand when the left is null or undefined

// Logical Assignment operators

// ||= assigns the right side value only if the left is a falsy value. (most useful)
// &&= assigns the right side value only if the left is a truthy value.
// ??= assigns the right side value only if the left is a null or undefined.

// Ternary Operator

const age = 13;
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

const canVote = age >= 18 ? true : false;
console.log(canVote);
// for passing multiple things to do use parenthesis and comma combination
