/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const len = nums.length;
  if (len < 3) return false;

  // leftMin 中保存位置 i 及其左侧的最小值
  const leftMin = new Array(len).fill(0);
  leftMin[0] = nums[0];
  for (let i = 1; i < len; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
  }

  // rightMax 中保存位置 i 及其右侧的最大值
  const rightMax = new Array(len).fill(0);
  rightMax[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }

  for (let i = 1; i < len - 1; i++) {
    if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
      return true;
    }
  }
  return false;
};
// @lc code=end
