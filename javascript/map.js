// In JavaScript, the map method is a built-in function available for arrays. It's used to create a new array by applying a provided function to each element of the original array. The purpose of the map method is to transform the elements of an array into a new set of values without changing the original array.

const numbers = [1, 2, 3, 4, 5];

const multipliedByTwo = numbers.map((number) => {
  return number * 2;
});

console.log(multipliedByTwo); // Output: [2, 4, 6, 8, 10]

// chaining

const chainEg = numbers
  .map((number) => number * 2)
  .map((number) => number + 1)
  .filter((number) => number > 5);

console.log(chainEg); // Output: [7, 9, 11]
