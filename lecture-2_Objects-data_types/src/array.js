const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// push() - adds element to the end
numbers.push(10);
console.log(numbers); // [3, 1, 4, 1, 5, 9, 2, 6, 10]

// pop() - removes last element
const last = numbers.pop();
console.log(last); // 10

// length - gets the number of elements
console.log(numbers.length); // 8

// join() - converts array to string
const str = numbers.join(', ');
console.log(str); // "3, 1, 4, 1, 5, 9, 2, 6"

// toSorted() - returns a sorted copy
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers); // [1, 1, 2, 3, 4, 5, 6, 9]
console.log(numbers); // Original array remains unchanged

// sort() - sorts array in-place
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// reverse() - reverses array in-place
numbers.reverse();
console.log(numbers); // [9, 6, 5, 4, 3, 2, 1, 1]


const arr = [1, 2, 3, 4, 5];

// map() - transforms each element
const doubled = arr.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

function isEven(num) {
    return num % 2 === 0;
}

// filter() - keeps elements that pass a test
const evens = arr.filter(isEven);
console.log(evens); // [2, 4]

// reduce() - reduces array to a single value
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// forEach() - executes function for each element
arr.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8, 10

console.log(numbers);