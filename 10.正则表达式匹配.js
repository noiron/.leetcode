/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;

  // dp[i][j]代表s的前i个字符和p的前j个字符是否匹配
  const dp = new Array(sLen + 1)
    .fill(0)
    .map(() => new Array(pLen + 1).fill(false));
  dp[0][0] = true;

  // 判断两个字符是否匹配
  // s的第i个字符和j的第j个字符
  function matches(i, j) {
    if (i === 0) return false;
    if (p[j - 1] === '.') return true;
    return s[i - 1] === p[j - 1];
  }

  for (let i = 0; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (matches(i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        if (matches(i, j)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }

  // console.log('dp: ', dp);
  return dp[sLen][pLen];
};
// @lc code=end

console.log(isMatch('a', 'ab*'));
console.log(isMatch('aaa', '.*') === true);
console.log(isMatch('aaca', 'ab*a*c*a') === true);
console.log(isMatch('aaa', 'ab*a*c*a') === true);
console.log(isMatch('aa', 'c*a*') === true);
console.log(isMatch('aa', 'a') === false);
console.log(isMatch('aa', 'a*') === true);
console.log(isMatch('ab', '.*') === true);
console.log(isMatch('aaaaaab', 'a*b') === true);
console.log(isMatch('mississippi', 'mis*is*p*.') === false);
