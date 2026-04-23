console.group('Operators & Control Flow');

// --- Equality: == vs === ---
console.log('5 == "5":', 5 == "5");   // true (Type Coercion happens)
console.log('5 === "5":', 5 === "5"); // false (Strict equality check: type + value)

console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false

// --- Loops (for / while) ---
console.log('-- Loop Output --');
for(let i=0; i<3; i++) {
    console.log(`For loop idx: ${i}`);
}

for (var j = 0; j < 3; j++) {
    console.log(`For loop with var idx: ${j}`);
}
console.log('Final j after loop (var):', j); // j is accessible here due to var scoping

while(1 > 3) {
    console.log("This won't run");
}

if (1 > 3) {
    console.log("This won't run either");
} else if (2 > 1) {
    console.log("This will run");
} else {

}

var a = 1;
switch (a) {
    case 1:
        console.log("Case 1");
        break
    case 2:
        console.log("Case 2");
        break;
    default:
        console.log("Default case");
}

"1" == 1 // true
"1" === 1 // false

// --- Object Comparison ---
// Objects are compared by reference, not value.
const objA = { id: 1 };
const objB = { id: 1 };
const objC = objA;

console.log('Different objects {id:1} == {id:1}:', objA == objB); // false (different memory address)
console.log('Same reference objA === objC:', objA === objC); // true

console.groupEnd();