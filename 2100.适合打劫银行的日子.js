/*
 * @lc app=leetcode.cn id=2100 lang=javascript
 *
 * [2100] 适合打劫银行的日子
 */

// @lc code=start
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const len = security.length;

  /** [start, end] 为非递减的 */
  function isIncrease(start, end) {
    if (end >= len) return false;

    for (let i = start; i < end; i++) {
      if (security[i] > security[i + 1]) return false;
    }
    return true;
  }

  function isDecrease(start, end) {
    if (end >= len) return false;

    for (let i = start; i < end; i++) {
      if (security[i] < security[i + 1]) return false;
    }
    return true;
  }

  const result = [];
  for (let i = 0; i < len - time; i++) {
    if (!isDecrease(i, i + time)) {
      continue;
    }
    if (!isIncrease(i + time, i + time * 2)) {
      continue;
    }
    result.push(i + time);
  }

  return result;
};
// @lc code=end


goodDaysToRobBank([5,3,3,3,5,6,2], 2);