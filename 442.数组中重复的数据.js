/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const key = Math.abs(nums[i]) - 1;
    if (nums[key] < 0) {
      result.push(key + 1);
    } else {
      nums[key] = -nums[key];
    }
  }
  return result;
};
// @lc code=end

findDuplicates([4,3,2,7,8,2,3,1]);

