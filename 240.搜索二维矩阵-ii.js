/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
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

  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) {
      y--;
    } else {
      x++;
    }
  }

  return false;
};
// @lc code=end

