/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const lettersMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  function backtrack(combinations, digits) {
    if (!digits) {
      if (combinations) {
        result.push(combinations);
      }
      return;
    }

    const letters = lettersMap[digits[0]];
    for (const letter of letters) {
      backtrack(combinations + letter, digits.slice(1));
    }
  }

  backtrack('', digits);
  return result;
};
// @lc code=end

letterCombinations('23');
