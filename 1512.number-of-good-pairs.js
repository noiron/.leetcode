/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const current = nums[i];
    for (let j = i + 1; j < len; j++) {
      if (current === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
// @lc code=end
