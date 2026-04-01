function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));

// =============================

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
const arr1 = combine([1, 2, 3], ["hello"]);
const arr2 = combine<string | number>([1, 2, 3], ["hello"]);
