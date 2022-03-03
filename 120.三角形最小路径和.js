/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let lastRow = [...triangle[0]];
  for (let i = 1; i < triangle.length; i++) {
    const currentRow = [];
    for (let j = 0; j <= i; j++) {
      const value = triangle[i][j];
      if (j === 0) {
        currentRow[j] = lastRow[0] + value;
      } else if (j === i) {
        currentRow[j] = lastRow[j - 1] + value;
      } else {
        currentRow[j] = Math.min(lastRow[j], lastRow[j - 1]) + value;
      }
    }
    lastRow = [...currentRow];
  }
  return Math.min(...lastRow);
};
// @lc code=end

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
