function infiniteRecursion() {
  console.log("func body");
  
  return infiniteRecursion();
}

// Uncommenting the line below will cause a stack overflow
// infiniteRecursion();

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);

  // let res = 1;
  // for (let index = 1; index <= n; index++) {
  //   res *=  index;
  // }
  // return res;
}

console.log(factorial(5)); // 120