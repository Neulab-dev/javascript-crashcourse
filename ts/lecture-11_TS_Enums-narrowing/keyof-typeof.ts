type Point = { x: number; y: number; foo: () => void }
type P = keyof Point // type P = "x" | "y"

const point: P = "y"

function getProperty(obj: Point, key: keyof Point) {
  Object.keys(obj).forEach(k => {
    obj[k as keyof Point]
  })

  return obj[key] // Safe! TypeScript knows 'key' is valid
}

const settings: { drive: string; threads: number; mode: 'fast' | 'slow' } = {
  drive: "SSD",
  threads: 4,
  mode: "fast"
}

// Extract the type from the value
type Settings = typeof settings 
/* type Settings = {
    drive: string;
    threads: number;
    mode: 'fast' | 'slow'
  }
*/

function updateConfig(conf: typeof settings) {
  // Logic here
}

const user = {
  a: 1,
  b: "hello",
  c: true,
}

type ObjKeys = typeof keyof user