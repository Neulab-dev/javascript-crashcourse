function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// const arrowGeneric = (arr: any[]): string => {
//   return "";
// }

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type never
const arr = [] as never[];
const u = firstElement([]);

const objArr = firstElement([{ name: "Alice" }, { name: "Bob" }]);



// =============================


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
const arr2 = [1, 2, 3].map((n) => n.toString());