function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Result:', convertMinutesToSecondsResult);

function greet(name) {
  const greeting = 'Hello ';
  return greeting + name;
}
const greetResult = greet('Cathy');
console.log('greet Result:', greetResult);

function getArea(width, height) {
  return width * height;
}
const getAreaResult = getArea(17, 42);
console.log('getArea Result:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
const person = {
  firstName: 'Cathy',
  lastName: 'Garcia',
};
const getFirstNameResult = getFirstName(person);
console.log('getFirstName Result:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
const array = ['propane', 'and', 'propane', 'accessories'];
const getLastElementResult = getLastElement(array);
console.log('getLastElement Result:', getLastElementResult);
