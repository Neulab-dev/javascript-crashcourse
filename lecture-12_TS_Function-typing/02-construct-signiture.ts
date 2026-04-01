interface SomeObject {
  name: string;
}

type SomeConstructor = {
  new (s: string): SomeObject;
};
function func(ctor: SomeConstructor) {
  return new ctor("hello");
}