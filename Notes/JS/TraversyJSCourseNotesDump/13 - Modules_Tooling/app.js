// import capitaliseWords from "./modules/utils.js";
import { capitaliseWords, message } from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitaliseWords('hello world'));
console.log(message);

const person1= new Person('Jhon', 19)
person1.greet()