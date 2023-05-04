/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let temp = Math.max(...nums); // get max num in the array
  let res = 0;

  for (let i = 0; i < k; i++) {
    res += temp; // add the temp number to res
    temp++; // increase temp by one
  }

  return res;
};
