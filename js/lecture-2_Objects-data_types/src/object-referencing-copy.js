// Reference behavior
let user = { name: "Alice", foo: 4, details: { age: 25 } };
let admin = user; // points to the same memory address
admin.name = "Bob";
console.log(user.name); // "Bob"

// Cloning (Shallow copy)
let clone = Object.assign({}, user);
let spreadClone = { ...user };

clone.name = "Charlie";
console.log(user.name); // "Bob"
console.log(clone.name); // "Charlie"

// Deep cloning
let original = {
  name: "Dave",
  address: {
    city: "Wonderland",
  },
};

let deepClone = structuredClone(original);
deepClone.address.city = "Dreamland";

console.log(original.address.city); // "Wonderland"
console.log(deepClone.address.city); // "Dreamland"
