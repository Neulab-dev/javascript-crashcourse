let dictionary = Object.create(null);

dictionary.hello = "Greetings";
console.log(dictionary.toString); // undefined (no prototype)

let proto = { hi: "there" };
let obj = Object.create(proto); // Create new object with 'proto' as prototype
console.log(obj.hi); // "there" (inherited from prototype)
console.log(obj.toString())

console.log(Object.getPrototypeOf(obj) === proto);
console.log(obj.__proto__ === proto);

