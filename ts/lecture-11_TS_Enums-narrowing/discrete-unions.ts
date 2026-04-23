interface Circle {
  kind: "circle"
  radius: number
}

interface Square {
  kind: "square"
  sideLength: number
}

interface Traiangle {
  kind: "triangle"
  base: number
  height: number
}

type Shape = Circle | Square | Traiangle

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2
//   } else {
//     return shape.sideLength ** 2
//   }
// }

function getAreaExhaustive(shape: Shape): number {
  switch (shape.kind) {
    case "circle": 
      return shape.radius
    case "square":
      return shape.sideLength
    default:
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}





