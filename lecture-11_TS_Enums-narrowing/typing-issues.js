function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both arguments must be numbers");
    }
    return a + b;
}

const a = 15;
const b = 20;
const c = "foo";

const length = sum(a, c);
console.log(length); // "15foo"

console.log(Array.from({ length }).length); // 0


