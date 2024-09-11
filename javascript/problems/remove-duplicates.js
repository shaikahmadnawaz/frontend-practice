const givenArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10];

const uniqueArray = removeDuplicates(givenArray);

console.log(uniqueArray);

function removeDuplicates(arr) {
  // Creates a new Set from the array to remove duplicates
  const uniqueSet = new Set(arr);
  // console.log(uniqueSet);
  // Converts the Set back to an array
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
