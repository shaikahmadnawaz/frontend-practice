// In JavaScript, the "rest" operator is denoted by an ellipsis (...) and is used in function parameter lists or destructuring assignments to represent an indefinite number of arguments or elements as an array. It allows you to gather the remaining arguments or elements into a single array, making it easier to work with variable-length input.

// It provides an improved way of handling the parameters of a function.
// Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
// Any number of arguments will be converted into an array using the rest parameter.
// It also helps in extracting all or some parts of the arguments.
// Rest parameters can be used by applying three dots (...) before the parameters.

function calculateCart(...num1) {
  return num1;
}

console.log(calculateCart(20, 30, 40, 50));
