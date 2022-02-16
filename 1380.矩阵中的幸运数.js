/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowMins = [];

  // 找出每一行的最小值
  for (let i = 0; i < m; i++) {
    rowMins.push(Math.min(...matrix[i]));
  }

  const colMaxs = [];
  // 找出每一列的最大值
  for (let j = 0; j < n; j++) {
    let max = -Infinity;
    for (let i = 0; i < m; i++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
    colMaxs.push(max);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = matrix[i][j]
      if (num === rowMins[i] && num === colMaxs[j]) {
        return [num];
      }
    }
  }
  return [];
};
// @lc code=end

