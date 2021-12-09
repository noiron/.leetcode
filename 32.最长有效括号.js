/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0;
  const dp = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    // 有效字符串不可能以 '(' 结尾
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = i >= 2 ? dp[i - 2] + 2 : 2;
      } else if (s[i - dp[i - 1] - 1] === '(') {
        dp[i] =
          i - dp[i - 1] >= 2
            ? dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
            : dp[i - 1] + 2;
      }
    }
    max = Math.max(max, dp[i]);
  }

  return max;
};
// @lc code=end

console.log(longestValidParentheses('()(())'));
