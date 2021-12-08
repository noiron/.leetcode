/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [0];

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      // 奇数
      result[i] = result[i-1] + 1;
    } else {
      result[i] = result[i / 2];
    }
  }

  return result;
};
// @lc code=end

