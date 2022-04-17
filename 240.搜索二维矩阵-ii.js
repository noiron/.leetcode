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

  // 从矩阵的右上角开始
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    const num = matrix[x][y];
    if (num === target) return true;

    if (num > target) {
      // y 列剩余的所有元素都会大于 target
      y--;
    } else {
      // num < target
      // x 行剩余的所有元素都会小于 target
      x++;
    }
  }
  return false;
};
// @lc code=end

