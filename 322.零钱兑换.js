/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(0);

  function change(amount) {
    if (amount < 0) return -1;
    if (amount === 0) return 0;

    if (memo[amount]) return memo[amount];

    let min = Infinity;
    for (const coin of coins) {
      const count = change(amount - coin);
      // -1 代表无解，那么继续检查下一个硬币
      if (count === -1) continue;
      if (count + 1 < min) {
        min = count + 1;
      }
    }
    memo[amount] = min === Infinity ? -1 : min;
    return memo[amount];
  }

  return change(amount);
};
// @lc code=end

console.log(coinChange([1, 2, 5], 100));
console.log(coinChange([2], 3));
console.log(coinChange([2, 5, 10, 1], 27));
