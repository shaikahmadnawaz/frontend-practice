/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 1;
  let results = 0;
  for (let i = 1; i < s.length; i++) {
    s[i] == s[0] ? count++ : count--;
    if (count == 0) results++;
  }
  return results;
};
