/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let left = 0;
  let right = 0;
  while (left <= right && right < s.length) {
    const currentStr = s.slice(left, right);
    const currentChar = s[right];
    const index = currentStr.indexOf(currentChar);
    if (index > -1) {
      left += index + 1;
    } else {
      result = Math.max(right - left + 1, result);
      right++;
    }
  }

  return result;
};
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'));
