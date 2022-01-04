/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const n = s.length;

  if (n === 0) return true;

  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
