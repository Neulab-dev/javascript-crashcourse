// // Global context
// // console.log(this); // In browsers: Window, in Node: global object

// function regularFunction() {
//   console.log(this); // Window/global object
// }
// // regularFunction();

// function strictFunction() {
//   "use strict";
//   console.log(this); // undefined
// }
// strictFunction();

// const obj = {
//   name: "Alice",
//   greet() {
//     console.log(this.name); // 'Alice' - this refers to obj
//   },
// };
// obj.greet();

// const objWithArrow = {
//   name: "Bob",
//   greet: () => {
//     console.log(this.name); // undefined - arrow function uses outer this
//   },
// };
// objWithArrow.greet();

// const objMixed = {
//   name: "Charlie",
//   greet() {
//     const inner = () => {
//       console.log(this.name); // 'Charlie' - inherits this from greet
//     };
//     inner();
//   },
// };
// objMixed.greet();

// const person = {
//   name: "Grace",
//   sayName() {
//     console.log(this.name);
//   },
// };
// const sayName = person.sayName;
// sayName(); // undefined - this is lost

// const boundSayName = person.sayName.bind(person);
// boundSayName(); // 'Grace'

// const brokenUser = {
//   name: "Ivy",
//   getName: () => this.name, // this is global, not the object
// };

function baz(param1, param2) {
    console.log(arguments); // [] or [5, 10] or [1, 2, 3, 4, 5]
    
    // execute statements
    console.log("execute in func body");

    // return a value at some point (optional)
    return param1 + param2;
}
baz();
baz(5, 10);
baz(1, 2, 3, 4, 5);
console.log(baz.length);

let boo = function(x, y) {
    console.log(arguments);
    return x * y;
}
console.log(boo.name);


(new Error("random error")).toString();

// try {
//   let data = JSON.parse("{invalid}"); 
// } catch (err) {
//   console.log("Error caught: " + err.message);
// } finally {
//   console.log("Cleanup finished.");
// }