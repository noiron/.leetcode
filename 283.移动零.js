/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  // left 左侧的都是已处理的
  // right 及右侧的都是待处理的
  while (right < nums.length) {
    if (nums[right] !== 0) {
      temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
    right++;
  }
};
// @lc code=end
