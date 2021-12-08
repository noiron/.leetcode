/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const len = nums.length;
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  if (sum % 2 === 1) return false;

  const target = sum / 2;
  const dp = new Array(len).fill(0).map(() => new Array(target + 1).fill(false));

  dp[0][0] = true;
  if (nums[0] <= target) {
    dp[0][nums[0]] = true;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }

    if (dp[i][target]) {
      return true;
    }
  }

  return dp[len - 1][target];
};
// @lc code=end
