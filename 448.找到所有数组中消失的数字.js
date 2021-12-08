/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const index = nums[i] > 0 ? nums[i] - 1 : -nums[i] - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  const result = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
};
// @lc code=end

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
