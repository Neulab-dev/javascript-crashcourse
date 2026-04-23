let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

// promise.then((result) => console.log(result)); // "Done!" after 1s

new Promise((resolve) => {
  setTimeout(() => {
    console.log("1 second passed");
    resolve(1);
  }, 0);
  console.log("waiting 1 sec");
})
  .then((result) => result * 2) // returns 2
  .then((result) => {
    console.log("waiting for long promise");
    
    return new Promise((resolve) =>
      setTimeout(() => resolve(result * 3), 5000),
    );
  })
  .then((result) => console.log(result)); // 6
