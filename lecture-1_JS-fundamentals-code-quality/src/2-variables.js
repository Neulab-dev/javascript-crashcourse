console.group("Variables & Data Types");

var variable = 1;
variable = "Now I'm a string";

variable = true; // Boolean
////////

let numberVar = 42; // Number
numberVar = 3.14; 
const constant = "I can't be changed"; // String
constant = "Trying to change"; // Error

// --- var (Function Scope) ---
// 'var' is hoisted and functionally scoped.
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable!
    console.log("Inside if (var):", x); // 2
  }
  console.log("Outside if (var):", x); // 2 (variable was overwritten)
}
varTest();

// --- let (Block Scope) ---
// 'let' is block scoped (ES6+).
function letTest() {
  let y = 1;
  if (true) {
    let y = 2; // Different variable
    console.log("Inside if (let):", y); // 2
  }
  console.log("Outside if (let):", y); // 1 (original remains)
}
letTest();

// --- const (Block Scope, Immutable Binding) ---
const PI = 3.14159;
// PI = 3; // Type Error: Assignment to constant variable.

// Edge Case: const with Objects
const user = { name: "Alice" };
const shallowCopy = user; // Reference copy
const copyUser = structuredClone(user); // To avoid mutation issues in complex objects

user.name = "Bob"; // Allowed!
console.log("Const object mutation:", user);
// user = {}; // Error
console.log("Shallow copy reflects change:", shallowCopy);
console.log("Cloned user object:", copyUser);

console.groupEnd();

var variable;
var number = 10.12131;

const symbol = Symbol("uniqueIdentifier");

const obj = {
  key: "value",
  key1: true, 
}

const obj1 = obj;
obj.key = "newValue";

console.log("obj1 after obj modification:", obj1);
console.log();
