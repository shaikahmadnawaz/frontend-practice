const num = 10;

console.log(typeof num); // number

console.log(num); // 10

console.log(num.toString()); // 10

console.log(num.toString().length); // 2

console.log(typeof num.toString()); // string

const num1 = 10;

console.log(num1.toFixed(2)); // 10.00

console.log(num1.toPrecision(2)); // 10

const num2 = 9.656;

console.log(num2.toFixed(0)); // 10

const thousands = 1000000;

console.log(thousands.toLocaleString()); // 1,000,000

console.log(thousands.toLocaleString("en-IN")); // 10,00,000

// Math

console.log(Math); // Object [Math] {}

console.log(Math.abs(-10)); // 10

console.log(Math.ceil(10.1)); // 11

console.log(Math.floor(10.9)); // 10

console.log(Math.round(10.5)); // 11

console.log(Math.max(10, 20, 30)); // 30

console.log(Math.min(10, 20, 30)); // 10

console.log(Math.pow(2, 3)); // 8

console.log(Math.sqrt(16)); // 4

console.log(Math.random()); // 0.123456789

console.log(Math.random() * 10); // 1.23456789

console.log(Math.random() * 100); // 12.3456789
