function foo() {
    return "213";
}
var id = foo();
if (typeof id === "string") {
    console.log(id.toUpperCase());
}
else {
    if (id != null) {
        console.log(id.o);
    }
}
function bar() {
    return { a: 1 };
}
var a = bar();
if (a instanceof Date) {
    console.log(a);
}
else {
    console.log(a.a);
}
function isValueType(x) {
    return x instanceof Date;
}
function processGuarded() {
    return { value: 42 };
}
var guarded = processGuarded();
if (isValueType(guarded)) {
    console.log(guarded.getMilliseconds());
}
else {
    console.log(guarded.value);
}
