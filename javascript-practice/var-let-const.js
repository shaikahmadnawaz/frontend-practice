var x = 10;
let y = 20;
const z = 30;

if (true) {
  var x = 50; // Reassigning the value of 'x'
  let y = 60; // Creating a new block-scoped 'y' variable
  const z = 70; // Creating a new block-scoped 'z' constant

  console.log(x); // Output: 50
  console.log(y); // Output: 60
  console.log(z); // Output: 70
}

console.log(x); // Output: 50
console.log(y); // Output: 20
console.log(z); // Output: 30
