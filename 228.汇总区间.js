/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) return [];

  const result = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    const last = result.at(-1);
    if (nums[i] === last.at(-1) + 1) {
      last[1] = nums[i];
    } else {
      result.push([nums[i]]);
    }
  }

  return result.map((range) => {
    if (range.length === 1) return range[0] + '';
    return `${range[0]}->${range[1]}`;
  });
};
// @lc code=end
