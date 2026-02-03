// Numbers
const num = 1.23456;
num.toFixed(2); // "1.23"

console.log(Math.round(num * 100) / 100); // 1.23
console.log(Number.parseInt("100px")); // 100
console.log(Number.parseInt("gergerg"));


// Strings
const phrase = "JavaScript";
console.log(phrase.includes("Script")); // true
console.log(phrase.slice(0, 4)); // "Java"

const str = "hello";
console.log(str.toUpperCase()); // "HELLO"

// Symbol (Unique hidden key)
const id = Symbol("id");
const user = { [id]: 123 };

// Conversion logic
const room = {
  number: 777,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `Room ${this.number}` : this.number;
  }
};

room.number + 5;

console.log({ a: 123}.toString()) // [object Object]