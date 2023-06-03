function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "John" };
const greetPerson = greet.bind(person);

greetPerson("Alice"); // Output: Hello, Alice! My name is John.
