function User(name) {
    this.name = name;
    this.constant = 42;
}

const user = new User('Henry'); // this refers to new instance
console.log(user.name); // 'Henry'
console.log(user.constant); // 42