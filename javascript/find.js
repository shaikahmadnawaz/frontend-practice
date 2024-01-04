// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(function (element) {
  return element > 2;
});

console.log(found); // Output: 3

const persons = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 28 },
];

// Find the person with age greater than 25
const foundPerson = persons.find((person) => person.age > 25);

if (foundPerson) {
  console.log(`Found: ${foundPerson.name}, Age: ${foundPerson.age}`);
} else {
  console.log("No person found with age greater than 25");
}
