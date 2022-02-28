/*
 * @lc app=leetcode.cn id=2016 lang=javascript
 *
 * [2016] 增量元素之间的最大差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let min = nums[0];
  let diff = 0;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    diff = Math.max(diff, num - min);
    min = Math.min(min, num);
  } 
  return diff || -1;
};
// @lc code=end

