/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let result = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    result = Math.max(result, prices[i] - minPrice);
  }
  return result;
};
// @lc code=end
