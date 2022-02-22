/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const currentRow = [1];
  for (let row = 1; row <= rowIndex; row++) {
    const lastRow = [...currentRow];
    currentRow[row] = 1;
    for (let col = 1; col < row; col++) {
      currentRow[col] = lastRow[col - 1] + lastRow[col];
    }
  }
  return currentRow;
};
// @lc code=end

console.log(getRow(4));
