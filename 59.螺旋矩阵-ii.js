/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let row = 0,
    col = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let current = 1;
  let dirIdx = 0;
  while (current <= n * n) {
    matrix[row][col] = current++;
    let direction = directions[dirIdx];
    let nextRow = row + direction[0];
    let nextCol = col + direction[1];
    // 顺时针更换方向
    if (
      nextRow >= n ||
      nextCol >= n ||
      nextRow < 0 ||
      nextCol < 0 ||
      matrix[nextRow][nextCol]
    ) {
      dirIdx = (dirIdx + 1) % 4;
      direction = directions[dirIdx];
      nextRow = row + direction[0];
      nextCol = col + direction[1];
    }
    row = nextRow;
    col = nextCol;
  }
  return matrix;
};
// @lc code=end

generateMatrix(5);
