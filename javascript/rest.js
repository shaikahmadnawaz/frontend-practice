// In JavaScript, the "rest" operator is denoted by an ellipsis (...) and is used in function parameter lists or destructuring assignments to represent an indefinite number of arguments or elements as an array. It allows you to gather the remaining arguments or elements into a single array, making it easier to work with variable-length input.

function calculateCart(...num1) {
  return num1;
}

console.log(calculateCart(20, 30, 40, 50));
