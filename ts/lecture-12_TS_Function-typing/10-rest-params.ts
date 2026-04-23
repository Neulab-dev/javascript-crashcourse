function fn(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

const lambda: (...args: number[]) => number = (...args: number[]) => {
  return args.reduce((a, b) => a + b, 0);
}

fn(1, 2, 3); // okay
fn(); // okay

//@ts-expect-error
fn("oops"); // error (editor may not show this but compiler will error for sure, run it)

//@ts-expect-error
lambda("qwdqwd"); // error

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
// const angle = Math.atan2(...args);

// Inferred as 2-length tuple
const args1 = [8, 5] as const;
const angle1 = Math.atan2(...args1); // OK