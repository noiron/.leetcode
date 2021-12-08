/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [];
  for (let i = 0; i + k <= nums.length; i++) {
    let current = nums.slice(i, i + k);
    current.sort((a, b) => b - a)
    result.push(current[0]);
  }
  return result;
};
// @lc code=end

