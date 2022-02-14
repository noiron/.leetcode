/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1 - obstacleGrid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 障碍物的到达路径为0
      if (obstacleGrid[i][j] === 1) continue;

      // 可以从上方或左侧达到
      if (i >= 1) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j >= 1) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

uniquePathsWithObstacles([[0], [0]]);
