/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const order = [];

  let left = 0;
  let right = columns - 1;
  let top = 0;
  let bottom = rows - 1;

  let numElement = rows * columns;

  while (numElement > 0) {
    // 向右移动
    for (let i = left; i <= right && numElement > 0; i++) {
      order.push(matrix[top][i]);
      numElement--;
    }
    top++; // 删除第一行

    // 向下移动
    for (let i = top; i <= bottom && numElement > 0; i++) {
      order.push(matrix[i][right]);
      numElement--;
    }
    right--; // 删除最右一列

    // 向左移动
    for (let i = right; i >= left && numElement > 0; i--) {
      order.push(matrix[bottom][i]);
      numElement--;
    }
    bottom--;

    // 向上移动
    for (let i = bottom; i >= top && numElement > 0; i--) {
      order.push(matrix[i][left]);
      numElement--;
    }
    left++;
  }

  return order;
};
// @lc code=end
