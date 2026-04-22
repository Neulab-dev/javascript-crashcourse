class MyClass {
    static boo: number = 42;

    static of(str: string): MyClass {
        return new MyClass();
    }
}

console.log(MyClass.boo);

