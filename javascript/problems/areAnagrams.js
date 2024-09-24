const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of str1) {
    console.log(val);
    console.log(frequencyCounter1[val]);
    console.log(frequencyCounter1[val] || 0);
    console.log(frequencyCounter1[val] || 0) + 1;
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}
