/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (!num) return '0';
  const isNegative = num < 0;
  if (isNegative) num = - num;

  let result = '';
  while (num !== 0) {
    const remainder = num % 7;
    result = remainder + result;
    num = Math.floor(num / 7);
  }
  return isNegative ? '-' + result : result;
};
// @lc code=end

console.log(
  convertToBase7(-7)
);