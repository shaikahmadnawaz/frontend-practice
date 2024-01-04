// call() method allows an object to use the method (function) of another object.

function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "John" };

greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.
