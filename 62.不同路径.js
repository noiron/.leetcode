/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) return 1;

  // 生成一个矩阵，其中第一行和第一列为1
  const matrix = new Array(m).fill(0).map((row, index) => {
    const a = new Array(n);
    if (index === 0) {
      a.fill(1);
    } else {
      a.fill(0);
      a[0] = 1;
    }
    return a;
  });

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const top = matrix[i][j - 1];
      const left = matrix[i - 1][j];
      matrix[i][j] = top + left;
    }
  }
  return matrix[m - 1][n - 1];
};
// @lc code=end

uniquePaths(3, 7);
