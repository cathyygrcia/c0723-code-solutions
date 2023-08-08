function ExampleConstructor() {}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);
const instance = new ExampleConstructor();
console.log(instance);
const isInstanceExample = instance instanceof ExampleConstructor;
console.log(isInstanceExample);
