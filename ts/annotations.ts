const num: number = 5;
const str: string = "Hello, TypeScript!";
const bool: boolean = true;

function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greeting: string = greet("Alice");
const infered = greet("Bob"); // TypeScript infers this as a string

const string = "This is";

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Charlie",
    age: 30
};

type ID = string | boolean | -10842 | { a: number };

const userId: string | boolean | -10842 | { a: number } = "12345";

const anotherUserId: ID = "abcde";

const sanitize = (input: string): string => input.trim().toLowerCase();


type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
 
// Create a sanitized input
let userInput = sanitizeInput("....");
 
// Can still be re-assigned with a string though
userInput = "new input";
