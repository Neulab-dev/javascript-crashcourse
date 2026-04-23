// Array destructuring
let [wefwef, surname] = ["Ilya", "Kantor", "Extra", "Values"];

// Object destructuring
let options = { title: "Menu", width: 100 };
let { height = 200, width, title: caps } = options;

console.log(caps);
