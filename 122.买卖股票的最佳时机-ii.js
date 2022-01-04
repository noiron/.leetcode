/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;

  // 当天结束持有股票的累计最大收益
  let holdMax = -prices[0];
  // 当天结束持有不股票的累计最大收益
  let notHoldMax = 0;

  for (let i = 1; i < len; i++) {
    holdMax = Math.max(holdMax, notHoldMax - prices[i]);
    notHoldMax = Math.max(holdMax + prices[i], notHoldMax);
  }

  return notHoldMax;
};
// @lc code=end
