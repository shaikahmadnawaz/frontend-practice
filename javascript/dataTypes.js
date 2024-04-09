// Data Types in JavaScript

// JavaScript is a loosely typed or a dynamic language. This means that you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed.

// Based on the call by value or call by reference, JavaScript data types are divided into two types:

// 1. Primitive data types
// 2. Non-primitive data types

// Primitive data types - These data types are passed by value. This means that when you pass a primitive data type to a function, the function receives a copy of the original value. The original value remains unchanged. Primitive data types are immutable. They do not have any methods. There are 7 primitive data types in JavaScript.

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const num = 10;
const str = "Hello";
const bool = true;
let und;
const nul = null;
const sym = Symbol("symbol");
const bigInt = 1234567890123456789012345678901234567890n;

// Non-primitive data types - These data types are passed by reference. This means that when you pass a non-primitive data type to a function, the function receives a reference to the original value. The original value can be changed. Non-primitive data types are mutable. They have methods. There are 3 non-primitive data types in JavaScript.

// 1. Object
// 2. Array
// 3. Function

const obj = { name: "John", age: 30 };
const arr = [1, 2, 3, 4, 5];
const func = function () {
  return "Hello";
};

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof und); // undefined

console.log(typeof nul); // object
console.log(typeof sym); // symbol
console.log(typeof bigInt); // bigint

console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof func); // function

// Stack (Primitive) and Heap (Non-primitive)

// In JavaScript, the stack is used to hold primitive values and reference types are stored in the heap. When you declare a variable or a function, it is stored in the stack. When you create an object, the object is stored in the heap and a reference to the object is stored in the stack.

// When you pass a primitive value to a function, the function receives a copy of the value. When you pass a reference type to a function, the function receives a reference to the object. This means that when you change the object inside the function, the changes are reflected outside the function as well.

// Primitive data types are passed by value and non-primitive data types are passed by reference.

let x = 10;
let y = x;

x = 20;

console.log(x); // 20
console.log(y); // 10

let p = { name: "John" };
let q = p;

p.name = "Doe";

console.log(p.name); // Doe
console.log(q.name); // Doe

// In the above example, when we change the value of x, the value of y remains the same. This is because primitive data types are passed by value. When we change the value of p.name, the value of q.name also changes. This is because non-primitive data types are passed by reference.
