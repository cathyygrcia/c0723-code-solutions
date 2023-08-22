const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach(function (number) {
  console.log(number);
});

values.forEach(function (number, index) {
  const reverseIndex = values.length - 1 - index;
  console.log(values[reverseIndex]);
});
