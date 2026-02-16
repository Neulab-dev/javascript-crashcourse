// ============================================================================
// PROMISIFICATION - Complete Examples
// Converting Callback-Based Functions to Promise-Based Functions
// ============================================================================

console.log("=== PROMISIFICATION EXAMPLES ===\n");

// ============================================================================
// 1. THE PROBLEM - Traditional Callback Pattern
// ============================================================================

console.log("1. TRADITIONAL CALLBACK PATTERN");
console.log("--------------------------------");

// Original callback-based function
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

function callbackFunction(error = null, script = null) {
  if (error) {
    console.error('Error loading script:', error.message);
  } else {
    console.log('Script loaded:', script.src);
  }
}

loadScript('path/script.js', callbackFunction);

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));
//
//     document.head.append(script);
//   });
// }
//
// loadScript('path/script.js')
//     .then(script => console.log('Script loaded:', script.src))
//     .catch(err => console.error('Error loading script:', err));

// Usage with callbacks (the old way)
// loadScript('path/script.js', (err, script) => {
//   if (err) {
//     console.error('Error loading script:', err);
//   } else {
//     console.log('Script loaded:', script.src);
//   }
// });

console.log("Callback pattern: function(src, callback)");
console.log("Callback signature: callback(err, result)");
console.log("");

// ============================================================================
// 2. MANUAL PROMISIFICATION - Single Function
// ============================================================================

console.log("2. MANUAL PROMISIFICATION");
console.log("-------------------------");

// Promisified version of loadScript
let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// Usage with promises (the new way)
loadScriptPromise('path/script.js')
  .then(script => {
    console.log('Script loaded:', script.src);
  })
  .catch(err => {
    console.error('Error loading script:', err);
  });

console.log("Promise pattern: function(src) returns Promise");
console.log(" Cleaner error handling");
console.log(" Chainable operations");
console.log("");

// ============================================================================
// 3. CREATING A PROMISIFY HELPER - Basic Version
// ============================================================================

console.log("3. BASIC PROMISIFY HELPER");
console.log("-------------------------");

// Generic promisify function for standard callbacks (err, result)
function promisify(f) {
  return function (...args) { // return a wrapper-function
    return new Promise((resolve, reject) => {
      function callback(err, result) { // our custom callback for f
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // append our custom callback to the end
      f.call(this, ...args); // call the original function
    });
  };
}

const loadScriptPromiseAutomatic = promisify(loadScript);

// Example: Simulated file read function with callback
function readFile(filename, callback) {
  setTimeout(() => {
    if (filename.endsWith('.txt')) {
      callback(null, `Content of ${filename}`);
    } else {
      callback(new Error('Invalid file type'));
    }
  }, 100);
}

// Promisify it
const readFilePromise = promisify(readFile);

// Usage
readFilePromise('example.txt')
  .then(content => console.log(' File content:', content))
  .catch(err => console.error('✗ Error:', err.message));

console.log("Promisified readFile with helper function");
console.log("");

// ============================================================================
// 4. ADVANCED PROMISIFY - Multiple Results
// ============================================================================

console.log("4. ADVANCED PROMISIFY - Multiple Results");
console.log("-----------------------------------------");

// Advanced promisify that can handle multiple callback results
function promisifyAdvanced(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // capture all results
        if (err) {
          reject(err);
        } else {
          // resolve with all callback results if manyArgs is specified
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);
      f.call(this, ...args);
    });
  };
}

// Example: Function with multiple results
function getUserData(userId, callback) {
  setTimeout(() => {
    if (userId > 0) {
      callback(null, 'John Doe', 'john@example.com', 25);
    } else {
      callback(new Error('Invalid user ID'));
    }
  }, 100);
}

// Promisify with single result (default)
const getUserDataSingle = promisifyAdvanced(getUserData);

getUserDataSingle(1)
  .then(name => console.log(' Single result (name only):', name))
  .catch(err => console.error('✗ Error:', err.message));

// Promisify with multiple results
const getUserDataMultiple = promisifyAdvanced(getUserData, true);

getUserDataMultiple(2)
  .then(([name, email, age]) => {
    console.log(' Multiple results:');
    console.log('  Name:', name);
    console.log('  Email:', email);
    console.log('  Age:', age);
  })
  .catch(err => console.error('✗ Error:', err.message));

console.log("");

// ============================================================================
// 5. REAL-WORLD EXAMPLE - Simulated Database Query
// ============================================================================

console.log("5. REAL-WORLD EXAMPLE - Database Query");
console.log("---------------------------------------");

// Simulated database query with callback
function dbQuery(sql, callback) {
  setTimeout(() => {
    if (sql.includes('SELECT')) {
      callback(null, [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]);
    } else {
      callback(new Error('Invalid SQL query'));
    }
  }, 150);
}

dbQuery('SELECT * FROM users', (err, users) => {
  if (err) {
    // ...
  } else {
    console.log(' Users from database:', users);
  }
})

// Promisify the database query
const dbQueryPromise = promisify(dbQuery);

// Usage with async/await (modern approach)
async function fetchUsers() {
  try {
    const users = await dbQueryPromise('SELECT * FROM users');
    console.log(' Users from database:', users);
  } catch (err) {
    console.error('✗ Database error:', err.message);
  }
}

fetchUsers();
console.log("");

// ============================================================================
// 6. CHAINING PROMISIFIED FUNCTIONS
// ============================================================================

console.log("6. CHAINING PROMISIFIED FUNCTIONS");
console.log("----------------------------------");

// Multiple callback-based functions
function fetchUserId(username, callback) {
  setTimeout(() => {
    callback(null, 42);
  }, 50);
}

function fetchUserProfile(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: 'Jane', role: 'admin' });
  }, 50);
}

function fetchUserPermissions(profile, callback) {
  setTimeout(() => {
    callback(null, ['read', 'write', 'delete']);
  }, 50);
}

// Promisify all functions
const fetchUserIdPromise = promisify(fetchUserId);
const fetchUserProfilePromise = promisify(fetchUserProfile);
const fetchUserPermissionsPromise = promisify(fetchUserPermissions);

// Chain them together
fetchUserIdPromise('johndoe')
  .then(userId => fetchUserProfilePromise(userId))
  .then(profile => fetchUserPermissionsPromise(profile))
  .then(permissions => {
    console.log(' User permissions:', permissions);
  })
  .catch(err => {
    console.error('✗ Chain error:', err.message);
  });

console.log("Chaining multiple promisified functions");
console.log("");

// ============================================================================
// 7. USING WITH ASYNC/AWAIT
// ============================================================================

console.log("7. ASYNC/AWAIT WITH PROMISIFIED FUNCTIONS");
console.log("------------------------------------------");

async function getUserFlow() {
  try {
    console.log('Starting user data fetch...');
    const userId = await fetchUserIdPromise('johndoe');
    console.log(' Got user ID:', userId);
    
    const profile = await fetchUserProfilePromise(userId);
    console.log(' Got user profile:', profile.name);
    
    const permissions = await fetchUserPermissionsPromise(profile);
    console.log(' Got permissions:', permissions.join(', '));
    
    return { profile, permissions };
  } catch (err) {
    console.error('✗ Error in user flow:', err.message);
  }
}

getUserFlow();
console.log("");

// ============================================================================
// 8. HANDLING EDGE CASES
// ============================================================================

console.log("8. HANDLING EDGE CASES");
console.log("----------------------");

// Non-standard callback (no error parameter)
function successOnlyCallback(data, callback) {
  setTimeout(() => {
    callback(data.toUpperCase());
  }, 50);
}

// Manual promisification for non-standard callbacks
function promisifySuccessOnly(text) {
  return new Promise((resolve) => {
    successOnlyCallback(text, (result) => {
      resolve(result);
    });
  });
}

promisifySuccessOnly('hello')
  .then(result => console.log(' Success-only callback result:', result));

console.log("Manually handling non-standard callback format");
console.log("");

// ============================================================================
// 9. WHEN NOT TO PROMISIFY - Event Emitters
// ============================================================================

console.log("9. WHEN NOT TO PROMISIFY");
console.log("------------------------");

// Example: Event handler (DON'T promisify!)
function setupEventListener(element, eventName, callback) {
  // This callback fires multiple times - NOT suitable for promisification!
  // element.addEventListener(eventName, callback);
  console.log('⚠ Event handlers fire multiple times - use events, not promises!');
}

// Example: Progress callback (DON'T promisify!)
function downloadFile(url, progressCallback, doneCallback) {
  // progressCallback fires multiple times during download
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    progressCallback(progress);
    
    if (progress >= 100) {
      clearInterval(interval);
      doneCallback(null, 'Download complete');
    }
  }, 100);
}

console.log('⚠ Progress callbacks fire multiple times - not suitable for promises');
console.log(' Only promisify callbacks that fire ONCE');
console.log("");

// ============================================================================
// 10. NODE.JS BUILT-IN util.promisify
// ============================================================================

console.log("10. NODE.JS BUILT-IN PROMISIFY");
console.log("-------------------------------");

// In Node.js environment, you can use:
// const util = require('util');
// const fs = require('fs');

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// readFilePromise('file.txt', 'utf8')
//   .then(content => console.log(content))
//   .catch(err => console.error(err));

console.log('In Node.js, use util.promisify:');
console.log('  const util = require("util");');
console.log('  const readFile = util.promisify(fs.readFile);');
console.log(' Built-in solution handles edge cases better');
console.log("");

// ============================================================================
// 11. COMPARISON - Callback Hell vs Promises
// ============================================================================

console.log("11. CALLBACK HELL vs PROMISES");
console.log("------------------------------");

console.log("Callback Hell (nested callbacks):");
console.log(`
  getData(function(a) {
    getMoreData(a, function(b) {
      getMoreData(b, function(c) {
        getMoreData(c, function(d) {
          console.log(d);
        });
      });
    });
  });
`);

console.log("With Promises (flat chain):");
console.log(`
  getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .then(d => console.log(d))
    .catch(err => console.error(err));
`);

console.log("With Async/Await (synchronous-looking):");
console.log(`
  async function process() {
    try {
      const a = await getData();
      const b = await getMoreData(a);
      const c = await getMoreData(b);
      const d = await getMoreData(c);
      console.log(d);
    } catch (err) {
      console.error(err);
    }
  }
`);

console.log("");

// ============================================================================
// 12. PRACTICAL EXAMPLE - API Request Wrapper
// ============================================================================

console.log("12. PRACTICAL API WRAPPER");
console.log("-------------------------");

// Old callback-based API
function makeApiRequest(url, method, callback) {
  setTimeout(() => {
    if (url && method) {
      callback(null, {
        status: 200,
        data: { message: 'Success', timestamp: Date.now() }
      });
    } else {
      callback(new Error('Invalid request parameters'));
    }
  }, 100);
}

// Promisified version
const makeApiRequestPromise = promisify(makeApiRequest);

// Modern async/await usage
async function fetchData() {
  try {
    const response = await makeApiRequestPromise('/api/users', 'GET');
    console.log(' API Response:', response.data);
  } catch (err) {
    console.error('✗ API Error:', err.message);
  }
}

fetchData();
console.log("");

// ============================================================================
// 13. ERROR HANDLING COMPARISON
// ============================================================================

console.log("13. ERROR HANDLING COMPARISON");
console.log("------------------------------");

// Callback error handling (must check in every callback)
function callbackErrorExample() {
  readFile('file1.txt', (err, data1) => {
    if (err) return console.error('Error 1:', err);
    
    readFile('file2.txt', (err, data2) => {
      if (err) return console.error('Error 2:', err);
      
      readFile('file3.txt', (err, data3) => {
        if (err) return console.error('Error 3:', err);
        
        console.log('All files read');
      });
    });
  });
}

// Promise error handling (single catch for entire chain)
async function promiseErrorExample() {
  try {
    const data1 = await readFilePromise('file1.txt');
    const data2 = await readFilePromise('file2.txt');
    const data3 = await readFilePromise('file3.txt');
    console.log('All files read');
  } catch (err) {
    console.error('Error reading files:', err.message);
  }
}

console.log(' Promises provide centralized error handling');
console.log(' One try/catch block instead of multiple if(err) checks');
console.log("");

import default_export from './modules_complete_examples.js'
console.log(default_export);
