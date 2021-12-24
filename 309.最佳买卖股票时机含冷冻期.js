/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  const n = prices.length;

  const f = new Array(n).fill(0);
  // 以一天结束时的状态来看，有两种情况：持股和不持股
  // 当天持股时，第二天无所谓冷冻期（一种状态）
  // 当天不持股，需要区分第二天是否可买入（两种状态）

  // f[i] = [
  //   当前持有股票的累计最大收益，
  //   无股票且第二天不可买入的累计最大收益，
  //   无股票且第二天可买入的累计最大收益
  // ]；

  // 当天买入股票，累计收益 - prices[i]
  // 当天卖出股票，累计收益 + prices[i]
  f[0] = [-prices[0], 0, 0];

  for (let i = 1; i < n; i++) {
    const lastDay = f[i - 1];
    f[i] = [
      // 当天持有股票，则前一天也持有，或者今天买入
      Math.max(lastDay[0], lastDay[2] - prices[i]),
      // 当天卖出股票，则前一天持有股票
      lastDay[0] + prices[i],
      // 当天无股票，且第二天可买入，说明是以前卖出的
      Math.max(lastDay[1], lastDay[2]),
    ];
  }

  return Math.max(...f[n - 1]);
};
// @lc code=end
