/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const ans = [];
  let i = 0;
  const len = s.length;

  while (i < len) {
    const start = i;

    // 找到单词的边界
    while (s.charAt(i) !== ' ' && i < len) {
      i++;
    }

    // 倒转单词，此时 i 是单词结尾的后一位
    for (let p = start; p < i; p++) {
      ans.push(s.charAt(start + (i - p) - 1));
    }

    while (s.charAt(i) === ' ' && i < len) {
      ans.push(' ');
      i++;
    }
  }
  return ans.join('');
};
// @lc code=end

console.log(reverseWords('fuck you'));
