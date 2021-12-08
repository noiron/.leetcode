/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 使用两个变量来代替数组
  let prev = 0;
  let curr = 0;

  for (const num of nums) {
    const max = Math.max(prev + num, curr);
    prev = curr;
    curr = max;
  }

  return curr;
};
// @lc code=end

