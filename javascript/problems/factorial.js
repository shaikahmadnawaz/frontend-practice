const factorialOf = 5;

const factorial = findFactorial(factorialOf);

console.log(`Factorial of ${factorialOf} is ${factorial}`);

function findFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
