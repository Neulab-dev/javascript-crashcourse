type voidFunc = () => void;
 
const func1: voidFunc = () => {
  return true;
};
 
const func2: voidFunc = () => true;
 
const func3: voidFunc = function () {
  return true;
};

const v1 = func1();
const v2 = func2();
const v3 = func3();

// =============================

function f2(): void {
  // @ts-expect-error
  return true;
}
 
const f3 = function (): void {
  // @ts-expect-error
  return true;
};