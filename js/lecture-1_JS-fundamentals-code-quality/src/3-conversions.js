console.group('Type Conversions');

// --- Explicit Conversion ---
const numStr = "42";
const explicitNum = Number(numStr);
console.log('Explicit Number():', explicitNum, typeof explicitNum);

// --- Implicit/Utility Hacks ---

// 1. String to Number using unary +
const fastNum = +"100";
console.log('Unary + conversion:', fastNum, typeof fastNum);

const invalidNum = +"hello";
console.log('Unary + invalid:', invalidNum); // NaN

// 2. Value to String using + ""
const val = 123;
const strVal = val + "";
console.log('Wait + "" conversion:', strVal, typeof strVal);

// 3. To Boolean using double negation !!
// First ! negates and converts to boolean, second ! flips it back to original truthiness
console.log('!! "text":', !!"text"); // true
console.log('!! 0:', !!0);           // false
console.log('!! null:', !!null);     // false
console.log('!! {}:', !!{});         // true (Objects are truthy)

// Edge Case: Adding arrays/objects
console.log('[] + []:', [] + []); // "" (Empty string)
console.log('[] + {}:', [] + {}); // "[object Object]"
// console.log({} + []); // 0 in some REPLs/contexts depending on interpretation as block vs object

console.groupEnd();

const a = "";
if (a) {
    
}