/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  // dp[i][j] 代表在开区间 (i, j) 中能得到的最多硬币数
  const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const val = [1, ...nums, 1];

  // 为什么 i 要递减？？？
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        let sum = val[i] * val[k] * val[j];
        sum += dp[i][k] + dp[k][j];
        dp[i][j] = Math.max(dp[i][j], sum);
      }
    }
  }

  return dp[0][n + 1];
};
// @lc code=end
