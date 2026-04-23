type MyObject = {
  [key in "foo" | "kamp"]: boolean;
};

class MyClass {
//   [key in "foo" | "kamp"]: boolean;
  
    myObject: MyObject = {
    foo: true,
    kamp: false,
  };



  status: string = "Active";

  search() {}

  search2 = () => {};
}
