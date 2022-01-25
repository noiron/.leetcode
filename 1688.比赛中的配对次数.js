/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let result = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      const match = n / 2;
      result += match;
      n = match;
    } else {
      const match = (n - 1) / 2;
      result += match;
      n = match + 1;
    }
  }
  return result;
};
// @lc code=end
