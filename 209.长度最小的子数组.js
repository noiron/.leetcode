/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let result = 0;

  for (let start = 0, end = 0; end < nums.length; end++) {
    sum += nums[end];

    if (sum >= target) {
      let current = end - start + 1;
      while (sum - nums[start] >= target) {
        sum -= nums[start];
        start++;
        current--;
      }

      if (result === 0) {
        result = current;
      } else {
        result = Math.min(current, result);
      }
    }
  }

  return result;
};
// @lc code=end
