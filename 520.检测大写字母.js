/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  function isCaps(character) {
    return character.toUpperCase() === character;
  }

  let lastCharCaps = isCaps(word[0]);
  for (let i = 1; i < word.length; i++) {
    const currentCharCaps = isCaps(word[i]);
    if (currentCharCaps) {
      // 当前字母大写时，前一个字母必须大写
      if (!lastCharCaps) {
        return false;
      }
    } else if (i > 1 && lastCharCaps) {
      return false;
    }
    lastCharCaps = currentCharCaps;
  }

  return true;
};
// @lc code=end
