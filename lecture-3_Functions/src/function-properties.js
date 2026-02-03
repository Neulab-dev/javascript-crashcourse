function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet.name); // Output: "greet"

// Named function expression
const add = function addition(a, b) {
  return a + b;
};
console.log(add.name); // Output: "addition" (uses the function expression name)

// Anonymous function expression
const multiply = function (a, b) {
  return a * b;
};
const subtract = (a, b) => a - b;

console.log(multiply.name); // Output: "multiply" (derived from variable name)
console.log(subtract.name); // Output: "subtract" (derived from variable name)

// ===========================

function noParams() {}
console.log(`No params length: ${noParams.length}`); // Output: 0

function oneParam(a) {}
console.log(`One param length: ${oneParam.length}`); // Output: 1

function threeParams(a, b, c) {}
console.log(`Three params length: ${threeParams.length}`); // Output: 3

// IMPORTANT: Default parameters and rest parameters are NOT counted
function withDefault(a, b = 10) {}
console.log(`With default length: ${withDefault.length}`); // Output: 1 (only 'a' is counted, 'b' has default)

function withRest(a, b, ...rest) {}
console.log(`With rest length: ${withRest.length}`); // Output: 2 (rest parameter is NOT counted)

function destructuredParams({ x, y }) {}
console.log(`Destructured params length: ${destructuredParams.length}`); // Output: 1 (counts as single parameter)
 // Just to show usage
// // ===========================

function sumAll() {
  console.log(arguments); // arguments object

  // let sum = 0;
  // for (let i = 0; i < arguments.length; i++) {
  //   sum += arguments[i];
  // }

  // return sum;

  // could be written as:
  // return Array.from(arguments).reduce((acc, val) => acc + val, 0);
  return [...arguments].reduce((acc, val) => acc + val, 0);

  // or as:
  // Array.from(arguments).forEach((arg) => (sum += arg));
  // return sum;
}

console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100

// // Converting arguments to array
function printArguments() {
  // Method 1: Array.from()
  const argsArray1 = Array.from(arguments);
  console.log(argsArray1);

  // Method 2: Spread operator
  const argsArray2 = [...arguments];
  console.log(argsArray2);
}

printArguments("a", "b", "c"); // All methods output: ['a', 'b', 'c']

// // Mixing declared parameters with arguments
function mixed(a, b) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("all arguments:", arguments);
  console.log("arguments.length:", arguments.length);
}

mixed(1, 2, 3, 4); // 'a' is 1, 'b' is 2, but arguments has [1, 2, 3, 4]
