console.log('Hello from node.js');

async function getUser() {
    const response = await fetch('https://api.github.com/users/biswadip-saha')
    const data = await response.json()
    console.log(data);
}

// getUser()

//

const {message, capitaliseWords} = require('./utils')
console.log(message);
console.log(capitaliseWords('hello everyone'));

const Person = require('./Person')
const person1 = new Person('Jhon',30)
person1.greet()

//

const axios = require('axios')
async function getPost() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(res.data);
}

getPost()

//

