/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const chars = s.split('');

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (char === '{' || char === '(' || char === '[') {
      stack.push(char);
    } else {
      lastChar = stack.pop();
      if (
        (lastChar === '{' && char === '}') ||
        (lastChar === '(' && char === ')') ||
        (lastChar === '[' && char === ']')
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return !stack.length;
};
// @lc code=end
