/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let fives = 0;
  for (let i = 5; i <= n; i += 5) {
    let remain = i;
    while (remain > 0 && remain % 5 === 0) {
      fives++;
      remain = remain / 5;
    }
  }
  return fives;
};
// @lc code=end

console.log(trailingZeroes(30));
