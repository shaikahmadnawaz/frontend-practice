// In JavaScript, an object literal is a way to define and create objects using a simple and concise syntax. It allows you to create objects with properties and values without the need for a constructor function or class. Object literals are one of the most common ways to work with objects in JavaScript.

// Here's the basic syntax for creating an object literal:

const myObject = {
  property1: value1,
  property2: value2,
  // ...
};

// - `myObject` is the name of the object variable.
// - `property1`, `property2`, and so on, are the names of the properties within the object.
// - `value1`, `value2`, and so on, are the values associated with each property.

// For example:

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// In the `person` object above, there are three properties (`firstName`, `lastName`, and `age`) with their respective values.

// You can access the properties of an object using dot notation or bracket notation:

console.log(person.firstName); // Output: "John"
console.log(person["lastName"]); // Output: "Doe"

// Object literals are a flexible and convenient way to group related data and behavior together in your JavaScript code. They are often used for creating data structures, configuration objects, and more.
