/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const record = [1, 2];

  for (let i = 2; i < n; i++) {
    record.push(record[i - 1] + record[i - 2]);
  }
  return record[n - 1];
};
// @lc code=end

console.log(climbStairs(3) === 3);
console.log(climbStairs(45) === 1836311903);
