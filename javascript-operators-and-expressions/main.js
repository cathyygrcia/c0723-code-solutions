const width = 2;
const height = 7;
const area = width * height;

console.log('Value of area:', area);
console.log('Type of area:', typeof area);

const bill = 3;
const payment = 5;
const change = payment - bill;

console.log('Value of:', change);
console.log('Type of:', typeof change);

const quizzes = 4;
const midterm = 2;
const final = 1;
const grade = (quizzes + midterm + final) / 3;

console.log('Value of grade:', grade);
console.log('Type of grade:', typeof grade);

const firstName = 'Cathy';
const lastName = 'Garcia';
const fullName = firstName + ' ' + lastName;

console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

const ph = 8;
const isAcidic = ph < 7;

console.log('Value of isAcidic:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const headCount = 100;
const isSparta = headCount === 300;

console.log('Value of isSparta:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let motto = fullName;
motto += ' ' + 'is the GOAT';

console.log('Value of motto:', motto);
console.log('Type of motto:', typeof motto);
