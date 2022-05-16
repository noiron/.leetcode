/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length).fill(1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      // s[i] === '0' 时，只存在一种解码方式
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        dp[i] = dp[i - 2] ?? 1;
      } else {
        return 0;
      }
    } else if (s[i - 1] === '1') {
      // s[i-1] === '1' 时，可以选择将 s[i-1], s[i] 合并或分开
      dp[i] = dp[i - 1] + (dp[i - 2] ?? 1);
    } else if (s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6') {
      dp[i] = dp[i - 1] + (dp[i - 2] ?? 1);
    } else {
      dp[i] = dp[i - 1] ?? 1;
    }
  }
  return dp[s.length - 1];
};
// @lc code=end

console.log(
  numDecodings('10')
);
