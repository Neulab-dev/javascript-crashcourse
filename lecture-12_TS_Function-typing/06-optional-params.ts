function foo(x: number, y?: number) {
  console.log(x);
  console.log(y);
}

// foo(1, 2);
// foo(1);

function foo2(x: number, y: number | undefined) {
  console.log(x);
  console.log(y);
}

// foo2(1, 2);
// foo2(1, undefined);

function optional_callback(x: number, callback: (x?: number) => void) {
  console.log("optional_callback x: ", x);
  callback(x);
  callback();
}

optional_callback(1, (x) => {
  console.log("callback x: ", x);
});

optional_callback(1, () => {
  console.log("no x");
});
