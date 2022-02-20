/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  for (let i = 0; i < bits.length; i++) {
    const bit = bits[i];

    if (bit === 0) {
      if (i === bits.length - 1) {
        return true;
      }
      continue;
    }

    if (i === bits.length - 2) return false;
    else {
      i++;
    }
  }
};
// @lc code=end
