/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    if (target > matrix[i][n-1]) continue;

    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) return true;
    }
    return false;
  }

  return false;
};
// @lc code=end

