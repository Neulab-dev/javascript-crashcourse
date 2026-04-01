function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  a.b();
}

// object: any non-primitive value
function f3(a: object) {
  // Can't access properties without type narrowing
  a.b(); // Error
}

// Object: similar to object, but includes primitives in some contexts
function f4(a: Object) {
  // Can access Object methods like toString()
  a.toString();
}

// {}: matches any value (similar to unknown but less safe)
function f5(a: {}) {
  a.b(); // Error - {} doesn't have property b
}

// never: impossible type, function never returns
function f6(): never {
  throw new Error("This function never returns");
}

function f7(a: never) {
  // Parameter can never be satisfied
}