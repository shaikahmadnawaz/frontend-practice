// Strings are used for storing and manipulating text.

// Strings can be created as primitives, from string literals, or as objects, using the String() constructor.

const string1 = "Hello";

const string2 = "Hello";

const string3 = `Hello`;

console.log(string1, string2, string3); // Hello Hello Hello

// The string is a primitive data type. However, you can work with strings as objects if you want to. For example, you can use the built-in methods of the String object.

const string4 = "Hello";

const string5 = new String("Hello");

console.log(string4); // Hello

console.log(string5); // [String: 'Hello']

console.log(string4.length); // 5

console.log(string5.toUpperCase()); // HELLO

// Here string5.toUpperCase() returns the string in uppercase, because the toUpperCase() method is a method of the String object, it is the copy of the string primitive value "Hello". The string primitive value remains unchanged.

console.log(string5); // [String: 'Hello']

console.log(string5.length); // 5

console.log(string5[0]); // H

// String Methods

// There are many string methods available, some of the most commonly used ones are:

// charAt(): Returns the character at the specified index (position)

const str = "HELLO WORLD";

console.log(str.charAt(0)); // H

// indexOf(): Returns the index of (the position of) the first occurrence of a specified text in a string

console.log(str.indexOf("W")); // 6

// We can check string methods directly in the console. For example, if you type str. in the console, you will see a list of all the available string methods.

// substring(): Extracts the characters from a string, between two specified indices

console.log(str.substring(1, 4)); // ELL

// slice(): Extracts a part of a string and returns a new string

console.log(str.slice(1, 4)); // ELL

// replace(): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

console.log(str.replace("WORLD", "JavaScript")); // HELLO JavaScript

// trim(): Removes whitespace from both ends of a string

const str1 = " Hello World ";

console.log(str1.trim()); // Hello World

// split(): Splits a string into an array of substrings

console.log(str.split(" ")); // [ 'HELLO', 'WORLD' ]

// includes(): Checks whether a string contains the specified text

console.log(str.includes("WORLD")); // true
