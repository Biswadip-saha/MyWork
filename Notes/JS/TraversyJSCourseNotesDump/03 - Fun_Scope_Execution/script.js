//Functions

function sayHello() {
    console.log('Hello World');
}
sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
}
add(5, 10);

function substract(num1, num2) {
    return num2 - num1;
}
console.log(substract(5, 10));

function registerUser(user = 'Bot') {
    return user + ' is registered.';
}
console.log(registerUser('Jhon'));

function sumout(...numbers) {
    return numbers;
}
console.log(sumout(1, 2, 3));

function loginUser(user) {
    return `The User ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'Jhon',
};
console.log(loginUser(user));
console.log(
    loginUser({
        id: 2,
        name: 'Sara',
    })
);

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Arrow Funtions

const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(10, 5));

const substractArrow = (a, b) => a - b;
console.log(substractArrow(10, 5));

// Returning a object
const createObj = () => ({
    name: 'Brad',
});
console.log(createObj());

// Immediately Invoked Functions Expression

// used to reduce global variables pollution by linking more than one js  scripts and defining a same variable in both script
// (function (){

// })();

// Execution Context

// Call Stack