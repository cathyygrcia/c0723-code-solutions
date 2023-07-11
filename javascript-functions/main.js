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
  const personsFirstName = {
    firstName: 'Cathy',
    lastName: 'Garcia',
  };
  return personsFirstName.firstName;
}
const getFirstNameResult = getFirstName();
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const getLastElement = ['propane', 'and', 'propane', 'accessories'];
  return getLastElement[getLastElement.length - 1];
}
const getLastElementResult = getLastElement();
console.log('getLastElement Result:', getLastElementResult);
