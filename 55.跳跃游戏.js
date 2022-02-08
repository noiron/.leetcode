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
  // 当前能达到的最远位置
  let max = 0;

  for (let i = 0; i < len; i++) {
    const currentDistance = nums[i];

    // i > max 表示当前的位置i是不可达到的
    if (i > max) return false;
    
    if (currentDistance === 0) continue;
    for (let j = 1; j <= currentDistance; j++) {
      max = Math.max(max, i + j);
      if (max >= len - 1) return true;
    }
  }
  return false;
};
// @lc code=end

console.log(canJump([2, 0]) === true);
console.log(canJump([2, 3, 1, 1, 4]) === true);
console.log(canJump([3, 2, 1, 0, 4]) === false);
