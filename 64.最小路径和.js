/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const costs = new Array(m).fill(0).map(() => new Array(n).fill(0));
  costs[0][0] = grid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      const top = i === 0 ? Infinity : costs[i - 1][j];
      const left = j === 0 ? Infinity : costs[i][j - 1];
      costs[i][j] = Math.min(top, left) + grid[i][j];
    }
  }
  return costs[m - 1][n - 1];
};
// @lc code=end

console.log(
  minPathSum([[1,3,1],[1,5,1],[4,2,1]]    )
);