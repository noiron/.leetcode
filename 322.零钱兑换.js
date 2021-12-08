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

  function change(left) {
    if (left < 0) {
      return -1;
    }
    if (left === 0) {
      return 0;
    }
    if (memo[left] !== 0) return memo[left];
    let min = Infinity;
    for (const coin of coins) {
      const count = change(left - coin);
      if (count >= 0 && count < min) {
        min = count + 1;
      }
    }
    memo[left] = (min === Infinity) ? -1 : min;
    return memo[left];
  }

  change(amount);
  return memo[amount];
};
// @lc code=end

console.log(coinChange([1, 2, 5], 100));
console.log(coinChange([2], 3));
