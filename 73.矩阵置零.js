/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  // 记录第一列中是否有0
  let flagCol0 = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  // console.log(matrix);
  // console.log(flagCol0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }

    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }

  // console.log(matrix);
};
// @lc code=end

console.log(
  setZeroes(
  [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  )
);