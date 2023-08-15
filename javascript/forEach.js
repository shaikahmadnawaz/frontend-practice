// In JavaScript, the forEach method is a built-in function provided by arrays. It's used to iterate over the elements of an array and apply a given function to each element. The purpose of forEach is to simplify the process of iterating through an array and performing actions on its elements without needing to write explicit loop constructs.

const array = ["a", "b", "c", "d", "e", "f", "g"];

array.forEach((element) => {
  console.log(element);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((number) => number > 4);
// console.log(newNums); // Output: [5, 6, 7, 8, 9]

// or

const newNums = [];
myNums.forEach((number) => {
  if (number > 4) {
    newNums.push(number);
  }
});
console.log(newNums); // Output: [5, 6, 7, 8, 9]
