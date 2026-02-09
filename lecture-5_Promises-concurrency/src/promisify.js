const { promisify } = require('node:util'); // Node.js has a built-in promisify function

// function promisify(f) {
//   return function (...args) { // return a wrapper-function (*)
//     return new Promise((resolve, reject) => {
//       function callback(err, result) { // our custom callback for f (**)
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       }

//       args.push(callback); // append our custom callback to the end of f arguments

//       f.call(this, ...args); // call the original function
//     });
//   };
// }

// usage:
const load = (src, callback) => {
  setTimeout(() => {
    console.log(`Script ${src} loaded`);
    callback(null, src);
  }, 1000);
};

load("path/script.js", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

let loadPromise = promisify(load);
loadPromise("path/script.js").then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
});
// loadPromise(...).then(...);