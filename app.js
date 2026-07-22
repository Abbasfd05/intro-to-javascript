let num = 15; // I'm a number
num = 'Hey!'; // Now I'm a string!
console.log(13 == '13');
console.log(13 === '13');
console.log(typeof '1' + 1);
console.log(true && null && true);
console.log(false || false || 0 || true);
console.log( true && 'false' && 5);
const val = 3;

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}

// val is 3, so 'val is three' will be printed.
// Global scope
let friendName = "Burt";

const greet = () => {
  // Function scope
  let message = "Hello, " + friendName + "!";
  console.log(message);
}
greet();
let a = 4;

const foo = (x) => {
  let b = a * 4;

  const bar = (y) => {
    let c = y * b;
    return c;
  }

  return bar(b);
}

console.log(foo(a));