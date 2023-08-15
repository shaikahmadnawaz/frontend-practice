// In JavaScript, the filter method is a built-in array method used to create a new array containing elements from the original array that satisfy a specific condition. It's a powerful tool for selectively extracting elements from an array based on a provided callback function.

const numbers = [1, 2, 3, 4, 5];

// In the below example we added {}(scope) so we have to use "return" at any cause, if we didn't have {} then we no need to use "return" keyword.

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const bigEnough = 10;

const numbers2 = [6, 7, 8, 9, 10, 11, 12].filter(
  (number) => number >= bigEnough
);

console.log(numbers2); // Output: [10, 11, 12]

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

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let fictionBooks = books.filter((book) => book.genre === "Fiction");
let publishYear = books.filter((book) => {
  return book.publish >= 2000 && book.genre === "Science";
});
console.log(fictionBooks);
console.log(publishYear);
