const path = require('path');
const myFilePath = 'subfolder/anotherfolder/index.js';

// basename()

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');
console.log(base1);
console.log(base2);

//extname()

const ext = path.extname(myFilePath);
console.log(ext);

// dirname()

const dir = path.dirname(myFilePath);
console.log(dir);

// join() // relative to the folder you are in

const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(myPath);

// resolve() // absolute path

const myPathResolve = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPathResolve);

// __dirname() and __filename()

console.log(__dirname);
console.log(__filename);