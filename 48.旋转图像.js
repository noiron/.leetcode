/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // 垂直翻转
  for (let i = 0; i < n / 2; i++) {
    [matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]];
  }

  // 主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
};
// @lc code=end

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

rotate([
  [1, 2],
  [3, 4],
]);
