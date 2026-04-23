const person = {
  name: "Alice",
  age: 30,
  greet: function (greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
  },
  greet2: (greeting, punctuation) => {
    return `${greeting}, I'm ${this.name}${punctuation}`;
  },
};
// Test the function
console.log(person.greet("Hello", "!")); // "Hello, I'm Alice!"

function introduce( city, country) {
  return `${this.name} is ${this.age} years old, from ${city}, ${country}`;
}

const personObj = { name: "Bob", age: 25 };

// Using call() to set 'this' and pass arguments
console.log(introduce.call(personObj, "Paris", "France"));
// Output: "Bob is 25 years old, from Paris, France"

// Borrowing methods from another object
const anotherPerson = { name: "Carol", age: 28 };
console.log(person.greet.call(anotherPerson, "Hi", "?"));
console.log(person.greet2.call(anotherPerson, "Hi", "?"));
// Output: "Hi, I'm Carol?"

// ====================================

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [5, 10, 15];

// Using apply() - second argument is an array
console.log(sum.apply(null, numbers)); // Output: 30

// Finding max number using apply()
const scores = [45, 89, 23, 56, 92];
const maxScore = Math.max.apply(null, scores);
// const maxScore = Math.max.call(null, ...scores);
console.log("Max score:", maxScore); // Output: 92

// With 'this' context
function describeScores() {
  return `${this.name} scored: ${Math.max.apply(null, arguments)}`;
}

const student = { name: "David" };
console.log(describeScores.apply(student, [72, 88, 95]));
// Output: "David scored: 95"

// ====================================

// Basic bind - fixes 'this' context
const greetAlice = person.greet.bind(personObj);
console.log(greetAlice("Hey", "."));
// Output: "Hey, I'm Bob."

// Partial application - preset some arguments
function multiply(a, b, c) {
  return a * b * c;
}

const double = multiply.bind(null, 2); // Fix first argument to 2
console.log(double(3, 4)); // Output: 24 (2 * 3 * 4)

const doubleAndTriple = multiply.bind(null, 2, 3); // Fix first two arguments
console.log(doubleAndTriple(4)); // Output: 24 (2 * 3 * 4)

// Practical: bind for event handlers
function Button(label) {
  this.label = label;
  this.clickCount = 0;

  this.handleClick = function () {
    this.clickCount++;
    console.log(`${this.label} clicked ${this.clickCount} times`);
  };
}

const submitBtn = new Button("Submit");
submitBtn.handleClick.bind({})(); // control example

const handler = submitBtn.handleClick; // WRONG - loses 'this' context
handler(); // Would log: "undefined clicked NaN times" - 'this' is lost!

const correctHandler = submitBtn.handleClick.bind(submitBtn); // CORRECT
correctHandler(); // Would log: "Submit clicked 1 times"


function logFunctionCall(fn) {
  return function(...args) {
    console.log(`Calling function: ${fn.name} with arguments:`, args);
    return fn.apply(this, args);
  };
}

function add(x, y) {
  return x + y;
}

const loggedAdd = logFunctionCall(add);
console.log(loggedAdd(3, 4)); // Logs function call and returns 7