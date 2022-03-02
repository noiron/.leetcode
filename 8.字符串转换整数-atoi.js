/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let accepted = '';
  let isNegative = false;

  let i = 0;
  // 检查是否有前导空格
  while (s[i] === ' ') {
    i++;
  }

  // 检查正负号
  if (s[i] === '-') {
    isNegative = true;
    i++;
  } else if (s[i] === '+') {
    i++;
  }

  // 读取直到非数字
  while (/\d/.test(s[i])) {
    accepted += s[i];
    i++;
  }
  if (isNegative) {
    return Math.max(-(2 ** 31), -accepted);
  }
  return Math.min(2 ** 31 - 1, accepted)
};
// @lc code=end

myAtoi('   42Asdsd');
