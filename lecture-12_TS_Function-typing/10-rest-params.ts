// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);

// Inferred as 2-length tuple
const args1 = [8, 5] as const;
const angle1 = Math.atan2(...args1); // OK