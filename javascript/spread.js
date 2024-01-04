// In JavaScript, the "spread" operator is also denoted by an ellipsis (...), similar to the rest operator, but it serves a different purpose. While the rest operator is used to gather elements into an array, the spread operator is used to spread elements from an array or object into another array, object, or function call. It's a versatile tool for copying or combining elements.

// Although the syntax of the spread operator is exactly the same as the rest parameter, the spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
// In the example above, we use the spread operator to copy the contents of the originalArray into the copiedArray. We also use the spread operator to pass the contents of the numbers array into the sum() function as arguments.
