/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reverseAbs = (_) => Number(_.toString().split('').reverse().join(''));
  const result = x > 0 ? reverseAbs(x) : -reverseAbs(-x);
  const max = Math.pow(2, 31);
  if (result < -max || result > max - 1) {
    return 0;
  }
  return result;
};
// @lc code=end
