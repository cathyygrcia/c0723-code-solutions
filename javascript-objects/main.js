const student = {
  firstName: 'Cathy',
  lastName: 'Garcia',
  age: 27,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Receptionist';
console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

const vehicle = {
  make: 'Subaru',
  model: 'WRX',
  year: 2016,
};

vehicle['color'] = 'White';
vehicle['isConvertable'] = false;
console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertable:', vehicle['isConvertable']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Charlie',
  type: 'Cat',
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
