const givenString = "madam";

const palindromeString = isPalindrome(givenString);

console.log(palindromeString);

function isPalindrome(str) {
  // Reverses the string and checks if it is the same as the original string
  const reversedString = str.split("").reverse().join("");
  // Returns true if the string is a palindrome, otherwise false
  return str === reversedString;
}
