class Base {
  protected zoo!: number;

  constructor(protected boo: number) {}
}

interface Face1 {
  search(): void;
}

interface Face2 {
  search(): void;
}

class Derived1 extends Base implements Face1 {
  constructor(boo: number) {
    if (boo > 1) {
      throw new Error("random error");
    }
    super(boo);
  }


  search(): void {
    throw new Error("Method not implemented.");
  }
}

class Derived2 implements Face2 {
  
  search(): void {
    throw new Error("Method not implemented.");
  }
}

let child: Face1 = new Derived1(0);
child = new Derived2();

