class Machine {
  _power = 100; // Protected

  static MAX_POWER = 1000; // Public static

  constructor(power) {
    this.#setPower(power);
  }

  // Private
  #setPower(value) {
    if (value < 0) throw new Error("Negative power");
    if (value == null) return;
    this._power = value;
  }
}

class CoffeeMachine extends Machine {
  #waterLimit = 200; // Private

  // if no constructor is defined explicitly, parent constructor is called automatically
  constructor(power) {
    super(power); // parent constructor MUST be called
    // super(...arguments); // alternatively, pass all arguments to parent
  }

  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
  }

  set water(value) {
    this.#checkWater(value);
    this.#waterLimit = value;
  }
}

const machine = new Machine(150);
console.log(`Machine power: ${machine._power}`); // Accessible (protected by convention)

const coffeeMachine = new CoffeeMachine(400);
coffeeMachine.water = 300; // Uses setter to set water limit

console.log(`Coffee machine power: ${coffeeMachine._power}`);

console.log(Machine.MAX_POWER);
console.log(CoffeeMachine.MAX_POWER);
