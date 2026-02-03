class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10);
console.log(arr.isEmpty()); // false

let filtered = arr.filter(item => item > 5); // Returns PowerArray
console.log(filtered.isEmpty()); // false
console.log([].isEmpty);

class PositiveNumber extends Number {
  constructor(value) {
    if (value < 0) {
      super(0);
    }
    super(value);
  }

  isPositive() {
    return this.valueOf() > 0;
  }
}

let num = new PositiveNumber(10);
console.log(num.isPositive()); // true

console.log("array instanceof: ",[] instanceof Array);
console.log("power array instanceof: ", [] instanceof PowerArray);
