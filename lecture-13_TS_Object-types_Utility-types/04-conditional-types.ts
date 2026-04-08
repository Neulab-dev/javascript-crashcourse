interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

// Simple logic check
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

type ToArray<Type> = Type extends null | undefined ? never : Type[];
type StrArrOrNumArr = ToArray<string | number>;

// const toArr: ToArray<null> = [];

// `infer` lets us capture part of a type during a conditional check
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

type FnA = () => string;
type FnB = (x: number, y: number) => boolean;

type AResult = ReturnTypeOf<FnA>; // string
type BResult = ReturnTypeOf<FnB>; // boolean
type CResult = ReturnTypeOf<number>; // never

const aValue: AResult = "ok";
const bValue: BResult = true;
// const cValue: CResult = 123; // error: never