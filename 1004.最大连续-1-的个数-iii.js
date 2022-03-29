/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let zeroCount = 0; // [left, right] 区间内0的个数
  let maxRange = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left++] === 0) {
        zeroCount--;
      }
    }
    maxRange = Math.max(maxRange, right - left + 1);
    right++;
  }

  return maxRange;
};
// @lc code=end

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
