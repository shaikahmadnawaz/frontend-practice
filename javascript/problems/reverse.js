const givenString = "Hello World";

const reversedString = reverseString(givenString);

console.log(reversedString);

function reverseString(str) {
  // Splits the string into an array of characters, reverses the array, and joins it back into a string
  // return str.split("").reverse().join("");
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
