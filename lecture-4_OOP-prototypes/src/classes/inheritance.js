class Animal {
  constructor(name) { this.name = name; }
  eat() { console.log(`${this.name} eats.`); }
}

class Rabbit extends Animal {
  hide() { console.log(`${this.name} hides!`); }
}

let rabbit = new Rabbit("Bugs");
rabbit.eat(); // Bugs eats.