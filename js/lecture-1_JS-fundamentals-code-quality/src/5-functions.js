console.group("Functions");

var varVar;

// --- Hoisting ---
// Function Declaration: Hoisted fully. Can be called before definition.
console.log("Hoisted call:", add(2, 3));
console.log(varVar);



varVar = "I'm a var variable";
console.log(varVar);

const letVar = undefined;
console.log(letVar);

// letVar = "I'm a let variable";
console.log(letVar);


function add(a, b) {
  return a + b;
}
// function add(a) { return a + 10; }
function addOneArg(a) {
  return a + 10;
}

// Function Expression: Variable is hoisted (if var) but assignment is not.
// console.log(multiply(2, 3)); // Error: Cannot access 'multiply' before initialization
const multiply = function (a, b) {
  return a * b;
};
multiply(2, 3);

// --- Arrow Functions ---
const square = () => {
  // if (true) {
  //     // logic
  //     return;
  // }

  console.log("Inside arrow function");
  return;
};
console.log("Arrow function:", square(4));

// Default Values
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log("Default value:", greet());
console.log("Provided value:", greet("Sam"));

// --- Closures ---
// A function remembering its lexical scope even when executed outside that scope.
function createCounter() {
  var a = 1;

  let count = 0; // Private variable enclosed
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log("Closure 1:", counter1()); // 1
console.log("Closure 1:", counter1()); // 2

const counter2 = createCounter();
console.log("Closure 2:", counter2()); // 1 (Independent state)

// --- Pure Functions & Side Effects ---
// Pure: Same input -> Same output, no side effects.
const pureAdd = (a, b) => a + b;

let constant = 10;

function boo() {
  constant += 1; // Side Effect
  let internal = "";

  ///
}

boo(1, 2);
boo(1, { a: 2 });

// Impure: Modifies external state.
let total = 0;
const addToTotal = (val) => {
  total += val; // Side Effect
  return total;
};

console.groupEnd();

[].
