/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const stack = [];
  const asteriskStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(i);
    } else if (char === '*') {
      asteriskStack.push(i);
    } else {
      if (stack.length) {
        stack.pop();
      } else if (asteriskStack.length) {
        asteriskStack.pop();
      } else {
        return false;
      }
    }
  }

  while (stack.length) {
    if (!asteriskStack.length) return false;

    const leftIndex = stack.pop();
    const asteriskIndex = asteriskStack.pop();
    // 将 * 视为 )
    if (leftIndex > asteriskIndex) return false;
  }

  return true;
};
// @lc code=end

