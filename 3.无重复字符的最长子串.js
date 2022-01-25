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
  let left = 0; // 当前字符串的第一个字符的位置
  let right = 0; // 当前字符串之后的第一个位置
  while (left <= right && right < s.length) {
    // 如果 left = right，则 currentStr 为空
    const currentStr = s.slice(left, right);
    const currentChar = s[right];
    const index = currentStr.indexOf(currentChar);
    if (index > -1) {
      // 缩短左侧边界，注意这里是在原来的 left 基础上加上 (index + 1)
      left += index + 1;
    } else {
      result = Math.max(currentStr.length + 1, result);
      right++;
    }
  }

  return result;
};
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbbbb'));
