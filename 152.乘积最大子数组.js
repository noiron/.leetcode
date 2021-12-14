/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = nums[0];
  let max = nums[0], min = nums[0]; // 以当前数字为最后一个元素的乘积最值
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const a = num * max;
    const b = num * min;
    max = Math.max(a, b, num);
    min = Math.min(a, b, num);
    result = Math.max(max, result);
  }

  return result;
};
// @lc code=end

