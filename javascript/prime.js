const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const primeNumbers = numbers.filter((number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
});

console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13]
