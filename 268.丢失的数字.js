/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  let sum = (1 + n) * n / 2;
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }
  return sum;
};
// @lc code=end

console.log(
  missingNumber([3, 0, 1])
);
