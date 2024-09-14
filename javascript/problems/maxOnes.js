const consecutivesOnes = [1, 1, 0, 1, 1, 1];

const maxConsecutiveOnes = findMaxConsecutiveOnes(consecutivesOnes);

console.log(maxConsecutiveOnes);

function findMaxConsecutiveOnes(nums) {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentConsecutiveOnes++;
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
    } else {
      currentConsecutiveOnes = 0;
    }
  }
  return maxConsecutiveOnes;
}
