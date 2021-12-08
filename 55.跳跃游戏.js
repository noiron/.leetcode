/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  if (len === 1) return true;
  let max = 0;

  for (let i = 0; i < len - 1; i++) {
    const dis = nums[i];
    if (i <= max && dis) {
      for (let j = 1; j <= dis; j++) {
        max = Math.max(max, i + j);
        if (max >= len - 1) return true;
      }
    }
  }
  return false;
};
// @lc code=end

console.log(canJump([2, 0]) === true);
console.log(canJump([2, 3, 1, 1, 4]) === true);
