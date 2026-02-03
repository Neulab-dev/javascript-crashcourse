// filepath: /home/genasim/storage/neulab/js-crash-course/lecture-2_Objects-data_types/src/set.js
let set = new Set();
set.add('str1');
set.add(1);
set.add('str1'); // duplicate, won't be added


let weakSet = new WeakSet();
let objValue = {};
weakSet.add(objValue);

// Checking existence
console.log("Set values:");
console.log("set.has('str1'):", set.has('str1')); // true
console.log("set.has(1):", set.has(1)); // true

console.log("\nWeakSet value:");
console.log("weakSet.has(objValue):", weakSet.has(objValue)); // true

// Size of Set
console.log("\nSize of Set:", set.size); // 2 (duplicate not counted)

// Deleting entries
set.delete(1);
console.log("\nAfter deleting 1 from Set:");
console.log("set.has(1):", set.has(1)); // false

weakSet.delete(objValue);
console.log("After deleting objValue from WeakSet:");
console.log("weakSet.has(objValue):", weakSet.has(objValue)); // false

objValue = null; // Now objValue is eligible for garbage collection in WeakSet
console.log("weakSet.has(objValue):", weakSet.has(objValue)); // false
