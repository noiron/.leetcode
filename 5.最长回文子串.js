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

  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);
    // 令 i = 4, len 可能为奇数或偶数
    // if len = 3, start = 4-(3-1)/2 = 3, end = 4+3/2 = 5，[3， 5]区间长度为3
    // if len = 4, start = 4-(4-1)/2 = 3, end = 4+4/2 = 6，[3, 6]区间长度为4
    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.slice(start, end + 1);

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // 当退出循环时，s[left] !== s[right]，需要减1
    return right - left - 1;
  }
};
// @lc code=end

console.log(longestPalindrome('bba'));
