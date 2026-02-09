function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate success or failure
      if (success) {
        resolve("Operation successful!");
      } else {
        reject(new Error("Operation failed!"));
      }
    }, 1000);
  });
}

try {
  try {
    // throw new Error("An error occurred!");
  } catch (error) {
    // Handle the error
    // throws new Error("Error in catch block!");
  }
} catch (error) {
  // Handle the error from the catch block
}

doSomething()
  .then((result) => {
    console.log(result);
  })
  .then(
    () => new Promise((resolve) => setTimeout(() => resolve(result * 3), 5000))
    .catch((error) => {}),
  )
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .then(() => {
    throw new Error("Error in then block!");
  })
  .catch((error) => {
    console.error("Caught error in then block:", error.message);
  })
  .finally(() => {
    console.log("Operation completed.");
  });

  