/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

const { start } = require('repl');

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len <= 1) return s;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left + 1;
  };

  let start = 0;
  let end = 0;
  for (let i = 0; i < len; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);
    const maxLen = Math.max(len1, len2);
    console.log('maxLen: ', maxLen);
    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }
  return s.slice(start, end + 1);
};
// @lc code=end

console.log(longestPalindrome('bba'));
