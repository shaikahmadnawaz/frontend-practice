// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.

var x = 10;
let y = 20;
const z = 30;

if (true) {
  var x = 50; // Reassigning the value of 'x'
  let y = 60; // Creating a new block-scoped 'y' variable
  const z = 70; // Creating a new block-scoped 'z' constant

  console.log(x); // Output: 50
  console.log(y); // Output: 60
  console.log(z); // Output: 70
}

console.log(x); // Output: 50
console.log(y); // Output: 20
console.log(z); // Output: 30

// Problem with var
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"

// So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

// If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.

// let can be updated but not re-declared.
// Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

let greeting = "say Hi";
greeting = "say Hello instead";

// this will return an error:
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// Hoisting of let
// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

// const cannot be updated or re-declared
// This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const

// This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

const greeting = {
  message: "say Hi",
  times: 4,
};
