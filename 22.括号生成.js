/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const current = [];

  function generate(openCount, closeCount) {
    if (current.length === n * 2) {
      result.push(current.join(''));
      return;
    }

    if (openCount < n) {
      current.push('(');
      generate(openCount + 1, closeCount);
      current.pop();
    }

    if (closeCount < openCount) {
      current.push(')');
      generate(openCount, closeCount + 1);
      current.pop();
    }
  }

  generate(0, 0);
  return result;
};
// @lc code=end

generateParenthesis(3);
