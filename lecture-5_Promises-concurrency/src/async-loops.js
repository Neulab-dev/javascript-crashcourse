// write a snippet that calls an async function in a loop and waits for all of them to finish using await in for-loop
async function asyncFunction(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async function ${i} done`);
      resolve(i);
    }, 1000);
  });
}

async function main() {
  // [1,2,3,4,5].forEach(async (i) => {
  //   await asyncFunction(i);
  // });

  for (let i = 0; i < 5; i++) {
    await asyncFunction(i);
  }
  console.log("All async functions done");
}

// main();

// Better way to do this is to use Promise.all with map
// note: top-level await is not supported in all environments (mainly Node.js), Bun supports it, but general idea is the same

(async function () {
  await Promise.all([0, 1, 2, 3, 4].map((i) => asyncFunction(i))).then(() => {
    console.log("All async functions done");
  });
})();
