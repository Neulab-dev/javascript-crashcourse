let x = "10";
x = "fwefwefwe"

enum FileAccess {
  // constant members
  None,           // 000
  Read = 1 << 1,  // 010
  Write = 1 << 2, // 100
  ReadWrite = Read | Write, // 110 = 4

  // computed member
  G = x.length,
}

type keys = keyof typeof FileAccess

console.log(FileAccess.G);
