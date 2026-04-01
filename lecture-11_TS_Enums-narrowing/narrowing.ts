type ID = string | { o: string } | null | undefined;

function foo(): ID {
  return "213";
}

const id: ID = foo();

if (typeof id === "string") {
  console.log(id.toUpperCase());
} else {
  if (id != null) {
    console.log(id.o);
  }
}

type A = { a: number };
function bar(): A {
  return { a: 1 };
}

const a = bar();
if (a instanceof Date) {
  console.log(a);
} else {
  console.log(a.a);
}

type Guarded = { value: number } | Date;
function isValueType(x: Guarded): x is Date {
    return x instanceof Date;
}

function processGuarded(): Guarded {
    return { value: 42 };
}
const guarded = processGuarded();

if (isValueType(guarded)) {
    console.log(guarded.getMilliseconds());
} else {
    console.log(guarded.value);
}