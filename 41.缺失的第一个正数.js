/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length;
  const list = new Array(len + 2).fill(0);

  for (let i = 0; i < nums.length; i++) {
    // eg. 如果这个值是5，就将其放到 list[5] 中
    if (nums[i] >= 0) {
      list[nums[i]] = nums[i];
    } 
  }

  for (let i = 1; i < len + 2; i++) {
    if (list[i] === 0) return i;
  }
};
// @lc code=end

