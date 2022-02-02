/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// https://leetcode-cn.com/problems/increasing-triplet-subsequence/solution/c-xian-xing-shi-jian-fu-za-du-xiang-xi-jie-xi-da-b/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const len = nums.length;
  if (len < 3) return false;

  let small = nums[0];
  let mid = Infinity;
  for (let i = 1; i < len; i++) {
    const num = nums[i];
    if (num > mid) return true;
    if (num <= small) {
      small = num;
      continue;
    }
    if (num <= mid) {
      mid = num;
    }
  }
  return false;
};
// @lc code=end
