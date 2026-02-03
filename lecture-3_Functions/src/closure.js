function makeCounter() {
  let count = 0;
  return function() {
    return ++count; // remembers 'count' from outer scope
  };
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
