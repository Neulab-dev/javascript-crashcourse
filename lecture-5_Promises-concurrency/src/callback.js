function foo() {
  setTimeout(() => {
    console.log("bar");
  }, 0);


  console.log("foo");
}

// foo();

// Callback hell

// function callbackHell() {
//   setTimeout(() => {
//     console.log("Doing something...");
//       console.log("Doing something else...");

//       setTimeout(() => {
//         console.log("Doing another thing...");

//         setTimeout(() => {
//           console.log("All done!");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

// callbackHell();

// // We can refactor this code using named functions to "avoid" callback hell

function doSomething(callback) {
  setTimeout(() => {
    console.log("Doing something...");
    callback();
  }, 1000);
}

function doSomethingElse(callback) {
  setTimeout(() => {
    console.log("Doing something else...");
    callback();
  }, 1000);
}

function doAnotherThing(callback) {
  // logic

  setTimeout(() => {
    console.log("Doing another thing...");
    callback();
  }, 1000);
}

// Callback hell example
doSomething(() => {
  doSomethingElse(() => {
    doAnotherThing(() => {
      console.log("All done!");
    });
  });
});

doSomething(() => console.log("Done with something!"));
