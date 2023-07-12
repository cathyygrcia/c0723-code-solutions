const x = 2;
const y = 3;
const z = 4;

const maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

const heroes = ['Batman', 'Captain America', 'Ironman', 'Antman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwll',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr.Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Cathy Garcia';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
