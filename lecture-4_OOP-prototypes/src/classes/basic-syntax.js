class User {
  years = 50;
  name;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

let user = new User("John");
console.log(user);

user.sayHi(); // John