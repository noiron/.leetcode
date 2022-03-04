/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      sum += (max - min);
    }
  }

  return sum;
};
// @lc code=end

