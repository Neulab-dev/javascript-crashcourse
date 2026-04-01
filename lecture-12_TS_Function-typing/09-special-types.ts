function f1(a: any) {
  a.b(); // OK
}

function prediate(a: any): a is { b: () => void } {
  return typeof a === "object" && a != null && "b" in a;
}

function f2(a: unknown) {
  if (prediate(a)) {
    a.b();
  }

  (a as { b: () => void }).b();
}

// object: any non-primitive value
function f3(a: object) {
  // Can't access properties without type narrowing
  a.toString();
  a.hasOwnProperty("foo");
  a.valueOf();
}

const obj = {
  foo: "bar",
};

// Object: similar to object, but includes primitives in some contexts
function f4(a: Object) {
  // Can access Object methods like toString()
  a.toString();
}

f4(obj);

// {}: matches any value (similar to unknown but less safe)
function f5(a: {}) {
  a.toString(); // Error - {} doesn't have property b
}

// never: impossible type, function never returns
function f6(): never {
  throw new Error("This function never returns");
}

function f7(a: never) {
  // Parameter can never be satisfied
}
