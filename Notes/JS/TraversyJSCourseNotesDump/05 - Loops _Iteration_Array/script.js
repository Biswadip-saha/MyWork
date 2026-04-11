// For loop
// We can nest for loops

// for ([initialExpression]; [conditionalExpression]; [incrementExpression]){
//     statement;
// }
for (let i = 0; i < 10; i++) {
    console.log('Number ' + i);
}

// Loop through an array
const names = ['Brad', 'Bob', 'Sam'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Break

for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking ...');
        break;
    }
    console.log(i);
}

// Continue

for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Not printing 15');
        continue;
    }
    console.log(i);
}

// While And DoWhile loop
// We can nest while loops

let i = 0;
while (i <= 20) {
    console.log('Number ' + i);
    i++;
}

let j = 0;
do {
    console.log('Number ' + i);
    j++;
} while (j <= 20);

// For of Loop
// provides the value

const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'tom' }, { name: 'steve' }];
const string = 'string';

for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user);
}

for (const letter of string) {
    console.log(letter);
}

// For in Loop
// provides the keys

const color = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'purple',
    color5: 'teal',
};

for (const key in color) {
    console.log(key, color[key]);
}

// ForEach

const socials = ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'];

socials.forEach(function (item) {
    console.log(item);
});

// OR

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// OR

function logSocials(social) {
    console.log(social);
}
socials.forEach(logSocials);

// Array.Filter

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = numbers.filter(function (number) {
    return number % 2 === 0;
});

// OR

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNum);
console.log(evenNumbers);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const retail = companies.filter((company) => company.category === 'Retail');
console.log(retail);

const oldCompany = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
);
console.log(oldCompany);

const longLast = companies.filter(
    (company) => company.end - company.start >= 10
);
console.log(longLast);

// Array.Map

const doubleNum = numbers.map((number) => number * 2);
console.log(doubleNum);

const compName = companies.map((company) => company.name);
console.log(compName);

const compInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(compInfo);

// Chain Map methods

const sqrAndDoub = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);
console.log(sqrAndDoub);

// Array.reduce

let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

// OR

sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
