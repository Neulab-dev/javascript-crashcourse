
try {
  // Code that might throw an error
  const result = 10 / 2;
  console.log("Result:", result); // This will execute

  console.log("This won't execute");
  console.log("something");
  console.log("something");
  console.log("something");

  throw new Error("Something went wrong!");
} catch (error) {
  // Catches any error thrown in try block
  console.log("Caught error:", error.message);
}

console.log("Program continues..."); // Still executes

const err = new TypeError("This is a type error example");

try {
  JSON.parse("{ invalid json }");
} catch (error) {
  console.log("Error name:", error.name); // "SyntaxError"
  console.log("Error message:", error.message); // Detailed message
  console.log("Error stack:", error.stack); // Full stack trace
} finally {
  console.log("Finally block executed");
}

throw err;
