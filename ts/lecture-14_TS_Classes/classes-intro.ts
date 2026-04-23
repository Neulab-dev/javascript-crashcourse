class Foo {
  public boo: any = 1;
  readonly PI: number = 3.14;

  constructor(
    readonly isFinite: boolean,
    boo: any,
  ) {
    this.boo = boo;
  }

  zoo(): number {
    return 1;
  }
}

const foo = new Foo(true, "");
console.log(foo.isFinite);
