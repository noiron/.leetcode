/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let lastEnd = -1;
  let result = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const start = timeSeries[i];
    if (start > lastEnd) {
      result += duration;
    } else {
      result += (start + duration - 1 - lastEnd)
    }
    lastEnd = start + duration - 1;
  }

  return result;
};
// @lc code=end

findPoisonedDuration([0, 1], 1)
