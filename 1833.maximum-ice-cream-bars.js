/*
 * @lc app=leetcode id=1833 lang=javascript
 *
 * [1833] Maximum Ice Cream Bars
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  let i = 0;
  for (let sum = 0; i < costs.length; i++) {
    sum += costs[i];
    if (sum > coins) {
      break;
    }
  }
  return i;
};
// @lc code=end
