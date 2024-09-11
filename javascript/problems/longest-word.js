const sentence = "I love JavaScript";
const longestWord = findLongestWord(sentence);

console.log(longestWord); // expected output: "JavaScript"

function findLongestWord(sentence) {
  // Splits the sentence into an array of words
  const words = sentence.split(" ");
  let longestWord = "";

  // Iterates over each word in the words array
  for (let word of words) {
    if (word.length > longestWord.length) {
      // Updates the longestWord if the current word is longer
      longestWord = word;
    }
  }

  return longestWord;
}
