let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1'); // distinct from '1'

let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, 'value associated with objKey');

// Accessing values
console.log("Map values:");
console.log("map.get('1'):", map.get('1')); // 'str1'
console.log("map.get(1):", map.get(1)); // 'num1'

console.log("\nWeakMap value:");
console.log("weakMap.get(objKey):", weakMap.get(objKey)); // 'value associated with objKey'

// Checking existence
console.log("\nMap has key '1':", map.has('1')); // true
console.log("WeakMap has objKey:", weakMap.has(objKey)); // true

// Deleting entries
map.delete(1);
console.log("\nAfter deleting key 1 from Map:");
console.log("map.has(1):", map.has(1)); // false

weakMap.delete(objKey);
console.log("After deleting objKey from WeakMap:");
console.log("weakMap.has(objKey):", weakMap.has(objKey)); // false

// Size of Map
console.log("\nSize of Map:", map.size); // 1

objKey = null; // Now objKey is eligible for garbage collection in WeakMap
console.log("Does WeakMap have objKey:", weakMap.has(objKey)); // false
