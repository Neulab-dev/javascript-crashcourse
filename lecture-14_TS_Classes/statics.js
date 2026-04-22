var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.of = function (str) {
        return new MyClass();
    };
    MyClass.boo = 42;
    return MyClass;
}());
console.log(MyClass.boo);
