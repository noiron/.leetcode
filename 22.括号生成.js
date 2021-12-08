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

  function generate(open, close) {
    if (current.length === 2 * n) {
      result.push(current.join(''));
      return;
    }

    if (open < n) {
      current.push('(');
      generate(open + 1, close);
      current.pop();
    }

    if (close < open) {
      current.push(')');
      generate(open, close + 1);
      current.pop();
    }
  }

  generate(0, 0);
  return result;
};
// @lc code=end

generateParenthesis(3);
