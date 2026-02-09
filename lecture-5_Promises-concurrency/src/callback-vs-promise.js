const fs = require("fs");
const fsPromise = require("fs").promises;

// Read file asynchronously with callback
fs.readFile("non-existant.js", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Successful read");
});

fsPromise.readFile("callback.js", "utf8")
  .then((data) => {
    console.log("Successful read");
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });
