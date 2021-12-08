/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const leftProduct = new Array(len).fill(1); // 记录当前元素的左侧所有元素的乘积
  const rightProduct = new Array(len).fill(1); // 记录当前元素的右侧所有元素的乘积

  for (let i = 1; i < len; i++) {
    leftProduct[i] = leftProduct[i-1] * nums[i-1];
  }

  for (let i = len - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i+1] * nums[i+1];
  }

  const result = [];
  for (let i = 0; i < len; i++) {
    result[i] = leftProduct[i] * rightProduct[i];
  }
  return result;
};
// @lc code=end

productExceptSelf([1, 2, 3, 4]);
