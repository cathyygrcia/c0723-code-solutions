const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrices = prices.map(function (originalNumber) {
  return {
    price: originalNumber,
    salePrice: originalNumber / 2,
  };
});

console.log(salePrices);

const formattedPrices = prices.map(function (number) {
  const formattedNumber = number.toFixed(2);
  return `$${formattedNumber}`;
});

console.log(formattedPrices);
