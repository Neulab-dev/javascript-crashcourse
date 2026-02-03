// Creating Date objects
const now = new Date();
const specificDate = new Date('2024-01-15');
const fromTimestamp = new Date(1704067200000);
const fromParams = new Date(2024, 0, 15, 10, 30, 0);

// Getting date components
console.log(now.getFullYear());
console.log(now.getMonth()); // 0-11
console.log(now.getDate());
console.log(now.getDay()); // 0-6 (Sunday-Saturday)
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// Setting date components
now.setFullYear(2025);
now.setMonth(5); // June
now.setDate(20);
now.setHours(15, 45, 30);

// String representations
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString());

// Timestamp
console.log(now.getTime());
console.log(Date.now());

// Date arithmetic
const futureDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days later

// Comparing dates
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
console.log(date1 < date2); // true

function foo() {
    // function body

    const inner = function() {
        // inner function body
    };
}