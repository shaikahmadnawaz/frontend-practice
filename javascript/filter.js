const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const bigEnough = 10;

const numbers2 = [6, 7, 8, 9, 10, 11, 12].filter(
  (number) => number >= bigEnough
);

console.log(numbers2); // Output: [10, 11, 12]
