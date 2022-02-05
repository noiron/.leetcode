/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let pointer = 0;

  // 将所有的0移至开头，遍历结束后，从 0 ~ pointer-1 中的元素是0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      pointer++;
    }
  }

  // 将所有的1移至0的后面，这次遍历结束后，pointer指向最后一个1的下一位
  for (let i = pointer; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      pointer++;
    }
  }
};
// @lc code=end

sortColors([2, 0, 2, 1, 1, 0]);
