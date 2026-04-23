function fn(x: number): string;
function fn(x: string): string;
function fn(X: string, flag: boolean): string;
function fn() {
  return "oops";
}

fn(""); // okay
fn(1); // okay
fn("", true); // okay
