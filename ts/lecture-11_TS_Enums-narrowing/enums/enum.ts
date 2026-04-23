enum NumDirection {
    Up = 0,
    Down,
    Left,
    Right
}

const enum StrDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

const objEnum = {
    Up: { x: 0, y: 1 },
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT"
} as const;

function foo(enumeration: StrDirection): void {
    console.log("random text");
}

foo(StrDirection.Up);