var NumDirection;
(function (NumDirection) {
    NumDirection[NumDirection["Up"] = 0] = "Up";
    NumDirection[NumDirection["Down"] = 1] = "Down";
    NumDirection[NumDirection["Left"] = 2] = "Left";
    NumDirection[NumDirection["Right"] = 3] = "Right";
})(NumDirection || (NumDirection = {}));
var objEnum = {
    Up: { x: 0, y: 1 },
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT"
};
function foo(enumeration) {
    console.log("random text");
}
foo("UP" /* StrDirection.Up */);
