// ============================================================================
// JAVASCRIPT MODULES - Complete Examples
// Modules, Import/Export, and Dynamic Imports
// ============================================================================

console.log("=== JAVASCRIPT MODULES EXAMPLES ===\n");

// ============================================================================
// PART 1: BASIC MODULE CONCEPTS
// ============================================================================

console.log("PART 1: BASIC MODULE CONCEPTS");
console.log("==============================\n");

// ----------------------------------------------------------------------------
// Note: In a real project, these would be separate files
// For demonstration, we'll show what each file would contain
// ----------------------------------------------------------------------------

// ============================================================================
// 1. NAMED EXPORTS - Export Before Declaration
// ============================================================================

console.log("1. NAMED EXPORTS - Export Before Declaration");
console.log("---------------------------------------------");

// File: math.js (example)

// Export an array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// Export a function
export function add(a, b) {
  return a + b;
}

// Export a class
export class Calculator {
  constructor(name) {
    this.name = name;
  }
  
  multiply(a, b) {
    return a * b;
  }
}


console.log(" Export variables, functions, classes with 'export' keyword");
console.log(" Place 'export' before declaration");
console.log(" No semicolon needed after export class/function\n");

// ============================================================================
// 2. NAMED EXPORTS - Export Apart from Declaration
// ============================================================================

console.log("2. NAMED EXPORTS - Export Apart from Declaration");
console.log("-------------------------------------------------");

// File: utils.js (example)

function formatDate(date) {
  return date.toLocaleDateString();
}

function formatTime(date) {
  return date.toLocaleTimeString();
}

function formatDateTime(date) {
  return `${formatDate(date)} ${formatTime(date)}`;
}

// Export multiple at once
export { formatDate, formatTime, formatDateTime };


console.log(" Declare functions first");
console.log(" Export them together at the end");
console.log(" Useful for organizing code\n");

// ============================================================================
// 3. IMPORT NAMED EXPORTS
// ============================================================================

console.log("3. IMPORT NAMED EXPORTS");
console.log("------------------------");

// File: app.js (example)

import { add, Calculator } from './math.js';
import { formatDate, formatTime } from './utils.js';

console.log(add(5, 3)); // 8
console.log(formatDate(new Date())); // Current date

const calc = new Calculator('MyCalc');
console.log(calc.multiply(4, 5)); // 20


console.log(" Use curly braces {} for named imports");
console.log(" Import names must match export names");
console.log(" Can import multiple items from one module\n");

// ============================================================================
// 4. IMPORT EVERYTHING (Import *)
// ============================================================================

console.log("4. IMPORT EVERYTHING (Import *)");
console.log("--------------------------------");

// File: app.js (example)
import * as MathUtils from './math.js';
import * as DateUtils from './utils.js';

console.log(MathUtils.add(10, 20)); // 30
console.log(MathUtils.MODULES_BECAME_STANDARD_YEAR); // 2015

const calc = new MathUtils.Calculator('Test');
console.log(calc.multiply(2, 3)); // 6

console.log(DateUtils.formatDate(new Date()));


console.log(" Import all exports as a namespace object");
console.log(" Access exports as properties: MathUtils.add()");
console.log(" Clearer namespace organization");
console.log(" Build tools remove unused imports (tree-shaking)\n");

// ============================================================================
// 5. IMPORT "AS" - Renaming Imports
// ============================================================================

console.log("5. IMPORT 'AS' - Renaming Imports");
console.log("----------------------------------");

// File: app.js (example)

import { add as sum, Calculator as Calc } from './math.js';
import { formatDate as fmtDate } from './utils.js';

console.log(sum(5, 10)); // 15
console.log(fmtDate(new Date()));

const calculator = new Calc('Renamed');


console.log(" Rename imports to avoid conflicts");
console.log(" Use shorter, more convenient names");
console.log(" Syntax: import { original as newName }\n");

// ============================================================================
// 6. EXPORT "AS" - Renaming Exports
// ============================================================================

console.log("6. EXPORT 'AS' - Renaming Exports");
console.log("----------------------------------");

// File: math.js (example)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export with different names
export { add as sum, subtract as diff };


// File: app.js (example)

import { sum, diff } from './math.js';

console.log(sum(10, 5));  // 15
console.log(diff(10, 5)); // 5


console.log(" Export with different names than internal names");
console.log(" Exported names become the public API");
console.log(" Useful for creating cleaner interfaces\n");

// ============================================================================
// 7. DEFAULT EXPORTS
// ============================================================================

console.log("7. DEFAULT EXPORTS");
console.log("-------------------");

// File: User.js (example)

export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}


// File: config.js (example)

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

export default config;


// File: app.js (example)

import User from './User.js';
import config from './config.js';

const user = new User('Alice', 'alice@example.com');
console.log(user.greet());
console.log(config.apiUrl);


console.log(" Use 'export default' for single main export");
console.log(" Only ONE default export per file");
console.log(" Import WITHOUT curly braces");
console.log(" Can use any name when importing\n");

// ============================================================================
// 8. DEFAULT EXPORT - Anonymous
// ============================================================================

console.log("8. DEFAULT EXPORT - Anonymous");
console.log("-------------------------------");

// File: Logger.js (example)

export default class {
  log(message) {
    console.log(`[LOG] ${message}`);
  }
  
  error(message) {
    console.error(`[ERROR] ${message}`);
  }
}


// File: helper.js (example)

export default function(text) {
  return text.toUpperCase();
}


// File: constants.js (example)

export default {
  MAX_USERS: 100,
  MIN_PASSWORD_LENGTH: 8,
  API_VERSION: 'v1'
};


console.log(" Default exports don't need names");
console.log(" Anonymous classes, functions, objects are valid");
console.log(" Import gives them a name\n");

// ============================================================================
// 9. MIXING DEFAULT AND NAMED EXPORTS
// ============================================================================

console.log("9. MIXING DEFAULT AND NAMED EXPORTS");
console.log("------------------------------------");

// File: api.js (example)

export default class API {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  fetch(endpoint) {
    return `Fetching ${this.baseUrl}${endpoint}`;
  }
}

export const API_VERSION = '2.0';
export const TIMEOUT = 3000;

export function isOnline() {
  return navigator.onLine;
}


// File: app.js (example)

// Import default and named exports together
import API, { API_VERSION, TIMEOUT, isOnline } from './api.js';

const api = new API('https://api.example.com');
console.log(API_VERSION);
console.log(isOnline());


console.log(" Can have both default and named exports");
console.log(" Import default without braces, named with braces");
console.log(" Not commonly used - usually stick to one style\n");

// ============================================================================
// 10. RE-EXPORT SYNTAX
// ============================================================================

console.log("10. RE-EXPORT SYNTAX");
console.log("---------------------");

// File structure example:
/*
auth/
  index.js      <- Main entry point
  user.js
  login.js
  permissions.js
*/

// File: auth/user.js
/*
export class User {
  constructor(name) {
    this.name = name;
  }
}
*/

// File: auth/login.js
/*
export function login(username, password) {
  return { success: true, user: username };
}

export function logout() {
  return { success: true };
}
*/

// File: auth/index.js (re-exports everything)
/*
// Re-export from other modules
export { User } from './user.js';
export { login, logout } from './login.js';

// Or re-export everything
export * from './permissions.js';
*/

// File: app.js (clean imports!)
/*
// Import from single entry point
import { User, login, logout } from './auth/index.js';
*/

console.log(" Create single entry point for packages");
console.log(" Re-export hides internal structure");
console.log(" Cleaner API for users");
console.log(" export { name } from './module.js'\n");

// ============================================================================
// 11. RE-EXPORTING DEFAULT EXPORTS
// ============================================================================

console.log("11. RE-EXPORTING DEFAULT EXPORTS");
console.log("---------------------------------");

// File: User.js
/*
export default class User {
  constructor(name) {
    this.name = name;
  }
}
*/

// File: index.js (re-export default as named)
/*
export { default as User } from './User.js';

// Or re-export as default
export { default } from './User.js';
*/

console.log(" Use 'default' keyword for re-exporting");
console.log(" export { default as Name } from './file.js'");
console.log(" export * doesn't re-export default!\n");

// ============================================================================
// PART 2: MODULE FEATURES AND BEHAVIOR
// ============================================================================

console.log("\nPART 2: MODULE FEATURES AND BEHAVIOR");
console.log("=====================================\n");

// ============================================================================
// 12. MODULES ARE SINGLETONS (One-Time Evaluation)
// ============================================================================

console.log("12. MODULES ARE SINGLETONS");
console.log("---------------------------");

// Simulating module behavior
const moduleCache = {};

function simulateModuleImport(moduleName, moduleCode) {
  if (!moduleCache[moduleName]) {
    console.log(`  → Executing ${moduleName} for the first time`);
    moduleCache[moduleName] = moduleCode();
  } else {
    console.log(`  → Using cached ${moduleName}`);
  }
  return moduleCache[moduleName];
}

// Simulated module
function counterModule() {
  let count = 0;
  return {
    increment() { return ++count; },
    getCount() { return count; }
  };
}

// First import
const counter1 = simulateModuleImport('counter.js', counterModule);
console.log('Counter1 increment:', counter1.increment()); // 1

// Second import (same module)
const counter2 = simulateModuleImport('counter.js', counterModule);
console.log('Counter2 getCount:', counter2.getCount()); // 1 (shared state!)

console.log('\n Module code executes only once');
console.log(' All imports share the same instance');
console.log(' Changes visible across all importers\n');

// ============================================================================
// 13. MODULE CONFIGURATION PATTERN
// ============================================================================

console.log("13. MODULE CONFIGURATION PATTERN");
console.log("---------------------------------");

// File: database.js (example)
export const config = {
  host: '',
  port: 0,
  database: ''
};

export function connect() {
  if (!config.host) {
    throw new Error('Database not configured');
  }
  return `Connected to ${config.host}:${config.port}/${config.database}`;
}


// File: init.js (first import, configures)
import { config } from './database.js';

config.host = 'localhost';
config.port = 5432;
config.database = 'myapp';


// File: app.js (later imports, uses configuration)
import { connect } from './database.js';

console.log(connect()); // Works! Uses configured values


console.log(" Export configuration object");
console.log(" First import configures it");
console.log(" Later imports use configured values");
console.log(" Perfect for API keys, settings, etc.\n");

// ============================================================================
// 14. MODULE SCOPE (Isolation)
// ============================================================================

console.log("14. MODULE SCOPE (Isolation)");
console.log("-----------------------------");

// Demonstrating scope isolation
console.log("In module A:");
console.log("  let privateVar = 'secret'; // Not accessible outside");
console.log("  export let publicVar = 'shared'; // Accessible via import");

console.log("\nIn module B:");
console.log("  console.log(privateVar); // ERROR: not defined");
console.log("  import { publicVar } from './moduleA.js'; // OK");

console.log("\n Top-level variables are module-scoped");
console.log(" Not visible in global scope");
console.log(" Must explicitly export to share");
console.log(" Prevents accidental global pollution\n");

// ============================================================================
// PART 3: DYNAMIC IMPORTS
// ============================================================================

console.log("\nPART 3: DYNAMIC IMPORTS");
console.log("=======================\n");

// ============================================================================
// 15. BASIC DYNAMIC IMPORT
// ============================================================================

console.log("15. BASIC DYNAMIC IMPORT");
console.log("-------------------------");

// Simulating a module for dynamic import
const simulatedModule = {
  greet: (name) => `Hello, ${name}!`,
  farewell: (name) => `Goodbye, ${name}!`
};

// Simulating dynamic import with Promise
function simulateDynamicImport(modulePath) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  → Loaded module: ${modulePath}`);
      resolve(simulatedModule);
    }, 100);
  });
}

// Using .then() syntax
console.log("Loading module with .then()...");
simulateDynamicImport('./greetings.js')
  .then(module => {
    console.log('  ' + module.greet('Alice'));
    console.log('  ' + module.farewell('Alice'));
  })
  .catch(err => {
    console.error('  Failed to load module:', err);
  });

console.log('\n import() returns a Promise');
console.log(' Loads module at runtime');
console.log(' Can be called from anywhere in code\n');

// ============================================================================
// 16. DYNAMIC IMPORT WITH ASYNC/AWAIT
// ============================================================================

console.log("16. DYNAMIC IMPORT WITH ASYNC/AWAIT");
console.log("------------------------------------");

async function loadAndUseModule() {
  try {
    console.log('Loading module with async/await...');
    const module = await simulateDynamicImport('./greetings.js');
    
    console.log('  ' + module.greet('Bob'));
    console.log('  ' + module.farewell('Bob'));
  } catch (err) {
    console.error('  Failed to load module:', err);
  }
}

loadAndUseModule();

console.log('\n Use await with import()');
console.log(' Much cleaner than .then()');
console.log(' Use try-catch for errors\n');

// ============================================================================
// 17. CONDITIONAL DYNAMIC IMPORT
// ============================================================================

console.log("17. CONDITIONAL DYNAMIC IMPORT");
console.log("-------------------------------");

// Simulated modules
const adminModule = {
  deleteUser: () => 'User deleted',
  viewLogs: () => 'Viewing logs'
};

const userModule = {
  viewProfile: () => 'Viewing profile',
  editProfile: () => 'Editing profile'
};

async function loadUserInterface(isAdmin) {
  console.log(`Loading interface for ${isAdmin ? 'admin' : 'regular user'}...`);
  
  try {
    let module;
    if (isAdmin) {
      // Simulate loading admin module
      await new Promise(resolve => setTimeout(resolve, 100));
      module = adminModule;
      console.log('  → Loaded admin module');
    } else {
      // Simulate loading user module
      await new Promise(resolve => setTimeout(resolve, 100));
      module = userModule;
      console.log('  → Loaded user module');
    }
    
    return module;
  } catch (err) {
    console.error('  Failed to load module:', err);
  }
}

// Test both scenarios
loadUserInterface(true).then(module => {
  console.log('  Admin action:', module.deleteUser());
});

loadUserInterface(false).then(module => {
  console.log('  User action:', module.viewProfile());
});

console.log('\n Load different modules based on conditions');
console.log(' Users only download what they need');
console.log(' Better security and performance\n');

// ============================================================================
// 18. LAZY LOADING ON USER ACTION
// ============================================================================

console.log("18. LAZY LOADING ON USER ACTION");
console.log("--------------------------------");

// Simulated heavy module
const chartModule = {
  createChart: (data) => `Chart created with ${data.length} points`,
  updateChart: () => 'Chart updated'
};

// Button click handler (simulated)
async function onChartButtonClick() {
  console.log('User clicked "Show Chart" button');
  console.log('Loading chart library...');
  
  // Show loading indicator
  console.log('  [Loading spinner visible]');
  
  try {
    // Simulate loading heavy chart library
    await new Promise(resolve => setTimeout(resolve, 150));
    const module = chartModule;
    console.log('  → Chart library loaded');
    
    // Hide loading indicator
    console.log('  [Loading spinner hidden]');
    
    // Use the module
    const data = [1, 2, 3, 4, 5];
    console.log('  ' + module.createChart(data));
    
  } catch (err) {
    console.error('  Failed to load chart library:', err);
    console.log('  [Show error message to user]');
  }
}

// Simulate user clicking button
setTimeout(() => onChartButtonClick(), 200);

console.log('\n Load modules only when user needs them');
console.log(' Faster initial page load');
console.log(' Always show loading feedback\n');

// ============================================================================
// 19. PARALLEL DYNAMIC IMPORTS
// ============================================================================

console.log("19. PARALLEL DYNAMIC IMPORTS");
console.log("-----------------------------");

async function loadMultipleModules() {
  console.log('Loading multiple modules in parallel...');
  
  try {
    // Load all modules at once
    const [module1, module2, module3] = await Promise.all([
      simulateDynamicImport('./module1.js'),
      simulateDynamicImport('./module2.js'),
      simulateDynamicImport('./module3.js')
    ]);
    
    console.log('   All modules loaded!');
    console.log('  Using modules...');
    console.log('  ' + module1.greet('Charlie'));
    
  } catch (err) {
    console.error('  Failed to load modules:', err);
  }
}

setTimeout(() => loadMultipleModules(), 400);

console.log('\n Use Promise.all() for parallel loading');
console.log(' Much faster than sequential loading');
console.log(' All modules load simultaneously\n');

// ============================================================================
// 20. DYNAMIC PATH CONSTRUCTION
// ============================================================================

console.log("20. DYNAMIC PATH CONSTRUCTION");
console.log("------------------------------");

// Simulated language modules
const langModules = {
  en: { greeting: 'Hello', farewell: 'Goodbye' },
  es: { greeting: 'Hola', farewell: 'Adiós' },
  fr: { greeting: 'Bonjour', farewell: 'Au revoir' }
};

async function loadLanguage(langCode) {
  console.log(`Loading language: ${langCode}...`);
  
  // Construct module path dynamically
  const modulePath = `./i18n/${langCode}.js`;
  console.log(`  Path: ${modulePath}`);
  
  try {
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 100));
    const module = langModules[langCode];
    console.log(`  → Loaded ${langCode} translations`);
    
    return module;
  } catch (err) {
    console.error(`  Failed to load language ${langCode}:`, err);
    // Fallback to English
    return langModules.en;
  }
}

// Load different languages
setTimeout(() => {
  loadLanguage('es').then(lang => {
    console.log(`  ${lang.greeting}!`);
  });
}, 600);

console.log('\n Module path can be any expression');
console.log(' Construct paths from variables');
console.log(' Perfect for i18n, themes, plugins\n');

// ============================================================================
// 21. ERROR HANDLING WITH DYNAMIC IMPORTS
// ============================================================================

console.log("21. ERROR HANDLING WITH DYNAMIC IMPORTS");
console.log("----------------------------------------");

async function loadModuleWithErrorHandling() {
  console.log('Attempting to load module...');
  
  try {
    // Simulate failed module load
    await new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Module not found (404)')), 100)
    );
  } catch (err) {
    console.error('  ✗ Load failed:', err.message);
    console.log('  → Showing error message to user');
    console.log('  → Loading fallback module...');
    
    // Try fallback
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      console.log('   Fallback module loaded');
    } catch (fallbackErr) {
      console.error('  ✗ Fallback also failed');
      console.log('  → Showing offline message');
    }
  }
}

setTimeout(() => loadModuleWithErrorHandling(), 800);

console.log('\n Always handle errors with try-catch');
console.log(' Show meaningful error messages');
console.log(' Provide fallback strategies');
console.log(' Consider retry mechanisms\n');

// ============================================================================
// 22. CODE SPLITTING EXAMPLE
// ============================================================================

console.log("22. CODE SPLITTING EXAMPLE (SPA Routes)");
console.log("----------------------------------------");

// Simulated route modules
const routeModules = {
  '/home': { render: () => 'Home Page Content' },
  '/about': { render: () => 'About Page Content' },
  '/dashboard': { render: () => 'Dashboard Content' },
  '/admin': { render: () => 'Admin Panel Content' }
};

async function navigateToRoute(path) {
  console.log(`Navigating to: ${path}`);
  console.log('  [Loading...]');
  
  try {
    // Dynamically import route module
    await new Promise(resolve => setTimeout(resolve, 100));
    const routeModule = routeModules[path];
    
    if (!routeModule) {
      throw new Error('Route not found');
    }
    
    console.log('   Route module loaded');
    console.log('  Rendering:', routeModule.render());
    
  } catch (err) {
    console.error('  ✗ Route load failed:', err.message);
    console.log('  Redirecting to 404 page...');
  }
}

// Simulate navigation
setTimeout(() => navigateToRoute('/home'), 1000);
setTimeout(() => navigateToRoute('/dashboard'), 1200);

console.log('\n Each route loads its own module');
console.log(' Only load route when navigated to');
console.log(' Much smaller initial bundle');
console.log(' Common pattern in React, Vue, Angular\n');

// ============================================================================
// 23. PRELOADING MODULES
// ============================================================================

console.log("23. PRELOADING MODULES");
console.log("----------------------");

let preloadedModule = null;

async function preloadModule(modulePath) {
  console.log(`Preloading module: ${modulePath}...`);
  try {
    await new Promise(resolve => setTimeout(resolve, 100));
    preloadedModule = simulatedModule;
    console.log('   Module preloaded in background');
  } catch (err) {
    console.error('  ✗ Preload failed:', err);
  }
}

async function usePreloadedModule() {
  console.log('User needs the module now...');
  
  if (preloadedModule) {
    console.log('   Using preloaded module (instant!)');
    console.log('  ' + preloadedModule.greet('David'));
  } else {
    console.log('  → Module not preloaded, loading now...');
    const module = await simulateDynamicImport('./module.js');
    console.log('  ' + module.greet('David'));
  }
}

// Preload on hover or idle time
setTimeout(() => preloadModule('./module.js'), 1400);
setTimeout(() => usePreloadedModule(), 1600);

console.log('\n Preload before user needs it');
console.log(' On hover, idle time, or predictively');
console.log(' Module ready instantly when needed\n');

// ============================================================================
// 25. COMPLETE REAL-WORLD EXAMPLE
// ============================================================================

console.log("25. COMPLETE REAL-WORLD EXAMPLE");
console.log("================================\n");

// Feature module registry
const featureModules = {
  'rich-editor': {
    size: '500KB',
    module: { init: () => 'Rich editor initialized' }
  },
  'video-player': {
    size: '300KB',
    module: { play: () => 'Video playing' }
  },
  'chart-library': {
    size: '200KB',
    module: { render: () => 'Chart rendered' }
  }
};

class FeatureLoader {
  constructor() {
    this.loadedFeatures = new Map();
    this.loading = new Set();
  }
  
  async loadFeature(featureName) {
    // Check if already loaded
    if (this.loadedFeatures.has(featureName)) {
      console.log(`  → Using cached ${featureName}`);
      return this.loadedFeatures.get(featureName);
    }
    
    // Check if currently loading
    if (this.loading.has(featureName)) {
      console.log(`  → Waiting for ${featureName} to finish loading...`);
      // In real app, would return the pending promise
      await new Promise(resolve => setTimeout(resolve, 100));
      return this.loadedFeatures.get(featureName);
    }
    
    // Start loading
    this.loading.add(featureName);
    console.log(`  → Loading ${featureName}...`);
    
    try {
      // Simulate module load
      const feature = featureModules[featureName];
      if (!feature) {
        throw new Error(`Feature ${featureName} not found`);
      }
      
      console.log(`    Size: ${feature.size}`);
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Cache the module
      this.loadedFeatures.set(featureName, feature.module);
      this.loading.delete(featureName);
      
      console.log(`   ${featureName} loaded successfully`);
      return feature.module;
      
    } catch (err) {
      this.loading.delete(featureName);
      console.error(`  ✗ Failed to load ${featureName}:`, err.message);
      throw err;
    }
  }
}

// Usage
const loader = new FeatureLoader();

async function demonstrateFeatureLoading() {
  console.log('User opens rich text editor...');
  try {
    const editor = await loader.loadFeature('rich-editor');
    console.log(' ', editor.init());
  } catch (err) {
    console.log('  Falling back to simple textarea');
  }
  
  console.log('\nUser plays video...');
  try {
    const player = await loader.loadFeature('video-player');
    console.log(' ', player.play());
  } catch (err) {
    console.log('  Video unavailable');
  }
  
  console.log('\nUser requests editor again (should be instant)...');
  const editorAgain = await loader.loadFeature('rich-editor');
  console.log(' ', editorAgain.init());
}

setTimeout(() => demonstrateFeatureLoading(), 1800);
