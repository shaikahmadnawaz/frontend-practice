const addTwo = (num1, num2) => {
  return num1 + num2;
};

// what is arrow function?
// arrow function is a new way of writing function introduced in ES6.
// arrow function is a shorter way of writing function expression.
// arrow function does not have their own this.
// the value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

const addTwo = (num1, num2) => {
  return num1 + num2;
};
// In this version, the arrow function uses curly braces {} to define a block of code, and the return keyword is used to specify the value to be returned. This is called a "block body" arrow function.

const addTwo = (num1, num2) => num1 + num2;
// In this version, the arrow function uses parentheses () to directly return the result of the expression num1 + num2. Since there is only a single expression, the function implicitly returns its result without the need for a return statement or curly braces. This is called a "concise body" arrow function.

const addTwo = (num1, num2) => ({ username: "nawaz" });

console.log(addTwo(3, 4));
