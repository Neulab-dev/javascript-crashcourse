const arr1: number[] = [1,2,2,3,4,5,56];
arr1.forEach((x) => arr1.push(x) );
console.log(arr1);

type voidFunc = () => void;
 
const func1: voidFunc = () => {
  return true;
};
 
const func2: voidFunc = () => true as const;
 
const func3: voidFunc = function () {
  return true;
};

const v1 = func1();
const v2 = func2();
const v3 = func3();

// =============================

function f2(): void {
  //@ts-expect-error
  return true;
}
 
const function3 = function (): void {
  //@ts-expect-error
  return true;
};