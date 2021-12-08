/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const len = nums.length;

  function find(target, index) {
    if (len === 0 || len < index + 1) {
      return 0;
    }
    if (len === index + 1) {
      if (nums[index] === 0 && target === 0) {
        return 2;
      }
      if (Math.abs(nums[index]) === Math.abs(target)) {
        return 1;
      }
    }

    const res1 = find(target - nums[index], index + 1);
    const res2 = find(target + nums[index], index + 1);
    return res1 + res2;
  }

  return find(target, 0);
};
// @lc code=end

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3) === 5);
// console.log(findTargetSumWays([1], 1));
console.log(findTargetSumWays([0, 0], 0) === 4);
