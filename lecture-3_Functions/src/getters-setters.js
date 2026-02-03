const user = {
  _firstName: 'John',  // Convention: underscore indicates "private"
  _lastName: 'Doe',

  // Getter - accessed like a property, not a method
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  },

  // Setter - called when assigning a value
  set fullName(name) {
    const parts = name.split(' ');
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
};

console.log(user.fullName); // Getter called: "John Doe"
user.fullName = 'Jane Smith'; // Setter called
console.log(user.fullName); // "Jane Smith"
console.log(user._firstName); // "Jane"

// ==========================

// 2. GETTERS WITH COMPUTATIONS
// =============================

const rectangle = {
  _width: 10,
  _height: 5,

  get area() {
    return this._width * this._height;
  },

  get perimeter() {
    return 2 * (this._width + this._height);
  }
};

console.log(rectangle.area);      // 50 (computed on access)
console.log(rectangle.perimeter); // 30 (computed on access)

// =============================

const bankAccount = {
  _balance: 1000,

  get balance() {
    return this._balance;
  },

  set balance(amount) {
    if (amount < 0) {
      console.log('Error: Balance cannot be negative');
      return;
    }
    this._balance = amount;
  },

  // Additional setter method
  set deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: $${amount}, New balance: $${this._balance}`);
    }
  },

  set withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew: $${amount}, New balance: $${this._balance}`);
    } else {
      console.log('Invalid withdrawal amount');
    }
  }
};

console.log(bankAccount.balance);  // 1000
bankAccount.balance = 1500;        // Valid set
bankAccount.balance = -100;        // Error: Balance cannot be negative
bankAccount.deposit = 500;         // Deposited: $500, New balance: $1500
bankAccount.withdraw = 300;        // Withdrew: $300, New balance: $1200
