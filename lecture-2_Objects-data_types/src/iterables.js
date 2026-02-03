// Built-in iterables: Arrays
const arr = [1, 2, 3];
for (const value of arr) {
    console.log(value);
}

// Built-in iterables: Strings
const str = "hello";
for (const char of str) {
    console.log(char);
}

// 2. Custom iterable object
const customIterable = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

for (const value of customIterable) {
    console.log(value);
}

// 3. Spread operator works on any iterable
const arrSpread = [...arr];
const strSpread = [...str];
// Note: Plain objects are NOT iterable, so spreading them directly won't work
// const objSpread = [...{ a: 1, b: 2 }]; // Interpreter Error
const objSpread = Object.values({ a: 1, b: 2 }); // Convert to iterable first
const customIterableSpread = [...customIterable];

console.log(arrSpread); // [1, 2, 3]
console.log(strSpread); // ['h', 'e', 'l', 'l', 'o']
console.log(objSpread); // [['a', 1], ['b', 2]]
console.log(customIterableSpread); // [10, 20, 30]