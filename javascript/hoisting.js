console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

var x; // Variable declaration is hoisted
console.log(x); // Output: undefined
x = 10; // Variable assignment
console.log(x); // Output: 10


console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // Output: 10

let x; // Variable declaration is hoisted, but not initialized
console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
x = 10; // Variable assignment
console.log(x); // Output: 10
