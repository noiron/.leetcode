/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let maxSize = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const current = +matrix[i][j];
      if (i === 0 || j === 0) {
        // 处理第一行和第一列
        dp[i][j] = current;
        maxSize = Math.max(maxSize, dp[i][j]);
      } else {
        if (dp[i - 1][j - 1] === 0) {
          dp[i][j] = current;
          maxSize = Math.max(maxSize, dp[i][j]);
        } else if (current === 1) {
          // 检查同一行和同一列
          const lastSize = dp[i - 1][j - 1];
          let num = 0; // 记录在这一行/列上检查多少了多少个数，最多为 lastSize
          let found = false;
          while (num <= lastSize && !found) {
            if (+matrix[i][j - num] === 0 || +matrix[i - num][j] === 0) {
              found = true;
            } else {
              num++;
            }
          }

          dp[i][j] = num;
          maxSize = Math.max(maxSize, dp[i][j]);
        }
      }
    }
  }

  // console.log(dp);

  return maxSize * maxSize;
};
// @lc code=end

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);
console.log(
  maximalSquare([
    ['0', '0', '0', '1'],
    ['1', '1', '0', '1'],
    ['1', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
  ])
);
console.log(
  maximalSquare([
    ['1', '1'],
    ['1', '1'],
  ])
);
