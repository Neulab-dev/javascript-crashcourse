// Rest: collecting arguments
function sumAll(...numbers) {
  return numbers.reduce((acc, val, i) => acc + val, 0);
}

const result = sumAll(1, 2, 3);
{
  const result = sumAll(1, 2, 3, 4);
}

// Spread: unpacking an array
let arr = [3, 5, 1];
console.log(sumAll(3, 5 ,1)); // 9
console.log(sumAll(...arr));


console.log(Math.max(...arr)); // 5