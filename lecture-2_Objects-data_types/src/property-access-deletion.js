const keySymbol = Symbol('uniqueKey');
const dynamicKey = Symbol('uniqueKey');
console.log(keySymbol === dynamicKey);

const obj = {
    a: 1,
    b: true,
    c: "string",
    d: {
        nested: "nested value",
        prop: {
            inner: 42
        }
    },
    e: [1, 2, 3],
    [keySymbol]: "symbol value"
}

obj.b = [];
obj[dynamicKey] = "another symbol value";

// Accessing properties
console.log("Accessing properties:");
console.log("obj.a:", obj.a); // Dot notation
console.log("obj['b']:", obj['b']); // Bracket notation

const propName = 'c';
console.log("obj[propName]:", obj[propName]); // Dynamic property access

obj.key = 'newValue';
obj.key = undefined;

// Deleting properties
console.log("\nBefore deletion:", obj);
delete obj.b; // Deleting property 'b'
console.log("After deleting 'b':", obj);


delete obj.d.nested; // Deleting nested property
console.log("After deleting 'd.nested':", obj);

// Attempting to access deleted properties
console.log("Accessing deleted properties:");
console.log("obj.b:", obj.b); // undefined
console.log("obj.d.nested:", obj.d.nested); // undefined