let animal = { eats: true };
let rabbit = { jumps: true };

rabbit.__proto__ = animal; // rabbit inherits from animal

console.log(rabbit.eats); // true (found in prototype)
console.log(rabbit.jumps); // true (found in rabbit)

function Deer(name) {
  this.name = name;
}

Deer.prototype = animal; // Set the prototype for new instance

Deer.prototype.foo = function() {
  console.log("foo");
}

let deer = new Deer("White Deer");
console.log(deer.eats); // true
console.log(deer.name);
console.log(deer.__proto__ === Deer.prototype);
deer.foo();
